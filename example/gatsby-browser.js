window.g2 = require('./src/index.ts').default;

// gatsby-browser.js
exports.shouldUpdateScroll = ({ routerProps, prevRouterProps }) => {
  if (routerProps.location.hash) {
    return false;
  }
  const { pathname: prevPathname } = prevRouterProps.location;
  const { pathname: currentPathname } = routerProps.location;
  // 演示里的 Tabs 切换，不进行页面滚动
  if (
    prevPathname.includes('/examples/') &&
    currentPathname.includes('/examples/')
  ) {
    const prevPathes = prevPathname.split('/');
    const currentPathes = currentPathname.split('/');
    if (prevPathes.length === currentPathes.length) {
      return (
        prevPathes.slice(0, -1).join('/') !==
        currentPathes.slice(0, -1).join('/')
      );
    }
    const compareLength = Math.min(prevPathes.length, currentPathes.length);
    return (
      prevPathes.slice(0, compareLength).join('/') !==
      currentPathes.slice(0, compareLength).join('/')
    );
  }
  return true;
};
