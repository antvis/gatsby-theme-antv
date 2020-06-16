declare module '*.less' {
  const content: {
    [className: string]: string;
  };
  export default content;
}

declare module '*.svg' {
  export default React.ReactComponent;
}

declare module 'ptz-i18n';

declare module 'i18next-fetch-backend';

declare module '@babel/standalone';

declare module 'codesandbox/lib/api/define' {
  export function getParameters({ files: object }): string;
}

declare module 'docsearch.js';

declare module 'video-react';

declare module 'rehype-react';

interface Document {
  exitFullscreen: () => void;
  mozCancelFullScreen: () => void;
  webkitExitFullscreen: () => void;
  fullscreenElement: () => void;
  mozFullScreenElement: () => void;
  webkitFullscreenElement: () => void;
}
