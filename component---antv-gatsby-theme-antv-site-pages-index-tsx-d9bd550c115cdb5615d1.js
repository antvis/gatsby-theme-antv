(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "KByP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__("mXGw");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__("Wbzz");

// EXTERNAL MODULE: ../node_modules/ptz-i18n/dist/index.js
var dist = __webpack_require__("wc+d");

// EXTERNAL MODULE: ../@antv/gatsby-theme-antv/site/components/PageLoading.tsx
var PageLoading = __webpack_require__("NYms");

// CONCATENATED MODULE: ../@antv/gatsby-theme-antv/site/components/RedirectIndex.tsx
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }






var RedirectIndex_RedirectIndex =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(RedirectIndex, _React$PureComponent);

  function RedirectIndex(args) {
    var _this;

    _this = _React$PureComponent.call(this, args) || this; // Skip build, Browsers only

    if (typeof window !== 'undefined') {
      var langKey = Object(dist["getUserLangKey"])(['zh', 'en'], 'zh'); // https://github.com/angeloocana/gatsby-plugin-i18n/issues/52#issuecomment-451590961

      Object(gatsby_browser_entry["navigate"])(langKey);
    }

    return _this;
  }

  var _proto = RedirectIndex.prototype;

  _proto.render = function render() {
    return react_default.a.createElement(PageLoading["a" /* default */], null);
  };

  return RedirectIndex;
}(react_default.a.PureComponent);

/* harmony default export */ var components_RedirectIndex = (RedirectIndex_RedirectIndex);
// CONCATENATED MODULE: ../@antv/gatsby-theme-antv/site/pages/index.tsx



var pages_Page = function Page() {
  return react_default.a.createElement(components_RedirectIndex, null);
};

pages_Page.noLayout = true;
/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Page);

/***/ })

}]);
//# sourceMappingURL=component---antv-gatsby-theme-antv-site-pages-index-tsx-d9bd550c115cdb5615d1.js.map