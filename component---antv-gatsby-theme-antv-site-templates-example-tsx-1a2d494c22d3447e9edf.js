(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "0m5k":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"playground":"PlayGround-module--playground--1IGuC","preview":"PlayGround-module--preview--Py4hK","editor":"PlayGround-module--editor--vThhF","codemirror":"PlayGround-module--codemirror--2wleO","exampleContainerWrapper":"PlayGround-module--exampleContainerWrapper--18n4z"};

/***/ }),

/***/ "CP3q":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"toolbar":"Toolbar-module--toolbar--EuwhZ","codesandbox":"Toolbar-module--codesandbox--1rVVB","riddle":"Toolbar-module--riddle--4Q0h3","stackblitz":"Toolbar-module--stackblitz--23FQ8"};

/***/ }),

/***/ "Npyf":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"tabs":"Tabs-module--tabs--2u-0M","title":"Tabs-module--title--2dPRw","active":"Tabs-module--active--eJeJT","hidden":"Tabs-module--hidden--3V8Zc"};

/***/ }),

/***/ "Rvvu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/antd/es/tooltip/style/index.js
var style = __webpack_require__("WSfz");

// EXTERNAL MODULE: ../node_modules/antd/es/tooltip/index.js + 5 modules
var tooltip = __webpack_require__("DGR3");

// EXTERNAL MODULE: ../node_modules/antd/es/layout/style/index.js
var layout_style = __webpack_require__("RSeY");

// EXTERNAL MODULE: ../node_modules/antd/es/layout/index.js
var layout = __webpack_require__("dZF8");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.string.starts-with.js
var es6_string_starts_with = __webpack_require__("FEHE");

// EXTERNAL MODULE: ../node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("W1QL");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("K/PF");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__("t91x");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("75LO");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("Z8gF");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("oMRA");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("6d4m");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.find-index.js
var es6_array_find_index = __webpack_require__("2UZ+");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.find.js
var es6_array_find = __webpack_require__("it7j");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("asZ9");

// EXTERNAL MODULE: ../node_modules/antd/es/menu/style/index.js
var menu_style = __webpack_require__("XfXe");

// EXTERNAL MODULE: ../node_modules/antd/es/menu/index.js + 18 modules
var es_menu = __webpack_require__("v5c9");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.string.ends-with.js
var es6_string_ends_with = __webpack_require__("BDzi");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.sort.js
var es6_array_sort = __webpack_require__("U8p0");

// EXTERNAL MODULE: ../node_modules/antd/es/icon/style/index.js
var icon_style = __webpack_require__("EOmM");

// EXTERNAL MODULE: ../node_modules/antd/es/icon/index.js + 4 modules
var es_icon = __webpack_require__("epfg");

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__("mXGw");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__("Wbzz");

// EXTERNAL MODULE: ../node_modules/lodash-es/groupBy.js + 119 modules
var groupBy = __webpack_require__("zbYf");

// EXTERNAL MODULE: ../node_modules/react-i18next/dist/es/index.js + 9 modules
var es = __webpack_require__("CE6G");

// EXTERNAL MODULE: ../node_modules/rc-drawer/es/index.js + 3 modules
var rc_drawer_es = __webpack_require__("cStR");

// EXTERNAL MODULE: ../node_modules/react-use/esm/useMedia.js + 1 modules
var useMedia = __webpack_require__("K4Ra");

// EXTERNAL MODULE: ../@antv/gatsby-theme-antv/site/components/Article.tsx
var Article = __webpack_require__("IDIb");

// EXTERNAL MODULE: ../@antv/gatsby-theme-antv/site/components/Seo.tsx
var Seo = __webpack_require__("MlAH");

// EXTERNAL MODULE: ../node_modules/classnames/index.js
var classnames = __webpack_require__("8Jek");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ../@antv/gatsby-theme-antv/site/components/Tabs.module.less
var Tabs_module = __webpack_require__("Npyf");
var Tabs_module_default = /*#__PURE__*/__webpack_require__.n(Tabs_module);

// CONCATENATED MODULE: ../@antv/gatsby-theme-antv/site/components/Tabs.tsx






