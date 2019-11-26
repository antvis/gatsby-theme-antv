(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "+Yd0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("oMRA");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("6d4m");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Bi0q");
/* harmony import */ var codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var codemirror_mode_jsx_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("XUZz");
/* harmony import */ var codemirror_mode_jsx_jsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_jsx_jsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var codemirror_mode_htmlembedded_htmlembedded__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("HAof");
/* harmony import */ var codemirror_mode_htmlembedded_htmlembedded__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_htmlembedded_htmlembedded__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var codemirror_addon_selection_active_line__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("oLHe");
/* harmony import */ var codemirror_addon_selection_active_line__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_selection_active_line__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var codemirror_addon_edit_matchbrackets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("wyB9");
/* harmony import */ var codemirror_addon_edit_matchbrackets__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_edit_matchbrackets__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var codemirror_addon_edit_closebrackets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("94DX");
/* harmony import */ var codemirror_addon_edit_closebrackets__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_edit_closebrackets__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var codemirror_addon_edit_matchtags__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("FUg+");
/* harmony import */ var codemirror_addon_edit_matchtags__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_edit_matchtags__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("1UZS");
/* harmony import */ var normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prism_themes_themes_prism_base16_ateliersulphurpool_light_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("SAwA");
/* harmony import */ var prism_themes_themes_prism_base16_ateliersulphurpool_light_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prism_themes_themes_prism_base16_ateliersulphurpool_light_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prismjs_plugins_command_line_prism_command_line_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("wYtd");
/* harmony import */ var prismjs_plugins_command_line_prism_command_line_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_command_line_prism_command_line_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("OLqI");
/* harmony import */ var codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var codemirror_theme_mdn_like_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("fqqo");
/* harmony import */ var codemirror_theme_mdn_like_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(codemirror_theme_mdn_like_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var rc_drawer_assets_index_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("ffXq");
/* harmony import */ var rc_drawer_assets_index_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(rc_drawer_assets_index_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var docsearch_js_dist_cdn_docsearch_min_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("lAJ1");
/* harmony import */ var docsearch_js_dist_cdn_docsearch_min_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(docsearch_js_dist_cdn_docsearch_min_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _site_global_less__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("qca1");
/* harmony import */ var _site_global_less__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_site_global_less__WEBPACK_IMPORTED_MODULE_16__);
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */ // You can delete this file if you're not using it
window.insertCss=__webpack_require__("3Q0B");if(window.location.host.includes('antv')){// prettier-ignore
/* eslint-disable */!function(t,e,a,r,c){t.TracertCmdCache=t.TracertCmdCache||[],t[c]=window[c]||{_isRenderInit:!0,call:function call(){t.TracertCmdCache.push(arguments);},start:function start(t){this.call('start',t);}},t[c].l=new Date();var n=e.createElement(a),s=e.getElementsByTagName(a)[0];n.async=!0,n.src=r,s.parentNode.insertBefore(n,s);n.onerror=function(){console.warn(decodeURI('Tracert%20%E8%84%9A%E6%9C%AC%E6%9C%AA%E6%88%90%E5%8A%9F%E5%8A%A0%E8%BD%BD,%20%E8%AF%B7%E6%A3%80%E6%9F%A5%E7%BD%91%E7%BB%9C%E4%BB%A5%E5%8F%8A%20A%20%E4%BD%8D%E6%98%AF%E5%90%A6%E5%9C%A8%E4%B9%9D%E8%89%B2%E9%B9%BF%E5%BB%BA%E7%AB%8B%E6%B4%9E%E5%AF%9F'));var fallback=function fallback(){console.warn(decodeURI('Tracert%20%E5%91%BD%E4%BB%A4%E6%89%A7%E8%A1%8C%E5%A4%B1%E8%B4%A5%EF%BC%8C%E8%AF%B7%E6%A3%80%E6%9F%A5%20JS%20%E6%98%AF%E5%90%A6%E6%AD%A3%E7%A1%AE%E5%BC%95%E5%85%A5'));};for(var fnlist=["call","start","config","logPv","info","err","click","expo","pageName","pageState","time","timeEnd","parse","checkExpo","stringify","report","set","before"],i=0;i<fnlist.length;i++){t[c][fnlist[i]]=fallback;}};}(window,document,'script','https://ur.alipay.com/tracert_a369.js','Tracert');// 启动脚本
Tracert.start();}

/***/ }),

/***/ "/7QA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _antv_g2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("gVqz");
/* harmony import */ var _antv_g2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_antv_g2__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (_antv_g2__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "5yr3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mitt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("uXhA");
var emitter=Object(mitt__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])();/* harmony default export */ __webpack_exports__["a"] = (emitter);

/***/ }),

/***/ "7KvB":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"footer":"Footer-module--footer--24bmA","description":"Footer-module--description--SiWEE","bottom":"Footer-module--bottom--21XBa"};

/***/ }),

/***/ "7S3h":
/***/ (function(module) {

module.exports = JSON.parse("{\"data\":{\"site\":{\"siteMetadata\":{\"title\":\"AntV test site\",\"description\":\"Ant Visualization solution home page\"}}}}");

/***/ }),

/***/ "94VI":
/***/ (function(module, exports) {

exports.polyfill=function(Component){return Component;};

/***/ }),

/***/ "Bytu":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"search":"Search-module--search--2euMx","icon":"Search-module--icon--l5359","input":"Search-module--input--2KREX"};

/***/ }),

/***/ "GddB":
/***/ (function(module, exports, __webpack_require__) {

window.g2=__webpack_require__("/7QA").default;

/***/ }),

/***/ "IOVJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5hJT");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("mXGw");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("emEt");
/* harmony import */ var _api_runner_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("xtsi");
/* harmony import */ var _api_runner_browser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_api_runner_browser__WEBPACK_IMPORTED_MODULE_3__);
function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}// Renders page
var PageRenderer=/*#__PURE__*/function(_React$Component){_inheritsLoose(PageRenderer,_React$Component);function PageRenderer(){return _React$Component.apply(this,arguments)||this;}var _proto=PageRenderer.prototype;_proto.render=function render(){var props=Object.assign({},this.props,{pathContext:this.props.pageContext});var _apiRunner=Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_3__["apiRunner"])("replaceComponentRenderer",{props:this.props,loader:_loader__WEBPACK_IMPORTED_MODULE_2__["publicLoader"]}),replacementElement=_apiRunner[0];var pageElement=replacementElement||Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(this.props.pageResources.component,Object.assign({},props,{key:this.props.path||this.props.pageResources.page.path}));var wrappedPage=Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_3__["apiRunner"])("wrapPageElement",{element:pageElement,props:props},pageElement,function(_ref){var result=_ref.result;return{element:result,props:props};}).pop();return wrappedPage;};return PageRenderer;}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);/* harmony default export */ __webpack_exports__["a"] = (PageRenderer);

/***/ }),

/***/ "L+cS":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"PageLoading-module--container--3vL46","loading":"PageLoading-module--loading--3b_Gn"};

/***/ }),

/***/ "LeKB":
/***/ (function(module, exports, __webpack_require__) {

module.exports=[{plugin:__webpack_require__("zuwH"),options:{"plugins":[]}},{plugin:__webpack_require__("CnhP"),options:{"plugins":[]}},{plugin:__webpack_require__("6vZ6"),options:{"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#722ED1","theme_color":"#722ED1","display":"minimal-ui","icon":"/Users/afc163/Projects/gatsby-theme-antv/@antv/gatsby-theme-antv/site/images/favicon.png"}},{plugin:__webpack_require__("6K2M"),options:{"plugins":[]}},{plugin:__webpack_require__("TOXe"),options:{"plugins":[]}},{plugin:__webpack_require__("dXJ/"),options:{"plugins":[],"component":"/Users/afc163/Projects/gatsby-theme-antv/@antv/gatsby-theme-antv/site/layouts/layout.tsx"}},{plugin:__webpack_require__("TOXe"),options:{"plugins":[],"color":"#722ED1"}},{plugin:__webpack_require__("+Yd0"),options:{"plugins":[]}},{plugin:__webpack_require__("GddB"),options:{"plugins":[]}}];

/***/ }),

/***/ "MlAH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _example_public_static_d_3978990474_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7S3h");
var _example_public_static_d_3978990474_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t("7S3h", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("mXGw");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tj/o");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);


/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */



var SEO = function SEO(_ref) {
  var description = _ref.description,
      _ref$lang = _ref.lang,
      lang = _ref$lang === void 0 ? '' : _ref$lang,
      _ref$meta = _ref.meta,
      meta = _ref$meta === void 0 ? [] : _ref$meta,
      title = _ref.title,
      titleSuffix = _ref.titleSuffix;
  var site = _example_public_static_d_3978990474_json__WEBPACK_IMPORTED_MODULE_0__.data.site;
  var metaDescription = description || site.siteMetadata.description;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"], {
    htmlAttributes: {
      lang: lang
    },
    title: title,
    titleTemplate: "%s | " + (titleSuffix || site.siteMetadata.title),
    meta: [{
      name: "description",
      content: metaDescription
    }, {
      property: "og:title",
      content: title
    }, {
      property: "og:description",
      content: metaDescription
    }, {
      property: "og:image",
      content: 'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png'
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary"
    }, {
      name: "twitter:title",
      content: title
    }, {
      name: "twitter:description",
      content: metaDescription
    }, {
      property: "twitter:image",
      content: 'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png'
    }].concat(meta)
  });
};

SEO.defaultProps = {
  lang: "en",
  meta: [],
  description: ""
};
/* harmony default export */ __webpack_exports__["a"] = (SEO);

/***/ }),

/***/ "NSX3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_runner_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xtsi");
/* harmony import */ var _api_runner_browser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__);
if(window.location.protocol!=="https:"&&window.location.hostname!=="localhost"){console.error("Service workers can only be used over HTTPS, or on localhost for development");}else if("serviceWorker"in navigator){navigator.serviceWorker.register(""+"/sw.js").then(function(reg){reg.addEventListener("updatefound",function(){Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__["apiRunner"])("onServiceWorkerUpdateFound",{serviceWorker:reg});// The updatefound event implies that reg.installing is set; see
// https://w3c.github.io/ServiceWorker/#service-worker-registration-updatefound-event
var installingWorker=reg.installing;console.log("installingWorker",installingWorker);installingWorker.addEventListener("statechange",function(){switch(installingWorker.state){case"installed":if(navigator.serviceWorker.controller){// At this point, the old content will have been purged and the fresh content will
// have been added to the cache.
// We set a flag so Gatsby Link knows to refresh the page on next navigation attempt
window.___swUpdated=true;// We call the onServiceWorkerUpdateReady API so users can show update prompts.
Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__["apiRunner"])("onServiceWorkerUpdateReady",{serviceWorker:reg});// If resources failed for the current page, reload.
if(window.___failedResources){console.log("resources failed, SW updated - reloading");window.location.reload();}}else{// At this point, everything has been precached.
// It's the perfect time to display a "Content is cached for offline use." message.
console.log("Content is now available offline!");// Post to service worker that install is complete.
// Delay to allow time for the event listener to be added --
// otherwise fetch is called too soon and resources aren't cached.
Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__["apiRunner"])("onServiceWorkerInstalled",{serviceWorker:reg});}break;case"redundant":console.error("The installing service worker became redundant.");Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__["apiRunner"])("onServiceWorkerRedundant",{serviceWorker:reg});break;case"activated":Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__["apiRunner"])("onServiceWorkerActive",{serviceWorker:reg});break;}});});}).catch(function(e){console.error("Error during service worker registration:",e);});}

/***/ }),

/***/ "NYms":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd_es_icon_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("EOmM");
/* harmony import */ var antd_es_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("epfg");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("mXGw");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PageLoading_module_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("L+cS");
/* harmony import */ var _PageLoading_module_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_PageLoading_module_less__WEBPACK_IMPORTED_MODULE_3__);





var PageLoading = function PageLoading() {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: _PageLoading_module_less__WEBPACK_IMPORTED_MODULE_3___default.a.container
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_es_icon__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    type: "loading",
    className: _PageLoading_module_less__WEBPACK_IMPORTED_MODULE_3___default.a.loading
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (PageLoading);

/***/ }),

/***/ "PBSq":
/***/ (function(module) {

module.exports = JSON.parse("{\"data\":{\"site\":{\"siteMetadata\":{\"title\":\"AntV test site\",\"githubUrl\":\"https://github.com/antvis/antvis.github.io\",\"siteUrl\":\"https://test.antv.vision\",\"logoUrl\":null,\"showLanguageSwitcher\":null,\"navs\":[{\"slug\":\"docs/specification/getting-started\",\"title\":{\"zh\":\"设计语言\",\"en\":\"Specification\"},\"target\":null},{\"slug\":\"docs/other\",\"title\":{\"zh\":\"其他文档\",\"en\":\"other\"},\"target\":null},{\"slug\":\"examples\",\"title\":{\"zh\":\"图表演示\",\"en\":\"Examples\"},\"target\":null},{\"slug\":\"independent\",\"title\":{\"zh\":\"独立\",\"en\":\"MyApp\"},\"target\":null}],\"redirects\":[]}}}}");

/***/ }),

/***/ "UxWs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.regexp.search.js
var es6_regexp_search = __webpack_require__("nsbO");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__("9ovy");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("5hJT");

// EXTERNAL MODULE: ./.cache/api-runner-browser.js
var api_runner_browser = __webpack_require__("xtsi");

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__("mXGw");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ../node_modules/react-dom/index.js
var react_dom = __webpack_require__("xARA");
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ../node_modules/@reach/router/es/index.js
var es = __webpack_require__("JF+v");

// EXTERNAL MODULE: ../node_modules/gatsby-react-router-scroll/index.js
var gatsby_react_router_scroll = __webpack_require__("5LHb");

// EXTERNAL MODULE: ../node_modules/@mikaelkristiansson/domready/ready.js
var ready = __webpack_require__("Kn+0");
var ready_default = /*#__PURE__*/__webpack_require__.n(ready);

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("Z8gF");

// EXTERNAL MODULE: ./.cache/loader.js + 3 modules
var loader = __webpack_require__("emEt");

// EXTERNAL MODULE: ./.cache/redirects.json
var redirects = __webpack_require__("YLt+");

// EXTERNAL MODULE: ./.cache/emitter.js
var emitter = __webpack_require__("5yr3");

// EXTERNAL MODULE: ../node_modules/gatsby-link/index.js
var gatsby_link = __webpack_require__("SDHo");

