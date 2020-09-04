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

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  options,
) => {
  const { createNode } = actions;
  const result = {};
  const apiPath = path.resolve(options.path, 'api');
  if (!apiPath || !fs.existsSync(apiPath)) {
    return;
  }

  fs.readdir(apiPath, (err, files) => {
    if (err) {
      return;
    }
    files.forEach((file) => {
      const content = fs.readFileSync(path.resolve(apiPath, file));
      let mdAst = unified().use(parse).parse(content);
      mdAst = parseEmbedMarkdown(
        {
          markdownAST: mdAst,
        },
        {
          directory: options.path,
        },
      );
      result[file] = ast2json(mdAst);
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
  });
};