var Tabs_Tabs = function Tabs(_ref) {
  var _classNames, _classNames2, _classNames3;

  var active = _ref.active,
      slug = _ref.slug,
      _ref$showTabs = _ref.showTabs,
      showTabs = _ref$showTabs === void 0 ? {} : _ref$showTabs;

  var _useTranslation = Object(es["b" /* useTranslation */])(),
      t = _useTranslation.t;

  if (showTabs.API === false && showTabs.design === false) {
    return react_default.a.createElement("h3", {
      className: Tabs_module_default.a.title
    }, t('演示'));
  }

  return react_default.a.createElement("ul", {
    className: Tabs_module_default.a.tabs
  }, react_default.a.createElement("li", {
    className: classnames_default()((_classNames = {}, _classNames[Tabs_module_default.a.active] = active === 'examples', _classNames[Tabs_module_default.a.hidden] = showTabs.examples === false, _classNames))
  }, react_default.a.createElement(gatsby_browser_entry["Link"], {
    to: slug
  }, t('代码演示'))), react_default.a.createElement("li", {
    className: classnames_default()((_classNames2 = {}, _classNames2[Tabs_module_default.a.active] = active === 'API', _classNames2[Tabs_module_default.a.hidden] = showTabs.API === false, _classNames2))
  }, react_default.a.createElement(gatsby_browser_entry["Link"], {
    to: slug + "/API"
  }, "API")), react_default.a.createElement("li", {
    className: classnames_default()((_classNames3 = {}, _classNames3[Tabs_module_default.a.active] = active === 'design', _classNames3[Tabs_module_default.a.hidden] = showTabs.design === false, _classNames3))
  }, react_default.a.createElement(gatsby_browser_entry["Link"], {
    to: slug + "/design"
  }, t('设计指引'))));
};

/* harmony default export */ var components_Tabs = (Tabs_Tabs);
// EXTERNAL MODULE: ../node_modules/antd/es/result/style/index.js
var result_style = __webpack_require__("26VE");

// EXTERNAL MODULE: ../node_modules/antd/es/result/index.js + 3 modules
var result = __webpack_require__("epqX");

// EXTERNAL MODULE: ../node_modules/react-codemirror2/index.js
var react_codemirror2 = __webpack_require__("k8PP");

// EXTERNAL MODULE: ../node_modules/lodash/debounce.js
var debounce = __webpack_require__("5Zwl");
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);

// EXTERNAL MODULE: ../node_modules/@babel/standalone/babel.js
var babel = __webpack_require__("uX43");

// EXTERNAL MODULE: ../node_modules/react-split-pane/dist/index.esm.js
var index_esm = __webpack_require__("1h7N");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__("lQyR");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.from.js
var es6_array_from = __webpack_require__("YhIr");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__("4aJ6");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__("+jjx");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__("ABKx");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__("9ovy");

// EXTERNAL MODULE: ../node_modules/antd/es/typography/style/index.js + 1 modules
var typography_style = __webpack_require__("A/WN");

// EXTERNAL MODULE: ../node_modules/antd/es/typography/index.js + 16 modules
var typography = __webpack_require__("TZaN");

// EXTERNAL MODULE: ../node_modules/path-browserify/index.js
var path_browserify = __webpack_require__("R8iU");
var path_browserify_default = /*#__PURE__*/__webpack_require__.n(path_browserify);

// EXTERNAL MODULE: ../node_modules/codesandbox/lib/api/define.js
var define = __webpack_require__("i0cy");

// EXTERNAL MODULE: ../node_modules/@stackblitz/sdk/bundles/sdk.m.js
var sdk_m = __webpack_require__("d4Vl");

// EXTERNAL MODULE: ../@antv/gatsby-theme-antv/site/utils.ts
var utils = __webpack_require__("oV81");

// EXTERNAL MODULE: ../@antv/gatsby-theme-antv/site/components/Toolbar.module.less
var Toolbar_module = __webpack_require__("CP3q");
var Toolbar_module_default = /*#__PURE__*/__webpack_require__.n(Toolbar_module);

// CONCATENATED MODULE: ../@antv/gatsby-theme-antv/site/components/Toolbar.tsx




















function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }








var Paragraph = typography["a" /* default */].Paragraph;