// CONCATENATED MODULE: ./.cache/navigation.js
function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}// Convert to a map for faster lookup in maybeRedirect()
var redirectMap=redirects.reduce(function(map,redirect){map[redirect.fromPath]=redirect;return map;},{});function maybeRedirect(pathname){var redirect=redirectMap[pathname];if(redirect!=null){if(false){ var pageResources; }window.___replace(redirect.toPath);return true;}else{return false;}}var navigation_onPreRouteUpdate=function onPreRouteUpdate(location,prevLocation){if(!maybeRedirect(location.pathname)){Object(api_runner_browser["apiRunner"])("onPreRouteUpdate",{location:location,prevLocation:prevLocation});}};var navigation_onRouteUpdate=function onRouteUpdate(location,prevLocation){if(!maybeRedirect(location.pathname)){Object(api_runner_browser["apiRunner"])("onRouteUpdate",{location:location,prevLocation:prevLocation});// Temp hack while awaiting https://github.com/reach/router/issues/119
window.__navigatingToLink=false;}};var navigation_navigate=function navigate(to,options){if(options===void 0){options={};}// Temp hack while awaiting https://github.com/reach/router/issues/119
if(!options.replace){window.__navigatingToLink=true;}var _parsePath=Object(gatsby_link["parsePath"])(to),pathname=_parsePath.pathname;var redirect=redirectMap[pathname];// If we're redirecting, just replace the passed in pathname
// to the one we want to redirect to.
if(redirect){to=redirect.toPath;pathname=Object(gatsby_link["parsePath"])(to).pathname;}// If we had a service worker update, no matter the path, reload window and
// reset the pathname whitelist
if(window.___swUpdated){window.location=pathname;return;}// Start a timer to wait for a second before transitioning and showing a
// loader in case resources aren't around yet.
var timeoutId=setTimeout(function(){emitter["a" /* default */].emit("onDelayedLoadPageResources",{pathname:pathname});Object(api_runner_browser["apiRunner"])("onRouteUpdateDelayed",{location:window.location});},1000);loader["default"].loadPage(pathname).then(function(pageResources){// If no page resources, then refresh the page
// Do this, rather than simply `window.location.reload()`, so that
// pressing the back/forward buttons work - otherwise when pressing
// back, the browser will just change the URL and expect JS to handle
// the change, which won't always work since it might not be a Gatsby
// page.
if(!pageResources||pageResources.status==="error"){window.history.replaceState({},"",location.href);window.location=pathname;}// If the loaded page has a different compilation hash to the
// window, then a rebuild has occurred on the server. Reload.
if( true&&pageResources){if(pageResources.page.webpackCompilationHash!==window.___webpackCompilationHash){// Purge plugin-offline cache
if("serviceWorker"in navigator&&navigator.serviceWorker.controller!==null&&navigator.serviceWorker.controller.state==="activated"){navigator.serviceWorker.controller.postMessage({gatsbyApi:"clearPathResources"});}console.log("Site has changed on server. Reloading browser");window.location=pathname;}}Object(es["navigate"])(to,options);clearTimeout(timeoutId);});};function shouldUpdateScroll(prevRouterProps,_ref){var _this=this;var location=_ref.location;var pathname=location.pathname,hash=location.hash;var results=Object(api_runner_browser["apiRunner"])("shouldUpdateScroll",{prevRouterProps:prevRouterProps,// `pathname` for backwards compatibility
pathname:pathname,routerProps:{location:location},getSavedScrollPosition:function getSavedScrollPosition(args){return _this._stateStorage.read(args);}});if(results.length>0){// Use the latest registered shouldUpdateScroll result, this allows users to override plugin's configuration
// @see https://github.com/gatsbyjs/gatsby/issues/12038
return results[results.length-1];}if(prevRouterProps){var oldPathname=prevRouterProps.location.pathname;if(oldPathname===pathname){// Scroll to element if it exists, if it doesn't, or no hash is provided,
// scroll to top.
return hash?decodeURI(hash.slice(1)):[0,0];}}return true;}function init(){// Temp hack while awaiting https://github.com/reach/router/issues/119
window.__navigatingToLink=false;window.___push=function(to){return navigation_navigate(to,{replace:false});};window.___replace=function(to){return navigation_navigate(to,{replace:true});};window.___navigate=function(to,options){return navigation_navigate(to,options);};// Check for initial page-load redirect
maybeRedirect(window.location.pathname);}// Fire on(Pre)RouteUpdate APIs
var RouteUpdates=/*#__PURE__*/function(_React$Component){_inheritsLoose(RouteUpdates,_React$Component);function RouteUpdates(props){var _this2;_this2=_React$Component.call(this,props)||this;navigation_onPreRouteUpdate(props.location,null);return _this2;}var _proto=RouteUpdates.prototype;_proto.componentDidMount=function componentDidMount(){navigation_onRouteUpdate(this.props.location,null);};_proto.componentDidUpdate=function componentDidUpdate(prevProps,prevState,shouldFireRouteUpdate){if(shouldFireRouteUpdate){navigation_onRouteUpdate(this.props.location,prevProps.location);}};_proto.getSnapshotBeforeUpdate=function getSnapshotBeforeUpdate(prevProps){if(this.props.location.pathname!==prevProps.location.pathname){navigation_onPreRouteUpdate(this.props.location,prevProps.location);return true;}return false;};_proto.render=function render(){return this.props.children;};return RouteUpdates;}(react_default.a.Component);
// EXTERNAL MODULE: ./.cache/page-renderer.js
var page_renderer = __webpack_require__("IOVJ");

// EXTERNAL MODULE: ./.cache/async-requires.js
var async_requires = __webpack_require__("pCP8");
var async_requires_default = /*#__PURE__*/__webpack_require__.n(async_requires);

// EXTERNAL MODULE: ../node_modules/shallow-compare/es/index.js
var shallow_compare_es = __webpack_require__("aiQF");

// CONCATENATED MODULE: ./.cache/ensure-resources.js
function ensure_resources_inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}var ensure_resources_EnsureResources=/*#__PURE__*/function(_React$Component){ensure_resources_inheritsLoose(EnsureResources,_React$Component);function EnsureResources(props){var _this;_this=_React$Component.call(this)||this;var location=props.location,pageResources=props.pageResources;_this.state={location:Object.assign({},location),pageResources:pageResources||loader["default"].loadPageSync(location.pathname)};return _this;}EnsureResources.getDerivedStateFromProps=function getDerivedStateFromProps(_ref,prevState){var location=_ref.location;if(prevState.location.href!==location.href){var pageResources=loader["default"].loadPageSync(location.pathname);return{pageResources:pageResources,location:Object.assign({},location)};}return{location:Object.assign({},location)};};var _proto=EnsureResources.prototype;_proto.loadResources=function loadResources(rawPath){var _this2=this;loader["default"].loadPage(rawPath).then(function(pageResources){if(pageResources&&pageResources.status!=="error"){_this2.setState({location:Object.assign({},window.location),pageResources:pageResources});}else{window.history.replaceState({},"",location.href);window.location=rawPath;}});};_proto.shouldComponentUpdate=function shouldComponentUpdate(nextProps,nextState){// Always return false if we're missing resources.
if(!nextState.pageResources){this.loadResources(nextProps.location.pathname);return false;}// Check if the component or json have changed.
if(this.state.pageResources!==nextState.pageResources){return true;}if(this.state.pageResources.component!==nextState.pageResources.component){return true;}if(this.state.pageResources.json!==nextState.pageResources.json){return true;}// Check if location has changed on a page using internal routing
// via matchPath configuration.
if(this.state.location.key!==nextState.location.key&&nextState.pageResources.page&&(nextState.pageResources.page.matchPath||nextState.pageResources.page.path)){return true;}return Object(shallow_compare_es["a" /* default */])(this,nextProps,nextState);};_proto.render=function render(){return this.props.children(this.state);};return EnsureResources;}(react_default.a.Component);/* harmony default export */ var ensure_resources = (ensure_resources_EnsureResources);
// EXTERNAL MODULE: ./.cache/strip-prefix.js
var strip_prefix = __webpack_require__("cSJ8");

// EXTERNAL MODULE: ./.cache/match-paths.json
var match_paths = __webpack_require__("vf9c");

// CONCATENATED MODULE: ./.cache/production-app.js
function production_app_inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}// Generated during bootstrap
var production_app_loader=new loader["ProdLoader"](async_requires_default.a,match_paths);Object(loader["setLoader"])(production_app_loader);production_app_loader.setApiRunner(api_runner_browser["apiRunner"]);window.asyncRequires=async_requires_default.a;window.___emitter=emitter["a" /* default */];window.___loader=loader["publicLoader"];init();Object(api_runner_browser["apiRunnerAsync"])("onClientEntry").then(function(){// Let plugins register a service worker. The plugin just needs
// to return true.
if(Object(api_runner_browser["apiRunner"])("registerServiceWorker").length>0){__webpack_require__("NSX3");}// In gatsby v2 if Router is used in page using matchPaths
// paths need to contain full path.
// For example:
//   - page have `/app/*` matchPath
//   - inside template user needs to use `/app/xyz` as path
// Resetting `basepath`/`baseuri` keeps current behaviour
// to not introduce breaking change.
// Remove this in v3
var RouteHandler=function RouteHandler(props){return react_default.a.createElement(es["BaseContext"].Provider,{value:{baseuri:"/",basepath:"/"}},react_default.a.createElement(page_renderer["a" /* default */],props));};var LocationHandler=/*#__PURE__*/function(_React$Component){production_app_inheritsLoose(LocationHandler,_React$Component);function LocationHandler(){return _React$Component.apply(this,arguments)||this;}var _proto=LocationHandler.prototype;_proto.render=function render(){var _this=this;var location=this.props.location;return react_default.a.createElement(ensure_resources,{location:location},function(_ref){var pageResources=_ref.pageResources,location=_ref.location;return react_default.a.createElement(RouteUpdates,{location:location},react_default.a.createElement(gatsby_react_router_scroll["ScrollContext"],{location:location,shouldUpdateScroll:shouldUpdateScroll},react_default.a.createElement(es["Router"],{basepath:"",location:location,id:"gatsby-focus-wrapper"},react_default.a.createElement(RouteHandler,Object.assign({path:encodeURI(pageResources.page.path==="/404.html"?Object(strip_prefix["a" /* default */])(location.pathname,""):pageResources.page.matchPath||pageResources.page.path)},_this.props,{location:location,pageResources:pageResources},pageResources.json)))));});};return LocationHandler;}(react_default.a.Component);var _window=window,pagePath=_window.pagePath,browserLoc=_window.location;// Explicitly call navigate if the canonical path (window.pagePath)
// is different to the browser path (window.location.pathname). But
// only if NONE of the following conditions hold:
//
// - The url matches a client side route (page.matchPath)
// - it's a 404 page
// - it's the offline plugin shell (/offline-plugin-app-shell-fallback/)
if(pagePath&&""+pagePath!==browserLoc.pathname&&!(production_app_loader.findMatchPath(Object(strip_prefix["a" /* default */])(browserLoc.pathname,""))||pagePath==="/404.html"||pagePath.match(/^\/404\/?$/)||pagePath.match(/^\/offline-plugin-app-shell-fallback\/?$/))){Object(es["navigate"])(""+pagePath+browserLoc.search+browserLoc.hash,{replace:true});}loader["publicLoader"].loadPage(browserLoc.pathname).then(function(page){if(!page||page.status==="error"){throw new Error("page resources for "+browserLoc.pathname+" not found. Not rendering React");}window.___webpackCompilationHash=page.page.webpackCompilationHash;var Root=function Root(){return react_default.a.createElement(es["Location"],null,function(locationContext){return react_default.a.createElement(LocationHandler,locationContext);});};var WrappedRoot=Object(api_runner_browser["apiRunner"])("wrapRootElement",{element:react_default.a.createElement(Root,null)},react_default.a.createElement(Root,null),function(_ref2){var result=_ref2.result;return{element:result};}).pop();var NewRoot=function NewRoot(){return WrappedRoot;};var renderer=Object(api_runner_browser["apiRunner"])("replaceHydrateFunction",undefined,react_dom_default.a.hydrate)[0];ready_default()(function(){renderer(react_default.a.createElement(NewRoot,null),typeof window!=="undefined"?document.getElementById("___gatsby"):void 0,function(){Object(api_runner_browser["apiRunner"])("onInitialClientRender");});});});});

/***/ }),

/***/ "Wbzz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return graphql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQueryContext", function() { return StaticQueryContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQuery", function() { return StaticQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStaticQuery", function() { return useStaticQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefetchPathname", function() { return prefetchPathname; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mXGw");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("SDHo");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_1___default.a; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withAssetPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_1__["withAssetPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_1__["withPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_1__["parsePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_1__["navigate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "push", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_1__["push"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_1__["replace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_1__["navigateTo"]; });

/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("lw3w");
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "PageRenderer", function() { return _public_page_renderer__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("emEt");
var prefetchPathname=_loader__WEBPACK_IMPORTED_MODULE_3__["default"].enqueue;var StaticQueryContext=react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});function StaticQueryDataRenderer(_ref){var staticQueryData=_ref.staticQueryData,data=_ref.data,query=_ref.query,render=_ref.render;var finalData=data?data.data:staticQueryData[query]&&staticQueryData[query].data;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,finalData&&render(finalData),!finalData&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,"Loading (StaticQuery)"));}var StaticQuery=function StaticQuery(props){var data=props.data,query=props.query,render=props.render,children=props.children;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryContext.Consumer,null,function(staticQueryData){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryDataRenderer,{data:data,query:query,render:render||children,staticQueryData:staticQueryData});});};var useStaticQuery=function useStaticQuery(query){if(typeof react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext!=="function"&&"production"==="development"){throw new Error("You're likely using a version of React that doesn't support Hooks\n"+"Please update React and ReactDOM to 16.8.0 or later to use the useStaticQuery hook.");}var context=react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(StaticQueryContext);if(context[query]&&context[query].data){return context[query].data;}else{throw new Error("The result of this StaticQuery could not be fetched.\n\n"+"This is likely a bug in Gatsby and if refreshing the page does not fix it, "+"please open an issue in https://github.com/gatsbyjs/gatsby/issues");}};function graphql(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls "+"are supposed to only be evaluated at compile time, and then compiled away. "+"Unfortunately, something went wrong and the query was left in the compiled code.\n\n"+"Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.");}

/***/ }),

/***/ "YLt+":
/***/ (function(module) {

module.exports = JSON.parse("[{\"fromPath\":\"/zh/docs/other\",\"isPermanent\":true,\"redirectInBrowser\":true,\"toPath\":\"/zh/docs/other/getting-started\"},{\"fromPath\":\"/zh/docs/specification\",\"isPermanent\":true,\"redirectInBrowser\":true,\"toPath\":\"/zh/docs/specification/getting-started\"},{\"fromPath\":\"/en/docs/specification\",\"isPermanent\":true,\"redirectInBrowser\":true,\"toPath\":\"/en/docs/specification/getting-started\"},{\"fromPath\":\"/en/docs/other\",\"isPermanent\":true,\"redirectInBrowser\":true,\"toPath\":\"/en/docs/other/getting-started\"},{\"fromPath\":\"/en/examples\",\"isPermanent\":true,\"redirectInBrowser\":true,\"toPath\":\"/en/examples/basic\"},{\"fromPath\":\"/zh/examples\",\"isPermanent\":true,\"redirectInBrowser\":true,\"toPath\":\"/zh/examples/basic\"}]");

/***/ }),

/***/ "aaoD":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"header":"Header-module--header--QrvNx","transparent":"Header-module--transparent--3ZG6S","fixed":"Header-module--fixed--3BvQD","container":"Header-module--container--28XPE","isHomePage":"Header-module--isHomePage--3JcXZ","left":"Header-module--left--3TsIM","divider":"Header-module--divider--1xZlR","subProduceName":"Header-module--subProduceName--1BLQm","nav":"Header-module--nav--35wlD","menu":"Header-module--menu--10i8K","activeItem":"Header-module--activeItem--8xX7A","export":"Header-module--export--17QWF","githubCorner":"Header-module--githubCorner--2FzDo","arrow":"Header-module--arrow--7H4HQ","open":"Header-module--open--3UsNv","popup":"Header-module--popup--3X91L","productsMenu":"Header-module--productsMenu--3odTm","popupHidden":"Header-module--popupHidden--3afKn","menuIcon":"Header-module--menuIcon--ZlZB5"};

