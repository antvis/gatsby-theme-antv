(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "/ciq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("SwVN");
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("T4Fc");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "37a1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__("+jjx");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__("ABKx");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.object.create.js
var es6_object_create = __webpack_require__("PAbq");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.object.set-prototype-of.js
var es6_object_set_prototype_of = __webpack_require__("1qKx");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.object.define-property.js
var es6_object_define_property = __webpack_require__("d3/y");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("5hJT");

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__("mXGw");

// EXTERNAL MODULE: ./.cache/react-lifecycles-compat.js
var react_lifecycles_compat = __webpack_require__("94VI");

// EXTERNAL MODULE: ../node_modules/classnames/index.js
var classnames = __webpack_require__("8Jek");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ../node_modules/omit.js/es/index.js
var es = __webpack_require__("x9u5");

// EXTERNAL MODULE: ../node_modules/rc-resize-observer/es/index.js
var rc_resize_observer_es = __webpack_require__("0lFU");
var es_default = /*#__PURE__*/__webpack_require__.n(rc_resize_observer_es);

// EXTERNAL MODULE: ../node_modules/antd/es/config-provider/context.js + 4 modules
var context = __webpack_require__("Bfez");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.function.bind.js
var es6_function_bind = __webpack_require__("o7PZ");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.is-array.js
var es6_array_is_array = __webpack_require__("+3V6");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__("lQyR");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.from.js
var es6_array_from = __webpack_require__("YhIr");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__("4aJ6");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.date.to-string.js
var es6_date_to_string = __webpack_require__("M/4x");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__("t91x");

// EXTERNAL MODULE: ../node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("W1QL");

// EXTERNAL MODULE: ../node_modules/raf/index.js
var raf = __webpack_require__("rQBY");
var raf_default = /*#__PURE__*/__webpack_require__.n(raf);

// CONCATENATED MODULE: ../node_modules/antd/es/_util/throttleByAnimationFrame.js












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


function throttleByAnimationFrame(fn) {
  var requestId;

  var later = function later(args) {
    return function () {
      requestId = null;
      fn.apply(void 0, _toConsumableArray(args));
    };
  };

  var throttled = function throttled() {
    if (requestId == null) {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      requestId = raf_default()(later(args));
    }
  };

  throttled.cancel = function () {
    return raf_default.a.cancel(requestId);
  };

  return throttled;
}
function throttleByAnimationFrameDecorator() {
  // eslint-disable-next-line func-names
  return function (target, key, descriptor) {
    var fn = descriptor.value;
    var definingProperty = false;
    return {
      configurable: true,
      get: function get() {
        // eslint-disable-next-line no-prototype-builtins
        if (definingProperty || this === target.prototype || this.hasOwnProperty(key)) {
          return fn;
        }

        var boundFn = throttleByAnimationFrame(fn.bind(this));
        definingProperty = true;
        Object.defineProperty(this, key, {
          value: boundFn,
          configurable: true,
          writable: true
        });
        definingProperty = false;
        return boundFn;
      }
    };
  };
}
// EXTERNAL MODULE: ../node_modules/antd/es/_util/warning.js
var warning = __webpack_require__("papw");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.filter.js
var es6_array_filter = __webpack_require__("9p7t");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.some.js
var es6_array_some = __webpack_require__("VNvs");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.for-each.js
var es6_array_for_each = __webpack_require__("7lGJ");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.find.js
var es6_array_find = __webpack_require__("it7j");

// EXTERNAL MODULE: ../node_modules/rc-util/es/Dom/addEventListener.js
var addEventListener = __webpack_require__("4Alm");

// CONCATENATED MODULE: ../node_modules/antd/es/affix/utils.js





function getTargetRect(target) {
  return target !== window ? target.getBoundingClientRect() : {
    top: 0,
    bottom: window.innerHeight
  };
}
function getFixedTop(placeholderReact, targetRect, offsetTop) {
  if (offsetTop !== undefined && targetRect.top > placeholderReact.top - offsetTop) {
    return offsetTop + targetRect.top;
  }

  return undefined;
}
function getFixedBottom(placeholderReact, targetRect, offsetBottom) {
  if (offsetBottom !== undefined && targetRect.bottom < placeholderReact.bottom + offsetBottom) {
    var targetBottomOffset = window.innerHeight - targetRect.bottom;
    return offsetBottom + targetBottomOffset;
  }

  return undefined;
} // ======================== Observer ========================

var TRIGGER_EVENTS = ['resize', 'scroll', 'touchstart', 'touchmove', 'touchend', 'pageshow', 'load'];
var observerEntities = [];
function getObserverEntities() {
  // Only used in test env. Can be removed if refactor.
  return observerEntities;
}
function addObserveTarget(target, affix) {
  if (!target) return;
  var entity = observerEntities.find(function (item) {
    return item.target === target;
  });

  if (entity) {
    entity.affixList.push(affix);
  } else {
    entity = {
      target: target,
      affixList: [affix],
      eventHandlers: {}
    };
    observerEntities.push(entity); // Add listener

    TRIGGER_EVENTS.forEach(function (eventName) {
      entity.eventHandlers[eventName] = Object(addEventListener["a" /* default */])(target, eventName, function () {
        entity.affixList.forEach(function (targetAffix) {
          targetAffix.lazyUpdatePosition();
        });
      });
    });
  }
}
function removeObserveTarget(affix) {
  var observerEntity = observerEntities.find(function (oriObserverEntity) {
    var hasAffix = oriObserverEntity.affixList.some(function (item) {
      return item === affix;
    });

    if (hasAffix) {
      oriObserverEntity.affixList = oriObserverEntity.affixList.filter(function (item) {
        return item !== affix;
      });
    }

    return hasAffix;
  });

  if (observerEntity && observerEntity.affixList.length === 0) {
    observerEntities = observerEntities.filter(function (item) {
      return item !== observerEntity;
    }); // Remove listener

    TRIGGER_EVENTS.forEach(function (eventName) {
      var handler = observerEntity.eventHandlers[eventName];

      if (handler && handler.remove) {
        handler.remove();
      }
    });
  }
}
// CONCATENATED MODULE: ../node_modules/antd/es/affix/index.js







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

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};