var Toolbar_Toolbar = function Toolbar(_ref) {
  var _files, _files2;

  var sourceCode = _ref.sourceCode,
      fileExtension = _ref.fileExtension,
      _ref$playground = _ref.playground,
      playground = _ref$playground === void 0 ? {} : _ref$playground,
      location = _ref.location,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title,
      isFullScreen = _ref.isFullScreen,
      onToggleFullscreen = _ref.onToggleFullscreen,
      onExecuteCode = _ref.onExecuteCode;

  var _useTranslation = Object(es["b" /* useTranslation */])(),
      t = _useTranslation.t;

  var requireMatches = sourceCode.match(/require\(['"](.*)['"]\)/g) || [];
  var importMatches = sourceCode.match(/from\s+['"](.*)['"]/g) || [];
  var deps = {};
  [].concat(_toConsumableArray(requireMatches), _toConsumableArray(importMatches)).forEach(function (match) {
    var requireMatch = match.match(/require\(['"](.*)['"]\)/);

    if (requireMatch && requireMatch[1]) {
      deps[requireMatch[1]] = 'latest';
    }

    var importMatch = match.match(/from\s+['"](.*)['"]/);

    if (importMatch && importMatch[1]) {
      deps[importMatch[1]] = 'latest';
    }
  }); // 使用 playground.dependencies 定义的版本号

  var dependencies = playground.dependencies || {};
  Object.keys(dependencies).forEach(function (name) {
    deps[name] = dependencies[name];
  });
  var codeSandboxConfig = {
    files: (_files = {
      'package.json': {
        content: {
          main: "index." + fileExtension,
          dependencies: deps
        }
      }
    }, _files["index." + fileExtension] = {
      content: sourceCode
    }, _files['index.html'] = {
      content: playground.container || '<div id="container" />'
    }, _files)
  };
  var dataFileMatch = sourceCode.match(/fetch\('(.*)'\)/);

  if (dataFileMatch && dataFileMatch.length > 0 && !dataFileMatch[1].startsWith('http')) {
    var _dataFileMatch$1$spli = dataFileMatch[1].split('/').slice(-1),
        filename = _dataFileMatch$1$spli[0];

    codeSandboxConfig.files["index." + fileExtension].content = sourceCode.replace(dataFileMatch[1], path_browserify_default.a.join(location.origin || '', location.pathname || '', "../data/" + filename));
  }

  var riddlePrefillConfig = {
    title: title,
    js: sourceCode,
    html: playground.container || '<div id="container" />'
  };
  var stackblitzPrefillConfig = {
    title: title,
    description: '',
    template: 'create-react-app',
    dependencies: deps,
    files: (_files2 = {}, _files2["index." + (fileExtension.startsWith('ts') ? 'ts' : 'js')] = sourceCode, _files2['index.html'] = playground.container || '<div id="container" />', _files2)
  };

  var _useState = Object(react["useState"])(false),
      riddleVisible = _useState[0],
      updateRiddleVisible = _useState[1];

  Object(react["useEffect"])(function () {
    Object(utils["b" /* ping */])(function (status) {
      updateRiddleVisible(status === 'responded');
    });
  }, []);
  return react_default.a.createElement("div", {
    className: Toolbar_module_default.a.toolbar
  }, riddleVisible ? react_default.a.createElement("form", {
    action: "//riddle.alibaba-inc.com/riddles/define",
    method: "POST",
    target: "_blank"
  }, react_default.a.createElement("input", {
    type: "hidden",
    name: "data",
    value: JSON.stringify(riddlePrefillConfig)
  }), react_default.a.createElement(tooltip["a" /* default */], {
    title: t('在 Riddle 中打开')
  }, react_default.a.createElement("input", {
    type: "submit",
    value: "Create New Riddle with Prefilled Data",
    className: Toolbar_module_default.a.riddle
  }))) : null, react_default.a.createElement(tooltip["a" /* default */], {
    title: t('在 StackBlitz 中打开')
  }, react_default.a.createElement(es_icon["a" /* default */], {
    type: "thunderbolt",
    className: Toolbar_module_default.a.stackblitz,
    onClick: function onClick() {
      sdk_m["a" /* default */].openProject(stackblitzPrefillConfig);
    }
  })), react_default.a.createElement(tooltip["a" /* default */], {
    title: t('在 CodeSandbox 中打开')
  }, react_default.a.createElement("form", {
    action: "https://codesandbox.io/api/v1/sandboxes/define",
    method: "POST",
    target: "_blank"
  }, react_default.a.createElement("input", {
    type: "hidden",
    name: "parameters",
    value: Object(define["getParameters"])(codeSandboxConfig)
  }), react_default.a.createElement("button", {
    type: "submit",
    className: Toolbar_module_default.a.codesandbox
  }, react_default.a.createElement(es_icon["a" /* default */], {
    type: "code-sandbox",
    style: {
      marginLeft: 8
    }
  })))), react_default.a.createElement(Paragraph, {
    copyable: {
      text: sourceCode
    }
  }), react_default.a.createElement(tooltip["a" /* default */], {
    title: isFullScreen ? t('离开全屏') : t('进入全屏')
  }, react_default.a.createElement(es_icon["a" /* default */], {
    type: isFullScreen ? 'fullscreen-exit' : 'fullscreen',
    onClick: onToggleFullscreen,
    style: {
      marginLeft: 12
    }
  })), react_default.a.createElement(tooltip["a" /* default */], {
    title: t('执行代码')
  }, react_default.a.createElement(es_icon["a" /* default */], {
    type: "play-circle",
    onClick: onExecuteCode,
    style: {
      marginLeft: 12
    }
  })));
};

/* harmony default export */ var components_Toolbar = (Toolbar_Toolbar);
// EXTERNAL MODULE: ../@antv/gatsby-theme-antv/site/components/PlayGround.module.less
var PlayGround_module = __webpack_require__("0m5k");
var PlayGround_module_default = /*#__PURE__*/__webpack_require__.n(PlayGround_module);

// CONCATENATED MODULE: ../@antv/gatsby-theme-antv/site/components/PlayGround.tsx





function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/* eslint no-underscore-dangle: 0 */










var execute = debounce_default()(function (code, node, exampleContainer) {
  var script = document.createElement('script');
  script.innerHTML = "\n      try {\n        " + code + "\n      } catch(e) {\n        if (window.__reportErrorInPlayGround) {\n          window.__reportErrorInPlayGround(e);\n        }\n      }\n    "; // eslint-disable-next-line no-param-reassign

  node.innerHTML = exampleContainer || '<div id="container" />';
  node.appendChild(script);
}, 300);

var PlayGround_PlayGround = function PlayGround(_ref) {
  var source = _ref.source,
      babeledSource = _ref.babeledSource,
      _ref$relativePath = _ref.relativePath,
      relativePath = _ref$relativePath === void 0 ? '' : _ref$relativePath,
      _ref$playground = _ref.playground,
      playground = _ref$playground === void 0 ? {} : _ref$playground,
      location = _ref.location,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title;

  var _useTranslation = Object(es["b" /* useTranslation */])(),
      t = _useTranslation.t;

  var playgroundNode = Object(react["useRef"])(null);
  var cmInstance = Object(react["useRef"])();

  var _useState = Object(react["useState"])(),
      error = _useState[0],
      setError = _useState[1];

  var _useState2 = Object(react["useState"])(babeledSource),
      compiledCode = _useState2[0],
      updateCompiledCode = _useState2[1];

  var _useState3 = Object(react["useState"])(source),
      currentSourceCode = _useState3[0],
      updateCurrentSourceCode = _useState3[1];

  if (typeof window !== 'undefined') {
    // @ts-ignore
    window.__reportErrorInPlayGround = function (e) {
      console.error(e); // eslint-disable-line no-console

      setError(e);
    };
  }

  var fullscreenNode = Object(react["useRef"])(null);

  var _useState4 = Object(react["useState"])(false),
      isFullScreen = _useState4[0],
      updateIsFullScreen = _useState4[1];

  var toggleFullscreen = function toggleFullscreen() {
    updateIsFullScreen(!isFullScreen);

    if (fullscreenNode.current) {
      if (!isFullScreen && !document.fullscreenElement) {
        fullscreenNode.current.requestFullscreen();
      } else if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  var executeCode = function executeCode() {
    if (!compiledCode || !playgroundNode || !playgroundNode.current) {
      return;
    }

    execute(compiledCode, playgroundNode.current, playground.container);
  };

  Object(react["useEffect"])(function () {
    executeCode();
  }, [compiledCode, error]);
  Object(react["useEffect"])(function () {
    if (playground.playgroundDidMount) {
      // eslint-disable-next-line no-new-func
      new Function(playground.playgroundDidMount)();
    }

    return function () {
      if (playground.playgroundWillUnmount) {
        // eslint-disable-next-line no-new-func
        new Function(playground.playgroundWillUnmount)();
      }
    };
  }, []); // 统一增加对 insert-css 的使用注释

  var replacedSource = source.replace(/^insertCss\(/gm, "// \u6211\u4EEC\u7528 insert-css \u6F14\u793A\u5F15\u5165\u81EA\u5B9A\u4E49\u6837\u5F0F\n// \u63A8\u8350\u5C06\u6837\u5F0F\u6DFB\u52A0\u5230\u81EA\u5DF1\u7684\u6837\u5F0F\u6587\u4EF6\u4E2D\n// \u82E5\u62F7\u8D1D\u5B98\u65B9\u4EE3\u7801\uFF0C\u522B\u5FD8\u4E86 npm install insert-css\ninsertCss(");
  var editor = react_default.a.createElement(react_codemirror2["UnControlled"], {
    value: replacedSource,
    options: {
      mode: 'jsx',
      theme: 'mdn-like',
      tabSize: 2,
      // @ts-ignore
      styleActiveLine: true,
      // 当前行背景高亮
      matchBrackets: true,
      // 括号匹配
      autoCloseBrackets: true,
      autofocus: false,
      matchTags: {
        bothTags: true
      }
    },
    cursor: {
      line: -1,
      ch: -1
    },
    onChange: function onChange(_, __, value) {
      updateCurrentSourceCode(value);

      try {
        var _transform = Object(babel["transform"])(value, {
          filename: relativePath,
          presets: ['react', 'typescript', 'es2015', 'stage-3'],
          plugins: ['transform-modules-umd']
        }),
            code = _transform.code;

        updateCompiledCode(code);
      } catch (e) {
        console.error(e); // eslint-disable-line no-console

        setError(e);
        return;
      }

      setError(null);
    },
    editorDidMount: function editorDidMount(instance) {
      cmInstance.current = instance;
    }
  });
  var fileExtension = relativePath.split('.')[relativePath.split('.').length - 1] || 'js';
  var isWide = Object(useMedia["a" /* default */])('(min-width: 767.99px)', true);
  return react_default.a.createElement("div", {
    className: PlayGround_module_default.a.playground,
    ref: fullscreenNode
  }, react_default.a.createElement(index_esm["a" /* default */], {
    split: isWide ? 'vertical' : 'horizontal',
    defaultSize: "66%",
    minSize: 100
  }, react_default.a.createElement("div", {
    className: classnames_default()(PlayGround_module_default.a.preview, "playground-" + relativePath.split('/').join('-'))
  }, error ? react_default.a.createElement(result["a" /* default */], {
    status: "error",
    title: t('演示代码报错，请检查'),
    subTitle: react_default.a.createElement("pre", null, error && error.message)
  }) : react_default.a.createElement("div", {
    ref: playgroundNode,
    className: PlayGround_module_default.a.exampleContainerWrapper
  })), react_default.a.createElement("div", {
    className: PlayGround_module_default.a.editor
  }, react_default.a.createElement(components_Toolbar, {
    fileExtension: fileExtension,
    sourceCode: currentSourceCode,
    playground: playground,
    location: location,
    title: title,
    isFullScreen: isFullScreen,
    onToggleFullscreen: toggleFullscreen,
    onExecuteCode: executeCode
  }), react_default.a.createElement("div", {
    className: PlayGround_module_default.a.codemirror
  }, editor))));
};

var PlayGround_ErrorHandlerPlayGround =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ErrorHandlerPlayGround, _React$Component);

  function ErrorHandlerPlayGround() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      error: undefined
    };
    return _this;
  }

  ErrorHandlerPlayGround.getDerivedStateFromError = function getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return {
      error: error
    };
  };

  var _proto = ErrorHandlerPlayGround.prototype;

  _proto.render = function render() {
    var t = this.props.t;
    var error = this.state.error;

    if (error) {
      // 你可以自定义降级后的 UI 并渲染
      return react_default.a.createElement(result["a" /* default */], {
        status: "error",
        title: t('演示代码报错，请检查'),
        subTitle: react_default.a.createElement("pre", null, error && error.message)
      });
    }

    return react_default.a.createElement(PlayGround_PlayGround, this.props);
  };

  return ErrorHandlerPlayGround;
}(react_default.a.Component);

/* harmony default export */ var components_PlayGround = (Object(es["c" /* withTranslation */])()(PlayGround_ErrorHandlerPlayGround));
// EXTERNAL MODULE: ../@antv/gatsby-theme-antv/site/components/PlayGrounds.module.less
var PlayGrounds_module = __webpack_require__("atH1");
var PlayGrounds_module_default = /*#__PURE__*/__webpack_require__.n(PlayGrounds_module);

// CONCATENATED MODULE: ../@antv/gatsby-theme-antv/site/components/PlayGrounds.tsx










var PlayGrounds_PlayGrounds = function PlayGrounds(_ref) {
  var _classNames;

  var _ref$examples = _ref.examples,
      examples = _ref$examples === void 0 ? [] : _ref$examples,
      location = _ref.location,
      playground = _ref.playground;

  var _useTranslation = Object(es["b" /* useTranslation */])(),
      i18n = _useTranslation.i18n;

  var defaultExample = examples.find(function (item) {
    return "#" + item.filename.split('.')[0] === location.hash;
  }) || examples[0];

  var _useState = Object(react["useState"])(defaultExample),
      currentExample = _useState[0],
      updateCurrentExample = _useState[1];

  var _useState2 = Object(react["useState"])(false),
      hasHorizontalScrollbar = _useState2[0],
      updateHasHorizontalScrollbar = _useState2[1];

  var _useState3 = Object(react["useState"])('left'),
      scrollPostion = _useState3[0],
      updateScrollPostion = _useState3[1];

  var playgroundScrollDiv = Object(react["useRef"])(null);

  var calcScrollPostion = function calcScrollPostion(node) {
    if (node.scrollLeft < 2) {
      updateScrollPostion('left');
    } else if (node.scrollLeft + node.clientWidth >= node.scrollWidth - 2) {
      updateScrollPostion('right');
    } else {
      updateScrollPostion('middle');
    }
  };

  var onScroll = function onScroll(e) {
    if (!e || !e.target) {
      return;
    }

    calcScrollPostion(e.target);
  };

  var onResize = Object(react["useCallback"])(function () {
    if (playgroundScrollDiv && playgroundScrollDiv.current) {
      var div = playgroundScrollDiv.current;
      updateHasHorizontalScrollbar(div.scrollWidth > div.clientWidth);
      calcScrollPostion(div);
    }
  }, [playgroundScrollDiv]);
  Object(react["useEffect"])(function () {
    onResize();
  }, [examples]);
  Object(react["useEffect"])(function () {
    window.addEventListener('resize', onResize);
    return function () {
      window.removeEventListener('resize', onResize);
    };
  }, []);
  return react_default.a.createElement("div", {
    className: PlayGrounds_module_default.a.container
  }, react_default.a.createElement("div", {
    className: classnames_default()(PlayGrounds_module_default.a.shadowWrapper, (_classNames = {}, _classNames[PlayGrounds_module_default.a.leftInnerShadow] = (scrollPostion === 'right' || scrollPostion === 'middle') && hasHorizontalScrollbar, _classNames[PlayGrounds_module_default.a.rightInnerShadow] = (scrollPostion === 'left' || scrollPostion === 'middle') && hasHorizontalScrollbar, _classNames))
  }, react_default.a.createElement("ul", {
    className: PlayGrounds_module_default.a.cards,
    ref: playgroundScrollDiv,
    onScroll: onScroll
  }, examples.map(function (example) {
    var _classNames2;

    var title = typeof example.title === 'object' ? example.title[i18n.language] : example.title;
    return react_default.a.createElement(tooltip["a" /* default */], {
      title: title || '',
      key: example.relativePath
    }, react_default.a.createElement("li", {
      onClick: function onClick() {
        window.history.pushState({}, '', "#" + example.filename.split('.')[0]);
        updateCurrentExample(example);
      },
      className: classnames_default()(PlayGrounds_module_default.a.card, (_classNames2 = {}, _classNames2[PlayGrounds_module_default.a.current] = example.relativePath === currentExample.relativePath, _classNames2))
    }, react_default.a.createElement("img", {
      src: example.screenshot || 'https://gw.alipayobjects.com/os/s/prod/antv/assets/image/screenshot-placeholder-b8e70.png',
      alt: title || example.relativePath
    })));
  }))), react_default.a.createElement(components_PlayGround, {
    key: currentExample.relativePath,
    relativePath: currentExample.relativePath,
    source: currentExample.source,
    babeledSource: currentExample.babeledSource,
    filename: currentExample.filename,
    playground: playground,
    location: location,
    title: currentExample.title
  }));
};

/* harmony default export */ var components_PlayGrounds = (PlayGrounds_PlayGrounds);
// EXTERNAL MODULE: ../@antv/gatsby-theme-antv/site/components/NavigatorBanner.tsx
var NavigatorBanner = __webpack_require__("MuL0");

// EXTERNAL MODULE: ../@antv/gatsby-theme-antv/site/templates/markdown.module.less
var markdown_module = __webpack_require__("GeA/");
var markdown_module_default = /*#__PURE__*/__webpack_require__.n(markdown_module);

// CONCATENATED MODULE: ../@antv/gatsby-theme-antv/site/templates/example.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Template; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });



































var MenuIcon = es_icon["a" /* default */].createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_470089_9m0keqj54r.js' // generated by iconfont.cn

});

var example_renderMenuItems = function renderMenuItems(edges) {
  return edges.filter(function (edge) {
    var slug = edge.node.fields.slug;

    if (slug.endsWith('/API') || slug.endsWith('/design')) {
      return false;
    }

    return true;
  }).sort(function (a, b) {
    var aOrder = a.node.frontmatter.order;
    var bOrder = b.node.frontmatter.order;
    return aOrder - bOrder;
  }).map(function (edge) {
    var _edge$node = edge.node,
        _edge$node$frontmatte = _edge$node.frontmatter,
        title = _edge$node$frontmatte.title,
        icon = _edge$node$frontmatte.icon,
        slug = _edge$node.fields.slug;
    return react_default.a.createElement(es_menu["a" /* default */].Item, {
      key: slug
    }, react_default.a.createElement(gatsby_browser_entry["Link"], {
      to: slug
    }, icon && react_default.a.createElement(MenuIcon, {
      className: markdown_module_default.a.menuIcon,
      type: "icon-" + icon
    }), react_default.a.createElement("span", null, title)));
  });
};

var getMenuItemLocaleKey = function getMenuItemLocaleKey(slug) {
  if (slug === void 0) {
    slug = '';
  }

  var slugPieces = slug.split('/');
  var menuItemLocaleKey = slugPieces.slice(slugPieces.indexOf('examples') + 1).filter(function (key) {
    return key;
  }).join('/');
  return menuItemLocaleKey;
};

var getExampleOrder = function getExampleOrder(_ref) {
  var _ref$groupedEdgeKey = _ref.groupedEdgeKey,
      groupedEdgeKey = _ref$groupedEdgeKey === void 0 ? '' : _ref$groupedEdgeKey,
      _ref$examples = _ref.examples,
      examples = _ref$examples === void 0 ? [] : _ref$examples,
      _ref$groupedEdges = _ref.groupedEdges,
      groupedEdges = _ref$groupedEdges === void 0 ? {} : _ref$groupedEdges;
  var key = getMenuItemLocaleKey(groupedEdgeKey);

  if (examples.find(function (item) {
    return item.slug === key;
  })) {
    return (examples.findIndex(function (item) {
      return item.slug === key;
    }) || 0) + 100;
  }

  if (!groupedEdges[groupedEdgeKey] && !groupedEdges[groupedEdgeKey].length) {
    return 0;
  }

  return groupedEdges[groupedEdgeKey][0].node.frontmatter.order || 0;
};

function Template(_ref2) {
  var data = _ref2.data,
      location = _ref2.location,
      pageContext = _ref2.pageContext;
  var allMarkdownRemark = data.allMarkdownRemark,
      site = data.site; // data.markdownRemark holds our post data

  var _allMarkdownRemark$ed = allMarkdownRemark.edges,
      edges = _allMarkdownRemark$ed === void 0 ? [] : _allMarkdownRemark$ed;
  var edgesInExamples = edges.filter(function (item) {
    return item.node.fields.slug.includes('/examples/');
  });

  var _ref3 = edgesInExamples.find(function (edge) {
    var slug = edge.node.fields.slug;
    var pathWithoutTrailingSlashes = location.pathname.replace(/\/$/, '');

    if (/\/examples\/.*\/API$/.test(pathWithoutTrailingSlashes) || /\/examples\/.*\/design$/.test(pathWithoutTrailingSlashes)) {
      return pathWithoutTrailingSlashes.indexOf(slug) >= 0;
    }

    return pathWithoutTrailingSlashes === slug || pathWithoutTrailingSlashes.endsWith(slug);
  }) || {},
      markdownRemark = _ref3.node;

  if (!markdownRemark) {
    return null;
  }

  var frontmatter = markdownRemark.frontmatter,
      html = markdownRemark.html,
      slug = markdownRemark.fields.slug,
      relativePath = markdownRemark.parent.relativePath;
  var _site$siteMetadata = site.siteMetadata,
      _site$siteMetadata$ex = _site$siteMetadata.examples,
      examples = _site$siteMetadata$ex === void 0 ? [] : _site$siteMetadata$ex,
      githubUrl = _site$siteMetadata.githubUrl,
      playground = _site$siteMetadata.playground;

  var _useTranslation = Object(es["b" /* useTranslation */])(),
      t = _useTranslation.t,
      i18n = _useTranslation.i18n;

  var groupedEdges = Object(groupBy["a" /* default */])(edgesInExamples, function (_ref4) {
    var slugString = _ref4.node.fields.slug;

    // API.md and deisgn.md
    if (slugString.endsWith('/API') || slugString.endsWith('/design')) {
      return slugString.split('/').slice(0, -2).join('/');
    } // index.md


    return slugString.split('/').slice(0, -1).join('/');
  });
  var defaultOpenKeys = Object.keys(groupedEdges).filter(function (key) {
    return slug.startsWith(key);
  });

  var _useState = Object(react["useState"])(defaultOpenKeys),
      openKeys = _useState[0],
      setOpenKeys = _useState[1];

  var activeTab = 'examples';
  var exampleRootSlug = slug;

  if (/\/examples\/.*\/API$/.test(location.pathname)) {
    activeTab = 'API';
    exampleRootSlug = exampleRootSlug.replace(/\/API$/, '');
  } else if (/\/examples\/.*\/design$/.test(location.pathname)) {
    activeTab = 'design';
    exampleRootSlug = exampleRootSlug.replace(/\/design$/, '');
  }

  var _pageContext$exampleS = pageContext.exampleSections,
      exampleSections = _pageContext$exampleS === void 0 ? {} : _pageContext$exampleS,
      prev = pageContext.prev,
      next = pageContext.next;
  var menu = react_default.a.createElement(es_menu["a" /* default */], {
    mode: "inline",
    selectedKeys: [slug],
    style: {
      height: '100%'
    },
    openKeys: openKeys,
    onOpenChange: function onOpenChange(currentOpenKeys) {
      return setOpenKeys(currentOpenKeys);
    },
    forceSubMenuRender: true
  }, Object.keys(groupedEdges).filter(function (key) {
    return key.startsWith("/" + i18n.language + "/");
  }).sort(function (a, b) {
    var aOrder = getExampleOrder({
      groupedEdgeKey: a,
      examples: examples,
      groupedEdges: groupedEdges
    });
    var bOrder = getExampleOrder({
      groupedEdgeKey: b,
      examples: examples,
      groupedEdges: groupedEdges
    });
    return aOrder - bOrder;
  }).map(function (slugString) {
    var slugPieces = slugString.split('/');

    if (slugPieces.length <= 3) {
      return example_renderMenuItems(groupedEdges[slugString]);
    }

    var menuItemLocaleKey = getMenuItemLocaleKey(slugString);
    var doc = examples.find(function (item) {
      return item.slug === menuItemLocaleKey;
    }) || {};
    return react_default.a.createElement(es_menu["a" /* default */].SubMenu, {
      key: slugString,
      title: react_default.a.createElement("div", null, doc.icon && react_default.a.createElement(MenuIcon, {
        className: markdown_module_default.a.menuIcon,
        type: "icon-" + doc.icon
      }), react_default.a.createElement("span", null, doc && doc.title ? Object(utils["a" /* capitalize */])(doc.title[i18n.language]) : menuItemLocaleKey))
    }, example_renderMenuItems(groupedEdges[slugString]));
  }));
  var isWide = Object(useMedia["a" /* default */])('(min-width: 767.99px)', true);

  var _useState2 = Object(react["useState"])(false),
      drawOpen = _useState2[0],
      setDrawOpen = _useState2[1];

  var menuSider = isWide ? react_default.a.createElement(layout["a" /* default */].Sider, {
    width: "auto",
    theme: "light",
    className: markdown_module_default.a.sider
  }, menu) : react_default.a.createElement(rc_drawer_es["a" /* default */], {
    handler: react_default.a.createElement(es_icon["a" /* default */], {
      className: markdown_module_default.a.menuSwitch,
      type: drawOpen ? 'menu-fold' : 'menu-unfold'
    }),
    wrapperClassName: markdown_module_default.a.menuDrawer,
    onChange: function onChange(open) {
      return setDrawOpen(!!open);
    },
    width: 280
  }, menu);
  return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(Seo["a" /* default */], {
    title: frontmatter.title,
    lang: i18n.language
  }), react_default.a.createElement(layout["a" /* default */], {
    style: {
      background: '#fff'
    },
    hasSider: true,
    className: markdown_module_default.a.layout
  }, menuSider, react_default.a.createElement(Article["a" /* default */], {
    className: markdown_module_default.a.markdown
  }, react_default.a.createElement("div", {
    className: markdown_module_default.a.main,
    style: {
      width: '100%'
    }
  }, react_default.a.createElement("h1", null, frontmatter.title, react_default.a.createElement(tooltip["a" /* default */], {
    title: t('在 GitHub 上编辑')
  }, react_default.a.createElement("a", {
    href: githubUrl + "/edit/master/examples/" + relativePath,
    target: "_blank",
    rel: "noopener noreferrer",
    className: markdown_module_default.a.editOnGtiHubButton
  }, react_default.a.createElement(es_icon["a" /* default */], {
    type: "edit"
  })))), react_default.a.createElement("div", {
    /* eslint-disable-next-line react/no-danger */
    dangerouslySetInnerHTML: {
      __html: html
    }
  }), react_default.a.createElement(components_Tabs, {
    slug: exampleRootSlug,
    active: activeTab,
    showTabs: {
      examples: exampleSections.examples && exampleSections.examples.length > 0,
      API: !!exampleSections.API,
      design: !!exampleSections.design
    }
  }), exampleSections.examples && react_default.a.createElement("div", {
    style: {
      display: activeTab === 'examples' ? 'block' : 'none'
    }
  }, react_default.a.createElement(components_PlayGrounds, {
    examples: exampleSections.examples,
    location: location,
    playground: playground || {}
  })), exampleSections.API && react_default.a.createElement("div", {
    style: {
      display: activeTab === 'API' ? 'block' : 'none'
    }
    /* eslint-disable-next-line react/no-danger */
    ,
    dangerouslySetInnerHTML: {
      __html: exampleSections.API.node.html
    }
  }), exampleSections.design && react_default.a.createElement("div", {
    style: {
      display: activeTab === 'design' ? 'block' : 'none'
    }
    /* eslint-disable-next-line react/no-danger */
    ,
    dangerouslySetInnerHTML: {
      __html: exampleSections.design.node.html
    }
  }), react_default.a.createElement("div", null, react_default.a.createElement(NavigatorBanner["a" /* default */], {
    type: "prev",
    post: prev
  }), react_default.a.createElement(NavigatorBanner["a" /* default */], {
    type: "next",
    post: next
  }))))));
}
var pageQuery = "1948519688";

/***/ }),

/***/ "atH1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"PlayGrounds-module--container--2Hakc","shadowWrapper":"PlayGrounds-module--shadowWrapper--UdCy1","rightInnerShadow":"PlayGrounds-module--rightInnerShadow--2FZ8-","leftInnerShadow":"PlayGrounds-module--leftInnerShadow--1-cQT","cards":"PlayGrounds-module--cards--2fz_6","card":"PlayGrounds-module--card--1Vp3G","current":"PlayGrounds-module--current--20eqU"};

/***/ })

}]);
//# sourceMappingURL=component---antv-gatsby-theme-antv-site-templates-example-tsx-1a2d494c22d3447e9edf.js.map