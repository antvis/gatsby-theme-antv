/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

export interface MonacoLoaderConfig {
  useLocal: boolean;
  requireConfig: {
    paths: {
      vs: string;
      [key: string]: string;
    };
    baseUrl?: string;
    'vs/nls'?: {
      availableLanguages?: Record<string, string>;
    };
  };
}

export const DefaultLoaderConfig: MonacoLoaderConfig = {
  useLocal: false,
  requireConfig: {
    'vs/nls': {
      availableLanguages: {
        // '*': 'zh-cn', // 支持 local 设置，默认英文，zh-cn 中文
      },
    },
    paths: {
      vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.21.0/min/vs',
    },
  },
};

export class MonacoLoader {
  static loaded = false;

  static readyResolver?: () => void;

  static ready?: Promise<void>;

  protected readonly config: MonacoLoaderConfig = DefaultLoaderConfig;

  protected vsRequire: any;

  getLoader(context: any): Promise<any> {
    MonacoLoader.ready = new Promise<void>((resolve) => {
      MonacoLoader.readyResolver = resolve;
    });
    const originalRequire = context.require;
    return new Promise<any>((resolve) => {
      const vsLoader = document.createElement('script');
      vsLoader.type = 'text/javascript';
      vsLoader.charset = 'utf-8';
      const srcParent = this.config.useLocal
        ? './vs'
        : this.config.requireConfig.paths.vs;
      vsLoader.src = srcParent.endsWith('/')
        ? `${srcParent}loader.js`
        : `${srcParent}/loader.js`;
      vsLoader.addEventListener('load', () => {
        // Save Monaco's amd require and restore the original require
        const amdRequire = context.require;
        if (originalRequire) {
          context.require = originalRequire;
        }
        this.vsRequire = amdRequire;
        this.vsRequire.config(this.config.requireConfig);
        resolve(amdRequire);
      });
      document.body.appendChild(vsLoader);
    });
  }

  loadMonaco(vsRequire: any = this.vsRequire): Promise<void> {
    return new Promise<void>((resolve) => {
      if (!vsRequire) {
        resolve();
      }
      vsRequire(['vs/editor/editor.main'], () => {
        MonacoLoader.loaded = true;
        if (MonacoLoader.readyResolver) {
          MonacoLoader.readyResolver();
        }
        resolve();
      });
    });
  }
}

export async function loadMonacoEditorComponent(): Promise<
  typeof import('./MonacoEditor')
> {
  if (!MonacoLoader.loaded) {
    if (!MonacoLoader.ready) {
      const loader = new MonacoLoader();
      await loader.getLoader(window);
      await loader.loadMonaco();
    } else {
      await MonacoLoader.ready;
    }
  }
  return import('./MonacoEditor');
}