function getDefaultTarget() {
  return typeof window !== 'undefined' ? window : null;
}

var AffixStatus;

(function (AffixStatus) {
  AffixStatus[AffixStatus["None"] = 0] = "None";
  AffixStatus[AffixStatus["Prepare"] = 1] = "Prepare";
})(AffixStatus || (AffixStatus = {}));

var affix_Affix =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Affix, _React$Component);

  function Affix() {
    var _this;

    _classCallCheck(this, Affix);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Affix).apply(this, arguments));
    _this.state = {
      status: AffixStatus.None,
      lastAffix: false,
      prevTarget: null
    };

    _this.getOffsetTop = function () {
      var _this$props = _this.props,
          offset = _this$props.offset,
          offsetBottom = _this$props.offsetBottom;
      var offsetTop = _this.props.offsetTop;

      if (typeof offsetTop === 'undefined') {
        offsetTop = offset;
        Object(warning["a" /* default */])(typeof offset === 'undefined', 'Affix', '`offset` is deprecated. Please use `offsetTop` instead.');
      }

      if (offsetBottom === undefined && offsetTop === undefined) {
        offsetTop = 0;
      }

      return offsetTop;
    };

    _this.getOffsetBottom = function () {
      return _this.props.offsetBottom;
    };

    _this.savePlaceholderNode = function (node) {
      _this.placeholderNode = node;
    };

    _this.saveFixedNode = function (node) {
      _this.fixedNode = node;
    }; // =================== Measure ===================


    _this.measure = function () {
      var _this$state = _this.state,
          status = _this$state.status,
          lastAffix = _this$state.lastAffix;
      var _this$props2 = _this.props,
          target = _this$props2.target,
          onChange = _this$props2.onChange;

      if (status !== AffixStatus.Prepare || !_this.fixedNode || !_this.placeholderNode || !target) {
        return;
      }

      var offsetTop = _this.getOffsetTop();

      var offsetBottom = _this.getOffsetBottom();

      var targetNode = target();

      if (!targetNode) {
        return;
      }

      var newState = {
        status: AffixStatus.None
      };
      var targetRect = getTargetRect(targetNode);
      var placeholderReact = getTargetRect(_this.placeholderNode);
      var fixedTop = getFixedTop(placeholderReact, targetRect, offsetTop);
      var fixedBottom = getFixedBottom(placeholderReact, targetRect, offsetBottom);

      if (fixedTop !== undefined) {
        newState.affixStyle = {
          position: 'fixed',
          top: fixedTop,
          width: placeholderReact.width,
          height: placeholderReact.height
        };
        newState.placeholderStyle = {
          width: placeholderReact.width,
          height: placeholderReact.height
        };
      } else if (fixedBottom !== undefined) {
        newState.affixStyle = {
          position: 'fixed',
          bottom: fixedBottom,
          width: placeholderReact.width,
          height: placeholderReact.height
        };
        newState.placeholderStyle = {
          width: placeholderReact.width,
          height: placeholderReact.height
        };
      }

      newState.lastAffix = !!newState.affixStyle;

      if (onChange && lastAffix !== newState.lastAffix) {
        onChange(newState.lastAffix);
      }

      _this.setState(newState);
    }; // @ts-ignore TS6133


    _this.prepareMeasure = function () {
      // event param is used before. Keep compatible ts define here.
      _this.setState({
        status: AffixStatus.Prepare,
        affixStyle: undefined,
        placeholderStyle: undefined
      }); // Test if `updatePosition` called


      if (false) { var onTestUpdatePosition; }
    }; // =================== Render ===================


    _this.renderAffix = function (_ref) {
      var getPrefixCls = _ref.getPrefixCls;
      var _this$state2 = _this.state,
          affixStyle = _this$state2.affixStyle,
          placeholderStyle = _this$state2.placeholderStyle;
      var _this$props3 = _this.props,
          prefixCls = _this$props3.prefixCls,
          children = _this$props3.children;
      var className = classnames_default()(_defineProperty({}, getPrefixCls('affix', prefixCls), affixStyle));
      var props = Object(es["a" /* default */])(_this.props, ['prefixCls', 'offsetTop', 'offsetBottom', 'target', 'onChange']); // Omit this since `onTestUpdatePosition` only works on test.

      if (false) {}

      return react["createElement"](es_default.a, {
        onResize: function onResize() {
          _this.updatePosition();
        }
      }, react["createElement"]("div", _extends({}, props, {
        ref: _this.savePlaceholderNode
      }), affixStyle && react["createElement"]("div", {
        style: placeholderStyle,
        "aria-hidden": "true"
      }), react["createElement"]("div", {
        className: className,
        ref: _this.saveFixedNode,
        style: affixStyle
      }, react["createElement"](es_default.a, {
        onResize: function onResize() {
          _this.updatePosition();
        }
      }, children))));
    };

    return _this;
  } // Event handler


  _createClass(Affix, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var target = this.props.target;

      if (target) {
        // [Legacy] Wait for parent component ref has its value.
        // We should use target as directly element instead of function which makes element check hard.
        this.timeout = setTimeout(function () {
          addObserveTarget(target(), _this2); // Mock Event object.

          _this2.updatePosition();
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var prevTarget = this.state.prevTarget;
      var target = this.props.target;
      var newTarget = null;

      if (target) {
        newTarget = target() || null;
      }

      if (prevTarget !== newTarget) {
        removeObserveTarget(this);

        if (newTarget) {
          addObserveTarget(newTarget, this); // Mock Event object.

          this.updatePosition();
        }

        this.setState({
          prevTarget: newTarget
        });
      }

      if (prevProps.offsetTop !== this.props.offsetTop || prevProps.offsetBottom !== this.props.offsetBottom) {
        this.updatePosition();
      }

      this.measure();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
      removeObserveTarget(this);
      this.updatePosition.cancel();
    } // Handle realign logic

  }, {
    key: "updatePosition",
    value: function updatePosition() {
      this.prepareMeasure();
    }
  }, {
    key: "lazyUpdatePosition",
    value: function lazyUpdatePosition() {
      var target = this.props.target;
      var affixStyle = this.state.affixStyle; // Check position change before measure to make Safari smooth

      if (target && affixStyle) {
        var offsetTop = this.getOffsetTop();
        var offsetBottom = this.getOffsetBottom();
        var targetNode = target();

        if (targetNode) {
          var targetRect = getTargetRect(targetNode);
          var placeholderReact = getTargetRect(this.placeholderNode);
          var fixedTop = getFixedTop(placeholderReact, targetRect, offsetTop);
          var fixedBottom = getFixedBottom(placeholderReact, targetRect, offsetBottom);

          if (fixedTop !== undefined && affixStyle.top === fixedTop || fixedBottom !== undefined && affixStyle.bottom === fixedBottom) {
            return;
          }
        }
      } // Directly call prepare measure since it's already throttled.


      this.prepareMeasure();
    }
  }, {
    key: "render",
    value: function render() {
      return react["createElement"](context["a" /* ConfigConsumer */], null, this.renderAffix);
    }
  }]);

  return Affix;
}(react["Component"]);