/***/ }),

/***/ "cSJ8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Remove a prefix from a string. Return the input string if the given prefix
 * isn't found.
 *//* harmony default export */ __webpack_exports__["a"] = (function(str,prefix){if(prefix===void 0){prefix="";}if(!prefix){return str;}prefix+="/";if(str.substr(0,prefix.length)===prefix){return str.slice(prefix.length-1);}return str;});

/***/ }),

/***/ "emEt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.from.js
var es6_array_from = __webpack_require__("YhIr");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__("4aJ6");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__("+jjx");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__("ABKx");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.set.js
var es6_set = __webpack_require__("m1Dn");

// EXTERNAL MODULE: ../node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("W1QL");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("K/PF");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__("lQyR");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.map.js
var es6_map = __webpack_require__("zx98");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("oMRA");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("6d4m");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("5hJT");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__("DbwS");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__("t91x");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.string.ends-with.js
var es6_string_ends_with = __webpack_require__("BDzi");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("75LO");

// CONCATENATED MODULE: ./.cache/prefetch.js
var support=function support(feature){if(typeof document==="undefined"){return false;}var fakeLink=document.createElement("link");try{if(fakeLink.relList&&typeof fakeLink.relList.supports==="function"){return fakeLink.relList.supports(feature);}}catch(err){return false;}return false;};var linkPrefetchStrategy=function linkPrefetchStrategy(url,options){return new Promise(function(resolve,reject){if(typeof document==="undefined"){reject();return;}var link=document.createElement("link");link.setAttribute("rel","prefetch");link.setAttribute("href",url);Object.keys(options).forEach(function(key){link.setAttribute(key,options[key]);});link.onload=resolve;link.onerror=reject;var parentElement=document.getElementsByTagName("head")[0]||document.getElementsByName("script")[0].parentNode;parentElement.appendChild(link);});};var xhrPrefetchStrategy=function xhrPrefetchStrategy(url){return new Promise(function(resolve,reject){var req=new XMLHttpRequest();req.open("GET",url,true);req.onload=function(){if(req.status===200){resolve();}else{reject();}};req.send(null);});};var supportedPrefetchStrategy=support("prefetch")?linkPrefetchStrategy:xhrPrefetchStrategy;var preFetched={};var prefetch_prefetch=function prefetch(url,options){return new Promise(function(resolve){if(preFetched[url]){resolve();return;}supportedPrefetchStrategy(url,options).then(function(){resolve();preFetched[url]=true;}).catch(function(){});// 404s are logged to the console anyway
});};/* harmony default export */ var _cache_prefetch = (prefetch_prefetch);
// EXTERNAL MODULE: ./.cache/emitter.js
var emitter = __webpack_require__("5yr3");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("asZ9");

// EXTERNAL MODULE: ../node_modules/@reach/router/es/lib/utils.js
var utils = __webpack_require__("ZkUl");

// EXTERNAL MODULE: ./.cache/strip-prefix.js
var strip_prefix = __webpack_require__("cSJ8");

// CONCATENATED MODULE: ./.cache/normalize-page-path.js
/* harmony default export */ var normalize_page_path = (function(path){if(path===undefined){return path;}if(path==="/"){return"/";}if(path.charAt(path.length-1)==="/"){return path.slice(0,-1);}return path;});
// CONCATENATED MODULE: ./.cache/find-path.js
var pathCache=new Map();var find_path_matchPaths=[];var find_path_trimPathname=function trimPathname(rawPathname){var pathname=decodeURIComponent(rawPathname);// Remove the pathPrefix from the pathname.
var trimmedPathname=Object(strip_prefix["a" /* default */])(pathname,"")// Remove any hashfragment
.split("#")[0]// Remove search query
.split("?")[0];return trimmedPathname;};/**
 * Set list of matchPaths
 *
 * @param {Array<{path: string, matchPath: string}>} value collection of matchPaths
 */var setMatchPaths=function setMatchPaths(value){find_path_matchPaths=value;};/**
 * Return a matchpath url
 * if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
 * `/foo?bar=far` => `/page1`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string|null}
 */var find_path_findMatchPath=function findMatchPath(rawPathname){var trimmedPathname=find_path_cleanPath(rawPathname);for(var _iterator=find_path_matchPaths,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[Symbol.iterator]();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref=_i.value;}var _ref2=_ref,matchPath=_ref2.matchPath,path=_ref2.path;if(Object(utils["b" /* match */])(matchPath,trimmedPathname)){return normalize_page_path(path);}}return null;};// Given a raw URL path, returns the cleaned version of it (trim off
// `#` and query params), or if it matches an entry in
// `match-paths.json`, its matched path is returned
//
// E.g. `/foo?bar=far` => `/foo`
//
// Or if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
// `/foo?bar=far` => `/page1`
var findPath=function findPath(rawPathname){var trimmedPathname=find_path_trimPathname(rawPathname);if(pathCache.has(trimmedPathname)){return pathCache.get(trimmedPathname);}var foundPath=find_path_findMatchPath(trimmedPathname);if(!foundPath){foundPath=find_path_cleanPath(rawPathname);}pathCache.set(trimmedPathname,foundPath);return foundPath;};/**
 * Clean a url and converts /index.html => /
 * E.g. `/foo?bar=far` => `/foo`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string}
 */var find_path_cleanPath=function cleanPath(rawPathname){var trimmedPathname=find_path_trimPathname(rawPathname);var foundPath=trimmedPathname;if(foundPath==="/index.html"){foundPath="/";}foundPath=normalize_page_path(foundPath);return foundPath;};
// CONCATENATED MODULE: ./.cache/loader.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseLoader", function() { return loader_BaseLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdLoader", function() { return loader_ProdLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoader", function() { return setLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publicLoader", function() { return publicLoader; });
function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}var preferDefault=function preferDefault(m){return m&&m.default||m;};var stripSurroundingSlashes=function stripSurroundingSlashes(s){s=s[0]==="/"?s.slice(1):s;s=s.endsWith("/")?s.slice(0,-1):s;return s;};var createPageDataUrl=function createPageDataUrl(path){var fixedPath=path==="/"?"index":stripSurroundingSlashes(path);return ""+"/page-data/"+fixedPath+"/page-data.json";};var doFetch=function doFetch(url,method){if(method===void 0){method="GET";}return new Promise(function(resolve,reject){var req=new XMLHttpRequest();req.open(method,url,true);req.onreadystatechange=function(){if(req.readyState==4){resolve(req);}};req.send(null);});};var _loadPageDataJson=function loadPageDataJson(loadObj){var pagePath=loadObj.pagePath,_loadObj$retries=loadObj.retries,retries=_loadObj$retries===void 0?0:_loadObj$retries;var url=createPageDataUrl(pagePath);return doFetch(url).then(function(req){var status=req.status,responseText=req.responseText;// Handle 200
if(status===200){try{var jsonPayload=JSON.parse(responseText);if(jsonPayload.path===undefined){throw new Error("not a valid pageData response");}return Object.assign(loadObj,{status:"success",payload:jsonPayload});}catch(err){// continue regardless of error
}}// Handle 404
if(status===404||status===200){// If the request was for a 404 page and it doesn't exist, we're done
if(pagePath==="/404.html"){return Object.assign(loadObj,{status:"failure"});}// Need some code here to cache the 404 request. In case
// multiple loadPageDataJsons result in 404s
return _loadPageDataJson(Object.assign(loadObj,{pagePath:"/404.html",notFound:true}));}// handle 500 response (Unrecoverable)
if(status===500){return Object.assign(loadObj,{status:"error"});}// Handle everything else, including status === 0, and 503s. Should retry
if(retries<3){return _loadPageDataJson(Object.assign(loadObj,{retries:retries+1}));}// Retried 3 times already, result is a failure.
return Object.assign(loadObj,{status:"error"});});};var doesConnectionSupportPrefetch=function doesConnectionSupportPrefetch(){if("connection"in navigator&&typeof navigator.connection!=="undefined"){if((navigator.connection.effectiveType||"").includes("2g")){return false;}if(navigator.connection.saveData){return false;}}return true;};var toPageResources=function toPageResources(pageData,component){if(component===void 0){component=null;}var page={componentChunkName:pageData.componentChunkName,path:pageData.path,webpackCompilationHash:pageData.webpackCompilationHash,matchPath:pageData.matchPath};return{component:component,json:pageData.result,page:page};};var loader_BaseLoader=/*#__PURE__*/function(){function BaseLoader(loadComponent,matchPaths){// Map of pagePath -> Page. Where Page is an object with: {
//   status: `success` || `error`,
//   payload: PageResources, // undefined if `error`
// }
// PageResources is {
//   component,
//   json: pageData.result,
//   page: {
//     componentChunkName,
//     path,
//     webpackCompilationHash,
//   }
// }
this.pageDb=new Map();this.inFlightDb=new Map();this.pageDataDb=new Map();this.prefetchTriggered=new Set();this.prefetchCompleted=new Set();this.loadComponent=loadComponent;setMatchPaths(matchPaths);}var _proto=BaseLoader.prototype;_proto.setApiRunner=function setApiRunner(apiRunner){this.apiRunner=apiRunner;this.prefetchDisabled=apiRunner("disableCorePrefetching").some(function(a){return a;});};_proto.loadPageDataJson=function loadPageDataJson(rawPath){var _this=this;var pagePath=findPath(rawPath);if(this.pageDataDb.has(pagePath)){return Promise.resolve(this.pageDataDb.get(pagePath));}return _loadPageDataJson({pagePath:pagePath}).then(function(pageData){_this.pageDataDb.set(pagePath,pageData);return pageData;});};_proto.findMatchPath=function findMatchPath(rawPath){return find_path_findMatchPath(rawPath);}// TODO check all uses of this and whether they use undefined for page resources not exist
;_proto.loadPage=function loadPage(rawPath){var _this2=this;var pagePath=findPath(rawPath);if(this.pageDb.has(pagePath)){var page=this.pageDb.get(pagePath);return Promise.resolve(page.payload);}if(this.inFlightDb.has(pagePath)){return this.inFlightDb.get(pagePath);}var inFlight=Promise.all([this.loadAppData(),this.loadPageDataJson(pagePath)]).then(function(allData){var result=allData[1];if(result.status==="error"){return{status:"error"};}if(result.status==="failure"){// throw an error so error trackers can pick this up
throw new Error("404 page could not be found. Checkout https://www.gatsbyjs.org/docs/add-404-page/");}var pageData=result.payload;var _pageData=pageData,componentChunkName=_pageData.componentChunkName;return _this2.loadComponent(componentChunkName).then(function(component){var finalResult={createdAt:new Date()};var pageResources;if(!component){finalResult.status="error";}else{finalResult.status="success";if(result.notFound===true){finalResult.notFound=true;}pageData=Object.assign(pageData,{webpackCompilationHash:allData[0]?allData[0].webpackCompilationHash:""});pageResources=toPageResources(pageData,component);finalResult.payload=pageResources;emitter["a" /* default */].emit("onPostLoadPageResources",{page:pageResources,pageResources:pageResources});}_this2.pageDb.set(pagePath,finalResult);// undefined if final result is an error
return pageResources;});})// prefer duplication with then + catch over .finally to prevent problems in ie11 + firefox
.then(function(response){_this2.inFlightDb.delete(pagePath);return response;}).catch(function(err){_this2.inFlightDb.delete(pagePath);throw err;});this.inFlightDb.set(pagePath,inFlight);return inFlight;}// returns undefined if loading page ran into errors
;_proto.loadPageSync=function loadPageSync(rawPath){var pagePath=findPath(rawPath);if(this.pageDb.has(pagePath)){return this.pageDb.get(pagePath).payload;}return undefined;};_proto.shouldPrefetch=function shouldPrefetch(pagePath){// Skip prefetching if we know user is on slow or constrained connection
if(!doesConnectionSupportPrefetch()){return false;}// Check if the page exists.
if(this.pageDb.has(pagePath)){return false;}return true;};_proto.prefetch=function prefetch(pagePath){var _this3=this;if(!this.shouldPrefetch(pagePath)){return false;}// Tell plugins with custom prefetching logic that they should start
// prefetching this path.
if(!this.prefetchTriggered.has(pagePath)){this.apiRunner("onPrefetchPathname",{pathname:pagePath});this.prefetchTriggered.add(pagePath);}// If a plugin has disabled core prefetching, stop now.
if(this.prefetchDisabled){return false;}var realPath=findPath(pagePath);// Todo make doPrefetch logic cacheable
// eslint-disable-next-line consistent-return
this.doPrefetch(realPath).then(function(){if(!_this3.prefetchCompleted.has(pagePath)){_this3.apiRunner("onPostPrefetchPathname",{pathname:pagePath});_this3.prefetchCompleted.add(pagePath);}});return true;};_proto.doPrefetch=function doPrefetch(pagePath){throw new Error("doPrefetch not implemented");};_proto.hovering=function hovering(rawPath){this.loadPage(rawPath);};_proto.getResourceURLsForPathname=function getResourceURLsForPathname(rawPath){var pagePath=findPath(rawPath);var page=this.pageDataDb.get(pagePath);if(page){var pageResources=toPageResources(page.payload);return[].concat(_toConsumableArray(createComponentUrls(pageResources.page.componentChunkName)),[createPageDataUrl(pagePath)]);}else{return null;}};_proto.isPageNotFound=function isPageNotFound(rawPath){var pagePath=findPath(rawPath);var page=this.pageDb.get(pagePath);return page&&page.notFound===true;};_proto.loadAppData=function loadAppData(retries){var _this4=this;if(retries===void 0){retries=0;}return doFetch(""+"/page-data/app-data.json").then(function(req){var status=req.status,responseText=req.responseText;var appData;if(status!==200&&retries<3){// Retry 3 times incase of failures
return _this4.loadAppData(retries+1);}// Handle 200
if(status===200){try{var jsonPayload=JSON.parse(responseText);if(jsonPayload.webpackCompilationHash===undefined){throw new Error("not a valid app-data response");}appData=jsonPayload;}catch(err){// continue regardless of error
}}return appData;});};return BaseLoader;}();var createComponentUrls=function createComponentUrls(componentChunkName){return window.___chunkMapping[componentChunkName].map(function(chunk){return ""+chunk;});};var loader_ProdLoader=/*#__PURE__*/function(_BaseLoader){_inheritsLoose(ProdLoader,_BaseLoader);function ProdLoader(asyncRequires,matchPaths){var loadComponent=function loadComponent(chunkName){return asyncRequires.components[chunkName]().then(preferDefault);};return _BaseLoader.call(this,loadComponent,matchPaths)||this;}var _proto2=ProdLoader.prototype;_proto2.doPrefetch=function doPrefetch(pagePath){var _this5=this;var pageDataUrl=createPageDataUrl(pagePath);return _cache_prefetch(pageDataUrl,{crossOrigin:"anonymous",as:"fetch"}).then(function(){return(// This was just prefetched, so will return a response from
// the cache instead of making another request to the server
_this5.loadPageDataJson(pagePath));}).then(function(result){if(result.status!=="success"){return Promise.resolve();}var pageData=result.payload;var chunkName=pageData.componentChunkName;var componentUrls=createComponentUrls(chunkName);return Promise.all(componentUrls.map(_cache_prefetch)).then(function(){return pageData;});});};return ProdLoader;}(loader_BaseLoader);var instance;var setLoader=function setLoader(_loader){instance=_loader;};var publicLoader={// Deprecated methods. As far as we're aware, these are only used by
// core gatsby and the offline plugin, however there's a very small
// chance they're called by others.
getResourcesForPathname:function getResourcesForPathname(rawPath){console.warn("Warning: getResourcesForPathname is deprecated. Use loadPage instead");return instance.i.loadPage(rawPath);},getResourcesForPathnameSync:function getResourcesForPathnameSync(rawPath){console.warn("Warning: getResourcesForPathnameSync is deprecated. Use loadPageSync instead");return instance.i.loadPageSync(rawPath);},enqueue:function enqueue(rawPath){return instance.prefetch(rawPath);},// Real methods
getResourceURLsForPathname:function getResourceURLsForPathname(rawPath){return instance.getResourceURLsForPathname(rawPath);},loadPage:function loadPage(rawPath){return instance.loadPage(rawPath);},loadPageSync:function loadPageSync(rawPath){return instance.loadPageSync(rawPath);},prefetch:function prefetch(rawPath){return instance.prefetch(rawPath);},isPageNotFound:function isPageNotFound(rawPath){return instance.isPageNotFound(rawPath);},hovering:function hovering(rawPath){return instance.hovering(rawPath);},loadAppData:function loadAppData(){return instance.loadAppData();}};/* harmony default export */ var loader = __webpack_exports__["default"] = (publicLoader);

