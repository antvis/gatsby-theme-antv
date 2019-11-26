(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "+loJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/antd/es/tooltip/style/index.js
var style = __webpack_require__("WSfz");

// EXTERNAL MODULE: ../node_modules/antd/es/tooltip/index.js + 5 modules
var tooltip = __webpack_require__("DGR3");

// EXTERNAL MODULE: ../node_modules/antd/es/affix/style/index.js
var affix_style = __webpack_require__("/ciq");

// EXTERNAL MODULE: ../node_modules/antd/es/affix/index.js + 2 modules
var affix = __webpack_require__("37a1");

// EXTERNAL MODULE: ../node_modules/antd/es/icon/style/index.js
var icon_style = __webpack_require__("EOmM");

// EXTERNAL MODULE: ../node_modules/antd/es/icon/index.js + 4 modules
var icon = __webpack_require__("epfg");

// EXTERNAL MODULE: ../node_modules/antd/es/layout/style/index.js
var layout_style = __webpack_require__("RSeY");

// EXTERNAL MODULE: ../node_modules/antd/es/layout/index.js
var layout = __webpack_require__("dZF8");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.regexp.constructor.js
var es6_regexp_constructor = __webpack_require__("J8hF");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("Z8gF");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("oMRA");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("6d4m");

// EXTERNAL MODULE: ../node_modules/antd/es/menu/style/index.js
var menu_style = __webpack_require__("XfXe");

// EXTERNAL MODULE: ../node_modules/antd/es/menu/index.js + 18 modules
var es_menu = __webpack_require__("v5c9");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.sort.js
var es6_array_sort = __webpack_require__("U8p0");

// EXTERNAL MODULE: ../node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("W1QL");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("K/PF");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__("t91x");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("75LO");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.find.js
var es6_array_find = __webpack_require__("it7j");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("asZ9");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.string.starts-with.js
var es6_string_starts_with = __webpack_require__("FEHE");

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

// EXTERNAL MODULE: ../node_modules/antd/es/tag/style/index.js
var tag_style = __webpack_require__("TsRt");

// EXTERNAL MODULE: ../node_modules/antd/es/tag/index.js + 2 modules
var tag = __webpack_require__("qnSA");

// CONCATENATED MODULE: ../@antv/gatsby-theme-antv/site/components/ReadingTime.tsx






var ReadingTime_ReadingTime = function ReadingTime(_ref) {
  var readingTime = _ref.readingTime;

  var _useTranslation = Object(es["b" /* useTranslation */])(),
      i18n = _useTranslation.i18n;

  var _readingTime$text = readingTime.text,
      text = _readingTime$text === void 0 ? '' : _readingTime$text,
      _readingTime$time = readingTime.time,
      time = _readingTime$time === void 0 ? 0 : _readingTime$time;
  return react_default.a.createElement(tag["a" /* default */], null, i18n.language === 'zh' ? text.replace(/(\d)\smin\sread/, function (_, min) {
    if (min) {
      return "\u9605\u8BFB\u65F6\u95F4\u7EA6 " + min + " \u5206\u949F";
    }

    return "\u9605\u8BFB\u65F6\u95F4\u7EA6 " + Math.ceil(time / 60000) + " \u5206\u949F";
  }) : text);
};

/* harmony default export */ var components_ReadingTime = (ReadingTime_ReadingTime);
// EXTERNAL MODULE: ../@antv/gatsby-theme-antv/site/components/NavigatorBanner.tsx
var NavigatorBanner = __webpack_require__("MuL0");

// EXTERNAL MODULE: ../@antv/gatsby-theme-antv/site/components/Seo.tsx
var Seo = __webpack_require__("MlAH");

// EXTERNAL MODULE: ../@antv/gatsby-theme-antv/site/utils.ts
var utils = __webpack_require__("oV81");

// EXTERNAL MODULE: ../@antv/gatsby-theme-antv/site/templates/markdown.module.less
var markdown_module = __webpack_require__("GeA/");
var markdown_module_default = /*#__PURE__*/__webpack_require__.n(markdown_module);

// CONCATENATED MODULE: ../@antv/gatsby-theme-antv/site/templates/document.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Template; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });



































var shouldBeShown = function shouldBeShown(slug, path, lang) {
  if (!slug.startsWith("/" + lang + "/")) {
    return false;
  }

  var slugPieces = slug.split('/').slice(slug.split('/').indexOf('docs') + 1);
  var pathPieces = path.split('/').slice(slug.split('/').indexOf('docs') + 1);
  return slugPieces[0] === pathPieces[0];
};

var getMenuItemLocaleKey = function getMenuItemLocaleKey(slug) {
  if (slug === void 0) {
    slug = '';
  }

  var slugPieces = slug.split('/');
  var menuItemLocaleKey = slugPieces.slice(slugPieces.indexOf('docs') + 1).filter(function (key) {
    return key;
  }).join('/');
  return menuItemLocaleKey;
};

var getDocument = function getDocument(docs, slug, level) {
  if (slug === void 0) {
    slug = '';
  }

  if (slug.split('/').length !== level + 2) {
    return;
  }

  return docs.find(function (doc) {
    return doc.slug === slug;
  });
};

var getMenuData = function getMenuData(_ref) {
  var groupedEdges = _ref.groupedEdges,
      language = _ref.language,
      _ref$docs = _ref.docs,
      docs = _ref$docs === void 0 ? [] : _ref$docs,
      _ref$level = _ref.level,
      level = _ref$level === void 0 ? 0 : _ref$level;
  var results = [];
  Object.keys(groupedEdges).forEach(function (key) {
    var edges = groupedEdges[key] || [];
    var categoryKey = getMenuItemLocaleKey(key);
    var category = getDocument(docs, categoryKey, level);

    if (!category) {
      if (categoryKey.split('/').length !== level + 1) {
        return;
      }

      edges.forEach(function (edge) {
        var _edge$node = edge.node,
            _edge$node$frontmatte = _edge$node.frontmatter,
            title = _edge$node$frontmatte.title,
            order = _edge$node$frontmatte.order,
            slug = _edge$node.fields.slug;
        results.push({
          type: 'Item',
          slug: slug,
          title: title,
          order: order
        });
      });
    } else {
      var subGroupedEdges = {};
      Object.keys(groupedEdges).forEach(function (item) {
        if (item.startsWith(key)) {
          subGroupedEdges[item] = groupedEdges[item];
        }
      });
      results.push({
        type: 'SubMenu',
        title: category.title && category.title[language] ? category.title[language] : categoryKey,
        slug: key,
        order: category.order || 0,
        children: getMenuData({
          groupedEdges: subGroupedEdges,
          language: language,
          docs: docs,
          level: level + 1
        })
      });
    }
  });
  return results.sort(function (a, b) {
    return a.order - b.order;
  });
};

var document_renderMenu = function renderMenu(menuData) {
  return menuData.map(function (item) {
    if (item.type === 'Item') {
      return react_default.a.createElement(es_menu["a" /* default */].Item, {
        key: item.slug
      }, react_default.a.createElement(gatsby_browser_entry["Link"], {
        to: item.slug
      }, item.title));
    }

    if (item.type === 'SubMenu') {
      return item.children && item.children.length > 0 && react_default.a.createElement(es_menu["a" /* default */].SubMenu, {
        key: item.slug,
        title: Object(utils["a" /* capitalize */])(item.title)
      }, renderMenu(item.children));
    }

    return null;
  });
};

function Template(_ref2) {
  var data = _ref2.data,
      location = _ref2.location,
      _ref2$pageContext = _ref2.pageContext,
      prev = _ref2$pageContext.prev,
      next = _ref2$pageContext.next;
  var markdownRemark = data.markdownRemark,
      allMarkdownRemark = data.allMarkdownRemark,
      site = data.site; // data.markdownRemark holds our post data

  if (!markdownRemark) {
    return null;
  }

  var frontmatter = markdownRemark.frontmatter,
      html = markdownRemark.html,
      tableOfContents = markdownRemark.tableOfContents,
      _markdownRemark$field = markdownRemark.fields,
      slug = _markdownRemark$field.slug,
      readingTime = _markdownRemark$field.readingTime,
      relativePath = markdownRemark.parent.relativePath;
  var _allMarkdownRemark$ed = allMarkdownRemark.edges,
      edges = _allMarkdownRemark$ed === void 0 ? [] : _allMarkdownRemark$ed;
  var edgesInDocs = edges.filter(function (item) {
    return item.node.fields.slug.includes('/docs/');
  });
  var _site$siteMetadata = site.siteMetadata,
      _site$siteMetadata$do = _site$siteMetadata.docs,
      docs = _site$siteMetadata$do === void 0 ? [] : _site$siteMetadata$do,
      githubUrl = _site$siteMetadata.githubUrl,
      pathPrefix = site.pathPrefix;
  var pathWithoutPrefix = location.pathname.replace(new RegExp("^" + pathPrefix), '');

  var _useTranslation = Object(es["b" /* useTranslation */])(),
      t = _useTranslation.t,
      i18n = _useTranslation.i18n;

  var groupedEdges = Object(groupBy["a" /* default */])(edgesInDocs, function (_ref3) {
    var slugString = _ref3.node.fields.slug;
    return slugString.split('/').slice(0, -1).join('/');
  });
  var filterGroupedEdges = {};
  Object.keys(groupedEdges).filter(function (key) {
    return shouldBeShown(key, pathWithoutPrefix, i18n.language);
  }).forEach(function (key) {
    filterGroupedEdges[key] = groupedEdges[key];
  });

  var _useState = Object(react["useState"])(Object.keys(filterGroupedEdges).filter(function (key) {
    return slug.startsWith(key);
  })),
      openKeys = _useState[0],
      setOpenKeys = _useState[1];

  var menuData = getMenuData({
    groupedEdges: filterGroupedEdges,
    language: i18n.language,
    docs: docs
  });
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
    inlineIndent: 16,
    forceSubMenuRender: true
  }, document_renderMenu(menuData));
  var isWide = Object(useMedia["a" /* default */])('(min-width: 767.99px)', true);

  var _useState2 = Object(react["useState"])(false),
      drawOpen = _useState2[0],
      setDrawOpen = _useState2[1];

  var menuSider = isWide ? react_default.a.createElement(layout["a" /* default */].Sider, {
    width: "auto",
    theme: "light",
    className: markdown_module_default.a.sider
  }, menu) : react_default.a.createElement(rc_drawer_es["a" /* default */], {
    handler: react_default.a.createElement(icon["a" /* default */], {
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
  }, react_default.a.createElement(affix["a" /* default */], {
    offsetTop: 8
  }, react_default.a.createElement("div", {
    className: markdown_module_default.a.toc
    /* eslint-disable-next-line react/no-danger */
    ,
    dangerouslySetInnerHTML: {
      __html: tableOfContents
    }
  })), react_default.a.createElement("div", {
    className: markdown_module_default.a.main
  }, react_default.a.createElement("h1", null, frontmatter.title, react_default.a.createElement(tooltip["a" /* default */], {
    title: t('在 GitHub 上编辑')
  }, react_default.a.createElement("a", {
    href: githubUrl + "/edit/master/docs/" + relativePath,
    target: "_blank",
    rel: "noopener noreferrer",
    className: markdown_module_default.a.editOnGtiHubButton
  }, react_default.a.createElement(icon["a" /* default */], {
    type: "edit"
  })))), react_default.a.createElement("div", {
    className: markdown_module_default.a.meta
  }, react_default.a.createElement(components_ReadingTime, {
    readingTime: readingTime
  })), react_default.a.createElement("div", {
    /* eslint-disable-next-line react/no-danger */
    dangerouslySetInnerHTML: {
      __html: html
    },
    className: markdown_module_default.a.content
  }), react_default.a.createElement("div", null, react_default.a.createElement(NavigatorBanner["a" /* default */], {
    type: "prev",
    post: prev
  }), react_default.a.createElement(NavigatorBanner["a" /* default */], {
    type: "next",
    post: next
  }))))));
}
var pageQuery = "2266616703";

/***/ })

}]);
//# sourceMappingURL=component---antv-gatsby-theme-antv-site-templates-document-tsx-6deab3647c6278c2db62.js.map