affix_Affix.defaultProps = {
  target: getDefaultTarget
};

__decorate([throttleByAnimationFrameDecorator()], affix_Affix.prototype, "updatePosition", null);

__decorate([throttleByAnimationFrameDecorator()], affix_Affix.prototype, "lazyUpdatePosition", null);

Object(react_lifecycles_compat["polyfill"])(affix_Affix);
/* harmony default export */ var es_affix = __webpack_exports__["a"] = (affix_Affix);

/***/ }),

/***/ "M37O":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "T4Fc":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "TsRt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("SwVN");
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("M37O");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "qnSA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.regexp.constructor.js
var es6_regexp_constructor = __webpack_require__("J8hF");

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

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__("mXGw");

// EXTERNAL MODULE: ../node_modules/classnames/index.js
var classnames = __webpack_require__("8Jek");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ../node_modules/omit.js/es/index.js
var es = __webpack_require__("x9u5");

// EXTERNAL MODULE: ./.cache/react-lifecycles-compat.js
var react_lifecycles_compat = __webpack_require__("94VI");

// EXTERNAL MODULE: ../node_modules/antd/es/icon/index.js + 4 modules
var icon = __webpack_require__("epfg");

// EXTERNAL MODULE: ../node_modules/antd/es/config-provider/context.js + 4 modules
var context = __webpack_require__("Bfez");

