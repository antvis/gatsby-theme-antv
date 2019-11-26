(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "KByP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__("mXGw");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./public/static/d/2485471389.json
var _2485471389 = __webpack_require__("ZYMi");

// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__("Wbzz");

// EXTERNAL MODULE: ../node_modules/ptz-i18n/dist/index.js
var dist = __webpack_require__("wc+d");

// EXTERNAL MODULE: ../node_modules/react-i18next/dist/es/index.js + 9 modules
var es = __webpack_require__("CE6G");

// EXTERNAL MODULE: ../@antv/gatsby-theme-antv/site/components/Seo.tsx
var Seo = __webpack_require__("MlAH");

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

    _this.langKey = '';

    _this.renderIndex = function (data) {
      var t = _this.props.t;
      var _data$site$siteMetada = data.site.siteMetadata,
          _data$site$siteMetada2 = _data$site$siteMetada.title,
          title = _data$site$siteMetada2 === void 0 ? '' : _data$site$siteMetada2,
          _data$site$siteMetada3 = _data$site$siteMetada.description,
          description = _data$site$siteMetada3 === void 0 ? ',' : _data$site$siteMetada3;
      return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(Seo["a" /* default */], {
        title: title || 'AntV',
        titleSuffix: t('AntV 蚂蚁数据可视化'),
        description: description,
        lang: _this.langKey
      }), react_default.a.createElement(PageLoading["a" /* default */], null));
    };

    if (typeof window !== 'undefined') {
      var langKey = Object(dist["getUserLangKey"])(['zh', 'en'], 'zh');
      _this.langKey = langKey; // https://github.com/angeloocana/gatsby-plugin-i18n/issues/52#issuecomment-451590961

      Object(gatsby_browser_entry["navigate"])(langKey);
    }

    return _this;
  }

  var _proto = RedirectIndex.prototype;

  _proto.render = function render() {
    return react_default.a.createElement(gatsby_browser_entry["StaticQuery"], {
      query: "2485471389",
      render: this.renderIndex,
      data: _2485471389
    });
  };

  return RedirectIndex;
}(react_default.a.PureComponent);

/* harmony default export */ var components_RedirectIndex = (Object(es["c" /* withTranslation */])()(RedirectIndex_RedirectIndex));
// CONCATENATED MODULE: ../@antv/gatsby-theme-antv/site/pages/index.tsx



var pages_Page = function Page() {
  return react_default.a.createElement(components_RedirectIndex, null);
};

pages_Page.noLayout = true;
/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Page);

/***/ }),

/***/ "ZYMi":
/***/ (function(module) {

module.exports = JSON.parse("{\"data\":{\"site\":{\"siteMetadata\":{\"title\":\"AntV test site\",\"description\":\"Ant Visualization solution home page\"}}}}");

/***/ })

}]);
//# sourceMappingURL=component---antv-gatsby-theme-antv-site-pages-index-tsx-d49a91d865025a0ad490.js.map