/***/ }),

/***/ "hedj":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"main":"layout-module--main--2kZrn"};

/***/ }),

/***/ "j2P5":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"products":"Product-module--products--3jgCj","container":"Product-module--container--1U_aM","show":"Product-module--show--kqtKc","mask":"Product-module--mask--OrbGy","product":"Product-module--product--3Tixh","productContent":"Product-module--productContent--ajiW0","productSlogan":"Product-module--productSlogan--eYqa5","productDescription":"Product-module--productDescription--q6OiA","productLinks":"Product-module--productLinks--2Rj_8"};

/***/ }),

/***/ "lw3w":
/***/ (function(module, exports, __webpack_require__) {

var preferDefault=function preferDefault(m){return m&&m.default||m;};if(false){}else if(true){module.exports=preferDefault(__webpack_require__("rzlk"));}else{}

/***/ }),

/***/ "nqlD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mXGw");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony default export */ __webpack_exports__["a"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext);

/***/ }),

/***/ "pCP8":
/***/ (function(module, exports, __webpack_require__) {

// prefer default export if available
var preferDefault=function preferDefault(m){return m&&m.default||m;};exports.components={"component---node-modules-gatsby-plugin-offline-app-shell-js":function componentNodeModulesGatsbyPluginOfflineAppShellJs(){return __webpack_require__.e(/* import() | component---node-modules-gatsby-plugin-offline-app-shell-js */ 9).then(__webpack_require__.t.bind(null, "1vKc", 7));},"component---antv-gatsby-theme-antv-site-templates-document-tsx":function componentAntvGatsbyThemeAntvSiteTemplatesDocumentTsx(){return Promise.all(/* import() | component---antv-gatsby-theme-antv-site-templates-document-tsx */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(17), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, "+loJ"));},"component---antv-gatsby-theme-antv-site-templates-example-tsx":function componentAntvGatsbyThemeAntvSiteTemplatesExampleTsx(){return Promise.all(/* import() | component---antv-gatsby-theme-antv-site-templates-example-tsx */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(16), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, "Rvvu"));},"component---antv-gatsby-theme-antv-site-pages-index-tsx":function componentAntvGatsbyThemeAntvSitePagesIndexTsx(){return __webpack_require__.e(/* import() | component---antv-gatsby-theme-antv-site-pages-index-tsx */ 6).then(__webpack_require__.bind(null, "KByP"));},"component---antv-gatsby-theme-antv-site-pages-404-tsx":function componentAntvGatsbyThemeAntvSitePages404Tsx(){return Promise.all(/* import() | component---antv-gatsby-theme-antv-site-pages-404-tsx */[__webpack_require__.e(3), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, "EVqs"));},"component---site-pages-independent-en-tsx":function componentSitePagesIndependentEnTsx(){return __webpack_require__.e(/* import() | component---site-pages-independent-en-tsx */ 10).then(__webpack_require__.bind(null, "tOJG"));},"component---site-pages-independent-zh-tsx":function componentSitePagesIndependentZhTsx(){return __webpack_require__.e(/* import() | component---site-pages-independent-zh-tsx */ 11).then(__webpack_require__.bind(null, "BxFN"));},"component---site-pages-index-en-tsx":function componentSitePagesIndexEnTsx(){return Promise.all(/* import() | component---site-pages-index-en-tsx */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, "ug36"));},"component---site-pages-index-zh-tsx":function componentSitePagesIndexZhTsx(){return Promise.all(/* import() | component---site-pages-index-zh-tsx */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, "jAeI"));}};

/***/ }),

/***/ "qca1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "rzlk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5hJT");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("mXGw");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("IOVJ");
var ProdPageRenderer=function ProdPageRenderer(_ref){var location=_ref.location,pageResources=_ref.pageResources;if(!pageResources){return null;}return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_page_renderer__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],Object.assign({location:location,pageResources:pageResources},pageResources.json));};/* harmony default export */ __webpack_exports__["default"] = (ProdPageRenderer);

/***/ }),

/***/ "sZHf":
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__("mXGw");

function ExternalLink (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"}));
}

ExternalLink.defaultProps = {"width":"24","height":"24","fill":"#000","viewBox":"0 0 24 24"};

module.exports = ExternalLink;

ExternalLink.default = ExternalLink;


/***/ }),

/***/ "vTVJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("5hJT");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.regexp.constructor.js
var es6_regexp_constructor = __webpack_require__("J8hF");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("Z8gF");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("oMRA");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("6d4m");

// EXTERNAL MODULE: ./public/static/d/2084297051.json
var _2084297051 = __webpack_require__("PBSq");

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__("mXGw");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__("Wbzz");

// EXTERNAL MODULE: ../node_modules/i18next/dist/esm/i18next.js + 18 modules
var i18next = __webpack_require__("BJ7Q");

// EXTERNAL MODULE: ../node_modules/react-i18next/dist/es/index.js + 9 modules
var es = __webpack_require__("CE6G");

// EXTERNAL MODULE: ../node_modules/ptz-i18n/dist/index.js
var dist = __webpack_require__("wc+d");

// EXTERNAL MODULE: ../node_modules/react-helmet/lib/Helmet.js
var Helmet = __webpack_require__("tj/o");
var Helmet_default = /*#__PURE__*/__webpack_require__.n(Helmet);

// EXTERNAL MODULE: ../@antv/gatsby-theme-antv/site/components/Seo.tsx
var Seo = __webpack_require__("MlAH");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.string.fixed.js
var es6_string_fixed = __webpack_require__("BTfu");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.string.ends-with.js
var es6_string_ends_with = __webpack_require__("BDzi");

// EXTERNAL MODULE: ../node_modules/antd/es/icon/style/index.js
var icon_style = __webpack_require__("EOmM");

// EXTERNAL MODULE: ../node_modules/antd/es/icon/index.js + 4 modules
var es_icon = __webpack_require__("epfg");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.string.link.js
var es6_string_link = __webpack_require__("ScpY");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.string.starts-with.js
var es6_string_starts_with = __webpack_require__("FEHE");

// EXTERNAL MODULE: ../node_modules/antd/es/message/style/index.js
var message_style = __webpack_require__("ttYz");

// EXTERNAL MODULE: ../node_modules/antd/es/message/index.js
var message = __webpack_require__("g5Li");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("GkPX");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__("9ovy");

// EXTERNAL MODULE: ../node_modules/react-use/esm/useMedia.js + 1 modules
var useMedia = __webpack_require__("K4Ra");

// EXTERNAL MODULE: ../node_modules/classnames/index.js
var classnames = __webpack_require__("8Jek");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ../node_modules/git-url-parse/lib/index.js
var lib = __webpack_require__("XVYZ");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.regexp.search.js
var es6_regexp_search = __webpack_require__("nsbO");

// EXTERNAL MODULE: ../@antv/gatsby-theme-antv/site/components/Search.module.less
var Search_module = __webpack_require__("Bytu");
var Search_module_default = /*#__PURE__*/__webpack_require__.n(Search_module);

// CONCATENATED MODULE: ../@antv/gatsby-theme-antv/site/components/Search.tsx








function initDocSearch(docsearch, lang) {
  docsearch({
    apiKey: '194b1be7fb1254c787f4e036912af3eb',
    indexName: 'antv',
    inputSelector: "." + Search_module_default.a.input,
    algoliaOptions: {
      facetFilters: ["tags:" + lang]
    },
    transformData: function transformData(hits) {
      hits.forEach(function (hit) {
        /* eslint-disable no-param-reassign */
        hit.url = hit.url.replace('g2.antv.vision', window.location.host);
        hit.url = hit.url.replace('g6.antv.vision', window.location.host);
        hit.url = hit.url.replace('f2.antv.vision', window.location.host);
        hit.url = hit.url.replace('l7.antv.vision', window.location.host);
        hit.url = hit.url.replace('g2plot.antv.vision', window.location.host);
        hit.url = hit.url.replace('graphin.antv.vision', window.location.host);
        hit.url = hit.url.replace('https:', window.location.protocol);
        hit.url = hit.url.replace('#gatsby-focus-wrapper', '');
        /* eslint-enable no-param-reassign */
      });
      return hits;
    },
    debug: false // Set debug to true if you want to inspect the dropdown

  });
}

var Search_Search = function Search() {
  var _useTranslation = Object(es["b" /* useTranslation */])(),
      t = _useTranslation.t,
      i18n = _useTranslation.i18n;

  Object(react["useEffect"])(function () {
    if (typeof window !== 'undefined') {
      __webpack_require__.e(/* import() */ 15).then(__webpack_require__.t.bind(null, "ZrJC", 7)).then(function (_ref) {
        var docsearch = _ref.default;
        initDocSearch(docsearch, i18n.language);
      });
    }
  }, []);
  return react_default.a.createElement("label", {
    className: Search_module_default.a.search,
    htmlFor: "search"
  }, react_default.a.createElement(es_icon["a" /* default */], {
    type: "search",
    className: Search_module_default.a.icon
  }), react_default.a.createElement("input", {
    className: Search_module_default.a.input,
    id: "search",
    placeholder: t('搜索…')
  }));
};

/* harmony default export */ var components_Search = (Search_Search);
// EXTERNAL MODULE: ../@antv/gatsby-theme-antv/site/components/Product.module.less
var Product_module = __webpack_require__("j2P5");
var Product_module_default = /*#__PURE__*/__webpack_require__.n(Product_module);

// CONCATENATED MODULE: ../@antv/gatsby-theme-antv/site/components/Product.tsx







var getTarget = function getTarget(url) {
  return url.startsWith('http') && !url.includes('gitee.io') && !url.includes('antv.vision') ? '_blank' : '_self';
};

var Product_Product = function Product(_ref) {
  var name = _ref.name,
      icon = _ref.icon,
      _ref$url = _ref.url,
      url = _ref$url === void 0 ? '' : _ref$url,
      slogan = _ref.slogan,
      description = _ref.description,
      _ref$links = _ref.links,
      links = _ref$links === void 0 ? [] : _ref$links,
      style = _ref.style,
      language = _ref.language;
  return react_default.a.createElement("li", {
    className: Product_module_default.a.product,
    style: style
  }, react_default.a.createElement("a", {
    href: url,
    target: getTarget(url)
  }, react_default.a.createElement("img", {
    alt: name,
    src: icon
  })), react_default.a.createElement("div", {
    className: Product_module_default.a.productContent
  }, react_default.a.createElement("a", {
    href: url,
    target: getTarget(url)
  }, react_default.a.createElement("h4", null, name, react_default.a.createElement("span", {
    className: Product_module_default.a.productSlogan,
    style: {
      opacity: language === 'en' ? 0.7 : ''
    }
  }, slogan))), react_default.a.createElement("div", {
    className: Product_module_default.a.productDescription
  }, description), react_default.a.createElement("div", {
    className: Product_module_default.a.productLinks
  }, links.slice(0, 2).map(function (item) {
    return react_default.a.createElement("a", {
      href: item.url,
      target: getTarget(item.url || ''),
      key: item.url
    }, item.title);
  }))));
};

/* harmony default export */ var components_Product = (Product_Product);
// CONCATENATED MODULE: ../@antv/gatsby-theme-antv/site/components/getProducts.tsx




var tuple = function tuple() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args;
};