// CONCATENATED MODULE: ../node_modules/antd/es/tag/CheckableTag.js








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





var CheckableTag_CheckableTag =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CheckableTag, _React$Component);

  function CheckableTag() {
    var _this;

    _classCallCheck(this, CheckableTag);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CheckableTag).apply(this, arguments));

    _this.handleClick = function () {
      var _this$props = _this.props,
          checked = _this$props.checked,
          onChange = _this$props.onChange;

      if (onChange) {
        onChange(!checked);
      }
    };

    _this.renderCheckableTag = function (_ref) {
      var _classNames;

      var getPrefixCls = _ref.getPrefixCls;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          className = _a.className,
          checked = _a.checked,
          restProps = __rest(_a, ["prefixCls", "className", "checked"]);

      var prefixCls = getPrefixCls('tag', customizePrefixCls);
      var cls = classnames_default()(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-checkable"), true), _defineProperty(_classNames, "".concat(prefixCls, "-checkable-checked"), checked), _classNames), className);
      delete restProps.onChange; // TypeScript cannot check delete now.

      return react["createElement"]("span", _extends({}, restProps, {
        className: cls,
        onClick: _this.handleClick
      }));
    };

    return _this;
  }

  _createClass(CheckableTag, [{
    key: "render",
    value: function render() {
      return react["createElement"](context["a" /* ConfigConsumer */], null, this.renderCheckableTag);
    }
  }]);

  return CheckableTag;
}(react["Component"]);


// EXTERNAL MODULE: ../node_modules/antd/es/_util/type.js
var type = __webpack_require__("UyNX");

// CONCATENATED MODULE: ../node_modules/antd/es/_util/colors.js
 // eslint-disable-next-line import/prefer-default-export

var PresetColorTypes = Object(type["a" /* tuple */])('pink', 'red', 'yellow', 'orange', 'cyan', 'green', 'blue', 'purple', 'geekblue', 'magenta', 'volcano', 'gold', 'lime');
// EXTERNAL MODULE: ../node_modules/antd/es/_util/warning.js
var warning = __webpack_require__("papw");

// EXTERNAL MODULE: ../node_modules/antd/es/_util/wave.js
var wave = __webpack_require__("wWt5");

// CONCATENATED MODULE: ../node_modules/antd/es/tag/index.js









function tag_typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    tag_typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    tag_typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return tag_typeof(obj);
}

function tag_defineProperty(obj, key, value) {
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

function tag_extends() {
  tag_extends = Object.assign || function (target) {
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

  return tag_extends.apply(this, arguments);
}

function tag_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function tag_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function tag_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) tag_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) tag_defineProperties(Constructor, staticProps);
  return Constructor;
}

