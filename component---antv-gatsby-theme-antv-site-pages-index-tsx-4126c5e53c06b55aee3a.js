(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__(54);

// EXTERNAL MODULE: ../node_modules/antd/lib/skeleton/style/index.js
var style = __webpack_require__(523);

// EXTERNAL MODULE: ../node_modules/antd/lib/skeleton/index.js
var skeleton = __webpack_require__(524);
var skeleton_default = /*#__PURE__*/__webpack_require__.n(skeleton);

// CONCATENATED MODULE: ../@antv/gatsby-theme-antv/site/components/PageLoading.tsx



/* harmony default export */ var PageLoading = (function () {
  return react_default.a.createElement("div", {
    style: {
      padding: '100px 10%'
    }
  }, react_default.a.createElement(skeleton_default.a, null), react_default.a.createElement(skeleton_default.a, null), react_default.a.createElement(skeleton_default.a, null), react_default.a.createElement(skeleton_default.a, null));
});
// EXTERNAL MODULE: ../node_modules/ptz-i18n/dist/index.js
var dist = __webpack_require__(179);

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
    return react_default.a.createElement(PageLoading, null);
  };

  return RedirectIndex;
}(react_default.a.PureComponent);

/* harmony default export */ var components_RedirectIndex = (RedirectIndex_RedirectIndex);
// CONCATENATED MODULE: ../@antv/gatsby-theme-antv/site/pages/index.tsx

/* harmony default export */ var pages = __webpack_exports__["default"] = (components_RedirectIndex);

/***/ })

}]);
//# sourceMappingURL=component---antv-gatsby-theme-antv-site-pages-index-tsx-4126c5e53c06b55aee3a.js.map