(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "/UNw":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"article":"Article-module--article--2BjDv"};

/***/ }),

/***/ "0lFU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("yIlq");

__webpack_require__("PAbq");

__webpack_require__("1qKx");

__webpack_require__("d3/y");

__webpack_require__("+jjx");

__webpack_require__("ABKx");

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__("mXGw"));

var findDOMNode_1 = __importDefault(__webpack_require__("cog4"));

var toArray_1 = __importDefault(__webpack_require__("FLur"));

var warning_1 = __importDefault(__webpack_require__("HApA"));

var ref_1 = __webpack_require__("5/md");

var resize_observer_polyfill_1 = __importDefault(__webpack_require__("iXzu"));

var util_1 = __webpack_require__("cuKu");

var INTERNAL_PREFIX_KEY = 'rc-observer-key'; // Still need to be compatible with React 15, we use class component here

var ReactResizeObserver =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ReactResizeObserver, _React$Component);

  function ReactResizeObserver() {
    var _this;

    _classCallCheck(this, ReactResizeObserver);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ReactResizeObserver).apply(this, arguments));
    _this.resizeObserver = null;
    _this.childNode = null;
    _this.currentElement = null;
    _this.state = {
      width: 0,
      height: 0
    };

    _this.onResize = function (entries) {
      var onResize = _this.props.onResize;
      var target = entries[0].target;

      var _target$getBoundingCl = target.getBoundingClientRect(),
          width = _target$getBoundingCl.width,
          height = _target$getBoundingCl.height;
      /**
       * Resize observer trigger when content size changed.
       * In most case we just care about element size,
       * let's use `boundary` instead of `contentRect` here to avoid shaking.
       */


      var fixedWidth = Math.floor(width);
      var fixedHeight = Math.floor(height);

      if (_this.state.width !== fixedWidth || _this.state.height !== fixedHeight) {
        var size = {
          width: fixedWidth,
          height: fixedHeight
        };

        _this.setState(size);

        if (onResize) {
          onResize(size);
        }
      }
    };

    _this.setChildNode = function (node) {
      _this.childNode = node;
    };

    return _this;
  }

  _createClass(ReactResizeObserver, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.onComponentUpdated();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.onComponentUpdated();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.destroyObserver();
    }
  }, {
    key: "onComponentUpdated",
    value: function onComponentUpdated() {
      var disabled = this.props.disabled; // Unregister if disabled

      if (disabled) {
        this.destroyObserver();
        return;
      } // Unregister if element changed


      var element = findDOMNode_1["default"](this.childNode || this);
      var elementChanged = element !== this.currentElement;

      if (elementChanged) {
        this.destroyObserver();
        this.currentElement = element;
      }

      if (!this.resizeObserver && element) {
        this.resizeObserver = new resize_observer_polyfill_1["default"](this.onResize);
        this.resizeObserver.observe(element);
      }
    }
  }, {
    key: "destroyObserver",
    value: function destroyObserver() {
      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
        this.resizeObserver = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      var childNodes = toArray_1["default"](children);

      if (childNodes.length > 1) {
        warning_1["default"](false, 'Find more than one child node with `children` in ResizeObserver. Will only observe first one.');
      } else if (childNodes.length === 0) {
        warning_1["default"](false, '`children` of ResizeObserver is empty. Nothing is in observe.');
        return null;
      }

      var childNode = childNodes[0];

      if (React.isValidElement(childNode) && util_1.supportRef(childNode)) {
        var ref = childNode.ref;
        childNodes[0] = React.cloneElement(childNode, {
          ref: ref_1.composeRef(ref, this.setChildNode)
        });
      }

      return childNodes.length === 1 ? childNodes[0] : childNodes.map(function (node, index) {
        if (!React.isValidElement(node) || 'key' in node && node.key !== null) {
          return node;
        }

        return React.cloneElement(node, {
          key: "".concat(INTERNAL_PREFIX_KEY, "-").concat(index)
        });
      });
    }
  }]);

  return ReactResizeObserver;
}(React.Component);

ReactResizeObserver.displayName = 'ResizeObserver';
exports["default"] = ReactResizeObserver;

/***/ }),

/***/ "5/md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("7lGJ");

__webpack_require__("+jjx");

__webpack_require__("ABKx");

__webpack_require__("d3/y");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fillRef = fillRef;
exports.composeRef = composeRef;
exports.supportRef = supportRef;

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function fillRef(ref, node) {
  if (typeof ref === 'function') {
    ref(node);
  } else if (_typeof(ref) === 'object' && ref && 'current' in ref) {
    ref.current = node;
  }
}
/**
 * Merge refs into one ref function to support ref passing.
 */


function composeRef() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }

  return function (node) {
    refs.forEach(function (ref) {
      fillRef(ref, node);
    });
  };
}

function supportRef(nodeOrComponent) {
  // Function component node
  if (nodeOrComponent.type && nodeOrComponent.type.prototype && !nodeOrComponent.type.prototype.render) {
    return false;
  } // Function component


  if (typeof nodeOrComponent === 'function' && !nodeOrComponent.prototype.render) {
    return false;
  }

  return true;
}
/* eslint-enable */

/***/ }),

/***/ "784N":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("GkPX");

// mutationobserver-shim v0.3.2 (github.com/megawac/MutationObserver.js)
// Authors: Graeme Yeates (github.com/megawac) 
window.MutationObserver = window.MutationObserver || function (w) {
  function v(a) {
    this.i = [];
    this.m = a;
  }

  function I(a) {
    (function c() {
      var d = a.takeRecords();
      d.length && a.m(d, a);
      a.h = setTimeout(c, v._period);
    })();
  }

  function p(a) {
    var b = {
      type: null,
      target: null,
      addedNodes: [],
      removedNodes: [],
      previousSibling: null,
      nextSibling: null,
      attributeName: null,
      attributeNamespace: null,
      oldValue: null
    },
        c;

    for (c in a) {
      b[c] !== w && a[c] !== w && (b[c] = a[c]);
    }

    return b;
  }

  function J(a, b) {
    var c = C(a, b);
    return function (d) {
      var f = d.length,
          n;
      b.a && 3 === a.nodeType && a.nodeValue !== c.a && d.push(new p({
        type: "characterData",
        target: a,
        oldValue: c.a
      }));
      b.b && c.b && A(d, a, c.b, b.f);
      if (b.c || b.g) n = K(d, a, c, b);
      if (n || d.length !== f) c = C(a, b);
    };
  }

  function L(a, b) {
    return b.value;
  }

  function M(a, b) {
    return "style" !== b.name ? b.value : a.style.cssText;
  }

  function A(a, b, c, d) {
    for (var f = {}, n = b.attributes, k, g, x = n.length; x--;) {
      k = n[x], g = k.name, d && d[g] === w || (D(b, k) !== c[g] && a.push(p({
        type: "attributes",
        target: b,
        attributeName: g,
        oldValue: c[g],
        attributeNamespace: k.namespaceURI
      })), f[g] = !0);
    }

    for (g in c) {
      f[g] || a.push(p({
        target: b,
        type: "attributes",
        attributeName: g,
        oldValue: c[g]
      }));
    }
  }

  function K(a, b, c, d) {
    function f(b, c, f, k, y) {
      var g = b.length - 1;
      y = -~((g - y) / 2);

      for (var h, l, e; e = b.pop();) {
        h = f[e.j], l = k[e.l], d.c && y && Math.abs(e.j - e.l) >= g && (a.push(p({
          type: "childList",
          target: c,
          addedNodes: [h],
          removedNodes: [h],
          nextSibling: h.nextSibling,
          previousSibling: h.previousSibling
        })), y--), d.b && l.b && A(a, h, l.b, d.f), d.a && 3 === h.nodeType && h.nodeValue !== l.a && a.push(p({
          type: "characterData",
          target: h,
          oldValue: l.a
        })), d.g && n(h, l);
      }
    }

    function n(b, c) {
      for (var g = b.childNodes, q = c.c, x = g.length, v = q ? q.length : 0, h, l, e, m, t, z = 0, u = 0, r = 0; u < x || r < v;) {
        m = g[u], t = (e = q[r]) && e.node, m === t ? (d.b && e.b && A(a, m, e.b, d.f), d.a && e.a !== w && m.nodeValue !== e.a && a.push(p({
          type: "characterData",
          target: m,
          oldValue: e.a
        })), l && f(l, b, g, q, z), d.g && (m.childNodes.length || e.c && e.c.length) && n(m, e), u++, r++) : (k = !0, h || (h = {}, l = []), m && (h[e = E(m)] || (h[e] = !0, -1 === (e = F(q, m, r, "node")) ? d.c && (a.push(p({
          type: "childList",
          target: b,
          addedNodes: [m],
          nextSibling: m.nextSibling,
          previousSibling: m.previousSibling
        })), z++) : l.push({
          j: u,
          l: e
        })), u++), t && t !== g[u] && (h[e = E(t)] || (h[e] = !0, -1 === (e = F(g, t, u)) ? d.c && (a.push(p({
          type: "childList",
          target: c.node,
          removedNodes: [t],
          nextSibling: q[r + 1],
          previousSibling: q[r - 1]
        })), z--) : l.push({
          j: e,
          l: r
        })), r++));
      }

      l && f(l, b, g, q, z);
    }

    var k;
    n(b, c);
    return k;
  }

  function C(a, b) {
    var c = !0;
    return function f(a) {
      var k = {
        node: a
      };
      !b.a || 3 !== a.nodeType && 8 !== a.nodeType ? (b.b && c && 1 === a.nodeType && (k.b = G(a.attributes, function (c, f) {
        if (!b.f || b.f[f.name]) c[f.name] = D(a, f);
        return c;
      })), c && (b.c || b.a || b.b && b.g) && (k.c = N(a.childNodes, f)), c = b.g) : k.a = a.nodeValue;
      return k;
    }(a);
  }

  function E(a) {
    try {
      return a.id || (a.mo_id = a.mo_id || H++);
    } catch (b) {
      try {
        return a.nodeValue;
      } catch (c) {
        return H++;
      }
    }
  }

  function N(a, b) {
    for (var c = [], d = 0; d < a.length; d++) {
      c[d] = b(a[d], d, a);
    }

    return c;
  }

  function G(a, b) {
    for (var c = {}, d = 0; d < a.length; d++) {
      c = b(c, a[d], d, a);
    }

    return c;
  }

  function F(a, b, c, d) {
    for (; c < a.length; c++) {
      if ((d ? a[c][d] : a[c]) === b) return c;
    }

    return -1;
  }

  v._period = 30;
  v.prototype = {
    observe: function observe(a, b) {
      for (var c = {
        b: !!(b.attributes || b.attributeFilter || b.attributeOldValue),
        c: !!b.childList,
        g: !!b.subtree,
        a: !(!b.characterData && !b.characterDataOldValue)
      }, d = this.i, f = 0; f < d.length; f++) {
        d[f].s === a && d.splice(f, 1);
      }

      b.attributeFilter && (c.f = G(b.attributeFilter, function (a, b) {
        a[b] = !0;
        return a;
      }));
      d.push({
        s: a,
        o: J(a, c)
      });
      this.h || I(this);
    },
    takeRecords: function takeRecords() {
      for (var a = [], b = this.i, c = 0; c < b.length; c++) {
        b[c].o(a);
      }

      return a;
    },
    disconnect: function disconnect() {
      this.i = [];
      clearTimeout(this.h);
      this.h = null;
    }
  };
  var B = document.createElement("i");
  B.style.top = 0;
  var D = (B = "null" != B.attributes.style.value) ? L : M,
      H = 1;
  return v;
}(void 0);

/***/ }),

/***/ "Cbd+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("V7cS");

__webpack_require__("5hJT");

__webpack_require__("d3/y");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = create;

function create(initialState) {
  var state = initialState;
  var listeners = [];

  function setState(partial) {
    state = _extends({}, state, partial);

    for (var i = 0; i < listeners.length; i++) {
      listeners[i]();
    }
  }

  function getState() {
    return state;
  }

  function subscribe(listener) {
    listeners.push(listener);
    return function unsubscribe() {
      var index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  }

  return {
    setState: setState,
    getState: getState,
    subscribe: subscribe
  };
}

/***/ }),

/***/ "DGR3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.index-of.js
var es6_array_index_of = __webpack_require__("V7cS");

// EXTERNAL MODULE: ../node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("W1QL");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("K/PF");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__("t91x");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("75LO");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.filter.js
var es6_array_filter = __webpack_require__("9p7t");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.for-each.js
var es6_array_for_each = __webpack_require__("7lGJ");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("5hJT");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.object.create.js
var es6_object_create = __webpack_require__("PAbq");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.object.set-prototype-of.js
var es6_object_set_prototype_of = __webpack_require__("1qKx");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.object.define-property.js
var es6_object_define_property = __webpack_require__("d3/y");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__("+jjx");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__("ABKx");

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__("mXGw");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./.cache/react-lifecycles-compat.js
var react_lifecycles_compat = __webpack_require__("94VI");

// EXTERNAL MODULE: ../node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("Kz1y");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ../node_modules/babel-runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("wQpU");
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: ../node_modules/babel-runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("Zv/C");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ../node_modules/babel-runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("Dkg+");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ../node_modules/babel-runtime/helpers/inherits.js
var inherits = __webpack_require__("Gjrs");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__("W0B4");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ../node_modules/rc-trigger/es/index.js + 8 modules
var es = __webpack_require__("mPTt");

// CONCATENATED MODULE: ../node_modules/rc-tooltip/es/placements.js
var placements_autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};
var targetOffset = [0, 0];
var placements = {
  left: {
    points: ['cr', 'cl'],
    overflow: placements_autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  },
  right: {
    points: ['cl', 'cr'],
    overflow: placements_autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  top: {
    points: ['bc', 'tc'],
    overflow: placements_autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  bottom: {
    points: ['tc', 'bc'],
    overflow: placements_autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  topLeft: {
    points: ['bl', 'tl'],
    overflow: placements_autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  leftTop: {
    points: ['tr', 'tl'],
    overflow: placements_autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: placements_autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  rightTop: {
    points: ['tl', 'tr'],
    overflow: placements_autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: placements_autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  rightBottom: {
    points: ['bl', 'br'],
    overflow: placements_autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: placements_autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  leftBottom: {
    points: ['br', 'bl'],
    overflow: placements_autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  }
};
/* harmony default export */ var es_placements = (placements);
// CONCATENATED MODULE: ../node_modules/rc-tooltip/es/Content.js






var Content_Content = function (_React$Component) {
  inherits_default()(Content, _React$Component);

  function Content() {
    classCallCheck_default()(this, Content);

    return possibleConstructorReturn_default()(this, _React$Component.apply(this, arguments));
  }

  Content.prototype.componentDidUpdate = function componentDidUpdate() {
    var trigger = this.props.trigger;

    if (trigger) {
      trigger.forcePopupAlign();
    }
  };

  Content.prototype.render = function render() {
    var _props = this.props,
        overlay = _props.overlay,
        prefixCls = _props.prefixCls,
        id = _props.id;
    return react_default.a.createElement('div', {
      className: prefixCls + '-inner',
      id: id,
      role: 'tooltip'
    }, typeof overlay === 'function' ? overlay() : overlay);
  };

  return Content;
}(react_default.a.Component);

Content_Content.propTypes = {
  prefixCls: prop_types_default.a.string,
  overlay: prop_types_default.a.oneOfType([prop_types_default.a.node, prop_types_default.a.func]).isRequired,
  id: prop_types_default.a.string,
  trigger: prop_types_default.a.any
};
/* harmony default export */ var es_Content = (Content_Content);
// CONCATENATED MODULE: ../node_modules/rc-tooltip/es/Tooltip.js











var Tooltip_Tooltip = function (_Component) {
  inherits_default()(Tooltip, _Component);

  function Tooltip() {
    var _temp, _this, _ret;

    classCallCheck_default()(this, Tooltip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn_default()(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.getPopupElement = function () {
      var _this$props = _this.props,
          arrowContent = _this$props.arrowContent,
          overlay = _this$props.overlay,
          prefixCls = _this$props.prefixCls,
          id = _this$props.id;
      return [react_default.a.createElement('div', {
        className: prefixCls + '-arrow',
        key: 'arrow'
      }, arrowContent), react_default.a.createElement(es_Content, {
        key: 'content',
        trigger: _this.trigger,
        prefixCls: prefixCls,
        id: id,
        overlay: overlay
      })];
    }, _this.saveTrigger = function (node) {
      _this.trigger = node;
    }, _temp), possibleConstructorReturn_default()(_this, _ret);
  }

  Tooltip.prototype.getPopupDomNode = function getPopupDomNode() {
    return this.trigger.getPopupDomNode();
  };

  Tooltip.prototype.render = function render() {
    var _props = this.props,
        overlayClassName = _props.overlayClassName,
        trigger = _props.trigger,
        mouseEnterDelay = _props.mouseEnterDelay,
        mouseLeaveDelay = _props.mouseLeaveDelay,
        overlayStyle = _props.overlayStyle,
        prefixCls = _props.prefixCls,
        children = _props.children,
        onVisibleChange = _props.onVisibleChange,
        afterVisibleChange = _props.afterVisibleChange,
        transitionName = _props.transitionName,
        animation = _props.animation,
        placement = _props.placement,
        align = _props.align,
        destroyTooltipOnHide = _props.destroyTooltipOnHide,
        defaultVisible = _props.defaultVisible,
        getTooltipContainer = _props.getTooltipContainer,
        restProps = objectWithoutProperties_default()(_props, ['overlayClassName', 'trigger', 'mouseEnterDelay', 'mouseLeaveDelay', 'overlayStyle', 'prefixCls', 'children', 'onVisibleChange', 'afterVisibleChange', 'transitionName', 'animation', 'placement', 'align', 'destroyTooltipOnHide', 'defaultVisible', 'getTooltipContainer']);

    var extraProps = extends_default()({}, restProps);

    if ('visible' in this.props) {
      extraProps.popupVisible = this.props.visible;
    }

    return react_default.a.createElement(es["a" /* default */], extends_default()({
      popupClassName: overlayClassName,
      ref: this.saveTrigger,
      prefixCls: prefixCls,
      popup: this.getPopupElement,
      action: trigger,
      builtinPlacements: placements,
      popupPlacement: placement,
      popupAlign: align,
      getPopupContainer: getTooltipContainer,
      onPopupVisibleChange: onVisibleChange,
      afterPopupVisibleChange: afterVisibleChange,
      popupTransitionName: transitionName,
      popupAnimation: animation,
      defaultPopupVisible: defaultVisible,
      destroyPopupOnHide: destroyTooltipOnHide,
      mouseLeaveDelay: mouseLeaveDelay,
      popupStyle: overlayStyle,
      mouseEnterDelay: mouseEnterDelay
    }, extraProps), children);
  };

  return Tooltip;
}(react["Component"]);

Tooltip_Tooltip.propTypes = {
  trigger: prop_types_default.a.any,
  children: prop_types_default.a.any,
  defaultVisible: prop_types_default.a.bool,
  visible: prop_types_default.a.bool,
  placement: prop_types_default.a.string,
  transitionName: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.object]),
  animation: prop_types_default.a.any,
  onVisibleChange: prop_types_default.a.func,
  afterVisibleChange: prop_types_default.a.func,
  overlay: prop_types_default.a.oneOfType([prop_types_default.a.node, prop_types_default.a.func]).isRequired,
  overlayStyle: prop_types_default.a.object,
  overlayClassName: prop_types_default.a.string,
  prefixCls: prop_types_default.a.string,
  mouseEnterDelay: prop_types_default.a.number,
  mouseLeaveDelay: prop_types_default.a.number,
  getTooltipContainer: prop_types_default.a.func,
  destroyTooltipOnHide: prop_types_default.a.bool,
  align: prop_types_default.a.object,
  arrowContent: prop_types_default.a.any,
  id: prop_types_default.a.string
};
Tooltip_Tooltip.defaultProps = {
  prefixCls: 'rc-tooltip',
  mouseEnterDelay: 0,
  destroyTooltipOnHide: false,
  mouseLeaveDelay: 0.1,
  align: {},
  placement: 'right',
  trigger: ['hover'],
  arrowContent: null
};
/* harmony default export */ var es_Tooltip = (Tooltip_Tooltip);
// CONCATENATED MODULE: ../node_modules/rc-tooltip/es/index.js

/* harmony default export */ var rc_tooltip_es = (es_Tooltip);
// EXTERNAL MODULE: ../node_modules/classnames/index.js
var classnames = __webpack_require__("8Jek");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ../node_modules/antd/es/tooltip/placements.js







function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}


var autoAdjustOverflowEnabled = {
  adjustX: 1,
  adjustY: 1
};
var autoAdjustOverflowDisabled = {
  adjustX: 0,
  adjustY: 0
};
var placements_targetOffset = [0, 0];
function getOverflowOptions(autoAdjustOverflow) {
  if (typeof autoAdjustOverflow === 'boolean') {
    return autoAdjustOverflow ? autoAdjustOverflowEnabled : autoAdjustOverflowDisabled;
  }

  return _extends(_extends({}, autoAdjustOverflowDisabled), autoAdjustOverflow);
}
function placements_getPlacements() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _config$arrowWidth = config.arrowWidth,
      arrowWidth = _config$arrowWidth === void 0 ? 5 : _config$arrowWidth,
      _config$horizontalArr = config.horizontalArrowShift,
      horizontalArrowShift = _config$horizontalArr === void 0 ? 16 : _config$horizontalArr,
      _config$verticalArrow = config.verticalArrowShift,
      verticalArrowShift = _config$verticalArrow === void 0 ? 12 : _config$verticalArrow,
      _config$autoAdjustOve = config.autoAdjustOverflow,
      autoAdjustOverflow = _config$autoAdjustOve === void 0 ? true : _config$autoAdjustOve;
  var placementMap = {
    left: {
      points: ['cr', 'cl'],
      offset: [-4, 0]
    },
    right: {
      points: ['cl', 'cr'],
      offset: [4, 0]
    },
    top: {
      points: ['bc', 'tc'],
      offset: [0, -4]
    },
    bottom: {
      points: ['tc', 'bc'],
      offset: [0, 4]
    },
    topLeft: {
      points: ['bl', 'tc'],
      offset: [-(horizontalArrowShift + arrowWidth), -4]
    },
    leftTop: {
      points: ['tr', 'cl'],
      offset: [-4, -(verticalArrowShift + arrowWidth)]
    },
    topRight: {
      points: ['br', 'tc'],
      offset: [horizontalArrowShift + arrowWidth, -4]
    },
    rightTop: {
      points: ['tl', 'cr'],
      offset: [4, -(verticalArrowShift + arrowWidth)]
    },
    bottomRight: {
      points: ['tr', 'bc'],
      offset: [horizontalArrowShift + arrowWidth, 4]
    },
    rightBottom: {
      points: ['bl', 'cr'],
      offset: [4, verticalArrowShift + arrowWidth]
    },
    bottomLeft: {
      points: ['tl', 'bc'],
      offset: [-(horizontalArrowShift + arrowWidth), 4]
    },
    leftBottom: {
      points: ['br', 'cl'],
      offset: [-4, verticalArrowShift + arrowWidth]
    }
  };
  Object.keys(placementMap).forEach(function (key) {
    placementMap[key] = config.arrowPointAtCenter ? _extends(_extends({}, placementMap[key]), {
      overflow: getOverflowOptions(autoAdjustOverflow),
      targetOffset: placements_targetOffset
    }) : _extends(_extends({}, placements[key]), {
      overflow: getOverflowOptions(autoAdjustOverflow)
    });
    placementMap[key].ignoreShake = true;
  });
  return placementMap;
}
// EXTERNAL MODULE: ../node_modules/antd/es/config-provider/context.js + 4 modules
var context = __webpack_require__("Bfez");

// CONCATENATED MODULE: ../node_modules/antd/es/tooltip/index.js














function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function tooltip_extends() {
  tooltip_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return tooltip_extends.apply(this, arguments);
}








var splitObject = function splitObject(obj, keys) {
  var picked = {};

  var omitted = tooltip_extends({}, obj);

  keys.forEach(function (key) {
    if (obj && key in obj) {
      picked[key] = obj[key];
      delete omitted[key];
    }
  });
  return {
    picked: picked,
    omitted: omitted
  };
}; // Fix Tooltip won't hide at disabled button
// mouse events don't trigger at disabled button in Chrome
// https://github.com/react-component/tooltip/issues/18


function getDisabledCompatibleChildren(element) {
  var elementType = element.type;

  if ((elementType.__ANT_BUTTON === true || elementType.__ANT_SWITCH === true || elementType.__ANT_CHECKBOX === true || element.type === 'button') && element.props.disabled) {
    // Pick some layout related style properties up to span
    // Prevent layout bugs like https://github.com/ant-design/ant-design/issues/5254
    var _splitObject = splitObject(element.props.style, ['position', 'left', 'right', 'top', 'bottom', 'float', 'display', 'zIndex']),
        picked = _splitObject.picked,
        omitted = _splitObject.omitted;

    var spanStyle = tooltip_extends(tooltip_extends({
      display: 'inline-block'
    }, picked), {
      cursor: 'not-allowed',
      width: element.props.block ? '100%' : null
    });

    var buttonStyle = tooltip_extends(tooltip_extends({}, omitted), {
      pointerEvents: 'none'
    });

    var child = react["cloneElement"](element, {
      style: buttonStyle,
      className: null
    });
    return react["createElement"]("span", {
      style: spanStyle,
      className: element.props.className
    }, child);
  }

  return element;
}

var tooltip_Tooltip =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tooltip, _React$Component);

  function Tooltip(props) {
    var _this;

    _classCallCheck(this, Tooltip);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tooltip).call(this, props));

    _this.onVisibleChange = function (visible) {
      var onVisibleChange = _this.props.onVisibleChange;

      if (!('visible' in _this.props)) {
        _this.setState({
          visible: _this.isNoTitle() ? false : visible
        });
      }

      if (onVisibleChange && !_this.isNoTitle()) {
        onVisibleChange(visible);
      }
    };

    _this.saveTooltip = function (node) {
      _this.tooltip = node;
    }; // 动态设置动画点


    _this.onPopupAlign = function (domNode, align) {
      var placements = _this.getPlacements(); // 当前返回的位置


      var placement = Object.keys(placements).filter(function (key) {
        return placements[key].points[0] === align.points[0] && placements[key].points[1] === align.points[1];
      })[0];

      if (!placement) {
        return;
      } // 根据当前坐标设置动画点


      var rect = domNode.getBoundingClientRect();
      var transformOrigin = {
        top: '50%',
        left: '50%'
      };

      if (placement.indexOf('top') >= 0 || placement.indexOf('Bottom') >= 0) {
        transformOrigin.top = "".concat(rect.height - align.offset[1], "px");
      } else if (placement.indexOf('Top') >= 0 || placement.indexOf('bottom') >= 0) {
        transformOrigin.top = "".concat(-align.offset[1], "px");
      }

      if (placement.indexOf('left') >= 0 || placement.indexOf('Right') >= 0) {
        transformOrigin.left = "".concat(rect.width - align.offset[0], "px");
      } else if (placement.indexOf('right') >= 0 || placement.indexOf('Left') >= 0) {
        transformOrigin.left = "".concat(-align.offset[0], "px");
      }

      domNode.style.transformOrigin = "".concat(transformOrigin.left, " ").concat(transformOrigin.top);
    };

    _this.renderTooltip = function (_ref) {
      var getContextPopupContainer = _ref.getPopupContainer,
          getPrefixCls = _ref.getPrefixCls;

      var _assertThisInitialize = _assertThisInitialized(_this),
          props = _assertThisInitialize.props,
          state = _assertThisInitialize.state;

      var customizePrefixCls = props.prefixCls,
          title = props.title,
          overlay = props.overlay,
          openClassName = props.openClassName,
          getPopupContainer = props.getPopupContainer,
          getTooltipContainer = props.getTooltipContainer;
      var children = props.children;
      var prefixCls = getPrefixCls('tooltip', customizePrefixCls);
      var visible = state.visible; // Hide tooltip when there is no title

      if (!('visible' in props) && _this.isNoTitle()) {
        visible = false;
      }

      var child = getDisabledCompatibleChildren(react["isValidElement"](children) ? children : react["createElement"]("span", null, children));
      var childProps = child.props;
      var childCls = classnames_default()(childProps.className, _defineProperty({}, openClassName || "".concat(prefixCls, "-open"), true));
      return react["createElement"](rc_tooltip_es, tooltip_extends({}, _this.props, {
        prefixCls: prefixCls,
        getTooltipContainer: getPopupContainer || getTooltipContainer || getContextPopupContainer,
        ref: _this.saveTooltip,
        builtinPlacements: _this.getPlacements(),
        overlay: overlay || title || '',
        visible: visible,
        onVisibleChange: _this.onVisibleChange,
        onPopupAlign: _this.onPopupAlign
      }), visible ? react["cloneElement"](child, {
        className: childCls
      }) : child);
    };

    _this.state = {
      visible: !!props.visible || !!props.defaultVisible
    };
    return _this;
  }

  _createClass(Tooltip, [{
    key: "getPopupDomNode",
    value: function getPopupDomNode() {
      return this.tooltip.getPopupDomNode();
    }
  }, {
    key: "getPlacements",
    value: function getPlacements() {
      var _this$props = this.props,
          builtinPlacements = _this$props.builtinPlacements,
          arrowPointAtCenter = _this$props.arrowPointAtCenter,
          autoAdjustOverflow = _this$props.autoAdjustOverflow;
      return builtinPlacements || placements_getPlacements({
        arrowPointAtCenter: arrowPointAtCenter,
        verticalArrowShift: 8,
        autoAdjustOverflow: autoAdjustOverflow
      });
    }
  }, {
    key: "isNoTitle",
    value: function isNoTitle() {
      var _this$props2 = this.props,
          title = _this$props2.title,
          overlay = _this$props2.overlay;
      return !title && !overlay; // overlay for old version compatibility
    }
  }, {
    key: "render",
    value: function render() {
      return react["createElement"](context["a" /* ConfigConsumer */], null, this.renderTooltip);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if ('visible' in nextProps) {
        return {
          visible: nextProps.visible
        };
      }

      return null;
    }
  }]);

  return Tooltip;
}(react["Component"]);

tooltip_Tooltip.defaultProps = {
  placement: 'top',
  transitionName: 'zoom-big-fast',
  mouseEnterDelay: 0.1,
  mouseLeaveDelay: 0.1,
  arrowPointAtCenter: false,
  autoAdjustOverflow: true
};
Object(react_lifecycles_compat["polyfill"])(tooltip_Tooltip);
/* harmony default export */ var tooltip = __webpack_exports__["a"] = (tooltip_Tooltip);

/***/ }),

/***/ "DzUA":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "EIj1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("LJgF");

/** Detect free variable `self`. */

var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] || freeSelf || Function('return this')();
/* harmony default export */ __webpack_exports__["a"] = (root);

/***/ }),

/***/ "FLur":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("7lGJ");

__webpack_require__("d3/y");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = toArray;

var _react = _interopRequireDefault(__webpack_require__("mXGw"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function toArray(children) {
  var ret = [];

  _react["default"].Children.forEach(children, function (c) {
    ret.push(c);
  });

  return ret;
}

/***/ }),

/***/ "GeA/":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"markdown":"markdown-module--markdown--1mB6U","layout":"markdown-module--layout--3qlql","editOnGtiHubButton":"markdown-module--editOnGtiHubButton--1iQRJ","main":"markdown-module--main--meaSN","meta":"markdown-module--meta--MqBFH","content":"markdown-module--content--WILib","toc":"markdown-module--toc--3va9O","sider":"markdown-module--sider--2Y6I1","menuIcon":"markdown-module--menuIcon--2CCwC","menuDrawer":"markdown-module--menuDrawer--1DMCz","menuSwitch":"markdown-module--menuSwitch--2HEs7"};

/***/ }),

/***/ "HApA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("d3/y");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warning = warning;
exports.note = note;
exports.resetWarned = resetWarned;
exports.call = call;
exports.warningOnce = warningOnce;
exports.noteOnce = noteOnce;
exports["default"] = void 0;
/* eslint-disable no-console */

var warned = {};

function warning(valid, message) {
  // Support uglify
  if (false) {}
}

function note(valid, message) {
  // Support uglify
  if (false) {}
}

function resetWarned() {
  warned = {};
}

function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}

function warningOnce(valid, message) {
  call(warning, valid, message);
}

function noteOnce(valid, message) {
  call(note, valid, message);
}

var _default = warningOnce;
/* eslint-enable */

exports["default"] = _default;

/***/ }),

/***/ "HIqm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__("f17A");

function scrollIntoView(elem, container, config) {
  config = config || {}; // document 归一化到 window

  if (container.nodeType === 9) {
    container = util.getWindow(container);
  }

  var allowHorizontalScroll = config.allowHorizontalScroll;
  var onlyScrollIfNeeded = config.onlyScrollIfNeeded;
  var alignWithTop = config.alignWithTop;
  var alignWithLeft = config.alignWithLeft;
  var offsetTop = config.offsetTop || 0;
  var offsetLeft = config.offsetLeft || 0;
  var offsetBottom = config.offsetBottom || 0;
  var offsetRight = config.offsetRight || 0;
  allowHorizontalScroll = allowHorizontalScroll === undefined ? true : allowHorizontalScroll;
  var isWin = util.isWindow(container);
  var elemOffset = util.offset(elem);
  var eh = util.outerHeight(elem);
  var ew = util.outerWidth(elem);
  var containerOffset = undefined;
  var ch = undefined;
  var cw = undefined;
  var containerScroll = undefined;
  var diffTop = undefined;
  var diffBottom = undefined;
  var win = undefined;
  var winScroll = undefined;
  var ww = undefined;
  var wh = undefined;

  if (isWin) {
    win = container;
    wh = util.height(win);
    ww = util.width(win);
    winScroll = {
      left: util.scrollLeft(win),
      top: util.scrollTop(win)
    }; // elem 相对 container 可视视窗的距离

    diffTop = {
      left: elemOffset.left - winScroll.left - offsetLeft,
      top: elemOffset.top - winScroll.top - offsetTop
    };
    diffBottom = {
      left: elemOffset.left + ew - (winScroll.left + ww) + offsetRight,
      top: elemOffset.top + eh - (winScroll.top + wh) + offsetBottom
    };
    containerScroll = winScroll;
  } else {
    containerOffset = util.offset(container);
    ch = container.clientHeight;
    cw = container.clientWidth;
    containerScroll = {
      left: container.scrollLeft,
      top: container.scrollTop
    }; // elem 相对 container 可视视窗的距离
    // 注意边框, offset 是边框到根节点

    diffTop = {
      left: elemOffset.left - (containerOffset.left + (parseFloat(util.css(container, 'borderLeftWidth')) || 0)) - offsetLeft,
      top: elemOffset.top - (containerOffset.top + (parseFloat(util.css(container, 'borderTopWidth')) || 0)) - offsetTop
    };
    diffBottom = {
      left: elemOffset.left + ew - (containerOffset.left + cw + (parseFloat(util.css(container, 'borderRightWidth')) || 0)) + offsetRight,
      top: elemOffset.top + eh - (containerOffset.top + ch + (parseFloat(util.css(container, 'borderBottomWidth')) || 0)) + offsetBottom
    };
  }

  if (diffTop.top < 0 || diffBottom.top > 0) {
    // 强制向上
    if (alignWithTop === true) {
      util.scrollTop(container, containerScroll.top + diffTop.top);
    } else if (alignWithTop === false) {
      util.scrollTop(container, containerScroll.top + diffBottom.top);
    } else {
      // 自动调整
      if (diffTop.top < 0) {
        util.scrollTop(container, containerScroll.top + diffTop.top);
      } else {
        util.scrollTop(container, containerScroll.top + diffBottom.top);
      }
    }
  } else {
    if (!onlyScrollIfNeeded) {
      alignWithTop = alignWithTop === undefined ? true : !!alignWithTop;

      if (alignWithTop) {
        util.scrollTop(container, containerScroll.top + diffTop.top);
      } else {
        util.scrollTop(container, containerScroll.top + diffBottom.top);
      }
    }
  }

  if (allowHorizontalScroll) {
    if (diffTop.left < 0 || diffBottom.left > 0) {
      // 强制向上
      if (alignWithLeft === true) {
        util.scrollLeft(container, containerScroll.left + diffTop.left);
      } else if (alignWithLeft === false) {
        util.scrollLeft(container, containerScroll.left + diffBottom.left);
      } else {
        // 自动调整
        if (diffTop.left < 0) {
          util.scrollLeft(container, containerScroll.left + diffTop.left);
        } else {
          util.scrollLeft(container, containerScroll.left + diffBottom.left);
        }
      }
    } else {
      if (!onlyScrollIfNeeded) {
        alignWithLeft = alignWithLeft === undefined ? true : !!alignWithLeft;

        if (alignWithLeft) {
          util.scrollLeft(container, containerScroll.left + diffTop.left);
        } else {
          util.scrollLeft(container, containerScroll.left + diffBottom.left);
        }
      }
    }
  }
}

module.exports = scrollIntoView;

/***/ }),

/***/ "IDIb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd_es_layout_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("RSeY");
/* harmony import */ var antd_es_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dZF8");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("mXGw");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Article_module_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("/UNw");
/* harmony import */ var _Article_module_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Article_module_less__WEBPACK_IMPORTED_MODULE_3__);





var Article = function Article(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_es_layout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].Content, {
    className: _Article_module_less__WEBPACK_IMPORTED_MODULE_3___default.a.article
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("article", props));
};

/* harmony default export */ __webpack_exports__["a"] = (Article);

/***/ }),

/***/ "JNk6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__("HIqm");

/***/ }),

/***/ "KB05":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("EIj1");
/* harmony import */ var _stubFalse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("KLPu");


/** Detect free variable `exports`. */

var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */

var Buffer = moduleExports ? _root_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].Buffer : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */

var isBuffer = nativeIsBuffer || _stubFalse_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"];
/* harmony default export */ __webpack_exports__["a"] = (isBuffer);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("Ono3")(module)))

/***/ }),

/***/ "KLPu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

/* harmony default export */ __webpack_exports__["a"] = (stubFalse);

/***/ }),

/***/ "LJgF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("pCvA")))

/***/ }),

/***/ "MuL0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mXGw");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8Jek");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Wbzz");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("CE6G");
/* harmony import */ var _NavigatorBanner_module_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("QPvK");
/* harmony import */ var _NavigatorBanner_module_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_NavigatorBanner_module_less__WEBPACK_IMPORTED_MODULE_4__);






var NavigatorBanner = function NavigatorBanner(_ref) {
  var post = _ref.post,
      type = _ref.type;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__[/* useTranslation */ "b"])(),
      t = _useTranslation.t;

  if (!post) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_NavigatorBanner_module_less__WEBPACK_IMPORTED_MODULE_4___default.a.button, _NavigatorBanner_module_less__WEBPACK_IMPORTED_MODULE_4___default.a.hidden)
    });
  }

  var _post$node = post.node,
      slug = _post$node.fields.slug,
      title = _post$node.frontmatter.title;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: slug,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_NavigatorBanner_module_less__WEBPACK_IMPORTED_MODULE_4___default.a.button, _NavigatorBanner_module_less__WEBPACK_IMPORTED_MODULE_4___default.a[type])
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _NavigatorBanner_module_less__WEBPACK_IMPORTED_MODULE_4___default.a.label
  }, t(type === 'prev' ? '上一篇' : '下一篇')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _NavigatorBanner_module_less__WEBPACK_IMPORTED_MODULE_4___default.a.title
  }, title));
};

/* harmony default export */ __webpack_exports__["a"] = (NavigatorBanner);

/***/ }),

/***/ "QPvK":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"button":"NavigatorBanner-module--button--2mS4_","hidden":"NavigatorBanner-module--hidden--J0qHU","label":"NavigatorBanner-module--label--2kfvp","title":"NavigatorBanner-module--title--KKpDO","next":"NavigatorBanner-module--next--1jDTk"};

/***/ }),

/***/ "RSeY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("SwVN");
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sD32");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "WSfz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("SwVN");
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("k81u");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "XMvD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("GkPX");

__webpack_require__("1qKx");

__webpack_require__("PAbq");

__webpack_require__("5hJT");

__webpack_require__("d3/y");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

exports["default"] = connect;

var _react = __webpack_require__("mXGw");

var _react2 = _interopRequireDefault(_react);

var _shallowequal = __webpack_require__("F56x");

var _shallowequal2 = _interopRequireDefault(_shallowequal);

var _hoistNonReactStatics = __webpack_require__("y/En");

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _reactLifecyclesCompat = __webpack_require__("94VI");

var _PropTypes = __webpack_require__("uSgx");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function isStateless(Component) {
  return !Component.prototype.render;
}

var defaultMapStateToProps = function defaultMapStateToProps() {
  return {};
};

function connect(mapStateToProps) {
  var shouldSubscribe = !!mapStateToProps;
  var finnalMapStateToProps = mapStateToProps || defaultMapStateToProps;
  return function wrapWithConnect(WrappedComponent) {
    var Connect = function (_Component) {
      _inherits(Connect, _Component);

      _createClass(Connect, null, [{
        key: 'getDerivedStateFromProps',
        value: function getDerivedStateFromProps(props, prevState) {
          // using ownProps
          if (mapStateToProps && mapStateToProps.length === 2 && props !== prevState.props) {
            return {
              subscribed: finnalMapStateToProps(prevState.store.getState(), props),
              props: props
            };
          }

          return {
            props: props
          };
        }
      }]);

      function Connect(props, context) {
        _classCallCheck(this, Connect);

        var _this = _possibleConstructorReturn(this, (Connect.__proto__ || Object.getPrototypeOf(Connect)).call(this, props, context));

        _this.handleChange = function () {
          if (!_this.unsubscribe) {
            return;
          }

          var nextState = finnalMapStateToProps(_this.store.getState(), _this.props);

          _this.setState({
            subscribed: nextState
          });
        };

        _this.store = context.miniStore;
        _this.state = {
          subscribed: finnalMapStateToProps(_this.store.getState(), props),
          store: _this.store,
          props: props
        };
        return _this;
      }

      _createClass(Connect, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          this.trySubscribe();
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          this.tryUnsubscribe();
        }
      }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
          return !(0, _shallowequal2["default"])(this.props, nextProps) || !(0, _shallowequal2["default"])(this.state.subscribed, nextState.subscribed);
        }
      }, {
        key: 'trySubscribe',
        value: function trySubscribe() {
          if (shouldSubscribe) {
            this.unsubscribe = this.store.subscribe(this.handleChange);
            this.handleChange();
          }
        }
      }, {
        key: 'tryUnsubscribe',
        value: function tryUnsubscribe() {
          if (this.unsubscribe) {
            this.unsubscribe();
            this.unsubscribe = null;
          }
        }
      }, {
        key: 'getWrappedInstance',
        value: function getWrappedInstance() {
          return this.wrappedInstance;
        }
      }, {
        key: 'render',
        value: function render() {
          var _this2 = this;

          var props = _extends({}, this.props, this.state.subscribed, {
            store: this.store
          });

          if (!isStateless(WrappedComponent)) {
            props = _extends({}, props, {
              ref: function ref(c) {
                return _this2.wrappedInstance = c;
              }
            });
          }

          return _react2["default"].createElement(WrappedComponent, props);
        }
      }]);

      return Connect;
    }(_react.Component);

    Connect.displayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';
    Connect.contextTypes = {
      miniStore: _PropTypes.storeShape.isRequired
    };
    (0, _reactLifecyclesCompat.polyfill)(Connect);
    return (0, _hoistNonReactStatics2["default"])(Connect, WrappedComponent);
  };
}

/***/ }),

/***/ "XfXe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("SwVN");
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("DzUA");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tooltip_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("WSfz");

 // style dependencies
// deps-lint-skip: layout



/***/ }),

/***/ "YOo+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("1qKx");

__webpack_require__("PAbq");

__webpack_require__("d3/y");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__("mXGw");

var _react2 = _interopRequireDefault(_react);

var _PropTypes = __webpack_require__("uSgx");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Provider = function (_Component) {
  _inherits(Provider, _Component);

  function Provider() {
    _classCallCheck(this, Provider);

    return _possibleConstructorReturn(this, (Provider.__proto__ || Object.getPrototypeOf(Provider)).apply(this, arguments));
  }

  _createClass(Provider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        miniStore: this.props.store
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react.Children.only(this.props.children);
    }
  }]);

  return Provider;
}(_react.Component);

Provider.propTypes = {
  store: _PropTypes.storeShape.isRequired
};
Provider.childContextTypes = {
  miniStore: _PropTypes.storeShape.isRequired
};
exports["default"] = Provider;

/***/ }),

/***/ "cStR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("5hJT");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.object.create.js
var es6_object_create = __webpack_require__("PAbq");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.object.set-prototype-of.js
var es6_object_set_prototype_of = __webpack_require__("1qKx");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.object.define-property.js
var es6_object_define_property = __webpack_require__("d3/y");

// EXTERNAL MODULE: ../node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("W1QL");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("K/PF");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__("t91x");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("75LO");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.index-of.js
var es6_array_index_of = __webpack_require__("V7cS");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__("+jjx");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__("ABKx");

// EXTERNAL MODULE: ../node_modules/rc-util/es/PortalWrapper.js
var PortalWrapper = __webpack_require__("tqkS");

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__("mXGw");

// EXTERNAL MODULE: ./.cache/react-lifecycles-compat.js
var react_lifecycles_compat = __webpack_require__("94VI");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.date.now.js
var es6_date_now = __webpack_require__("7t+O");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("Z8gF");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("e2Kn");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__("4aJ6");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.date.to-string.js
var es6_date_to_string = __webpack_require__("M/4x");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.some.js
var es6_array_some = __webpack_require__("VNvs");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.for-each.js
var es6_array_for_each = __webpack_require__("7lGJ");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__("9ovy");

// EXTERNAL MODULE: ../node_modules/classnames/index.js
var classnames = __webpack_require__("8Jek");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ../node_modules/rc-util/es/getScrollBarSize.js
var getScrollBarSize = __webpack_require__("Exke");

// EXTERNAL MODULE: ../node_modules/rc-util/es/KeyCode.js
var KeyCode = __webpack_require__("zAXs");

// EXTERNAL MODULE: ../node_modules/rc-util/es/switchScrollingEffect.js
var switchScrollingEffect = __webpack_require__("hq6L");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.filter.js
var es6_array_filter = __webpack_require__("9p7t");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.is-array.js
var es6_array_is_array = __webpack_require__("+3V6");

// CONCATENATED MODULE: ../node_modules/rc-drawer/es/utils.js






function dataToArray(vars) {
  if (Array.isArray(vars)) {
    return vars;
  }

  return [vars];
}
var transitionEndObject = {
  transition: 'transitionend',
  WebkitTransition: 'webkitTransitionEnd',
  MozTransition: 'transitionend',
  OTransition: 'oTransitionEnd otransitionend'
};
var transitionStr = Object.keys(transitionEndObject).filter(function (key) {
  if (typeof document === 'undefined') {
    return false;
  }

  var html = document.getElementsByTagName('html')[0];
  return key in (html ? html.style : {});
})[0];
var transitionEnd = transitionEndObject[transitionStr];
function addEventListener(target, eventType, callback, options) {
  if (target.addEventListener) {
    target.addEventListener(eventType, callback, options);
  } else if (target.attachEvent) {
    // tslint:disable-line
    target.attachEvent("on".concat(eventType), callback); // tslint:disable-line
  }
}
function removeEventListener(target, eventType, callback, options) {
  if (target.removeEventListener) {
    target.removeEventListener(eventType, callback, options);
  } else if (target.attachEvent) {
    // tslint:disable-line
    target.detachEvent("on".concat(eventType), callback); // tslint:disable-line
  }
}
function transformArguments(arg, cb) {
  var result = typeof arg === 'function' ? arg(cb) : arg;

  if (Array.isArray(result)) {
    if (result.length === 2) {
      return result;
    }

    return [result[0], result[1]];
  }

  return [result];
}
var isNumeric = function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
};
var windowIsUndefined = !(typeof window !== 'undefined' && window.document && window.document.createElement);
var getTouchParentScroll = function getTouchParentScroll(root, currentTarget, differX, differY) {
  if (!currentTarget || currentTarget === document || currentTarget instanceof Document) {
    return false;
  } // root 为 drawer-content 设定了 overflow, 判断为 root 的 parent 时结束滚动；


  if (currentTarget === root.parentNode) {
    return true;
  }

  var isY = Math.max(Math.abs(differX), Math.abs(differY)) === Math.abs(differY);
  var isX = Math.max(Math.abs(differX), Math.abs(differY)) === Math.abs(differX);
  var scrollY = currentTarget.scrollHeight - currentTarget.clientHeight;
  var scrollX = currentTarget.scrollWidth - currentTarget.clientWidth;
  var style = document.defaultView.getComputedStyle(currentTarget);
  var overflowY = style.overflowY === 'auto' || style.overflowY === 'scroll';
  var overflowX = style.overflowX === 'auto' || style.overflowX === 'scroll';
  var y = scrollY && overflowY;
  var x = scrollX && overflowX;

  if (isY && (!y || y && (currentTarget.scrollTop >= scrollY && differY < 0 || currentTarget.scrollTop <= 0 && differY > 0)) || isX && (!x || x && (currentTarget.scrollLeft >= scrollX && scrollX < 0 || currentTarget.scrollLeft <= 0 && scrollX > 0))) {
    return getTouchParentScroll(root, currentTarget.parentNode, differX, differY);
  }

  return false;
};
// CONCATENATED MODULE: ../node_modules/rc-drawer/es/DrawerChild.js




















function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}








var currentDrawer = {};

var DrawerChild_DrawerChild =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DrawerChild, _React$Component);

  function DrawerChild(props) {
    var _this;

    _classCallCheck(this, DrawerChild);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DrawerChild).call(this, props));

    _this.domFocus = function () {
      if (_this.dom) {
        _this.dom.focus();
      }
    };

    _this.removeStartHandler = function (e) {
      if (e.touches.length > 1) {
        return;
      }

      _this.startPos = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };
    };

    _this.removeMoveHandler = function (e) {
      if (e.changedTouches.length > 1) {
        return;
      }

      var currentTarget = e.currentTarget;
      var differX = e.changedTouches[0].clientX - _this.startPos.x;
      var differY = e.changedTouches[0].clientY - _this.startPos.y;

      if (currentTarget === _this.maskDom || currentTarget === _this.handlerDom || currentTarget === _this.contentDom && getTouchParentScroll(currentTarget, e.target, differX, differY)) {
        e.preventDefault();
      }
    };

    _this.transitionEnd = function (e) {
      var dom = e.target;
      removeEventListener(dom, transitionEnd, _this.transitionEnd);
      dom.style.transition = '';
    };

    _this.onKeyDown = function (e) {
      if (e.keyCode === KeyCode["a" /* default */].ESC) {
        var onClose = _this.props.onClose;
        e.stopPropagation();

        if (onClose) {
          onClose(e);
        }
      }
    };

    _this.onWrapperTransitionEnd = function (e) {
      var _this$props = _this.props,
          open = _this$props.open,
          afterVisibleChange = _this$props.afterVisibleChange;

      if (e.target === _this.contentWrapper && e.propertyName.match(/transform$/)) {
        _this.dom.style.transition = '';

        if (!open && _this.getCurrentDrawerSome()) {
          document.body.style.overflowX = '';

          if (_this.maskDom) {
            _this.maskDom.style.left = '';
            _this.maskDom.style.width = '';
          }
        }

        if (afterVisibleChange) {
          afterVisibleChange(!!open);
        }
      }
    };

    _this.openLevelTransition = function () {
      var _this$props2 = _this.props,
          open = _this$props2.open,
          width = _this$props2.width,
          height = _this$props2.height;

      var _this$getHorizontalBo = _this.getHorizontalBoolAndPlacementName(),
          isHorizontal = _this$getHorizontalBo.isHorizontal,
          placementName = _this$getHorizontalBo.placementName;

      var contentValue = _this.contentDom ? _this.contentDom.getBoundingClientRect()[isHorizontal ? 'width' : 'height'] : 0;
      var value = (isHorizontal ? width : height) || contentValue;

      _this.setLevelAndScrolling(open, placementName, value);
    };

    _this.setLevelTransform = function (open, placementName, value, right) {
      var _this$props3 = _this.props,
          placement = _this$props3.placement,
          levelMove = _this$props3.levelMove,
          duration = _this$props3.duration,
          ease = _this$props3.ease,
          showMask = _this$props3.showMask; // router 切换时可能会导至页面失去滚动条，所以需要时时获取。

      _this.levelDom.forEach(function (dom) {
        dom.style.transition = "transform ".concat(duration, " ").concat(ease);
        addEventListener(dom, transitionEnd, _this.transitionEnd);
        var levelValue = open ? value : 0;

        if (levelMove) {
          var $levelMove = transformArguments(levelMove, {
            target: dom,
            open: open
          });
          levelValue = open ? $levelMove[0] : $levelMove[1] || 0;
        }

        var $value = typeof levelValue === 'number' ? "".concat(levelValue, "px") : levelValue;
        var placementPos = placement === 'left' || placement === 'top' ? $value : "-".concat($value);
        placementPos = showMask && placement === 'right' && right ? "calc(".concat(placementPos, " + ").concat(right, "px)") : placementPos;
        dom.style.transform = levelValue ? "".concat(placementName, "(").concat(placementPos, ")") : '';
      });
    };

    _this.setLevelAndScrolling = function (open, placementName, value) {
      var onChange = _this.props.onChange;

      if (!windowIsUndefined) {
        var right = document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth ? Object(getScrollBarSize["a" /* default */])(true) : 0;

        _this.setLevelTransform(open, placementName, value, right);

        _this.toggleScrollingToDrawerAndBody(right);
      }

      if (onChange) {
        onChange(open);
      }
    };

    _this.toggleScrollingToDrawerAndBody = function (right) {
      var _this$props4 = _this.props,
          getOpenCount = _this$props4.getOpenCount,
          getContainer = _this$props4.getContainer,
          showMask = _this$props4.showMask,
          open = _this$props4.open;
      var container = getContainer && getContainer();
      var openCount = getOpenCount && getOpenCount(); // 处理 body 滚动

      if (container && container.parentNode === document.body && showMask) {
        var eventArray = ['touchstart'];
        var domArray = [document.body, _this.maskDom, _this.handlerDom, _this.contentDom];

        if (open && document.body.style.overflow !== 'hidden') {
          if (right) {
            _this.addScrollingEffect(right);
          }

          if (openCount === 1) {
            document.body.style.overflow = 'hidden';
          }

          document.body.style.touchAction = 'none'; // 手机禁滚

          domArray.forEach(function (item, i) {
            if (!item) {
              return;
            }

            addEventListener(item, eventArray[i] || 'touchmove', i ? _this.removeMoveHandler : _this.removeStartHandler, _this.passive);
          });
        } else if (_this.getCurrentDrawerSome()) {
          // 没有弹框的状态下清除 overflow;
          if (!openCount) {
            document.body.style.overflow = '';
          }

          document.body.style.touchAction = '';

          if (right) {
            _this.remScrollingEffect(right);
          } // 恢复事件


          domArray.forEach(function (item, i) {
            if (!item) {
              return;
            }

            removeEventListener(item, eventArray[i] || 'touchmove', i ? _this.removeMoveHandler : _this.removeStartHandler, _this.passive);
          });
        }
      }
    };

    _this.addScrollingEffect = function (right) {
      var _this$props5 = _this.props,
          placement = _this$props5.placement,
          duration = _this$props5.duration,
          ease = _this$props5.ease,
          getOpenCount = _this$props5.getOpenCount;
      var openCount = getOpenCount && getOpenCount();

      if (openCount === 1) {
        Object(switchScrollingEffect["a" /* default */])();
      }

      var widthTransition = "width ".concat(duration, " ").concat(ease);
      var transformTransition = "transform ".concat(duration, " ").concat(ease);
      _this.dom.style.transition = 'none';

      switch (placement) {
        case 'right':
          _this.dom.style.transform = "translateX(-".concat(right, "px)");
          break;

        case 'top':
        case 'bottom':
          _this.dom.style.width = "calc(100% - ".concat(right, "px)");
          _this.dom.style.transform = 'translateZ(0)';
          break;

        default:
          break;
      }

      clearTimeout(_this.timeout);
      _this.timeout = setTimeout(function () {
        if (_this.dom) {
          _this.dom.style.transition = "".concat(transformTransition, ",").concat(widthTransition);
          _this.dom.style.width = '';
          _this.dom.style.transform = '';
        }
      });
    };

    _this.remScrollingEffect = function (right) {
      var _this$props6 = _this.props,
          placement = _this$props6.placement,
          duration = _this$props6.duration,
          ease = _this$props6.ease,
          getOpenCount = _this$props6.getOpenCount;
      var openCount = getOpenCount && getOpenCount();

      if (!openCount) {
        Object(switchScrollingEffect["a" /* default */])(true);
      }

      if (transitionStr) {
        document.body.style.overflowX = 'hidden';
      }

      _this.dom.style.transition = 'none';
      var heightTransition;
      var widthTransition = "width ".concat(duration, " ").concat(ease);
      var transformTransition = "transform ".concat(duration, " ").concat(ease);

      switch (placement) {
        case 'left':
          {
            _this.dom.style.width = '100%';
            widthTransition = "width 0s ".concat(ease, " ").concat(duration);
            break;
          }

        case 'right':
          {
            _this.dom.style.transform = "translateX(".concat(right, "px)");
            _this.dom.style.width = '100%';
            widthTransition = "width 0s ".concat(ease, " ").concat(duration);

            if (_this.maskDom) {
              _this.maskDom.style.left = "-".concat(right, "px");
              _this.maskDom.style.width = "calc(100% + ".concat(right, "px)");
            }

            break;
          }

        case 'top':
        case 'bottom':
          {
            _this.dom.style.width = "calc(100% + ".concat(right, "px)");
            _this.dom.style.height = '100%';
            _this.dom.style.transform = 'translateZ(0)';
            heightTransition = "height 0s ".concat(ease, " ").concat(duration);
            break;
          }

        default:
          break;
      }

      clearTimeout(_this.timeout);
      _this.timeout = setTimeout(function () {
        if (_this.dom) {
          _this.dom.style.transition = "".concat(transformTransition, ",").concat(heightTransition ? "".concat(heightTransition, ",") : '').concat(widthTransition);
          _this.dom.style.transform = '';
          _this.dom.style.width = '';
          _this.dom.style.height = '';
        }
      });
    };

    _this.getCurrentDrawerSome = function () {
      return !Object.keys(currentDrawer).some(function (key) {
        return currentDrawer[key];
      });
    };

    _this.getLevelDom = function (_ref) {
      var level = _ref.level,
          getContainer = _ref.getContainer;

      if (windowIsUndefined) {
        return;
      }

      var container = getContainer && getContainer();
      var parent = container ? container.parentNode : null;
      _this.levelDom = [];

      if (level === 'all') {
        var children = parent ? Array.prototype.slice.call(parent.children) : [];
        children.forEach(function (child) {
          if (child.nodeName !== 'SCRIPT' && child.nodeName !== 'STYLE' && child.nodeName !== 'LINK' && child !== container) {
            _this.levelDom.push(child);
          }
        });
      } else if (level) {
        dataToArray(level).forEach(function (key) {
          document.querySelectorAll(key).forEach(function (item) {
            _this.levelDom.push(item);
          });
        });
      }
    };

    _this.getHorizontalBoolAndPlacementName = function () {
      var placement = _this.props.placement;
      var isHorizontal = placement === 'left' || placement === 'right';
      var placementName = "translate".concat(isHorizontal ? 'X' : 'Y');
      return {
        isHorizontal: isHorizontal,
        placementName: placementName
      };
    };

    _this.state = {
      _self: _assertThisInitialized(_this)
    };
    return _this;
  }

  _createClass(DrawerChild, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!windowIsUndefined) {
        var passiveSupported = false;
        window.addEventListener('test', function () {}, Object.defineProperty({}, 'passive', {
          get: function get() {
            passiveSupported = true;
            return null;
          }
        }));
        this.passive = passiveSupported ? {
          passive: false
        } : false;
      }

      var open = this.props.open;
      this.drawerId = "drawer_id_".concat(Number((Date.now() + Math.random()).toString().replace('.', Math.round(Math.random() * 9).toString())).toString(16));
      this.getLevelDom(this.props);

      if (open) {
        currentDrawer[this.drawerId] = open; // 默认打开状态时推出 level;

        this.openLevelTransition();
        this.forceUpdate(function () {
          _this2.domFocus();
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var open = this.props.open;

      if (open !== prevProps.open) {
        if (open) {
          this.domFocus();
        }

        currentDrawer[this.drawerId] = !!open;
        this.openLevelTransition();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$props7 = this.props,
          getOpenCount = _this$props7.getOpenCount,
          open = _this$props7.open;
      var openCount = typeof getOpenCount === 'function' && getOpenCount();
      delete currentDrawer[this.drawerId];

      if (open) {
        this.setLevelTransform(false);
        document.body.style.touchAction = '';
      }

      if (!openCount) {
        document.body.style.overflow = '';
        Object(switchScrollingEffect["a" /* default */])(true);
      }
    } // tslint:disable-next-line:member-ordering

  }, {
    key: "render",
    value: function render() {
      var _classnames,
          _this3 = this;

      var _this$props8 = this.props,
          className = _this$props8.className,
          children = _this$props8.children,
          style = _this$props8.style,
          width = _this$props8.width,
          height = _this$props8.height,
          defaultOpen = _this$props8.defaultOpen,
          $open = _this$props8.open,
          prefixCls = _this$props8.prefixCls,
          placement = _this$props8.placement,
          level = _this$props8.level,
          levelMove = _this$props8.levelMove,
          ease = _this$props8.ease,
          duration = _this$props8.duration,
          getContainer = _this$props8.getContainer,
          handler = _this$props8.handler,
          onChange = _this$props8.onChange,
          afterVisibleChange = _this$props8.afterVisibleChange,
          showMask = _this$props8.showMask,
          maskClosable = _this$props8.maskClosable,
          maskStyle = _this$props8.maskStyle,
          onClose = _this$props8.onClose,
          onHandleClick = _this$props8.onHandleClick,
          keyboard = _this$props8.keyboard,
          getOpenCount = _this$props8.getOpenCount,
          props = _objectWithoutProperties(_this$props8, ["className", "children", "style", "width", "height", "defaultOpen", "open", "prefixCls", "placement", "level", "levelMove", "ease", "duration", "getContainer", "handler", "onChange", "afterVisibleChange", "showMask", "maskClosable", "maskStyle", "onClose", "onHandleClick", "keyboard", "getOpenCount"]); // 首次渲染都将是关闭状态。


      var open = this.dom ? $open : false;
      var wrapperClassName = classnames_default()(prefixCls, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-").concat(placement), true), _defineProperty(_classnames, "".concat(prefixCls, "-open"), open), _defineProperty(_classnames, className || '', !!className), _defineProperty(_classnames, 'no-mask', !showMask), _classnames));

      var _this$getHorizontalBo2 = this.getHorizontalBoolAndPlacementName(),
          placementName = _this$getHorizontalBo2.placementName; // 百分比与像素动画不同步，第一次打用后全用像素动画。
      // const defaultValue = !this.contentDom || !level ? '100%' : `${value}px`;


      var placementPos = placement === 'left' || placement === 'top' ? '-100%' : '100%';
      var transform = open ? '' : "".concat(placementName, "(").concat(placementPos, ")");
      var handlerChildren = handler && react["cloneElement"](handler, {
        onClick: function onClick(e) {
          if (handler.props.onClick) {
            handler.props.onClick();
          }

          if (onHandleClick) {
            onHandleClick(e);
          }
        },
        ref: function ref(c) {
          _this3.handlerDom = c;
        }
      });
      return react["createElement"]("div", Object.assign({}, props, {
        tabIndex: -1,
        className: wrapperClassName,
        style: style,
        ref: function ref(c) {
          _this3.dom = c;
        },
        onKeyDown: open && keyboard ? this.onKeyDown : undefined,
        onTransitionEnd: this.onWrapperTransitionEnd
      }), showMask && react["createElement"]("div", {
        className: "".concat(prefixCls, "-mask"),
        onClick: maskClosable ? onClose : undefined,
        style: maskStyle,
        ref: function ref(c) {
          _this3.maskDom = c;
        }
      }), react["createElement"]("div", {
        className: "".concat(prefixCls, "-content-wrapper"),
        style: {
          transform: transform,
          msTransform: transform,
          width: isNumeric(width) ? "".concat(width, "px") : width,
          height: isNumeric(height) ? "".concat(height, "px") : height
        },
        ref: function ref(c) {
          _this3.contentWrapper = c;
        }
      }, react["createElement"]("div", {
        className: "".concat(prefixCls, "-content"),
        ref: function ref(c) {
          _this3.contentDom = c;
        },
        onTouchStart: open && showMask ? this.removeStartHandler : undefined,
        onTouchMove: open && showMask ? this.removeMoveHandler : undefined
      }, children), handlerChildren));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, _ref2) {
      var prevProps = _ref2.prevProps,
          _self = _ref2._self;
      var nextState = {
        prevProps: props
      };

      if (prevProps !== undefined) {
        var placement = props.placement,
            level = props.level;

        if (placement !== prevProps.placement) {
          // test 的 bug, 有动画过场，删除 dom
          _self.contentDom = null;
        }

        if (level !== prevProps.level) {
          _self.getLevelDom(props);
        }
      }

      return nextState;
    }
  }]);

  return DrawerChild;
}(react["Component"]);

/* harmony default export */ var es_DrawerChild = (Object(react_lifecycles_compat["polyfill"])(DrawerChild_DrawerChild));
// CONCATENATED MODULE: ../node_modules/rc-drawer/es/DrawerWrapper.js












function DrawerWrapper_typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    DrawerWrapper_typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    DrawerWrapper_typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return DrawerWrapper_typeof(obj);
}

function DrawerWrapper_objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = DrawerWrapper_objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function DrawerWrapper_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function DrawerWrapper_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function DrawerWrapper_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function DrawerWrapper_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) DrawerWrapper_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) DrawerWrapper_defineProperties(Constructor, staticProps);
  return Constructor;
}

function DrawerWrapper_possibleConstructorReturn(self, call) {
  if (call && (DrawerWrapper_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return DrawerWrapper_assertThisInitialized(self);
}

function DrawerWrapper_assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function DrawerWrapper_getPrototypeOf(o) {
  DrawerWrapper_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return DrawerWrapper_getPrototypeOf(o);
}

function DrawerWrapper_inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) DrawerWrapper_setPrototypeOf(subClass, superClass);
}

function DrawerWrapper_setPrototypeOf(o, p) {
  DrawerWrapper_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return DrawerWrapper_setPrototypeOf(o, p);
}






var DrawerWrapper_DrawerWrapper =
/*#__PURE__*/
function (_React$Component) {
  DrawerWrapper_inherits(DrawerWrapper, _React$Component);

  function DrawerWrapper(props) {
    var _this;

    DrawerWrapper_classCallCheck(this, DrawerWrapper);

    _this = DrawerWrapper_possibleConstructorReturn(this, DrawerWrapper_getPrototypeOf(DrawerWrapper).call(this, props));

    _this.onHandleClick = function (e) {
      var _this$props = _this.props,
          onHandleClick = _this$props.onHandleClick,
          $open = _this$props.open;

      if (onHandleClick) {
        onHandleClick(e);
      }

      if (typeof $open === 'undefined') {
        var _open = _this.state.open;

        _this.setState({
          open: !_open
        });
      }
    };

    _this.onClose = function (e) {
      var _this$props2 = _this.props,
          onClose = _this$props2.onClose,
          open = _this$props2.open;

      if (onClose) {
        onClose(e);
      }

      if (typeof open === 'undefined') {
        _this.setState({
          open: false
        });
      }
    };

    var open = typeof props.open !== 'undefined' ? props.open : !!props.defaultOpen;
    _this.state = {
      open: open
    };

    if ('onMaskClick' in props) {
      console.warn('`onMaskClick` are removed, please use `onClose` instead.');
    }

    return _this;
  }

  DrawerWrapper_createClass(DrawerWrapper, [{
    key: "render",
    // tslint:disable-next-line:member-ordering
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          defaultOpen = _this$props3.defaultOpen,
          getContainer = _this$props3.getContainer,
          wrapperClassName = _this$props3.wrapperClassName,
          forceRender = _this$props3.forceRender,
          handler = _this$props3.handler,
          props = DrawerWrapper_objectWithoutProperties(_this$props3, ["defaultOpen", "getContainer", "wrapperClassName", "forceRender", "handler"]);

      var open = this.state.open; // 渲染在当前 dom 里；

      if (!getContainer) {
        return react["createElement"]("div", {
          className: wrapperClassName,
          ref: function ref(c) {
            _this2.dom = c;
          }
        }, react["createElement"](es_DrawerChild, Object.assign({}, props, {
          open: open,
          handler: handler,
          getContainer: function getContainer() {
            return _this2.dom;
          },
          onClose: this.onClose,
          onHandleClick: this.onHandleClick
        })));
      } // 如果有 handler 为内置强制渲染；


      var $forceRender = !!handler || forceRender;
      return react["createElement"](PortalWrapper["a" /* default */], {
        visible: open,
        forceRender: $forceRender,
        getContainer: getContainer,
        wrapperClassName: wrapperClassName
      }, function (_ref) {
        var visible = _ref.visible,
            afterClose = _ref.afterClose,
            rest = DrawerWrapper_objectWithoutProperties(_ref, ["visible", "afterClose"]);

        return (// react 15，componentWillUnmount 时 Portal 返回 afterClose, visible.
          react["createElement"](es_DrawerChild, Object.assign({}, props, rest, {
            open: visible !== undefined ? visible : open,
            afterVisibleChange: afterClose !== undefined ? afterClose : props.afterVisibleChange,
            handler: handler,
            onClose: _this2.onClose,
            onHandleClick: _this2.onHandleClick
          }))
        );
      });
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, _ref2) {
      var prevProps = _ref2.prevProps;
      var newState = {
        prevProps: props
      };

      if (typeof prevProps !== 'undefined' && props.open !== prevProps.open) {
        newState.open = props.open;
      }

      return newState;
    }
  }]);

  return DrawerWrapper;
}(react["Component"]);

DrawerWrapper_DrawerWrapper.defaultProps = {
  prefixCls: 'drawer',
  placement: 'left',
  getContainer: 'body',
  defaultOpen: false,
  level: 'all',
  duration: '.3s',
  ease: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
  onChange: function onChange() {},
  afterVisibleChange: function afterVisibleChange() {},
  handler: react["createElement"]("div", {
    className: "drawer-handle"
  }, react["createElement"]("i", {
    className: "drawer-handle-icon"
  })),
  showMask: true,
  maskClosable: true,
  maskStyle: {},
  wrapperClassName: '',
  className: '',
  keyboard: true,
  forceRender: false
};
/* harmony default export */ var es_DrawerWrapper = (Object(react_lifecycles_compat["polyfill"])(DrawerWrapper_DrawerWrapper));
// CONCATENATED MODULE: ../node_modules/rc-drawer/es/index.js
// export this package's api

/* harmony default export */ var es = __webpack_exports__["a"] = (es_DrawerWrapper);

/***/ }),

/***/ "cog4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("d3/y");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = findDOMNode;

var _reactDom = _interopRequireDefault(__webpack_require__("xARA"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
/**
 * Return if a node is a DOM node. Else will return by `findDOMNode`
 */


function findDOMNode(node) {
  if (node instanceof HTMLElement) {
    return node;
  }

  return _reactDom["default"].findDOMNode(node);
}

/***/ }),

/***/ "cuKu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("d3/y");

Object.defineProperty(exports, "__esModule", {
  value: true
});

function supportRef(node) {
  // Function component
  if (node.type && node.type.prototype && !node.type.prototype.render) {
    return false;
  }

  return true;
}

exports.supportRef = supportRef;

/***/ }),

/***/ "dZF8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tvu5");
/* harmony import */ var _Sider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("znB+");


_layout__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"].Sider = _Sider__WEBPACK_IMPORTED_MODULE_1__[/* default */ "b"];
/* harmony default export */ __webpack_exports__["a"] = (_layout__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"]);

/***/ }),

/***/ "f17A":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("e2Kn");

__webpack_require__("J8hF");

__webpack_require__("+jjx");

__webpack_require__("ABKx");

__webpack_require__("5hJT");

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
};

var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;

function getClientPosition(elem) {
  var box = undefined;
  var x = undefined;
  var y = undefined;
  var doc = elem.ownerDocument;
  var body = doc.body;
  var docElem = doc && doc.documentElement; // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式

  box = elem.getBoundingClientRect(); // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin

  x = box.left;
  y = box.top; // In IE, most of the time, 2 extra pixels are added to the top and left
  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
  // IE6 standards mode, this border can be overridden by setting the
  // document element's border to zero -- thus, we cannot rely on the
  // offset always being 2 pixels.
  // In quirks mode, the offset can be determined by querying the body's
  // clientLeft/clientTop, but in standards mode, it is found by querying
  // the document element's clientLeft/clientTop.  Since we already called
  // getClientBoundingRect we have already forced a reflow, so it is not
  // too expensive just to query them all.
  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
  // 窗口边框标准是设 documentElement ,quirks 时设置 body
  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
  // 标准 ie 下 docElem.clientTop 就是 border-top
  // ie7 html 即窗口边框改变不了。永远为 2
  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0

  x -= docElem.clientLeft || body.clientLeft || 0;
  y -= docElem.clientTop || body.clientTop || 0;
  return {
    left: x,
    top: y
  };
}

function getScroll(w, top) {
  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
  var method = 'scroll' + (top ? 'Top' : 'Left');

  if (typeof ret !== 'number') {
    var d = w.document; // ie6,7,8 standard mode

    ret = d.documentElement[method];

    if (typeof ret !== 'number') {
      // quirks mode
      ret = d.body[method];
    }
  }

  return ret;
}

function getScrollLeft(w) {
  return getScroll(w);
}

function getScrollTop(w) {
  return getScroll(w, true);
}

function getOffset(el) {
  var pos = getClientPosition(el);
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScrollLeft(w);
  pos.top += getScrollTop(w);
  return pos;
}

function _getComputedStyle(elem, name, computedStyle_) {
  var val = '';
  var d = elem.ownerDocument;
  var computedStyle = computedStyle_ || d.defaultView.getComputedStyle(elem, null); // https://github.com/kissyteam/kissy/issues/61

  if (computedStyle) {
    val = computedStyle.getPropertyValue(name) || computedStyle[name];
  }

  return val;
}

var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');

var RE_POS = /^(top|right|bottom|left)$/;
var CURRENT_STYLE = 'currentStyle';
var RUNTIME_STYLE = 'runtimeStyle';
var LEFT = 'left';
var PX = 'px';

function _getComputedStyleIE(elem, name) {
  // currentStyle maybe null
  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name]; // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
  // 在 ie 下不对，需要直接用 offset 方式
  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了
  // From the awesome hack by Dean Edwards
  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
  // If we're not dealing with a regular pixel number
  // but a number that has a weird ending, we need to convert it to pixels
  // exclude left right for relativity

  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
    // Remember the original values
    var style = elem.style;
    var left = style[LEFT];
    var rsLeft = elem[RUNTIME_STYLE][LEFT]; // prevent flashing of content

    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT]; // Put in the new values to get a computed value out

    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
    ret = style.pixelLeft + PX; // Revert the changed values

    style[LEFT] = left;
    elem[RUNTIME_STYLE][LEFT] = rsLeft;
  }

  return ret === '' ? 'auto' : ret;
}

var getComputedStyleX = undefined;

if (typeof window !== 'undefined') {
  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
}

function each(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}

function isBorderBoxFn(elem) {
  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
}

var BOX_MODELS = ['margin', 'border', 'padding'];
var CONTENT_INDEX = -1;
var PADDING_INDEX = 2;
var BORDER_INDEX = 1;
var MARGIN_INDEX = 0;

function swap(elem, options, callback) {
  var old = {};
  var style = elem.style;
  var name = undefined; // Remember the old values, and insert the new ones

  for (name in options) {
    if (options.hasOwnProperty(name)) {
      old[name] = style[name];
      style[name] = options[name];
    }
  }

  callback.call(elem); // Revert the old values

  for (name in options) {
    if (options.hasOwnProperty(name)) {
      style[name] = old[name];
    }
  }
}

function getPBMWidth(elem, props, which) {
  var value = 0;
  var prop = undefined;
  var j = undefined;
  var i = undefined;

  for (j = 0; j < props.length; j++) {
    prop = props[j];

    if (prop) {
      for (i = 0; i < which.length; i++) {
        var cssProp = undefined;

        if (prop === 'border') {
          cssProp = prop + which[i] + 'Width';
        } else {
          cssProp = prop + which[i];
        }

        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
      }
    }
  }

  return value;
}
/**
 * A crude way of determining if an object is a window
 * @member util
 */


function isWindow(obj) {
  // must use == for ie8

  /* eslint eqeqeq:0 */
  return obj != null && obj == obj.window;
}

var domUtils = {};
each(['Width', 'Height'], function (name) {
  domUtils['doc' + name] = function (refWin) {
    var d = refWin.document;
    return Math.max( // firefox chrome documentElement.scrollHeight< body.scrollHeight
    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
    d.documentElement['scroll' + name], // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
    d.body['scroll' + name], domUtils['viewport' + name](d));
  };

  domUtils['viewport' + name] = function (win) {
    // pc browser includes scrollbar in window.innerWidth
    var prop = 'client' + name;
    var doc = win.document;
    var body = doc.body;
    var documentElement = doc.documentElement;
    var documentElementProp = documentElement[prop]; // 标准模式取 documentElement
    // backcompat 取 body

    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
  };
});
/*
 得到元素的大小信息
 @param elem
 @param name
 @param {String} [extra]  'padding' : (css width) + padding
 'border' : (css width) + padding + border
 'margin' : (css width) + padding + border + margin
 */

function getWH(elem, name, extra) {
  if (isWindow(elem)) {
    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
  } else if (elem.nodeType === 9) {
    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
  }

  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
  var borderBoxValue = name === 'width' ? elem.offsetWidth : elem.offsetHeight;
  var computedStyle = getComputedStyleX(elem);
  var isBorderBox = isBorderBoxFn(elem, computedStyle);
  var cssBoxValue = 0;

  if (borderBoxValue == null || borderBoxValue <= 0) {
    borderBoxValue = undefined; // Fall back to computed then un computed css if necessary

    cssBoxValue = getComputedStyleX(elem, name);

    if (cssBoxValue == null || Number(cssBoxValue) < 0) {
      cssBoxValue = elem.style[name] || 0;
    } // Normalize '', auto, and prepare for extra


    cssBoxValue = parseFloat(cssBoxValue) || 0;
  }

  if (extra === undefined) {
    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
  }

  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
  var val = borderBoxValue || cssBoxValue;

  if (extra === CONTENT_INDEX) {
    if (borderBoxValueOrIsBorderBox) {
      return val - getPBMWidth(elem, ['border', 'padding'], which, computedStyle);
    }

    return cssBoxValue;
  }

  if (borderBoxValueOrIsBorderBox) {
    var padding = extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which, computedStyle) : getPBMWidth(elem, ['margin'], which, computedStyle);
    return val + (extra === BORDER_INDEX ? 0 : padding);
  }

  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle);
}

var cssShow = {
  position: 'absolute',
  visibility: 'hidden',
  display: 'block'
}; // fix #119 : https://github.com/kissyteam/kissy/issues/119

function getWHIgnoreDisplay(elem) {
  var val = undefined;
  var args = arguments; // in case elem is window
  // elem.offsetWidth === undefined

  if (elem.offsetWidth !== 0) {
    val = getWH.apply(undefined, args);
  } else {
    swap(elem, cssShow, function () {
      val = getWH.apply(undefined, args);
    });
  }

  return val;
}

function css(el, name, v) {
  var value = v;

  if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
    for (var i in name) {
      if (name.hasOwnProperty(i)) {
        css(el, i, name[i]);
      }
    }

    return undefined;
  }

  if (typeof value !== 'undefined') {
    if (typeof value === 'number') {
      value += 'px';
    }

    el.style[name] = value;
    return undefined;
  }

  return getComputedStyleX(el, name);
}

each(['width', 'height'], function (name) {
  var first = name.charAt(0).toUpperCase() + name.slice(1);

  domUtils['outer' + first] = function (el, includeMargin) {
    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
  };

  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];

  domUtils[name] = function (elem, val) {
    if (val !== undefined) {
      if (elem) {
        var computedStyle = getComputedStyleX(elem);
        var isBorderBox = isBorderBoxFn(elem);

        if (isBorderBox) {
          val += getPBMWidth(elem, ['padding', 'border'], which, computedStyle);
        }

        return css(elem, name, val);
      }

      return undefined;
    }

    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
  };
}); // 设置 elem 相对 elem.ownerDocument 的坐标

function setOffset(elem, offset) {
  // set position first, in-case top/left are set even on static elem
  if (css(elem, 'position') === 'static') {
    elem.style.position = 'relative';
  }

  var old = getOffset(elem);
  var ret = {};
  var current = undefined;
  var key = undefined;

  for (key in offset) {
    if (offset.hasOwnProperty(key)) {
      current = parseFloat(css(elem, key)) || 0;
      ret[key] = current + offset[key] - old[key];
    }
  }

  css(elem, ret);
}

module.exports = _extends({
  getWindow: function getWindow(node) {
    var doc = node.ownerDocument || node;
    return doc.defaultView || doc.parentWindow;
  },
  offset: function offset(el, value) {
    if (typeof value !== 'undefined') {
      setOffset(el, value);
    } else {
      return getOffset(el);
    }
  },
  isWindow: isWindow,
  each: each,
  css: css,
  clone: function clone(obj) {
    var ret = {};

    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        ret[i] = obj[i];
      }
    }

    var overflow = obj.overflow;

    if (overflow) {
      for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
          ret.overflow[i] = obj.overflow[i];
        }
      }
    }

    return ret;
  },
  scrollLeft: function scrollLeft(w, v) {
    if (isWindow(w)) {
      if (v === undefined) {
        return getScrollLeft(w);
      }

      window.scrollTo(v, getScrollTop(w));
    } else {
      if (v === undefined) {
        return w.scrollLeft;
      }

      w.scrollLeft = v;
    }
  },
  scrollTop: function scrollTop(w, v) {
    if (isWindow(w)) {
      if (v === undefined) {
        return getScrollTop(w);
      }

      window.scrollTo(getScrollLeft(w), v);
    } else {
      if (v === undefined) {
        return w.scrollTop;
      }

      w.scrollTop = v;
    }
  },
  viewportWidth: 0,
  viewportHeight: 0
}, domUtils);

/***/ }),

/***/ "k81u":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "mPTt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.date.now.js
var es6_date_now = __webpack_require__("7t+O");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.index-of.js
var es6_array_index_of = __webpack_require__("V7cS");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.for-each.js
var es6_array_for_each = __webpack_require__("7lGJ");

// EXTERNAL MODULE: ../node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("Kz1y");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ../node_modules/babel-runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("Zv/C");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ../node_modules/babel-runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("Dkg+");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ../node_modules/babel-runtime/helpers/inherits.js
var inherits = __webpack_require__("Gjrs");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__("mXGw");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__("W0B4");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ../node_modules/react-dom/index.js
var react_dom = __webpack_require__("xARA");
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./.cache/react-lifecycles-compat.js
var react_lifecycles_compat = __webpack_require__("94VI");

// EXTERNAL MODULE: ../node_modules/rc-util/es/Dom/contains.js
var contains = __webpack_require__("p82W");

// EXTERNAL MODULE: ../node_modules/rc-util/es/Dom/addEventListener.js
var addEventListener = __webpack_require__("4Alm");

// EXTERNAL MODULE: ../node_modules/rc-util/es/ContainerRender.js
var ContainerRender = __webpack_require__("hdnC");

// EXTERNAL MODULE: ../node_modules/rc-util/es/Portal.js
var Portal = __webpack_require__("LKC9");

// EXTERNAL MODULE: ../node_modules/classnames/index.js
var classnames = __webpack_require__("8Jek");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ../node_modules/rc-trigger/es/utils.js


function isPointsEq(a1, a2, isAlignPoint) {
  if (isAlignPoint) {
    return a1[0] === a2[0];
  }

  return a1[0] === a2[0] && a1[1] === a2[1];
}

function getAlignFromPlacement(builtinPlacements, placementStr, align) {
  var baseAlign = builtinPlacements[placementStr] || {};
  return extends_default()({}, baseAlign, align);
}
function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
  var points = align.points;

  for (var placement in builtinPlacements) {
    if (builtinPlacements.hasOwnProperty(placement)) {
      if (isPointsEq(builtinPlacements[placement].points, points, isAlignPoint)) {
        return prefixCls + '-placement-' + placement;
      }
    }
  }

  return '';
}
function saveRef(name, component) {
  this[name] = component;
}
// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.function.bind.js
var es6_function_bind = __webpack_require__("o7PZ");

// EXTERNAL MODULE: ../node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("W1QL");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("K/PF");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__("t91x");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("75LO");

// EXTERNAL MODULE: ../node_modules/babel-runtime/helpers/createClass.js
var createClass = __webpack_require__("2lBV");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("e2Kn");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.regexp.constructor.js
var es6_regexp_constructor = __webpack_require__("J8hF");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.map.js
var es6_array_map = __webpack_require__("yIlq");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__("9ovy");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("Z8gF");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("asZ9");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.object.define-properties.js
var es6_object_define_properties = __webpack_require__("6/FK");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es7.object.get-own-property-descriptors.js
var es7_object_get_own_property_descriptors = __webpack_require__("2Tod");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.filter.js
var es6_array_filter = __webpack_require__("9p7t");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.object.define-property.js
var es6_object_define_property = __webpack_require__("d3/y");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__("+jjx");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__("ABKx");

// CONCATENATED MODULE: ../node_modules/dom-align/dist-web/index.js



















function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var vendorPrefix;
var jsCssMap = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  // IE did it wrong again ...
  ms: '-ms-',
  O: '-o-'
};

function getVendorPrefix() {
  if (vendorPrefix !== undefined) {
    return vendorPrefix;
  }

  vendorPrefix = '';
  var style = document.createElement('p').style;
  var testProp = 'Transform';

  for (var key in jsCssMap) {
    if (key + testProp in style) {
      vendorPrefix = key;
    }
  }

  return vendorPrefix;
}

function getTransitionName() {
  return getVendorPrefix() ? "".concat(getVendorPrefix(), "TransitionProperty") : 'transitionProperty';
}

function getTransformName() {
  return getVendorPrefix() ? "".concat(getVendorPrefix(), "Transform") : 'transform';
}

function setTransitionProperty(node, value) {
  var name = getTransitionName();

  if (name) {
    node.style[name] = value;

    if (name !== 'transitionProperty') {
      node.style.transitionProperty = value;
    }
  }
}

function setTransform(node, value) {
  var name = getTransformName();

  if (name) {
    node.style[name] = value;

    if (name !== 'transform') {
      node.style.transform = value;
    }
  }
}

function getTransitionProperty(node) {
  return node.style.transitionProperty || node.style[getTransitionName()];
}

function getTransformXY(node) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());

  if (transform && transform !== 'none') {
    var matrix = transform.replace(/[^0-9\-.,]/g, '').split(',');
    return {
      x: parseFloat(matrix[12] || matrix[4], 0),
      y: parseFloat(matrix[13] || matrix[5], 0)
    };
  }

  return {
    x: 0,
    y: 0
  };
}

var matrix2d = /matrix\((.*)\)/;
var matrix3d = /matrix3d\((.*)\)/;

function setTransformXY(node, xy) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());

  if (transform && transform !== 'none') {
    var arr;
    var match2d = transform.match(matrix2d);

    if (match2d) {
      match2d = match2d[1];
      arr = match2d.split(',').map(function (item) {
        return parseFloat(item, 10);
      });
      arr[4] = xy.x;
      arr[5] = xy.y;
      setTransform(node, "matrix(".concat(arr.join(','), ")"));
    } else {
      var match3d = transform.match(matrix3d)[1];
      arr = match3d.split(',').map(function (item) {
        return parseFloat(item, 10);
      });
      arr[12] = xy.x;
      arr[13] = xy.y;
      setTransform(node, "matrix3d(".concat(arr.join(','), ")"));
    }
  } else {
    setTransform(node, "translateX(".concat(xy.x, "px) translateY(").concat(xy.y, "px) translateZ(0)"));
  }
}

var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
var getComputedStyleX; // https://stackoverflow.com/a/3485654/3040605

function forceRelayout(elem) {
  var originalStyle = elem.style.display;
  elem.style.display = 'none';
  elem.offsetHeight; // eslint-disable-line

  elem.style.display = originalStyle;
}

function css(el, name, v) {
  var value = v;

  if (_typeof(name) === 'object') {
    for (var i in name) {
      if (name.hasOwnProperty(i)) {
        css(el, i, name[i]);
      }
    }

    return undefined;
  }

  if (typeof value !== 'undefined') {
    if (typeof value === 'number') {
      value = "".concat(value, "px");
    }

    el.style[name] = value;
    return undefined;
  }

  return getComputedStyleX(el, name);
}

function getClientPosition(elem) {
  var box;
  var x;
  var y;
  var doc = elem.ownerDocument;
  var body = doc.body;
  var docElem = doc && doc.documentElement; // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式

  box = elem.getBoundingClientRect(); // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin

  x = box.left;
  y = box.top; // In IE, most of the time, 2 extra pixels are added to the top and left
  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
  // IE6 standards mode, this border can be overridden by setting the
  // document element's border to zero -- thus, we cannot rely on the
  // offset always being 2 pixels.
  // In quirks mode, the offset can be determined by querying the body's
  // clientLeft/clientTop, but in standards mode, it is found by querying
  // the document element's clientLeft/clientTop.  Since we already called
  // getClientBoundingRect we have already forced a reflow, so it is not
  // too expensive just to query them all.
  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
  // 窗口边框标准是设 documentElement ,quirks 时设置 body
  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
  // 标准 ie 下 docElem.clientTop 就是 border-top
  // ie7 html 即窗口边框改变不了。永远为 2
  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0

  x -= docElem.clientLeft || body.clientLeft || 0;
  y -= docElem.clientTop || body.clientTop || 0;
  return {
    left: x,
    top: y
  };
}

function getScroll(w, top) {
  var ret = w["page".concat(top ? 'Y' : 'X', "Offset")];
  var method = "scroll".concat(top ? 'Top' : 'Left');

  if (typeof ret !== 'number') {
    var d = w.document; // ie6,7,8 standard mode

    ret = d.documentElement[method];

    if (typeof ret !== 'number') {
      // quirks mode
      ret = d.body[method];
    }
  }

  return ret;
}

function getScrollLeft(w) {
  return getScroll(w);
}

function getScrollTop(w) {
  return getScroll(w, true);
}

function getOffset(el) {
  var pos = getClientPosition(el);
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScrollLeft(w);
  pos.top += getScrollTop(w);
  return pos;
}
/**
 * A crude way of determining if an object is a window
 * @member util
 */


function isWindow(obj) {
  // must use == for ie8

  /* eslint eqeqeq:0 */
  return obj !== null && obj !== undefined && obj == obj.window;
}

function getDocument(node) {
  if (isWindow(node)) {
    return node.document;
  }

  if (node.nodeType === 9) {
    return node;
  }

  return node.ownerDocument;
}

function _getComputedStyle(elem, name, cs) {
  var computedStyle = cs;
  var val = '';
  var d = getDocument(elem);
  computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null); // https://github.com/kissyteam/kissy/issues/61

  if (computedStyle) {
    val = computedStyle.getPropertyValue(name) || computedStyle[name];
  }

  return val;
}

var _RE_NUM_NO_PX = new RegExp("^(".concat(RE_NUM, ")(?!px)[a-z%]+$"), 'i');

var RE_POS = /^(top|right|bottom|left)$/;
var CURRENT_STYLE = 'currentStyle';
var RUNTIME_STYLE = 'runtimeStyle';
var LEFT = 'left';
var PX = 'px';

function _getComputedStyleIE(elem, name) {
  // currentStyle maybe null
  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name]; // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
  // 在 ie 下不对，需要直接用 offset 方式
  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了
  // From the awesome hack by Dean Edwards
  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
  // If we're not dealing with a regular pixel number
  // but a number that has a weird ending, we need to convert it to pixels
  // exclude left right for relativity

  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
    // Remember the original values
    var style = elem.style;
    var left = style[LEFT];
    var rsLeft = elem[RUNTIME_STYLE][LEFT]; // prevent flashing of content

    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT]; // Put in the new values to get a computed value out

    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
    ret = style.pixelLeft + PX; // Revert the changed values

    style[LEFT] = left;
    elem[RUNTIME_STYLE][LEFT] = rsLeft;
  }

  return ret === '' ? 'auto' : ret;
}

if (typeof window !== 'undefined') {
  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
}

function getOffsetDirection(dir, option) {
  if (dir === 'left') {
    return option.useCssRight ? 'right' : dir;
  }

  return option.useCssBottom ? 'bottom' : dir;
}

function oppositeOffsetDirection(dir) {
  if (dir === 'left') {
    return 'right';
  } else if (dir === 'right') {
    return 'left';
  } else if (dir === 'top') {
    return 'bottom';
  } else if (dir === 'bottom') {
    return 'top';
  }
} // 设置 elem 相对 elem.ownerDocument 的坐标


function setLeftTop(elem, offset, option) {
  // set position first, in-case top/left are set even on static elem
  if (css(elem, 'position') === 'static') {
    elem.style.position = 'relative';
  }

  var presetH = -999;
  var presetV = -999;
  var horizontalProperty = getOffsetDirection('left', option);
  var verticalProperty = getOffsetDirection('top', option);
  var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
  var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);

  if (horizontalProperty !== 'left') {
    presetH = 999;
  }

  if (verticalProperty !== 'top') {
    presetV = 999;
  }

  var originalTransition = '';
  var originalOffset = getOffset(elem);

  if ('left' in offset || 'top' in offset) {
    originalTransition = getTransitionProperty(elem) || '';
    setTransitionProperty(elem, 'none');
  }

  if ('left' in offset) {
    elem.style[oppositeHorizontalProperty] = '';
    elem.style[horizontalProperty] = "".concat(presetH, "px");
  }

  if ('top' in offset) {
    elem.style[oppositeVerticalProperty] = '';
    elem.style[verticalProperty] = "".concat(presetV, "px");
  } // force relayout


  forceRelayout(elem);
  var old = getOffset(elem);
  var originalStyle = {};

  for (var key in offset) {
    if (offset.hasOwnProperty(key)) {
      var dir = getOffsetDirection(key, option);
      var preset = key === 'left' ? presetH : presetV;
      var off = originalOffset[key] - old[key];

      if (dir === key) {
        originalStyle[dir] = preset + off;
      } else {
        originalStyle[dir] = preset - off;
      }
    }
  }

  css(elem, originalStyle); // force relayout

  forceRelayout(elem);

  if ('left' in offset || 'top' in offset) {
    setTransitionProperty(elem, originalTransition);
  }

  var ret = {};

  for (var _key in offset) {
    if (offset.hasOwnProperty(_key)) {
      var _dir = getOffsetDirection(_key, option);

      var _off = offset[_key] - originalOffset[_key];

      if (_key === _dir) {
        ret[_dir] = originalStyle[_dir] + _off;
      } else {
        ret[_dir] = originalStyle[_dir] - _off;
      }
    }
  }

  css(elem, ret);
}

function setTransform$1(elem, offset) {
  var originalOffset = getOffset(elem);
  var originalXY = getTransformXY(elem);
  var resultXY = {
    x: originalXY.x,
    y: originalXY.y
  };

  if ('left' in offset) {
    resultXY.x = originalXY.x + offset.left - originalOffset.left;
  }

  if ('top' in offset) {
    resultXY.y = originalXY.y + offset.top - originalOffset.top;
  }

  setTransformXY(elem, resultXY);
}

function setOffset(elem, offset, option) {
  if (option.ignoreShake) {
    var oriOffset = getOffset(elem);
    var oLeft = oriOffset.left.toFixed(0);
    var oTop = oriOffset.top.toFixed(0);
    var tLeft = offset.left.toFixed(0);
    var tTop = offset.top.toFixed(0);

    if (oLeft === tLeft && oTop === tTop) {
      return;
    }
  }

  if (option.useCssRight || option.useCssBottom) {
    setLeftTop(elem, offset, option);
  } else if (option.useCssTransform && getTransformName() in document.body.style) {
    setTransform$1(elem, offset);
  } else {
    setLeftTop(elem, offset, option);
  }
}

function each(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}

function isBorderBoxFn(elem) {
  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
}

var BOX_MODELS = ['margin', 'border', 'padding'];
var CONTENT_INDEX = -1;
var PADDING_INDEX = 2;
var BORDER_INDEX = 1;
var MARGIN_INDEX = 0;

function swap(elem, options, callback) {
  var old = {};
  var style = elem.style;
  var name; // Remember the old values, and insert the new ones

  for (name in options) {
    if (options.hasOwnProperty(name)) {
      old[name] = style[name];
      style[name] = options[name];
    }
  }

  callback.call(elem); // Revert the old values

  for (name in options) {
    if (options.hasOwnProperty(name)) {
      style[name] = old[name];
    }
  }
}

function getPBMWidth(elem, props, which) {
  var value = 0;
  var prop;
  var j;
  var i;

  for (j = 0; j < props.length; j++) {
    prop = props[j];

    if (prop) {
      for (i = 0; i < which.length; i++) {
        var cssProp = void 0;

        if (prop === 'border') {
          cssProp = "".concat(prop).concat(which[i], "Width");
        } else {
          cssProp = prop + which[i];
        }

        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
      }
    }
  }

  return value;
}

var domUtils = {
  getParent: function getParent(element) {
    var parent = element;

    do {
      if (parent.nodeType === 11 && parent.host) {
        parent = parent.host;
      } else {
        parent = parent.parentNode;
      }
    } while (parent && parent.nodeType !== 1 && parent.nodeType !== 9);

    return parent;
  }
};
each(['Width', 'Height'], function (name) {
  domUtils["doc".concat(name)] = function (refWin) {
    var d = refWin.document;
    return Math.max( // firefox chrome documentElement.scrollHeight< body.scrollHeight
    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
    d.documentElement["scroll".concat(name)], // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
    d.body["scroll".concat(name)], domUtils["viewport".concat(name)](d));
  };

  domUtils["viewport".concat(name)] = function (win) {
    // pc browser includes scrollbar in window.innerWidth
    var prop = "client".concat(name);
    var doc = win.document;
    var body = doc.body;
    var documentElement = doc.documentElement;
    var documentElementProp = documentElement[prop]; // 标准模式取 documentElement
    // backcompat 取 body

    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
  };
});
/*
 得到元素的大小信息
 @param elem
 @param name
 @param {String} [extra]  'padding' : (css width) + padding
 'border' : (css width) + padding + border
 'margin' : (css width) + padding + border + margin
 */

function getWH(elem, name, ex) {
  var extra = ex;

  if (isWindow(elem)) {
    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
  } else if (elem.nodeType === 9) {
    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
  }

  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
  var borderBoxValue = name === 'width' ? elem.getBoundingClientRect().width : elem.getBoundingClientRect().height;
  var computedStyle = getComputedStyleX(elem);
  var isBorderBox = isBorderBoxFn(elem);
  var cssBoxValue = 0;

  if (borderBoxValue === null || borderBoxValue === undefined || borderBoxValue <= 0) {
    borderBoxValue = undefined; // Fall back to computed then un computed css if necessary

    cssBoxValue = getComputedStyleX(elem, name);

    if (cssBoxValue === null || cssBoxValue === undefined || Number(cssBoxValue) < 0) {
      cssBoxValue = elem.style[name] || 0;
    } // Normalize '', auto, and prepare for extra


    cssBoxValue = parseFloat(cssBoxValue) || 0;
  }

  if (extra === undefined) {
    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
  }

  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
  var val = borderBoxValue || cssBoxValue;

  if (extra === CONTENT_INDEX) {
    if (borderBoxValueOrIsBorderBox) {
      return val - getPBMWidth(elem, ['border', 'padding'], which);
    }

    return cssBoxValue;
  } else if (borderBoxValueOrIsBorderBox) {
    if (extra === BORDER_INDEX) {
      return val;
    }

    return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which) : getPBMWidth(elem, ['margin'], which));
  }

  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which);
}

var cssShow = {
  position: 'absolute',
  visibility: 'hidden',
  display: 'block'
}; // fix #119 : https://github.com/kissyteam/kissy/issues/119

function getWHIgnoreDisplay() {
  for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
    args[_key2] = arguments[_key2];
  }

  var val;
  var elem = args[0]; // in case elem is window
  // elem.offsetWidth === undefined

  if (elem.offsetWidth !== 0) {
    val = getWH.apply(undefined, args);
  } else {
    swap(elem, cssShow, function () {
      val = getWH.apply(undefined, args);
    });
  }

  return val;
}

each(['width', 'height'], function (name) {
  var first = name.charAt(0).toUpperCase() + name.slice(1);

  domUtils["outer".concat(first)] = function (el, includeMargin) {
    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
  };

  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];

  domUtils[name] = function (elem, v) {
    var val = v;

    if (val !== undefined) {
      if (elem) {
        var computedStyle = getComputedStyleX(elem);
        var isBorderBox = isBorderBoxFn(elem);

        if (isBorderBox) {
          val += getPBMWidth(elem, ['padding', 'border'], which);
        }

        return css(elem, name, val);
      }

      return undefined;
    }

    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
  };
});

function mix(to, from) {
  for (var i in from) {
    if (from.hasOwnProperty(i)) {
      to[i] = from[i];
    }
  }

  return to;
}

var utils = {
  getWindow: function getWindow(node) {
    if (node && node.document && node.setTimeout) {
      return node;
    }

    var doc = node.ownerDocument || node;
    return doc.defaultView || doc.parentWindow;
  },
  getDocument: getDocument,
  offset: function offset(el, value, option) {
    if (typeof value !== 'undefined') {
      setOffset(el, value, option || {});
    } else {
      return getOffset(el);
    }
  },
  isWindow: isWindow,
  each: each,
  css: css,
  clone: function clone(obj) {
    var i;
    var ret = {};

    for (i in obj) {
      if (obj.hasOwnProperty(i)) {
        ret[i] = obj[i];
      }
    }

    var overflow = obj.overflow;

    if (overflow) {
      for (i in obj) {
        if (obj.hasOwnProperty(i)) {
          ret.overflow[i] = obj.overflow[i];
        }
      }
    }

    return ret;
  },
  mix: mix,
  getWindowScrollLeft: function getWindowScrollLeft(w) {
    return getScrollLeft(w);
  },
  getWindowScrollTop: function getWindowScrollTop(w) {
    return getScrollTop(w);
  },
  merge: function merge() {
    var ret = {};

    for (var i = 0; i < arguments.length; i++) {
      utils.mix(ret, i < 0 || arguments.length <= i ? undefined : arguments[i]);
    }

    return ret;
  },
  viewportWidth: 0,
  viewportHeight: 0
};
mix(utils, domUtils);
/**
 * 得到会导致元素显示不全的祖先元素
 */

var getParent = utils.getParent;

function getOffsetParent(element) {
  if (utils.isWindow(element) || element.nodeType === 9) {
    return null;
  } // ie 这个也不是完全可行

  /*
   <div style="width: 50px;height: 100px;overflow: hidden">
   <div style="width: 50px;height: 100px;position: relative;" id="d6">
   元素 6 高 100px 宽 50px<br/>
   </div>
   </div>
   */
  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
  //  In other browsers it only includes elements with position absolute, relative or
  // fixed, not elements with overflow set to auto or scroll.
  //        if (UA.ie && ieMode < 8) {
  //            return element.offsetParent;
  //        }
  // 统一的 offsetParent 方法


  var doc = utils.getDocument(element);
  var body = doc.body;
  var parent;
  var positionStyle = utils.css(element, 'position');
  var skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';

  if (!skipStatic) {
    return element.nodeName.toLowerCase() === 'html' ? null : getParent(element);
  }

  for (parent = getParent(element); parent && parent !== body; parent = getParent(parent)) {
    positionStyle = utils.css(parent, 'position');

    if (positionStyle !== 'static') {
      return parent;
    }
  }

  return null;
}

var getParent$1 = utils.getParent;

function isAncestorFixed(element) {
  if (utils.isWindow(element) || element.nodeType === 9) {
    return false;
  }

  var doc = utils.getDocument(element);
  var body = doc.body;
  var parent = null;

  for (parent = getParent$1(element); parent && parent !== body; parent = getParent$1(parent)) {
    var positionStyle = utils.css(parent, 'position');

    if (positionStyle === 'fixed') {
      return true;
    }
  }

  return false;
}
/**
 * 获得元素的显示部分的区域
 */


function getVisibleRectForElement(element) {
  var visibleRect = {
    left: 0,
    right: Infinity,
    top: 0,
    bottom: Infinity
  };
  var el = getOffsetParent(element);
  var doc = utils.getDocument(element);
  var win = doc.defaultView || doc.parentWindow;
  var body = doc.body;
  var documentElement = doc.documentElement; // Determine the size of the visible rect by climbing the dom accounting for
  // all scrollable containers.

  while (el) {
    // clientWidth is zero for inline block elements in ie.
    if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) && // body may have overflow set on it, yet we still get the entire
    // viewport. In some browsers, el.offsetParent may be
    // document.documentElement, so check for that too.
    el !== body && el !== documentElement && utils.css(el, 'overflow') !== 'visible') {
      var pos = utils.offset(el); // add border

      pos.left += el.clientLeft;
      pos.top += el.clientTop;
      visibleRect.top = Math.max(visibleRect.top, pos.top);
      visibleRect.right = Math.min(visibleRect.right, // consider area without scrollBar
      pos.left + el.clientWidth);
      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
      visibleRect.left = Math.max(visibleRect.left, pos.left);
    } else if (el === body || el === documentElement) {
      break;
    }

    el = getOffsetParent(el);
  } // Set element position to fixed
  // make sure absolute element itself don't affect it's visible area
  // https://github.com/ant-design/ant-design/issues/7601


  var originalPosition = null;

  if (!utils.isWindow(element) && element.nodeType !== 9) {
    originalPosition = element.style.position;
    var position = utils.css(element, 'position');

    if (position === 'absolute') {
      element.style.position = 'fixed';
    }
  }

  var scrollX = utils.getWindowScrollLeft(win);
  var scrollY = utils.getWindowScrollTop(win);
  var viewportWidth = utils.viewportWidth(win);
  var viewportHeight = utils.viewportHeight(win);
  var documentWidth = documentElement.scrollWidth;
  var documentHeight = documentElement.scrollHeight; // scrollXXX on html is sync with body which means overflow: hidden on body gets wrong scrollXXX.
  // We should cut this ourself.

  var bodyStyle = window.getComputedStyle(body);

  if (bodyStyle.overflowX === 'hidden') {
    documentWidth = win.innerWidth;
  }

  if (bodyStyle.overflowY === 'hidden') {
    documentHeight = win.innerHeight;
  } // Reset element position after calculate the visible area


  if (element.style) {
    element.style.position = originalPosition;
  }

  if (isAncestorFixed(element)) {
    // Clip by viewport's size.
    visibleRect.left = Math.max(visibleRect.left, scrollX);
    visibleRect.top = Math.max(visibleRect.top, scrollY);
    visibleRect.right = Math.min(visibleRect.right, scrollX + viewportWidth);
    visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + viewportHeight);
  } else {
    // Clip by document's size.
    var maxVisibleWidth = Math.max(documentWidth, scrollX + viewportWidth);
    visibleRect.right = Math.min(visibleRect.right, maxVisibleWidth);
    var maxVisibleHeight = Math.max(documentHeight, scrollY + viewportHeight);
    visibleRect.bottom = Math.min(visibleRect.bottom, maxVisibleHeight);
  }

  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
}

function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
  var pos = utils.clone(elFuturePos);
  var size = {
    width: elRegion.width,
    height: elRegion.height
  };

  if (overflow.adjustX && pos.left < visibleRect.left) {
    pos.left = visibleRect.left;
  } // Left edge inside and right edge outside viewport, try to resize it.


  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
    size.width -= pos.left + size.width - visibleRect.right;
  } // Right edge outside viewport, try to move it.


  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
    // 保证左边界和可视区域左边界对齐
    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
  } // Top edge outside viewport, try to move it.


  if (overflow.adjustY && pos.top < visibleRect.top) {
    pos.top = visibleRect.top;
  } // Top edge inside and bottom edge outside viewport, try to resize it.


  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
    size.height -= pos.top + size.height - visibleRect.bottom;
  } // Bottom edge outside viewport, try to move it.


  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
    // 保证上边界和可视区域上边界对齐
    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
  }

  return utils.mix(pos, size);
}

function getRegion(node) {
  var offset;
  var w;
  var h;

  if (!utils.isWindow(node) && node.nodeType !== 9) {
    offset = utils.offset(node);
    w = utils.outerWidth(node);
    h = utils.outerHeight(node);
  } else {
    var win = utils.getWindow(node);
    offset = {
      left: utils.getWindowScrollLeft(win),
      top: utils.getWindowScrollTop(win)
    };
    w = utils.viewportWidth(win);
    h = utils.viewportHeight(win);
  }

  offset.width = w;
  offset.height = h;
  return offset;
}
/**
 * 获取 node 上的 align 对齐点 相对于页面的坐标
 */


function getAlignOffset(region, align) {
  var V = align.charAt(0);
  var H = align.charAt(1);
  var w = region.width;
  var h = region.height;
  var x = region.left;
  var y = region.top;

  if (V === 'c') {
    y += h / 2;
  } else if (V === 'b') {
    y += h;
  }

  if (H === 'c') {
    x += w / 2;
  } else if (H === 'r') {
    x += w;
  }

  return {
    left: x,
    top: y
  };
}

function getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
  var p1 = getAlignOffset(refNodeRegion, points[1]);
  var p2 = getAlignOffset(elRegion, points[0]);
  var diff = [p2.left - p1.left, p2.top - p1.top];
  return {
    left: Math.round(elRegion.left - diff[0] + offset[0] - targetOffset[0]),
    top: Math.round(elRegion.top - diff[1] + offset[1] - targetOffset[1])
  };
}
/**
 * align dom node flexibly
 * @author yiminghe@gmail.com
 */


function isFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
}

function isFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
}

function isCompleteFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left > visibleRect.right || elFuturePos.left + elRegion.width < visibleRect.left;
}

function isCompleteFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top > visibleRect.bottom || elFuturePos.top + elRegion.height < visibleRect.top;
}

function flip(points, reg, map) {
  var ret = [];
  utils.each(points, function (p) {
    ret.push(p.replace(reg, function (m) {
      return map[m];
    }));
  });
  return ret;
}

function flipOffset(offset, index) {
  offset[index] = -offset[index];
  return offset;
}

function convertOffset(str, offsetLen) {
  var n;

  if (/%$/.test(str)) {
    n = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
  } else {
    n = parseInt(str, 10);
  }

  return n || 0;
}

function normalizeOffset(offset, el) {
  offset[0] = convertOffset(offset[0], el.width);
  offset[1] = convertOffset(offset[1], el.height);
}
/**
 * @param el
 * @param tgtRegion 参照节点所占的区域: { left, top, width, height }
 * @param align
 */


function doAlign(el, tgtRegion, align, isTgtRegionVisible) {
  var points = align.points;
  var offset = align.offset || [0, 0];
  var targetOffset = align.targetOffset || [0, 0];
  var overflow = align.overflow;
  var source = align.source || el;
  offset = [].concat(offset);
  targetOffset = [].concat(targetOffset);
  overflow = overflow || {};
  var newOverflowCfg = {};
  var fail = 0; // 当前节点可以被放置的显示区域

  var visibleRect = getVisibleRectForElement(source); // 当前节点所占的区域, left/top/width/height

  var elRegion = getRegion(source); // 将 offset 转换成数值，支持百分比

  normalizeOffset(offset, elRegion);
  normalizeOffset(targetOffset, tgtRegion); // 当前节点将要被放置的位置

  var elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset, targetOffset); // 当前节点将要所处的区域

  var newElRegion = utils.merge(elRegion, elFuturePos); // 如果可视区域不能完全放置当前节点时允许调整

  if (visibleRect && (overflow.adjustX || overflow.adjustY) && isTgtRegionVisible) {
    if (overflow.adjustX) {
      // 如果横向不能放下
      if (isFailX(elFuturePos, elRegion, visibleRect)) {
        // 对齐位置反下
        var newPoints = flip(points, /[lr]/gi, {
          l: 'r',
          r: 'l'
        }); // 偏移量也反下

        var newOffset = flipOffset(offset, 0);
        var newTargetOffset = flipOffset(targetOffset, 0);
        var newElFuturePos = getElFuturePos(elRegion, tgtRegion, newPoints, newOffset, newTargetOffset);

        if (!isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = newPoints;
          offset = newOffset;
          targetOffset = newTargetOffset;
        }
      }
    }

    if (overflow.adjustY) {
      // 如果纵向不能放下
      if (isFailY(elFuturePos, elRegion, visibleRect)) {
        // 对齐位置反下
        var _newPoints = flip(points, /[tb]/gi, {
          t: 'b',
          b: 't'
        }); // 偏移量也反下


        var _newOffset = flipOffset(offset, 1);

        var _newTargetOffset = flipOffset(targetOffset, 1);

        var _newElFuturePos = getElFuturePos(elRegion, tgtRegion, _newPoints, _newOffset, _newTargetOffset);

        if (!isCompleteFailY(_newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = _newPoints;
          offset = _newOffset;
          targetOffset = _newTargetOffset;
        }
      }
    } // 如果失败，重新计算当前节点将要被放置的位置


    if (fail) {
      elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset, targetOffset);
      utils.mix(newElRegion, elFuturePos);
    }

    var isStillFailX = isFailX(elFuturePos, elRegion, visibleRect);
    var isStillFailY = isFailY(elFuturePos, elRegion, visibleRect); // 检查反下后的位置是否可以放下了，如果仍然放不下：
    // 1. 复原修改过的定位参数

    if (isStillFailX || isStillFailY) {
      points = align.points;
      offset = align.offset || [0, 0];
      targetOffset = align.targetOffset || [0, 0];
    } // 2. 只有指定了可以调整当前方向才调整


    newOverflowCfg.adjustX = overflow.adjustX && isStillFailX;
    newOverflowCfg.adjustY = overflow.adjustY && isStillFailY; // 确实要调整，甚至可能会调整高度宽度

    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
      newElRegion = adjustForViewport(elFuturePos, elRegion, visibleRect, newOverflowCfg);
    }
  } // need judge to in case set fixed with in css on height auto element


  if (newElRegion.width !== elRegion.width) {
    utils.css(source, 'width', utils.width(source) + newElRegion.width - elRegion.width);
  }

  if (newElRegion.height !== elRegion.height) {
    utils.css(source, 'height', utils.height(source) + newElRegion.height - elRegion.height);
  } // https://github.com/kissyteam/kissy/issues/190
  // 相对于屏幕位置没变，而 left/top 变了
  // 例如 <div 'relative'><el absolute></div>


  utils.offset(source, {
    left: newElRegion.left,
    top: newElRegion.top
  }, {
    useCssRight: align.useCssRight,
    useCssBottom: align.useCssBottom,
    useCssTransform: align.useCssTransform,
    ignoreShake: align.ignoreShake
  });
  return {
    points: points,
    offset: offset,
    targetOffset: targetOffset,
    overflow: newOverflowCfg
  };
}
/**
 *  2012-04-26 yiminghe@gmail.com
 *   - 优化智能对齐算法
 *   - 慎用 resizeXX
 *
 *  2011-07-13 yiminghe@gmail.com note:
 *   - 增加智能对齐，以及大小调整选项
 **/


function isOutOfVisibleRect(target) {
  var visibleRect = getVisibleRectForElement(target);
  var targetRegion = getRegion(target);
  return !visibleRect || targetRegion.left + targetRegion.width <= visibleRect.left || targetRegion.top + targetRegion.height <= visibleRect.top || targetRegion.left >= visibleRect.right || targetRegion.top >= visibleRect.bottom;
}

function alignElement(el, refNode, align) {
  var target = align.target || refNode;
  var refNodeRegion = getRegion(target);
  var isTargetNotOutOfVisible = !isOutOfVisibleRect(target);
  return doAlign(el, refNodeRegion, align, isTargetNotOutOfVisible);
}

alignElement.__getOffsetParent = getOffsetParent;
alignElement.__getVisibleRectForElement = getVisibleRectForElement;
/**
 * `tgtPoint`: { pageX, pageY } or { clientX, clientY }.
 * If client position provided, will internal convert to page position.
 */

function dist_web_alignPoint(el, tgtPoint, align) {
  var pageX;
  var pageY;
  var doc = utils.getDocument(el);
  var win = doc.defaultView || doc.parentWindow;
  var scrollX = utils.getWindowScrollLeft(win);
  var scrollY = utils.getWindowScrollTop(win);
  var viewportWidth = utils.viewportWidth(win);
  var viewportHeight = utils.viewportHeight(win);

  if ('pageX' in tgtPoint) {
    pageX = tgtPoint.pageX;
  } else {
    pageX = scrollX + tgtPoint.clientX;
  }

  if ('pageY' in tgtPoint) {
    pageY = tgtPoint.pageY;
  } else {
    pageY = scrollY + tgtPoint.clientY;
  }

  var tgtRegion = {
    left: pageX,
    top: pageY,
    width: 0,
    height: 0
  };
  var pointInView = pageX >= 0 && pageX <= scrollX + viewportWidth && pageY >= 0 && pageY <= scrollY + viewportHeight; // Provide default target point

  var points = [align.points[0], 'cc'];
  return doAlign(el, tgtRegion, _objectSpread2({}, align, {
    points: points
  }), pointInView);
}

/* harmony default export */ var dist_web = (alignElement);

// CONCATENATED MODULE: ../node_modules/rc-align/es/util.js

function buffer(fn, ms) {
  var timer = void 0;

  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }

  function bufferFn() {
    clear();
    timer = setTimeout(fn, ms);
  }

  bufferFn.clear = clear;
  return bufferFn;
}
function isSamePoint(prev, next) {
  if (prev === next) return true;
  if (!prev || !next) return false;

  if ('pageX' in next && 'pageY' in next) {
    return prev.pageX === next.pageX && prev.pageY === next.pageY;
  }

  if ('clientX' in next && 'clientY' in next) {
    return prev.clientX === next.clientX && prev.clientY === next.clientY;
  }

  return false;
}
function util_isWindow(obj) {
  return obj && typeof obj === 'object' && obj.window === obj;
}
function isSimilarValue(val1, val2) {
  var int1 = Math.floor(val1);
  var int2 = Math.floor(val2);
  return Math.abs(int1 - int2) <= 1;
}
function restoreFocus(activeElement, container) {
  // Focus back if is in the container
  if (activeElement !== document.activeElement && Object(contains["a" /* default */])(container, activeElement)) {
    activeElement.focus();
  }
}
// CONCATENATED MODULE: ../node_modules/rc-align/es/Align.js
















function getElement(func) {
  if (typeof func !== 'function' || !func) return null;
  return func();
}

function getPoint(point) {
  if (typeof point !== 'object' || !point) return null;
  return point;
}

var Align_Align = function (_Component) {
  inherits_default()(Align, _Component);

  function Align() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck_default()(this, Align);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn_default()(this, (_ref = Align.__proto__ || Object.getPrototypeOf(Align)).call.apply(_ref, [this].concat(args))), _this), _this.forceAlign = function () {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          target = _this$props.target,
          align = _this$props.align,
          onAlign = _this$props.onAlign;

      if (!disabled && target) {
        var source = react_dom_default.a.findDOMNode(_this);
        var result = void 0;
        var element = getElement(target);
        var point = getPoint(target); // IE lose focus after element realign
        // We should record activeElement and restore later

        var activeElement = document.activeElement;

        if (element) {
          result = alignElement(source, element, align);
        } else if (point) {
          result = dist_web_alignPoint(source, point, align);
        }

        restoreFocus(activeElement, source);

        if (onAlign) {
          onAlign(source, result);
        }
      }
    }, _temp), possibleConstructorReturn_default()(_this, _ret);
  }

  createClass_default()(Align, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var props = this.props; // if parent ref not attached .... use document.getElementById

      this.forceAlign();

      if (!props.disabled && props.monitorWindowResize) {
        this.startMonitorWindowResize();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var reAlign = false;
      var props = this.props;

      if (!props.disabled) {
        var source = react_dom_default.a.findDOMNode(this);
        var sourceRect = source ? source.getBoundingClientRect() : null;

        if (prevProps.disabled) {
          reAlign = true;
        } else {
          var lastElement = getElement(prevProps.target);
          var currentElement = getElement(props.target);
          var lastPoint = getPoint(prevProps.target);
          var currentPoint = getPoint(props.target);

          if (util_isWindow(lastElement) && util_isWindow(currentElement)) {
            // Skip if is window
            reAlign = false;
          } else if (lastElement !== currentElement || // Element change
          lastElement && !currentElement && currentPoint || // Change from element to point
          lastPoint && currentPoint && currentElement || // Change from point to element
          currentPoint && !isSamePoint(lastPoint, currentPoint)) {
            reAlign = true;
          } // If source element size changed


          var preRect = this.sourceRect || {};

          if (!reAlign && source && (!isSimilarValue(preRect.width, sourceRect.width) || !isSimilarValue(preRect.height, sourceRect.height))) {
            reAlign = true;
          }
        }

        this.sourceRect = sourceRect;
      }

      if (reAlign) {
        this.forceAlign();
      }

      if (props.monitorWindowResize && !props.disabled) {
        this.startMonitorWindowResize();
      } else {
        this.stopMonitorWindowResize();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.stopMonitorWindowResize();
    }
  }, {
    key: 'startMonitorWindowResize',
    value: function startMonitorWindowResize() {
      if (!this.resizeHandler) {
        this.bufferMonitor = buffer(this.forceAlign, this.props.monitorBufferTime);
        this.resizeHandler = Object(addEventListener["a" /* default */])(window, 'resize', this.bufferMonitor);
      }
    }
  }, {
    key: 'stopMonitorWindowResize',
    value: function stopMonitorWindowResize() {
      if (this.resizeHandler) {
        this.bufferMonitor.clear();
        this.resizeHandler.remove();
        this.resizeHandler = null;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          childrenProps = _props.childrenProps,
          children = _props.children;
      var child = react_default.a.Children.only(children);

      if (childrenProps) {
        var newProps = {};
        var propList = Object.keys(childrenProps);
        propList.forEach(function (prop) {
          newProps[prop] = _this2.props[childrenProps[prop]];
        });
        return react_default.a.cloneElement(child, newProps);
      }

      return child;
    }
  }]);

  return Align;
}(react["Component"]);

Align_Align.propTypes = {
  childrenProps: prop_types_default.a.object,
  align: prop_types_default.a.object.isRequired,
  target: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.shape({
    clientX: prop_types_default.a.number,
    clientY: prop_types_default.a.number,
    pageX: prop_types_default.a.number,
    pageY: prop_types_default.a.number
  })]),
  onAlign: prop_types_default.a.func,
  monitorBufferTime: prop_types_default.a.number,
  monitorWindowResize: prop_types_default.a.bool,
  disabled: prop_types_default.a.bool,
  children: prop_types_default.a.any
};
Align_Align.defaultProps = {
  target: function target() {
    return window;
  },
  monitorBufferTime: 50,
  monitorWindowResize: false,
  disabled: false
};
/* harmony default export */ var es_Align = (Align_Align);
// CONCATENATED MODULE: ../node_modules/rc-align/es/index.js
// export this package's api

/* harmony default export */ var es = (es_Align);
// EXTERNAL MODULE: ../node_modules/rc-animate/es/Animate.js + 5 modules
var Animate = __webpack_require__("YSJY");

// EXTERNAL MODULE: ../node_modules/babel-runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("wQpU");
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// CONCATENATED MODULE: ../node_modules/rc-trigger/es/LazyRenderBox.js







var LazyRenderBox_LazyRenderBox = function (_Component) {
  inherits_default()(LazyRenderBox, _Component);

  function LazyRenderBox() {
    classCallCheck_default()(this, LazyRenderBox);

    return possibleConstructorReturn_default()(this, _Component.apply(this, arguments));
  }

  LazyRenderBox.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return nextProps.hiddenClassName || nextProps.visible;
  };

  LazyRenderBox.prototype.render = function render() {
    var _props = this.props,
        hiddenClassName = _props.hiddenClassName,
        visible = _props.visible,
        props = objectWithoutProperties_default()(_props, ['hiddenClassName', 'visible']);

    if (hiddenClassName || react_default.a.Children.count(props.children) > 1) {
      if (!visible && hiddenClassName) {
        props.className += ' ' + hiddenClassName;
      }

      return react_default.a.createElement('div', props);
    }

    return react_default.a.Children.only(props.children);
  };

  return LazyRenderBox;
}(react["Component"]);

LazyRenderBox_LazyRenderBox.propTypes = {
  children: prop_types_default.a.any,
  className: prop_types_default.a.string,
  visible: prop_types_default.a.bool,
  hiddenClassName: prop_types_default.a.string
};
/* harmony default export */ var es_LazyRenderBox = (LazyRenderBox_LazyRenderBox);
// CONCATENATED MODULE: ../node_modules/rc-trigger/es/PopupInner.js







var PopupInner_PopupInner = function (_Component) {
  inherits_default()(PopupInner, _Component);

  function PopupInner() {
    classCallCheck_default()(this, PopupInner);

    return possibleConstructorReturn_default()(this, _Component.apply(this, arguments));
  }

  PopupInner.prototype.render = function render() {
    var props = this.props;
    var className = props.className;

    if (!props.visible) {
      className += ' ' + props.hiddenClassName;
    }

    return react_default.a.createElement('div', {
      className: className,
      onMouseEnter: props.onMouseEnter,
      onMouseLeave: props.onMouseLeave,
      onMouseDown: props.onMouseDown,
      onTouchStart: props.onTouchStart,
      style: props.style
    }, react_default.a.createElement(es_LazyRenderBox, {
      className: props.prefixCls + '-content',
      visible: props.visible
    }, props.children));
  };

  return PopupInner;
}(react["Component"]);

PopupInner_PopupInner.propTypes = {
  hiddenClassName: prop_types_default.a.string,
  className: prop_types_default.a.string,
  prefixCls: prop_types_default.a.string,
  onMouseEnter: prop_types_default.a.func,
  onMouseLeave: prop_types_default.a.func,
  onMouseDown: prop_types_default.a.func,
  onTouchStart: prop_types_default.a.func,
  children: prop_types_default.a.any
};
/* harmony default export */ var es_PopupInner = (PopupInner_PopupInner);
// CONCATENATED MODULE: ../node_modules/rc-trigger/es/Popup.js















var Popup_Popup = function (_Component) {
  inherits_default()(Popup, _Component);

  function Popup(props) {
    classCallCheck_default()(this, Popup);

    var _this = possibleConstructorReturn_default()(this, _Component.call(this, props));

    Popup_initialiseProps.call(_this);

    _this.state = {
      // Used for stretch
      stretchChecked: false,
      targetWidth: undefined,
      targetHeight: undefined
    };
    _this.savePopupRef = saveRef.bind(_this, 'popupInstance');
    _this.saveAlignRef = saveRef.bind(_this, 'alignInstance');
    return _this;
  }

  Popup.prototype.componentDidMount = function componentDidMount() {
    this.rootNode = this.getPopupDomNode();
    this.setStretchSize();
  };

  Popup.prototype.componentDidUpdate = function componentDidUpdate() {
    this.setStretchSize();
  }; // Record size if stretch needed


  Popup.prototype.getPopupDomNode = function getPopupDomNode() {
    return react_dom_default.a.findDOMNode(this.popupInstance);
  }; // `target` on `rc-align` can accept as a function to get the bind element or a point.
  // ref: https://www.npmjs.com/package/rc-align


  Popup.prototype.getMaskTransitionName = function getMaskTransitionName() {
    var props = this.props;
    var transitionName = props.maskTransitionName;
    var animation = props.maskAnimation;

    if (!transitionName && animation) {
      transitionName = props.prefixCls + '-' + animation;
    }

    return transitionName;
  };

  Popup.prototype.getTransitionName = function getTransitionName() {
    var props = this.props;
    var transitionName = props.transitionName;

    if (!transitionName && props.animation) {
      transitionName = props.prefixCls + '-' + props.animation;
    }

    return transitionName;
  };

  Popup.prototype.getClassName = function getClassName(currentAlignClassName) {
    return this.props.prefixCls + ' ' + this.props.className + ' ' + currentAlignClassName;
  };

  Popup.prototype.getPopupElement = function getPopupElement() {
    var _this2 = this;

    var savePopupRef = this.savePopupRef;
    var _state = this.state,
        stretchChecked = _state.stretchChecked,
        targetHeight = _state.targetHeight,
        targetWidth = _state.targetWidth;
    var _props = this.props,
        align = _props.align,
        visible = _props.visible,
        prefixCls = _props.prefixCls,
        style = _props.style,
        getClassNameFromAlign = _props.getClassNameFromAlign,
        destroyPopupOnHide = _props.destroyPopupOnHide,
        stretch = _props.stretch,
        children = _props.children,
        onMouseEnter = _props.onMouseEnter,
        onMouseLeave = _props.onMouseLeave,
        onMouseDown = _props.onMouseDown,
        onTouchStart = _props.onTouchStart;
    var className = this.getClassName(this.currentAlignClassName || getClassNameFromAlign(align));
    var hiddenClassName = prefixCls + '-hidden';

    if (!visible) {
      this.currentAlignClassName = null;
    }

    var sizeStyle = {};

    if (stretch) {
      // Stretch with target
      if (stretch.indexOf('height') !== -1) {
        sizeStyle.height = targetHeight;
      } else if (stretch.indexOf('minHeight') !== -1) {
        sizeStyle.minHeight = targetHeight;
      }

      if (stretch.indexOf('width') !== -1) {
        sizeStyle.width = targetWidth;
      } else if (stretch.indexOf('minWidth') !== -1) {
        sizeStyle.minWidth = targetWidth;
      } // Delay force align to makes ui smooth


      if (!stretchChecked) {
        sizeStyle.visibility = 'hidden';
        setTimeout(function () {
          if (_this2.alignInstance) {
            _this2.alignInstance.forceAlign();
          }
        }, 0);
      }
    }

    var newStyle = extends_default()({}, sizeStyle, style, this.getZIndexStyle());

    var popupInnerProps = {
      className: className,
      prefixCls: prefixCls,
      ref: savePopupRef,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onMouseDown: onMouseDown,
      onTouchStart: onTouchStart,
      style: newStyle
    };

    if (destroyPopupOnHide) {
      return react_default.a.createElement(Animate["a" /* default */], {
        component: '',
        exclusive: true,
        transitionAppear: true,
        transitionName: this.getTransitionName()
      }, visible ? react_default.a.createElement(es, {
        target: this.getAlignTarget(),
        key: 'popup',
        ref: this.saveAlignRef,
        monitorWindowResize: true,
        align: align,
        onAlign: this.onAlign
      }, react_default.a.createElement(es_PopupInner, extends_default()({
        visible: true
      }, popupInnerProps), children)) : null);
    }

    return react_default.a.createElement(Animate["a" /* default */], {
      component: '',
      exclusive: true,
      transitionAppear: true,
      transitionName: this.getTransitionName(),
      showProp: 'xVisible'
    }, react_default.a.createElement(es, {
      target: this.getAlignTarget(),
      key: 'popup',
      ref: this.saveAlignRef,
      monitorWindowResize: true,
      xVisible: visible,
      childrenProps: {
        visible: 'xVisible'
      },
      disabled: !visible,
      align: align,
      onAlign: this.onAlign
    }, react_default.a.createElement(es_PopupInner, extends_default()({
      hiddenClassName: hiddenClassName
    }, popupInnerProps), children)));
  };

  Popup.prototype.getZIndexStyle = function getZIndexStyle() {
    var style = {};
    var props = this.props;

    if (props.zIndex !== undefined) {
      style.zIndex = props.zIndex;
    }

    return style;
  };

  Popup.prototype.getMaskElement = function getMaskElement() {
    var props = this.props;
    var maskElement = void 0;

    if (props.mask) {
      var maskTransition = this.getMaskTransitionName();
      maskElement = react_default.a.createElement(es_LazyRenderBox, {
        style: this.getZIndexStyle(),
        key: 'mask',
        className: props.prefixCls + '-mask',
        hiddenClassName: props.prefixCls + '-mask-hidden',
        visible: props.visible
      });

      if (maskTransition) {
        maskElement = react_default.a.createElement(Animate["a" /* default */], {
          key: 'mask',
          showProp: 'visible',
          transitionAppear: true,
          component: '',
          transitionName: maskTransition
        }, maskElement);
      }
    }

    return maskElement;
  };

  Popup.prototype.render = function render() {
    return react_default.a.createElement('div', null, this.getMaskElement(), this.getPopupElement());
  };

  return Popup;
}(react["Component"]);

Popup_Popup.propTypes = {
  visible: prop_types_default.a.bool,
  style: prop_types_default.a.object,
  getClassNameFromAlign: prop_types_default.a.func,
  onAlign: prop_types_default.a.func,
  getRootDomNode: prop_types_default.a.func,
  align: prop_types_default.a.any,
  destroyPopupOnHide: prop_types_default.a.bool,
  className: prop_types_default.a.string,
  prefixCls: prop_types_default.a.string,
  onMouseEnter: prop_types_default.a.func,
  onMouseLeave: prop_types_default.a.func,
  onMouseDown: prop_types_default.a.func,
  onTouchStart: prop_types_default.a.func,
  stretch: prop_types_default.a.string,
  children: prop_types_default.a.node,
  point: prop_types_default.a.shape({
    pageX: prop_types_default.a.number,
    pageY: prop_types_default.a.number
  })
};

var Popup_initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.onAlign = function (popupDomNode, align) {
    var props = _this3.props;
    var currentAlignClassName = props.getClassNameFromAlign(align); // FIX: https://github.com/react-component/trigger/issues/56
    // FIX: https://github.com/react-component/tooltip/issues/79

    if (_this3.currentAlignClassName !== currentAlignClassName) {
      _this3.currentAlignClassName = currentAlignClassName;
      popupDomNode.className = _this3.getClassName(currentAlignClassName);
    }

    props.onAlign(popupDomNode, align);
  };

  this.setStretchSize = function () {
    var _props2 = _this3.props,
        stretch = _props2.stretch,
        getRootDomNode = _props2.getRootDomNode,
        visible = _props2.visible;
    var _state2 = _this3.state,
        stretchChecked = _state2.stretchChecked,
        targetHeight = _state2.targetHeight,
        targetWidth = _state2.targetWidth;

    if (!stretch || !visible) {
      if (stretchChecked) {
        _this3.setState({
          stretchChecked: false
        });
      }

      return;
    }

    var $ele = getRootDomNode();
    if (!$ele) return;
    var height = $ele.offsetHeight;
    var width = $ele.offsetWidth;

    if (targetHeight !== height || targetWidth !== width || !stretchChecked) {
      _this3.setState({
        stretchChecked: true,
        targetHeight: height,
        targetWidth: width
      });
    }
  };

  this.getTargetElement = function () {
    return _this3.props.getRootDomNode();
  };

  this.getAlignTarget = function () {
    var point = _this3.props.point;

    if (point) {
      return point;
    }

    return _this3.getTargetElement;
  };
};

/* harmony default export */ var es_Popup = (Popup_Popup);
// CONCATENATED MODULE: ../node_modules/rc-trigger/es/index.js



















function noop() {}

function returnEmptyString() {
  return '';
}

function returnDocument() {
  return window.document;
}

var ALL_HANDLERS = ['onClick', 'onMouseDown', 'onTouchStart', 'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur', 'onContextMenu'];
var IS_REACT_16 = !!react_dom["createPortal"];
var contextTypes = {
  rcTrigger: prop_types_default.a.shape({
    onPopupMouseDown: prop_types_default.a.func
  })
};

var es_Trigger = function (_React$Component) {
  inherits_default()(Trigger, _React$Component);

  function Trigger(props) {
    classCallCheck_default()(this, Trigger);

    var _this = possibleConstructorReturn_default()(this, _React$Component.call(this, props));

    es_initialiseProps.call(_this);

    var popupVisible = void 0;

    if ('popupVisible' in props) {
      popupVisible = !!props.popupVisible;
    } else {
      popupVisible = !!props.defaultPopupVisible;
    }

    _this.state = {
      prevPopupVisible: popupVisible,
      popupVisible: popupVisible
    };
    ALL_HANDLERS.forEach(function (h) {
      _this['fire' + h] = function (e) {
        _this.fireEvents(h, e);
      };
    });
    return _this;
  }

  Trigger.prototype.getChildContext = function getChildContext() {
    return {
      rcTrigger: {
        onPopupMouseDown: this.onPopupMouseDown
      }
    };
  };

  Trigger.prototype.componentDidMount = function componentDidMount() {
    this.componentDidUpdate({}, {
      popupVisible: this.state.popupVisible
    });
  };

  Trigger.prototype.componentDidUpdate = function componentDidUpdate(_, prevState) {
    var props = this.props;
    var state = this.state;

    var triggerAfterPopupVisibleChange = function triggerAfterPopupVisibleChange() {
      if (prevState.popupVisible !== state.popupVisible) {
        props.afterPopupVisibleChange(state.popupVisible);
      }
    };

    if (!IS_REACT_16) {
      this.renderComponent(null, triggerAfterPopupVisibleChange);
    } // We must listen to `mousedown` or `touchstart`, edge case:
    // https://github.com/ant-design/ant-design/issues/5804
    // https://github.com/react-component/calendar/issues/250
    // https://github.com/react-component/trigger/issues/50


    if (state.popupVisible) {
      var currentDocument = void 0;

      if (!this.clickOutsideHandler && (this.isClickToHide() || this.isContextMenuToShow())) {
        currentDocument = props.getDocument();
        this.clickOutsideHandler = Object(addEventListener["a" /* default */])(currentDocument, 'mousedown', this.onDocumentClick);
      } // always hide on mobile


      if (!this.touchOutsideHandler) {
        currentDocument = currentDocument || props.getDocument();
        this.touchOutsideHandler = Object(addEventListener["a" /* default */])(currentDocument, 'touchstart', this.onDocumentClick);
      } // close popup when trigger type contains 'onContextMenu' and document is scrolling.


      if (!this.contextMenuOutsideHandler1 && this.isContextMenuToShow()) {
        currentDocument = currentDocument || props.getDocument();
        this.contextMenuOutsideHandler1 = Object(addEventListener["a" /* default */])(currentDocument, 'scroll', this.onContextMenuClose);
      } // close popup when trigger type contains 'onContextMenu' and window is blur.


      if (!this.contextMenuOutsideHandler2 && this.isContextMenuToShow()) {
        this.contextMenuOutsideHandler2 = Object(addEventListener["a" /* default */])(window, 'blur', this.onContextMenuClose);
      }

      return;
    }

    this.clearOutsideHandler();
  };

  Trigger.prototype.componentWillUnmount = function componentWillUnmount() {
    this.clearDelayTimer();
    this.clearOutsideHandler();
    clearTimeout(this.mouseDownTimeout);
  };

  Trigger.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var popupVisible = _ref.popupVisible;
    var newState = {};

    if (popupVisible !== undefined && prevState.popupVisible !== popupVisible) {
      newState.popupVisible = popupVisible;
      newState.prevPopupVisible = prevState.popupVisible;
    }

    return newState;
  };

  Trigger.prototype.getPopupDomNode = function getPopupDomNode() {
    // for test
    if (this._component && this._component.getPopupDomNode) {
      return this._component.getPopupDomNode();
    }

    return null;
  };

  Trigger.prototype.getPopupAlign = function getPopupAlign() {
    var props = this.props;
    var popupPlacement = props.popupPlacement,
        popupAlign = props.popupAlign,
        builtinPlacements = props.builtinPlacements;

    if (popupPlacement && builtinPlacements) {
      return getAlignFromPlacement(builtinPlacements, popupPlacement, popupAlign);
    }

    return popupAlign;
  };
  /**
   * @param popupVisible    Show or not the popup element
   * @param event           SyntheticEvent, used for `pointAlign`
   */


  Trigger.prototype.setPopupVisible = function setPopupVisible(popupVisible, event) {
    var alignPoint = this.props.alignPoint;
    var prevPopupVisible = this.state.popupVisible;
    this.clearDelayTimer();

    if (prevPopupVisible !== popupVisible) {
      if (!('popupVisible' in this.props)) {
        this.setState({
          popupVisible: popupVisible,
          prevPopupVisible: prevPopupVisible
        });
      }

      this.props.onPopupVisibleChange(popupVisible);
    } // Always record the point position since mouseEnterDelay will delay the show


    if (alignPoint && event) {
      this.setPoint(event);
    }
  };

  Trigger.prototype.delaySetPopupVisible = function delaySetPopupVisible(visible, delayS, event) {
    var _this2 = this;

    var delay = delayS * 1000;
    this.clearDelayTimer();

    if (delay) {
      var point = event ? {
        pageX: event.pageX,
        pageY: event.pageY
      } : null;
      this.delayTimer = setTimeout(function () {
        _this2.setPopupVisible(visible, point);

        _this2.clearDelayTimer();
      }, delay);
    } else {
      this.setPopupVisible(visible, event);
    }
  };

  Trigger.prototype.clearDelayTimer = function clearDelayTimer() {
    if (this.delayTimer) {
      clearTimeout(this.delayTimer);
      this.delayTimer = null;
    }
  };

  Trigger.prototype.clearOutsideHandler = function clearOutsideHandler() {
    if (this.clickOutsideHandler) {
      this.clickOutsideHandler.remove();
      this.clickOutsideHandler = null;
    }

    if (this.contextMenuOutsideHandler1) {
      this.contextMenuOutsideHandler1.remove();
      this.contextMenuOutsideHandler1 = null;
    }

    if (this.contextMenuOutsideHandler2) {
      this.contextMenuOutsideHandler2.remove();
      this.contextMenuOutsideHandler2 = null;
    }

    if (this.touchOutsideHandler) {
      this.touchOutsideHandler.remove();
      this.touchOutsideHandler = null;
    }
  };

  Trigger.prototype.createTwoChains = function createTwoChains(event) {
    var childPros = this.props.children.props;
    var props = this.props;

    if (childPros[event] && props[event]) {
      return this['fire' + event];
    }

    return childPros[event] || props[event];
  };

  Trigger.prototype.isClickToShow = function isClickToShow() {
    var _props = this.props,
        action = _props.action,
        showAction = _props.showAction;
    return action.indexOf('click') !== -1 || showAction.indexOf('click') !== -1;
  };

  Trigger.prototype.isContextMenuToShow = function isContextMenuToShow() {
    var _props2 = this.props,
        action = _props2.action,
        showAction = _props2.showAction;
    return action.indexOf('contextMenu') !== -1 || showAction.indexOf('contextMenu') !== -1;
  };

  Trigger.prototype.isClickToHide = function isClickToHide() {
    var _props3 = this.props,
        action = _props3.action,
        hideAction = _props3.hideAction;
    return action.indexOf('click') !== -1 || hideAction.indexOf('click') !== -1;
  };

  Trigger.prototype.isMouseEnterToShow = function isMouseEnterToShow() {
    var _props4 = this.props,
        action = _props4.action,
        showAction = _props4.showAction;
    return action.indexOf('hover') !== -1 || showAction.indexOf('mouseEnter') !== -1;
  };

  Trigger.prototype.isMouseLeaveToHide = function isMouseLeaveToHide() {
    var _props5 = this.props,
        action = _props5.action,
        hideAction = _props5.hideAction;
    return action.indexOf('hover') !== -1 || hideAction.indexOf('mouseLeave') !== -1;
  };

  Trigger.prototype.isFocusToShow = function isFocusToShow() {
    var _props6 = this.props,
        action = _props6.action,
        showAction = _props6.showAction;
    return action.indexOf('focus') !== -1 || showAction.indexOf('focus') !== -1;
  };

  Trigger.prototype.isBlurToHide = function isBlurToHide() {
    var _props7 = this.props,
        action = _props7.action,
        hideAction = _props7.hideAction;
    return action.indexOf('focus') !== -1 || hideAction.indexOf('blur') !== -1;
  };

  Trigger.prototype.forcePopupAlign = function forcePopupAlign() {
    if (this.state.popupVisible && this._component && this._component.alignInstance) {
      this._component.alignInstance.forceAlign();
    }
  };

  Trigger.prototype.fireEvents = function fireEvents(type, e) {
    var childCallback = this.props.children.props[type];

    if (childCallback) {
      childCallback(e);
    }

    var callback = this.props[type];

    if (callback) {
      callback(e);
    }
  };

  Trigger.prototype.close = function close() {
    this.setPopupVisible(false);
  };

  Trigger.prototype.render = function render() {
    var _this3 = this;

    var popupVisible = this.state.popupVisible;
    var _props8 = this.props,
        children = _props8.children,
        forceRender = _props8.forceRender,
        alignPoint = _props8.alignPoint,
        className = _props8.className;
    var child = react_default.a.Children.only(children);
    var newChildProps = {
      key: 'trigger'
    };

    if (this.isContextMenuToShow()) {
      newChildProps.onContextMenu = this.onContextMenu;
    } else {
      newChildProps.onContextMenu = this.createTwoChains('onContextMenu');
    }

    if (this.isClickToHide() || this.isClickToShow()) {
      newChildProps.onClick = this.onClick;
      newChildProps.onMouseDown = this.onMouseDown;
      newChildProps.onTouchStart = this.onTouchStart;
    } else {
      newChildProps.onClick = this.createTwoChains('onClick');
      newChildProps.onMouseDown = this.createTwoChains('onMouseDown');
      newChildProps.onTouchStart = this.createTwoChains('onTouchStart');
    }

    if (this.isMouseEnterToShow()) {
      newChildProps.onMouseEnter = this.onMouseEnter;

      if (alignPoint) {
        newChildProps.onMouseMove = this.onMouseMove;
      }
    } else {
      newChildProps.onMouseEnter = this.createTwoChains('onMouseEnter');
    }

    if (this.isMouseLeaveToHide()) {
      newChildProps.onMouseLeave = this.onMouseLeave;
    } else {
      newChildProps.onMouseLeave = this.createTwoChains('onMouseLeave');
    }

    if (this.isFocusToShow() || this.isBlurToHide()) {
      newChildProps.onFocus = this.onFocus;
      newChildProps.onBlur = this.onBlur;
    } else {
      newChildProps.onFocus = this.createTwoChains('onFocus');
      newChildProps.onBlur = this.createTwoChains('onBlur');
    }

    var childrenClassName = classnames_default()(child && child.props && child.props.className, className);

    if (childrenClassName) {
      newChildProps.className = childrenClassName;
    }

    var trigger = react_default.a.cloneElement(child, newChildProps);

    if (!IS_REACT_16) {
      return react_default.a.createElement(ContainerRender["a" /* default */], {
        parent: this,
        visible: popupVisible,
        autoMount: false,
        forceRender: forceRender,
        getComponent: this.getComponent,
        getContainer: this.getContainer
      }, function (_ref2) {
        var renderComponent = _ref2.renderComponent;
        _this3.renderComponent = renderComponent;
        return trigger;
      });
    }

    var portal = void 0; // prevent unmounting after it's rendered

    if (popupVisible || this._component || forceRender) {
      portal = react_default.a.createElement(Portal["a" /* default */], {
        key: 'portal',
        getContainer: this.getContainer,
        didUpdate: this.handlePortalUpdate
      }, this.getComponent());
    }

    return [trigger, portal];
  };

  return Trigger;
}(react_default.a.Component);

es_Trigger.propTypes = {
  children: prop_types_default.a.any,
  action: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.arrayOf(prop_types_default.a.string)]),
  showAction: prop_types_default.a.any,
  hideAction: prop_types_default.a.any,
  getPopupClassNameFromAlign: prop_types_default.a.any,
  onPopupVisibleChange: prop_types_default.a.func,
  afterPopupVisibleChange: prop_types_default.a.func,
  popup: prop_types_default.a.oneOfType([prop_types_default.a.node, prop_types_default.a.func]).isRequired,
  popupStyle: prop_types_default.a.object,
  prefixCls: prop_types_default.a.string,
  popupClassName: prop_types_default.a.string,
  className: prop_types_default.a.string,
  popupPlacement: prop_types_default.a.string,
  builtinPlacements: prop_types_default.a.object,
  popupTransitionName: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.object]),
  popupAnimation: prop_types_default.a.any,
  mouseEnterDelay: prop_types_default.a.number,
  mouseLeaveDelay: prop_types_default.a.number,
  zIndex: prop_types_default.a.number,
  focusDelay: prop_types_default.a.number,
  blurDelay: prop_types_default.a.number,
  getPopupContainer: prop_types_default.a.func,
  getDocument: prop_types_default.a.func,
  forceRender: prop_types_default.a.bool,
  destroyPopupOnHide: prop_types_default.a.bool,
  mask: prop_types_default.a.bool,
  maskClosable: prop_types_default.a.bool,
  onPopupAlign: prop_types_default.a.func,
  popupAlign: prop_types_default.a.object,
  popupVisible: prop_types_default.a.bool,
  defaultPopupVisible: prop_types_default.a.bool,
  maskTransitionName: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.object]),
  maskAnimation: prop_types_default.a.string,
  stretch: prop_types_default.a.string,
  alignPoint: prop_types_default.a.bool // Maybe we can support user pass position in the future

};
es_Trigger.contextTypes = contextTypes;
es_Trigger.childContextTypes = contextTypes;
es_Trigger.defaultProps = {
  prefixCls: 'rc-trigger-popup',
  getPopupClassNameFromAlign: returnEmptyString,
  getDocument: returnDocument,
  onPopupVisibleChange: noop,
  afterPopupVisibleChange: noop,
  onPopupAlign: noop,
  popupClassName: '',
  mouseEnterDelay: 0,
  mouseLeaveDelay: 0.1,
  focusDelay: 0,
  blurDelay: 0.15,
  popupStyle: {},
  destroyPopupOnHide: false,
  popupAlign: {},
  defaultPopupVisible: false,
  mask: false,
  maskClosable: true,
  action: [],
  showAction: [],
  hideAction: []
};

var es_initialiseProps = function _initialiseProps() {
  var _this4 = this;

  this.onMouseEnter = function (e) {
    var mouseEnterDelay = _this4.props.mouseEnterDelay;

    _this4.fireEvents('onMouseEnter', e);

    _this4.delaySetPopupVisible(true, mouseEnterDelay, mouseEnterDelay ? null : e);
  };

  this.onMouseMove = function (e) {
    _this4.fireEvents('onMouseMove', e);

    _this4.setPoint(e);
  };

  this.onMouseLeave = function (e) {
    _this4.fireEvents('onMouseLeave', e);

    _this4.delaySetPopupVisible(false, _this4.props.mouseLeaveDelay);
  };

  this.onPopupMouseEnter = function () {
    _this4.clearDelayTimer();
  };

  this.onPopupMouseLeave = function (e) {
    // https://github.com/react-component/trigger/pull/13
    // react bug?
    if (e.relatedTarget && !e.relatedTarget.setTimeout && _this4._component && _this4._component.getPopupDomNode && Object(contains["a" /* default */])(_this4._component.getPopupDomNode(), e.relatedTarget)) {
      return;
    }

    _this4.delaySetPopupVisible(false, _this4.props.mouseLeaveDelay);
  };

  this.onFocus = function (e) {
    _this4.fireEvents('onFocus', e); // incase focusin and focusout


    _this4.clearDelayTimer();

    if (_this4.isFocusToShow()) {
      _this4.focusTime = Date.now();

      _this4.delaySetPopupVisible(true, _this4.props.focusDelay);
    }
  };

  this.onMouseDown = function (e) {
    _this4.fireEvents('onMouseDown', e);

    _this4.preClickTime = Date.now();
  };

  this.onTouchStart = function (e) {
    _this4.fireEvents('onTouchStart', e);

    _this4.preTouchTime = Date.now();
  };

  this.onBlur = function (e) {
    _this4.fireEvents('onBlur', e);

    _this4.clearDelayTimer();

    if (_this4.isBlurToHide()) {
      _this4.delaySetPopupVisible(false, _this4.props.blurDelay);
    }
  };

  this.onContextMenu = function (e) {
    e.preventDefault();

    _this4.fireEvents('onContextMenu', e);

    _this4.setPopupVisible(true, e);
  };

  this.onContextMenuClose = function () {
    if (_this4.isContextMenuToShow()) {
      _this4.close();
    }
  };

  this.onClick = function (event) {
    _this4.fireEvents('onClick', event); // focus will trigger click


    if (_this4.focusTime) {
      var preTime = void 0;

      if (_this4.preClickTime && _this4.preTouchTime) {
        preTime = Math.min(_this4.preClickTime, _this4.preTouchTime);
      } else if (_this4.preClickTime) {
        preTime = _this4.preClickTime;
      } else if (_this4.preTouchTime) {
        preTime = _this4.preTouchTime;
      }

      if (Math.abs(preTime - _this4.focusTime) < 20) {
        return;
      }

      _this4.focusTime = 0;
    }

    _this4.preClickTime = 0;
    _this4.preTouchTime = 0; // Only prevent default when all the action is click.
    // https://github.com/ant-design/ant-design/issues/17043
    // https://github.com/ant-design/ant-design/issues/17291

    if (_this4.isClickToShow() && (_this4.isClickToHide() || _this4.isBlurToHide()) && event && event.preventDefault) {
      event.preventDefault();
    }

    var nextVisible = !_this4.state.popupVisible;

    if (_this4.isClickToHide() && !nextVisible || nextVisible && _this4.isClickToShow()) {
      _this4.setPopupVisible(!_this4.state.popupVisible, event);
    }
  };

  this.onPopupMouseDown = function () {
    var _context$rcTrigger = _this4.context.rcTrigger,
        rcTrigger = _context$rcTrigger === undefined ? {} : _context$rcTrigger;
    _this4.hasPopupMouseDown = true;
    clearTimeout(_this4.mouseDownTimeout);
    _this4.mouseDownTimeout = setTimeout(function () {
      _this4.hasPopupMouseDown = false;
    }, 0);

    if (rcTrigger.onPopupMouseDown) {
      rcTrigger.onPopupMouseDown.apply(rcTrigger, arguments);
    }
  };

  this.onDocumentClick = function (event) {
    if (_this4.props.mask && !_this4.props.maskClosable) {
      return;
    }

    var target = event.target;
    var root = Object(react_dom["findDOMNode"])(_this4);

    if (!Object(contains["a" /* default */])(root, target) && !_this4.hasPopupMouseDown) {
      _this4.close();
    }
  };

  this.getRootDomNode = function () {
    return Object(react_dom["findDOMNode"])(_this4);
  };

  this.getPopupClassNameFromAlign = function (align) {
    var className = [];
    var _props9 = _this4.props,
        popupPlacement = _props9.popupPlacement,
        builtinPlacements = _props9.builtinPlacements,
        prefixCls = _props9.prefixCls,
        alignPoint = _props9.alignPoint,
        getPopupClassNameFromAlign = _props9.getPopupClassNameFromAlign;

    if (popupPlacement && builtinPlacements) {
      className.push(getAlignPopupClassName(builtinPlacements, prefixCls, align, alignPoint));
    }

    if (getPopupClassNameFromAlign) {
      className.push(getPopupClassNameFromAlign(align));
    }

    return className.join(' ');
  };

  this.getComponent = function () {
    var _props10 = _this4.props,
        prefixCls = _props10.prefixCls,
        destroyPopupOnHide = _props10.destroyPopupOnHide,
        popupClassName = _props10.popupClassName,
        action = _props10.action,
        onPopupAlign = _props10.onPopupAlign,
        popupAnimation = _props10.popupAnimation,
        popupTransitionName = _props10.popupTransitionName,
        popupStyle = _props10.popupStyle,
        mask = _props10.mask,
        maskAnimation = _props10.maskAnimation,
        maskTransitionName = _props10.maskTransitionName,
        zIndex = _props10.zIndex,
        popup = _props10.popup,
        stretch = _props10.stretch,
        alignPoint = _props10.alignPoint;
    var _state = _this4.state,
        popupVisible = _state.popupVisible,
        point = _state.point;

    var align = _this4.getPopupAlign();

    var mouseProps = {};

    if (_this4.isMouseEnterToShow()) {
      mouseProps.onMouseEnter = _this4.onPopupMouseEnter;
    }

    if (_this4.isMouseLeaveToHide()) {
      mouseProps.onMouseLeave = _this4.onPopupMouseLeave;
    }

    mouseProps.onMouseDown = _this4.onPopupMouseDown;
    mouseProps.onTouchStart = _this4.onPopupMouseDown;
    return react_default.a.createElement(es_Popup, extends_default()({
      prefixCls: prefixCls,
      destroyPopupOnHide: destroyPopupOnHide,
      visible: popupVisible,
      point: alignPoint && point,
      className: popupClassName,
      action: action,
      align: align,
      onAlign: onPopupAlign,
      animation: popupAnimation,
      getClassNameFromAlign: _this4.getPopupClassNameFromAlign
    }, mouseProps, {
      stretch: stretch,
      getRootDomNode: _this4.getRootDomNode,
      style: popupStyle,
      mask: mask,
      zIndex: zIndex,
      transitionName: popupTransitionName,
      maskAnimation: maskAnimation,
      maskTransitionName: maskTransitionName,
      ref: _this4.savePopup
    }), typeof popup === 'function' ? popup() : popup);
  };

  this.getContainer = function () {
    var props = _this4.props;
    var popupContainer = document.createElement('div'); // Make sure default popup container will never cause scrollbar appearing
    // https://github.com/react-component/trigger/issues/41

    popupContainer.style.position = 'absolute';
    popupContainer.style.top = '0';
    popupContainer.style.left = '0';
    popupContainer.style.width = '100%';
    var mountNode = props.getPopupContainer ? props.getPopupContainer(Object(react_dom["findDOMNode"])(_this4)) : props.getDocument().body;
    mountNode.appendChild(popupContainer);
    return popupContainer;
  };

  this.setPoint = function (point) {
    var alignPoint = _this4.props.alignPoint;
    if (!alignPoint || !point) return;

    _this4.setState({
      point: {
        pageX: point.pageX,
        pageY: point.pageY
      }
    });
  };

  this.handlePortalUpdate = function () {
    if (_this4.state.prevPopupVisible !== _this4.state.popupVisible) {
      _this4.props.afterPopupVisibleChange(_this4.state.popupVisible);
    }
  };

  this.savePopup = function (node) {
    _this4._component = node;
  };
};

Object(react_lifecycles_compat["polyfill"])(es_Trigger);
/* harmony default export */ var rc_trigger_es = __webpack_exports__["a"] = (es_Trigger);

/***/ }),

/***/ "oV81":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return capitalize; });
var ping = function ping(callback) {
  var url = 'https://private-a' + 'lipay' + 'objects.alip' + 'ay.com/alip' + 'ay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png';
  var img = new Image();
  var done = false;

  var finish = function finish(status) {
    if (!done) {
      done = true;
      img.src = '';
      callback(status);
    }
  };

  img.onload = function () {
    return finish('responded');
  };

  img.onerror = function () {
    return finish('error');
  };

  img.src = url;
  return setTimeout(function () {
    return finish('timeout');
  }, 1500);
};
var capitalize = function capitalize(s) {
  if (typeof s !== 'string') {
    return '';
  }

  return s.charAt(0).toUpperCase() + s.slice(1);
};

/***/ }),

/***/ "sD32":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "tvu5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutContext; });
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9p7t");
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("V7cS");
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("PAbq");
/* harmony import */ var core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("1qKx");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("5hJT");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_array_is_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("+3V6");
/* harmony import */ var core_js_modules_es6_array_is_array__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_is_array__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("lQyR");
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("YhIr");
/* harmony import */ var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("4aJ6");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("M/4x");
/* harmony import */ var core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("t91x");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("W1QL");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("d3/y");
/* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("+jjx");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("ABKx");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("mXGw");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("8Jek");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _ant_design_create_react_context__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("1wI9");
/* harmony import */ var _ant_design_create_react_context__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_ant_design_create_react_context__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("Bfez");
















function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





var LayoutContext = _ant_design_create_react_context__WEBPACK_IMPORTED_MODULE_17___default()({
  siderHook: {
    addSider: function addSider() {
      return null;
    },
    removeSider: function removeSider() {
      return null;
    }
  }
});

function generator(_ref) {
  var suffixCls = _ref.suffixCls,
      tagName = _ref.tagName;
  return function (BasicComponent) {
    return (
      /*#__PURE__*/
      function (_React$Component) {
        _inherits(Adapter, _React$Component);

        function Adapter() {
          var _this;

          _classCallCheck(this, Adapter);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(Adapter).apply(this, arguments));

          _this.renderComponent = function (_ref2) {
            var getPrefixCls = _ref2.getPrefixCls;
            var customizePrefixCls = _this.props.prefixCls;
            var prefixCls = getPrefixCls(suffixCls, customizePrefixCls);
            return react__WEBPACK_IMPORTED_MODULE_15__["createElement"](BasicComponent, _extends({
              prefixCls: prefixCls,
              tagName: tagName
            }, _this.props));
          };

          return _this;
        }

        _createClass(Adapter, [{
          key: "render",
          value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_15__["createElement"](_config_provider__WEBPACK_IMPORTED_MODULE_18__[/* ConfigConsumer */ "a"], null, this.renderComponent);
          }
        }]);

        return Adapter;
      }(react__WEBPACK_IMPORTED_MODULE_15__["Component"])
    );
  };
}

var Basic = function Basic(props) {
  var prefixCls = props.prefixCls,
      className = props.className,
      children = props.children,
      tagName = props.tagName,
      others = __rest(props, ["prefixCls", "className", "children", "tagName"]);

  var classString = classnames__WEBPACK_IMPORTED_MODULE_16___default()(className, prefixCls);
  return react__WEBPACK_IMPORTED_MODULE_15__["createElement"](tagName, _extends({
    className: classString
  }, others), children);
};

var BasicLayout =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(BasicLayout, _React$Component2);

  function BasicLayout() {
    var _this2;

    _classCallCheck(this, BasicLayout);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(BasicLayout).apply(this, arguments));
    _this2.state = {
      siders: []
    };
    return _this2;
  }

  _createClass(BasicLayout, [{
    key: "getSiderHook",
    value: function getSiderHook() {
      var _this3 = this;

      return {
        addSider: function addSider(id) {
          _this3.setState(function (state) {
            return {
              siders: [].concat(_toConsumableArray(state.siders), [id])
            };
          });
        },
        removeSider: function removeSider(id) {
          _this3.setState(function (state) {
            return {
              siders: state.siders.filter(function (currentId) {
                return currentId !== id;
              })
            };
          });
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _a = this.props,
          prefixCls = _a.prefixCls,
          className = _a.className,
          children = _a.children,
          hasSider = _a.hasSider,
          Tag = _a.tagName,
          others = __rest(_a, ["prefixCls", "className", "children", "hasSider", "tagName"]);

      var classString = classnames__WEBPACK_IMPORTED_MODULE_16___default()(className, prefixCls, _defineProperty({}, "".concat(prefixCls, "-has-sider"), typeof hasSider === 'boolean' ? hasSider : this.state.siders.length > 0));
      return react__WEBPACK_IMPORTED_MODULE_15__["createElement"](LayoutContext.Provider, {
        value: {
          siderHook: this.getSiderHook()
        }
      }, react__WEBPACK_IMPORTED_MODULE_15__["createElement"](Tag, _extends({
        className: classString
      }, others), children));
    }
  }]);

  return BasicLayout;
}(react__WEBPACK_IMPORTED_MODULE_15__["Component"]);

var Layout = generator({
  suffixCls: 'layout',
  tagName: 'section'
})(BasicLayout);
var Header = generator({
  suffixCls: 'layout-header',
  tagName: 'header'
})(Basic);
var Footer = generator({
  suffixCls: 'layout-footer',
  tagName: 'footer'
})(Basic);
var Content = generator({
  suffixCls: 'layout-content',
  tagName: 'main'
})(Basic);
Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;
/* harmony default export */ __webpack_exports__["b"] = (Layout);

/***/ }),

/***/ "uSgx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("d3/y");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storeShape = undefined;

var _propTypes = __webpack_require__("W0B4");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var storeShape = exports.storeShape = _propTypes2["default"].shape({
  subscribe: _propTypes2["default"].func.isRequired,
  setState: _propTypes2["default"].func.isRequired,
  getState: _propTypes2["default"].func.isRequired
});

/***/ }),

/***/ "v5c9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.index-of.js
var es6_array_index_of = __webpack_require__("V7cS");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__("4aJ6");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.date.to-string.js
var es6_date_to_string = __webpack_require__("M/4x");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__("t91x");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.object.create.js
var es6_object_create = __webpack_require__("PAbq");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.object.set-prototype-of.js
var es6_object_set_prototype_of = __webpack_require__("1qKx");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.object.define-property.js
var es6_object_define_property = __webpack_require__("d3/y");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("5hJT");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__("+jjx");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__("ABKx");

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__("mXGw");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.is-array.js
var es6_array_is_array = __webpack_require__("+3V6");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.object.define-properties.js
var es6_object_define_properties = __webpack_require__("6/FK");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es7.object.get-own-property-descriptors.js
var es7_object_get_own_property_descriptors = __webpack_require__("2Tod");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.for-each.js
var es6_array_for_each = __webpack_require__("7lGJ");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.filter.js
var es6_array_filter = __webpack_require__("9p7t");

// EXTERNAL MODULE: ../node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("W1QL");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("K/PF");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("75LO");

// EXTERNAL MODULE: ../node_modules/mini-store/lib/index.js
var lib = __webpack_require__("zSCU");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.map.js
var es6_array_map = __webpack_require__("yIlq");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.function.bind.js
var es6_function_bind = __webpack_require__("o7PZ");

// EXTERNAL MODULE: ../node_modules/rc-util/es/KeyCode.js
var KeyCode = __webpack_require__("zAXs");

// EXTERNAL MODULE: ../node_modules/rc-util/es/createChainedFunction.js
var createChainedFunction = __webpack_require__("eDOA");

// EXTERNAL MODULE: ../node_modules/shallowequal/index.js
var shallowequal = __webpack_require__("F56x");
var shallowequal_default = /*#__PURE__*/__webpack_require__.n(shallowequal);

// EXTERNAL MODULE: ../node_modules/classnames/index.js
var classnames = __webpack_require__("8Jek");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.find.js
var es6_array_find = __webpack_require__("it7j");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("asZ9");

// CONCATENATED MODULE: ../node_modules/rc-menu/es/utils/isMobile.js
















function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
} // MIT License from https://github.com/kaimallea/isMobile


var applePhone = /iPhone/i;
var appleIpod = /iPod/i;
var appleTablet = /iPad/i;
var androidPhone = /\bAndroid(?:.+)Mobile\b/i; // Match 'Android' AND 'Mobile'

var androidTablet = /Android/i;
var amazonPhone = /\bAndroid(?:.+)SD4930UR\b/i;
var amazonTablet = /\bAndroid(?:.+)(?:KF[A-Z]{2,4})\b/i;
var windowsPhone = /Windows Phone/i;
var windowsTablet = /\bWindows(?:.+)ARM\b/i; // Match 'Windows' AND 'ARM'

var otherBlackberry = /BlackBerry/i;
var otherBlackberry10 = /BB10/i;
var otherOpera = /Opera Mini/i;
var otherChrome = /\b(CriOS|Chrome)(?:.+)Mobile/i;
var otherFirefox = /Mobile(?:.+)Firefox\b/i; // Match 'Mobile' AND 'Firefox'

function match(regex, userAgent) {
  return regex.test(userAgent);
}

function isMobile(userAgent) {
  var ua = userAgent || (typeof navigator !== 'undefined' ? navigator.userAgent : ''); // Facebook mobile app's integrated browser adds a bunch of strings that
  // match everything. Strip it out if it exists.

  var tmp = ua.split('[FBAN');

  if (typeof tmp[1] !== 'undefined') {
    var _tmp = tmp;

    var _tmp2 = _slicedToArray(_tmp, 1);

    ua = _tmp2[0];
  } // Twitter mobile app's integrated browser on iPad adds a "Twitter for
  // iPhone" string. Same probably happens on other tablet platforms.
  // This will confuse detection so strip it out if it exists.


  tmp = ua.split('Twitter');

  if (typeof tmp[1] !== 'undefined') {
    var _tmp3 = tmp;

    var _tmp4 = _slicedToArray(_tmp3, 1);

    ua = _tmp4[0];
  }

  var result = {
    apple: {
      phone: match(applePhone, ua) && !match(windowsPhone, ua),
      ipod: match(appleIpod, ua),
      tablet: !match(applePhone, ua) && match(appleTablet, ua) && !match(windowsPhone, ua),
      device: (match(applePhone, ua) || match(appleIpod, ua) || match(appleTablet, ua)) && !match(windowsPhone, ua)
    },
    amazon: {
      phone: match(amazonPhone, ua),
      tablet: !match(amazonPhone, ua) && match(amazonTablet, ua),
      device: match(amazonPhone, ua) || match(amazonTablet, ua)
    },
    android: {
      phone: !match(windowsPhone, ua) && match(amazonPhone, ua) || !match(windowsPhone, ua) && match(androidPhone, ua),
      tablet: !match(windowsPhone, ua) && !match(amazonPhone, ua) && !match(androidPhone, ua) && (match(amazonTablet, ua) || match(androidTablet, ua)),
      device: !match(windowsPhone, ua) && (match(amazonPhone, ua) || match(amazonTablet, ua) || match(androidPhone, ua) || match(androidTablet, ua)) || match(/\bokhttp\b/i, ua)
    },
    windows: {
      phone: match(windowsPhone, ua),
      tablet: match(windowsTablet, ua),
      device: match(windowsPhone, ua) || match(windowsTablet, ua)
    },
    other: {
      blackberry: match(otherBlackberry, ua),
      blackberry10: match(otherBlackberry10, ua),
      opera: match(otherOpera, ua),
      firefox: match(otherFirefox, ua),
      chrome: match(otherChrome, ua),
      device: match(otherBlackberry, ua) || match(otherBlackberry10, ua) || match(otherOpera, ua) || match(otherFirefox, ua) || match(otherChrome, ua)
    },
    // Additional
    any: null,
    phone: null,
    tablet: null
  };
  result.any = result.apple.device || result.android.device || result.windows.device || result.other.device; // excludes 'other' devices and ipods, targeting touchscreen phones

  result.phone = result.apple.phone || result.android.phone || result.windows.phone;
  result.tablet = result.apple.tablet || result.android.tablet || result.windows.tablet;
  return result;
}

var defaultResult = _objectSpread({}, isMobile(), {
  isMobile: isMobile
});

/* harmony default export */ var utils_isMobile = (defaultResult);
// CONCATENATED MODULE: ../node_modules/rc-menu/es/util.js






function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}



function noop() {}
function getKeyFromChildrenIndex(child, menuEventKey, index) {
  var prefix = menuEventKey || '';
  return child.key || "".concat(prefix, "item_").concat(index);
}
function getMenuIdFromSubMenuEventKey(eventKey) {
  return "".concat(eventKey, "-menu-");
}
function loopMenuItem(children, cb) {
  var index = -1;
  react["Children"].forEach(children, function (c) {
    index += 1;

    if (c && c.type && c.type.isMenuItemGroup) {
      react["Children"].forEach(c.props.children, function (c2) {
        index += 1;
        cb(c2, index);
      });
    } else {
      cb(c, index);
    }
  });
}
function loopMenuItemRecursively(children, keys, ret) {
  /* istanbul ignore if */
  if (!children || ret.find) {
    return;
  }

  react["Children"].forEach(children, function (c) {
    if (c) {
      var construct = c.type;

      if (!construct || !(construct.isSubMenu || construct.isMenuItem || construct.isMenuItemGroup)) {
        return;
      }

      if (keys.indexOf(c.key) !== -1) {
        ret.find = true;
      } else if (c.props.children) {
        loopMenuItemRecursively(c.props.children, keys, ret);
      }
    }
  });
}
var menuAllProps = ['defaultSelectedKeys', 'selectedKeys', 'defaultOpenKeys', 'openKeys', 'mode', 'getPopupContainer', 'onSelect', 'onDeselect', 'onDestroy', 'openTransitionName', 'openAnimation', 'subMenuOpenDelay', 'subMenuCloseDelay', 'forceSubMenuRender', 'triggerSubMenuAction', 'level', 'selectable', 'multiple', 'onOpenChange', 'visible', 'focusable', 'defaultActiveFirst', 'prefixCls', 'inlineIndent', 'parentMenu', 'title', 'rootPrefixCls', 'eventKey', 'active', 'onItemHover', 'onTitleMouseEnter', 'onTitleMouseLeave', 'onTitleClick', 'popupAlign', 'popupOffset', 'isOpen', 'renderMenuItem', 'manualRef', 'subMenuKey', 'disabled', 'index', 'isSelected', 'store', 'activeKey', 'builtinPlacements', 'overflowedIndicator', 'motion', // the following keys found need to be removed from test regression
'attribute', 'value', 'popupClassName', 'inlineCollapsed', 'menu', 'theme', 'itemIcon', 'expandIcon']; // ref: https://github.com/ant-design/ant-design/issues/14007
// ref: https://bugs.chromium.org/p/chromium/issues/detail?id=360889
// getBoundingClientRect return the full precision value, which is
// not the same behavior as on chrome. Set the precision to 6 to
// unify their behavior

var getWidth = function getWidth(elem) {
  var width = elem && typeof elem.getBoundingClientRect === 'function' && elem.getBoundingClientRect().width;

  if (width) {
    width = +width.toFixed(6);
  }

  return width || 0;
};
var setStyle = function setStyle(elem, styleProperty, value) {
  if (elem && _typeof(elem.style) === 'object') {
    elem.style[styleProperty] = value;
  }
};
var util_isMobileDevice = function isMobileDevice() {
  return utils_isMobile.any;
};
// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.reduce.js
var es6_array_reduce = __webpack_require__("3y5y");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__("lQyR");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.from.js
var es6_array_from = __webpack_require__("YhIr");

// EXTERNAL MODULE: ../node_modules/react-dom/index.js
var react_dom = __webpack_require__("xARA");

// EXTERNAL MODULE: ../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js
var ResizeObserver_es = __webpack_require__("iXzu");

// EXTERNAL MODULE: ../node_modules/rc-trigger/es/index.js + 8 modules
var es = __webpack_require__("mPTt");

// EXTERNAL MODULE: ../node_modules/babel-runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("TcPG");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ../node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("Kz1y");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ../node_modules/babel-runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("Zv/C");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ../node_modules/babel-runtime/helpers/createClass.js
var createClass = __webpack_require__("2lBV");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ../node_modules/babel-runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("Dkg+");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ../node_modules/babel-runtime/helpers/inherits.js
var inherits = __webpack_require__("Gjrs");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__("W0B4");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./.cache/react-lifecycles-compat.js
var react_lifecycles_compat = __webpack_require__("94VI");

// EXTERNAL MODULE: ../node_modules/rc-util/es/Dom/findDOMNode.js
var findDOMNode = __webpack_require__("vXvS");

// EXTERNAL MODULE: ../node_modules/raf/index.js
var raf = __webpack_require__("rQBY");
var raf_default = /*#__PURE__*/__webpack_require__.n(raf);

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("Z8gF");

// CONCATENATED MODULE: ../node_modules/rc-animate/es/util/motion.js





var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement); // ================= Transition =================
// Event wrapper. Copy from react source code

function makePrefixMap(styleProp, eventName) {
  var prefixes = {};
  prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
  prefixes['Webkit' + styleProp] = 'webkit' + eventName;
  prefixes['Moz' + styleProp] = 'moz' + eventName;
  prefixes['ms' + styleProp] = 'MS' + eventName;
  prefixes['O' + styleProp] = 'o' + eventName.toLowerCase();
  return prefixes;
}

function getVendorPrefixes(domSupport, win) {
  var prefixes = {
    animationend: makePrefixMap('Animation', 'AnimationEnd'),
    transitionend: makePrefixMap('Transition', 'TransitionEnd')
  };

  if (domSupport) {
    if (!('AnimationEvent' in win)) {
      delete prefixes.animationend.animation;
    }

    if (!('TransitionEvent' in win)) {
      delete prefixes.transitionend.transition;
    }
  }

  return prefixes;
}
var vendorPrefixes = getVendorPrefixes(canUseDOM, typeof window !== 'undefined' ? window : {});
var motion_style = {};

if (canUseDOM) {
  motion_style = document.createElement('div').style;
}

var prefixedEventNames = {};
function getVendorPrefixedEventName(eventName) {
  if (prefixedEventNames[eventName]) {
    return prefixedEventNames[eventName];
  }

  var prefixMap = vendorPrefixes[eventName];

  if (prefixMap) {
    var stylePropList = Object.keys(prefixMap);
    var len = stylePropList.length;

    for (var i = 0; i < len; i += 1) {
      var styleProp = stylePropList[i];

      if (Object.prototype.hasOwnProperty.call(prefixMap, styleProp) && styleProp in motion_style) {
        prefixedEventNames[eventName] = prefixMap[styleProp];
        return prefixedEventNames[eventName];
      }
    }
  }

  return '';
}
var animationEndName = getVendorPrefixedEventName('animationend');
var transitionEndName = getVendorPrefixedEventName('transitionend');
var supportTransition = !!(animationEndName && transitionEndName);
function getTransitionName(transitionName, transitionType) {
  if (!transitionName) return null;

  if (typeof transitionName === 'object') {
    var type = transitionType.replace(/-\w/g, function (match) {
      return match[1].toUpperCase();
    });
    return transitionName[type];
  }

  return transitionName + '-' + transitionType;
}
// CONCATENATED MODULE: ../node_modules/rc-animate/es/CSSMotion.js






/* eslint-disable react/default-props-match-prop-types, react/no-multi-comp */








var STATUS_NONE = 'none';
var STATUS_APPEAR = 'appear';
var STATUS_ENTER = 'enter';
var STATUS_LEAVE = 'leave';
var MotionPropTypes = {
  eventProps: prop_types_default.a.object,
  // Internal usage. Only pass by CSSMotionList
  visible: prop_types_default.a.bool,
  children: prop_types_default.a.func,
  motionName: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.object]),
  motionAppear: prop_types_default.a.bool,
  motionEnter: prop_types_default.a.bool,
  motionLeave: prop_types_default.a.bool,
  motionLeaveImmediately: prop_types_default.a.bool,
  // Trigger leave motion immediately
  removeOnLeave: prop_types_default.a.bool,
  leavedClassName: prop_types_default.a.string,
  onAppearStart: prop_types_default.a.func,
  onAppearActive: prop_types_default.a.func,
  onAppearEnd: prop_types_default.a.func,
  onEnterStart: prop_types_default.a.func,
  onEnterActive: prop_types_default.a.func,
  onEnterEnd: prop_types_default.a.func,
  onLeaveStart: prop_types_default.a.func,
  onLeaveActive: prop_types_default.a.func,
  onLeaveEnd: prop_types_default.a.func
};
/**
 * `transitionSupport` is used for none transition test case.
 * Default we use browser transition event support check.
 */

function genCSSMotion(config) {
  var transitionSupport = config;
  var forwardRef = !!react_default.a.forwardRef;

  if (typeof config === 'object') {
    transitionSupport = config.transitionSupport;
    forwardRef = 'forwardRef' in config ? config.forwardRef : forwardRef;
  }

  function isSupportTransition(props) {
    return !!(props.motionName && transitionSupport);
  }

  var CSSMotion = function (_React$Component) {
    inherits_default()(CSSMotion, _React$Component);

    function CSSMotion() {
      classCallCheck_default()(this, CSSMotion);

      var _this = possibleConstructorReturn_default()(this, (CSSMotion.__proto__ || Object.getPrototypeOf(CSSMotion)).call(this));

      _this.onDomUpdate = function () {
        var _this$state = _this.state,
            status = _this$state.status,
            newStatus = _this$state.newStatus;
        var _this$props = _this.props,
            onAppearStart = _this$props.onAppearStart,
            onEnterStart = _this$props.onEnterStart,
            onLeaveStart = _this$props.onLeaveStart,
            onAppearActive = _this$props.onAppearActive,
            onEnterActive = _this$props.onEnterActive,
            onLeaveActive = _this$props.onLeaveActive,
            motionAppear = _this$props.motionAppear,
            motionEnter = _this$props.motionEnter,
            motionLeave = _this$props.motionLeave;

        if (!isSupportTransition(_this.props)) {
          return;
        } // Event injection


        var $ele = _this.getElement();

        if (_this.$cacheEle !== $ele) {
          _this.removeEventListener(_this.$cacheEle);

          _this.addEventListener($ele);

          _this.$cacheEle = $ele;
        } // Init status


        if (newStatus && status === STATUS_APPEAR && motionAppear) {
          _this.updateStatus(onAppearStart, null, null, function () {
            _this.updateActiveStatus(onAppearActive, STATUS_APPEAR);
          });
        } else if (newStatus && status === STATUS_ENTER && motionEnter) {
          _this.updateStatus(onEnterStart, null, null, function () {
            _this.updateActiveStatus(onEnterActive, STATUS_ENTER);
          });
        } else if (newStatus && status === STATUS_LEAVE && motionLeave) {
          _this.updateStatus(onLeaveStart, null, null, function () {
            _this.updateActiveStatus(onLeaveActive, STATUS_LEAVE);
          });
        }
      };

      _this.onMotionEnd = function (event) {
        var _this$state2 = _this.state,
            status = _this$state2.status,
            statusActive = _this$state2.statusActive;
        var _this$props2 = _this.props,
            onAppearEnd = _this$props2.onAppearEnd,
            onEnterEnd = _this$props2.onEnterEnd,
            onLeaveEnd = _this$props2.onLeaveEnd;

        if (status === STATUS_APPEAR && statusActive) {
          _this.updateStatus(onAppearEnd, {
            status: STATUS_NONE
          }, event);
        } else if (status === STATUS_ENTER && statusActive) {
          _this.updateStatus(onEnterEnd, {
            status: STATUS_NONE
          }, event);
        } else if (status === STATUS_LEAVE && statusActive) {
          _this.updateStatus(onLeaveEnd, {
            status: STATUS_NONE
          }, event);
        }
      };

      _this.setNodeRef = function (node) {
        var internalRef = _this.props.internalRef;
        _this.node = node;

        if (typeof internalRef === 'function') {
          internalRef(node);
        } else if (internalRef && 'current' in internalRef) {
          internalRef.current = node;
        }
      };

      _this.getElement = function () {
        return Object(findDOMNode["a" /* default */])(_this.node || _this);
      };

      _this.addEventListener = function ($ele) {
        if (!$ele) return;
        $ele.addEventListener(transitionEndName, _this.onMotionEnd);
        $ele.addEventListener(animationEndName, _this.onMotionEnd);
      };

      _this.removeEventListener = function ($ele) {
        if (!$ele) return;
        $ele.removeEventListener(transitionEndName, _this.onMotionEnd);
        $ele.removeEventListener(animationEndName, _this.onMotionEnd);
      };

      _this.updateStatus = function (styleFunc, additionalState, event, callback) {
        var statusStyle = styleFunc ? styleFunc(_this.getElement(), event) : null;
        if (statusStyle === false || _this._destroyed) return;
        var nextStep = void 0;

        if (callback) {
          nextStep = function nextStep() {
            _this.nextFrame(callback);
          };
        }

        _this.setState(extends_default()({
          statusStyle: typeof statusStyle === 'object' ? statusStyle : null,
          newStatus: false
        }, additionalState), nextStep); // Trigger before next frame & after `componentDidMount`

      };

      _this.updateActiveStatus = function (styleFunc, currentStatus) {
        // `setState` use `postMessage` to trigger at the end of frame.
        // Let's use requestAnimationFrame to update new state in next frame.
        _this.nextFrame(function () {
          var status = _this.state.status;
          if (status !== currentStatus) return;

          _this.updateStatus(styleFunc, {
            statusActive: true
          });
        });
      };

      _this.nextFrame = function (func) {
        _this.cancelNextFrame();

        _this.raf = raf_default()(func);
      };

      _this.cancelNextFrame = function () {
        if (_this.raf) {
          raf_default.a.cancel(_this.raf);
          _this.raf = null;
        }
      };

      _this.state = {
        status: STATUS_NONE,
        statusActive: false,
        newStatus: false,
        statusStyle: null
      };
      _this.$cacheEle = null;
      _this.node = null;
      _this.raf = null;
      return _this;
    }

    createClass_default()(CSSMotion, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.onDomUpdate();
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        this.onDomUpdate();
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._destroyed = true;
        this.removeEventListener(this.$cacheEle);
        this.cancelNextFrame();
      }
    }, {
      key: 'render',
      value: function render() {
        var _classNames;

        var _state = this.state,
            status = _state.status,
            statusActive = _state.statusActive,
            statusStyle = _state.statusStyle;
        var _props = this.props,
            children = _props.children,
            motionName = _props.motionName,
            visible = _props.visible,
            removeOnLeave = _props.removeOnLeave,
            leavedClassName = _props.leavedClassName,
            eventProps = _props.eventProps;
        if (!children) return null;

        if (status === STATUS_NONE || !isSupportTransition(this.props)) {
          if (visible) {
            return children(extends_default()({}, eventProps), this.setNodeRef);
          } else if (!removeOnLeave) {
            return children(extends_default()({}, eventProps, {
              className: leavedClassName
            }), this.setNodeRef);
          }

          return null;
        }

        return children(extends_default()({}, eventProps, {
          className: classnames_default()((_classNames = {}, defineProperty_default()(_classNames, getTransitionName(motionName, status), status !== STATUS_NONE), defineProperty_default()(_classNames, getTransitionName(motionName, status + '-active'), status !== STATUS_NONE && statusActive), defineProperty_default()(_classNames, motionName, typeof motionName === 'string'), _classNames)),
          style: statusStyle
        }), this.setNodeRef);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(props, _ref) {
        var prevProps = _ref.prevProps,
            prevStatus = _ref.status;
        if (!isSupportTransition(props)) return {};
        var visible = props.visible,
            motionAppear = props.motionAppear,
            motionEnter = props.motionEnter,
            motionLeave = props.motionLeave,
            motionLeaveImmediately = props.motionLeaveImmediately;
        var newState = {
          prevProps: props
        }; // Clean up status if prop set to false

        if (prevStatus === STATUS_APPEAR && !motionAppear || prevStatus === STATUS_ENTER && !motionEnter || prevStatus === STATUS_LEAVE && !motionLeave) {
          newState.status = STATUS_NONE;
          newState.statusActive = false;
          newState.newStatus = false;
        } // Appear


        if (!prevProps && visible && motionAppear) {
          newState.status = STATUS_APPEAR;
          newState.statusActive = false;
          newState.newStatus = true;
        } // Enter


        if (prevProps && !prevProps.visible && visible && motionEnter) {
          newState.status = STATUS_ENTER;
          newState.statusActive = false;
          newState.newStatus = true;
        } // Leave


        if (prevProps && prevProps.visible && !visible && motionLeave || !prevProps && motionLeaveImmediately && !visible && motionLeave) {
          newState.status = STATUS_LEAVE;
          newState.statusActive = false;
          newState.newStatus = true;
        }

        return newState;
      }
    }]);

    return CSSMotion;
  }(react_default.a.Component);

  CSSMotion.propTypes = extends_default()({}, MotionPropTypes, {
    internalRef: prop_types_default.a.oneOfType([prop_types_default.a.object, prop_types_default.a.func])
  });
  CSSMotion.defaultProps = {
    visible: true,
    motionEnter: true,
    motionAppear: true,
    motionLeave: true,
    removeOnLeave: true
  };
  Object(react_lifecycles_compat["polyfill"])(CSSMotion);

  if (!forwardRef) {
    return CSSMotion;
  }

  return react_default.a.forwardRef(function (props, ref) {
    return react_default.a.createElement(CSSMotion, extends_default()({
      internalRef: ref
    }, props));
  });
}
/* harmony default export */ var es_CSSMotion = (genCSSMotion(supportTransition));
// CONCATENATED MODULE: ../node_modules/rc-menu/es/placements.js
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};
var placements = {
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -7]
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 7]
  },
  leftTop: {
    points: ['tr', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0]
  },
  rightTop: {
    points: ['tl', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0]
  }
};
/* harmony default export */ var es_placements = (placements);
// CONCATENATED MODULE: ../node_modules/rc-menu/es/SubMenu.js
















function SubMenu_typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    SubMenu_typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    SubMenu_typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return SubMenu_typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (SubMenu_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function SubMenu_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function SubMenu_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      SubMenu_ownKeys(source, true).forEach(function (key) {
        SubMenu_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      SubMenu_ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function SubMenu_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}




 // import Animate from 'rc-animate';







var guid = 0;
var popupPlacementMap = {
  horizontal: 'bottomLeft',
  vertical: 'rightTop',
  'vertical-left': 'rightTop',
  'vertical-right': 'leftTop'
};

var SubMenu_updateDefaultActiveFirst = function updateDefaultActiveFirst(store, eventKey, defaultActiveFirst) {
  var menuId = getMenuIdFromSubMenuEventKey(eventKey);
  var state = store.getState();
  store.setState({
    defaultActiveFirst: SubMenu_objectSpread({}, state.defaultActiveFirst, SubMenu_defineProperty({}, menuId, defaultActiveFirst))
  });
};

var SubMenu_SubMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SubMenu, _React$Component);

  function SubMenu(props) {
    var _this;

    _classCallCheck(this, SubMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SubMenu).call(this, props));

    _this.onDestroy = function (key) {
      _this.props.onDestroy(key);
    };
    /**
     * note:
     *  This legacy code that `onKeyDown` is called by parent instead of dom self.
     *  which need return code to check if this event is handled
     */


    _this.onKeyDown = function (e) {
      var keyCode = e.keyCode;
      var menu = _this.menuInstance;
      var _this$props = _this.props,
          isOpen = _this$props.isOpen,
          store = _this$props.store;

      if (keyCode === KeyCode["a" /* default */].ENTER) {
        _this.onTitleClick(e);

        SubMenu_updateDefaultActiveFirst(store, _this.props.eventKey, true);
        return true;
      }

      if (keyCode === KeyCode["a" /* default */].RIGHT) {
        if (isOpen) {
          menu.onKeyDown(e);
        } else {
          _this.triggerOpenChange(true); // need to update current menu's defaultActiveFirst value


          SubMenu_updateDefaultActiveFirst(store, _this.props.eventKey, true);
        }

        return true;
      }

      if (keyCode === KeyCode["a" /* default */].LEFT) {
        var handled;

        if (isOpen) {
          handled = menu.onKeyDown(e);
        } else {
          return undefined;
        }

        if (!handled) {
          _this.triggerOpenChange(false);

          handled = true;
        }

        return handled;
      }

      if (isOpen && (keyCode === KeyCode["a" /* default */].UP || keyCode === KeyCode["a" /* default */].DOWN)) {
        return menu.onKeyDown(e);
      }

      return undefined;
    };

    _this.onOpenChange = function (e) {
      _this.props.onOpenChange(e);
    };

    _this.onPopupVisibleChange = function (visible) {
      _this.triggerOpenChange(visible, visible ? 'mouseenter' : 'mouseleave');
    };

    _this.onMouseEnter = function (e) {
      var _this$props2 = _this.props,
          key = _this$props2.eventKey,
          onMouseEnter = _this$props2.onMouseEnter,
          store = _this$props2.store;
      SubMenu_updateDefaultActiveFirst(store, _this.props.eventKey, false);
      onMouseEnter({
        key: key,
        domEvent: e
      });
    };

    _this.onMouseLeave = function (e) {
      var _this$props3 = _this.props,
          parentMenu = _this$props3.parentMenu,
          eventKey = _this$props3.eventKey,
          onMouseLeave = _this$props3.onMouseLeave;
      parentMenu.subMenuInstance = _assertThisInitialized(_this);
      onMouseLeave({
        key: eventKey,
        domEvent: e
      });
    };

    _this.onTitleMouseEnter = function (domEvent) {
      var _this$props4 = _this.props,
          key = _this$props4.eventKey,
          onItemHover = _this$props4.onItemHover,
          onTitleMouseEnter = _this$props4.onTitleMouseEnter;
      onItemHover({
        key: key,
        hover: true
      });
      onTitleMouseEnter({
        key: key,
        domEvent: domEvent
      });
    };

    _this.onTitleMouseLeave = function (e) {
      var _this$props5 = _this.props,
          parentMenu = _this$props5.parentMenu,
          eventKey = _this$props5.eventKey,
          onItemHover = _this$props5.onItemHover,
          onTitleMouseLeave = _this$props5.onTitleMouseLeave;
      parentMenu.subMenuInstance = _assertThisInitialized(_this);
      onItemHover({
        key: eventKey,
        hover: false
      });
      onTitleMouseLeave({
        key: eventKey,
        domEvent: e
      });
    };

    _this.onTitleClick = function (e) {
      var _assertThisInitialize = _assertThisInitialized(_this),
          props = _assertThisInitialize.props;

      props.onTitleClick({
        key: props.eventKey,
        domEvent: e
      });

      if (props.triggerSubMenuAction === 'hover') {
        return;
      }

      _this.triggerOpenChange(!props.isOpen, 'click');

      SubMenu_updateDefaultActiveFirst(props.store, _this.props.eventKey, false);
    };

    _this.onSubMenuClick = function (info) {
      // in the case of overflowed submenu
      // onClick is not copied over
      if (typeof _this.props.onClick === 'function') {
        _this.props.onClick(_this.addKeyPath(info));
      }
    };

    _this.onSelect = function (info) {
      _this.props.onSelect(info);
    };

    _this.onDeselect = function (info) {
      _this.props.onDeselect(info);
    };

    _this.getPrefixCls = function () {
      return "".concat(_this.props.rootPrefixCls, "-submenu");
    };

    _this.getActiveClassName = function () {
      return "".concat(_this.getPrefixCls(), "-active");
    };

    _this.getDisabledClassName = function () {
      return "".concat(_this.getPrefixCls(), "-disabled");
    };

    _this.getSelectedClassName = function () {
      return "".concat(_this.getPrefixCls(), "-selected");
    };

    _this.getOpenClassName = function () {
      return "".concat(_this.props.rootPrefixCls, "-submenu-open");
    };

    _this.saveMenuInstance = function (c) {
      // children menu instance
      _this.menuInstance = c;
    };

    _this.addKeyPath = function (info) {
      return SubMenu_objectSpread({}, info, {
        keyPath: (info.keyPath || []).concat(_this.props.eventKey)
      });
    };

    _this.triggerOpenChange = function (open, type) {
      var key = _this.props.eventKey;

      var openChange = function openChange() {
        _this.onOpenChange({
          key: key,
          item: _assertThisInitialized(_this),
          trigger: type,
          open: open
        });
      };

      if (type === 'mouseenter') {
        // make sure mouseenter happen after other menu item's mouseleave
        _this.mouseenterTimeout = setTimeout(function () {
          openChange();
        }, 0);
      } else {
        openChange();
      }
    };

    _this.isChildrenSelected = function () {
      var ret = {
        find: false
      };
      loopMenuItemRecursively(_this.props.children, _this.props.selectedKeys, ret);
      return ret.find;
    };

    _this.isOpen = function () {
      return _this.props.openKeys.indexOf(_this.props.eventKey) !== -1;
    };

    _this.adjustWidth = function () {
      /* istanbul ignore if */
      if (!_this.subMenuTitle || !_this.menuInstance) {
        return;
      }

      var popupMenu = react_dom["findDOMNode"](_this.menuInstance);

      if (popupMenu.offsetWidth >= _this.subMenuTitle.offsetWidth) {
        return;
      }
      /* istanbul ignore next */


      popupMenu.style.minWidth = "".concat(_this.subMenuTitle.offsetWidth, "px");
    };

    _this.saveSubMenuTitle = function (subMenuTitle) {
      _this.subMenuTitle = subMenuTitle;
    };

    var store = props.store,
        eventKey = props.eventKey;

    var _store$getState = store.getState(),
        defaultActiveFirst = _store$getState.defaultActiveFirst;

    _this.isRootMenu = false;
    var value = false;

    if (defaultActiveFirst) {
      value = defaultActiveFirst[eventKey];
    }

    SubMenu_updateDefaultActiveFirst(store, eventKey, value);
    return _this;
  }

  _createClass(SubMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.componentDidUpdate();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this2 = this;

      var _this$props6 = this.props,
          mode = _this$props6.mode,
          parentMenu = _this$props6.parentMenu,
          manualRef = _this$props6.manualRef; // invoke customized ref to expose component to mixin

      if (manualRef) {
        manualRef(this);
      }

      if (mode !== 'horizontal' || !parentMenu.isRootMenu || !this.props.isOpen) {
        return;
      }

      this.minWidthTimeout = setTimeout(function () {
        return _this2.adjustWidth();
      }, 0);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$props7 = this.props,
          onDestroy = _this$props7.onDestroy,
          eventKey = _this$props7.eventKey;

      if (onDestroy) {
        onDestroy(eventKey);
      }
      /* istanbul ignore if */


      if (this.minWidthTimeout) {
        clearTimeout(this.minWidthTimeout);
      }
      /* istanbul ignore if */


      if (this.mouseenterTimeout) {
        clearTimeout(this.mouseenterTimeout);
      }
    }
  }, {
    key: "renderChildren",
    value: function renderChildren(children) {
      var _this3 = this;

      var props = this.props;
      var baseProps = {
        mode: props.mode === 'horizontal' ? 'vertical' : props.mode,
        visible: this.props.isOpen,
        level: props.level + 1,
        inlineIndent: props.inlineIndent,
        focusable: false,
        onClick: this.onSubMenuClick,
        onSelect: this.onSelect,
        onDeselect: this.onDeselect,
        onDestroy: this.onDestroy,
        selectedKeys: props.selectedKeys,
        eventKey: "".concat(props.eventKey, "-menu-"),
        openKeys: props.openKeys,
        motion: props.motion,
        onOpenChange: this.onOpenChange,
        subMenuOpenDelay: props.subMenuOpenDelay,
        parentMenu: this,
        subMenuCloseDelay: props.subMenuCloseDelay,
        forceSubMenuRender: props.forceSubMenuRender,
        triggerSubMenuAction: props.triggerSubMenuAction,
        builtinPlacements: props.builtinPlacements,
        defaultActiveFirst: props.store.getState().defaultActiveFirst[getMenuIdFromSubMenuEventKey(props.eventKey)],
        multiple: props.multiple,
        prefixCls: props.rootPrefixCls,
        id: this.internalMenuId,
        manualRef: this.saveMenuInstance,
        itemIcon: props.itemIcon,
        expandIcon: props.expandIcon
      };
      var haveRendered = this.haveRendered;
      this.haveRendered = true;
      this.haveOpened = this.haveOpened || baseProps.visible || baseProps.forceSubMenuRender; // never rendered not planning to, don't render

      if (!this.haveOpened) {
        return react["createElement"]("div", null);
      } // ================== Motion ==================
      // don't show transition on first rendering (no animation for opened menu)
      // show appear transition if it's not visible (not sure why)
      // show appear transition if it's not inline mode


      var mergedMotion = SubMenu_objectSpread({}, props.motion, {
        leavedClassName: "".concat(props.rootPrefixCls, "-hidden"),
        removeOnLeave: false,
        motionAppear: haveRendered || !baseProps.visible || baseProps.mode !== 'inline'
      });

      return react["createElement"](es_CSSMotion, Object.assign({
        visible: baseProps.visible
      }, mergedMotion), function (_ref) {
        var className = _ref.className,
            style = _ref.style;
        var mergedClassName = classnames_default()("".concat(baseProps.prefixCls, "-sub"), className);
        return react["createElement"](es_SubPopupMenu, Object.assign({}, baseProps, {
          id: _this3.internalMenuId,
          className: mergedClassName,
          style: style
        }), children);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var props = SubMenu_objectSpread({}, this.props);

      var isOpen = props.isOpen;
      var prefixCls = this.getPrefixCls();
      var isInlineMode = props.mode === 'inline';
      var className = classnames_default()(prefixCls, "".concat(prefixCls, "-").concat(props.mode), (_classNames = {}, SubMenu_defineProperty(_classNames, props.className, !!props.className), SubMenu_defineProperty(_classNames, this.getOpenClassName(), isOpen), SubMenu_defineProperty(_classNames, this.getActiveClassName(), props.active || isOpen && !isInlineMode), SubMenu_defineProperty(_classNames, this.getDisabledClassName(), props.disabled), SubMenu_defineProperty(_classNames, this.getSelectedClassName(), this.isChildrenSelected()), _classNames));

      if (!this.internalMenuId) {
        if (props.eventKey) {
          this.internalMenuId = "".concat(props.eventKey, "$Menu");
        } else {
          guid += 1;
          this.internalMenuId = "$__$".concat(guid, "$Menu");
        }
      }

      var mouseEvents = {};
      var titleClickEvents = {};
      var titleMouseEvents = {};

      if (!props.disabled) {
        mouseEvents = {
          onMouseLeave: this.onMouseLeave,
          onMouseEnter: this.onMouseEnter
        }; // only works in title, not outer li

        titleClickEvents = {
          onClick: this.onTitleClick
        };
        titleMouseEvents = {
          onMouseEnter: this.onTitleMouseEnter,
          onMouseLeave: this.onTitleMouseLeave
        };
      }

      var style = {};

      if (isInlineMode) {
        style.paddingLeft = props.inlineIndent * props.level;
      }

      var ariaOwns = {}; // only set aria-owns when menu is open
      // otherwise it would be an invalid aria-owns value
      // since corresponding node cannot be found

      if (this.props.isOpen) {
        ariaOwns = {
          'aria-owns': this.internalMenuId
        };
      } // expand custom icon should NOT be displayed in menu with horizontal mode.


      var icon = null;

      if (props.mode !== 'horizontal') {
        icon = this.props.expandIcon; // ReactNode

        if (typeof this.props.expandIcon === 'function') {
          icon = react["createElement"](this.props.expandIcon, SubMenu_objectSpread({}, this.props));
        }
      }

      var title = react["createElement"]("div", Object.assign({
        ref: this.saveSubMenuTitle,
        style: style,
        className: "".concat(prefixCls, "-title")
      }, titleMouseEvents, titleClickEvents, {
        "aria-expanded": isOpen
      }, ariaOwns, {
        "aria-haspopup": "true",
        title: typeof props.title === 'string' ? props.title : undefined
      }), props.title, icon || react["createElement"]("i", {
        className: "".concat(prefixCls, "-arrow")
      }));
      var children = this.renderChildren(props.children);
      var getPopupContainer = props.parentMenu.isRootMenu ? props.parentMenu.props.getPopupContainer : function (triggerNode) {
        return triggerNode.parentNode;
      };
      var popupPlacement = popupPlacementMap[props.mode];
      var popupAlign = props.popupOffset ? {
        offset: props.popupOffset
      } : {};
      var popupClassName = props.mode === 'inline' ? '' : props.popupClassName;
      var disabled = props.disabled,
          triggerSubMenuAction = props.triggerSubMenuAction,
          subMenuOpenDelay = props.subMenuOpenDelay,
          forceSubMenuRender = props.forceSubMenuRender,
          subMenuCloseDelay = props.subMenuCloseDelay,
          builtinPlacements = props.builtinPlacements;
      menuAllProps.forEach(function (key) {
        return delete props[key];
      }); // Set onClick to null, to ignore propagated onClick event

      delete props.onClick;
      return react["createElement"]("li", Object.assign({}, props, mouseEvents, {
        className: className,
        role: "menuitem"
      }), isInlineMode && title, isInlineMode && children, !isInlineMode && react["createElement"](es["a" /* default */], {
        prefixCls: prefixCls,
        popupClassName: "".concat(prefixCls, "-popup ").concat(popupClassName),
        getPopupContainer: getPopupContainer,
        builtinPlacements: Object.assign({}, es_placements, builtinPlacements),
        popupPlacement: popupPlacement,
        popupVisible: isOpen,
        popupAlign: popupAlign,
        popup: children,
        action: disabled ? [] : [triggerSubMenuAction],
        mouseEnterDelay: subMenuOpenDelay,
        mouseLeaveDelay: subMenuCloseDelay,
        onPopupVisibleChange: this.onPopupVisibleChange,
        forceRender: forceSubMenuRender
      }, title));
    }
  }]);

  return SubMenu;
}(react["Component"]);
SubMenu_SubMenu.defaultProps = {
  onMouseEnter: noop,
  onMouseLeave: noop,
  onTitleMouseEnter: noop,
  onTitleMouseLeave: noop,
  onTitleClick: noop,
  manualRef: noop,
  mode: 'vertical',
  title: ''
};
var connected = Object(lib["connect"])(function (_ref2, _ref3) {
  var openKeys = _ref2.openKeys,
      activeKey = _ref2.activeKey,
      selectedKeys = _ref2.selectedKeys;
  var eventKey = _ref3.eventKey,
      subMenuKey = _ref3.subMenuKey;
  return {
    isOpen: openKeys.indexOf(eventKey) > -1,
    active: activeKey[subMenuKey] === eventKey,
    selectedKeys: selectedKeys
  };
})(SubMenu_SubMenu);
connected.isSubMenu = true;
/* harmony default export */ var es_SubMenu = (connected);
// CONCATENATED MODULE: ../node_modules/rc-menu/es/DOMWrap.js
























function DOMWrap_typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    DOMWrap_typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    DOMWrap_typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return DOMWrap_typeof(obj);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

function DOMWrap_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function DOMWrap_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      DOMWrap_ownKeys(source, true).forEach(function (key) {
        DOMWrap_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      DOMWrap_ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function DOMWrap_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function DOMWrap_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function DOMWrap_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function DOMWrap_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) DOMWrap_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) DOMWrap_defineProperties(Constructor, staticProps);
  return Constructor;
}

function DOMWrap_possibleConstructorReturn(self, call) {
  if (call && (DOMWrap_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return DOMWrap_assertThisInitialized(self);
}

function DOMWrap_getPrototypeOf(o) {
  DOMWrap_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return DOMWrap_getPrototypeOf(o);
}

function DOMWrap_assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function DOMWrap_inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) DOMWrap_setPrototypeOf(subClass, superClass);
}

function DOMWrap_setPrototypeOf(o, p) {
  DOMWrap_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return DOMWrap_setPrototypeOf(o, p);
}






var DOMWrap_canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
var MENUITEM_OVERFLOWED_CLASSNAME = 'menuitem-overflowed';
var FLOAT_PRECISION_ADJUST = 0.5; // Fix ssr

if (DOMWrap_canUseDOM) {
  // eslint-disable-next-line global-require
  __webpack_require__("784N");
}

var DOMWrap_DOMWrap =
/*#__PURE__*/
function (_React$Component) {
  DOMWrap_inherits(DOMWrap, _React$Component);

  function DOMWrap() {
    var _this;

    DOMWrap_classCallCheck(this, DOMWrap);

    _this = DOMWrap_possibleConstructorReturn(this, DOMWrap_getPrototypeOf(DOMWrap).apply(this, arguments));
    _this.resizeObserver = null;
    _this.mutationObserver = null; // original scroll size of the list

    _this.originalTotalWidth = 0; // copy of overflowed items

    _this.overflowedItems = []; // cache item of the original items (so we can track the size and order)

    _this.menuItemSizes = [];
    _this.state = {
      lastVisibleIndex: undefined
    }; // get all valid menuItem nodes

    _this.getMenuItemNodes = function () {
      var prefixCls = _this.props.prefixCls;
      var ul = react_dom["findDOMNode"](DOMWrap_assertThisInitialized(_this));

      if (!ul) {
        return [];
      } // filter out all overflowed indicator placeholder


      return [].slice.call(ul.children).filter(function (node) {
        return node.className.split(' ').indexOf("".concat(prefixCls, "-overflowed-submenu")) < 0;
      });
    };

    _this.getOverflowedSubMenuItem = function (keyPrefix, overflowedItems, renderPlaceholder) {
      var _this$props = _this.props,
          overflowedIndicator = _this$props.overflowedIndicator,
          level = _this$props.level,
          mode = _this$props.mode,
          prefixCls = _this$props.prefixCls,
          theme = _this$props.theme;

      if (level !== 1 || mode !== 'horizontal') {
        return null;
      } // put all the overflowed item inside a submenu
      // with a title of overflow indicator ('...')


      var copy = _this.props.children[0];

      var _copy$props = copy.props,
          throwAway = _copy$props.children,
          title = _copy$props.title,
          propStyle = _copy$props.style,
          rest = _objectWithoutProperties(_copy$props, ["children", "title", "style"]);

      var style = DOMWrap_objectSpread({}, propStyle);

      var key = "".concat(keyPrefix, "-overflowed-indicator");
      var eventKey = "".concat(keyPrefix, "-overflowed-indicator");

      if (overflowedItems.length === 0 && renderPlaceholder !== true) {
        style = DOMWrap_objectSpread({}, style, {
          display: 'none'
        });
      } else if (renderPlaceholder) {
        style = DOMWrap_objectSpread({}, style, {
          visibility: 'hidden',
          // prevent from taking normal dom space
          position: 'absolute'
        });
        key = "".concat(key, "-placeholder");
        eventKey = "".concat(eventKey, "-placeholder");
      }

      var popupClassName = theme ? "".concat(prefixCls, "-").concat(theme) : '';
      var props = {};
      menuAllProps.forEach(function (k) {
        if (rest[k] !== undefined) {
          props[k] = rest[k];
        }
      });
      return react["createElement"](es_SubMenu, Object.assign({
        title: overflowedIndicator,
        className: "".concat(prefixCls, "-overflowed-submenu"),
        popupClassName: popupClassName
      }, props, {
        key: key,
        eventKey: eventKey,
        disabled: false,
        style: style
      }), overflowedItems);
    }; // memorize rendered menuSize


    _this.setChildrenWidthAndResize = function () {
      if (_this.props.mode !== 'horizontal') {
        return;
      }

      var ul = react_dom["findDOMNode"](DOMWrap_assertThisInitialized(_this));

      if (!ul) {
        return;
      }

      var ulChildrenNodes = ul.children;

      if (!ulChildrenNodes || ulChildrenNodes.length === 0) {
        return;
      }

      var lastOverflowedIndicatorPlaceholder = ul.children[ulChildrenNodes.length - 1]; // need last overflowed indicator for calculating length;

      setStyle(lastOverflowedIndicatorPlaceholder, 'display', 'inline-block');

      var menuItemNodes = _this.getMenuItemNodes(); // reset display attribute for all hidden elements caused by overflow to calculate updated width
      // and then reset to original state after width calculation


      var overflowedItems = menuItemNodes.filter(function (c) {
        return c.className.split(' ').indexOf(MENUITEM_OVERFLOWED_CLASSNAME) >= 0;
      });
      overflowedItems.forEach(function (c) {
        setStyle(c, 'display', 'inline-block');
      });
      _this.menuItemSizes = menuItemNodes.map(function (c) {
        return getWidth(c);
      });
      overflowedItems.forEach(function (c) {
        setStyle(c, 'display', 'none');
      });
      _this.overflowedIndicatorWidth = getWidth(ul.children[ul.children.length - 1]);
      _this.originalTotalWidth = _this.menuItemSizes.reduce(function (acc, cur) {
        return acc + cur;
      }, 0);

      _this.handleResize(); // prevent the overflowed indicator from taking space;


      setStyle(lastOverflowedIndicatorPlaceholder, 'display', 'none');
    };

    _this.handleResize = function () {
      if (_this.props.mode !== 'horizontal') {
        return;
      }

      var ul = react_dom["findDOMNode"](DOMWrap_assertThisInitialized(_this));

      if (!ul) {
        return;
      }

      var width = getWidth(ul);
      _this.overflowedItems = [];
      var currentSumWidth = 0; // index for last visible child in horizontal mode

      var lastVisibleIndex; // float number comparison could be problematic
      // e.g. 0.1 + 0.2 > 0.3 =====> true
      // thus using FLOAT_PRECISION_ADJUST as buffer to help the situation

      if (_this.originalTotalWidth > width + FLOAT_PRECISION_ADJUST) {
        lastVisibleIndex = -1;

        _this.menuItemSizes.forEach(function (liWidth) {
          currentSumWidth += liWidth;

          if (currentSumWidth + _this.overflowedIndicatorWidth <= width) {
            lastVisibleIndex += 1;
          }
        });
      }

      _this.setState({
        lastVisibleIndex: lastVisibleIndex
      });
    };

    return _this;
  }

  DOMWrap_createClass(DOMWrap, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.setChildrenWidthAndResize();

      if (this.props.level === 1 && this.props.mode === 'horizontal') {
        var menuUl = react_dom["findDOMNode"](this);

        if (!menuUl) {
          return;
        }

        this.resizeObserver = new ResizeObserver_es["default"](function (entries) {
          entries.forEach(_this2.setChildrenWidthAndResize);
        });
        [].slice.call(menuUl.children).concat(menuUl).forEach(function (el) {
          _this2.resizeObserver.observe(el);
        });

        if (typeof MutationObserver !== 'undefined') {
          this.mutationObserver = new MutationObserver(function () {
            _this2.resizeObserver.disconnect();

            [].slice.call(menuUl.children).concat(menuUl).forEach(function (el) {
              _this2.resizeObserver.observe(el);
            });

            _this2.setChildrenWidthAndResize();
          });
          this.mutationObserver.observe(menuUl, {
            attributes: false,
            childList: true,
            subTree: false
          });
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
      }

      if (this.mutationObserver) {
        this.resizeObserver.disconnect();
      }
    }
  }, {
    key: "renderChildren",
    value: function renderChildren(children) {
      var _this3 = this; // need to take care of overflowed items in horizontal mode


      var lastVisibleIndex = this.state.lastVisibleIndex;
      return (children || []).reduce(function (acc, childNode, index) {
        var item = childNode;

        if (_this3.props.mode === 'horizontal') {
          var overflowed = _this3.getOverflowedSubMenuItem(childNode.props.eventKey, []);

          if (lastVisibleIndex !== undefined && _this3.props.className.indexOf("".concat(_this3.props.prefixCls, "-root")) !== -1) {
            if (index > lastVisibleIndex) {
              item = react["cloneElement"](childNode, // 这里修改 eventKey 是为了防止隐藏状态下还会触发 openkeys 事件
              {
                style: {
                  display: 'none'
                },
                eventKey: "".concat(childNode.props.eventKey, "-hidden"),

                /**
                 * Legacy code. Here `className` never used:
                 * https://github.com/react-component/menu/commit/4cd6b49fce9d116726f4ea00dda85325d6f26500#diff-e2fa48f75c2dd2318295cde428556a76R240
                 */
                className: "".concat(MENUITEM_OVERFLOWED_CLASSNAME)
              });
            }

            if (index === lastVisibleIndex + 1) {
              _this3.overflowedItems = children.slice(lastVisibleIndex + 1).map(function (c) {
                return react["cloneElement"](c, // children[index].key will become '.$key' in clone by default,
                // we have to overwrite with the correct key explicitly
                {
                  key: c.props.eventKey,
                  mode: 'vertical-left'
                });
              });
              overflowed = _this3.getOverflowedSubMenuItem(childNode.props.eventKey, _this3.overflowedItems);
            }
          }

          var ret = [].concat(_toConsumableArray(acc), [overflowed, item]);

          if (index === children.length - 1) {
            // need a placeholder for calculating overflowed indicator width
            ret.push(_this3.getOverflowedSubMenuItem(childNode.props.eventKey, [], true));
          }

          return ret;
        }

        return [].concat(_toConsumableArray(acc), [item]);
      }, []);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          visible = _this$props2.visible,
          prefixCls = _this$props2.prefixCls,
          overflowedIndicator = _this$props2.overflowedIndicator,
          mode = _this$props2.mode,
          level = _this$props2.level,
          tag = _this$props2.tag,
          children = _this$props2.children,
          theme = _this$props2.theme,
          rest = _objectWithoutProperties(_this$props2, ["visible", "prefixCls", "overflowedIndicator", "mode", "level", "tag", "children", "theme"]);

      var Tag = tag;
      return react["createElement"](Tag, Object.assign({}, rest), this.renderChildren(children));
    }
  }]);

  return DOMWrap;
}(react["Component"]);

DOMWrap_DOMWrap.defaultProps = {
  tag: 'div',
  className: ''
};
/* harmony default export */ var es_DOMWrap = (DOMWrap_DOMWrap);
// CONCATENATED MODULE: ../node_modules/rc-menu/es/SubPopupMenu.js



















function SubPopupMenu_typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    SubPopupMenu_typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    SubPopupMenu_typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return SubPopupMenu_typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function SubPopupMenu_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function SubPopupMenu_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function SubPopupMenu_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) SubPopupMenu_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) SubPopupMenu_defineProperties(Constructor, staticProps);
  return Constructor;
}

function SubPopupMenu_possibleConstructorReturn(self, call) {
  if (call && (SubPopupMenu_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return SubPopupMenu_assertThisInitialized(self);
}

function SubPopupMenu_getPrototypeOf(o) {
  SubPopupMenu_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return SubPopupMenu_getPrototypeOf(o);
}

function SubPopupMenu_assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function SubPopupMenu_inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) SubPopupMenu_setPrototypeOf(subClass, superClass);
}

function SubPopupMenu_setPrototypeOf(o, p) {
  SubPopupMenu_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return SubPopupMenu_setPrototypeOf(o, p);
}

function SubPopupMenu_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function SubPopupMenu_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      SubPopupMenu_ownKeys(source, true).forEach(function (key) {
        SubPopupMenu_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      SubPopupMenu_ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function SubPopupMenu_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}










function allDisabled(arr) {
  if (!arr.length) {
    return true;
  }

  return arr.every(function (c) {
    return !!c.props.disabled;
  });
}

function updateActiveKey(store, menuId, activeKey) {
  var state = store.getState();
  store.setState({
    activeKey: SubPopupMenu_objectSpread({}, state.activeKey, SubPopupMenu_defineProperty({}, menuId, activeKey))
  });
}

function getEventKey(props) {
  // when eventKey not available ,it's menu and return menu id '0-menu-'
  return props.eventKey || '0-menu-';
}

function getActiveKey(props, originalActiveKey) {
  var activeKey = originalActiveKey;
  var children = props.children,
      eventKey = props.eventKey;

  if (activeKey) {
    var found;
    loopMenuItem(children, function (c, i) {
      if (c && c.props && !c.props.disabled && activeKey === getKeyFromChildrenIndex(c, eventKey, i)) {
        found = true;
      }
    });

    if (found) {
      return activeKey;
    }
  }

  activeKey = null;

  if (props.defaultActiveFirst) {
    loopMenuItem(children, function (c, i) {
      if (!activeKey && c && !c.props.disabled) {
        activeKey = getKeyFromChildrenIndex(c, eventKey, i);
      }
    });
    return activeKey;
  }

  return activeKey;
}
function saveRef(c) {
  if (c) {
    var index = this.instanceArray.indexOf(c);

    if (index !== -1) {
      // update component if it's already inside instanceArray
      this.instanceArray[index] = c;
    } else {
      // add component if it's not in instanceArray yet;
      this.instanceArray.push(c);
    }
  }
}
var SubPopupMenu_SubPopupMenu =
/*#__PURE__*/
function (_React$Component) {
  SubPopupMenu_inherits(SubPopupMenu, _React$Component);

  function SubPopupMenu(props) {
    var _this;

    SubPopupMenu_classCallCheck(this, SubPopupMenu);

    _this = SubPopupMenu_possibleConstructorReturn(this, SubPopupMenu_getPrototypeOf(SubPopupMenu).call(this, props));
    /**
     * all keyboard events callbacks run from here at first
     *
     * note:
     *  This legacy code that `onKeyDown` is called by parent instead of dom self.
     *  which need return code to check if this event is handled
     */

    _this.onKeyDown = function (e, callback) {
      var keyCode = e.keyCode;
      var handled;

      _this.getFlatInstanceArray().forEach(function (obj) {
        if (obj && obj.props.active && obj.onKeyDown) {
          handled = obj.onKeyDown(e);
        }
      });

      if (handled) {
        return 1;
      }

      var activeItem = null;

      if (keyCode === KeyCode["a" /* default */].UP || keyCode === KeyCode["a" /* default */].DOWN) {
        activeItem = _this.step(keyCode === KeyCode["a" /* default */].UP ? -1 : 1);
      }

      if (activeItem) {
        e.preventDefault();
        updateActiveKey(_this.props.store, getEventKey(_this.props), activeItem.props.eventKey);

        if (typeof callback === 'function') {
          callback(activeItem);
        }

        return 1;
      }

      return undefined;
    };

    _this.onItemHover = function (e) {
      var key = e.key,
          hover = e.hover;
      updateActiveKey(_this.props.store, getEventKey(_this.props), hover ? key : null);
    };

    _this.onDeselect = function (selectInfo) {
      _this.props.onDeselect(selectInfo);
    };

    _this.onSelect = function (selectInfo) {
      _this.props.onSelect(selectInfo);
    };

    _this.onClick = function (e) {
      _this.props.onClick(e);
    };

    _this.onOpenChange = function (e) {
      _this.props.onOpenChange(e);
    };

    _this.onDestroy = function (key) {
      /* istanbul ignore next */
      _this.props.onDestroy(key);
    };

    _this.getFlatInstanceArray = function () {
      return _this.instanceArray;
    };

    _this.step = function (direction) {
      var children = _this.getFlatInstanceArray();

      var activeKey = _this.props.store.getState().activeKey[getEventKey(_this.props)];

      var len = children.length;

      if (!len) {
        return null;
      }

      if (direction < 0) {
        children = children.concat().reverse();
      } // find current activeIndex


      var activeIndex = -1;
      children.every(function (c, ci) {
        if (c && c.props.eventKey === activeKey) {
          activeIndex = ci;
          return false;
        }

        return true;
      });

      if (!_this.props.defaultActiveFirst && activeIndex !== -1 && allDisabled(children.slice(activeIndex, len - 1))) {
        return undefined;
      }

      var start = (activeIndex + 1) % len;
      var i = start;

      do {
        var child = children[i];

        if (!child || child.props.disabled) {
          i = (i + 1) % len;
        } else {
          return child;
        }
      } while (i !== start);

      return null;
    };

    _this.renderCommonMenuItem = function (child, i, extraProps) {
      var state = _this.props.store.getState();

      var _assertThisInitialize = SubPopupMenu_assertThisInitialized(_this),
          props = _assertThisInitialize.props;

      var key = getKeyFromChildrenIndex(child, props.eventKey, i);
      var childProps = child.props; // https://github.com/ant-design/ant-design/issues/11517#issuecomment-477403055

      if (!childProps || typeof child.type === 'string') {
        return child;
      }

      var isActive = key === state.activeKey;

      var newChildProps = SubPopupMenu_objectSpread({
        mode: childProps.mode || props.mode,
        level: props.level,
        inlineIndent: props.inlineIndent,
        renderMenuItem: _this.renderMenuItem,
        rootPrefixCls: props.prefixCls,
        index: i,
        parentMenu: props.parentMenu,
        // customized ref function, need to be invoked manually in child's componentDidMount
        manualRef: childProps.disabled ? undefined : Object(createChainedFunction["a" /* default */])(child.ref, saveRef.bind(SubPopupMenu_assertThisInitialized(_this))),
        eventKey: key,
        active: !childProps.disabled && isActive,
        multiple: props.multiple,
        onClick: function onClick(e) {
          (childProps.onClick || noop)(e);

          _this.onClick(e);
        },
        onItemHover: _this.onItemHover,
        motion: props.motion,
        subMenuOpenDelay: props.subMenuOpenDelay,
        subMenuCloseDelay: props.subMenuCloseDelay,
        forceSubMenuRender: props.forceSubMenuRender,
        onOpenChange: _this.onOpenChange,
        onDeselect: _this.onDeselect,
        onSelect: _this.onSelect,
        builtinPlacements: props.builtinPlacements,
        itemIcon: childProps.itemIcon || _this.props.itemIcon,
        expandIcon: childProps.expandIcon || _this.props.expandIcon
      }, extraProps); // ref: https://github.com/ant-design/ant-design/issues/13943


      if (props.mode === 'inline' || util_isMobileDevice()) {
        newChildProps.triggerSubMenuAction = 'click';
      }

      return react["cloneElement"](child, newChildProps);
    };

    _this.renderMenuItem = function (c, i, subMenuKey) {
      /* istanbul ignore if */
      if (!c) {
        return null;
      }

      var state = _this.props.store.getState();

      var extraProps = {
        openKeys: state.openKeys,
        selectedKeys: state.selectedKeys,
        triggerSubMenuAction: _this.props.triggerSubMenuAction,
        subMenuKey: subMenuKey
      };
      return _this.renderCommonMenuItem(c, i, extraProps);
    };

    props.store.setState({
      activeKey: SubPopupMenu_objectSpread({}, props.store.getState().activeKey, SubPopupMenu_defineProperty({}, props.eventKey, getActiveKey(props, props.activeKey)))
    });
    _this.instanceArray = [];
    return _this;
  }

  SubPopupMenu_createClass(SubPopupMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // invoke customized ref to expose component to mixin
      if (this.props.manualRef) {
        this.props.manualRef(this);
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return this.props.visible || nextProps.visible || this.props.className !== nextProps.className || !shallowequal_default()(this.props.style, nextProps.style);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var props = this.props;
      var originalActiveKey = 'activeKey' in props ? props.activeKey : props.store.getState().activeKey[getEventKey(props)];
      var activeKey = getActiveKey(props, originalActiveKey);

      if (activeKey !== originalActiveKey) {
        updateActiveKey(props.store, getEventKey(props), activeKey);
      } else if ('activeKey' in prevProps) {
        // If prev activeKey is not same as current activeKey,
        // we should set it.
        var prevActiveKey = getActiveKey(prevProps, prevProps.activeKey);

        if (activeKey !== prevActiveKey) {
          updateActiveKey(props.store, getEventKey(props), activeKey);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = _extends({}, this.props);

      this.instanceArray = [];
      var className = classnames_default()(props.prefixCls, props.className, "".concat(props.prefixCls, "-").concat(props.mode));
      var domProps = {
        className: className,
        // role could be 'select' and by default set to menu
        role: props.role || 'menu'
      };

      if (props.id) {
        domProps.id = props.id;
      }

      if (props.focusable) {
        domProps.tabIndex = 0;
        domProps.onKeyDown = this.onKeyDown;
      }

      var prefixCls = props.prefixCls,
          eventKey = props.eventKey,
          visible = props.visible,
          level = props.level,
          mode = props.mode,
          overflowedIndicator = props.overflowedIndicator,
          theme = props.theme;
      menuAllProps.forEach(function (key) {
        return delete props[key];
      }); // Otherwise, the propagated click event will trigger another onClick

      delete props.onClick;
      return react["createElement"](es_DOMWrap, Object.assign({}, props, {
        prefixCls: prefixCls,
        mode: mode,
        tag: "ul",
        level: level,
        theme: theme,
        visible: visible,
        overflowedIndicator: overflowedIndicator
      }, domProps), react["Children"].map(props.children, function (c, i) {
        return _this2.renderMenuItem(c, i, eventKey || '0-menu-');
      }));
    }
  }]);

  return SubPopupMenu;
}(react["Component"]);
SubPopupMenu_SubPopupMenu.defaultProps = {
  prefixCls: 'rc-menu',
  className: '',
  mode: 'vertical',
  level: 1,
  inlineIndent: 24,
  visible: true,
  focusable: true,
  style: {},
  manualRef: noop
};
var SubPopupMenu_connected = Object(lib["connect"])()(SubPopupMenu_SubPopupMenu);
/* harmony default export */ var es_SubPopupMenu = (SubPopupMenu_connected);
// EXTERNAL MODULE: ../node_modules/rc-util/es/warning.js
var warning = __webpack_require__("IFhY");

// CONCATENATED MODULE: ../node_modules/rc-menu/es/utils/legacyUtil.js



function legacyUtil_typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    legacyUtil_typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    legacyUtil_typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return legacyUtil_typeof(obj);
}


function getMotion(_ref) {
  var prefixCls = _ref.prefixCls,
      motion = _ref.motion,
      openAnimation = _ref.openAnimation,
      openTransitionName = _ref.openTransitionName;

  if (motion) {
    return motion;
  }

  if (legacyUtil_typeof(openAnimation) === 'object' && openAnimation) {
    Object(warning["a" /* default */])(false, 'Object type of `openAnimation` is removed. Please use `motion` instead.');
  } else if (typeof openAnimation === 'string') {
    return {
      motionName: "".concat(prefixCls, "-open-").concat(openAnimation)
    };
  }

  if (openTransitionName) {
    return {
      motionName: openTransitionName
    };
  }

  return null;
}
// CONCATENATED MODULE: ../node_modules/rc-menu/es/Menu.js

















function Menu_typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    Menu_typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    Menu_typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return Menu_typeof(obj);
}

function Menu_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function Menu_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      Menu_ownKeys(source, true).forEach(function (key) {
        Menu_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      Menu_ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function Menu_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function Menu_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function Menu_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function Menu_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) Menu_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) Menu_defineProperties(Constructor, staticProps);
  return Constructor;
}

function Menu_possibleConstructorReturn(self, call) {
  if (call && (Menu_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Menu_assertThisInitialized(self);
}

function Menu_getPrototypeOf(o) {
  Menu_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return Menu_getPrototypeOf(o);
}

function Menu_assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function Menu_inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Menu_setPrototypeOf(subClass, superClass);
}

function Menu_setPrototypeOf(o, p) {
  Menu_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return Menu_setPrototypeOf(o, p);
}







var Menu_Menu =
/*#__PURE__*/
function (_React$Component) {
  Menu_inherits(Menu, _React$Component);

  function Menu(props) {
    var _this;

    Menu_classCallCheck(this, Menu);

    _this = Menu_possibleConstructorReturn(this, Menu_getPrototypeOf(Menu).call(this, props));

    _this.onSelect = function (selectInfo) {
      var _assertThisInitialize = Menu_assertThisInitialized(_this),
          props = _assertThisInitialize.props;

      if (props.selectable) {
        // root menu
        var _this$store$getState = _this.store.getState(),
            _selectedKeys = _this$store$getState.selectedKeys;

        var selectedKey = selectInfo.key;

        if (props.multiple) {
          _selectedKeys = _selectedKeys.concat([selectedKey]);
        } else {
          _selectedKeys = [selectedKey];
        }

        if (!('selectedKeys' in props)) {
          _this.store.setState({
            selectedKeys: _selectedKeys
          });
        }

        props.onSelect(Menu_objectSpread({}, selectInfo, {
          selectedKeys: _selectedKeys
        }));
      }
    };

    _this.onClick = function (e) {
      _this.props.onClick(e);
    }; // onKeyDown needs to be exposed as a instance method
    // e.g., in rc-select, we need to navigate menu item while
    // current active item is rc-select input box rather than the menu itself


    _this.onKeyDown = function (e, callback) {
      _this.innerMenu.getWrappedInstance().onKeyDown(e, callback);
    };

    _this.onOpenChange = function (event) {
      var _assertThisInitialize2 = Menu_assertThisInitialized(_this),
          props = _assertThisInitialize2.props;

      var openKeys = _this.store.getState().openKeys.concat();

      var changed = false;

      var processSingle = function processSingle(e) {
        var oneChanged = false;

        if (e.open) {
          oneChanged = openKeys.indexOf(e.key) === -1;

          if (oneChanged) {
            openKeys.push(e.key);
          }
        } else {
          var index = openKeys.indexOf(e.key);
          oneChanged = index !== -1;

          if (oneChanged) {
            openKeys.splice(index, 1);
          }
        }

        changed = changed || oneChanged;
      };

      if (Array.isArray(event)) {
        // batch change call
        event.forEach(processSingle);
      } else {
        processSingle(event);
      }

      if (changed) {
        if (!('openKeys' in _this.props)) {
          _this.store.setState({
            openKeys: openKeys
          });
        }

        props.onOpenChange(openKeys);
      }
    };

    _this.onDeselect = function (selectInfo) {
      var _assertThisInitialize3 = Menu_assertThisInitialized(_this),
          props = _assertThisInitialize3.props;

      if (props.selectable) {
        var _selectedKeys2 = _this.store.getState().selectedKeys.concat();

        var selectedKey = selectInfo.key;

        var index = _selectedKeys2.indexOf(selectedKey);

        if (index !== -1) {
          _selectedKeys2.splice(index, 1);
        }

        if (!('selectedKeys' in props)) {
          _this.store.setState({
            selectedKeys: _selectedKeys2
          });
        }

        props.onDeselect(Menu_objectSpread({}, selectInfo, {
          selectedKeys: _selectedKeys2
        }));
      }
    };

    _this.getOpenTransitionName = function () {
      var _assertThisInitialize4 = Menu_assertThisInitialized(_this),
          props = _assertThisInitialize4.props;

      var transitionName = props.openTransitionName;
      var animationName = props.openAnimation;

      if (!transitionName && typeof animationName === 'string') {
        transitionName = "".concat(props.prefixCls, "-open-").concat(animationName);
      }

      return transitionName;
    };

    _this.setInnerMenu = function (node) {
      _this.innerMenu = node;
    };

    _this.isRootMenu = true;
    var selectedKeys = props.defaultSelectedKeys;
    var openKeys = props.defaultOpenKeys;

    if ('selectedKeys' in props) {
      selectedKeys = props.selectedKeys || [];
    }

    if ('openKeys' in props) {
      openKeys = props.openKeys || [];
    }

    _this.store = Object(lib["create"])({
      selectedKeys: selectedKeys,
      openKeys: openKeys,
      activeKey: {
        '0-menu-': getActiveKey(props, props.activeKey)
      }
    });
    return _this;
  }

  Menu_createClass(Menu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateMiniStore();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.updateMiniStore();
    }
  }, {
    key: "updateMiniStore",
    value: function updateMiniStore() {
      if ('selectedKeys' in this.props) {
        this.store.setState({
          selectedKeys: this.props.selectedKeys || []
        });
      }

      if ('openKeys' in this.props) {
        this.store.setState({
          openKeys: this.props.openKeys || []
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var props = Menu_objectSpread({}, this.props);

      props.className += " ".concat(props.prefixCls, "-root");
      props = Menu_objectSpread({}, props, {
        onClick: this.onClick,
        onOpenChange: this.onOpenChange,
        onDeselect: this.onDeselect,
        onSelect: this.onSelect,
        parentMenu: this,
        motion: getMotion(this.props)
      });
      delete props.openAnimation;
      delete props.openTransitionName;
      return react["createElement"](lib["Provider"], {
        store: this.store
      }, react["createElement"](es_SubPopupMenu, Object.assign({}, props, {
        ref: this.setInnerMenu
      }), this.props.children));
    }
  }]);

  return Menu;
}(react["Component"]);

Menu_Menu.defaultProps = {
  selectable: true,
  onClick: noop,
  onSelect: noop,
  onOpenChange: noop,
  onDeselect: noop,
  defaultSelectedKeys: [],
  defaultOpenKeys: [],
  subMenuOpenDelay: 0.1,
  subMenuCloseDelay: 0.1,
  triggerSubMenuAction: 'hover',
  prefixCls: 'rc-menu',
  className: '',
  mode: 'vertical',
  style: {},
  builtinPlacements: {},
  overflowedIndicator: react["createElement"]("span", null, "\xB7\xB7\xB7")
};
/* harmony default export */ var es_Menu = (Menu_Menu);
// EXTERNAL MODULE: ../node_modules/dom-scroll-into-view/lib/index.js
var dom_scroll_into_view_lib = __webpack_require__("JNk6");
var dom_scroll_into_view_lib_default = /*#__PURE__*/__webpack_require__.n(dom_scroll_into_view_lib);

// CONCATENATED MODULE: ../node_modules/rc-menu/es/MenuItem.js
















function MenuItem_typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    MenuItem_typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    MenuItem_typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return MenuItem_typeof(obj);
}

function MenuItem_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function MenuItem_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      MenuItem_ownKeys(source, true).forEach(function (key) {
        MenuItem_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      MenuItem_ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function MenuItem_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function MenuItem_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function MenuItem_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function MenuItem_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) MenuItem_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) MenuItem_defineProperties(Constructor, staticProps);
  return Constructor;
}

function MenuItem_possibleConstructorReturn(self, call) {
  if (call && (MenuItem_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return MenuItem_assertThisInitialized(self);
}

function MenuItem_getPrototypeOf(o) {
  MenuItem_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return MenuItem_getPrototypeOf(o);
}

function MenuItem_assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function MenuItem_inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) MenuItem_setPrototypeOf(subClass, superClass);
}

function MenuItem_setPrototypeOf(o, p) {
  MenuItem_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return MenuItem_setPrototypeOf(o, p);
}








var MenuItem_MenuItem =
/*#__PURE__*/
function (_React$Component) {
  MenuItem_inherits(MenuItem, _React$Component);

  function MenuItem() {
    var _this;

    MenuItem_classCallCheck(this, MenuItem);

    _this = MenuItem_possibleConstructorReturn(this, MenuItem_getPrototypeOf(MenuItem).apply(this, arguments));

    _this.onKeyDown = function (e) {
      var keyCode = e.keyCode;

      if (keyCode === KeyCode["a" /* default */].ENTER) {
        _this.onClick(e);

        return true;
      }

      return undefined;
    };

    _this.onMouseLeave = function (e) {
      var _this$props = _this.props,
          eventKey = _this$props.eventKey,
          onItemHover = _this$props.onItemHover,
          onMouseLeave = _this$props.onMouseLeave;
      onItemHover({
        key: eventKey,
        hover: false
      });
      onMouseLeave({
        key: eventKey,
        domEvent: e
      });
    };

    _this.onMouseEnter = function (e) {
      var _this$props2 = _this.props,
          eventKey = _this$props2.eventKey,
          onItemHover = _this$props2.onItemHover,
          onMouseEnter = _this$props2.onMouseEnter;
      onItemHover({
        key: eventKey,
        hover: true
      });
      onMouseEnter({
        key: eventKey,
        domEvent: e
      });
    };

    _this.onClick = function (e) {
      var _this$props3 = _this.props,
          eventKey = _this$props3.eventKey,
          multiple = _this$props3.multiple,
          onClick = _this$props3.onClick,
          onSelect = _this$props3.onSelect,
          onDeselect = _this$props3.onDeselect,
          isSelected = _this$props3.isSelected;
      var info = {
        key: eventKey,
        keyPath: [eventKey],
        item: MenuItem_assertThisInitialized(_this),
        domEvent: e
      };
      onClick(info);

      if (multiple) {
        if (isSelected) {
          onDeselect(info);
        } else {
          onSelect(info);
        }
      } else if (!isSelected) {
        onSelect(info);
      }
    };

    _this.saveNode = function (node) {
      _this.node = node;
    };

    return _this;
  }

  MenuItem_createClass(MenuItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // invoke customized ref to expose component to mixin
      this.callRef();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props4 = this.props,
          active = _this$props4.active,
          parentMenu = _this$props4.parentMenu,
          eventKey = _this$props4.eventKey; // 在 parentMenu 上层保存滚动状态，避免重复的 MenuItem key 导致滚动跳动
      // https://github.com/ant-design/ant-design/issues/16181

      if (!prevProps.active && active && (!parentMenu || !parentMenu["scrolled-".concat(eventKey)])) {
        if (this.node) {
          dom_scroll_into_view_lib_default()(this.node, react_dom["findDOMNode"](parentMenu), {
            onlyScrollIfNeeded: true
          });
          parentMenu["scrolled-".concat(eventKey)] = true;
        }
      } else if (parentMenu && parentMenu["scrolled-".concat(eventKey)]) {
        delete parentMenu["scrolled-".concat(eventKey)];
      }

      this.callRef();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var props = this.props;

      if (props.onDestroy) {
        props.onDestroy(props.eventKey);
      }
    }
  }, {
    key: "getPrefixCls",
    value: function getPrefixCls() {
      return "".concat(this.props.rootPrefixCls, "-item");
    }
  }, {
    key: "getActiveClassName",
    value: function getActiveClassName() {
      return "".concat(this.getPrefixCls(), "-active");
    }
  }, {
    key: "getSelectedClassName",
    value: function getSelectedClassName() {
      return "".concat(this.getPrefixCls(), "-selected");
    }
  }, {
    key: "getDisabledClassName",
    value: function getDisabledClassName() {
      return "".concat(this.getPrefixCls(), "-disabled");
    }
  }, {
    key: "callRef",
    value: function callRef() {
      if (this.props.manualRef) {
        this.props.manualRef(this);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var props = MenuItem_objectSpread({}, this.props);

      var className = classnames_default()(this.getPrefixCls(), props.className, (_classNames = {}, MenuItem_defineProperty(_classNames, this.getActiveClassName(), !props.disabled && props.active), MenuItem_defineProperty(_classNames, this.getSelectedClassName(), props.isSelected), MenuItem_defineProperty(_classNames, this.getDisabledClassName(), props.disabled), _classNames));

      var attrs = MenuItem_objectSpread({}, props.attribute, {
        title: props.title,
        className: className,
        // set to menuitem by default
        role: props.role || 'menuitem',
        'aria-disabled': props.disabled
      });

      if (props.role === 'option') {
        // overwrite to option
        attrs = MenuItem_objectSpread({}, attrs, {
          role: 'option',
          'aria-selected': props.isSelected
        });
      } else if (props.role === null || props.role === 'none') {
        // sometimes we want to specify role inside <li/> element
        // <li><a role='menuitem'>Link</a></li> would be a good example
        // in this case the role on <li/> should be "none" to
        // remove the implied listitem role.
        // https://www.w3.org/TR/wai-aria-practices-1.1/examples/menubar/menubar-1/menubar-1.html
        attrs.role = 'none';
      } // In case that onClick/onMouseLeave/onMouseEnter is passed down from owner


      var mouseEvent = {
        onClick: props.disabled ? null : this.onClick,
        onMouseLeave: props.disabled ? null : this.onMouseLeave,
        onMouseEnter: props.disabled ? null : this.onMouseEnter
      };

      var style = MenuItem_objectSpread({}, props.style);

      if (props.mode === 'inline') {
        style.paddingLeft = props.inlineIndent * props.level;
      }

      menuAllProps.forEach(function (key) {
        return delete props[key];
      });
      var icon = this.props.itemIcon;

      if (typeof this.props.itemIcon === 'function') {
        // TODO: This is a bug which should fixed after TS refactor
        icon = react["createElement"](this.props.itemIcon, this.props);
      }

      return react["createElement"]("li", Object.assign({}, props, attrs, mouseEvent, {
        style: style,
        ref: this.saveNode
      }), props.children, icon);
    }
  }]);

  return MenuItem;
}(react["Component"]);
MenuItem_MenuItem.isMenuItem = true;
MenuItem_MenuItem.defaultProps = {
  onSelect: noop,
  onMouseEnter: noop,
  onMouseLeave: noop,
  manualRef: noop
};
var MenuItem_connected = Object(lib["connect"])(function (_ref, _ref2) {
  var activeKey = _ref.activeKey,
      selectedKeys = _ref.selectedKeys;
  var eventKey = _ref2.eventKey,
      subMenuKey = _ref2.subMenuKey;
  return {
    active: activeKey[subMenuKey] === eventKey,
    isSelected: selectedKeys.indexOf(eventKey) !== -1
  };
})(MenuItem_MenuItem);
/* harmony default export */ var es_MenuItem = (MenuItem_connected);
// CONCATENATED MODULE: ../node_modules/rc-menu/es/MenuItemGroup.js









function MenuItemGroup_typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    MenuItemGroup_typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    MenuItemGroup_typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return MenuItemGroup_typeof(obj);
}

function MenuItemGroup_extends() {
  MenuItemGroup_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return MenuItemGroup_extends.apply(this, arguments);
}

function MenuItemGroup_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function MenuItemGroup_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function MenuItemGroup_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) MenuItemGroup_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) MenuItemGroup_defineProperties(Constructor, staticProps);
  return Constructor;
}

function MenuItemGroup_possibleConstructorReturn(self, call) {
  if (call && (MenuItemGroup_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return MenuItemGroup_assertThisInitialized(self);
}

function MenuItemGroup_assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function MenuItemGroup_getPrototypeOf(o) {
  MenuItemGroup_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return MenuItemGroup_getPrototypeOf(o);
}

function MenuItemGroup_inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) MenuItemGroup_setPrototypeOf(subClass, superClass);
}

function MenuItemGroup_setPrototypeOf(o, p) {
  MenuItemGroup_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return MenuItemGroup_setPrototypeOf(o, p);
}




var MenuItemGroup_MenuItemGroup =
/*#__PURE__*/
function (_React$Component) {
  MenuItemGroup_inherits(MenuItemGroup, _React$Component);

  function MenuItemGroup() {
    var _this;

    MenuItemGroup_classCallCheck(this, MenuItemGroup);

    _this = MenuItemGroup_possibleConstructorReturn(this, MenuItemGroup_getPrototypeOf(MenuItemGroup).apply(this, arguments));

    _this.renderInnerMenuItem = function (item) {
      var _this$props = _this.props,
          renderMenuItem = _this$props.renderMenuItem,
          index = _this$props.index;
      return renderMenuItem(item, index, _this.props.subMenuKey);
    };

    return _this;
  }

  MenuItemGroup_createClass(MenuItemGroup, [{
    key: "render",
    value: function render() {
      var props = MenuItemGroup_extends({}, this.props);

      var _props$className = props.className,
          className = _props$className === void 0 ? '' : _props$className,
          rootPrefixCls = props.rootPrefixCls;
      var titleClassName = "".concat(rootPrefixCls, "-item-group-title");
      var listClassName = "".concat(rootPrefixCls, "-item-group-list");
      var title = props.title,
          children = props.children;
      menuAllProps.forEach(function (key) {
        return delete props[key];
      }); // Set onClick to null, to ignore propagated onClick event

      delete props.onClick;
      return react["createElement"]("li", Object.assign({}, props, {
        className: "".concat(className, " ").concat(rootPrefixCls, "-item-group")
      }), react["createElement"]("div", {
        className: titleClassName,
        title: typeof title === 'string' ? title : undefined
      }, title), react["createElement"]("ul", {
        className: listClassName
      }, react["Children"].map(children, this.renderInnerMenuItem)));
    }
  }]);

  return MenuItemGroup;
}(react["Component"]);

MenuItemGroup_MenuItemGroup.isMenuItemGroup = true;
MenuItemGroup_MenuItemGroup.defaultProps = {
  disabled: true
};
/* harmony default export */ var es_MenuItemGroup = (MenuItemGroup_MenuItemGroup);
// CONCATENATED MODULE: ../node_modules/rc-menu/es/Divider.js


var Divider_Divider = function Divider(_ref) {
  var className = _ref.className,
      rootPrefixCls = _ref.rootPrefixCls,
      style = _ref.style;
  return react["createElement"]("li", {
    className: "".concat(className, " ").concat(rootPrefixCls, "-item-divider"),
    style: style
  });
};

Divider_Divider.defaultProps = {
  // To fix keyboard UX.
  disabled: true,
  className: '',
  style: {}
};
/* harmony default export */ var es_Divider = (Divider_Divider);
// CONCATENATED MODULE: ../node_modules/rc-menu/es/index.js






/* harmony default export */ var rc_menu_es = (es_Menu);
// EXTERNAL MODULE: ../node_modules/omit.js/es/index.js
var omit_js_es = __webpack_require__("x9u5");

// EXTERNAL MODULE: ../node_modules/@ant-design/create-react-context/lib/index.js
var create_react_context_lib = __webpack_require__("1wI9");
var create_react_context_lib_default = /*#__PURE__*/__webpack_require__.n(create_react_context_lib);

// CONCATENATED MODULE: ../node_modules/antd/es/menu/MenuContext.js

var MenuContext = create_react_context_lib_default()({
  inlineCollapsed: false
});
/* harmony default export */ var menu_MenuContext = (MenuContext);
// CONCATENATED MODULE: ../node_modules/antd/es/menu/SubMenu.js







function menu_SubMenu_typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    menu_SubMenu_typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    menu_SubMenu_typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return menu_SubMenu_typeof(obj);
}

function SubMenu_extends() {
  SubMenu_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return SubMenu_extends.apply(this, arguments);
}

function SubMenu_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function SubMenu_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function SubMenu_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) SubMenu_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) SubMenu_defineProperties(Constructor, staticProps);
  return Constructor;
}

function SubMenu_possibleConstructorReturn(self, call) {
  if (call && (menu_SubMenu_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return SubMenu_assertThisInitialized(self);
}

function SubMenu_assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function SubMenu_getPrototypeOf(o) {
  SubMenu_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return SubMenu_getPrototypeOf(o);
}

function SubMenu_inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) SubMenu_setPrototypeOf(subClass, superClass);
}

function SubMenu_setPrototypeOf(o, p) {
  SubMenu_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return SubMenu_setPrototypeOf(o, p);
}







var menu_SubMenu_SubMenu =
/*#__PURE__*/
function (_React$Component) {
  SubMenu_inherits(SubMenu, _React$Component);

  function SubMenu() {
    var _this;

    SubMenu_classCallCheck(this, SubMenu);

    _this = SubMenu_possibleConstructorReturn(this, SubMenu_getPrototypeOf(SubMenu).apply(this, arguments));

    _this.onKeyDown = function (e) {
      _this.subMenu.onKeyDown(e);
    };

    _this.saveSubMenu = function (subMenu) {
      _this.subMenu = subMenu;
    };

    return _this;
  }

  SubMenu_createClass(SubMenu, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          rootPrefixCls = _this$props.rootPrefixCls,
          popupClassName = _this$props.popupClassName;
      return react["createElement"](menu_MenuContext.Consumer, null, function (_ref) {
        var antdMenuTheme = _ref.antdMenuTheme;
        return react["createElement"](es_SubMenu, SubMenu_extends({}, _this2.props, {
          ref: _this2.saveSubMenu,
          popupClassName: classnames_default()("".concat(rootPrefixCls, "-").concat(antdMenuTheme), popupClassName)
        }));
      });
    }
  }]);

  return SubMenu;
}(react["Component"]);

menu_SubMenu_SubMenu.contextTypes = {
  antdMenuTheme: prop_types["string"]
}; // fix issue:https://github.com/ant-design/ant-design/issues/8666

menu_SubMenu_SubMenu.isSubMenu = 1;
/* harmony default export */ var menu_SubMenu = (menu_SubMenu_SubMenu);
// EXTERNAL MODULE: ../node_modules/antd/es/tooltip/index.js + 5 modules
var tooltip = __webpack_require__("DGR3");

// EXTERNAL MODULE: ../node_modules/antd/es/layout/Sider.js + 1 modules
var Sider = __webpack_require__("znB+");

// CONCATENATED MODULE: ../node_modules/antd/es/menu/MenuItem.js








function menu_MenuItem_typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    menu_MenuItem_typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    menu_MenuItem_typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return menu_MenuItem_typeof(obj);
}

function MenuItem_extends() {
  MenuItem_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return MenuItem_extends.apply(this, arguments);
}

function menu_MenuItem_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function menu_MenuItem_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function menu_MenuItem_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) menu_MenuItem_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) menu_MenuItem_defineProperties(Constructor, staticProps);
  return Constructor;
}

function menu_MenuItem_possibleConstructorReturn(self, call) {
  if (call && (menu_MenuItem_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return menu_MenuItem_assertThisInitialized(self);
}

function menu_MenuItem_assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function menu_MenuItem_getPrototypeOf(o) {
  menu_MenuItem_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return menu_MenuItem_getPrototypeOf(o);
}

function menu_MenuItem_inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) menu_MenuItem_setPrototypeOf(subClass, superClass);
}

function menu_MenuItem_setPrototypeOf(o, p) {
  menu_MenuItem_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return menu_MenuItem_setPrototypeOf(o, p);
}

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};







var menu_MenuItem_MenuItem =
/*#__PURE__*/
function (_React$Component) {
  menu_MenuItem_inherits(MenuItem, _React$Component);

  function MenuItem() {
    var _this;

    menu_MenuItem_classCallCheck(this, MenuItem);

    _this = menu_MenuItem_possibleConstructorReturn(this, menu_MenuItem_getPrototypeOf(MenuItem).apply(this, arguments));

    _this.onKeyDown = function (e) {
      _this.menuItem.onKeyDown(e);
    };

    _this.saveMenuItem = function (menuItem) {
      _this.menuItem = menuItem;
    };

    _this.renderItem = function (_ref) {
      var siderCollapsed = _ref.siderCollapsed;
      var _this$props = _this.props,
          level = _this$props.level,
          children = _this$props.children,
          rootPrefixCls = _this$props.rootPrefixCls;

      var _a = _this.props,
          title = _a.title,
          rest = __rest(_a, ["title"]);

      return react["createElement"](menu_MenuContext.Consumer, null, function (_ref2) {
        var inlineCollapsed = _ref2.inlineCollapsed;
        var tooltipProps = {
          title: title || (level === 1 ? children : '')
        };

        if (!siderCollapsed && !inlineCollapsed) {
          tooltipProps.title = null; // Reset `visible` to fix control mode tooltip display not correct
          // ref: https://github.com/ant-design/ant-design/issues/16742

          tooltipProps.visible = false;
        }

        return react["createElement"](tooltip["a" /* default */], MenuItem_extends({}, tooltipProps, {
          placement: "right",
          overlayClassName: "".concat(rootPrefixCls, "-inline-collapsed-tooltip")
        }), react["createElement"](es_MenuItem, MenuItem_extends({}, rest, {
          title: title,
          ref: _this.saveMenuItem
        })));
      });
    };

    return _this;
  }

  menu_MenuItem_createClass(MenuItem, [{
    key: "render",
    value: function render() {
      return react["createElement"](Sider["a" /* SiderContext */].Consumer, null, this.renderItem);
    }
  }]);

  return MenuItem;
}(react["Component"]);


menu_MenuItem_MenuItem.isMenuItem = true;
// EXTERNAL MODULE: ../node_modules/antd/es/config-provider/context.js + 4 modules
var config_provider_context = __webpack_require__("Bfez");

// EXTERNAL MODULE: ../node_modules/antd/es/_util/warning.js
var _util_warning = __webpack_require__("papw");

// EXTERNAL MODULE: ../node_modules/antd/es/_util/raf.js
var _util_raf = __webpack_require__("mTAF");

// CONCATENATED MODULE: ../node_modules/antd/es/_util/motion.js
// ================== Collapse Motion ==================
var getCollapsedHeight = function getCollapsedHeight() {
  return {
    height: 0,
    opacity: 0
  };
};

var getRealHeight = function getRealHeight(node) {
  return {
    height: node.scrollHeight,
    opacity: 1
  };
};

var getCurrentHeight = function getCurrentHeight(node) {
  return {
    height: node.offsetHeight
  };
};

var collapseMotion = {
  motionName: 'ant-motion-collapse',
  onAppearStart: getCollapsedHeight,
  onEnterStart: getCollapsedHeight,
  onAppearActive: getRealHeight,
  onEnterActive: getRealHeight,
  onLeaveStart: getCurrentHeight,
  onLeaveActive: getCollapsedHeight
};
/* harmony default export */ var _util_motion = (collapseMotion);
// CONCATENATED MODULE: ../node_modules/antd/es/menu/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return menu_Menu; });











function menu_typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    menu_typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    menu_typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return menu_typeof(obj);
}

function menu_extends() {
  menu_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return menu_extends.apply(this, arguments);
}

function menu_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function menu_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function menu_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function menu_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) menu_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) menu_defineProperties(Constructor, staticProps);
  return Constructor;
}

function menu_possibleConstructorReturn(self, call) {
  if (call && (menu_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return menu_assertThisInitialized(self);
}

function menu_assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function menu_getPrototypeOf(o) {
  menu_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return menu_getPrototypeOf(o);
}

function menu_inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) menu_setPrototypeOf(subClass, superClass);
}

function menu_setPrototypeOf(o, p) {
  menu_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return menu_setPrototypeOf(o, p);
}















var menu_InternalMenu =
/*#__PURE__*/
function (_React$Component) {
  menu_inherits(InternalMenu, _React$Component);

  function InternalMenu(props) {
    var _this;

    menu_classCallCheck(this, InternalMenu);

    _this = menu_possibleConstructorReturn(this, menu_getPrototypeOf(InternalMenu).call(this, props)); // Restore vertical mode when menu is collapsed responsively when mounted
    // https://github.com/ant-design/ant-design/issues/13104
    // TODO: not a perfect solution, looking a new way to avoid setting switchingModeFromInline in this situation

    _this.handleMouseEnter = function (e) {
      _this.restoreModeVerticalFromInline();

      var onMouseEnter = _this.props.onMouseEnter;

      if (onMouseEnter) {
        onMouseEnter(e);
      }
    };

    _this.handleTransitionEnd = function (e) {
      // when inlineCollapsed menu width animation finished
      // https://github.com/ant-design/ant-design/issues/12864
      var widthCollapsed = e.propertyName === 'width' && e.target === e.currentTarget; // Fix SVGElement e.target.className.indexOf is not a function
      // https://github.com/ant-design/ant-design/issues/15699

      var className = e.target.className; // SVGAnimatedString.animVal should be identical to SVGAnimatedString.baseVal, unless during an animation.

      var classNameValue = Object.prototype.toString.call(className) === '[object SVGAnimatedString]' ? className.animVal : className; // Fix for <Menu style={{ width: '100%' }} />, the width transition won't trigger when menu is collapsed
      // https://github.com/ant-design/ant-design-pro/issues/2783

      var iconScaled = e.propertyName === 'font-size' && classNameValue.indexOf('anticon') >= 0;

      if (widthCollapsed || iconScaled) {
        _this.restoreModeVerticalFromInline();
      }
    };

    _this.handleClick = function (e) {
      _this.handleOpenChange([]);

      var onClick = _this.props.onClick;

      if (onClick) {
        onClick(e);
      }
    };

    _this.handleOpenChange = function (openKeys) {
      _this.setOpenKeys(openKeys);

      var onOpenChange = _this.props.onOpenChange;

      if (onOpenChange) {
        onOpenChange(openKeys);
      }
    };

    _this.renderMenu = function (_ref) {
      var getPopupContainer = _ref.getPopupContainer,
          getPrefixCls = _ref.getPrefixCls;
      var _this$props = _this.props,
          customizePrefixCls = _this$props.prefixCls,
          className = _this$props.className,
          theme = _this$props.theme,
          collapsedWidth = _this$props.collapsedWidth;
      var passProps = Object(omit_js_es["a" /* default */])(_this.props, ['collapsedWidth', 'siderCollapsed']);

      var menuMode = _this.getRealMenuMode();

      var menuOpenMotion = _this.getOpenMotionProps(menuMode);

      var prefixCls = getPrefixCls('menu', customizePrefixCls);
      var menuClassName = classnames_default()(className, "".concat(prefixCls, "-").concat(theme), menu_defineProperty({}, "".concat(prefixCls, "-inline-collapsed"), _this.getInlineCollapsed()));

      var menuProps = menu_extends({
        openKeys: _this.state.openKeys,
        onOpenChange: _this.handleOpenChange,
        className: menuClassName,
        mode: menuMode
      }, menuOpenMotion);

      if (menuMode !== 'inline') {
        // closing vertical popup submenu after click it
        menuProps.onClick = _this.handleClick;
      } // https://github.com/ant-design/ant-design/issues/8587


      var hideMenu = _this.getInlineCollapsed() && (collapsedWidth === 0 || collapsedWidth === '0' || collapsedWidth === '0px');

      if (hideMenu) {
        menuProps.openKeys = [];
      }

      return react["createElement"](rc_menu_es, menu_extends({
        getPopupContainer: getPopupContainer
      }, passProps, menuProps, {
        prefixCls: prefixCls,
        onTransitionEnd: _this.handleTransitionEnd,
        onMouseEnter: _this.handleMouseEnter
      }));
    };

    Object(_util_warning["a" /* default */])(!('onOpen' in props || 'onClose' in props), 'Menu', '`onOpen` and `onClose` are removed, please use `onOpenChange` instead, ' + 'see: https://u.ant.design/menu-on-open-change.');
    Object(_util_warning["a" /* default */])(!('inlineCollapsed' in props && props.mode !== 'inline'), 'Menu', '`inlineCollapsed` should only be used when `mode` is inline.');
    Object(_util_warning["a" /* default */])(!(props.siderCollapsed !== undefined && 'inlineCollapsed' in props), 'Menu', '`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.');
    var openKeys;

    if ('openKeys' in props) {
      openKeys = props.openKeys;
    } else if ('defaultOpenKeys' in props) {
      openKeys = props.defaultOpenKeys;
    }

    _this.state = {
      openKeys: openKeys || [],
      switchingModeFromInline: false,
      inlineOpenKeys: [],
      prevProps: props
    };
    return _this;
  }

  menu_createClass(InternalMenu, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _util_raf["a" /* default */].cancel(this.mountRafId);
    }
  }, {
    key: "setOpenKeys",
    value: function setOpenKeys(openKeys) {
      if (!('openKeys' in this.props)) {
        this.setState({
          openKeys: openKeys
        });
      }
    }
  }, {
    key: "getRealMenuMode",
    value: function getRealMenuMode() {
      var inlineCollapsed = this.getInlineCollapsed();

      if (this.state.switchingModeFromInline && inlineCollapsed) {
        return 'inline';
      }

      var mode = this.props.mode;
      return inlineCollapsed ? 'vertical' : mode;
    }
  }, {
    key: "getInlineCollapsed",
    value: function getInlineCollapsed() {
      var inlineCollapsed = this.props.inlineCollapsed;

      if (this.props.siderCollapsed !== undefined) {
        return this.props.siderCollapsed;
      }

      return inlineCollapsed;
    }
  }, {
    key: "getOpenMotionProps",
    value: function getOpenMotionProps(menuMode) {
      var _this$props2 = this.props,
          openTransitionName = _this$props2.openTransitionName,
          openAnimation = _this$props2.openAnimation,
          motion = _this$props2.motion; // Provides by user

      if (motion) {
        return {
          motion: motion
        };
      }

      if (openAnimation) {
        Object(_util_warning["a" /* default */])(typeof openAnimation === 'string', 'Menu', '`openAnimation` do not support object. Please use `motion` instead.');
        return {
          openAnimation: openAnimation
        };
      }

      if (openTransitionName) {
        return {
          openTransitionName: openTransitionName
        };
      } // Default logic


      if (menuMode === 'horizontal') {
        return {
          motion: {
            motionName: 'slide-up'
          }
        };
      }

      if (menuMode === 'inline') {
        return {
          motion: _util_motion
        };
      } // When mode switch from inline
      // submenu should hide without animation


      return {
        motion: {
          motionName: this.state.switchingModeFromInline ? '' : 'zoom-big'
        }
      };
    }
  }, {
    key: "restoreModeVerticalFromInline",
    value: function restoreModeVerticalFromInline() {
      var switchingModeFromInline = this.state.switchingModeFromInline;

      if (switchingModeFromInline) {
        this.setState({
          switchingModeFromInline: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react["createElement"](menu_MenuContext.Provider, {
        value: {
          inlineCollapsed: this.getInlineCollapsed() || false,
          antdMenuTheme: this.props.theme
        }
      }, react["createElement"](config_provider_context["a" /* ConfigConsumer */], null, this.renderMenu));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var prevProps = prevState.prevProps;
      var newState = {
        prevProps: nextProps
      };

      if (prevProps.mode === 'inline' && nextProps.mode !== 'inline') {
        newState.switchingModeFromInline = true;
      }

      if ('openKeys' in nextProps) {
        newState.openKeys = nextProps.openKeys;
      } else {
        // [Legacy] Old code will return after `openKeys` changed.
        // Not sure the reason, we should keep this logic still.
        if (nextProps.inlineCollapsed && !prevProps.inlineCollapsed || nextProps.siderCollapsed && !prevProps.siderCollapsed) {
          newState.switchingModeFromInline = true;
          newState.inlineOpenKeys = prevState.openKeys;
          newState.openKeys = [];
        }

        if (!nextProps.inlineCollapsed && prevProps.inlineCollapsed || !nextProps.siderCollapsed && prevProps.siderCollapsed) {
          newState.openKeys = prevState.inlineOpenKeys;
          newState.inlineOpenKeys = [];
        }
      }

      return newState;
    }
  }]);

  return InternalMenu;
}(react["Component"]);

menu_InternalMenu.defaultProps = {
  className: '',
  theme: 'light',
  focusable: false
};
Object(react_lifecycles_compat["polyfill"])(menu_InternalMenu); // We should keep this as ref-able

var menu_Menu =
/*#__PURE__*/
function (_React$Component2) {
  menu_inherits(Menu, _React$Component2);

  function Menu() {
    menu_classCallCheck(this, Menu);

    return menu_possibleConstructorReturn(this, menu_getPrototypeOf(Menu).apply(this, arguments));
  }

  menu_createClass(Menu, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react["createElement"](Sider["a" /* SiderContext */].Consumer, null, function (context) {
        return react["createElement"](menu_InternalMenu, menu_extends({}, _this2.props, context));
      });
    }
  }]);

  return Menu;
}(react["Component"]);


menu_Menu.Divider = es_Divider;
menu_Menu.Item = menu_MenuItem_MenuItem;
menu_Menu.SubMenu = menu_SubMenu;
menu_Menu.ItemGroup = es_MenuItemGroup;

/***/ }),

/***/ "vXvS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return findDOMNode; });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xARA");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Return if a node is a DOM node. Else will return by `findDOMNode`
 */

function findDOMNode(node) {
  if (node instanceof HTMLElement) {
    return node;
  }

  return react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.findDOMNode(node);
}

/***/ }),

/***/ "y/En":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

__webpack_require__("ABKx");

__webpack_require__("d3/y");

var REACT_STATICS = {
  childContextTypes: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }

    return targetComponent;
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;

/***/ }),

/***/ "zSCU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("d3/y");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = exports.connect = exports.Provider = undefined;

var _Provider2 = __webpack_require__("YOo+");

var _Provider3 = _interopRequireDefault(_Provider2);

var _connect2 = __webpack_require__("XMvD");

var _connect3 = _interopRequireDefault(_connect2);

var _create2 = __webpack_require__("Cbd+");

var _create3 = _interopRequireDefault(_create2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

exports.Provider = _Provider3["default"];
exports.connect = _connect3["default"];
exports.create = _create3["default"];

/***/ }),

/***/ "zbYf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("Z8gF");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.regexp.constructor.js
var es6_regexp_constructor = __webpack_require__("J8hF");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__("4aJ6");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.date.to-string.js
var es6_date_to_string = __webpack_require__("M/4x");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__("t91x");

// EXTERNAL MODULE: ../node_modules/lodash-es/_root.js
var _root = __webpack_require__("EIj1");

// CONCATENATED MODULE: ../node_modules/lodash-es/_Symbol.js

/** Built-in value references. */

var Symbol = _root["a" /* default */].Symbol;
/* harmony default export */ var _Symbol = (Symbol);
// CONCATENATED MODULE: ../node_modules/lodash-es/_getRawTag.js




/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var _getRawTag_hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/** Built-in value references. */

var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */

function getRawTag(value) {
  var isOwn = _getRawTag_hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }

  return result;
}

/* harmony default export */ var _getRawTag = (getRawTag);
// CONCATENATED MODULE: ../node_modules/lodash-es/_objectToString.js




/** Used for built-in method references. */
var _objectToString_objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var _objectToString_nativeObjectToString = _objectToString_objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */

function objectToString(value) {
  return _objectToString_nativeObjectToString.call(value);
}

/* harmony default export */ var _objectToString = (objectToString);
// CONCATENATED MODULE: ../node_modules/lodash-es/_baseGetTag.js



/** `Object#toString` result references. */

var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var _baseGetTag_symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return _baseGetTag_symToStringTag && _baseGetTag_symToStringTag in Object(value) ? _getRawTag(value) : _objectToString(value);
}

/* harmony default export */ var _baseGetTag = (baseGetTag);
// CONCATENATED MODULE: ../node_modules/lodash-es/isObject.js
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/* harmony default export */ var lodash_es_isObject = (isObject);
// CONCATENATED MODULE: ../node_modules/lodash-es/isFunction.js


/** `Object#toString` result references. */

var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */

function isFunction(value) {
  if (!lodash_es_isObject(value)) {
    return false;
  } // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.


  var tag = _baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/* harmony default export */ var lodash_es_isFunction = (isFunction);
// EXTERNAL MODULE: ../node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("W1QL");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("K/PF");

// CONCATENATED MODULE: ../node_modules/lodash-es/_coreJsData.js

/** Used to detect overreaching core-js shims. */

var coreJsData = _root["a" /* default */]['__core-js_shared__'];
/* harmony default export */ var _coreJsData = (coreJsData);
// CONCATENATED MODULE: ../node_modules/lodash-es/_isMasked.js




/** Used to detect methods masquerading as native. */

var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */


function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

/* harmony default export */ var _isMasked = (isMasked);
// CONCATENATED MODULE: ../node_modules/lodash-es/_toSource.js




/** Used for built-in method references. */
var funcProto = Function.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */

function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}

    try {
      return func + '';
    } catch (e) {}
  }

  return '';
}

/* harmony default export */ var _toSource = (toSource);
// CONCATENATED MODULE: ../node_modules/lodash-es/_baseIsNative.js









/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */

var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */

var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */

var _baseIsNative_funcProto = Function.prototype,
    _baseIsNative_objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var _baseIsNative_funcToString = _baseIsNative_funcProto.toString;
/** Used to check objects for own properties. */

var _baseIsNative_hasOwnProperty = _baseIsNative_objectProto.hasOwnProperty;
/** Used to detect if a method is native. */

var reIsNative = RegExp('^' + _baseIsNative_funcToString.call(_baseIsNative_hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */

function baseIsNative(value) {
  if (!lodash_es_isObject(value) || _isMasked(value)) {
    return false;
  }

  var pattern = lodash_es_isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

/* harmony default export */ var _baseIsNative = (baseIsNative);
// CONCATENATED MODULE: ../node_modules/lodash-es/_getValue.js
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/* harmony default export */ var _getValue = (getValue);
// CONCATENATED MODULE: ../node_modules/lodash-es/_getNative.js


/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */

function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

/* harmony default export */ var _getNative = (getNative);
// CONCATENATED MODULE: ../node_modules/lodash-es/_defineProperty.js


var defineProperty = function () {
  try {
    var func = _getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();

/* harmony default export */ var _defineProperty = (defineProperty);
// CONCATENATED MODULE: ../node_modules/lodash-es/_baseAssignValue.js

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */

function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty) {
    _defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/* harmony default export */ var _baseAssignValue = (baseAssignValue);
// CONCATENATED MODULE: ../node_modules/lodash-es/_arrayAggregator.js
/**
 * A specialized version of `baseAggregator` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function arrayAggregator(array, setter, iteratee, accumulator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    var value = array[index];
    setter(accumulator, value, iteratee(value), array);
  }

  return accumulator;
}

/* harmony default export */ var _arrayAggregator = (arrayAggregator);
// CONCATENATED MODULE: ../node_modules/lodash-es/_createBaseFor.js
/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function (object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];

      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }

    return object;
  };
}

/* harmony default export */ var _createBaseFor = (createBaseFor);
// CONCATENATED MODULE: ../node_modules/lodash-es/_baseFor.js

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */

var baseFor = _createBaseFor();
/* harmony default export */ var _baseFor = (baseFor);
// CONCATENATED MODULE: ../node_modules/lodash-es/_baseTimes.js
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}

/* harmony default export */ var _baseTimes = (baseTimes);
// CONCATENATED MODULE: ../node_modules/lodash-es/isObjectLike.js
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ var lodash_es_isObjectLike = (isObjectLike);
// CONCATENATED MODULE: ../node_modules/lodash-es/_baseIsArguments.js


/** `Object#toString` result references. */

var argsTag = '[object Arguments]';
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */

function baseIsArguments(value) {
  return lodash_es_isObjectLike(value) && _baseGetTag(value) == argsTag;
}

/* harmony default export */ var _baseIsArguments = (baseIsArguments);
// CONCATENATED MODULE: ../node_modules/lodash-es/isArguments.js


/** Used for built-in method references. */

var isArguments_objectProto = Object.prototype;
/** Used to check objects for own properties. */

var isArguments_hasOwnProperty = isArguments_objectProto.hasOwnProperty;
/** Built-in value references. */

var propertyIsEnumerable = isArguments_objectProto.propertyIsEnumerable;
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */

var isArguments = _baseIsArguments(function () {
  return arguments;
}()) ? _baseIsArguments : function (value) {
  return lodash_es_isObjectLike(value) && isArguments_hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
/* harmony default export */ var lodash_es_isArguments = (isArguments);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.is-array.js
var es6_array_is_array = __webpack_require__("+3V6");

// CONCATENATED MODULE: ../node_modules/lodash-es/isArray.js


/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;
/* harmony default export */ var lodash_es_isArray = (isArray);
// EXTERNAL MODULE: ../node_modules/lodash-es/isBuffer.js
var isBuffer = __webpack_require__("KB05");

// CONCATENATED MODULE: ../node_modules/lodash-es/_isIndex.js
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */

var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */

function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

/* harmony default export */ var _isIndex = (isIndex);
// CONCATENATED MODULE: ../node_modules/lodash-es/isLength.js
/** Used as references for various `Number` constants. */
var isLength_MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */

function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= isLength_MAX_SAFE_INTEGER;
}

/* harmony default export */ var lodash_es_isLength = (isLength);
// CONCATENATED MODULE: ../node_modules/lodash-es/_baseIsTypedArray.js



/** `Object#toString` result references. */

var _baseIsTypedArray_argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    _baseIsTypedArray_funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values of typed arrays. */

var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[_baseIsTypedArray_argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[_baseIsTypedArray_funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */

function baseIsTypedArray(value) {
  return lodash_es_isObjectLike(value) && lodash_es_isLength(value.length) && !!typedArrayTags[_baseGetTag(value)];
}

/* harmony default export */ var _baseIsTypedArray = (baseIsTypedArray);
// CONCATENATED MODULE: ../node_modules/lodash-es/_baseUnary.js
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

/* harmony default export */ var _baseUnary = (baseUnary);
// EXTERNAL MODULE: ../node_modules/lodash-es/_nodeUtil.js
var _nodeUtil = __webpack_require__("zs9M");

// CONCATENATED MODULE: ../node_modules/lodash-es/isTypedArray.js



/* Node.js helper references. */

var nodeIsTypedArray = _nodeUtil["a" /* default */] && _nodeUtil["a" /* default */].isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */

var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;
/* harmony default export */ var lodash_es_isTypedArray = (isTypedArray);
// CONCATENATED MODULE: ../node_modules/lodash-es/_arrayLikeKeys.js






/** Used for built-in method references. */

var _arrayLikeKeys_objectProto = Object.prototype;
/** Used to check objects for own properties. */

var _arrayLikeKeys_hasOwnProperty = _arrayLikeKeys_objectProto.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */

function arrayLikeKeys(value, inherited) {
  var isArr = lodash_es_isArray(value),
      isArg = !isArr && lodash_es_isArguments(value),
      isBuff = !isArr && !isArg && Object(isBuffer["a" /* default */])(value),
      isType = !isArr && !isArg && !isBuff && lodash_es_isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? _baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || _arrayLikeKeys_hasOwnProperty.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
    _isIndex(key, length)))) {
      result.push(key);
    }
  }

  return result;
}

/* harmony default export */ var _arrayLikeKeys = (arrayLikeKeys);
// CONCATENATED MODULE: ../node_modules/lodash-es/_isPrototype.js
/** Used for built-in method references. */
var _isPrototype_objectProto = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */

function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || _isPrototype_objectProto;
  return value === proto;
}

/* harmony default export */ var _isPrototype = (isPrototype);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("75LO");

// CONCATENATED MODULE: ../node_modules/lodash-es/_overArg.js
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ var _overArg = (overArg);
// CONCATENATED MODULE: ../node_modules/lodash-es/_nativeKeys.js





/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeKeys = _overArg(Object.keys, Object);
/* harmony default export */ var _nativeKeys = (nativeKeys);
// CONCATENATED MODULE: ../node_modules/lodash-es/_baseKeys.js


/** Used for built-in method references. */

var _baseKeys_objectProto = Object.prototype;
/** Used to check objects for own properties. */

var _baseKeys_hasOwnProperty = _baseKeys_objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }

  var result = [];

  for (var key in Object(object)) {
    if (_baseKeys_hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }

  return result;
}

/* harmony default export */ var _baseKeys = (baseKeys);
// CONCATENATED MODULE: ../node_modules/lodash-es/isArrayLike.js


/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */

function isArrayLike(value) {
  return value != null && lodash_es_isLength(value.length) && !lodash_es_isFunction(value);
}

/* harmony default export */ var lodash_es_isArrayLike = (isArrayLike);
// CONCATENATED MODULE: ../node_modules/lodash-es/keys.js



/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */

function keys(object) {
  return lodash_es_isArrayLike(object) ? _arrayLikeKeys(object) : _baseKeys(object);
}

/* harmony default export */ var lodash_es_keys = (keys);
// CONCATENATED MODULE: ../node_modules/lodash-es/_baseForOwn.js


/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */

function baseForOwn(object, iteratee) {
  return object && _baseFor(object, iteratee, lodash_es_keys);
}

/* harmony default export */ var _baseForOwn = (baseForOwn);
// CONCATENATED MODULE: ../node_modules/lodash-es/_createBaseEach.js

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */

function createBaseEach(eachFunc, fromRight) {
  return function (collection, iteratee) {
    if (collection == null) {
      return collection;
    }

    if (!lodash_es_isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }

    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while (fromRight ? index-- : ++index < length) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }

    return collection;
  };
}

/* harmony default export */ var _createBaseEach = (createBaseEach);
// CONCATENATED MODULE: ../node_modules/lodash-es/_baseEach.js


/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */

var baseEach = _createBaseEach(_baseForOwn);
/* harmony default export */ var _baseEach = (baseEach);
// CONCATENATED MODULE: ../node_modules/lodash-es/_baseAggregator.js

/**
 * Aggregates elements of `collection` on `accumulator` with keys transformed
 * by `iteratee` and values set by `setter`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */

function baseAggregator(collection, setter, iteratee, accumulator) {
  _baseEach(collection, function (value, key, collection) {
    setter(accumulator, value, iteratee(value), collection);
  });
  return accumulator;
}

/* harmony default export */ var _baseAggregator = (baseAggregator);
// CONCATENATED MODULE: ../node_modules/lodash-es/_listCacheClear.js
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/* harmony default export */ var _listCacheClear = (listCacheClear);
// CONCATENATED MODULE: ../node_modules/lodash-es/eq.js
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

/* harmony default export */ var lodash_es_eq = (eq);
// CONCATENATED MODULE: ../node_modules/lodash-es/_assocIndexOf.js

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */

function assocIndexOf(array, key) {
  var length = array.length;

  while (length--) {
    if (lodash_es_eq(array[length][0], key)) {
      return length;
    }
  }

  return -1;
}

/* harmony default export */ var _assocIndexOf = (assocIndexOf);
// CONCATENATED MODULE: ../node_modules/lodash-es/_listCacheDelete.js

/** Used for built-in method references. */

var arrayProto = Array.prototype;
/** Built-in value references. */

var splice = arrayProto.splice;
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }

  var lastIndex = data.length - 1;

  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }

  --this.size;
  return true;
}

/* harmony default export */ var _listCacheDelete = (listCacheDelete);
// CONCATENATED MODULE: ../node_modules/lodash-es/_listCacheGet.js

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}

/* harmony default export */ var _listCacheGet = (listCacheGet);
// CONCATENATED MODULE: ../node_modules/lodash-es/_listCacheHas.js

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

/* harmony default export */ var _listCacheHas = (listCacheHas);
// CONCATENATED MODULE: ../node_modules/lodash-es/_listCacheSet.js

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */

function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }

  return this;
}

/* harmony default export */ var _listCacheSet = (listCacheSet);
// CONCATENATED MODULE: ../node_modules/lodash-es/_ListCache.js





/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `ListCache`.


ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;
/* harmony default export */ var _ListCache = (ListCache);
// CONCATENATED MODULE: ../node_modules/lodash-es/_stackClear.js

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */

function stackClear() {
  this.__data__ = new _ListCache();
  this.size = 0;
}

/* harmony default export */ var _stackClear = (stackClear);
// CONCATENATED MODULE: ../node_modules/lodash-es/_stackDelete.js
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);
  this.size = data.size;
  return result;
}

/* harmony default export */ var _stackDelete = (stackDelete);
// CONCATENATED MODULE: ../node_modules/lodash-es/_stackGet.js
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/* harmony default export */ var _stackGet = (stackGet);
// CONCATENATED MODULE: ../node_modules/lodash-es/_stackHas.js
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/* harmony default export */ var _stackHas = (stackHas);
// CONCATENATED MODULE: ../node_modules/lodash-es/_Map.js


/* Built-in method references that are verified to be native. */

var Map = _getNative(_root["a" /* default */], 'Map');
/* harmony default export */ var _Map = (Map);
// CONCATENATED MODULE: ../node_modules/lodash-es/_nativeCreate.js

/* Built-in method references that are verified to be native. */

var nativeCreate = _getNative(Object, 'create');
/* harmony default export */ var _nativeCreate = (nativeCreate);
// CONCATENATED MODULE: ../node_modules/lodash-es/_hashClear.js

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */

function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

/* harmony default export */ var _hashClear = (hashClear);
// CONCATENATED MODULE: ../node_modules/lodash-es/_hashDelete.js
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/* harmony default export */ var _hashDelete = (hashDelete);
// CONCATENATED MODULE: ../node_modules/lodash-es/_hashGet.js

/** Used to stand-in for `undefined` hash values. */

var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used for built-in method references. */

var _hashGet_objectProto = Object.prototype;
/** Used to check objects for own properties. */

var _hashGet_hasOwnProperty = _hashGet_objectProto.hasOwnProperty;
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function hashGet(key) {
  var data = this.__data__;

  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }

  return _hashGet_hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/* harmony default export */ var _hashGet = (hashGet);
// CONCATENATED MODULE: ../node_modules/lodash-es/_hashHas.js

/** Used for built-in method references. */

var _hashHas_objectProto = Object.prototype;
/** Used to check objects for own properties. */

var _hashHas_hasOwnProperty = _hashHas_objectProto.hasOwnProperty;
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? data[key] !== undefined : _hashHas_hasOwnProperty.call(data, key);
}

/* harmony default export */ var _hashHas = (hashHas);
// CONCATENATED MODULE: ../node_modules/lodash-es/_hashSet.js

/** Used to stand-in for `undefined` hash values. */

var _hashSet_HASH_UNDEFINED = '__lodash_hash_undefined__';
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */

function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = _nativeCreate && value === undefined ? _hashSet_HASH_UNDEFINED : value;
  return this;
}

/* harmony default export */ var _hashSet = (hashSet);
// CONCATENATED MODULE: ../node_modules/lodash-es/_Hash.js





/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `Hash`.


Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;
/* harmony default export */ var _Hash = (Hash);
// CONCATENATED MODULE: ../node_modules/lodash-es/_mapCacheClear.js



/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */

function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash(),
    'map': new (_Map || _ListCache)(),
    'string': new _Hash()
  };
}

/* harmony default export */ var _mapCacheClear = (mapCacheClear);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.map.js
var es6_array_map = __webpack_require__("yIlq");

// CONCATENATED MODULE: ../node_modules/lodash-es/_isKeyable.js
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

/* harmony default export */ var _isKeyable = (isKeyable);
// CONCATENATED MODULE: ../node_modules/lodash-es/_getMapData.js


/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */

function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

/* harmony default export */ var _getMapData = (getMapData);
// CONCATENATED MODULE: ../node_modules/lodash-es/_mapCacheDelete.js

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/* harmony default export */ var _mapCacheDelete = (mapCacheDelete);
// CONCATENATED MODULE: ../node_modules/lodash-es/_mapCacheGet.js

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

/* harmony default export */ var _mapCacheGet = (mapCacheGet);
// CONCATENATED MODULE: ../node_modules/lodash-es/_mapCacheHas.js

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

/* harmony default export */ var _mapCacheHas = (mapCacheHas);
// CONCATENATED MODULE: ../node_modules/lodash-es/_mapCacheSet.js

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */

function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
      size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

/* harmony default export */ var _mapCacheSet = (mapCacheSet);
// CONCATENATED MODULE: ../node_modules/lodash-es/_MapCache.js





/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `MapCache`.


MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;
/* harmony default export */ var _MapCache = (MapCache);
// CONCATENATED MODULE: ../node_modules/lodash-es/_stackSet.js



/** Used as the size to enable large array optimizations. */

var LARGE_ARRAY_SIZE = 200;
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */

function stackSet(key, value) {
  var data = this.__data__;

  if (data instanceof _ListCache) {
    var pairs = data.__data__;

    if (!_Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }

    data = this.__data__ = new _MapCache(pairs);
  }

  data.set(key, value);
  this.size = data.size;
  return this;
}

/* harmony default export */ var _stackSet = (stackSet);
// CONCATENATED MODULE: ../node_modules/lodash-es/_Stack.js






/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function Stack(entries) {
  var data = this.__data__ = new _ListCache(entries);
  this.size = data.size;
} // Add methods to `Stack`.


Stack.prototype.clear = _stackClear;
Stack.prototype['delete'] = _stackDelete;
Stack.prototype.get = _stackGet;
Stack.prototype.has = _stackHas;
Stack.prototype.set = _stackSet;
/* harmony default export */ var _Stack = (Stack);
// CONCATENATED MODULE: ../node_modules/lodash-es/_setCacheAdd.js
/** Used to stand-in for `undefined` hash values. */
var _setCacheAdd_HASH_UNDEFINED = '__lodash_hash_undefined__';
/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */

function setCacheAdd(value) {
  this.__data__.set(value, _setCacheAdd_HASH_UNDEFINED);

  return this;
}

/* harmony default export */ var _setCacheAdd = (setCacheAdd);
// CONCATENATED MODULE: ../node_modules/lodash-es/_setCacheHas.js
/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

/* harmony default export */ var _setCacheHas = (setCacheHas);
// CONCATENATED MODULE: ../node_modules/lodash-es/_SetCache.js



/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */

function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;
  this.__data__ = new _MapCache();

  while (++index < length) {
    this.add(values[index]);
  }
} // Add methods to `SetCache`.


SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd;
SetCache.prototype.has = _setCacheHas;
/* harmony default export */ var _SetCache = (SetCache);
// CONCATENATED MODULE: ../node_modules/lodash-es/_arraySome.js
/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }

  return false;
}

/* harmony default export */ var _arraySome = (arraySome);
// CONCATENATED MODULE: ../node_modules/lodash-es/_cacheHas.js
/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/* harmony default export */ var _cacheHas = (cacheHas);
// CONCATENATED MODULE: ../node_modules/lodash-es/_equalArrays.js



/** Used to compose bitmasks for value comparisons. */

var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;
/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */

function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  } // Assume cyclic values are equal.


  var stacked = stack.get(array);

  if (stacked && stack.get(other)) {
    return stacked == other;
  }

  var index = -1,
      result = true,
      seen = bitmask & COMPARE_UNORDERED_FLAG ? new _SetCache() : undefined;
  stack.set(array, other);
  stack.set(other, array); // Ignore non-index properties.

  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }

    if (compared !== undefined) {
      if (compared) {
        continue;
      }

      result = false;
      break;
    } // Recursively compare arrays (susceptible to call stack limits).


    if (seen) {
      if (!_arraySome(other, function (othValue, othIndex) {
        if (!_cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }

  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/* harmony default export */ var _equalArrays = (equalArrays);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("GkPX");

// CONCATENATED MODULE: ../node_modules/lodash-es/_Uint8Array.js

/** Built-in value references. */

var Uint8Array = _root["a" /* default */].Uint8Array;
/* harmony default export */ var _Uint8Array = (Uint8Array);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.for-each.js
var es6_array_for_each = __webpack_require__("7lGJ");

// CONCATENATED MODULE: ../node_modules/lodash-es/_mapToArray.js


/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);
  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/* harmony default export */ var _mapToArray = (mapToArray);
// CONCATENATED MODULE: ../node_modules/lodash-es/_setToArray.js


/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);
  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}

/* harmony default export */ var _setToArray = (setToArray);
// CONCATENATED MODULE: ../node_modules/lodash-es/_equalByTag.js







/** Used to compose bitmasks for value comparisons. */

var _equalByTag_COMPARE_PARTIAL_FLAG = 1,
    _equalByTag_COMPARE_UNORDERED_FLAG = 2;
/** `Object#toString` result references. */

var _equalByTag_boolTag = '[object Boolean]',
    _equalByTag_dateTag = '[object Date]',
    _equalByTag_errorTag = '[object Error]',
    _equalByTag_mapTag = '[object Map]',
    _equalByTag_numberTag = '[object Number]',
    _equalByTag_regexpTag = '[object RegExp]',
    _equalByTag_setTag = '[object Set]',
    _equalByTag_stringTag = '[object String]',
    symbolTag = '[object Symbol]';
var _equalByTag_arrayBufferTag = '[object ArrayBuffer]',
    _equalByTag_dataViewTag = '[object DataView]';
/** Used to convert symbols to primitives and strings. */

var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */

function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case _equalByTag_dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }

      object = object.buffer;
      other = other.buffer;

    case _equalByTag_arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new _Uint8Array(object), new _Uint8Array(other))) {
        return false;
      }

      return true;

    case _equalByTag_boolTag:
    case _equalByTag_dateTag:
    case _equalByTag_numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return lodash_es_eq(+object, +other);

    case _equalByTag_errorTag:
      return object.name == other.name && object.message == other.message;

    case _equalByTag_regexpTag:
    case _equalByTag_stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == other + '';

    case _equalByTag_mapTag:
      var convert = _mapToArray;

    case _equalByTag_setTag:
      var isPartial = bitmask & _equalByTag_COMPARE_PARTIAL_FLAG;
      convert || (convert = _setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      } // Assume cyclic values are equal.


      var stacked = stack.get(object);

      if (stacked) {
        return stacked == other;
      }

      bitmask |= _equalByTag_COMPARE_UNORDERED_FLAG; // Recursively compare objects (susceptible to call stack limits).

      stack.set(object, other);
      var result = _equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }

  }

  return false;
}

/* harmony default export */ var _equalByTag = (equalByTag);
// CONCATENATED MODULE: ../node_modules/lodash-es/_arrayPush.js
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }

  return array;
}

/* harmony default export */ var _arrayPush = (arrayPush);
// CONCATENATED MODULE: ../node_modules/lodash-es/_baseGetAllKeys.js


/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */

function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return lodash_es_isArray(object) ? result : _arrayPush(result, symbolsFunc(object));
}

/* harmony default export */ var _baseGetAllKeys = (baseGetAllKeys);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__("ABKx");

// CONCATENATED MODULE: ../node_modules/lodash-es/_arrayFilter.js
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];

    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }

  return result;
}

/* harmony default export */ var _arrayFilter = (arrayFilter);
// CONCATENATED MODULE: ../node_modules/lodash-es/stubArray.js
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/* harmony default export */ var lodash_es_stubArray = (stubArray);
// CONCATENATED MODULE: ../node_modules/lodash-es/_getSymbols.js



/** Used for built-in method references. */

var _getSymbols_objectProto = Object.prototype;
/** Built-in value references. */

var _getSymbols_propertyIsEnumerable = _getSymbols_objectProto.propertyIsEnumerable;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeGetSymbols = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */

var getSymbols = !nativeGetSymbols ? lodash_es_stubArray : function (object) {
  if (object == null) {
    return [];
  }

  object = Object(object);
  return _arrayFilter(nativeGetSymbols(object), function (symbol) {
    return _getSymbols_propertyIsEnumerable.call(object, symbol);
  });
};
/* harmony default export */ var _getSymbols = (getSymbols);
// CONCATENATED MODULE: ../node_modules/lodash-es/_getAllKeys.js



/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */

function getAllKeys(object) {
  return _baseGetAllKeys(object, lodash_es_keys, _getSymbols);
}

/* harmony default export */ var _getAllKeys = (getAllKeys);
// CONCATENATED MODULE: ../node_modules/lodash-es/_equalObjects.js

/** Used to compose bitmasks for value comparisons. */

var _equalObjects_COMPARE_PARTIAL_FLAG = 1;
/** Used for built-in method references. */

var _equalObjects_objectProto = Object.prototype;
/** Used to check objects for own properties. */

var _equalObjects_hasOwnProperty = _equalObjects_objectProto.hasOwnProperty;
/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */

function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & _equalObjects_COMPARE_PARTIAL_FLAG,
      objProps = _getAllKeys(object),
      objLength = objProps.length,
      othProps = _getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }

  var index = objLength;

  while (index--) {
    var key = objProps[index];

    if (!(isPartial ? key in other : _equalObjects_hasOwnProperty.call(other, key))) {
      return false;
    }
  } // Assume cyclic values are equal.


  var stacked = stack.get(object);

  if (stacked && stack.get(other)) {
    return stacked == other;
  }

  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;

  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    } // Recursively compare objects (susceptible to call stack limits).


    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }

    skipCtor || (skipCtor = key == 'constructor');
  }

  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor; // Non `Object` object instances with different constructors are not equal.

    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }

  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/* harmony default export */ var _equalObjects = (equalObjects);
// CONCATENATED MODULE: ../node_modules/lodash-es/_DataView.js


/* Built-in method references that are verified to be native. */

var DataView = _getNative(_root["a" /* default */], 'DataView');
/* harmony default export */ var _DataView = (DataView);
// CONCATENATED MODULE: ../node_modules/lodash-es/_Promise.js


/* Built-in method references that are verified to be native. */

var Promise = _getNative(_root["a" /* default */], 'Promise');
/* harmony default export */ var _Promise = (Promise);
// CONCATENATED MODULE: ../node_modules/lodash-es/_Set.js


/* Built-in method references that are verified to be native. */

var Set = _getNative(_root["a" /* default */], 'Set');
/* harmony default export */ var _Set = (Set);
// CONCATENATED MODULE: ../node_modules/lodash-es/_WeakMap.js


/* Built-in method references that are verified to be native. */

var WeakMap = _getNative(_root["a" /* default */], 'WeakMap');
/* harmony default export */ var _WeakMap = (WeakMap);
// CONCATENATED MODULE: ../node_modules/lodash-es/_getTag.js







/** `Object#toString` result references. */

var _getTag_mapTag = '[object Map]',
    _getTag_objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    _getTag_setTag = '[object Set]',
    _getTag_weakMapTag = '[object WeakMap]';
var _getTag_dataViewTag = '[object DataView]';
/** Used to detect maps, sets, and weakmaps. */

var dataViewCtorString = _toSource(_DataView),
    mapCtorString = _toSource(_Map),
    promiseCtorString = _toSource(_Promise),
    setCtorString = _toSource(_Set),
    weakMapCtorString = _toSource(_WeakMap);
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

var _getTag_getTag = _baseGetTag; // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.

if (_DataView && _getTag_getTag(new _DataView(new ArrayBuffer(1))) != _getTag_dataViewTag || _Map && _getTag_getTag(new _Map()) != _getTag_mapTag || _Promise && _getTag_getTag(_Promise.resolve()) != promiseTag || _Set && _getTag_getTag(new _Set()) != _getTag_setTag || _WeakMap && _getTag_getTag(new _WeakMap()) != _getTag_weakMapTag) {
  _getTag_getTag = function getTag(value) {
    var result = _baseGetTag(value),
        Ctor = result == _getTag_objectTag ? value.constructor : undefined,
        ctorString = Ctor ? _toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return _getTag_dataViewTag;

        case mapCtorString:
          return _getTag_mapTag;

        case promiseCtorString:
          return promiseTag;

        case setCtorString:
          return _getTag_setTag;

        case weakMapCtorString:
          return _getTag_weakMapTag;
      }
    }

    return result;
  };
}

/* harmony default export */ var _getTag = (_getTag_getTag);
// CONCATENATED MODULE: ../node_modules/lodash-es/_baseIsEqualDeep.js








/** Used to compose bitmasks for value comparisons. */

var _baseIsEqualDeep_COMPARE_PARTIAL_FLAG = 1;
/** `Object#toString` result references. */

var _baseIsEqualDeep_argsTag = '[object Arguments]',
    _baseIsEqualDeep_arrayTag = '[object Array]',
    _baseIsEqualDeep_objectTag = '[object Object]';
/** Used for built-in method references. */

var _baseIsEqualDeep_objectProto = Object.prototype;
/** Used to check objects for own properties. */

var _baseIsEqualDeep_hasOwnProperty = _baseIsEqualDeep_objectProto.hasOwnProperty;
/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */

function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = lodash_es_isArray(object),
      othIsArr = lodash_es_isArray(other),
      objTag = objIsArr ? _baseIsEqualDeep_arrayTag : _getTag(object),
      othTag = othIsArr ? _baseIsEqualDeep_arrayTag : _getTag(other);
  objTag = objTag == _baseIsEqualDeep_argsTag ? _baseIsEqualDeep_objectTag : objTag;
  othTag = othTag == _baseIsEqualDeep_argsTag ? _baseIsEqualDeep_objectTag : othTag;
  var objIsObj = objTag == _baseIsEqualDeep_objectTag,
      othIsObj = othTag == _baseIsEqualDeep_objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && Object(isBuffer["a" /* default */])(object)) {
    if (!Object(isBuffer["a" /* default */])(other)) {
      return false;
    }

    objIsArr = true;
    objIsObj = false;
  }

  if (isSameTag && !objIsObj) {
    stack || (stack = new _Stack());
    return objIsArr || lodash_es_isTypedArray(object) ? _equalArrays(object, other, bitmask, customizer, equalFunc, stack) : _equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }

  if (!(bitmask & _baseIsEqualDeep_COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && _baseIsEqualDeep_hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && _baseIsEqualDeep_hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new _Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }

  if (!isSameTag) {
    return false;
  }

  stack || (stack = new _Stack());
  return _equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

/* harmony default export */ var _baseIsEqualDeep = (baseIsEqualDeep);
// CONCATENATED MODULE: ../node_modules/lodash-es/_baseIsEqual.js


/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */

function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }

  if (value == null || other == null || !lodash_es_isObjectLike(value) && !lodash_es_isObjectLike(other)) {
    return value !== value && other !== other;
  }

  return _baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

/* harmony default export */ var _baseIsEqual = (baseIsEqual);
// CONCATENATED MODULE: ../node_modules/lodash-es/_baseIsMatch.js


/** Used to compose bitmasks for value comparisons. */

var _baseIsMatch_COMPARE_PARTIAL_FLAG = 1,
    _baseIsMatch_COMPARE_UNORDERED_FLAG = 2;
/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */

function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }

  object = Object(object);

  while (index--) {
    var data = matchData[index];

    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }

  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new _Stack();

      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }

      if (!(result === undefined ? _baseIsEqual(srcValue, objValue, _baseIsMatch_COMPARE_PARTIAL_FLAG | _baseIsMatch_COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
        return false;
      }
    }
  }

  return true;
}

/* harmony default export */ var _baseIsMatch = (baseIsMatch);
// CONCATENATED MODULE: ../node_modules/lodash-es/_isStrictComparable.js

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */

function isStrictComparable(value) {
  return value === value && !lodash_es_isObject(value);
}

/* harmony default export */ var _isStrictComparable = (isStrictComparable);
// CONCATENATED MODULE: ../node_modules/lodash-es/_getMatchData.js


/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */

function getMatchData(object) {
  var result = lodash_es_keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];
    result[length] = [key, value, _isStrictComparable(value)];
  }

  return result;
}

/* harmony default export */ var _getMatchData = (getMatchData);
// CONCATENATED MODULE: ../node_modules/lodash-es/_matchesStrictComparable.js
/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function (object) {
    if (object == null) {
      return false;
    }

    return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
  };
}

/* harmony default export */ var _matchesStrictComparable = (matchesStrictComparable);
// CONCATENATED MODULE: ../node_modules/lodash-es/_baseMatches.js



/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */

function baseMatches(source) {
  var matchData = _getMatchData(source);

  if (matchData.length == 1 && matchData[0][2]) {
    return _matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }

  return function (object) {
    return object === source || _baseIsMatch(object, source, matchData);
  };
}

/* harmony default export */ var _baseMatches = (baseMatches);
// CONCATENATED MODULE: ../node_modules/lodash-es/isSymbol.js


/** `Object#toString` result references. */

var isSymbol_symbolTag = '[object Symbol]';
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */

function isSymbol(value) {
  return typeof value == 'symbol' || lodash_es_isObjectLike(value) && _baseGetTag(value) == isSymbol_symbolTag;
}

/* harmony default export */ var lodash_es_isSymbol = (isSymbol);
// CONCATENATED MODULE: ../node_modules/lodash-es/_isKey.js


/** Used to match property names within property paths. */

var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;
/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */

function isKey(value, object) {
  if (lodash_es_isArray(value)) {
    return false;
  }

  var type = typeof value;

  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || lodash_es_isSymbol(value)) {
    return true;
  }

  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}

/* harmony default export */ var _isKey = (isKey);
// CONCATENATED MODULE: ../node_modules/lodash-es/memoize.js

/** Error message constants. */

var FUNC_ERROR_TEXT = 'Expected a function';
/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */

function memoize(func, resolver) {
  if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  var memoized = function memoized() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }

    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };

  memoized.cache = new (memoize.Cache || _MapCache)();
  return memoized;
} // Expose `MapCache`.


memoize.Cache = _MapCache;
/* harmony default export */ var lodash_es_memoize = (memoize);
// CONCATENATED MODULE: ../node_modules/lodash-es/_memoizeCapped.js

/** Used as the maximum memoize cache size. */

var MAX_MEMOIZE_SIZE = 500;
/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */

function memoizeCapped(func) {
  var result = lodash_es_memoize(func, function (key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }

    return key;
  });
  var cache = result.cache;
  return result;
}

/* harmony default export */ var _memoizeCapped = (memoizeCapped);
// CONCATENATED MODULE: ../node_modules/lodash-es/_stringToPath.js


/** Used to match property names within property paths. */

var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
/** Used to match backslashes in property paths. */

var reEscapeChar = /\\(\\)?/g;
/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */

var stringToPath = _memoizeCapped(function (string) {
  var result = [];

  if (string.charCodeAt(0) === 46
  /* . */
  ) {
      result.push('');
    }

  string.replace(rePropName, function (match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});
/* harmony default export */ var _stringToPath = (stringToPath);
// CONCATENATED MODULE: ../node_modules/lodash-es/_arrayMap.js
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }

  return result;
}

/* harmony default export */ var _arrayMap = (arrayMap);
// CONCATENATED MODULE: ../node_modules/lodash-es/_baseToString.js







/** Used as references for various `Number` constants. */

var INFINITY = 1 / 0;
/** Used to convert symbols to primitives and strings. */

var _baseToString_symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = _baseToString_symbolProto ? _baseToString_symbolProto.toString : undefined;
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */

function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }

  if (lodash_es_isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return _arrayMap(value, baseToString) + '';
  }

  if (lodash_es_isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

/* harmony default export */ var _baseToString = (baseToString);
// CONCATENATED MODULE: ../node_modules/lodash-es/toString.js

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */

function toString_toString(value) {
  return value == null ? '' : _baseToString(value);
}

/* harmony default export */ var lodash_es_toString = (toString_toString);
// CONCATENATED MODULE: ../node_modules/lodash-es/_castPath.js




/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */

function castPath(value, object) {
  if (lodash_es_isArray(value)) {
    return value;
  }

  return _isKey(value, object) ? [value] : _stringToPath(lodash_es_toString(value));
}

/* harmony default export */ var _castPath = (castPath);
// CONCATENATED MODULE: ../node_modules/lodash-es/_toKey.js

/** Used as references for various `Number` constants. */

var _toKey_INFINITY = 1 / 0;
/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */

function toKey(value) {
  if (typeof value == 'string' || lodash_es_isSymbol(value)) {
    return value;
  }

  var result = value + '';
  return result == '0' && 1 / value == -_toKey_INFINITY ? '-0' : result;
}

/* harmony default export */ var _toKey = (toKey);
// CONCATENATED MODULE: ../node_modules/lodash-es/_baseGet.js


/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */

function baseGet(object, path) {
  path = _castPath(path, object);
  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[_toKey(path[index++])];
  }

  return index && index == length ? object : undefined;
}

/* harmony default export */ var _baseGet = (baseGet);
// CONCATENATED MODULE: ../node_modules/lodash-es/get.js

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */

function get(object, path, defaultValue) {
  var result = object == null ? undefined : _baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

/* harmony default export */ var lodash_es_get = (get);
// CONCATENATED MODULE: ../node_modules/lodash-es/_baseHasIn.js
/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

/* harmony default export */ var _baseHasIn = (baseHasIn);
// CONCATENATED MODULE: ../node_modules/lodash-es/_hasPath.js






/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */

function hasPath(object, path, hasFunc) {
  path = _castPath(path, object);
  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = _toKey(path[index]);

    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }

    object = object[key];
  }

  if (result || ++index != length) {
    return result;
  }

  length = object == null ? 0 : object.length;
  return !!length && lodash_es_isLength(length) && _isIndex(key, length) && (lodash_es_isArray(object) || lodash_es_isArguments(object));
}

/* harmony default export */ var _hasPath = (hasPath);
// CONCATENATED MODULE: ../node_modules/lodash-es/hasIn.js


/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */

function hasIn(object, path) {
  return object != null && _hasPath(object, path, _baseHasIn);
}

/* harmony default export */ var lodash_es_hasIn = (hasIn);
// CONCATENATED MODULE: ../node_modules/lodash-es/_baseMatchesProperty.js







/** Used to compose bitmasks for value comparisons. */

var _baseMatchesProperty_COMPARE_PARTIAL_FLAG = 1,
    _baseMatchesProperty_COMPARE_UNORDERED_FLAG = 2;
/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */

function baseMatchesProperty(path, srcValue) {
  if (_isKey(path) && _isStrictComparable(srcValue)) {
    return _matchesStrictComparable(_toKey(path), srcValue);
  }

  return function (object) {
    var objValue = lodash_es_get(object, path);
    return objValue === undefined && objValue === srcValue ? lodash_es_hasIn(object, path) : _baseIsEqual(srcValue, objValue, _baseMatchesProperty_COMPARE_PARTIAL_FLAG | _baseMatchesProperty_COMPARE_UNORDERED_FLAG);
  };
}

/* harmony default export */ var _baseMatchesProperty = (baseMatchesProperty);
// CONCATENATED MODULE: ../node_modules/lodash-es/identity.js
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/* harmony default export */ var lodash_es_identity = (identity);
// CONCATENATED MODULE: ../node_modules/lodash-es/_baseProperty.js
/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function (object) {
    return object == null ? undefined : object[key];
  };
}

/* harmony default export */ var _baseProperty = (baseProperty);
// CONCATENATED MODULE: ../node_modules/lodash-es/_basePropertyDeep.js

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */

function basePropertyDeep(path) {
  return function (object) {
    return _baseGet(object, path);
  };
}

/* harmony default export */ var _basePropertyDeep = (basePropertyDeep);
// CONCATENATED MODULE: ../node_modules/lodash-es/property.js




/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */

function property(path) {
  return _isKey(path) ? _baseProperty(_toKey(path)) : _basePropertyDeep(path);
}

/* harmony default export */ var lodash_es_property = (property);
// CONCATENATED MODULE: ../node_modules/lodash-es/_baseIteratee.js





/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */

function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }

  if (value == null) {
    return lodash_es_identity;
  }

  if (typeof value == 'object') {
    return lodash_es_isArray(value) ? _baseMatchesProperty(value[0], value[1]) : _baseMatches(value);
  }

  return lodash_es_property(value);
}

/* harmony default export */ var _baseIteratee = (baseIteratee);
// CONCATENATED MODULE: ../node_modules/lodash-es/_createAggregator.js




/**
 * Creates a function like `_.groupBy`.
 *
 * @private
 * @param {Function} setter The function to set accumulator values.
 * @param {Function} [initializer] The accumulator object initializer.
 * @returns {Function} Returns the new aggregator function.
 */

function createAggregator(setter, initializer) {
  return function (collection, iteratee) {
    var func = lodash_es_isArray(collection) ? _arrayAggregator : _baseAggregator,
        accumulator = initializer ? initializer() : {};
    return func(collection, setter, _baseIteratee(iteratee, 2), accumulator);
  };
}

/* harmony default export */ var _createAggregator = (createAggregator);
// CONCATENATED MODULE: ../node_modules/lodash-es/groupBy.js


/** Used for built-in method references. */

var groupBy_objectProto = Object.prototype;
/** Used to check objects for own properties. */

var groupBy_hasOwnProperty = groupBy_objectProto.hasOwnProperty;
/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The order of grouped values
 * is determined by the order they occur in `collection`. The corresponding
 * value of each key is an array of elements responsible for generating the
 * key. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * _.groupBy([6.1, 4.2, 6.3], Math.floor);
 * // => { '4': [4.2], '6': [6.1, 6.3] }
 *
 * // The `_.property` iteratee shorthand.
 * _.groupBy(['one', 'two', 'three'], 'length');
 * // => { '3': ['one', 'two'], '5': ['three'] }
 */

var groupBy = _createAggregator(function (result, value, key) {
  if (groupBy_hasOwnProperty.call(result, key)) {
    result[key].push(value);
  } else {
    _baseAssignValue(result, key, [value]);
  }
});
/* harmony default export */ var lodash_es_groupBy = __webpack_exports__["a"] = (groupBy);

/***/ }),

/***/ "znB+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.index-of.js
var es6_array_index_of = __webpack_require__("V7cS");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.object.create.js
var es6_object_create = __webpack_require__("PAbq");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.object.set-prototype-of.js
var es6_object_set_prototype_of = __webpack_require__("1qKx");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("5hJT");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.object.define-property.js
var es6_object_define_property = __webpack_require__("d3/y");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__("+jjx");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__("ABKx");

// EXTERNAL MODULE: ../node_modules/@ant-design/create-react-context/lib/index.js
var lib = __webpack_require__("1wI9");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__("mXGw");

// EXTERNAL MODULE: ./.cache/react-lifecycles-compat.js
var react_lifecycles_compat = __webpack_require__("94VI");

// EXTERNAL MODULE: ../node_modules/classnames/index.js
var classnames = __webpack_require__("8Jek");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ../node_modules/omit.js/es/index.js
var es = __webpack_require__("x9u5");

// EXTERNAL MODULE: ../node_modules/antd/es/layout/layout.js
var layout = __webpack_require__("tvu5");

// EXTERNAL MODULE: ../node_modules/antd/es/config-provider/context.js + 4 modules
var config_provider_context = __webpack_require__("Bfez");

// EXTERNAL MODULE: ../node_modules/antd/es/icon/index.js + 4 modules
var icon = __webpack_require__("epfg");

// CONCATENATED MODULE: ../node_modules/antd/es/_util/isNumeric.js
var isNumeric = function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
};

/* harmony default export */ var _util_isNumeric = (isNumeric);
// CONCATENATED MODULE: ../node_modules/antd/es/layout/Sider.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiderContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Sider_Sider; });








function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};









 // matchMedia polyfill for
// https://github.com/WickyNilliams/enquire.js/issues/82
// TODO: Will be removed in antd 4.0 because we will no longer support ie9

if (typeof window !== 'undefined') {
  var matchMediaPolyfill = function matchMediaPolyfill(mediaQuery) {
    return {
      media: mediaQuery,
      matches: false,
      addListener: function addListener() {},
      removeListener: function removeListener() {}
    };
  }; // ref: https://github.com/ant-design/ant-design/issues/18774


  if (!window.matchMedia) window.matchMedia = matchMediaPolyfill;
}

var dimensionMaxMap = {
  xs: '479.98px',
  sm: '575.98px',
  md: '767.98px',
  lg: '991.98px',
  xl: '1199.98px',
  xxl: '1599.98px'
};
var SiderContext = lib_default()({});

var generateId = function () {
  var i = 0;
  return function () {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    i += 1;
    return "".concat(prefix).concat(i);
  };
}();

var Sider_InternalSider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InternalSider, _React$Component);

  function InternalSider(props) {
    var _this;

    _classCallCheck(this, InternalSider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InternalSider).call(this, props));

    _this.responsiveHandler = function (mql) {
      _this.setState({
        below: mql.matches
      });

      var onBreakpoint = _this.props.onBreakpoint;

      if (onBreakpoint) {
        onBreakpoint(mql.matches);
      }

      if (_this.state.collapsed !== mql.matches) {
        _this.setCollapsed(mql.matches, 'responsive');
      }
    };

    _this.setCollapsed = function (collapsed, type) {
      if (!('collapsed' in _this.props)) {
        _this.setState({
          collapsed: collapsed
        });
      }

      var onCollapse = _this.props.onCollapse;

      if (onCollapse) {
        onCollapse(collapsed, type);
      }
    };

    _this.toggle = function () {
      var collapsed = !_this.state.collapsed;

      _this.setCollapsed(collapsed, 'clickTrigger');
    };

    _this.belowShowChange = function () {
      _this.setState(function (_ref) {
        var belowShow = _ref.belowShow;
        return {
          belowShow: !belowShow
        };
      });
    };

    _this.renderSider = function (_ref2) {
      var _classNames;

      var getPrefixCls = _ref2.getPrefixCls;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          className = _a.className,
          theme = _a.theme,
          collapsible = _a.collapsible,
          reverseArrow = _a.reverseArrow,
          trigger = _a.trigger,
          style = _a.style,
          width = _a.width,
          collapsedWidth = _a.collapsedWidth,
          zeroWidthTriggerStyle = _a.zeroWidthTriggerStyle,
          others = __rest(_a, ["prefixCls", "className", "theme", "collapsible", "reverseArrow", "trigger", "style", "width", "collapsedWidth", "zeroWidthTriggerStyle"]);

      var prefixCls = getPrefixCls('layout-sider', customizePrefixCls);
      var divProps = Object(es["a" /* default */])(others, ['collapsed', 'defaultCollapsed', 'onCollapse', 'breakpoint', 'onBreakpoint', 'siderHook', 'zeroWidthTriggerStyle']);
      var rawWidth = _this.state.collapsed ? collapsedWidth : width; // use "px" as fallback unit for width

      var siderWidth = _util_isNumeric(rawWidth) ? "".concat(rawWidth, "px") : String(rawWidth); // special trigger when collapsedWidth == 0

      var zeroWidthTrigger = parseFloat(String(collapsedWidth || 0)) === 0 ? react["createElement"]("span", {
        onClick: _this.toggle,
        className: "".concat(prefixCls, "-zero-width-trigger ").concat(prefixCls, "-zero-width-trigger-").concat(reverseArrow ? 'right' : 'left'),
        style: zeroWidthTriggerStyle
      }, react["createElement"](icon["a" /* default */], {
        type: "bars"
      })) : null;
      var iconObj = {
        expanded: reverseArrow ? react["createElement"](icon["a" /* default */], {
          type: "right"
        }) : react["createElement"](icon["a" /* default */], {
          type: "left"
        }),
        collapsed: reverseArrow ? react["createElement"](icon["a" /* default */], {
          type: "left"
        }) : react["createElement"](icon["a" /* default */], {
          type: "right"
        })
      };
      var status = _this.state.collapsed ? 'collapsed' : 'expanded';
      var defaultTrigger = iconObj[status];
      var triggerDom = trigger !== null ? zeroWidthTrigger || react["createElement"]("div", {
        className: "".concat(prefixCls, "-trigger"),
        onClick: _this.toggle,
        style: {
          width: siderWidth
        }
      }, trigger || defaultTrigger) : null;

      var divStyle = _extends(_extends({}, style), {
        flex: "0 0 ".concat(siderWidth),
        maxWidth: siderWidth,
        minWidth: siderWidth,
        width: siderWidth
      });

      var siderCls = classnames_default()(className, prefixCls, "".concat(prefixCls, "-").concat(theme), (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-collapsed"), !!_this.state.collapsed), _defineProperty(_classNames, "".concat(prefixCls, "-has-trigger"), collapsible && trigger !== null && !zeroWidthTrigger), _defineProperty(_classNames, "".concat(prefixCls, "-below"), !!_this.state.below), _defineProperty(_classNames, "".concat(prefixCls, "-zero-width"), parseFloat(siderWidth) === 0), _classNames));
      return react["createElement"]("aside", _extends({
        className: siderCls
      }, divProps, {
        style: divStyle
      }), react["createElement"]("div", {
        className: "".concat(prefixCls, "-children")
      }, _this.props.children), collapsible || _this.state.below && zeroWidthTrigger ? triggerDom : null);
    };

    _this.uniqueId = generateId('ant-sider-');
    var matchMedia;

    if (typeof window !== 'undefined') {
      matchMedia = window.matchMedia;
    }

    if (matchMedia && props.breakpoint && props.breakpoint in dimensionMaxMap) {
      _this.mql = matchMedia("(max-width: ".concat(dimensionMaxMap[props.breakpoint], ")"));
    }

    var collapsed;

    if ('collapsed' in props) {
      collapsed = props.collapsed;
    } else {
      collapsed = props.defaultCollapsed;
    }

    _this.state = {
      collapsed: collapsed,
      below: false
    };
    return _this;
  }

  _createClass(InternalSider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.mql) {
        this.mql.addListener(this.responsiveHandler);
        this.responsiveHandler(this.mql);
      }

      if (this.props.siderHook) {
        this.props.siderHook.addSider(this.uniqueId);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.mql) {
        this.mql.removeListener(this.responsiveHandler);
      }

      if (this.props.siderHook) {
        this.props.siderHook.removeSider(this.uniqueId);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var collapsed = this.state.collapsed;
      var collapsedWidth = this.props.collapsedWidth;
      return react["createElement"](SiderContext.Provider, {
        value: {
          siderCollapsed: collapsed,
          collapsedWidth: collapsedWidth
        }
      }, react["createElement"](config_provider_context["a" /* ConfigConsumer */], null, this.renderSider));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if ('collapsed' in nextProps) {
        return {
          collapsed: nextProps.collapsed
        };
      }

      return null;
    }
  }]);

  return InternalSider;
}(react["Component"]);

Sider_InternalSider.defaultProps = {
  collapsible: false,
  defaultCollapsed: false,
  reverseArrow: false,
  width: 200,
  collapsedWidth: 80,
  style: {},
  theme: 'dark'
};
Object(react_lifecycles_compat["polyfill"])(Sider_InternalSider); // eslint-disable-next-line react/prefer-stateless-function

var Sider_Sider =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Sider, _React$Component2);

  function Sider() {
    _classCallCheck(this, Sider);

    return _possibleConstructorReturn(this, _getPrototypeOf(Sider).apply(this, arguments));
  }

  _createClass(Sider, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react["createElement"](layout["a" /* LayoutContext */].Consumer, null, function (context) {
        return react["createElement"](Sider_InternalSider, _extends({}, context, _this2.props));
      });
    }
  }]);

  return Sider;
}(react["Component"]);



/***/ }),

/***/ "zs9M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("LJgF");

/** Detect free variable `exports`. */

var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */

var freeProcess = moduleExports && _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].process;
/** Used to access faster Node.js helpers. */

var nodeUtil = function () {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    } // Legacy `process.binding('util')` for Node.js < 10.


    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();

/* harmony default export */ __webpack_exports__["a"] = (nodeUtil);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("Ono3")(module)))

/***/ })

}]);
//# sourceMappingURL=2-7d252c9cbb6259b6157e.js.map