function tag_possibleConstructorReturn(self, call) {
  if (call && (tag_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return tag_assertThisInitialized(self);
}

function tag_assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function tag_getPrototypeOf(o) {
  tag_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return tag_getPrototypeOf(o);
}

function tag_inherits(subClass, superClass) {
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
  if (superClass) tag_setPrototypeOf(subClass, superClass);
}

function tag_setPrototypeOf(o, p) {
  tag_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return tag_setPrototypeOf(o, p);
}

var tag_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};











var PresetColorRegex = new RegExp("^(".concat(PresetColorTypes.join('|'), ")(-inverse)?$"));

var tag_Tag =
/*#__PURE__*/
function (_React$Component) {
  tag_inherits(Tag, _React$Component);

  function Tag(props) {
    var _this;

    tag_classCallCheck(this, Tag);

    _this = tag_possibleConstructorReturn(this, tag_getPrototypeOf(Tag).call(this, props));
    _this.state = {
      visible: true
    };

    _this.handleIconClick = function (e) {
      _this.setVisible(false, e);
    };

    _this.renderTag = function (configProps) {
      var _a = _this.props,
          children = _a.children,
          otherProps = tag_rest(_a, ["children"]);

      var isNeedWave = 'onClick' in otherProps || children && children.type === 'a';
      var tagProps = Object(es["a" /* default */])(otherProps, ['onClose', 'afterClose', 'color', 'visible', 'closable', 'prefixCls']);
      return isNeedWave ? react["createElement"](wave["a" /* default */], null, react["createElement"]("span", tag_extends({}, tagProps, {
        className: _this.getTagClassName(configProps),
        style: _this.getTagStyle()
      }), children, _this.renderCloseIcon())) : react["createElement"]("span", tag_extends({}, tagProps, {
        className: _this.getTagClassName(configProps),
        style: _this.getTagStyle()
      }), children, _this.renderCloseIcon());
    };

    Object(warning["a" /* default */])(!('afterClose' in props), 'Tag', "'afterClose' will be deprecated, please use 'onClose', we will remove this in the next version.");
    return _this;
  }

  tag_createClass(Tag, [{
    key: "getTagStyle",
    value: function getTagStyle() {
      var _this$props = this.props,
          color = _this$props.color,
          style = _this$props.style;
      var isPresetColor = this.isPresetColor();
      return tag_extends({
        backgroundColor: color && !isPresetColor ? color : undefined
      }, style);
    }
  }, {
    key: "getTagClassName",
    value: function getTagClassName(_ref) {
      var _classNames;

      var getPrefixCls = _ref.getPrefixCls;
      var _this$props2 = this.props,
          customizePrefixCls = _this$props2.prefixCls,
          className = _this$props2.className,
          color = _this$props2.color;
      var visible = this.state.visible;
      var isPresetColor = this.isPresetColor();
      var prefixCls = getPrefixCls('tag', customizePrefixCls);
      return classnames_default()(prefixCls, (_classNames = {}, tag_defineProperty(_classNames, "".concat(prefixCls, "-").concat(color), isPresetColor), tag_defineProperty(_classNames, "".concat(prefixCls, "-has-color"), color && !isPresetColor), tag_defineProperty(_classNames, "".concat(prefixCls, "-hidden"), !visible), _classNames), className);
    }
  }, {
    key: "setVisible",
    value: function setVisible(visible, e) {
      var _this$props3 = this.props,
          onClose = _this$props3.onClose,
          afterClose = _this$props3.afterClose;

      if (onClose) {
        onClose(e);
      }

      if (afterClose && !onClose) {
        // next version remove.
        afterClose();
      }

      if (e.defaultPrevented) {
        return;
      }

      if (!('visible' in this.props)) {
        this.setState({
          visible: visible
        });
      }
    }
  }, {
    key: "isPresetColor",
    value: function isPresetColor() {
      var color = this.props.color;

      if (!color) {
        return false;
      }

      return PresetColorRegex.test(color);
    }
  }, {
    key: "renderCloseIcon",
    value: function renderCloseIcon() {
      var closable = this.props.closable;
      return closable ? react["createElement"](icon["a" /* default */], {
        type: "close",
        onClick: this.handleIconClick
      }) : null;
    }
  }, {
    key: "render",
    value: function render() {
      return react["createElement"](context["a" /* ConfigConsumer */], null, this.renderTag);
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

  return Tag;
}(react["Component"]);

tag_Tag.CheckableTag = CheckableTag_CheckableTag;
tag_Tag.defaultProps = {
  closable: false
};
Object(react_lifecycles_compat["polyfill"])(tag_Tag);
/* harmony default export */ var tag = __webpack_exports__["a"] = (tag_Tag);

/***/ })

}]);
//# sourceMappingURL=17-185c0fcea429d1d059cf.js.map