var Categories = tuple('basic', 'extension', 'ecology');
var ANTV_DOMAIN = 'antv.vision';
var getProducts_getProducts = function getProducts(_ref) {
  var t = _ref.t,
      language = _ref.language;
  var products = [{
    title: 'G2',
    icon: 'https://gw.alipayobjects.com/zos/antfincdn/trEfLRh5pc/G2%252520keshihuatuxingyufa.svg',
    slogan: t('可视化引擎'),
    description: t('数据驱动，高度易用，可扩展的可视化图形语法。'),
    category: Categories[0],
    links: [{
      icon: react_default.a.createElement(es_icon["a" /* default */], {
        type: "home"
      }),
      title: t('产品首页'),
      url: "https://g2." + ANTV_DOMAIN + "/" + language
    }, {
      icon: react_default.a.createElement(es_icon["a" /* default */], {
        type: "pie-chart"
      }),
      title: t('图表示例'),
      url: "https://g2." + ANTV_DOMAIN + "/" + language + "/examples"
    }, {
      icon: react_default.a.createElement(es_icon["a" /* default */], {
        type: "read"
      }),
      title: t('使用文档'),
      url: "https://g2." + ANTV_DOMAIN + "/" + language + "/docs/manual"
    }, {
      icon: react_default.a.createElement(es_icon["a" /* default */], {
        type: "read"
      }),
      title: t('API 文档'),
      url: "https://g2." + ANTV_DOMAIN + "/" + language + "/docs/api"
    }, {
      icon: react_default.a.createElement(es_icon["a" /* default */], {
        type: "history"
      }),
      title: t('更新日志'),
      url: "https://github.com/antvis/g2/blob/master/CHANGELOG.md",
      openExternal: true
    }, {
      icon: react_default.a.createElement(es_icon["a" /* default */], {
        type: "github"
      }),
      title: t('GitHub 仓库'),
      url: "https://github.com/antvis/g2",
      openExternal: true
    }, {
      icon: '🇨🇳',
      title: t('国内镜像'),
      url: "https://antv-g2.gitee.io",
      openExternal: true
    }]
  }, {
    title: 'G6',
    icon: 'https://gw.alipayobjects.com/zos/antfincdn/zS1wZZJVcJ/G6%252520tukeshihuayinqing.svg',
    slogan: t('图可视化引擎'),
    description: t('便捷的关系数据可视化引擎与图分析工具。'),
    category: Categories[0],
    links: [{
      icon: react_default.a.createElement(es_icon["a" /* default */], {
        type: "home"
      }),
      title: t('产品首页'),
      url: "https://g6." + ANTV_DOMAIN + "/" + language
    }, {
      icon: react_default.a.createElement(es_icon["a" /* default */], {
        type: "pie-chart"
      }),
      title: t('图表示例'),
      url: "https://g6." + ANTV_DOMAIN + "/" + language + "/examples"
    }, {
      icon: react_default.a.createElement(es_icon["a" /* default */], {
        type: "read"
      }),
      title: t('使用文档'),
      url: "https://g6." + ANTV_DOMAIN + "/" + language + "/docs/manual"
    }, {
      icon: react_default.a.createElement(es_icon["a" /* default */], {
        type: "read"
      }),
      title: t('API 文档'),
      url: "https://g6." + ANTV_DOMAIN + "/" + language + "/docs/api/GlobalAPI"
    }, {
      icon: react_default.a.createElement(es_icon["a" /* default */], {
        type: "history"
      }),
      title: t('更新日志'),
      url: "https://github.com/antvis/g6/blob/master/CHANGELOG.md",
      openExternal: true
    }, {
      icon: react_default.a.createElement(es_icon["a" /* default */], {
        type: "github"
      }),
      title: t('GitHub 仓库'),
      url: "https://github.com/antvis/g6",
      openExternal: true
    }, {
      icon: '🇨🇳',
      title: t('国内镜像'),
      url: "https://antv-g6.gitee.io",
      openExternal: true
    }]
  }, {
    title: 'F2',
    icon: 'https://gw.alipayobjects.com/zos/antfincdn/D%26fDbWqVkv/F2%252520yidongduankeshihuafangan.svg',
    slogan: t('移动可视化方案'),
    description: t('专注于移动端的可视化解决方案，兼容 H5/小程序/Weex 等多端环境'),
    category: Categories[0],
    links: [{
      icon: react_default.a.createElement(es_icon["a" /* default */], {
        type: "home"
      }),
      title: t('产品首页'),
      url: "https://f2." + ANTV_DOMAIN + "/" + language
    }, {
      icon: react_default.a.createElement(es_icon["a" /* default */], {
        type: "pie-chart"
      }),
      title: t('图表示例'),
      url: "https://f2." + ANTV_DOMAIN + "/" + language + "/examples"
    }, {
      icon: react_default.a.createElement(es_icon["a" /* default */], {
        type: "read"
      }),
      title: t('使用文档'),
      url: "https://f2." + ANTV_DOMAIN + "/" + language + "/docs/tutorial/getting-started"
    }, {
      icon: react_default.a.createElement(es_icon["a" /* default */], {
        type: "read"
      }),
      title: t('API 文档'),
      url: "https://f2." + ANTV_DOMAIN + "/" + language + "/docs/api"
    }, {
      icon: react_default.a.createElement(es_icon["a" /* default */], {
        type: "history"
      }),
      title: t('更新日志'),
      url: "https://github.com/antvis/f2/blob/master/CHANGELOG.md",
      openExternal: true
    }, {
      icon: react_default.a.createElement(es_icon["a" /* default */], {
        type: "github"
      }),
      title: t('GitHub 仓库'),
      url: "https://github.com/antvis/f2",
      openExternal: true
    }, {
      icon: '🇨🇳',
      title: t('国内镜像'),
      url: "https://antv-f2.gitee.io",
      openExternal: true
    }]
  }, {
    title: 'L7',
    icon: 'https://gw.alipayobjects.com/zos/antfincdn/OI%26h7HXH33/L7%252520dilikongjianshujukeshihua.svg',
    slogan: t('地理空间数据可视化'),
    description: t('高性能/高渲染质量的地理空间数据可视化框架。'),
    category: Categories[0],
    links: [{
      icon: react_default.a.createElement(es_icon["a" /* default */], {
        type: "home"
      }),
      title: t('产品首页'),
      url: "https://l7." + ANTV_DOMAIN + "/" + language
    }, {
      icon: react_default.a.createElement(es_icon["a" /* default */], {
        type: "pie-chart"
      }),
      title: t('图表示例'),
      url: "https://l7." + ANTV_DOMAIN + "/" + language + "/examples"
    }, {
      icon: react_default.a.createElement(es_icon["a" /* default */], {
        type: "read"
      }),
      title: t('使用文档'),
      url: "https://l7." + ANTV_DOMAIN + "/" + language + "/docs/manual/tutorial"
    }, {
      icon: react_default.a.createElement(es_icon["a" /* default */], {
        type: "read"
      }),
      title: t('API 文档'),
      url: "https://l7." + ANTV_DOMAIN + "/" + language + "/docs/API"
    }, {
      icon: react_default.a.createElement(es_icon["a" /* default */], {
        type: "history"
      }),
      title: t('更新日志'),
      url: "https://github.com/antvis/L7/blob/master/CHANGELOG.md",
      openExternal: true
    }, {
      icon: react_default.a.createElement(es_icon["a" /* default */], {
        type: "github"
      }),
      title: t('GitHub 仓库'),
      url: "https://github.com/antvis/L7",
      openExternal: true
    }, {
      icon: '🇨🇳',
      title: t('国内镜像'),
      url: "https://antv-l7.gitee.io",
      openExternal: true
    }]
  }, {
    title: 'G2Plot',
    icon: 'https://gw.alipayobjects.com/zos/antfincdn/SlbIagEvT7/G2plot.svg',
    slogan: t('开箱即用的图表库'),
    description: t('开箱即用、易于配置、极致体验的通用图表库。'),
    category: Categories[1],
    links: [{
      icon: react_default.a.createElement(es_icon["a" /* default */], {
        type: "home"
      }),
      title: t('产品首页'),
      url: "https://g2plot." + ANTV_DOMAIN + "/" + language
    }, {
      icon: react_default.a.createElement(es_icon["a" /* default */], {
        type: "pie-chart"
      }),
      title: t('图表示例'),
      url: "https://g2plot." + ANTV_DOMAIN + "/" + language + "/examples"
    }, {
      icon: react_default.a.createElement(es_icon["a" /* default */], {
        type: "read"
      }),
      title: t('使用文档'),
      url: "https://g2plot." + ANTV_DOMAIN + "/" + language + "/docs/manual"
    }, {
      icon: react_default.a.createElement(es_icon["a" /* default */], {
        type: "history"
      }),
      title: t('更新日志'),
      url: "https://github.com/antvis/g2plot/blob/master/CHANGELOG.md",
      openExternal: true
    }, {
      icon: react_default.a.createElement(es_icon["a" /* default */], {
        type: "github"
      }),
      title: t('GitHub 仓库'),
      url: "https://github.com/antvis/g2plot",
      openExternal: true
    }, {
      icon: '🇨🇳',
      title: t('国内镜像'),
      url: "https://antv-g2plot.gitee.io",
      openExternal: true
    }]
  }, {
    title: 'Graphin',
    icon: 'https://gw.alipayobjects.com/zos/antfincdn/0b4HzOcEJY/Graphin.svg',
    slogan: t(''),
    description: t('基于 G6 封装的图分析应用组件。'),
    category: Categories[1],
    links: [{
      icon: react_default.a.createElement(es_icon["a" /* default */], {
        type: "home"
      }),
      title: t('产品首页'),
      url: "https://graphin." + ANTV_DOMAIN + "/" + language
    }, {
      icon: react_default.a.createElement(es_icon["a" /* default */], {
        type: "read"
      }),
      title: t('使用文档'),
      url: "https://graphin." + ANTV_DOMAIN + "/" + language + "/docs/manual/introduction"
    }, {
      icon: react_default.a.createElement(es_icon["a" /* default */], {
        type: "read"
      }),
      title: t('API 文档'),
      url: "https://graphin." + ANTV_DOMAIN + "/" + language + "/docs/api/graphin"
    }, {
      icon: react_default.a.createElement(es_icon["a" /* default */], {
        type: "history"
      }),
      title: t('更新日志'),
      url: "https://github.com/antvis/graphin/blob/master/CHANGELOG.md",
      openExternal: true
    }, {
      icon: react_default.a.createElement(es_icon["a" /* default */], {
        type: "github"
      }),
      title: t('GitHub 仓库'),
      url: "https://github.com/antvis/graphin",
      openExternal: true
    }, {
      icon: '🇨🇳',
      title: t('国内镜像'),
      url: "https://antv-graphin.gitee.io",
      openExternal: true
    }]
  }, {
    title: 'ChartCube',
    icon: 'https://gw.alipayobjects.com/zos/antfincdn/Zr74jx8YNX/chartcube.svg',
    slogan: t('图表魔方'),
    description: t('AntV 在线图表制作利器。'),
    category: Categories[1],
    links: [{
      icon: react_default.a.createElement(es_icon["a" /* default */], {
        type: "home"
      }),
      title: t('产品首页'),
      url: "https://chartcube.alipay.com",
      openExternal: true
    }, {
      icon: react_default.a.createElement(es_icon["a" /* default */], {
        type: "area-chart"
      }),
      title: t('生成图表'),
      url: "https://chartcube.alipay.com/guide",
      openExternal: true
    }, {
      icon: react_default.a.createElement(es_icon["a" /* default */], {
        type: "yuque"
      }),
      title: t('语雀社区'),
      url: "https://www.yuque.com/chartcube",
      openExternal: true
    }, {
      icon: react_default.a.createElement(es_icon["a" /* default */], {
        type: "dingding"
      }),
      title: t('钉钉服务群'),
      url: "dingtalk://dingtalkclient/action/joingroup?cid=8305538734",
      openExternal: true
    }]
  }, {
    title: t('墨者学院'),
    icon: 'https://gw.alipayobjects.com/zos/antfincdn/12j36RPVldO/mozhexueyuan.svg',
    description: t('数据可视化社团'),
    category: Categories[2],
    links: [{
      title: t('学院首页'),
      url: "https://www.yuque.com/mo-college",
      openExternal: true
    }]
  }, {
    title: 'BizCharts',
    icon: 'https://gw.alipayobjects.com/zos/antfincdn/Q1pbg%26O2TM/BizCharts.svg',
    description: t('基于商业场景下的数据可视化解决方案'),
    category: Categories[2],
    links: [{
      title: t('产品首页'),
      url: 'https://bizcharts.net',
      openExternal: true
    }]
  }, {
    title: 'Viser',
    icon: 'https://gw.alipayobjects.com/zos/antfincdn/QAyW5h99HVa/Viser.svg',
    description: t('基于 G2 实现的可视化解决方案'),
    category: Categories[2],
    links: [{
      title: t('产品首页'),
      url: "https://viserjs.github.io/",
      openExternal: true
    }]
  }];
  return products;
};
// CONCATENATED MODULE: ../@antv/gatsby-theme-antv/site/components/Products.tsx







var Products_Products = function Products(_ref) {
  var _classNames;

  var show = _ref.show,
      _ref$rootDomain = _ref.rootDomain,
      rootDomain = _ref$rootDomain === void 0 ? '' : _ref$rootDomain,
      language = _ref.language,
      className = _ref.className;

  var _useTranslation = Object(es["b" /* useTranslation */])(),
      t = _useTranslation.t,
      i18n = _useTranslation.i18n;

  var data = getProducts_getProducts({
    t: t,
    language: language || i18n.language,
    rootDomain: rootDomain
  });
  return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement("div", {
    className: classnames_default()(Product_module_default.a.products, className, (_classNames = {}, _classNames[Product_module_default.a.show] = !!show, _classNames))
  }, react_default.a.createElement("div", {
    className: Product_module_default.a.container
  }, react_default.a.createElement("h3", null, t('基础产品')), react_default.a.createElement("ul", null, data.filter(function (item) {
    return item.category === 'basic';
  }).map(function (product) {
    return react_default.a.createElement(components_Product, {
      key: product.title,
      name: product.title,
      slogan: product.slogan || '',
      description: product.description,
      url: (product.links || [])[0].url,
      icon: product.icon,
      links: product.links,
      language: language || i18n.language
    });
  })), react_default.a.createElement("h3", null, t('拓展产品')), react_default.a.createElement("ul", null, data.filter(function (item) {
    return item.category === 'extension';
  }).map(function (product) {
    return react_default.a.createElement(components_Product, {
      key: product.title,
      name: product.title,
      slogan: product.slogan || '',
      description: product.description,
      url: (product.links || [])[0].url,
      icon: product.icon,
      links: product.links,
      language: language || i18n.language
    });
  })), react_default.a.createElement("h3", null, t('周边生态')), react_default.a.createElement("ul", null, data.filter(function (item) {
    return item.category === 'ecology';
  }).map(function (product) {
    return react_default.a.createElement(components_Product, {
      key: product.title,
      name: product.title,
      slogan: product.slogan || '',
      description: product.description,
      url: (product.links || [])[0].url,
      icon: product.icon,
      language: language || i18n.language
    });
  })))), react_default.a.createElement("div", {
    className: Product_module_default.a.mask
  }));
};

/* harmony default export */ var components_Products = (Products_Products);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("asZ9");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.find.js
var es6_array_find = __webpack_require__("it7j");

// EXTERNAL MODULE: ../node_modules/shallowequal/index.js
var shallowequal = __webpack_require__("F56x");
var shallowequal_default = /*#__PURE__*/__webpack_require__.n(shallowequal);

// EXTERNAL MODULE: ../@antv/gatsby-theme-antv/site/components/Header.module.less
var Header_module = __webpack_require__("aaoD");
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);

// CONCATENATED MODULE: ../@antv/gatsby-theme-antv/site/components/NavMenuItems.tsx










var getDocument = function getDocument(navs, slug) {
  if (slug === void 0) {
    slug = '';
  }

  return navs.find(function (doc) {
    return doc.slug === slug;
  }) || {
    title: {}
  };
};

var capitalize = function capitalize(s) {
  if (typeof s !== 'string') {
    return '';
  }

  return s.charAt(0).toUpperCase() + s.slice(1);
};

var NavMenuItems_NavMenuItems = function NavMenuItems(_ref) {
  var _ref$navs = _ref.navs,
      navs = _ref$navs === void 0 ? [] : _ref$navs,
      path = _ref.path;

  var _useTranslation = Object(es["b" /* useTranslation */])(),
      i18n = _useTranslation.i18n;

  return react_default.a.createElement(react_default.a.Fragment, null, navs.map(function (nav, i) {
    var _classNames;

    var href = "/" + i18n.language + "/" + nav.slug;
    var title = capitalize(getDocument(navs, nav.slug).title[i18n.language]);
    var className = classnames_default()('header-menu-item-active', (_classNames = {}, _classNames[Header_module_default.a.activeItem] = path.startsWith(href) || shallowequal_default()(path.split('/').slice(0, 4), href.split('/').slice(0, 4)), _classNames));
    return react_default.a.createElement("li", {
      key: i,
      className: className
    }, nav.target === '_blank' ? react_default.a.createElement("a", {
      href: href,
      target: "_blank",
      rel: "noopener noreferrer"
    }, title) : react_default.a.createElement(gatsby_browser_entry["Link"], {
      to: href
    }, title));
  }));
};

/* harmony default export */ var components_NavMenuItems = (NavMenuItems_NavMenuItems);
// EXTERNAL MODULE: ../@antv/gatsby-theme-antv/site/images/antv.svg
var antv = __webpack_require__("xJ2c");
var antv_default = /*#__PURE__*/__webpack_require__.n(antv);

// EXTERNAL MODULE: ../@antv/gatsby-theme-antv/site/images/external-link.svg
var external_link = __webpack_require__("sZHf");
var external_link_default = /*#__PURE__*/__webpack_require__.n(external_link);

