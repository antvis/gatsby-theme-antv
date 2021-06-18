const React = require('react');

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="polyfill"
      src="https://b.alicdn.com/s/polyfill.min.js?features=default,es2015,es2016,es2017,fetch,IntersectionObserver,NodeList.prototype.forEach,NodeList.prototype.@@iterator,EventSource,MutationObserver,ResizeObserver,HTMLCanvasElement.prototype.toBlob"
    />,
    // babel standalone 长期不变，直接使用 cdn 地址，提升缓存命中！写死版本，不然可能出现其他的问题
    // gatsby start 没问题，但是 build 报错
    // gatsby 开发环境和生成环境完全不一样，不可思议！！！
    // <script
    //   key="babel-standalone"
    //   src="https://unpkg.com/@babel/standalone@7.12.6/babel.min.js"
    // />,
  ]);
};
