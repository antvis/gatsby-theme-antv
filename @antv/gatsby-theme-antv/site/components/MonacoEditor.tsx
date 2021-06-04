/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/static-property-placement */

// Copy from https://github.com/react-monaco-editor/react-monaco-editor/blob/master/src/index.ts
// Simple component packaging for monaco editor

import * as PropTypes from 'prop-types';
import * as React from 'react';

export function noop(): void {}

export type ChangeHandler = (
  value: string,
  event: monaco.editor.IModelContentChangedEvent,
) => void;

export type EditorDidMount = (
  editor: monaco.editor.IStandaloneCodeEditor,
  monaco: any,
) => void;

export type EditorConstructionOptions = NonNullable<
  Parameters<typeof monaco.editor.create>[1]
>;

export type EditorWillMount = (monaco: any) => void | EditorConstructionOptions;

export interface MonacoEditorBaseProps {
  width?: string | null;
  height?: string | null;
  defaultValue?: string;
  language?: string;
  theme?: string | null;
  className?: string | null;
}

export interface MonacoEditorProps extends MonacoEditorBaseProps {
  value?: string | null;
  options?: monaco.editor.IStandaloneEditorConstructionOptions;
  overrideServices?: monaco.editor.IEditorOverrideServices;
  editorDidMount?: EditorDidMount;
  editorWillMount?: EditorWillMount;
  onChange?: ChangeHandler;
}

export class MonacoEditor extends React.Component<MonacoEditorProps> {
  static propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    language: PropTypes.string,
    theme: PropTypes.string,
    options: PropTypes.object,
    overrideServices: PropTypes.object,
    editorDidMount: PropTypes.func,
    editorWillMount: PropTypes.func,
    onChange: PropTypes.func,
    className: PropTypes.string,
  };

  static defaultProps = {
    width: '100%',
    height: '100%',
    value: null,
    defaultValue: '',
    language: 'javascript',
    theme: null,
    options: {},
    overrideServices: {},
    editorDidMount: noop,
    editorWillMount: noop,
    onChange: noop,
    className: null,
  };

  editor?: monaco.editor.IStandaloneCodeEditor;

  private containerElement?: HTMLDivElement;

  private _subscription?: monaco.IDisposable;

  private __prevent_trigger_change_event?: boolean;

  constructor(props: MonacoEditorProps) {
    super(props);
    this.containerElement = undefined;
  }

  componentDidMount(): void {
    this.initMonaco();
  }

  componentDidUpdate(prevProps: MonacoEditorProps): void {
    const {
      value,
      language,
      theme,
      height,
      options,
      width,
      className,
    } = this.props;

    if (!this.editor) {
      return;
    }
    const model = this.editor.getModel();
    if (model && value != null && value !== model.getValue()) {
      this.__prevent_trigger_change_event = true;
      this.editor.pushUndoStop();
      // pushEditOperations says it expects a cursorComputer, but doesn't seem to need one.
      // @ts-expect-error
      model.pushEditOperations(
        [],
        [
          {
            range: model.getFullModelRange(),
            text: value,
          },
        ],
      );
      this.editor.pushUndoStop();
      this.__prevent_trigger_change_event = false;
    }
    if (model && language && prevProps.language !== language) {
      monaco.editor.setModelLanguage(model, language);
    }
    if (theme && prevProps.theme !== theme) {
      monaco.editor.setTheme(theme);
    }
    if (width !== prevProps.width || height !== prevProps.height) {
      this.editor.layout();
    }
    if (prevProps.options !== options) {
      const newOptions = {
        ...(className ? { extraEditorClassName: className } : {}),
        ...options,
      };
      delete newOptions.model;
      this.editor.updateOptions({
        ...newOptions,
      });
    }
  }

  componentWillUnmount(): void {
    this.destroyMonaco();
  }

  assignRef = (component: HTMLDivElement): void => {
    this.containerElement = component;
  };

  destroyMonaco(): void {
    if (this.editor) {
      this.editor.dispose();
      const model = this.editor.getModel();
      if (model) {
        model.dispose();
      }
    }
    if (this._subscription) {
      this._subscription.dispose();
    }
  }

  initMonaco(): void {
    const {
      value,
      defaultValue,
      options,
      language,
      theme,
      overrideServices,
      className,
    } = this.props;
    const editorValue = value != null ? value : defaultValue;
    if (this.containerElement) {
      // Before initializing monaco editor
      const editorOptions = { ...options, ...this.editorWillMount() };
      this.editor = monaco.editor.create(
        this.containerElement,
        {
          value: editorValue,
          language,
          ...(className ? { extraEditorClassName: className } : {}),
          ...editorOptions,
          ...(theme ? { theme } : {}),
        },
        overrideServices,
      );
      // After initializing monaco editor
      this.editorDidMount(this.editor);
    }
  }

  editorWillMount(): void | monaco.editor.IStandaloneEditorConstructionOptions {
    const { editorWillMount } = this.props;
    if (editorWillMount) {
      const options = editorWillMount(window.monaco);
      return options || {};
    }
    return {};
  }

  editorDidMount(editor: monaco.editor.IStandaloneCodeEditor): void {
    const { editorDidMount, onChange } = this.props;
    if (editorDidMount && this.editor) {
      editorDidMount(editor, window.monaco);
    }

    this._subscription = editor.onDidChangeModelContent((event) => {
      if (onChange && !this.__prevent_trigger_change_event) {
        onChange(editor.getValue(), event);
      }
    });
  }

  render(): JSX.Element {
    const { width, height } = this.props;
    const fixedWidth = width || '100%';
    const fixedHeight = height || '100%';
    const style = {
      width: fixedWidth,
      height: fixedHeight,
    };

    return (
      <div
        ref={this.assignRef}
        style={style}
        className="monaco-editor-container"
      />
    );
  }
}

export default MonacoEditor;