// CONCATENATED MODULE: ../@antv/gatsby-theme-antv/site/components/Header.tsx















/* eslint jsx-a11y/anchor-is-valid: 0 */












var Header_redirectToChinaMirror = function redirectToChinaMirror(githubUrl) {
  // antv.vision => antv.gitee.io
  if (window.location.host === 'antv.vision') {
    window.location.href = window.location.href.replace('antv.vision', 'antv.gitee.io');
    return;
  } // g2plot.antv.vision => antv-g2plot.gitee.io


  var match = window.location.host.match(/(.*)\.antv\.vision/);

  if (match && match[1]) {
    window.location.href = window.location.href.replace(window.location.host, "antv-" + match[1] + ".gitee.io");
    return;
  }

  var _GitUrlParse = lib_default()(githubUrl),
      name = _GitUrlParse.name;

  if (!name.includes('.') && !name.includes('-')) {
    window.location.href = window.location.href.replace(window.location.host, "antv-" + name + ".gitee.io");
    return;
  }

  message["a" /* default */].info('镜像本地调试暂时无法跳转。');
};

var Header_Header = function Header(_ref) {
  var _classNames, _classNames2, _classNames3, _React$createElement;

  var _ref$subTitle = _ref.subTitle,
      subTitle = _ref$subTitle === void 0 ? '' : _ref$subTitle,
      subTitleHref = _ref.subTitleHref,
      _ref$pathPrefix = _ref.pathPrefix,
      pathPrefix = _ref$pathPrefix === void 0 ? '' : _ref$pathPrefix,
      _ref$path = _ref.path,
      path = _ref$path === void 0 ? '' : _ref$path,
      _ref$navs = _ref.navs,
      navs = _ref$navs === void 0 ? [] : _ref$navs,
      _ref$showSearch = _ref.showSearch,
      showSearch = _ref$showSearch === void 0 ? true : _ref$showSearch,
      _ref$showGithubCorner = _ref.showGithubCorner,
      showGithubCorner = _ref$showGithubCorner === void 0 ? true : _ref$showGithubCorner,
      _ref$showLanguageSwit = _ref.showLanguageSwitcher,
      showLanguageSwitcher = _ref$showLanguageSwit === void 0 ? true : _ref$showLanguageSwit,
      logo = _ref.logo,
      onLanguageChange = _ref.onLanguageChange,
      siteUrl = _ref.siteUrl,
      _ref$githubUrl = _ref.githubUrl,
      githubUrl = _ref$githubUrl === void 0 ? 'https://github.com/antvis' : _ref$githubUrl,
      defaultLanguage = _ref.defaultLanguage,
      _ref$Link = _ref.Link,
      Link = _ref$Link === void 0 ? 'a' : _ref$Link,
      transparent = _ref.transparent,
      isHomePage = _ref.isHomePage,
      _ref$rootDomain = _ref.rootDomain,
      rootDomain = _ref$rootDomain === void 0 ? '' : _ref$rootDomain,
      _ref$showChinaMirror = _ref.showChinaMirror,
      showChinaMirror = _ref$showChinaMirror === void 0 ? false : _ref$showChinaMirror;

  var _useTranslation = Object(es["b" /* useTranslation */])(),
      t = _useTranslation.t,
      i18n = _useTranslation.i18n;

  var lang = typeof defaultLanguage !== 'undefined' ? defaultLanguage : i18n.language || '';
  var SubTitleLink = (subTitleHref || '').startsWith('http') ? 'a' : Link;

  var _useState = Object(react["useState"])(false),
      productMenuVisible = _useState[0],
      setProductMenuVisible = _useState[1];

  var productMenuHovering = false;

  var onProductMouseEnter = function onProductMouseEnter(e) {
    productMenuHovering = true;
    e.persist();
    setTimeout(function () {
      if (e.target instanceof Element && e.target.matches(':hover')) {
        setProductMenuVisible(true);
      }
    }, 200);
  };

  var onProductMouseLeave = function onProductMouseLeave(e) {
    e.persist();
    productMenuHovering = false;
    setTimeout(function () {
      if (productMenuHovering) {
        return;
      }

      setProductMenuVisible(false);
    }, 200);
  };

  var onToggleProductMenuVisible = function onToggleProductMenuVisible() {
    setProductMenuVisible(!productMenuVisible);
  };

  var _useState2 = Object(react["useState"])(false),
      popupMenuVisible = _useState2[0],
      setPopupMenuVisible = _useState2[1];

  var onTogglePopupMenuVisible = function onTogglePopupMenuVisible() {
    setPopupMenuVisible(!popupMenuVisible);
  };

  var _img$link$logo = Object.assign({
    img: react_default.a.createElement(antv_default.a, null),
    link: ''
  }, logo),
      img = _img$link$logo.img,
      link = _img$link$logo.link;

  Object(react["useEffect"])(function () {
    if (popupMenuVisible) {
      setPopupMenuVisible(false);
    }
  }, [path]); // 移动端下弹出菜单时，禁止页面滚动

  Object(react["useEffect"])(function () {
    if (popupMenuVisible) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
    }

    return function () {
      document.documentElement.style.overflow = '';
    };
  }, [popupMenuVisible]);
  var isWide = Object(useMedia["a" /* default */])('(min-width: 767.99px)', true);
  var menuIcon = !isWide ? react_default.a.createElement(es_icon["a" /* default */], {
    type: "menu",
    className: Header_module_default.a.menuIcon,
    onClick: onTogglePopupMenuVisible
  }) : null;
  var productItemProps = isWide ? {
    onMouseEnter: onProductMouseEnter,
    onMouseLeave: onProductMouseLeave
  } : {
    onClick: onToggleProductMenuVisible
  };

  var _GitUrlParse2 = lib_default()(githubUrl),
      name = _GitUrlParse2.name;

  var chinaMirrorUrl = name ? "https://antv-" + name + ".gitee.io" : '';
  var menu = react_default.a.createElement("ul", {
    className: classnames_default()(Header_module_default.a.menu, (_classNames = {}, _classNames[Header_module_default.a.popup] = !isWide, _classNames[Header_module_default.a.popupHidden] = !popupMenuVisible, _classNames))
  }, navs && navs.length ? react_default.a.createElement(components_NavMenuItems, {
    navs: navs,
    path: path
  }) : null, showLanguageSwitcher && react_default.a.createElement("li", null, react_default.a.createElement("a", {
    onClick: function onClick(e) {
      e.preventDefault();
      var value = lang === 'en' ? 'zh' : 'en';
      i18n.changeLanguage(value);

      if (onLanguageChange) {
        return onLanguageChange(value);
      }

      if (path.endsWith("/" + lang)) {
        return Object(gatsby_browser_entry["navigate"])("/" + value);
      }

      Object(gatsby_browser_entry["navigate"])(path.replace(pathPrefix, '').replace("/" + lang + "/", "/" + value + "/"));
    }
  }, t('English'))), !showChinaMirror ? null : react_default.a.createElement("li", null, react_default.a.createElement("a", {
    href: chinaMirrorUrl,
    onClick: function onClick(e) {
      e.preventDefault();
      Header_redirectToChinaMirror(githubUrl);
    }
  }, t('国内镜像'), react_default.a.createElement("i", {
    className: Header_module_default.a.export
  }, react_default.a.createElement(external_link_default.a, null)))), react_default.a.createElement("li", productItemProps, react_default.a.createElement("a", null, t('所有产品'), react_default.a.createElement(es_icon["a" /* default */], {
    type: "caret-down",
    className: classnames_default()(Header_module_default.a.arrow, (_classNames2 = {}, _classNames2[Header_module_default.a.open] = productMenuVisible, _classNames2))
  })), react_default.a.createElement(components_Products, {
    className: Header_module_default.a.productsMenu,
    show: productMenuVisible,
    rootDomain: rootDomain,
    language: defaultLanguage
  })), showGithubCorner && react_default.a.createElement("li", {
    className: Header_module_default.a.githubCorner
  }, react_default.a.createElement("a", {
    href: githubUrl,
    target: "_blank",
    rel: "noopener noreferrer"
  }, react_default.a.createElement(es_icon["a" /* default */], {
    type: "github"
  }))));
  var defaultLogoLink;

  if (link) {
    defaultLogoLink = link;
  } else if (siteUrl === 'https://antv.vision') {
    defaultLogoLink = "/" + lang;
  } else {
    defaultLogoLink = "https://antv.vision";
  }

  var _useState3 = Object(react["useState"])(defaultLogoLink),
      logoLink = _useState3[0],
      setLogoLink = _useState3[1];

  Object(react["useEffect"])(function () {
    if (window.location.host.includes('gitee.io') && window.location.host.includes('antv')) {
      setLogoLink("https://antv.gitee.io/" + lang);
    }
  }, []);
  return react_default.a.createElement("header", {
    className: classnames_default()(Header_module_default.a.header, (_classNames3 = {}, _classNames3[Header_module_default.a.transparent] = !!transparent && !productMenuVisible, _classNames3[Header_module_default.a.isHomePage] = !!isHomePage, _classNames3[Header_module_default.a.fixed] = popupMenuVisible, _classNames3))
  }, react_default.a.createElement("div", {
    className: Header_module_default.a.container
  }, react_default.a.createElement("div", {
    className: Header_module_default.a.left
  }, react_default.a.createElement("h1", null, react_default.a.createElement("a", {
    href: logoLink
  }, img)), subTitle && react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement("span", {
    className: Header_module_default.a.divider
  }), react_default.a.createElement("h2", {
    className: Header_module_default.a.subProduceName
  }, react_default.a.createElement(SubTitleLink, (_React$createElement = {}, _React$createElement[SubTitleLink === 'a' ? 'href' : 'to'] = typeof subTitleHref === 'undefined' ? "/" + lang : subTitleHref, _React$createElement), subTitle))), showSearch && react_default.a.createElement(components_Search, null)), react_default.a.createElement("nav", {
    className: Header_module_default.a.nav
  }, menu, menuIcon)));
};

/* harmony default export */ var components_Header = (Header_Header);
// EXTERNAL MODULE: ../@antv/gatsby-theme-antv/site/components/PageLoading.tsx
var PageLoading = __webpack_require__("NYms");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__("lQyR");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.from.js
var es6_array_from = __webpack_require__("YhIr");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__("+jjx");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__("ABKx");

// EXTERNAL MODULE: ../node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("W1QL");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__("4aJ6");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__("t91x");

// EXTERNAL MODULE: ../node_modules/antd/es/button/style/index.js
var button_style = __webpack_require__("sbMj");

// EXTERNAL MODULE: ../node_modules/antd/es/button/index.js + 2 modules
var es_button = __webpack_require__("H4M2");

// EXTERNAL MODULE: ../node_modules/antd/es/notification/style/index.js
var notification_style = __webpack_require__("A1Q8");

// EXTERNAL MODULE: ../node_modules/antd/es/notification/index.js
var notification = __webpack_require__("qsLp");

// EXTERNAL MODULE: ../node_modules/rc-footer/es/index.js
var rc_footer_es = __webpack_require__("Wpb7");
var es_default = /*#__PURE__*/__webpack_require__.n(rc_footer_es);

// EXTERNAL MODULE: ../@antv/gatsby-theme-antv/site/components/Footer.module.less
var Footer_module = __webpack_require__("7KvB");
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);

// EXTERNAL MODULE: ../node_modules/rc-footer/assets/index.less
var assets = __webpack_require__("MKzE");

// CONCATENATED MODULE: ../@antv/gatsby-theme-antv/site/components/Footer.tsx
















function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }









var OLD_SITE_DOMAIN = 'https://antv-2018.alipay.com';

var Footer_Footer = function Footer(_ref) {
  var columns = _ref.columns,
      bottom = _ref.bottom,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? 'dark' : _ref$theme,
      language = _ref.language,
      _ref$rootDomain = _ref.rootDomain,
      rootDomain = _ref$rootDomain === void 0 ? '' : _ref$rootDomain,
      _ref$chinaMirrorNotic = _ref.chinaMirrorNotice,
      chinaMirrorNotice = _ref$chinaMirrorNotic === void 0 ? true : _ref$chinaMirrorNotic,
      _ref$githubUrl = _ref.githubUrl,
      githubUrl = _ref$githubUrl === void 0 ? '' : _ref$githubUrl;

  var _useTranslation = Object(es["b" /* useTranslation */])(),
      t = _useTranslation.t,
      i18n = _useTranslation.i18n;

  var lang = language || i18n.language;
  var products = getProducts_getProducts({
    t: t,
    language: lang,
    rootDomain: rootDomain
  });
  var isWide = Object(useMedia["a" /* default */])('(min-width: 767.99px)', true);
  Object(react["useEffect"])(function () {
    var timeout = setTimeout(function () {
      if (!chinaMirrorNotice || lang !== 'zh' || window.location.host.includes('chartcube') || window.location.host.includes('gitee.io') || localStorage.getItem('china-mirror-no-more-hint') || !isWide) {
        return;
      }

      notification["a" /* default */].info({
        key: 'china-mirror',
        icon: react_default.a.createElement("img", {
          width: 32,
          src: "https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png",
          alt: "antv logo"
        }),
        message: '国内镜像提示 🇨🇳',
        description: 'AntV 系列网站部署在 gh-pages 上，若访问速度不佳，可以前往国内镜像站点。你也可以在顶部导航找到镜像链接。',
        duration: 0,
        top: 64,
        btn: react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(es_button["a" /* default */], {
          type: "primary",
          size: "small",
          style: {
            marginRight: 8
          },
          onClick: function onClick() {
            Header_redirectToChinaMirror(githubUrl);
          }
        }, react_default.a.createElement(es_icon["a" /* default */], {
          type: "thunderbolt"
        }), "\u524D\u5F80\u56FD\u5185\u955C\u50CF"), react_default.a.createElement(es_button["a" /* default */], {
          size: "small",
          onClick: function onClick() {
            localStorage.setItem('china-mirror-no-more-hint', Date.now().toString());

            notification["a" /* default */].close('china-mirror');
          }
        }, "\u4E0D\u518D\u63D0\u9192")),
        onClose: function onClose() {
          localStorage.setItem('china-mirror-no-more-hint', Date.now().toString());
        }
      });
    }, 5000);
    return function () {
      clearTimeout(timeout);
    };
  });
  var more = {
    icon: react_default.a.createElement("img", {
      src: "https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",
      alt: "more products"
    }),
    title: t('更多产品'),
    items: [{
      icon: react_default.a.createElement("img", {
        src: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
        alt: "Ant Design"
      }),
      title: 'Ant Design',
      url: 'https://ant.design',
      description: t('企业级 UI 设计语言'),
      openExternal: true
    }, {
      icon: react_default.a.createElement("img", {
        src: "https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",
        alt: "yuque"
      }),
      title: t('语雀'),
      url: 'https://yuque.com',
      description: t('知识创作与分享工具'),
      openExternal: true
    }, {
      icon: react_default.a.createElement("img", {
        src: "https://gw.alipayobjects.com/zos/antfincdn/sAEs8aHCnd/yunfengdie.png",
        alt: "yunfengdie"
      }),
      title: t('云凤蝶'),
      url: 'https://yunfengdie.com',
      description: t('中台建站平台'),
      openExternal: true
    }, {
      icon: react_default.a.createElement("img", {
        src: "https://gw.alipayobjects.com/zos/antfincdn/v2%24rh7lqpu/82f338dd-b0a6-41bc-9a86-58aaa9df217b.png",
        alt: "Egg"
      }),
      title: 'Egg',
      url: 'https://eggjs.org',
      description: t('企业级 Node 开发框架'),
      openExternal: true
    }, {
      icon: react_default.a.createElement("img", {
        src: "https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico",
        alt: "kitchen"
      }),
      title: 'Kitchen',
      description: t('Sketch 工具集'),
      url: 'https://kitchen.alipay.com',
      openExternal: true
    }, {
      icon: react_default.a.createElement("img", {
        src: "https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",
        alt: "xtech"
      }),
      title: t('蚂蚁体验科技'),
      url: 'https://xtech.antfin.com/',
      openExternal: true
    }]
  };
  var defaultColumns = products.filter(function (product) {
    return product.category !== 'ecology';
  }).map(function (product) {
    return {
      title: react_default.a.createElement("span", null, product.title, react_default.a.createElement("span", {
        className: Footer_module_default.a.description
      }, product.slogan)),
      items: product.links
    };
  });
  return react_default.a.createElement(es_default.a, {
    maxColumnsPerRow: 4,
    theme: theme,
    columns: columns || [].concat(_toConsumableArray(defaultColumns), [more]),
    className: Footer_module_default.a.footer,
    bottom: bottom || react_default.a.createElement("div", {
      className: Footer_module_default.a.bottom
    }, react_default.a.createElement("div", null, react_default.a.createElement("a", {
      href: "https://weibo.com/antv2017",
      target: "_blank",
      rel: "noopener noreferrer"
    }, react_default.a.createElement(es_icon["a" /* default */], {
      type: "weibo"
    })), react_default.a.createElement("a", {
      href: "https://zhuanlan.zhihu.com/aiux-antv",
      target: "_blank",
      rel: "noopener noreferrer"
    }, react_default.a.createElement(es_icon["a" /* default */], {
      type: "zhihu"
    })), react_default.a.createElement("a", {
      href: "https://github.com/antvis",
      target: "_blank",
      rel: "noopener noreferrer"
    }, react_default.a.createElement(es_icon["a" /* default */], {
      type: "github"
    })), react_default.a.createElement("a", {
      href: rootDomain + "/" + lang + "/about"
    }, t('关于我们')), react_default.a.createElement("a", {
      href: OLD_SITE_DOMAIN,
      target: "_blank",
      rel: "noopener noreferrer"
    }, t('返回旧版'))), react_default.a.createElement("div", null, "\xA9 ", new Date().getFullYear(), " Made with \u2764 by", ' ', react_default.a.createElement("a", {
      href: "https://xtech.antfin.com/"
    }, "XTech")))
  });
};

