const fs = require('fs');
const normalizePath = require('normalize-path');
const unified = require('unified');
const parse = require('remark-parse');

function removeThematicBreak(code) {
  const symbol = '---';
  const firstIndex = code.indexOf(symbol);
  const secondIndex = code.indexOf(symbol, symbol.length);
  if (firstIndex === 0 && secondIndex > 0) {
    return code.slice(secondIndex + symbol.length);
  }
  return code;
}

module.exports = (_ref, _temp) => {
  const {
    markdownAST,
    markdownNode: { fileAbsolutePath },
  } = _ref;
  const FLAG = 'markdown:';

  let { directory } = _temp;
  if (!directory || !fs.existsSync(directory)) {
    return markdownAST;
  }
  if (!directory.endsWith('/')) {
    directory += '/';
  }

  const traverseAst = (ast, pathList) => {
    const nodes = ast.children;
    for (let i = nodes.length - 1; i >= 0; i -= 1) {
      const node = nodes[i];
      if (node && Array.isArray(node.children)) {
        const c = node.children[0];
        if (c && c.type === 'inlineCode' && c.value.startsWith(FLAG)) {
          const file = c.value.substr(FLAG.length);
          const path = normalizePath(`${directory}${file}`);
          if (pathList.includes(path)) {
            // eslint-disable-next-line no-console
            console.error(`there is circular embedding,path: ${path}`);
          } else if (fs.existsSync(path)) {
            let code = fs.readFileSync(path, 'utf8');
            code = removeThematicBreak(code);
            let mdAst = unified().use(parse).parse(code);
            mdAst = traverseAst(mdAst, [...pathList, path]);
            nodes.splice(i, 1, ...mdAst.children);
          }
        }
      }
    }
    return ast;
  };

  return traverseAst(markdownAST, [fileAbsolutePath]);
};
