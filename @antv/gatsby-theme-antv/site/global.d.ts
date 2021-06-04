/// <reference types='monaco-editor/monaco'/>

declare module '*.less';
declare module '@babel/standalone';

interface Window {
  require: any; // 使用 amd 方式从 CDN 加载 monaco-editor
}