/* harmony default export */ var components_Footer = (Footer_Footer);
// EXTERNAL MODULE: ../@antv/gatsby-theme-antv/site/layouts/layout.module.less
var layout_module = __webpack_require__("hedj");
var layout_module_default = /*#__PURE__*/__webpack_require__.n(layout_module);

// CONCATENATED MODULE: ../@antv/gatsby-theme-antv/site/layouts/layout.tsx

















i18next["a" /* default */].use(es["a" /* initReactI18next */]) // passes i18n down to react-i18next
.init({
  initImmediate: false,
  // @ts-ignore
  resources: {"en":{"translation":{"蚂蚁数据可视化":"AntV","项目里的国际化":"English locale in project","让数据栩栩如生":"Make the Data Vivid","AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。":"AntV is a new generation of data visualization solution of Ant Financial. We provide a best practice of data visualization with simplicity and convenience, profession and reliability, and infinite possibilities.","继续了解":"More","更新":"Update","L7 发布新版本，让地图动起来！":"L7 has published the new viewsion!","推荐":"Recommand","Kitchen 3.75，效率大幅提升！":"Kitchen 3.75, lift your efficient!","我们的优势":"Our Advantages","简单方便":"Simple and Convenient","从数据出发，仅需几行代码可以轻松获得想要的图表展示效果。":"Starting from the data, you will get the visualization results with only a few lines of codes.","方便可靠":"Reliable","大量产品实践之上，提供绘图引擎、完备图形语法，专业设计规范。":"We provide rendering engines, complete grammar of graphics, and professional design standards for plenty of practice products.","无限可能":"Infinite","任何图表，都可以基于图形语法灵活绘制，满足你无限的创意。":"Based on the grammar of graphics, any charts or diagrams can be flexibly created, which will satisfy your infinite ideas.","2000+ 公司正在使用":"2000+ Companies are Using AntV","测试":"Test","G6 3.2 全新上线！":"G6 3.2 has already updated!","合作公司":"Companies","查看详情":"More","所有产品":"Products","周边生态":"Ecosystem","搜索…":"Search...","在 GitHub 上编辑":"Edit on GitHub","演示":"Examples","代码演示":"Examples","设计指引":"Design Guide","English":"中文","进入全屏":"Enter Fullscreen","离开全屏":"Exit Fullscreen","产品首页":"Home Page","图表示例":"Examples","使用文档":"Manual","API 文档":"API","更新日志":"Changelog","GitHub 仓库":"GitHub Repository","国内镜像":"China Mirror","AntV 蚂蚁数据可视化":"AntV","可视化引擎":"Visualization Engine","图可视化引擎":"Graph Visualization","移动可视化方案":"Mobile Charts","地理空间数据可视化":"Geospatial Visualization","开箱即用的图表库":"A Charting Library","开箱即用、易于配置、极致体验的通用图表库。":"Pretty and simply charts out of box","图表魔方":"Charts Maker","生成图表":"Create charts","AntV 在线图表制作利器。":"Create pretty charts without code","数据驱动，高度易用，可扩展的可视化图形语法。":"Data-driven visual language with a high level of usability and scalability","便捷的关系数据可视化引擎与图分析工具。":"A Graph Visualization Framework in JavaScript","高性能/高渲染质量的地理空间数据可视化框架。":"Large-scale WebGL-powered Geospatial Data Visualization","专注于移动端的可视化解决方案，兼容 H5/小程序/Weex 等多端环境":"An elegant, interactive and flexible charting library for mobile","基于 G6 封装的图分析应用组件。":"A react toolkit for graph analysis based on g6","墨者学院":"Mohist Academy","学院首页":"Home Page","数据可视化社团":"Visualization Community","语雀社区":"Yuque","钉钉服务群":"DingTalk Group","扫码进 ChartCube 服务群":"Scan QRCode","AntV 11-22 品牌日：知源·致远":"11-22, AntV brand day!","G2Plot 图表库发布":"G2Plot is released","执行代码":"Run code","在 CodeSandbox 中打开":"Open in CodeSandbox","在 Riddle 中打开":"Open in Riddle","在 StackBlitz 中打开":"Open in StackBlitz","关于我们":"About us","返回旧版":"Old site"}}},
  fallbackLng: 'zh',
  keySeparator: false,
  react: {
    useSuspense: false
  }
});
var lngs = ['zh', 'en'];

var layout_Layout = function Layout(_ref) {
  var children = _ref.children,
      location = _ref.location;

  // https://github.com/gatsbyjs/gatsby/issues/13867#issuecomment-489481343
  if (location.pathname.includes('offline-plugin-app-shell-fallback')) {
    return react_default.a.createElement(PageLoading["a" /* default */], null);
  }

  var site = _2084297051.data.site;
  var _site$siteMetadata = site.siteMetadata,
      title = _site$siteMetadata.title,
      _site$siteMetadata$na = _site$siteMetadata.navs,
      navs = _site$siteMetadata$na === void 0 ? [] : _site$siteMetadata$na,
      githubUrl = _site$siteMetadata.githubUrl,
      siteUrl = _site$siteMetadata.siteUrl,
      _site$siteMetadata$lo = _site$siteMetadata.logoUrl,
      logoUrl = _site$siteMetadata$lo === void 0 ? '' : _site$siteMetadata$lo,
      showLanguageSwitcher = _site$siteMetadata.showLanguageSwitcher,
      _site$siteMetadata$re = _site$siteMetadata.redirects,
      redirects = _site$siteMetadata$re === void 0 ? [] : _site$siteMetadata$re;
  var pathPrefix = Object(gatsby_browser_entry["withPrefix"])('/').replace(/\/$/, '');
  var path = location.pathname.replace(pathPrefix, '');
  var currentLangKey = Object(dist["getCurrentLangKey"])(lngs, 'zh', path);
  var isHomePage = path === '/' || path === "/" + currentLangKey || path === "/" + currentLangKey + "/";
  i18next["a" /* default */].init({
    lng: currentLangKey
  });

  if (location.pathname === pathPrefix || children && children.type && children.type.noLayout) {
    return children;
  }

  var getRediectUrl = function getRediectUrl() {
    var list = redirects || [];

    for (var i = 0; i < list.length; i += 1) {
      var _ref2 = list[i],
          _ref2$from = _ref2.from,
          from = _ref2$from === void 0 ? '' : _ref2$from,
          to = _ref2.to,
          keepUrl = _ref2.keepUrl; // 支持字符串和正则表达式比较

      if (location.pathname !== from && !new RegExp(from).test(location.pathname)) {
        return;
      }

      if (keepUrl && new RegExp(from).test(location.pathname)) {
        return location.pathname.replace(new RegExp(from), to);
      } // 如果没有指定 to，则直接用替换成老版本的域名


      return to || "" + OLD_SITE_DOMAIN + location.pathname;
    }
  };

  var rediectUrl = getRediectUrl();
  var logoProps = logoUrl ? {
    logo: {
      img: react_default.a.createElement("img", {
        src: logoUrl,
        alt: "logo"
      })
    }
  } : {};
  return react_default.a.createElement(react_default.a.Fragment, null, rediectUrl && react_default.a.createElement(Helmet_default.a, null, react_default.a.createElement("meta", {
    httpEquiv: "refresh",
    content: "0;url=" + rediectUrl
  })), react_default.a.createElement(Seo["a" /* default */], {
    title: siteUrl === 'https://antv.vision' ? '' : title,
    lang: i18next["a" /* default */].language
  }), react_default.a.createElement(components_Header, Object.assign({
    subTitle: siteUrl === 'https://antv.vision' ? '' : title,
    path: path,
    pathPrefix: pathPrefix,
    navs: navs,
    siteUrl: siteUrl,
    githubUrl: githubUrl,
    Link: gatsby_browser_entry["Link"],
    transparent: isHomePage,
    isHomePage: isHomePage,
    showChinaMirror: true,
    showLanguageSwitcher: showLanguageSwitcher === null ? undefined : showLanguageSwitcher
  }, logoProps)), react_default.a.createElement("main", {
    className: layout_module_default.a.main
  }, children), react_default.a.createElement(components_Footer, {
    githubUrl: githubUrl
  }));
};

/* harmony default export */ var layout = __webpack_exports__["default"] = (layout_Layout);

/***/ }),

/***/ "vf9c":
/***/ (function(module) {

module.exports = JSON.parse("[]");

/***/ }),

/***/ "xJ2c":
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__("mXGw");

