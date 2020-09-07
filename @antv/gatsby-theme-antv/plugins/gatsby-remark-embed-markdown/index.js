const fs = require('fs');
const normalizePath = require('normalize-path');
const unified = require('unified');
const parse = require('remark-parse');

module.exports = (_ref, _temp) => {
  const { markdownAST } = _ref;
  const FLAG = 'markdown:';

  let { directory } = _temp;
  if (!directory || !fs.existsSync(directory)) {
    return markdownAST;
  }
  if (!directory.endsWith('/')) {
    directory += '/';
  }

  const traverseAst = (ast) => {
    const nodes = ast.children;
    for (let i = nodes.length; i > 0; i -= 1) {
      const node = nodes[i];
      if (node && Array.isArray(node.children)) {
        const c = node.children[0];
        if (c && c.type === 'inlineCode' && c.value.startsWith(FLAG)) {
          const file = c.value.substr(FLAG.length);
          const path = normalizePath(`${directory}${file}`);
          if (fs.existsSync(path)) {
            const code = fs.readFileSync(path, 'utf8');
            let mdAst = unified().use(parse).parse(code);
            mdAst = traverseAst(mdAst);
            nodes.splice(i, 1, ...mdAst.children);
          }
        }
      }
    }
    return ast;
  };

  return traverseAst(markdownAST);
};
