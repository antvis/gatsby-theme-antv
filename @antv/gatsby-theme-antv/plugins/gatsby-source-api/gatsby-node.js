const fs = require('fs');
const path = require('path');
const unified = require('unified');
const parse = require('remark-parse');

const toHAST = require(`mdast-util-to-hast`);
const stripPosition = require(`unist-util-remove-position`);
const hastReparseRaw = require(`hast-util-raw`);
const defaultHandler = require(`mdast-util-to-hast/lib/handlers/code`);
const _ = require('lodash');
const parseEmbedMarkdown = require('../gatsby-remark-embed-markdown');

function handler(h, node) {
  const result = defaultHandler(h, node);
  if (node.meta && result.children[0]) {
    result.children[0].properties.dataMeta = node.meta;
  }
  return result;
}

function markdownASTToHTMLAst(ast) {
  if (!Array.isArray(ast) || ast.length === 0) {
    return null;
  }
  const root = {
    type: 'root',
    children: ast,
  };
  const hast = toHAST(root, {
    allowDangerousHTML: true,
    handlers: {
      code: handler,
    },
  });
  const strippedAst = stripPosition(_.clone(hast), true);
  return hastReparseRaw(strippedAst);
}

function getHeadingDepth(node) {
  if (node && node.type === 'heading') {
    return node.depth;
  }
  return 0;
}

function getTitle(node) {
  if (node.children && Array.isArray(node.children) && node.children[0]) {
    return node.children[0].value || '';
  }
  return '';
}

function isDescriptionNode(node) {
  const childs = node.children;
  if (Array.isArray(childs)) {
    const first = childs[0];
    return first && first.type === 'html' && first.value === '<description>';
  }
  return false;
}

function parseDescription(node) {
  const res = {};
  node.children.forEach((c) => {
    if (c.type === 'strong') {
      res.require = c.children[0].value;
    } else if (c.type === 'emphasis') {
      const type = c.children[0].value;
      if (type !== 'default:') {
        res.type = type;
      }
    } else if (c.type === 'inlineCode') {
      res.default = c.value;
    }
  });
  return res;
}

function ast2json(ast) {
  const nodes = ast.children;
  const result = [];
  const temp = [];
  let item = null;
  let depth = 0;

  function addNodeToResult(node, count) {
    let c = count;
    let r = result;
    while (c > 2) {
      r = r[r.length - 1].children;
      c -= 1;
    }
    r.push(node);
  }

  for (let i = 0, len = nodes.length; i < len; i += 1) {
    if (getHeadingDepth(nodes[i]) > 0) {
      item = {
        title: getTitle(nodes[i]),
        options: {},
        children: [],
      };
      depth = getHeadingDepth(nodes[i]);
      temp.length = 0;
    } else {
      temp.push(nodes[i]);
      if (item && isDescriptionNode(nodes[i])) {
        item.options = parseDescription(nodes[i]);
      }
    }
    if (item && (i + 1 >= len || getHeadingDepth(nodes[i + 1]) > 0)) {
      item.content = markdownASTToHTMLAst(temp);
      addNodeToResult(item, depth);
    }
  }
  return result;
}

const readDirectory = (entry, callback) => {
  const dirInfo = fs.readdirSync(entry);
  dirInfo.forEach((item) => {
    const location = path.join(entry, item);
    const stat = fs.statSync(location);
    if (stat.isDirectory()) {
      readDirectory(location, callback);
    } else {
      callback(location);
    }
  });
};

const getSlug = (location) => {
  const index = location.indexOf('/examples/');
  if (index !== -1) {
    const str = location.slice(index);
    const arr = str.split('.');
    if (arr.length === 3) {
      return `/${arr[1]}${arr[0]}`;
    }
  }
  return location;
};

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  options,
) => {
  const { createNode } = actions;
  const result = {};
  const { examplesPath, docsPath } = options;

  if (
    !examplesPath ||
    !fs.existsSync(examplesPath) ||
    !docsPath ||
    !fs.existsSync(docsPath)
  ) {
    return;
  }

  readDirectory(examplesPath, (location) => {
    if (/\/API\.\w{2}\.md/.test(location)) {
      const content = fs.readFileSync(path.resolve(location));
      let mdAst = unified().use(parse).parse(content);
      mdAst = parseEmbedMarkdown(
        {
          markdownAST: mdAst,
        },
        {
          directory: docsPath,
        },
      );
      result[getSlug(location)] = ast2json(mdAst);
    }
  });

  const nodeMeta = {
    id: createNodeId('apiStructure'),
    internal: {
      type: `ApiStructure`,
      mediaType: `application/json`,
      content: JSON.stringify(result),
      contentDigest: createContentDigest(result),
    },
  };
  createNode(nodeMeta);
};