function Antv (props) {
    return React.createElement("svg",props,[React.createElement("title",{"key":0},"logo"),React.createElement("desc",{"key":1},"Created with Sketch."),React.createElement("defs",{"key":2},[React.createElement("linearGradient",{"id":"linearGradient-1","x1":".004%","x2":"100.131%","y1":"49.993%","y2":"49.993%","key":0},[React.createElement("stop",{"offset":"0%","stopColor":"#6500FF","key":0}),React.createElement("stop",{"offset":"16%","stopColor":"#6A09FF","key":1}),React.createElement("stop",{"offset":"43%","stopColor":"#7623FF","key":2}),React.createElement("stop",{"offset":"77%","stopColor":"#8A4CFF","key":3}),React.createElement("stop",{"offset":"99%","stopColor":"#996BFF","key":4})]),React.createElement("linearGradient",{"id":"linearGradient-2","x1":"50.004%","x2":"50.004%","y1":"100.012%","y2":"0%","key":1},[React.createElement("stop",{"offset":"0%","stopColor":"#6500FF","key":0}),React.createElement("stop",{"offset":"16%","stopColor":"#6909FF","key":1}),React.createElement("stop",{"offset":"43%","stopColor":"#7523FF","key":2}),React.createElement("stop",{"offset":"77%","stopColor":"#894CFF","key":3}),React.createElement("stop",{"offset":"99%","stopColor":"#976BFF","key":4})]),React.createElement("linearGradient",{"id":"linearGradient-3","x1":"49.854%","x2":"49.854%","y1":"100.255%","y2":"0%","key":2},[React.createElement("stop",{"offset":"0%","stopColor":"#FF6E06","key":0}),React.createElement("stop",{"offset":"28%","stopColor":"#FF770C","key":1}),React.createElement("stop",{"offset":"75%","stopColor":"#FF911C","key":2}),React.createElement("stop",{"offset":"100%","stopColor":"#FFA126","key":3})]),React.createElement("linearGradient",{"id":"linearGradient-4","x1":"57351%","x2":"57351%","y1":"59860%","y2":"35023%","key":3},[React.createElement("stop",{"offset":"0%","stopColor":"#FF6E06","key":0}),React.createElement("stop",{"offset":"28%","stopColor":"#FF770C","key":1}),React.createElement("stop",{"offset":"75%","stopColor":"#FF911C","key":2}),React.createElement("stop",{"offset":"100%","stopColor":"#FFA126","key":3})])]),React.createElement("g",{"id":"首页","fill":"none","fillRule":"evenodd","stroke":"none","strokeWidth":"1","transform":"translate(-40.000000, -21.000000)","key":3},React.createElement("g",{"id":"logo","fillRule":"nonzero","transform":"translate(40.000000, 21.000000)"},[React.createElement("g",{"id":"text","fill":"#000","transform":"translate(40.000000, 4.000000)","key":0},[React.createElement("path",{"id":"Shape","d":"M8.7405,1.2915 C8.51971803,0.727507979 7.97591631,0.356402076 7.37025,0.356402076 C6.76458369,0.356402076 6.22078197,0.727507979 6,1.2915 L0.0915,16.224 C0.303214856,16.7668034 0.833635444,17.1176139 1.416,17.1 C1.99787286,17.1149847 2.52631953,16.7624868 2.736,16.2195 L4.236,12.1845 L10.464,12.1845 L11.964,16.2195 C12.1824954,16.7696588 12.7145414,17.1308265 13.3065,17.1308265 C13.8984586,17.1308265 14.4305046,16.7696588 14.649,16.2195 L8.7405,1.2915 Z M4.875,10.3245 L7.3125,3.7755 L7.38,3.7755 L9.8175,10.3245 L4.875,10.3245 Z","key":0}),React.createElement("path",{"id":"Shape","d":"M23.616,4.8675 C21.711,4.8675 20.3625,5.5605 19.6155,6.885 L19.5705,6.885 L19.5705,4.992 C19.3939707,4.49572722 18.9242345,4.16424813 18.3975,4.16424813 C17.8707655,4.16424813 17.4010293,4.49572722 17.2245,4.992 L17.2245,16.23 C17.3727212,16.7871906 17.8771818,17.1750009 18.45375,17.1750009 C19.0303182,17.1750009 19.5347788,16.7871906 19.683,16.23 L19.683,9.741 C19.683,7.971 20.907,6.792 22.7655,6.792 C24.5655,6.792 25.542,7.7445 25.542,9.4515 L25.542,16.23 C25.6902212,16.7871906 26.1946818,17.1750009 26.77125,17.1750009 C27.3478182,17.1750009 27.8522788,16.7871906 28.0005,16.23 L28.0005,9.03 C28.002,6.4395 26.3355,4.8675 23.616,4.8675 Z","key":1}),React.createElement("path",{"id":"Shape","d":"M37.164,15.2175 C37.005,15.2385 36.5865,15.27 36.3255,15.27 C35.2935,15.27 34.818,14.82 34.818,13.842 L34.818,7.5555 L37.176,7.5555 C37.4674337,7.35650372 37.6417542,7.0263925 37.6417542,6.6735 C37.6417542,6.3206075 37.4674337,5.99049628 37.176,5.7915 L37.176,5.7795 L34.818,5.7795 L34.818,3.2625 L34.809,3.2625 C34.5697886,2.81087163 34.1005678,2.5284255 33.5895,2.5284255 C33.0784322,2.5284255 32.6092114,2.81087163 32.37,3.2625 L32.37,5.787 L30.669,5.787 L30.669,5.8035 C30.3813594,6.00305662 30.2097838,6.33091436 30.2097838,6.681 C30.2097838,7.03108564 30.3813594,7.35894338 30.669,7.5585 L32.37,7.5585 L32.37,14.0655 C32.37,16.239 33.3225,17.097 35.7825,17.097 C36.246017,17.1013951 36.708959,17.063235 37.1655,16.983 C37.4531479,16.7817619 37.6244786,16.4528028 37.6244786,16.10175 C37.6244786,15.7506972 37.4531479,15.4217381 37.1655,15.2205 L37.164,15.2175 Z","key":2}),React.createElement("path",{"id":"Shape","d":"M53.9085,1.041 C53.6915775,0.484686746 53.1556096,0.118403837 52.5585,0.118403837 C51.9613904,0.118403837 51.4254225,0.484686746 51.2085,1.041 L46.7325,13.365 L46.665,13.365 L42.21,1.041 L42.219,1.041 C41.991677,0.479831031 41.4467137,0.112610372 40.84125,0.112610372 C40.2357863,0.112610372 39.690823,0.479831031 39.4635,1.041 L45.3,15.9735 C45.402,16.5915 45.9855,17.067 46.692,17.067 C47.3985,17.067 47.9805,16.593 48.084,15.9735 L53.9085,1.041 Z","key":3})]),React.createElement("g",{"id":"Shape","key":1},[React.createElement("path",{"fill":"url(#linearGradient-1)","d":"M1.96144278,0.00379393843 C1.93278766,0.00379393843 1.90413254,0.00379393843 1.87375812,0.00597764254 C1.82628614,0.00725146994 1.80317101,0.00888924802 1.78005588,0.0108909768 C1.73258391,0.015258385 1.70450189,0.0186249288 1.67661091,0.0226283864 C1.63448789,0.0291794987 1.61271,0.0329099932 1.59093211,0.0370954261 C1.53906635,0.0471950576 1.51213054,0.0529272809 1.48548128,0.0594783932 C1.453101,0.0676672836 1.4290307,0.0742183959 1.40524695,0.0810424713 C1.36006738,0.0949635849 1.34096397,0.101150747 1.32186056,0.107519884 C1.2750572,0.123715689 1.25079587,0.132814456 1.22672557,0.142459149 C1.184316,0.16001977 1.16769603,0.167116808 1.15107606,0.174395822 L1.12242094,0.187225084 C1.10331753,0.196323851 1.08421412,0.205422618 1.06511071,0.214521385 L1.03387663,0.230899166 C1.01811632,0.239361019 1.002356,0.247822873 0.986882238,0.256557689 L0.955934712,0.274573248 L0.917250303,0.29832103 L0.888595186,0.316882515 C0.869491775,0.329438814 0.850388363,0.342268075 0.831284952,0.3553703 L0.797758465,0.38075586 L0.76738404,0.40341179 L0.734717207,0.42879735 L0.706062089,0.452545133 C0.686958678,0.468013037 0.66871492,0.483844892 0.651330815,0.500040697 L0.627833619,0.521331812 C0.616562606,0.531704407 0.605482628,0.542258976 0.594593683,0.552995522 L0.57424855,0.573194785 C0.550942388,0.596669604 0.528304845,0.620690349 0.506335922,0.64525702 C0.4888563,0.66518332 0.477967356,0.677739619 0.467364963,0.69056888 L0.451891199,0.709403328 C0.441288806,0.722505553 0.430686412,0.73669963 0.420657121,0.748710002 C0.392766141,0.78592396 0.373089627,0.813220261 0.354177249,0.840698538 L0.343288305,0.856803356 C0.333736599,0.871179408 0.324184893,0.885737435 0.314633188,0.900477438 L0.304317345,0.917401145 L0.296293912,0.931049295 L4.0804887,3.1453528 L4.88168578,4 C4.79792689,3.87330151 4.79075687,3.71385419 4.86283506,3.58079687 C4.93491326,3.44773955 5.07548957,3.36091705 5.23242441,3.35253173 L18.126081,3.35253173 C18.1716426,3.35580729 18.2172042,3.35799099 18.2636255,3.35799099 C19.2247383,3.34437937 19.997179,2.59972948 19.9999923,1.68409514 C20.0028056,0.768460793 19.234954,0.0195165058 18.2739414,0.000545926027 L1.96144278,0.00379393843 Z","key":0}),React.createElement("path",{"fill":"url(#linearGradient-2)","d":"M22.7438388,11.3151867 L16.3508566,22.3257033 C16.274965,22.4547197 16.1378066,22.5359862 15.9875806,22.5409448 C15.8373546,22.5459034 15.6950786,22.4738603 15.6107503,22.3501325 L11.5484958,15.3552589 C11.5151833,15.2756059 11.4759174,15.1985462 11.4310276,15.1247266 L4.67293385,3.45883542 C4.28425,2.75990644 4.28254958,1.91173703 4.66842791,1.21127254 C5.05430624,0.510808047 5.77401391,0.0556169131 6.57558023,0.00506221373 L1.98726011,0.000850295183 C1.70028191,-0.00773775303 1.4151096,0.0488237358 1.15340515,0.166238297 C1.11086057,0.18570672 1.07725788,0.202180002 1.04412582,0.219589265 C0.955459897,0.268541118 0.934752357,0.281176874 0.914233068,0.29428062 L0.814836879,0.361671317 C0.763726906,0.399952977 0.748102127,0.412307938 0.732665597,0.424850095 C0.693227147,0.457796658 0.67910837,0.470151619 0.665177844,0.482693776 C0.629598526,0.514985152 0.611526491,0.532394415 0.594019208,0.550084473 C0.559381142,0.585183794 0.543756362,0.601844272 0.528508083,0.618879143 C0.501964783,0.648362572 0.484739875,0.668860576 0.467797343,0.689639374 C0.436736033,0.727546641 0.420923003,0.748325439 0.405392349,0.769385032 C0.385908437,0.795779721 0.370095407,0.819085671 0.354564752,0.842672415 C0.3274567,0.884230011 0.312490797,0.908378344 0.298089644,0.933369061 C-0.0900333359,1.52939569 -0.081932791,2.25296668 0.269004964,2.83322512 L0.435324156,3.12188194 L14.3089991,27.0174998 C14.4452697,27.2688135 14.6373487,27.4859373 14.870644,27.6523763 C14.9087647,27.679239 14.9399202,27.6999242 14.9717345,27.719767 C15.0597415,27.7702164 15.0811079,27.781729 15.1027567,27.7927736 L15.2100594,27.8435974 C15.2692642,27.8684945 15.2880892,27.8757952 15.3069142,27.8829087 C15.3553887,27.9000371 15.3731784,27.9060274 15.3910621,27.9118305 C15.4370894,27.926151 15.4610913,27.9328901 15.4853756,27.9393484 C15.5335677,27.9512353 15.5558753,27.9563832 15.5782771,27.9612503 C15.6169626,27.9693934 15.6435059,27.9738861 15.6700492,27.978098 C15.7186178,27.9851179 15.7445963,27.9887682 15.7708572,27.9912954 C15.8041776,27.9941033 15.8324151,27.9960689 15.8606527,27.9977536 C15.9100684,27.9977536 15.9383059,28 15.9665435,28 C16.0055113,28 16.0292309,28 16.052668,27.9983152 C16.1029309,27.9969113 16.1286271,27.9949457 16.1551704,27.9921378 C16.1882083,27.9893298 16.2164458,27.9856795 16.2424244,27.9817484 C16.2892987,27.9744477 16.3133007,27.9702358 16.3370202,27.9654623 C16.3740114,27.9581616 16.3997076,27.9519841 16.4254037,27.9458066 C16.4708662,27.9339197 16.4916679,27.928023 16.5123754,27.9216583 C16.5536022,27.9090226 16.5773218,27.9008795 16.6010413,27.8924557 C16.6464097,27.8759824 16.6634463,27.8692433 16.6803889,27.8621299 C16.7264161,27.842755 16.7478766,27.833208 16.7690548,27.8239418 L16.8402134,27.7882809 C16.8972533,27.7573935 16.9127839,27.7486889 16.9277498,27.7397034 C17.014345,27.6850421 17.0367468,27.6697856 17.0587721,27.6540611 C17.0796679,27.6390854 17.1047052,27.6202721 17.133884,27.5976214 C17.1766168,27.563926 17.2177495,27.5284523 17.2572821,27.4912002 C17.3084862,27.4427164 17.3481129,27.401346 17.3857629,27.3581036 C17.4284017,27.3092454 17.4652987,27.2624463 17.500125,27.2137752 C17.5353279,27.1645426 17.5680834,27.1136251 17.5983917,27.061023 L17.9739512,26.4216537 L18.0558401,26.2812564 L25.73589,13.0558322 C26.070421,12.5242035 26.0883782,11.8538976 25.7827856,11.3053117 C25.4771931,10.7567258 24.8962203,10.4163314 24.2655606,10.4163633 C23.6317102,10.4178657 23.048049,10.7619023 22.7438388,11.3151867 Z","key":1}),React.createElement("path",{"fill":"url(#linearGradient-3)","d":"M30.1437101,0 L23.6847716,0 C22.749424,0.0183223345 22,0.84716472 22,1.86331122 C22,2.87945772 22.749424,3.7083001 23.6847716,3.72662244 C23.7299585,3.72662244 23.7743086,3.72419862 23.8186587,3.72056289 L26.7432558,3.72056289 C26.957527,3.75250166 27.1172208,3.95131508 27.117303,4.1862392 C27.1173323,4.23951108 27.1089352,4.29239242 27.0924781,4.34257556 L25.5505446,7.24358449 C25.0967914,8.1471655 25.403314,9.27921269 26.235182,9.77208267 C27.0670501,10.2649526 28.1092519,9.93200556 28.5630051,9.02842455 L31.7528661,3.02795647 C31.782061,2.97321855 31.8089314,2.91686475 31.8334773,2.85889507 L31.8365456,2.85132063 C31.8516079,2.81516532 31.8657404,2.77850505 31.8789432,2.74133982 L31.8811746,2.73558325 C31.8870322,2.71861651 31.8928898,2.7013468 31.8984684,2.68407709 L31.9068363,2.65741507 C31.9142745,2.63337886 31.9212478,2.60903968 31.9277562,2.58439751 C31.9316612,2.57046055 31.9352873,2.55622061 31.9389135,2.54228365 C31.9425396,2.52834669 31.9453289,2.51531866 31.9483971,2.50198765 C31.9514654,2.48865664 31.9559283,2.46714524 31.9595544,2.44957255 C31.9620648,2.43715048 31.9645752,2.4247284 31.9668066,2.41230633 C31.9710836,2.38867409 31.9749886,2.36483986 31.9785217,2.34080365 C31.9800094,2.33090639 31.981404,2.32080714 31.9827057,2.31050591 C31.9860529,2.28505581 31.9891211,2.25930272 31.9916315,2.23354964 C31.9916315,2.22991391 31.9916315,2.22658116 31.9916315,2.22294543 C31.9944208,2.19264769 31.9963734,2.16234995 31.997768,2.13387007 C31.997768,2.12619464 31.997768,2.11841822 31.997768,2.1105408 C31.997768,2.08024306 31.9999995,2.04994532 31.9999995,2.01964757 C32.00077,0.905181759 31.1697259,0.00100355849 30.1437101,0 Z","key":2}),React.createElement("path",{"fill":"url(#linearGradient-4)","d":"M19.8878401,7.40978464 C19.7383064,7.15620152 19.4618641,6.99998235 19.1626937,7.00000003 L12.8373895,7.00000003 C12.5382281,6.9999242 12.261761,7.15608029 12.1121725,7.40962229 C11.962584,7.66316428 11.9626109,7.97555472 12.112243,8.22907204 L15.2751831,13.5903738 C15.4247323,13.8438523 15.7011,14 16.0001856,14 C16.2992712,14 16.5756388,13.8438523 16.725188,13.5903738 L19.8878401,8.22935388 C20.0373866,7.97586547 20.0373866,7.66355488 19.8878401,7.41006648 L19.8878401,7.40978464 Z","key":3})])]))]);
}

Antv.defaultProps = {"width":"94","height":"28","version":"1.1","viewBox":"0 0 94 28"};

module.exports = Antv;

Antv.default = Antv;


/***/ }),

/***/ "xtsi":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("DbwS");__webpack_require__("t91x");var plugins=__webpack_require__("LeKB");var _require$publicLoader=__webpack_require__("emEt").publicLoader,getResourcesForPathname=_require$publicLoader.getResourcesForPathname,getResourcesForPathnameSync=_require$publicLoader.getResourcesForPathnameSync,getResourceURLsForPathname=_require$publicLoader.getResourceURLsForPathname,loadPage=_require$publicLoader.loadPage,loadPageSync=_require$publicLoader.loadPageSync;exports.apiRunner=function(api,args,defaultReturn,argTransform){if(args===void 0){args={};}// Hooks for gatsby-cypress's API handler
if(undefined){if(window.___apiHandler){window.___apiHandler(api);}else if(window.___resolvedAPIs){window.___resolvedAPIs.push(api);}else{window.___resolvedAPIs=[api];}}var results=plugins.map(function(plugin){if(!plugin.plugin[api]){return undefined;}// Deprecated April 2019. Use `loadPageSync` instead
args.getResourcesForPathnameSync=getResourcesForPathnameSync;// Deprecated April 2019. Use `loadPage` instead
args.getResourcesForPathname=getResourcesForPathname;args.getResourceURLsForPathname=getResourceURLsForPathname;args.loadPage=loadPage;args.loadPageSync=loadPageSync;var result=plugin.plugin[api](args,plugin.options);if(result&&argTransform){args=argTransform({args:args,result:result,plugin:plugin});}return result;});// Filter out undefined results.
results=results.filter(function(result){return typeof result!=="undefined";});if(results.length>0){return results;}else if(defaultReturn){return[defaultReturn];}else{return[];}};exports.apiRunnerAsync=function(api,args,defaultReturn){return plugins.reduce(function(previous,next){return next.plugin[api]?previous.then(function(){return next.plugin[api](args,next.options);}):previous;},Promise.resolve());};

/***/ })

},[["UxWs",13,14]]]);
//# sourceMappingURL=app-1423d11638210a78240f.js.map