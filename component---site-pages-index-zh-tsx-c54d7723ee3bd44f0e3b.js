(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "+IV6":
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "+QRm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("asZ9");

__webpack_require__("d3/y");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findElPosition = findElPosition;
exports.getPointerPosition = getPointerPosition;
exports.blurNode = blurNode;
exports.focusNode = focusNode;
exports.hasClass = hasClass;
/**
 * Offset Left
 * getBoundingClientRect technique from
 * John Resig http://ejohn.org/blog/getboundingclientrect-is-awesome/
 *
 * @function findElPosition
 * @param {ReactNodeRef} el React Node ref from which to get offset
 * @return {Object}
 */

function findElPosition(el) {
  var box;

  if (el.getBoundingClientRect && el.parentNode) {
    box = el.getBoundingClientRect();
  }

  if (!box) {
    return {
      left: 0,
      top: 0
    };
  }

  var _document = document,
      body = _document.body,
      docEl = _document.documentElement;
  var clientLeft = docEl.clientLeft || body.clientLeft || 0;
  var scrollLeft = window.pageXOffset || body.scrollLeft;
  var left = box.left + scrollLeft - clientLeft;
  var clientTop = docEl.clientTop || body.clientTop || 0;
  var scrollTop = window.pageYOffset || body.scrollTop;
  var top = box.top + scrollTop - clientTop; // Android sometimes returns slightly off decimal values, so need to round

  return {
    left: Math.round(left),
    top: Math.round(top)
  };
}
/**
 * Get pointer position in a React Node ref
 * Returns an object with x and y coordinates.
 * The base on the coordinates are the bottom left of the element.
 *
 * @function getPointerPosition
 * @param {ReactNodeRef} el React Node ref on which to get the pointer position on
 * @param {Event} event Event object
 * @return {Object} This object will have x and y coordinates corresponding to the mouse position
 */


function getPointerPosition(el, event) {
  var position = {};
  var box = findElPosition(el);
  var boxW = el.offsetWidth;
  var boxH = el.offsetHeight;
  var boxY = box.top;
  var boxX = box.left;
  var evtPageY = event.pageY;
  var evtPageX = event.pageX;

  if (event.changedTouches) {
    evtPageX = event.changedTouches[0].pageX;
    evtPageY = event.changedTouches[0].pageY;
  }

  position.y = Math.max(0, Math.min(1, (boxY - evtPageY + boxH) / boxH));
  position.x = Math.max(0, Math.min(1, (evtPageX - boxX) / boxW));
  return position;
} // blur an element


function blurNode(reactNode) {
  if (reactNode && reactNode.blur) {
    reactNode.blur();
  }
} // focus an element


function focusNode(reactNode) {
  if (reactNode && reactNode.focus) {
    reactNode.focus();
  }
} // check if an element has a class name


function hasClass(elm, cls) {
  var classes = elm.className.split(' ');

  for (var i = 0; i < classes.length; i++) {
    if (classes[i].toLowerCase() === cls.toLowerCase()) {
      return true;
    }
  }

  return false;
}

/***/ }),

/***/ "0YrX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("7lGJ");

__webpack_require__("asZ9");

__webpack_require__("5hJT");

__webpack_require__("9ovy");

__webpack_require__("9p7t");

__webpack_require__("o7PZ");

__webpack_require__("d3/y");

var _interopRequireWildcard = __webpack_require__("vdEC");

var _interopRequireDefault = __webpack_require__("63Ad");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__("gki9"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("OvAC"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("RiSW"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("SDJZ"));

var _createClass2 = _interopRequireDefault(__webpack_require__("NToG"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("K4DB"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("+IV6"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("T1e2"));

var _inherits2 = _interopRequireDefault(__webpack_require__("eef+"));

var _propTypes = _interopRequireDefault(__webpack_require__("W0B4"));

var _react = _interopRequireWildcard(__webpack_require__("mXGw"));

var _classnames = _interopRequireDefault(__webpack_require__("8Jek"));

var _Manager = _interopRequireDefault(__webpack_require__("fFdl"));

var _BigPlayButton = _interopRequireDefault(__webpack_require__("t0sw"));

var _LoadingSpinner = _interopRequireDefault(__webpack_require__("7Tkg"));

var _PosterImage = _interopRequireDefault(__webpack_require__("Q9AD"));

var _Video = _interopRequireDefault(__webpack_require__("nEIY"));

var _Bezel = _interopRequireDefault(__webpack_require__("MPds"));

var _Shortcut = _interopRequireDefault(__webpack_require__("tKeH"));

var _ControlBar = _interopRequireDefault(__webpack_require__("4jBZ"));

var browser = _interopRequireWildcard(__webpack_require__("F9x+"));

var _dom = __webpack_require__("+QRm");

var _utils = __webpack_require__("xcnx");

var _fullscreen = _interopRequireDefault(__webpack_require__("pLEv"));

var propTypes = {
  children: _propTypes["default"].any,
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  fluid: _propTypes["default"].bool,
  muted: _propTypes["default"].bool,
  playsInline: _propTypes["default"].bool,
  aspectRatio: _propTypes["default"].string,
  className: _propTypes["default"].string,
  videoId: _propTypes["default"].string,
  startTime: _propTypes["default"].number,
  loop: _propTypes["default"].bool,
  autoPlay: _propTypes["default"].bool,
  src: _propTypes["default"].string,
  poster: _propTypes["default"].string,
  preload: _propTypes["default"].oneOf(['auto', 'metadata', 'none']),
  onLoadStart: _propTypes["default"].func,
  onWaiting: _propTypes["default"].func,
  onCanPlay: _propTypes["default"].func,
  onCanPlayThrough: _propTypes["default"].func,
  onPlaying: _propTypes["default"].func,
  onEnded: _propTypes["default"].func,
  onSeeking: _propTypes["default"].func,
  onSeeked: _propTypes["default"].func,
  onPlay: _propTypes["default"].func,
  onPause: _propTypes["default"].func,
  onProgress: _propTypes["default"].func,
  onDurationChange: _propTypes["default"].func,
  onError: _propTypes["default"].func,
  onSuspend: _propTypes["default"].func,
  onAbort: _propTypes["default"].func,
  onEmptied: _propTypes["default"].func,
  onStalled: _propTypes["default"].func,
  onLoadedMetadata: _propTypes["default"].func,
  onLoadedData: _propTypes["default"].func,
  onTimeUpdate: _propTypes["default"].func,
  onRateChange: _propTypes["default"].func,
  onVolumeChange: _propTypes["default"].func,
  store: _propTypes["default"].object
};
var defaultProps = {
  fluid: true,
  muted: false,
  playsInline: false,
  preload: 'auto',
  aspectRatio: 'auto'
};

var Player =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Player, _Component);

  function Player(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Player);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Player).call(this, props));
    _this.controlsHideTimer = null;
    _this.video = null; // the Video component

    _this.manager = new _Manager["default"](props.store);
    _this.actions = _this.manager.getActions();

    _this.manager.subscribeToPlayerStateChange(_this.handleStateChange.bind((0, _assertThisInitialized2["default"])(_this)));

    _this.getStyle = _this.getStyle.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleResize = _this.handleResize.bind((0, _assertThisInitialized2["default"])(_this));
    _this.getChildren = _this.getChildren.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleMouseMove = (0, _utils.throttle)(_this.handleMouseMove.bind((0, _assertThisInitialized2["default"])(_this)), 250);
    _this.handleMouseDown = _this.handleMouseDown.bind((0, _assertThisInitialized2["default"])(_this));
    _this.startControlsTimer = _this.startControlsTimer.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleFullScreenChange = _this.handleFullScreenChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleFocus = _this.handleFocus.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleBlur = _this.handleBlur.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(Player, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleResize();
      window.addEventListener('resize', this.handleResize);

      _fullscreen["default"].addEventListener(this.handleFullScreenChange);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // Remove event listener
      window.removeEventListener('resize', this.handleResize);

      _fullscreen["default"].removeEventListener(this.handleFullScreenChange);

      if (this.controlsHideTimer) {
        window.clearTimeout(this.controlsHideTimer);
      }
    }
  }, {
    key: "getDefaultChildren",
    value: function getDefaultChildren(originalChildren) {
      var _this2 = this;

      return [_react["default"].createElement(_Video["default"], {
        ref: function ref(c) {
          _this2.video = c;
          _this2.manager.video = _this2.video;
        },
        key: "video",
        order: 0.0
      }, originalChildren), _react["default"].createElement(_PosterImage["default"], {
        key: "poster-image",
        order: 1.0
      }), _react["default"].createElement(_LoadingSpinner["default"], {
        key: "loading-spinner",
        order: 2.0
      }), _react["default"].createElement(_Bezel["default"], {
        key: "bezel",
        order: 3.0
      }), _react["default"].createElement(_BigPlayButton["default"], {
        key: "big-play-button",
        order: 4.0
      }), _react["default"].createElement(_ControlBar["default"], {
        key: "control-bar",
        order: 5.0
      }), _react["default"].createElement(_Shortcut["default"], {
        key: "shortcut",
        order: 99.0
      })];
    }
  }, {
    key: "getChildren",
    value: function getChildren(props) {
      var _ = props.className,
          originalChildren = props.children,
          propsWithoutChildren = (0, _objectWithoutProperties2["default"])(props, ["className", "children"]);

      var children = _react["default"].Children.toArray(this.props.children).filter(function (e) {
        return !(0, _utils.isVideoChild)(e);
      });

      var defaultChildren = this.getDefaultChildren(originalChildren);
      return (0, _utils.mergeAndSortChildren)(defaultChildren, children, propsWithoutChildren);
    }
  }, {
    key: "setWidthOrHeight",
    value: function setWidthOrHeight(style, name, value) {
      var styleVal;

      if (typeof value === 'string') {
        if (value === 'auto') {
          styleVal = 'auto';
        } else if (value.match(/\d+%/)) {
          styleVal = value;
        }
      } else if (typeof value === 'number') {
        styleVal = "".concat(value, "px");
      }

      Object.assign(style, (0, _defineProperty2["default"])({}, name, styleVal));
    }
  }, {
    key: "getStyle",
    value: function getStyle() {
      var _this$props = this.props,
          fluid = _this$props.fluid,
          propsAspectRatio = _this$props.aspectRatio,
          propsHeight = _this$props.height,
          propsWidth = _this$props.width;

      var _this$manager$getStat = this.manager.getState(),
          player = _this$manager$getStat.player;

      var style = {};
      var width;
      var height;
      var aspectRatio; // The aspect ratio is either used directly or to calculate width and height.

      if (propsAspectRatio !== undefined && propsAspectRatio !== 'auto') {
        // Use any aspectRatio that's been specifically set
        aspectRatio = propsAspectRatio;
      } else if (player.videoWidth) {
        // Otherwise try to get the aspect ratio from the video metadata
        aspectRatio = "".concat(player.videoWidth, ":").concat(player.videoHeight);
      } else {
        // Or use a default. The video element's is 2:1, but 16:9 is more common.
        aspectRatio = '16:9';
      } // Get the ratio as a decimal we can use to calculate dimensions


      var ratioParts = aspectRatio.split(':');
      var ratioMultiplier = ratioParts[1] / ratioParts[0];

      if (propsWidth !== undefined) {
        // Use any width that's been specifically set
        width = propsWidth;
      } else if (propsHeight !== undefined) {
        // Or calulate the width from the aspect ratio if a height has been set
        width = propsHeight / ratioMultiplier;
      } else {
        // Or use the video's metadata, or use the video el's default of 300
        width = player.videoWidth || 400;
      }

      if (propsHeight !== undefined) {
        // Use any height that's been specifically set
        height = propsHeight;
      } else {
        // Otherwise calculate the height from the ratio and the width
        height = width * ratioMultiplier;
      }

      if (fluid) {
        style.paddingTop = "".concat(ratioMultiplier * 100, "%");
      } else {
        // If Width contains "auto", set "auto" in style
        this.setWidthOrHeight(style, 'width', width);
        this.setWidthOrHeight(style, 'height', height);
      }

      return style;
    } // get redux state
    // { player, operation }

  }, {
    key: "getState",
    value: function getState() {
      return this.manager.getState();
    } // get playback rate

  }, {
    key: "play",
    // play the video
    value: function play() {
      this.video.play();
    } // pause the video

  }, {
    key: "pause",
    value: function pause() {
      this.video.pause();
    } // Change the video source and re-load the video:

  }, {
    key: "load",
    value: function load() {
      this.video.load();
    } // Add a new text track to the video

  }, {
    key: "addTextTrack",
    value: function addTextTrack() {
      var _this$video;

      (_this$video = this.video).addTextTrack.apply(_this$video, arguments);
    } // Check if your browser can play different types of video:

  }, {
    key: "canPlayType",
    value: function canPlayType() {
      var _this$video2;

      (_this$video2 = this.video).canPlayType.apply(_this$video2, arguments);
    } // seek video by time

  }, {
    key: "seek",
    value: function seek(time) {
      this.video.seek(time);
    } // jump forward x seconds

  }, {
    key: "forward",
    value: function forward(seconds) {
      this.video.forward(seconds);
    } // jump back x seconds

  }, {
    key: "replay",
    value: function replay(seconds) {
      this.video.replay(seconds);
    } // enter or exist full screen

  }, {
    key: "toggleFullscreen",
    value: function toggleFullscreen() {
      this.video.toggleFullscreen();
    } // subscribe to player state change

  }, {
    key: "subscribeToStateChange",
    value: function subscribeToStateChange(listener) {
      return this.manager.subscribeToPlayerStateChange(listener);
    } // player resize

  }, {
    key: "handleResize",
    value: function handleResize() {}
  }, {
    key: "handleFullScreenChange",
    value: function handleFullScreenChange(event) {
      if (event.target === this.manager.rootElement) {
        this.actions.handleFullscreenChange(_fullscreen["default"].isFullscreen);
      }
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown() {
      this.startControlsTimer();
    }
  }, {
    key: "handleMouseMove",
    value: function handleMouseMove() {
      this.startControlsTimer();
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown() {
      this.startControlsTimer();
    }
  }, {
    key: "startControlsTimer",
    value: function startControlsTimer() {
      var _this3 = this;

      var controlBarActiveTime = 3000;

      _react["default"].Children.forEach(this.props.children, function (element) {
        if (!_react["default"].isValidElement(element) || element.type !== _ControlBar["default"]) {
          return;
        }

        var autoHideTime = element.props.autoHideTime;

        if (typeof autoHideTime === 'number') {
          controlBarActiveTime = autoHideTime;
        }
      });

      this.actions.userActivate(true);
      clearTimeout(this.controlsHideTimer);
      this.controlsHideTimer = setTimeout(function () {
        _this3.actions.userActivate(false);
      }, controlBarActiveTime);
    }
  }, {
    key: "handleStateChange",
    value: function handleStateChange(state, prevState) {
      if (state.isFullscreen !== prevState.isFullscreen) {
        this.handleResize(); // focus root when switching fullscreen mode to avoid confusion #276

        (0, _dom.focusNode)(this.manager.rootElement);
      }

      this.forceUpdate(); // re-render
    }
  }, {
    key: "handleFocus",
    value: function handleFocus() {
      this.actions.activate(true);
    }
  }, {
    key: "handleBlur",
    value: function handleBlur() {
      this.actions.activate(false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var fluid = this.props.fluid;

      var _this$manager$getStat2 = this.manager.getState(),
          player = _this$manager$getStat2.player;

      var paused = player.paused,
          hasStarted = player.hasStarted,
          waiting = player.waiting,
          seeking = player.seeking,
          isFullscreen = player.isFullscreen,
          userActivity = player.userActivity;
      var props = (0, _objectSpread2["default"])({}, this.props, {
        player: player,
        actions: this.actions,
        manager: this.manager,
        store: this.manager.store,
        video: this.video ? this.video.video : null
      });
      var children = this.getChildren(props);
      return _react["default"].createElement("div", {
        className: (0, _classnames["default"])({
          'video-react-controls-enabled': true,
          'video-react-has-started': hasStarted,
          'video-react-paused': paused,
          'video-react-playing': !paused,
          'video-react-waiting': waiting,
          'video-react-seeking': seeking,
          'video-react-fluid': fluid,
          'video-react-fullscreen': isFullscreen,
          'video-react-user-inactive': !userActivity,
          'video-react-user-active': userActivity,
          'video-react-workinghover': !browser.IS_IOS
        }, 'video-react', this.props.className),
        style: this.getStyle(),
        ref: function ref(c) {
          _this4.manager.rootElement = c;
        },
        role: "region",
        onTouchStart: this.handleMouseDown,
        onMouseDown: this.handleMouseDown,
        onTouchMove: this.handleMouseMove,
        onMouseMove: this.handleMouseMove,
        onKeyDown: this.handleKeyDown,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        tabIndex: "-1"
      }, children);
    }
  }, {
    key: "playbackRate",
    get: function get() {
      return this.video.playbackRate;
    } // set playback rate
    // speed of video
    ,
    set: function set(rate) {
      this.video.playbackRate = rate;
    }
  }, {
    key: "muted",
    get: function get() {
      return this.video.muted;
    },
    set: function set(val) {
      this.video.muted = val;
    }
  }, {
    key: "volume",
    get: function get() {
      return this.video.volume;
    },
    set: function set(val) {
      this.video.volume = val;
    } // video width

  }, {
    key: "videoWidth",
    get: function get() {
      return this.video.videoWidth;
    } // video height

  }, {
    key: "videoHeight",
    get: function get() {
      return this.video.videoHeight;
    }
  }]);
  return Player;
}(_react.Component);

exports["default"] = Player;
Player.contextTypes = {
  store: _propTypes["default"].object
};
Player.propTypes = propTypes;
Player.defaultProps = defaultProps;
Player.displayName = 'Player';

/***/ }),

/***/ "1Tm+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("d3/y");

var _interopRequireDefault = __webpack_require__("63Ad");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__("W0B4"));

var _react = _interopRequireDefault(__webpack_require__("mXGw"));

var _classnames = _interopRequireDefault(__webpack_require__("8Jek"));

var propTypes = {
  percentage: _propTypes["default"].string,
  vertical: _propTypes["default"].bool,
  className: _propTypes["default"].string
};
var defaultProps = {
  percentage: '100%',
  vertical: false
};

function VolumeLevel(_ref) {
  var percentage = _ref.percentage,
      vertical = _ref.vertical,
      className = _ref.className;
  var style = {};

  if (vertical) {
    style.height = percentage;
  } else {
    style.width = percentage;
  }

  return _react["default"].createElement("div", {
    className: (0, _classnames["default"])(className, 'video-react-volume-level'),
    style: style
  }, _react["default"].createElement("span", {
    className: "video-react-control-text"
  }));
}

VolumeLevel.propTypes = propTypes;
VolumeLevel.defaultProps = defaultProps;
VolumeLevel.displayName = 'VolumeLevel';
var _default = VolumeLevel;
exports["default"] = _default;

/***/ }),

/***/ "27Aj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("d3/y");

var _interopRequireDefault = __webpack_require__("63Ad");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LoadProgressBar;

var _propTypes = _interopRequireDefault(__webpack_require__("W0B4"));

var _react = _interopRequireDefault(__webpack_require__("mXGw"));

var _classnames = _interopRequireDefault(__webpack_require__("8Jek"));

var propTypes = {
  duration: _propTypes["default"].number,
  buffered: _propTypes["default"].object,
  className: _propTypes["default"].string
}; // Shows load progress

function LoadProgressBar(_ref) {
  var buffered = _ref.buffered,
      duration = _ref.duration,
      className = _ref.className;

  if (!buffered || !buffered.length) {
    return null;
  }

  var bufferedEnd = buffered.end(buffered.length - 1);
  var style = {};

  if (bufferedEnd > duration) {
    bufferedEnd = duration;
  } // get the percent width of a time compared to the total end


  function percentify(time, end) {
    var percent = time / end || 0; // no NaN

    return "".concat((percent >= 1 ? 1 : percent) * 100, "%");
  } // the width of the progress bar


  style.width = percentify(bufferedEnd, duration);
  var parts = []; // add child elements to represent the individual buffered time ranges

  for (var i = 0; i < buffered.length; i++) {
    var start = buffered.start(i);
    var end = buffered.end(i); // set the percent based on the width of the progress bar (bufferedEnd)

    var part = _react["default"].createElement("div", {
      style: {
        left: percentify(start, bufferedEnd),
        width: percentify(end - start, bufferedEnd)
      },
      key: "part-".concat(i)
    });

    parts.push(part);
  }

  if (parts.length === 0) {
    parts = null;
  }

  return _react["default"].createElement("div", {
    style: style,
    className: (0, _classnames["default"])('video-react-load-progress', className)
  }, _react["default"].createElement("span", {
    className: "video-react-control-text"
  }, "Loaded: 0%"), parts);
}

LoadProgressBar.propTypes = propTypes;
LoadProgressBar.displayName = 'LoadProgressBar';

/***/ }),

/***/ "2UPm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("d3/y");

var _interopRequireDefault = __webpack_require__("63Ad");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = operation;

var _objectSpread2 = _interopRequireDefault(__webpack_require__("gki9"));

var _player = __webpack_require__("F4hD");

var initialState = {
  count: 0,
  operation: {
    action: '',
    source: ''
  }
};

function operation() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _player.OPERATE:
      return (0, _objectSpread2["default"])({}, state, {
        count: state.count + 1,
        operation: (0, _objectSpread2["default"])({}, state.operation, action.operation)
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "2UUl":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("d3/y");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slider = _interopRequireDefault(__webpack_require__("Ht6y"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var _default = _slider["default"];
exports["default"] = _default;

/***/ }),

/***/ "2UZ+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__("X6VK");
var $find = __webpack_require__("1wfo")(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__("OfmW")(KEY);


/***/ }),

/***/ "2lL7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("o7PZ");

__webpack_require__("d3/y");

var _interopRequireWildcard = __webpack_require__("vdEC");

var _interopRequireDefault = __webpack_require__("63Ad");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("SDJZ"));

var _createClass2 = _interopRequireDefault(__webpack_require__("NToG"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("K4DB"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("+IV6"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("T1e2"));

var _inherits2 = _interopRequireDefault(__webpack_require__("eef+"));

var _propTypes = _interopRequireDefault(__webpack_require__("W0B4"));

var _react = _interopRequireWildcard(__webpack_require__("mXGw"));

var propTypes = {
  actions: _propTypes["default"].object,
  className: _propTypes["default"].string,
  seconds: _propTypes["default"].oneOf([5, 10, 30])
};
var defaultProps = {
  seconds: 10
};

var _default = function _default(mode) {
  var ForwardReplayControl =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2["default"])(ForwardReplayControl, _Component);

    function ForwardReplayControl(props, context) {
      var _this;

      (0, _classCallCheck2["default"])(this, ForwardReplayControl);
      _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ForwardReplayControl).call(this, props, context));
      _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
      return _this;
    }

    (0, _createClass2["default"])(ForwardReplayControl, [{
      key: "handleClick",
      value: function handleClick() {
        var _this$props = this.props,
            actions = _this$props.actions,
            seconds = _this$props.seconds; // Depends mode to implement different actions

        if (mode === 'forward') {
          actions.forward(seconds);
        } else {
          actions.replay(seconds);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props2 = this.props,
            seconds = _this$props2.seconds,
            className = _this$props2.className;
        var classNames = ['video-react-control', 'video-react-button', 'video-react-icon'];
        classNames.push("video-react-icon-".concat(mode, "-").concat(seconds), "video-react-".concat(mode, "-control"));

        if (className) {
          classNames.push(className);
        }

        return _react["default"].createElement("button", {
          ref: function ref(c) {
            _this2.button = c;
          },
          className: classNames.join(' '),
          type: "button",
          onClick: this.handleClick
        }, _react["default"].createElement("span", {
          className: "video-react-control-text"
        }, "".concat(mode, " ").concat(seconds, " seconds")));
      }
    }]);
    return ForwardReplayControl;
  }(_react.Component);

  ForwardReplayControl.propTypes = propTypes;
  ForwardReplayControl.defaultProps = defaultProps;
  return ForwardReplayControl;
};

exports["default"] = _default;

/***/ }),

/***/ "495I":
/***/ (function(module, exports, __webpack_require__) {

var MediaQueryDispatch = __webpack_require__("tJXC");

module.exports = new MediaQueryDispatch();

/***/ }),

/***/ "4Alm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addEventListenerWrap; });
/* harmony import */ var add_dom_event_listener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("BJf6");
/* harmony import */ var add_dom_event_listener__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(add_dom_event_listener__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xARA");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);


function addEventListenerWrap(target, eventType, cb, option) {
  /* eslint camelcase: 2 */
  var callback = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.unstable_batchedUpdates ? function run(e) {
    react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.unstable_batchedUpdates(cb, e);
  } : cb;
  return add_dom_event_listener__WEBPACK_IMPORTED_MODULE_0___default()(target, eventType, callback, option);
}

/***/ }),

/***/ "4N2q":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @ignore
 * event object for dom
 * @author yiminghe@gmail.com
 */


__webpack_require__("7t+O");

__webpack_require__("9ovy");

__webpack_require__("7lGJ");

__webpack_require__("d3/y");

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

var _EventBaseObject = __webpack_require__("B3fu");

var _EventBaseObject2 = _interopRequireDefault(_EventBaseObject);

var _objectAssign = __webpack_require__("IL7q");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var TRUE = true;
var FALSE = false;
var commonProps = ['altKey', 'bubbles', 'cancelable', 'ctrlKey', 'currentTarget', 'eventPhase', 'metaKey', 'shiftKey', 'target', 'timeStamp', 'view', 'type'];

function isNullOrUndefined(w) {
  return w === null || w === undefined;
}

var eventNormalizers = [{
  reg: /^key/,
  props: ['char', 'charCode', 'key', 'keyCode', 'which'],
  fix: function fix(event, nativeEvent) {
    if (isNullOrUndefined(event.which)) {
      event.which = !isNullOrUndefined(nativeEvent.charCode) ? nativeEvent.charCode : nativeEvent.keyCode;
    } // add metaKey to non-Mac browsers (use ctrl for PC 's and Meta for Macs)


    if (event.metaKey === undefined) {
      event.metaKey = event.ctrlKey;
    }
  }
}, {
  reg: /^touch/,
  props: ['touches', 'changedTouches', 'targetTouches']
}, {
  reg: /^hashchange$/,
  props: ['newURL', 'oldURL']
}, {
  reg: /^gesturechange$/i,
  props: ['rotation', 'scale']
}, {
  reg: /^(mousewheel|DOMMouseScroll)$/,
  props: [],
  fix: function fix(event, nativeEvent) {
    var deltaX = undefined;
    var deltaY = undefined;
    var delta = undefined;
    var wheelDelta = nativeEvent.wheelDelta;
    var axis = nativeEvent.axis;
    var wheelDeltaY = nativeEvent.wheelDeltaY;
    var wheelDeltaX = nativeEvent.wheelDeltaX;
    var detail = nativeEvent.detail; // ie/webkit

    if (wheelDelta) {
      delta = wheelDelta / 120;
    } // gecko


    if (detail) {
      // press control e.detail == 1 else e.detail == 3
      delta = 0 - (detail % 3 === 0 ? detail / 3 : detail);
    } // Gecko


    if (axis !== undefined) {
      if (axis === event.HORIZONTAL_AXIS) {
        deltaY = 0;
        deltaX = 0 - delta;
      } else if (axis === event.VERTICAL_AXIS) {
        deltaX = 0;
        deltaY = delta;
      }
    } // Webkit


    if (wheelDeltaY !== undefined) {
      deltaY = wheelDeltaY / 120;
    }

    if (wheelDeltaX !== undefined) {
      deltaX = -1 * wheelDeltaX / 120;
    } // 默认 deltaY (ie)


    if (!deltaX && !deltaY) {
      deltaY = delta;
    }

    if (deltaX !== undefined) {
      /**
       * deltaX of mousewheel event
       * @property deltaX
       * @member Event.DomEvent.Object
       */
      event.deltaX = deltaX;
    }

    if (deltaY !== undefined) {
      /**
       * deltaY of mousewheel event
       * @property deltaY
       * @member Event.DomEvent.Object
       */
      event.deltaY = deltaY;
    }

    if (delta !== undefined) {
      /**
       * delta of mousewheel event
       * @property delta
       * @member Event.DomEvent.Object
       */
      event.delta = delta;
    }
  }
}, {
  reg: /^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,
  props: ['buttons', 'clientX', 'clientY', 'button', 'offsetX', 'relatedTarget', 'which', 'fromElement', 'toElement', 'offsetY', 'pageX', 'pageY', 'screenX', 'screenY'],
  fix: function fix(event, nativeEvent) {
    var eventDoc = undefined;
    var doc = undefined;
    var body = undefined;
    var target = event.target;
    var button = nativeEvent.button; // Calculate pageX/Y if missing and clientX/Y available

    if (target && isNullOrUndefined(event.pageX) && !isNullOrUndefined(nativeEvent.clientX)) {
      eventDoc = target.ownerDocument || document;
      doc = eventDoc.documentElement;
      body = eventDoc.body;
      event.pageX = nativeEvent.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
      event.pageY = nativeEvent.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
    } // which for click: 1 === left; 2 === middle; 3 === right
    // do not use button


    if (!event.which && button !== undefined) {
      if (button & 1) {
        event.which = 1;
      } else if (button & 2) {
        event.which = 3;
      } else if (button & 4) {
        event.which = 2;
      } else {
        event.which = 0;
      }
    } // add relatedTarget, if necessary


    if (!event.relatedTarget && event.fromElement) {
      event.relatedTarget = event.fromElement === target ? event.toElement : event.fromElement;
    }

    return event;
  }
}];

function retTrue() {
  return TRUE;
}

function retFalse() {
  return FALSE;
}

function DomEventObject(nativeEvent) {
  var type = nativeEvent.type;
  var isNative = typeof nativeEvent.stopPropagation === 'function' || typeof nativeEvent.cancelBubble === 'boolean';

  _EventBaseObject2['default'].call(this);

  this.nativeEvent = nativeEvent; // in case dom event has been mark as default prevented by lower dom node

  var isDefaultPrevented = retFalse;

  if ('defaultPrevented' in nativeEvent) {
    isDefaultPrevented = nativeEvent.defaultPrevented ? retTrue : retFalse;
  } else if ('getPreventDefault' in nativeEvent) {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=691151
    isDefaultPrevented = nativeEvent.getPreventDefault() ? retTrue : retFalse;
  } else if ('returnValue' in nativeEvent) {
    isDefaultPrevented = nativeEvent.returnValue === FALSE ? retTrue : retFalse;
  }

  this.isDefaultPrevented = isDefaultPrevented;
  var fixFns = [];
  var fixFn = undefined;
  var l = undefined;
  var prop = undefined;
  var props = commonProps.concat();
  eventNormalizers.forEach(function (normalizer) {
    if (type.match(normalizer.reg)) {
      props = props.concat(normalizer.props);

      if (normalizer.fix) {
        fixFns.push(normalizer.fix);
      }
    }
  });
  l = props.length; // clone properties of the original event object

  while (l) {
    prop = props[--l];
    this[prop] = nativeEvent[prop];
  } // fix target property, if necessary


  if (!this.target && isNative) {
    this.target = nativeEvent.srcElement || document; // srcElement might not be defined either
  } // check if target is a text node (safari)


  if (this.target && this.target.nodeType === 3) {
    this.target = this.target.parentNode;
  }

  l = fixFns.length;

  while (l) {
    fixFn = fixFns[--l];
    fixFn(this, nativeEvent);
  }

  this.timeStamp = nativeEvent.timeStamp || Date.now();
}

var EventBaseObjectProto = _EventBaseObject2['default'].prototype;
(0, _objectAssign2['default'])(DomEventObject.prototype, EventBaseObjectProto, {
  constructor: DomEventObject,
  preventDefault: function preventDefault() {
    var e = this.nativeEvent; // if preventDefault exists run it on the original event

    if (e.preventDefault) {
      e.preventDefault();
    } else {
      // otherwise set the returnValue property of the original event to FALSE (IE)
      e.returnValue = FALSE;
    }

    EventBaseObjectProto.preventDefault.call(this);
  },
  stopPropagation: function stopPropagation() {
    var e = this.nativeEvent; // if stopPropagation exists run it on the original event

    if (e.stopPropagation) {
      e.stopPropagation();
    } else {
      // otherwise set the cancelBubble property of the original event to TRUE (IE)
      e.cancelBubble = TRUE;
    }

    EventBaseObjectProto.stopPropagation.call(this);
  }
});
exports['default'] = DomEventObject;
module.exports = exports['default'];

/***/ }),

/***/ "4jBZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("o7PZ");

__webpack_require__("d3/y");

var _interopRequireWildcard = __webpack_require__("vdEC");

var _interopRequireDefault = __webpack_require__("63Ad");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("RiSW"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("SDJZ"));

var _createClass2 = _interopRequireDefault(__webpack_require__("NToG"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("K4DB"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("+IV6"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("T1e2"));

var _inherits2 = _interopRequireDefault(__webpack_require__("eef+"));

var _propTypes = _interopRequireDefault(__webpack_require__("W0B4"));

var _react = _interopRequireWildcard(__webpack_require__("mXGw"));

var _classnames = _interopRequireDefault(__webpack_require__("8Jek"));

var _ProgressControl = _interopRequireDefault(__webpack_require__("AX92"));

var _PlayToggle = _interopRequireDefault(__webpack_require__("XZtX"));

var _ForwardControl = _interopRequireDefault(__webpack_require__("wQeU"));

var _ReplayControl = _interopRequireDefault(__webpack_require__("dIBq"));

var _FullscreenToggle = _interopRequireDefault(__webpack_require__("Jbqj"));

var _RemainingTimeDisplay = _interopRequireDefault(__webpack_require__("bF0Y"));

var _CurrentTimeDisplay = _interopRequireDefault(__webpack_require__("ETOT"));

var _DurationDisplay = _interopRequireDefault(__webpack_require__("s7ML"));

var _TimeDivider = _interopRequireDefault(__webpack_require__("e6E8"));

var _VolumeMenuButton = _interopRequireDefault(__webpack_require__("xKwe"));

var _PlaybackRateMenuButton = _interopRequireDefault(__webpack_require__("KF4W"));

var _utils = __webpack_require__("xcnx");

var propTypes = {
  children: _propTypes["default"].any,
  autoHide: _propTypes["default"].bool,
  autoHideTime: _propTypes["default"].number,
  // used in Player
  disableDefaultControls: _propTypes["default"].bool,
  disableCompletely: _propTypes["default"].bool,
  className: _propTypes["default"].string
};
var defaultProps = {
  autoHide: true,
  disableCompletely: false
};

var ControlBar =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(ControlBar, _Component);

  function ControlBar(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ControlBar);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ControlBar).call(this, props));
    _this.getDefaultChildren = _this.getDefaultChildren.bind((0, _assertThisInitialized2["default"])(_this));
    _this.getFullChildren = _this.getFullChildren.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(ControlBar, [{
    key: "getDefaultChildren",
    value: function getDefaultChildren() {
      return [_react["default"].createElement(_PlayToggle["default"], {
        key: "play-toggle",
        order: 1
      }), _react["default"].createElement(_VolumeMenuButton["default"], {
        key: "volume-menu-button",
        order: 4
      }), _react["default"].createElement(_CurrentTimeDisplay["default"], {
        key: "current-time-display",
        order: 5.1
      }), _react["default"].createElement(_TimeDivider["default"], {
        key: "time-divider",
        order: 5.2
      }), _react["default"].createElement(_DurationDisplay["default"], {
        key: "duration-display",
        order: 5.3
      }), _react["default"].createElement(_ProgressControl["default"], {
        key: "progress-control",
        order: 6
      }), _react["default"].createElement(_FullscreenToggle["default"], {
        key: "fullscreen-toggle",
        order: 8
      })];
    }
  }, {
    key: "getFullChildren",
    value: function getFullChildren() {
      return [_react["default"].createElement(_PlayToggle["default"], {
        key: "play-toggle",
        order: 1
      }), _react["default"].createElement(_ReplayControl["default"], {
        key: "replay-control",
        order: 2
      }), _react["default"].createElement(_ForwardControl["default"], {
        key: "forward-control",
        order: 3
      }), _react["default"].createElement(_VolumeMenuButton["default"], {
        key: "volume-menu-button",
        order: 4
      }), _react["default"].createElement(_CurrentTimeDisplay["default"], {
        key: "current-time-display",
        order: 5
      }), _react["default"].createElement(_TimeDivider["default"], {
        key: "time-divider",
        order: 6
      }), _react["default"].createElement(_DurationDisplay["default"], {
        key: "duration-display",
        order: 7
      }), _react["default"].createElement(_ProgressControl["default"], {
        key: "progress-control",
        order: 8
      }), _react["default"].createElement(_RemainingTimeDisplay["default"], {
        key: "remaining-time-display",
        order: 9
      }), _react["default"].createElement(_PlaybackRateMenuButton["default"], {
        rates: [1, 1.25, 1.5, 2],
        key: "playback-rate",
        order: 10
      }), _react["default"].createElement(_FullscreenToggle["default"], {
        key: "fullscreen-toggle",
        order: 11
      })];
    }
  }, {
    key: "getChildren",
    value: function getChildren() {
      var children = _react["default"].Children.toArray(this.props.children);

      var defaultChildren = this.props.disableDefaultControls ? [] : this.getDefaultChildren();
      var _this$props = this.props,
          className = _this$props.className,
          parentProps = (0, _objectWithoutProperties2["default"])(_this$props, ["className"]); // remove className

      return (0, _utils.mergeAndSortChildren)(defaultChildren, children, parentProps);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          autoHide = _this$props2.autoHide,
          className = _this$props2.className,
          disableCompletely = _this$props2.disableCompletely;
      var children = this.getChildren();
      return disableCompletely ? null : _react["default"].createElement("div", {
        className: (0, _classnames["default"])('video-react-control-bar', {
          'video-react-control-bar-auto-hide': autoHide
        }, className)
      }, children);
    }
  }]);
  return ControlBar;
}(_react.Component);

exports["default"] = ControlBar;
ControlBar.propTypes = propTypes;
ControlBar.defaultProps = defaultProps;
ControlBar.displayName = 'ControlBar';

/***/ }),

/***/ "5WRv":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__("iNmH");

var iterableToArray = __webpack_require__("Qatm");

var nonIterableSpread = __webpack_require__("kluZ");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "6oRp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("o7PZ");

__webpack_require__("asZ9");

__webpack_require__("yIlq");

__webpack_require__("PAbq");

__webpack_require__("1qKx");

__webpack_require__("6/FK");

__webpack_require__("2Tod");

__webpack_require__("7lGJ");

__webpack_require__("9p7t");

__webpack_require__("W1QL");

__webpack_require__("K/PF");

__webpack_require__("t91x");

__webpack_require__("75LO");

__webpack_require__("+jjx");

__webpack_require__("ABKx");

__webpack_require__("d3/y");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dots = void 0;

var _react = _interopRequireDefault(__webpack_require__("mXGw"));

var _classnames = _interopRequireDefault(__webpack_require__("8Jek"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
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

var getDotCount = function getDotCount(spec) {
  var dots;

  if (spec.infinite) {
    dots = Math.ceil(spec.slideCount / spec.slidesToScroll);
  } else {
    dots = Math.ceil((spec.slideCount - spec.slidesToShow) / spec.slidesToScroll) + 1;
  }

  return dots;
};

var Dots =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Dots, _React$PureComponent);

  function Dots() {
    _classCallCheck(this, Dots);

    return _possibleConstructorReturn(this, _getPrototypeOf(Dots).apply(this, arguments));
  }

  _createClass(Dots, [{
    key: "clickHandler",
    value: function clickHandler(options, e) {
      // In Autoplay the focus stays on clicked button even after transition
      // to next slide. That only goes away by click somewhere outside
      e.preventDefault();
      this.props.clickHandler(options);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var dotCount = getDotCount({
        slideCount: this.props.slideCount,
        slidesToScroll: this.props.slidesToScroll,
        slidesToShow: this.props.slidesToShow,
        infinite: this.props.infinite
      }); // Apply join & split to Array to pre-fill it for IE8
      //
      // Credit: http://stackoverflow.com/a/13735425/1849458

      var _this$props = this.props,
          onMouseEnter = _this$props.onMouseEnter,
          onMouseOver = _this$props.onMouseOver,
          onMouseLeave = _this$props.onMouseLeave;
      var mouseEvents = {
        onMouseEnter: onMouseEnter,
        onMouseOver: onMouseOver,
        onMouseLeave: onMouseLeave
      };
      var dots = Array.apply(null, Array(dotCount + 1).join("0").split("")).map(function (x, i) {
        var leftBound = i * _this.props.slidesToScroll;
        var rightBound = i * _this.props.slidesToScroll + (_this.props.slidesToScroll - 1);
        var className = (0, _classnames["default"])({
          "slick-active": _this.props.currentSlide >= leftBound && _this.props.currentSlide <= rightBound
        });
        var dotOptions = {
          message: "dots",
          index: i,
          slidesToScroll: _this.props.slidesToScroll,
          currentSlide: _this.props.currentSlide
        };

        var onClick = _this.clickHandler.bind(_this, dotOptions);

        return _react["default"].createElement("li", {
          key: i,
          className: className
        }, _react["default"].cloneElement(_this.props.customPaging(i), {
          onClick: onClick
        }));
      });
      return _react["default"].cloneElement(this.props.appendDots(dots), _objectSpread({
        className: this.props.dotsClass
      }, mouseEvents));
    }
  }]);

  return Dots;
}(_react["default"].PureComponent);

exports.Dots = Dots;

/***/ }),

/***/ "7/fk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return changeConfirmLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getConfirmLocale; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5hJT");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locale_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xp7Y");


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



var runtimeLocale = _extends({}, _locale_default__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].Modal);

function changeConfirmLocale(newLocale) {
  if (newLocale) {
    runtimeLocale = _extends(_extends({}, runtimeLocale), newLocale);
  } else {
    runtimeLocale = _extends({}, _locale_default__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].Modal);
  }
}
function getConfirmLocale() {
  return runtimeLocale;
}

/***/ }),

/***/ "7S3h":
/***/ (function(module) {

module.exports = JSON.parse("{\"data\":{\"site\":{\"siteMetadata\":{\"title\":\"AntV test site\",\"description\":\"Ant Visualization solution home page\"}}}}");

/***/ }),

/***/ "7Tkg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("d3/y");

var _interopRequireDefault = __webpack_require__("63Ad");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LoadingSpinner;

var _propTypes = _interopRequireDefault(__webpack_require__("W0B4"));

var _react = _interopRequireDefault(__webpack_require__("mXGw"));

var _classnames = _interopRequireDefault(__webpack_require__("8Jek"));

var propTypes = {
  player: _propTypes["default"].object,
  className: _propTypes["default"].string
};

function LoadingSpinner(_ref) {
  var player = _ref.player,
      className = _ref.className;

  if (player.error) {
    return null;
  }

  return _react["default"].createElement("div", {
    className: (0, _classnames["default"])('video-react-loading-spinner', className)
  });
}

LoadingSpinner.propTypes = propTypes;
LoadingSpinner.displayName = 'LoadingSpinner';

/***/ }),

/***/ "AX92":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("o7PZ");

__webpack_require__("d3/y");

var _interopRequireWildcard = __webpack_require__("vdEC");

var _interopRequireDefault = __webpack_require__("63Ad");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("8VmE"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("SDJZ"));

var _createClass2 = _interopRequireDefault(__webpack_require__("NToG"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("K4DB"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("+IV6"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("T1e2"));

var _inherits2 = _interopRequireDefault(__webpack_require__("eef+"));

var _propTypes = _interopRequireDefault(__webpack_require__("W0B4"));

var _react = _interopRequireWildcard(__webpack_require__("mXGw"));

var _classnames = _interopRequireDefault(__webpack_require__("8Jek"));

var Dom = _interopRequireWildcard(__webpack_require__("+QRm"));

var _SeekBar = _interopRequireDefault(__webpack_require__("wPJX"));

var propTypes = {
  player: _propTypes["default"].object,
  className: _propTypes["default"].string
};

var ProgressControl =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(ProgressControl, _Component);

  function ProgressControl(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, ProgressControl);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ProgressControl).call(this, props, context));
    _this.state = {
      mouseTime: {
        time: null,
        position: 0
      }
    };
    _this.handleMouseMoveThrottle = _this.handleMouseMove.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(ProgressControl, [{
    key: "handleMouseMove",
    value: function handleMouseMove(event) {
      if (!event.pageX) {
        return;
      }

      var duration = this.props.player.duration;
      var node = this.seekBar;
      var newTime = Dom.getPointerPosition(node, event).x * duration;
      var position = event.pageX - Dom.findElPosition(node).left;
      this.setState({
        mouseTime: {
          time: newTime,
          position: position
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var className = this.props.className;
      return _react["default"].createElement("div", {
        onMouseMove: this.handleMouseMoveThrottle,
        className: (0, _classnames["default"])('video-react-progress-control video-react-control', className)
      }, _react["default"].createElement(_SeekBar["default"], (0, _extends2["default"])({
        mouseTime: this.state.mouseTime,
        ref: function ref(c) {
          _this2.seekBar = c;
        }
      }, this.props)));
    }
  }]);
  return ProgressControl;
}(_react.Component);

exports["default"] = ProgressControl;
ProgressControl.propTypes = propTypes;
ProgressControl.displayName = 'ProgressControl';

/***/ }),

/***/ "B3fu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @ignore
 * base event object for custom and dom event.
 * @author yiminghe@gmail.com
 */


__webpack_require__("7t+O");

__webpack_require__("d3/y");

Object.defineProperty(exports, "__esModule", {
  value: true
});

function returnFalse() {
  return false;
}

function returnTrue() {
  return true;
}

function EventBaseObject() {
  this.timeStamp = Date.now();
  this.target = undefined;
  this.currentTarget = undefined;
}

EventBaseObject.prototype = {
  isEventObject: 1,
  constructor: EventBaseObject,
  isDefaultPrevented: returnFalse,
  isPropagationStopped: returnFalse,
  isImmediatePropagationStopped: returnFalse,
  preventDefault: function preventDefault() {
    this.isDefaultPrevented = returnTrue;
  },
  stopPropagation: function stopPropagation() {
    this.isPropagationStopped = returnTrue;
  },
  stopImmediatePropagation: function stopImmediatePropagation() {
    this.isImmediatePropagationStopped = returnTrue; // fixed 1.2
    // call stopPropagation implicitly

    this.stopPropagation();
  },
  halt: function halt(immediate) {
    if (immediate) {
      this.stopImmediatePropagation();
    } else {
      this.stopPropagation();
    }

    this.preventDefault();
  }
};
exports["default"] = EventBaseObject;
module.exports = exports["default"];

/***/ }),

/***/ "BJf6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("d3/y");

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = addEventListener;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

var _EventObject = __webpack_require__("4N2q");

var _EventObject2 = _interopRequireDefault(_EventObject);

function addEventListener(target, eventType, callback, option) {
  function wrapCallback(e) {
    var ne = new _EventObject2['default'](e);
    callback.call(target, ne);
  }

  if (target.addEventListener) {
    var _ret = function () {
      var useCapture = false;

      if (typeof option === 'object') {
        useCapture = option.capture || false;
      } else if (typeof option === 'boolean') {
        useCapture = option;
      }

      target.addEventListener(eventType, wrapCallback, option || false);
      return {
        v: {
          remove: function remove() {
            target.removeEventListener(eventType, wrapCallback, useCapture);
          }
        }
      };
    }();

    if (typeof _ret === 'object') return _ret.v;
  } else if (target.attachEvent) {
    target.attachEvent('on' + eventType, wrapCallback);
    return {
      remove: function remove() {
        target.detachEvent('on' + eventType, wrapCallback);
      }
    };
  }
}

module.exports = exports['default'];

/***/ }),

/***/ "BoRb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("o7PZ");

__webpack_require__("PAbq");

__webpack_require__("1qKx");

__webpack_require__("6/FK");

__webpack_require__("2Tod");

__webpack_require__("7lGJ");

__webpack_require__("9p7t");

__webpack_require__("W1QL");

__webpack_require__("K/PF");

__webpack_require__("t91x");

__webpack_require__("75LO");

__webpack_require__("5hJT");

__webpack_require__("+jjx");

__webpack_require__("ABKx");

__webpack_require__("d3/y");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NextArrow = exports.PrevArrow = void 0;

var _react = _interopRequireDefault(__webpack_require__("mXGw"));

var _classnames = _interopRequireDefault(__webpack_require__("8Jek"));

var _innerSliderUtils = __webpack_require__("iWpb");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
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

var PrevArrow =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(PrevArrow, _React$PureComponent);

  function PrevArrow() {
    _classCallCheck(this, PrevArrow);

    return _possibleConstructorReturn(this, _getPrototypeOf(PrevArrow).apply(this, arguments));
  }

  _createClass(PrevArrow, [{
    key: "clickHandler",
    value: function clickHandler(options, e) {
      if (e) {
        e.preventDefault();
      }

      this.props.clickHandler(options, e);
    }
  }, {
    key: "render",
    value: function render() {
      var prevClasses = {
        "slick-arrow": true,
        "slick-prev": true
      };
      var prevHandler = this.clickHandler.bind(this, {
        message: "previous"
      });

      if (!this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow)) {
        prevClasses["slick-disabled"] = true;
        prevHandler = null;
      }

      var prevArrowProps = {
        key: "0",
        "data-role": "none",
        className: (0, _classnames["default"])(prevClasses),
        style: {
          display: "block"
        },
        onClick: prevHandler
      };
      var customProps = {
        currentSlide: this.props.currentSlide,
        slideCount: this.props.slideCount
      };
      var prevArrow;

      if (this.props.prevArrow) {
        prevArrow = _react["default"].cloneElement(this.props.prevArrow, _objectSpread({}, prevArrowProps, {}, customProps));
      } else {
        prevArrow = _react["default"].createElement("button", _extends({
          key: "0",
          type: "button"
        }, prevArrowProps), " ", "Previous");
      }

      return prevArrow;
    }
  }]);

  return PrevArrow;
}(_react["default"].PureComponent);

exports.PrevArrow = PrevArrow;

var NextArrow =
/*#__PURE__*/
function (_React$PureComponent2) {
  _inherits(NextArrow, _React$PureComponent2);

  function NextArrow() {
    _classCallCheck(this, NextArrow);

    return _possibleConstructorReturn(this, _getPrototypeOf(NextArrow).apply(this, arguments));
  }

  _createClass(NextArrow, [{
    key: "clickHandler",
    value: function clickHandler(options, e) {
      if (e) {
        e.preventDefault();
      }

      this.props.clickHandler(options, e);
    }
  }, {
    key: "render",
    value: function render() {
      var nextClasses = {
        "slick-arrow": true,
        "slick-next": true
      };
      var nextHandler = this.clickHandler.bind(this, {
        message: "next"
      });

      if (!(0, _innerSliderUtils.canGoNext)(this.props)) {
        nextClasses["slick-disabled"] = true;
        nextHandler = null;
      }

      var nextArrowProps = {
        key: "1",
        "data-role": "none",
        className: (0, _classnames["default"])(nextClasses),
        style: {
          display: "block"
        },
        onClick: nextHandler
      };
      var customProps = {
        currentSlide: this.props.currentSlide,
        slideCount: this.props.slideCount
      };
      var nextArrow;

      if (this.props.nextArrow) {
        nextArrow = _react["default"].cloneElement(this.props.nextArrow, _objectSpread({}, nextArrowProps, {}, customProps));
      } else {
        nextArrow = _react["default"].createElement("button", _extends({
          key: "1",
          type: "button"
        }, nextArrowProps), " ", "Next");
      }

      return nextArrow;
    }
  }]);

  return NextArrow;
}(_react["default"].PureComponent);

exports.NextArrow = NextArrow;

/***/ }),

/***/ "CDtY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("yIlq");

__webpack_require__("o7PZ");

__webpack_require__("d3/y");

var _interopRequireWildcard = __webpack_require__("vdEC");

var _interopRequireDefault = __webpack_require__("63Ad");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("SDJZ"));

var _createClass2 = _interopRequireDefault(__webpack_require__("NToG"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("K4DB"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("+IV6"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("T1e2"));

var _inherits2 = _interopRequireDefault(__webpack_require__("eef+"));

var _propTypes = _interopRequireDefault(__webpack_require__("W0B4"));

var _react = _interopRequireWildcard(__webpack_require__("mXGw"));

var _classnames = _interopRequireDefault(__webpack_require__("8Jek"));

var _Menu = _interopRequireDefault(__webpack_require__("qW1e"));

var _MenuItem = _interopRequireDefault(__webpack_require__("x2Pa"));

var _ClickableComponent = _interopRequireDefault(__webpack_require__("JMeO"));

var propTypes = {
  inline: _propTypes["default"].bool,
  items: _propTypes["default"].array,
  className: _propTypes["default"].string,
  onSelectItem: _propTypes["default"].func,
  children: _propTypes["default"].any,
  selectedIndex: _propTypes["default"].number
};

var MenuButton =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(MenuButton, _Component);

  function MenuButton(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, MenuButton);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(MenuButton).call(this, props, context));
    _this.state = {
      active: false,
      activateIndex: props.selectedIndex || 0
    };
    _this.commitSelection = _this.commitSelection.bind((0, _assertThisInitialized2["default"])(_this));
    _this.activateMenuItem = _this.activateMenuItem.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.renderMenu = _this.renderMenu.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleFocus = _this.handleFocus.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleBlur = _this.handleBlur.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleUpArrow = _this.handleUpArrow.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleDownArrow = _this.handleDownArrow.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleEscape = _this.handleEscape.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleReturn = _this.handleReturn.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleTab = _this.handleTab.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleKeyPress = _this.handleKeyPress.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleSelectItem = _this.handleSelectItem.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleIndexChange = _this.handleIndexChange.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(MenuButton, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.selectedIndex !== this.props.selectedIndex) {
        this.activateMenuItem(this.props.selectedIndex);
      }
    }
  }, {
    key: "commitSelection",
    value: function commitSelection(index) {
      this.setState({
        activateIndex: index
      });
      this.handleIndexChange(index);
    }
  }, {
    key: "activateMenuItem",
    value: function activateMenuItem(index) {
      this.setState({
        activateIndex: index
      });
      this.handleIndexChange(index);
    }
  }, {
    key: "handleIndexChange",
    value: function handleIndexChange(index) {
      var onSelectItem = this.props.onSelectItem;
      onSelectItem(index);
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      this.setState(function (prevState) {
        return {
          active: !prevState.active
        };
      });
    }
  }, {
    key: "handleFocus",
    value: function handleFocus() {
      document.addEventListener('keydown', this.handleKeyPress);
    }
  }, {
    key: "handleBlur",
    value: function handleBlur() {
      this.setState({
        active: false
      });
      document.removeEventListener('keydown', this.handleKeyPress);
    }
  }, {
    key: "handleUpArrow",
    value: function handleUpArrow(e) {
      var items = this.props.items;

      if (this.state.active) {
        e.preventDefault();
        var newIndex = this.state.activateIndex - 1;

        if (newIndex < 0) {
          newIndex = items.length ? items.length - 1 : 0;
        }

        this.activateMenuItem(newIndex);
      }
    }
  }, {
    key: "handleDownArrow",
    value: function handleDownArrow(e) {
      var items = this.props.items;

      if (this.state.active) {
        e.preventDefault();
        var newIndex = this.state.activateIndex + 1;

        if (newIndex >= items.length) {
          newIndex = 0;
        }

        this.activateMenuItem(newIndex);
      }
    }
  }, {
    key: "handleTab",
    value: function handleTab(e) {
      if (this.state.active) {
        e.preventDefault();
        this.commitSelection(this.state.activateIndex);
      }
    }
  }, {
    key: "handleReturn",
    value: function handleReturn(e) {
      e.preventDefault();

      if (this.state.active) {
        this.commitSelection(this.state.activateIndex);
      } else {
        this.setState({
          active: true
        });
      }
    }
  }, {
    key: "handleEscape",
    value: function handleEscape() {
      this.setState({
        active: false,
        activateIndex: 0
      });
    }
  }, {
    key: "handleKeyPress",
    value: function handleKeyPress(event) {
      // Escape (27) key
      if (event.which === 27) {
        this.handleEscape(event);
      } else if (event.which === 9) {
        // Tab (9) key
        this.handleTab(event);
      } else if (event.which === 13) {
        // Enter (13) key
        this.handleReturn(event);
      } else if (event.which === 38) {
        // Up (38) key
        this.handleUpArrow(event);
      } else if (event.which === 40) {
        // Down (40) key press
        this.handleDownArrow(event);
      }
    }
  }, {
    key: "handleSelectItem",
    value: function handleSelectItem(i) {
      this.commitSelection(i);
    }
  }, {
    key: "renderMenu",
    value: function renderMenu() {
      var _this2 = this;

      if (!this.state.active) {
        return null;
      }

      var items = this.props.items;
      return _react["default"].createElement(_Menu["default"], null, items.map(function (item, i) {
        return _react["default"].createElement(_MenuItem["default"], {
          item: item,
          index: i,
          onSelectItem: _this2.handleSelectItem,
          activateIndex: _this2.state.activateIndex,
          key: "item-".concat(i++)
        });
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          inline = _this$props.inline,
          className = _this$props.className;
      return _react["default"].createElement(_ClickableComponent["default"], {
        className: (0, _classnames["default"])(className, {
          'video-react-menu-button-inline': !!inline,
          'video-react-menu-button-popup': !inline,
          'video-react-menu-button-active': this.state.active
        }, 'video-react-control video-react-button video-react-menu-button'),
        role: "button",
        tabIndex: "0",
        ref: function ref(c) {
          _this3.menuButton = c;
        },
        onClick: this.handleClick,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur
      }, this.props.children, this.renderMenu());
    }
  }]);
  return MenuButton;
}(_react.Component);

exports["default"] = MenuButton;
MenuButton.propTypes = propTypes;
MenuButton.displayName = 'MenuButton';

/***/ }),

/***/ "DQXp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("d3/y");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleLoadStart = handleLoadStart;
exports.handleCanPlay = handleCanPlay;
exports.handleWaiting = handleWaiting;
exports.handleCanPlayThrough = handleCanPlayThrough;
exports.handlePlaying = handlePlaying;
exports.handlePlay = handlePlay;
exports.handlePause = handlePause;
exports.handleEnd = handleEnd;
exports.handleSeeking = handleSeeking;
exports.handleSeeked = handleSeeked;
exports.handleDurationChange = handleDurationChange;
exports.handleTimeUpdate = handleTimeUpdate;
exports.handleVolumeChange = handleVolumeChange;
exports.handleProgressChange = handleProgressChange;
exports.handleRateChange = handleRateChange;
exports.handleSuspend = handleSuspend;
exports.handleAbort = handleAbort;
exports.handleEmptied = handleEmptied;
exports.handleStalled = handleStalled;
exports.handleLoadedMetaData = handleLoadedMetaData;
exports.handleLoadedData = handleLoadedData;
exports.handleResize = handleResize;
exports.handleError = handleError;
exports.handleSeekingTime = handleSeekingTime;
exports.handleEndSeeking = handleEndSeeking;
exports.activateTextTrack = activateTextTrack;
exports.ACTIVATE_TEXT_TRACK = exports.ERROR = exports.RESIZE = exports.LOADED_DATA = exports.LOADED_META_DATA = exports.STALLED = exports.EMPTIED = exports.ABORT = exports.SUSPEND = exports.RATE_CHANGE = exports.PROGRESS_CHANGE = exports.VOLUME_CHANGE = exports.TIME_UPDATE = exports.DURATION_CHANGE = exports.END_SEEKING = exports.SEEKING_TIME = exports.SEEKED = exports.SEEKING = exports.END = exports.PAUSE = exports.PLAY = exports.PLAYING = exports.CAN_PLAY_THROUGH = exports.WAITING = exports.CAN_PLAY = exports.LOAD_START = void 0;
var LOAD_START = 'video-react/LOAD_START';
exports.LOAD_START = LOAD_START;
var CAN_PLAY = 'video-react/CAN_PLAY';
exports.CAN_PLAY = CAN_PLAY;
var WAITING = 'video-react/WAITING';
exports.WAITING = WAITING;
var CAN_PLAY_THROUGH = 'video-react/CAN_PLAY_THROUGH';
exports.CAN_PLAY_THROUGH = CAN_PLAY_THROUGH;
var PLAYING = 'video-react/PLAYING';
exports.PLAYING = PLAYING;
var PLAY = 'video-react/PLAY';
exports.PLAY = PLAY;
var PAUSE = 'video-react/PAUSE';
exports.PAUSE = PAUSE;
var END = 'video-react/END';
exports.END = END;
var SEEKING = 'video-react/SEEKING';
exports.SEEKING = SEEKING;
var SEEKED = 'video-react/SEEKED';
exports.SEEKED = SEEKED;
var SEEKING_TIME = 'video-react/SEEKING_TIME';
exports.SEEKING_TIME = SEEKING_TIME;
var END_SEEKING = 'video-react/END_SEEKING';
exports.END_SEEKING = END_SEEKING;
var DURATION_CHANGE = 'video-react/DURATION_CHANGE';
exports.DURATION_CHANGE = DURATION_CHANGE;
var TIME_UPDATE = 'video-react/TIME_UPDATE';
exports.TIME_UPDATE = TIME_UPDATE;
var VOLUME_CHANGE = 'video-react/VOLUME_CHANGE';
exports.VOLUME_CHANGE = VOLUME_CHANGE;
var PROGRESS_CHANGE = 'video-react/PROGRESS_CHANGE';
exports.PROGRESS_CHANGE = PROGRESS_CHANGE;
var RATE_CHANGE = 'video-react/RATE_CHANGE';
exports.RATE_CHANGE = RATE_CHANGE;
var SUSPEND = 'video-react/SUSPEND';
exports.SUSPEND = SUSPEND;
var ABORT = 'video-react/ABORT';
exports.ABORT = ABORT;
var EMPTIED = 'video-react/EMPTIED';
exports.EMPTIED = EMPTIED;
var STALLED = 'video-react/STALLED';
exports.STALLED = STALLED;
var LOADED_META_DATA = 'video-react/LOADED_META_DATA';
exports.LOADED_META_DATA = LOADED_META_DATA;
var LOADED_DATA = 'video-react/LOADED_DATA';
exports.LOADED_DATA = LOADED_DATA;
var RESIZE = 'video-react/RESIZE';
exports.RESIZE = RESIZE;
var ERROR = 'video-react/ERROR';
exports.ERROR = ERROR;
var ACTIVATE_TEXT_TRACK = 'video-react/ACTIVATE_TEXT_TRACK';
exports.ACTIVATE_TEXT_TRACK = ACTIVATE_TEXT_TRACK;

function handleLoadStart(videoProps) {
  return {
    type: LOAD_START,
    videoProps: videoProps
  };
}

function handleCanPlay(videoProps) {
  return {
    type: CAN_PLAY,
    videoProps: videoProps
  };
}

function handleWaiting(videoProps) {
  return {
    type: WAITING,
    videoProps: videoProps
  };
}

function handleCanPlayThrough(videoProps) {
  return {
    type: CAN_PLAY_THROUGH,
    videoProps: videoProps
  };
}

function handlePlaying(videoProps) {
  return {
    type: PLAYING,
    videoProps: videoProps
  };
}

function handlePlay(videoProps) {
  return {
    type: PLAY,
    videoProps: videoProps
  };
}

function handlePause(videoProps) {
  return {
    type: PAUSE,
    videoProps: videoProps
  };
}

function handleEnd(videoProps) {
  return {
    type: END,
    videoProps: videoProps
  };
}

function handleSeeking(videoProps) {
  return {
    type: SEEKING,
    videoProps: videoProps
  };
}

function handleSeeked(videoProps) {
  return {
    type: SEEKED,
    videoProps: videoProps
  };
}

function handleDurationChange(videoProps) {
  return {
    type: DURATION_CHANGE,
    videoProps: videoProps
  };
}

function handleTimeUpdate(videoProps) {
  return {
    type: TIME_UPDATE,
    videoProps: videoProps
  };
}

function handleVolumeChange(videoProps) {
  return {
    type: VOLUME_CHANGE,
    videoProps: videoProps
  };
}

function handleProgressChange(videoProps) {
  return {
    type: PROGRESS_CHANGE,
    videoProps: videoProps
  };
}

function handleRateChange(videoProps) {
  return {
    type: RATE_CHANGE,
    videoProps: videoProps
  };
}

function handleSuspend(videoProps) {
  return {
    type: SUSPEND,
    videoProps: videoProps
  };
}

function handleAbort(videoProps) {
  return {
    type: ABORT,
    videoProps: videoProps
  };
}

function handleEmptied(videoProps) {
  return {
    type: EMPTIED,
    videoProps: videoProps
  };
}

function handleStalled(videoProps) {
  return {
    type: STALLED,
    videoProps: videoProps
  };
}

function handleLoadedMetaData(videoProps) {
  return {
    type: LOADED_META_DATA,
    videoProps: videoProps
  };
}

function handleLoadedData(videoProps) {
  return {
    type: LOADED_DATA,
    videoProps: videoProps
  };
}

function handleResize(videoProps) {
  return {
    type: RESIZE,
    videoProps: videoProps
  };
}

function handleError(videoProps) {
  return {
    type: ERROR,
    videoProps: videoProps
  };
}

function handleSeekingTime(time) {
  return {
    type: SEEKING_TIME,
    time: time
  };
}

function handleEndSeeking(time) {
  return {
    type: END_SEEKING,
    time: time
  };
}

function activateTextTrack(textTrack) {
  return {
    type: ACTIVATE_TEXT_TRACK,
    textTrack: textTrack
  };
}

/***/ }),

/***/ "ETOT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("d3/y");

var _interopRequireDefault = __webpack_require__("63Ad");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__("W0B4"));

var _react = _interopRequireDefault(__webpack_require__("mXGw"));

var _classnames = _interopRequireDefault(__webpack_require__("8Jek"));

var _utils = __webpack_require__("xcnx");

var propTypes = {
  player: _propTypes["default"].object,
  className: _propTypes["default"].string
};

function CurrentTimeDisplay(_ref) {
  var _ref$player = _ref.player,
      currentTime = _ref$player.currentTime,
      duration = _ref$player.duration,
      className = _ref.className;
  var formattedTime = (0, _utils.formatTime)(currentTime, duration);
  return _react["default"].createElement("div", {
    className: (0, _classnames["default"])('video-react-current-time video-react-time-control video-react-control', className)
  }, _react["default"].createElement("div", {
    className: "video-react-current-time-display",
    "aria-live": "off"
  }, _react["default"].createElement("span", {
    className: "video-react-control-text"
  }, "Current Time "), formattedTime));
}

CurrentTimeDisplay.propTypes = propTypes;
CurrentTimeDisplay.displayName = 'CurrentTimeDisplay';
var _default = CurrentTimeDisplay;
exports["default"] = _default;

/***/ }),

/***/ "EdTv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("d3/y");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__("mXGw"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var defaultProps = {
  accessibility: true,
  adaptiveHeight: false,
  afterChange: null,
  appendDots: function appendDots(dots) {
    return _react["default"].createElement("ul", {
      style: {
        display: "block"
      }
    }, dots);
  },
  arrows: true,
  autoplay: false,
  autoplaySpeed: 3000,
  beforeChange: null,
  centerMode: false,
  centerPadding: "50px",
  className: "",
  cssEase: "ease",
  customPaging: function customPaging(i) {
    return _react["default"].createElement("button", null, i + 1);
  },
  dots: false,
  dotsClass: "slick-dots",
  draggable: true,
  easing: "linear",
  edgeFriction: 0.35,
  fade: false,
  focusOnSelect: false,
  infinite: true,
  initialSlide: 0,
  lazyLoad: null,
  nextArrow: null,
  onEdge: null,
  onInit: null,
  onLazyLoadError: null,
  onReInit: null,
  pauseOnDotsHover: false,
  pauseOnFocus: false,
  pauseOnHover: true,
  prevArrow: null,
  responsive: null,
  rows: 1,
  rtl: false,
  slide: "div",
  slidesPerRow: 1,
  slidesToScroll: 1,
  slidesToShow: 1,
  speed: 500,
  swipe: true,
  swipeEvent: null,
  swipeToSlide: false,
  touchMove: true,
  touchThreshold: 5,
  useCSS: true,
  useTransform: true,
  variableWidth: false,
  vertical: false,
  waitForAnimate: true
};
var _default = defaultProps;
exports["default"] = _default;

/***/ }),

/***/ "EvxU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("1qKx");

__webpack_require__("PAbq");

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

var _react = __webpack_require__("mXGw");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("W0B4");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ajaxGet = __webpack_require__("XzE/");

var _ajaxGet2 = _interopRequireDefault(_ajaxGet);

var _utils = __webpack_require__("b1BQ");

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _defaults(obj, defaults) {
  var keys = Object.getOwnPropertyNames(defaults);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = Object.getOwnPropertyDescriptor(defaults, key);

    if (value && value.configurable && obj[key] === undefined) {
      Object.defineProperty(obj, key, value);
    }
  }

  return obj;
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

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
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
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass);
}

var typeToLabel = {
  stargazers: 'Star',
  watchers: 'Watch',
  forks: 'Fork'
};
var typeToPath = {
  forks: 'network'
};

var GitHubButton = function (_React$Component) {
  _inherits(GitHubButton, _React$Component);

  function GitHubButton() {
    var _temp, _this, _ret;

    _classCallCheck(this, GitHubButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      count: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  GitHubButton.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.xhr = (0, _ajaxGet2["default"])(this.getRequestUrl(), function (response) {
      _this2.setCount(response);
    });
  };

  GitHubButton.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.xhr) {
      this.xhr.abort();
    }
  };

  GitHubButton.prototype.setCount = function setCount(data) {
    if (!data) return;
    var count = data[this.props.type + '_count'];
    this.setState({
      count: count
    });
  };

  GitHubButton.prototype.getRequestUrl = function getRequestUrl() {
    var _props = this.props,
        namespace = _props.namespace,
        repo = _props.repo;
    return '//api.github.com/repos/' + namespace + '/' + repo;
  };

  GitHubButton.prototype.getRepoUrl = function getRepoUrl() {
    var _props2 = this.props,
        namespace = _props2.namespace,
        repo = _props2.repo;
    return '//github.com/' + namespace + '/' + repo + '/';
  };

  GitHubButton.prototype.getCountUrl = function getCountUrl() {
    var _props3 = this.props,
        namespace = _props3.namespace,
        repo = _props3.repo,
        type = _props3.type;
    return '//github.com/' + namespace + '/' + repo + '/' + (typeToPath[type] || type) + '/';
  };

  GitHubButton.prototype.getCountStyle = function getCountStyle() {
    var count = this.state.count;

    if (count !== null) {
      return {
        display: 'block'
      };
    }

    return null;
  };

  GitHubButton.prototype.render = function render() {
    var _props4 = this.props,
        className = _props4.className,
        type = _props4.type,
        size = _props4.size,
        rest = _objectWithoutProperties(_props4, ['className', 'type', 'size']);

    delete rest.namespace;
    delete rest.repo;
    var count = this.state.count;
    var buttonClassName = utils.classNames(_defineProperty({
      'github-btn': true,
      'github-btn-large': size === 'large'
    }, className, className));
    return _react2["default"].createElement('span', _extends({}, rest, {
      className: buttonClassName
    }), _react2["default"].createElement('a', {
      className: 'gh-btn',
      href: this.getRepoUrl(),
      target: '_blank'
    }, _react2["default"].createElement('span', {
      className: 'gh-ico',
      'aria-hidden': 'true'
    }), _react2["default"].createElement('span', {
      className: 'gh-text'
    }, typeToLabel[type])), _react2["default"].createElement('a', {
      className: 'gh-count',
      target: '_blank',
      href: this.getCountUrl(),
      style: this.getCountStyle()
    }, count));
  };

  return GitHubButton;
}(_react2["default"].Component);

GitHubButton.displayName = 'GitHubButton';
GitHubButton.propTypes = {
  className: _propTypes2["default"].string,
  type: _propTypes2["default"].oneOf(['stargazers', 'watchers', 'forks']).isRequired,
  namespace: _propTypes2["default"].string.isRequired,
  repo: _propTypes2["default"].string.isRequired,
  size: _propTypes2["default"].oneOf(['large'])
};
exports["default"] = GitHubButton;
module.exports = exports['default'];

/***/ }),

/***/ "Exke":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getScrollBarSize; });
var cached;
function getScrollBarSize(fresh) {
  if (typeof document === 'undefined') {
    return 0;
  }

  if (fresh || cached === undefined) {
    var inner = document.createElement('div');
    inner.style.width = '100%';
    inner.style.height = '200px';
    var outer = document.createElement('div');
    var outerStyle = outer.style;
    outerStyle.position = 'absolute';
    outerStyle.top = 0;
    outerStyle.left = 0;
    outerStyle.pointerEvents = 'none';
    outerStyle.visibility = 'hidden';
    outerStyle.width = '200px';
    outerStyle.height = '150px';
    outerStyle.overflow = 'hidden';
    outer.appendChild(inner);
    document.body.appendChild(outer);
    var widthContained = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var widthScroll = inner.offsetWidth;

    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth;
    }

    document.body.removeChild(outer);
    cached = widthContained - widthScroll;
  }

  return cached;
}

/***/ }),

/***/ "F4hD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("d3/y");

var _interopRequireDefault = __webpack_require__("63Ad");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleFullscreenChange = handleFullscreenChange;
exports.activate = activate;
exports.userActivate = userActivate;
exports.play = play;
exports.pause = pause;
exports.togglePlay = togglePlay;
exports.seek = seek;
exports.forward = forward;
exports.replay = replay;
exports.changeRate = changeRate;
exports.changeVolume = changeVolume;
exports.mute = mute;
exports.toggleFullscreen = toggleFullscreen;
exports.USER_ACTIVATE = exports.PLAYER_ACTIVATE = exports.FULLSCREEN_CHANGE = exports.OPERATE = void 0;

var _fullscreen = _interopRequireDefault(__webpack_require__("pLEv"));

var OPERATE = 'video-react/OPERATE';
exports.OPERATE = OPERATE;
var FULLSCREEN_CHANGE = 'video-react/FULLSCREEN_CHANGE';
exports.FULLSCREEN_CHANGE = FULLSCREEN_CHANGE;
var PLAYER_ACTIVATE = 'video-react/PLAYER_ACTIVATE';
exports.PLAYER_ACTIVATE = PLAYER_ACTIVATE;
var USER_ACTIVATE = 'video-react/USER_ACTIVATE';
exports.USER_ACTIVATE = USER_ACTIVATE;

function handleFullscreenChange(isFullscreen) {
  return {
    type: FULLSCREEN_CHANGE,
    isFullscreen: isFullscreen
  };
}

function activate(activity) {
  return {
    type: PLAYER_ACTIVATE,
    activity: activity
  };
}

function userActivate(activity) {
  return {
    type: USER_ACTIVATE,
    activity: activity
  };
}

function play() {
  var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    action: 'play',
    source: ''
  };
  this.video.play();
  return {
    type: OPERATE,
    operation: operation
  };
}

function pause() {
  var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    action: 'pause',
    source: ''
  };
  this.video.pause();
  return {
    type: OPERATE,
    operation: operation
  };
}

function togglePlay() {
  var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    action: 'toggle-play',
    source: ''
  };
  this.video.togglePlay();
  return {
    type: OPERATE,
    operation: operation
  };
} // seek video by time


function seek(time) {
  var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    action: 'seek',
    source: ''
  };
  this.video.seek(time);
  return {
    type: OPERATE,
    operation: operation
  };
} // jump forward x seconds


function forward(seconds) {
  var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    action: "forward-".concat(seconds),
    source: ''
  };
  this.video.forward(seconds);
  return {
    type: OPERATE,
    operation: operation
  };
} // jump back x seconds


function replay(seconds) {
  var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    action: "replay-".concat(seconds),
    source: ''
  };
  this.video.replay(seconds);
  return {
    type: OPERATE,
    operation: operation
  };
}

function changeRate(rate) {
  var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    action: 'change-rate',
    source: ''
  };
  this.video.playbackRate = rate;
  return {
    type: OPERATE,
    operation: operation
  };
}

function changeVolume(volume) {
  var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    action: 'change-volume',
    source: ''
  };
  var v = volume;

  if (volume < 0) {
    v = 0;
  }

  if (volume > 1) {
    v = 1;
  }

  this.video.volume = v;
  return {
    type: OPERATE,
    operation: operation
  };
}

function mute(muted) {
  var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    action: muted ? 'muted' : 'unmuted',
    source: ''
  };
  this.video.muted = muted;
  return {
    type: OPERATE,
    operation: operation
  };
}

function toggleFullscreen(player) {
  if (_fullscreen["default"].enabled) {
    if (_fullscreen["default"].isFullscreen) {
      _fullscreen["default"].exit();
    } else {
      _fullscreen["default"].request(this.rootElement);
    }

    return {
      type: OPERATE,
      operation: {
        action: 'toggle-fullscreen',
        source: ''
      }
    };
  }

  return {
    type: FULLSCREEN_CHANGE,
    isFullscreen: !player.isFullscreen
  };
}

/***/ }),

/***/ "F9x+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("d3/y");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IS_IOS = exports.IS_IPOD = exports.IS_IPHONE = exports.IS_IPAD = void 0;
var USER_AGENT = typeof window !== 'undefined' && window.navigator ? window.navigator.userAgent : ''; // const webkitVersionMap = (/AppleWebKit\/([\d.]+)/i).exec(USER_AGENT);
// const appleWebkitVersion = webkitVersionMap ? parseFloat(webkitVersionMap.pop()) : null;

/*
 * Device is an iPhone
 *
 * @type {Boolean}
 * @constant
 * @private
 */

var IS_IPAD = /iPad/i.test(USER_AGENT); // The Facebook app's UIWebView identifies as both an iPhone and iPad, so
// to identify iPhones, we need to exclude iPads.
// http://artsy.github.io/blog/2012/10/18/the-perils-of-ios-user-agent-sniffing/

exports.IS_IPAD = IS_IPAD;
var IS_IPHONE = /iPhone/i.test(USER_AGENT) && !IS_IPAD;
exports.IS_IPHONE = IS_IPHONE;
var IS_IPOD = /iPod/i.test(USER_AGENT);
exports.IS_IPOD = IS_IPOD;
var IS_IOS = IS_IPHONE || IS_IPAD || IS_IPOD;
exports.IS_IOS = IS_IOS;

/***/ }),

/***/ "H0W7":
/***/ (function(module) {

module.exports = JSON.parse("{\"data\":{\"site\":{\"siteMetadata\":{\"githubUrl\":\"https://github.com/antvis/antvis.github.io\"}}}}");

/***/ }),

/***/ "Ht6y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("m8zh");

__webpack_require__("U8p0");

__webpack_require__("yIlq");

__webpack_require__("PAbq");

__webpack_require__("1qKx");

__webpack_require__("6/FK");

__webpack_require__("2Tod");

__webpack_require__("7lGJ");

__webpack_require__("9p7t");

__webpack_require__("W1QL");

__webpack_require__("K/PF");

__webpack_require__("t91x");

__webpack_require__("75LO");

__webpack_require__("5hJT");

__webpack_require__("+jjx");

__webpack_require__("ABKx");

__webpack_require__("d3/y");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__("mXGw"));

var _innerSlider = __webpack_require__("lUS9");

var _json2mq = _interopRequireDefault(__webpack_require__("drO/"));

var _defaultProps = _interopRequireDefault(__webpack_require__("EdTv"));

var _innerSliderUtils = __webpack_require__("iWpb");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
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

var enquire = (0, _innerSliderUtils.canUseDOM)() && __webpack_require__("495I");

var Slider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Slider, _React$Component);

  function Slider(props) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Slider).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "innerSliderRefHandler", function (ref) {
      return _this.innerSlider = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "slickPrev", function () {
      return _this.innerSlider.slickPrev();
    });

    _defineProperty(_assertThisInitialized(_this), "slickNext", function () {
      return _this.innerSlider.slickNext();
    });

    _defineProperty(_assertThisInitialized(_this), "slickGoTo", function (slide) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return _this.innerSlider.slickGoTo(slide, dontAnimate);
    });

    _defineProperty(_assertThisInitialized(_this), "slickPause", function () {
      return _this.innerSlider.pause("paused");
    });

    _defineProperty(_assertThisInitialized(_this), "slickPlay", function () {
      return _this.innerSlider.autoPlay("play");
    });

    _this.state = {
      breakpoint: null
    };
    _this._responsiveMediaHandlers = [];
    return _this;
  }

  _createClass(Slider, [{
    key: "media",
    value: function media(query, handler) {
      // javascript handler for  css media query
      enquire.register(query, handler);

      this._responsiveMediaHandlers.push({
        query: query,
        handler: handler
      });
    } // handles responsive breakpoints

  }, {
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      var _this2 = this; // performance monitoring
      //if (process.env.NODE_ENV !== 'production') {
      //const { whyDidYouUpdate } = require('why-did-you-update')
      //whyDidYouUpdate(React)
      //}


      if (this.props.responsive) {
        var breakpoints = this.props.responsive.map(function (breakpt) {
          return breakpt.breakpoint;
        }); // sort them in increasing order of their numerical value

        breakpoints.sort(function (x, y) {
          return x - y;
        });
        breakpoints.forEach(function (breakpoint, index) {
          // media query for each breakpoint
          var bQuery;

          if (index === 0) {
            bQuery = (0, _json2mq["default"])({
              minWidth: 0,
              maxWidth: breakpoint
            });
          } else {
            bQuery = (0, _json2mq["default"])({
              minWidth: breakpoints[index - 1] + 1,
              maxWidth: breakpoint
            });
          } // when not using server side rendering


          (0, _innerSliderUtils.canUseDOM)() && _this2.media(bQuery, function () {
            _this2.setState({
              breakpoint: breakpoint
            });
          });
        }); // Register media query for full screen. Need to support resize from small to large
        // convert javascript object to media query string

        var query = (0, _json2mq["default"])({
          minWidth: breakpoints.slice(-1)[0]
        });
        (0, _innerSliderUtils.canUseDOM)() && this.media(query, function () {
          _this2.setState({
            breakpoint: null
          });
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._responsiveMediaHandlers.forEach(function (obj) {
        enquire.unregister(obj.query, obj.handler);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var settings;
      var newProps;

      if (this.state.breakpoint) {
        newProps = this.props.responsive.filter(function (resp) {
          return resp.breakpoint === _this3.state.breakpoint;
        });
        settings = newProps[0].settings === "unslick" ? "unslick" : _objectSpread({}, _defaultProps["default"], {}, this.props, {}, newProps[0].settings);
      } else {
        settings = _objectSpread({}, _defaultProps["default"], {}, this.props);
      } // force scrolling by one if centerMode is on


      if (settings.centerMode) {
        if (settings.slidesToScroll > 1 && "production" !== "production") {
          console.warn("slidesToScroll should be equal to 1 in centerMode, you are using ".concat(settings.slidesToScroll));
        }

        settings.slidesToScroll = 1;
      } // force showing one slide and scrolling by one if the fade mode is on


      if (settings.fade) {
        if (settings.slidesToShow > 1 && "production" !== "production") {
          console.warn("slidesToShow should be equal to 1 when fade is true, you're using ".concat(settings.slidesToShow));
        }

        if (settings.slidesToScroll > 1 && "production" !== "production") {
          console.warn("slidesToScroll should be equal to 1 when fade is true, you're using ".concat(settings.slidesToScroll));
        }

        settings.slidesToShow = 1;
        settings.slidesToScroll = 1;
      } // makes sure that children is an array, even when there is only 1 child


      var children = _react["default"].Children.toArray(this.props.children); // Children may contain false or null, so we should filter them
      // children may also contain string filled with spaces (in certain cases where we use jsx strings)


      children = children.filter(function (child) {
        if (typeof child === "string") {
          return !!child.trim();
        }

        return !!child;
      }); // rows and slidesPerRow logic is handled here

      if (settings.variableWidth && (settings.rows > 1 || settings.slidesPerRow > 1)) {
        console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1");
        settings.variableWidth = false;
      }

      var newChildren = [];
      var currentWidth = null;

      for (var i = 0; i < children.length; i += settings.rows * settings.slidesPerRow) {
        var newSlide = [];

        for (var j = i; j < i + settings.rows * settings.slidesPerRow; j += settings.slidesPerRow) {
          var row = [];

          for (var k = j; k < j + settings.slidesPerRow; k += 1) {
            if (settings.variableWidth && children[k].props.style) {
              currentWidth = children[k].props.style.width;
            }

            if (k >= children.length) break;
            row.push(_react["default"].cloneElement(children[k], {
              key: 100 * i + 10 * j + k,
              tabIndex: -1,
              style: {
                width: "".concat(100 / settings.slidesPerRow, "%"),
                display: "inline-block"
              }
            }));
          }

          newSlide.push(_react["default"].createElement("div", {
            key: 10 * i + j
          }, row));
        }

        if (settings.variableWidth) {
          newChildren.push(_react["default"].createElement("div", {
            key: i,
            style: {
              width: currentWidth
            }
          }, newSlide));
        } else {
          newChildren.push(_react["default"].createElement("div", {
            key: i
          }, newSlide));
        }
      }

      if (settings === "unslick") {
        var className = "regular slider " + (this.props.className || "");
        return _react["default"].createElement("div", {
          className: className
        }, newChildren);
      } else if (newChildren.length <= settings.slidesToShow) {
        settings.unslick = true;
      }

      return _react["default"].createElement(_innerSlider.InnerSlider, _extends({
        style: this.props.style,
        ref: this.innerSliderRefHandler
      }, settings), newChildren);
    }
  }]);

  return Slider;
}(_react["default"].Component);

exports["default"] = Slider;

/***/ }),

/***/ "JMeO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("o7PZ");

__webpack_require__("d3/y");

var _interopRequireWildcard = __webpack_require__("vdEC");

var _interopRequireDefault = __webpack_require__("63Ad");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("8VmE"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__("gki9"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("SDJZ"));

var _createClass2 = _interopRequireDefault(__webpack_require__("NToG"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("K4DB"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("+IV6"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("T1e2"));

var _inherits2 = _interopRequireDefault(__webpack_require__("eef+"));

var _propTypes = _interopRequireDefault(__webpack_require__("W0B4"));

var _react = _interopRequireWildcard(__webpack_require__("mXGw"));

var _classnames = _interopRequireDefault(__webpack_require__("8Jek"));

var propTypes = {
  tagName: _propTypes["default"].string,
  onClick: _propTypes["default"].func.isRequired,
  onFocus: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  className: _propTypes["default"].string
};
var defaultProps = {
  tagName: 'div'
};

var ClickableComponent =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(ClickableComponent, _Component);

  function ClickableComponent(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, ClickableComponent);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ClickableComponent).call(this, props, context));
    _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleFocus = _this.handleFocus.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleBlur = _this.handleBlur.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleKeypress = _this.handleKeypress.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(ClickableComponent, [{
    key: "handleKeypress",
    value: function handleKeypress(event) {
      // Support Space (32) or Enter (13) key operation to fire a click event
      if (event.which === 32 || event.which === 13) {
        event.preventDefault();
        this.handleClick(event);
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick(event) {
      var onClick = this.props.onClick;
      onClick(event);
    }
  }, {
    key: "handleFocus",
    value: function handleFocus(e) {
      document.addEventListener('keydown', this.handleKeypress);

      if (this.props.onFocus) {
        this.props.onFocus(e);
      }
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(e) {
      document.removeEventListener('keydown', this.handleKeypress);

      if (this.props.onBlur) {
        this.props.onBlur(e);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var Tag = this.props.tagName;
      var props = (0, _objectSpread2["default"])({}, this.props);
      delete props.tagName;
      delete props.className;
      return _react["default"].createElement(Tag, (0, _extends2["default"])({
        className: (0, _classnames["default"])(this.props.className),
        role: "button",
        tabIndex: "0",
        onClick: this.handleClick,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur
      }, props));
    }
  }]);
  return ClickableComponent;
}(_react.Component);

exports["default"] = ClickableComponent;
ClickableComponent.propTypes = propTypes;
ClickableComponent.defaultProps = defaultProps;
ClickableComponent.displayName = 'ClickableComponent';

/***/ }),

/***/ "Jbqj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("o7PZ");

__webpack_require__("d3/y");

var _interopRequireWildcard = __webpack_require__("vdEC");

var _interopRequireDefault = __webpack_require__("63Ad");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("SDJZ"));

var _createClass2 = _interopRequireDefault(__webpack_require__("NToG"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("K4DB"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("+IV6"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("T1e2"));

var _inherits2 = _interopRequireDefault(__webpack_require__("eef+"));

var _propTypes = _interopRequireDefault(__webpack_require__("W0B4"));

var _react = _interopRequireWildcard(__webpack_require__("mXGw"));

var _classnames = _interopRequireDefault(__webpack_require__("8Jek"));

var propTypes = {
  actions: _propTypes["default"].object,
  player: _propTypes["default"].object,
  className: _propTypes["default"].string
};

var FullscreenToggle =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(FullscreenToggle, _Component);

  function FullscreenToggle(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, FullscreenToggle);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(FullscreenToggle).call(this, props, context));
    _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(FullscreenToggle, [{
    key: "handleClick",
    value: function handleClick() {
      var _this$props = this.props,
          player = _this$props.player,
          actions = _this$props.actions;
      actions.toggleFullscreen(player);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          player = _this$props2.player,
          className = _this$props2.className;
      return _react["default"].createElement("button", {
        className: (0, _classnames["default"])(className, {
          'video-react-icon-fullscreen-exit': player.isFullscreen,
          'video-react-icon-fullscreen': !player.isFullscreen
        }, 'video-react-fullscreen-control video-react-control video-react-button video-react-icon'),
        ref: function ref(c) {
          _this2.button = c;
        },
        type: "button",
        tabIndex: "0",
        onClick: this.handleClick
      }, _react["default"].createElement("span", {
        className: "video-react-control-text"
      }, "Non-Fullscreen"));
    }
  }]);
  return FullscreenToggle;
}(_react.Component);

exports["default"] = FullscreenToggle;
FullscreenToggle.propTypes = propTypes;
FullscreenToggle.displayName = 'FullscreenToggle';

/***/ }),

/***/ "K4DB":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("e+GP");

var assertThisInitialized = __webpack_require__("T1e2");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "K8k1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("d3/y");

var _interopRequireDefault = __webpack_require__("63Ad");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PopupButton;

var _extends2 = _interopRequireDefault(__webpack_require__("8VmE"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__("gki9"));

var _propTypes = _interopRequireDefault(__webpack_require__("W0B4"));

var _react = _interopRequireDefault(__webpack_require__("mXGw"));

var _classnames = _interopRequireDefault(__webpack_require__("8Jek"));

var _ClickableComponent = _interopRequireDefault(__webpack_require__("JMeO"));

var _Popup = _interopRequireDefault(__webpack_require__("oiJB"));

var propTypes = {
  inline: _propTypes["default"].bool,
  onClick: _propTypes["default"].func.isRequired,
  onFocus: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  className: _propTypes["default"].string
};
var defaultProps = {
  inline: true
};

function PopupButton(props) {
  var inline = props.inline,
      className = props.className;
  var ps = (0, _objectSpread2["default"])({}, props);
  delete ps.children;
  delete ps.inline;
  delete ps.className;
  return _react["default"].createElement(_ClickableComponent["default"], (0, _extends2["default"])({
    className: (0, _classnames["default"])(className, {
      'video-react-menu-button-inline': !!inline,
      'video-react-menu-button-popup': !inline
    }, 'video-react-control video-react-button video-react-menu-button')
  }, ps), _react["default"].createElement(_Popup["default"], props));
}

PopupButton.propTypes = propTypes;
PopupButton.defaultProps = defaultProps;
PopupButton.displayName = 'PopupButton';

/***/ }),

/***/ "KF4W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("V7cS");

__webpack_require__("yIlq");

__webpack_require__("o7PZ");

__webpack_require__("d3/y");

var _interopRequireWildcard = __webpack_require__("vdEC");

var _interopRequireDefault = __webpack_require__("63Ad");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("SDJZ"));

var _createClass2 = _interopRequireDefault(__webpack_require__("NToG"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("K4DB"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("+IV6"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("T1e2"));

var _inherits2 = _interopRequireDefault(__webpack_require__("eef+"));

var _propTypes = _interopRequireDefault(__webpack_require__("W0B4"));

var _react = _interopRequireWildcard(__webpack_require__("mXGw"));

var _classnames = _interopRequireDefault(__webpack_require__("8Jek"));

var _MenuButton = _interopRequireDefault(__webpack_require__("CDtY"));

var propTypes = {
  player: _propTypes["default"].object,
  actions: _propTypes["default"].object,
  rates: _propTypes["default"].array,
  className: _propTypes["default"].string
};
var defaultProps = {
  rates: [2, 1.5, 1.25, 1, 0.5, 0.25]
};

var PlaybackRateMenuButton =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(PlaybackRateMenuButton, _Component);

  function PlaybackRateMenuButton(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, PlaybackRateMenuButton);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(PlaybackRateMenuButton).call(this, props, context));
    _this.handleSelectItem = _this.handleSelectItem.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(PlaybackRateMenuButton, [{
    key: "handleSelectItem",
    value: function handleSelectItem(index) {
      var _this$props = this.props,
          rates = _this$props.rates,
          actions = _this$props.actions;

      if (index >= 0 && index < rates.length) {
        actions.changeRate(rates[index]);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          rates = _this$props2.rates,
          player = _this$props2.player;
      var items = rates.map(function (rate) {
        return {
          label: "".concat(rate, "x"),
          value: rate
        };
      });
      var selectedIndex = rates.indexOf(player.playbackRate) || 0;
      return _react["default"].createElement(_MenuButton["default"], {
        className: (0, _classnames["default"])('video-react-playback-rate', this.props.className),
        onSelectItem: this.handleSelectItem,
        items: items,
        selectedIndex: selectedIndex
      }, _react["default"].createElement("span", {
        className: "video-react-control-text"
      }, "Playback Rate"), _react["default"].createElement("div", {
        className: "video-react-playback-rate-value"
      }, "".concat(player.playbackRate.toFixed(2), "x")));
    }
  }]);
  return PlaybackRateMenuButton;
}(_react.Component);

PlaybackRateMenuButton.propTypes = propTypes;
PlaybackRateMenuButton.defaultProps = defaultProps;
PlaybackRateMenuButton.displayName = 'PlaybackRateMenuButton';
var _default = PlaybackRateMenuButton;
exports["default"] = _default;

/***/ }),

/***/ "KwlR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("d3/y");

var _interopRequireWildcard = __webpack_require__("vdEC");

var _interopRequireDefault = __webpack_require__("63Ad");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Player", {
  enumerable: true,
  get: function get() {
    return _Player["default"];
  }
});
Object.defineProperty(exports, "Video", {
  enumerable: true,
  get: function get() {
    return _Video["default"];
  }
});
Object.defineProperty(exports, "BigPlayButton", {
  enumerable: true,
  get: function get() {
    return _BigPlayButton["default"];
  }
});
Object.defineProperty(exports, "LoadingSpinner", {
  enumerable: true,
  get: function get() {
    return _LoadingSpinner["default"];
  }
});
Object.defineProperty(exports, "PosterImage", {
  enumerable: true,
  get: function get() {
    return _PosterImage["default"];
  }
});
Object.defineProperty(exports, "Slider", {
  enumerable: true,
  get: function get() {
    return _Slider["default"];
  }
});
Object.defineProperty(exports, "Bezel", {
  enumerable: true,
  get: function get() {
    return _Bezel["default"];
  }
});
Object.defineProperty(exports, "Shortcut", {
  enumerable: true,
  get: function get() {
    return _Shortcut["default"];
  }
});
Object.defineProperty(exports, "ControlBar", {
  enumerable: true,
  get: function get() {
    return _ControlBar["default"];
  }
});
Object.defineProperty(exports, "PlayToggle", {
  enumerable: true,
  get: function get() {
    return _PlayToggle["default"];
  }
});
Object.defineProperty(exports, "ForwardControl", {
  enumerable: true,
  get: function get() {
    return _ForwardControl["default"];
  }
});
Object.defineProperty(exports, "ReplayControl", {
  enumerable: true,
  get: function get() {
    return _ReplayControl["default"];
  }
});
Object.defineProperty(exports, "FullscreenToggle", {
  enumerable: true,
  get: function get() {
    return _FullscreenToggle["default"];
  }
});
Object.defineProperty(exports, "ProgressControl", {
  enumerable: true,
  get: function get() {
    return _ProgressControl["default"];
  }
});
Object.defineProperty(exports, "SeekBar", {
  enumerable: true,
  get: function get() {
    return _SeekBar["default"];
  }
});
Object.defineProperty(exports, "PlayProgressBar", {
  enumerable: true,
  get: function get() {
    return _PlayProgressBar["default"];
  }
});
Object.defineProperty(exports, "LoadProgressBar", {
  enumerable: true,
  get: function get() {
    return _LoadProgressBar["default"];
  }
});
Object.defineProperty(exports, "MouseTimeDisplay", {
  enumerable: true,
  get: function get() {
    return _MouseTimeDisplay["default"];
  }
});
Object.defineProperty(exports, "VolumeMenuButton", {
  enumerable: true,
  get: function get() {
    return _VolumeMenuButton["default"];
  }
});
Object.defineProperty(exports, "PlaybackRateMenuButton", {
  enumerable: true,
  get: function get() {
    return _PlaybackRateMenuButton["default"];
  }
});
Object.defineProperty(exports, "PlaybackRate", {
  enumerable: true,
  get: function get() {
    return _PlaybackRate["default"];
  }
});
Object.defineProperty(exports, "ClosedCaptionButton", {
  enumerable: true,
  get: function get() {
    return _ClosedCaptionButton["default"];
  }
});
Object.defineProperty(exports, "RemainingTimeDisplay", {
  enumerable: true,
  get: function get() {
    return _RemainingTimeDisplay["default"];
  }
});
Object.defineProperty(exports, "CurrentTimeDisplay", {
  enumerable: true,
  get: function get() {
    return _CurrentTimeDisplay["default"];
  }
});
Object.defineProperty(exports, "DurationDisplay", {
  enumerable: true,
  get: function get() {
    return _DurationDisplay["default"];
  }
});
Object.defineProperty(exports, "TimeDivider", {
  enumerable: true,
  get: function get() {
    return _TimeDivider["default"];
  }
});
Object.defineProperty(exports, "MenuButton", {
  enumerable: true,
  get: function get() {
    return _MenuButton["default"];
  }
});
Object.defineProperty(exports, "playerReducer", {
  enumerable: true,
  get: function get() {
    return _reducers.playerReducer;
  }
});
Object.defineProperty(exports, "operationReducer", {
  enumerable: true,
  get: function get() {
    return _reducers.operationReducer;
  }
});
exports.videoActions = exports.playerActions = void 0;

var _Player = _interopRequireDefault(__webpack_require__("0YrX"));

var _Video = _interopRequireDefault(__webpack_require__("nEIY"));

var _BigPlayButton = _interopRequireDefault(__webpack_require__("t0sw"));

var _LoadingSpinner = _interopRequireDefault(__webpack_require__("7Tkg"));

var _PosterImage = _interopRequireDefault(__webpack_require__("Q9AD"));

var _Slider = _interopRequireDefault(__webpack_require__("NdzT"));

var _Bezel = _interopRequireDefault(__webpack_require__("MPds"));

var _Shortcut = _interopRequireDefault(__webpack_require__("tKeH"));

var _ControlBar = _interopRequireDefault(__webpack_require__("4jBZ"));

var _PlayToggle = _interopRequireDefault(__webpack_require__("XZtX"));

var _ForwardControl = _interopRequireDefault(__webpack_require__("wQeU"));

var _ReplayControl = _interopRequireDefault(__webpack_require__("dIBq"));

var _FullscreenToggle = _interopRequireDefault(__webpack_require__("Jbqj"));

var _ProgressControl = _interopRequireDefault(__webpack_require__("AX92"));

var _SeekBar = _interopRequireDefault(__webpack_require__("wPJX"));

var _PlayProgressBar = _interopRequireDefault(__webpack_require__("l+eI"));

var _LoadProgressBar = _interopRequireDefault(__webpack_require__("27Aj"));

var _MouseTimeDisplay = _interopRequireDefault(__webpack_require__("ltLC"));

var _VolumeMenuButton = _interopRequireDefault(__webpack_require__("xKwe"));

var _PlaybackRateMenuButton = _interopRequireDefault(__webpack_require__("KF4W"));

var _PlaybackRate = _interopRequireDefault(__webpack_require__("Zw4j"));

var _ClosedCaptionButton = _interopRequireDefault(__webpack_require__("kg3M"));

var _RemainingTimeDisplay = _interopRequireDefault(__webpack_require__("bF0Y"));

var _CurrentTimeDisplay = _interopRequireDefault(__webpack_require__("ETOT"));

var _DurationDisplay = _interopRequireDefault(__webpack_require__("s7ML"));

var _TimeDivider = _interopRequireDefault(__webpack_require__("e6E8"));

var _MenuButton = _interopRequireDefault(__webpack_require__("CDtY"));

var playerActions = _interopRequireWildcard(__webpack_require__("F4hD"));

exports.playerActions = playerActions;

var videoActions = _interopRequireWildcard(__webpack_require__("DQXp"));

exports.videoActions = videoActions;

var _reducers = __webpack_require__("bI2v");

/***/ }),

/***/ "L7zD":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("9ovy");

/**
 * Delegate to handle a media query being matched and unmatched.
 *
 * @param {object} options
 * @param {function} options.match callback for when the media query is matched
 * @param {function} [options.unmatch] callback for when the media query is unmatched
 * @param {function} [options.setup] one-time callback triggered the first time a query is matched
 * @param {boolean} [options.deferSetup=false] should the setup callback be run immediately, rather than first time query is matched?
 * @constructor
 */
function QueryHandler(options) {
  this.options = options;
  !options.deferSetup && this.setup();
}

QueryHandler.prototype = {
  constructor: QueryHandler,

  /**
   * coordinates setup of the handler
   *
   * @function
   */
  setup: function setup() {
    if (this.options.setup) {
      this.options.setup();
    }

    this.initialised = true;
  },

  /**
   * coordinates setup and triggering of the handler
   *
   * @function
   */
  on: function on() {
    !this.initialised && this.setup();
    this.options.match && this.options.match();
  },

  /**
   * coordinates the unmatch event for the handler
   *
   * @function
   */
  off: function off() {
    this.options.unmatch && this.options.unmatch();
  },

  /**
   * called when a handler is to be destroyed.
   * delegates to the destroy or unmatch callbacks, depending on availability.
   *
   * @function
   */
  destroy: function destroy() {
    this.options.destroy ? this.options.destroy() : this.off();
  },

  /**
   * determines equality by reference.
   * if object is supplied compare options, if function, compare match callback
   *
   * @function
   * @param {object || function} [target] the target for comparison
   */
  equals: function equals(target) {
    return this.options === target || this.options.match === target;
  }
};
module.exports = QueryHandler;

/***/ }),

/***/ "LKC9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Portal; });
/* harmony import */ var core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("PAbq");
/* harmony import */ var core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("1qKx");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("d3/y");
/* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("+jjx");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ABKx");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("mXGw");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("xARA");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("W0B4");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);






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





var Portal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Portal, _React$Component);

  function Portal() {
    _classCallCheck(this, Portal);

    return _possibleConstructorReturn(this, _getPrototypeOf(Portal).apply(this, arguments));
  }

  _createClass(Portal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.createContainer();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var didUpdate = this.props.didUpdate;

      if (didUpdate) {
        didUpdate(prevProps);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeContainer();
    }
  }, {
    key: "createContainer",
    value: function createContainer() {
      this._container = this.props.getContainer();
      this.forceUpdate();
    }
  }, {
    key: "removeContainer",
    value: function removeContainer() {
      if (this._container) {
        this._container.parentNode.removeChild(this._container);
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this._container) {
        return react_dom__WEBPACK_IMPORTED_MODULE_6___default.a.createPortal(this.props.children, this._container);
      }

      return null;
    }
  }]);

  return Portal;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

Portal.propTypes = {
  getContainer: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node.isRequired,
  didUpdate: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func
};


/***/ }),

/***/ "MNOf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
 // If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707

__webpack_require__("4aJ6");

__webpack_require__("M/4x");

__webpack_require__("t91x");

__webpack_require__("+3V6");

__webpack_require__("V7cS");

__webpack_require__("Z8gF");

__webpack_require__("asZ9");

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function (qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);
  var maxKeys = 1000;

  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length; // maxKeys <= 0 means that we should not limit keys count

  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr,
        vstr,
        k,
        v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

/***/ }),

/***/ "MPds":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("o7PZ");

__webpack_require__("d3/y");

var _interopRequireWildcard = __webpack_require__("vdEC");

var _interopRequireDefault = __webpack_require__("63Ad");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("SDJZ"));

var _createClass2 = _interopRequireDefault(__webpack_require__("NToG"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("K4DB"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("+IV6"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("T1e2"));

var _inherits2 = _interopRequireDefault(__webpack_require__("eef+"));

var _propTypes = _interopRequireDefault(__webpack_require__("W0B4"));

var _react = _interopRequireWildcard(__webpack_require__("mXGw"));

var _classnames = _interopRequireDefault(__webpack_require__("8Jek"));

var propTypes = {
  manager: _propTypes["default"].object,
  className: _propTypes["default"].string
};

var Bezel =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Bezel, _Component);

  function Bezel(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, Bezel);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Bezel).call(this, props, context));
    _this.timer = null;
    props.manager.subscribeToOperationStateChange(_this.handleStateChange.bind((0, _assertThisInitialized2["default"])(_this)));
    _this.state = {
      hidden: true,
      operation: {}
    };
    return _this;
  }

  (0, _createClass2["default"])(Bezel, [{
    key: "handleStateChange",
    value: function handleStateChange(state, prevState) {
      var _this2 = this;

      if (state.count !== prevState.count && state.operation.source === 'shortcut') {
        if (this.timer) {
          // previous animation is not finished
          clearTimeout(this.timer); // cancel it

          this.timer = null;
        } // show it
        // update operation


        this.setState({
          hidden: false,
          count: state.count,
          operation: state.operation
        }); // hide it after 0.5s

        this.timer = setTimeout(function () {
          _this2.setState({
            hidden: true
          });

          _this2.timer = null;
        }, 500);
      }
    }
  }, {
    key: "render",
    value: function render() {
      // only displays for shortcut so far
      if (this.state.operation.source !== 'shortcut') {
        return null;
      }

      var style = this.state.hidden ? {
        display: 'none'
      } : null;
      return _react["default"].createElement("div", {
        className: (0, _classnames["default"])({
          'video-react-bezel': true,
          'video-react-bezel-animation': this.state.count % 2 === 0,
          'video-react-bezel-animation-alt': this.state.count % 2 === 1
        }, this.props.className),
        style: style,
        role: "status",
        "aria-label": this.state.operation.action
      }, _react["default"].createElement("div", {
        className: (0, _classnames["default"])('video-react-bezel-icon', "video-react-bezel-icon-".concat(this.state.operation.action))
      }));
    }
  }]);
  return Bezel;
}(_react.Component);

exports["default"] = Bezel;
Bezel.propTypes = propTypes;
Bezel.displayName = 'Bezel';

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
      title = _ref.title;
  var site = _example_public_static_d_3978990474_json__WEBPACK_IMPORTED_MODULE_0__.data.site;
  var metaDescription = description || site.siteMetadata.description;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"], {
    htmlAttributes: {
      lang: lang
    },
    title: title,
    titleTemplate: "%s | " + site.siteMetadata.title,
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

/***/ "NdzT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("yIlq");

__webpack_require__("o7PZ");

__webpack_require__("d3/y");

var _interopRequireWildcard = __webpack_require__("vdEC");

var _interopRequireDefault = __webpack_require__("63Ad");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("SDJZ"));

var _createClass2 = _interopRequireDefault(__webpack_require__("NToG"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("K4DB"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("+IV6"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("T1e2"));

var _inherits2 = _interopRequireDefault(__webpack_require__("eef+"));

var _propTypes = _interopRequireDefault(__webpack_require__("W0B4"));

var _react = _interopRequireWildcard(__webpack_require__("mXGw"));

var _classnames = _interopRequireDefault(__webpack_require__("8Jek"));

var Dom = _interopRequireWildcard(__webpack_require__("+QRm"));

var propTypes = {
  className: _propTypes["default"].string,
  onMouseDown: _propTypes["default"].func,
  onMouseMove: _propTypes["default"].func,
  stepForward: _propTypes["default"].func,
  stepBack: _propTypes["default"].func,
  sliderActive: _propTypes["default"].func,
  sliderInactive: _propTypes["default"].func,
  onMouseUp: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  getPercent: _propTypes["default"].func,
  vertical: _propTypes["default"].bool,
  children: _propTypes["default"].node,
  label: _propTypes["default"].string,
  valuenow: _propTypes["default"].string,
  valuetext: _propTypes["default"].string
};

var Slider =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Slider, _Component);

  function Slider(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, Slider);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Slider).call(this, props, context));
    _this.handleMouseDown = _this.handleMouseDown.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleMouseMove = _this.handleMouseMove.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleMouseUp = _this.handleMouseUp.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleFocus = _this.handleFocus.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleBlur = _this.handleBlur.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleKeyPress = _this.handleKeyPress.bind((0, _assertThisInitialized2["default"])(_this));
    _this.stepForward = _this.stepForward.bind((0, _assertThisInitialized2["default"])(_this));
    _this.stepBack = _this.stepBack.bind((0, _assertThisInitialized2["default"])(_this));
    _this.calculateDistance = _this.calculateDistance.bind((0, _assertThisInitialized2["default"])(_this));
    _this.getProgress = _this.getProgress.bind((0, _assertThisInitialized2["default"])(_this));
    _this.renderChildren = _this.renderChildren.bind((0, _assertThisInitialized2["default"])(_this));
    _this.state = {
      active: false
    };
    return _this;
  }

  (0, _createClass2["default"])(Slider, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mousemove', this.handleMouseMove, true);
      document.removeEventListener('mouseup', this.handleMouseUp, true);
      document.removeEventListener('touchmove', this.handleMouseMove, true);
      document.removeEventListener('touchend', this.handleMouseUp, true);
      document.removeEventListener('keydown', this.handleKeyPress, true);
    }
  }, {
    key: "getProgress",
    value: function getProgress() {
      var getPercent = this.props.getPercent;

      if (!getPercent) {
        return 0;
      }

      var progress = getPercent(); // Protect against no duration and other division issues

      if (typeof progress !== 'number' || progress < 0 || progress === Infinity) {
        progress = 0;
      }

      return progress;
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown(event) {
      var onMouseDown = this.props.onMouseDown; // event.preventDefault();
      // event.stopPropagation();

      document.addEventListener('mousemove', this.handleMouseMove, true);
      document.addEventListener('mouseup', this.handleMouseUp, true);
      document.addEventListener('touchmove', this.handleMouseMove, true);
      document.addEventListener('touchend', this.handleMouseUp, true);
      this.setState({
        active: true
      });

      if (this.props.sliderActive) {
        this.props.sliderActive(event);
      }

      this.handleMouseMove(event);

      if (onMouseDown) {
        onMouseDown(event);
      }
    }
  }, {
    key: "handleMouseMove",
    value: function handleMouseMove(event) {
      var onMouseMove = this.props.onMouseMove;

      if (onMouseMove) {
        onMouseMove(event);
      }
    }
  }, {
    key: "handleMouseUp",
    value: function handleMouseUp(event) {
      // On iOS safari, a subsequent mouseup event will be fired after touchend.
      // Its weird event positions make the player seek a wrong time.
      // calling preventDefault (at touchend phase) will prevent the mouseup event
      event.preventDefault();
      var onMouseUp = this.props.onMouseUp;
      document.removeEventListener('mousemove', this.handleMouseMove, true);
      document.removeEventListener('mouseup', this.handleMouseUp, true);
      document.removeEventListener('touchmove', this.handleMouseMove, true);
      document.removeEventListener('touchend', this.handleMouseUp, true);
      this.setState({
        active: false
      });

      if (this.props.sliderInactive) {
        this.props.sliderInactive(event);
      }

      if (onMouseUp) {
        onMouseUp(event);
      }
    }
  }, {
    key: "handleFocus",
    value: function handleFocus(e) {
      document.addEventListener('keydown', this.handleKeyPress, true);

      if (this.props.onFocus) {
        this.props.onFocus(e);
      }
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(e) {
      document.removeEventListener('keydown', this.handleKeyPress, true);

      if (this.props.onBlur) {
        this.props.onBlur(e);
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick(event) {
      event.preventDefault(); // event.stopPropagation();

      if (this.props.onClick) {
        this.props.onClick(event);
      }
    }
  }, {
    key: "handleKeyPress",
    value: function handleKeyPress(event) {
      if (event.which === 37 || event.which === 40) {
        // Left and Down Arrows
        event.preventDefault();
        event.stopPropagation();
        this.stepBack();
      } else if (event.which === 38 || event.which === 39) {
        // Up and Right Arrows
        event.preventDefault();
        event.stopPropagation();
        this.stepForward();
      }
    }
  }, {
    key: "stepForward",
    value: function stepForward() {
      if (this.props.stepForward) {
        this.props.stepForward();
      }
    }
  }, {
    key: "stepBack",
    value: function stepBack() {
      if (this.props.stepBack) {
        this.props.stepBack();
      }
    }
  }, {
    key: "calculateDistance",
    value: function calculateDistance(event) {
      var node = this.slider;
      var position = Dom.getPointerPosition(node, event);

      if (this.props.vertical) {
        return position.y;
      }

      return position.x;
    }
  }, {
    key: "renderChildren",
    value: function renderChildren() {
      var progress = this.getProgress();
      var percentage = "".concat((progress * 100).toFixed(2), "%");
      return _react["default"].Children.map(this.props.children, function (child) {
        return _react["default"].cloneElement(child, {
          progress: progress,
          percentage: percentage
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          vertical = _this$props.vertical,
          label = _this$props.label,
          valuenow = _this$props.valuenow,
          valuetext = _this$props.valuetext;
      return _react["default"].createElement("div", {
        className: (0, _classnames["default"])(this.props.className, {
          'video-react-slider-vertical': vertical,
          'video-react-slider-horizontal': !vertical,
          'video-react-sliding': this.state.active
        }, 'video-react-slider'),
        ref: function ref(c) {
          _this2.slider = c;
        },
        tabIndex: "0",
        role: "slider",
        onMouseDown: this.handleMouseDown,
        onTouchStart: this.handleMouseDown,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onClick: this.handleClick,
        "aria-label": label || '',
        "aria-valuenow": valuenow || '',
        "aria-valuetext": valuetext || '',
        "aria-valuemin": 0,
        "aria-valuemax": 100
      }, this.renderChildren());
    }
  }]);
  return Slider;
}(_react.Component);

exports["default"] = Slider;
Slider.propTypes = propTypes;
Slider.displayName = 'Slider';

/***/ }),

/***/ "NgIc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("d3/y");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var initialState = {
  animating: false,
  autoplaying: null,
  currentDirection: 0,
  currentLeft: null,
  currentSlide: 0,
  direction: 1,
  dragging: false,
  edgeDragged: false,
  initialized: false,
  lazyLoadedList: [],
  listHeight: null,
  listWidth: null,
  scrolling: false,
  slideCount: null,
  slideHeight: null,
  slideWidth: null,
  swipeLeft: null,
  swiped: false,
  // used by swipeEvent. differentites between touch and swipe.
  swiping: false,
  touchObject: {
    startX: 0,
    startY: 0,
    curX: 0,
    curY: 0
  },
  trackStyle: {},
  trackWidth: 0
};
var _default = initialState;
exports["default"] = _default;

/***/ }),

/***/ "Ono3":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("d3/y");

__webpack_require__("PAbq");

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "Q9AD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("d3/y");

var _interopRequireDefault = __webpack_require__("63Ad");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__("W0B4"));

var _react = _interopRequireDefault(__webpack_require__("mXGw"));

var _classnames = _interopRequireDefault(__webpack_require__("8Jek"));

var propTypes = {
  poster: _propTypes["default"].string,
  player: _propTypes["default"].object,
  actions: _propTypes["default"].object,
  className: _propTypes["default"].string
};

function PosterImage(_ref) {
  var poster = _ref.poster,
      player = _ref.player,
      actions = _ref.actions,
      className = _ref.className;

  if (!poster || player.hasStarted) {
    return null;
  }

  return _react["default"].createElement("div", {
    className: (0, _classnames["default"])('video-react-poster', className),
    style: {
      backgroundImage: "url(\"".concat(poster, "\")")
    },
    onClick: function onClick() {
      if (player.paused) {
        actions.play();
      }
    }
  });
}

PosterImage.propTypes = propTypes;
PosterImage.displayName = 'PosterImage';
var _default = PosterImage;
exports["default"] = _default;

/***/ }),

/***/ "Qatm":
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "Quk2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("o7PZ");

__webpack_require__("d3/y");

var _interopRequireWildcard = __webpack_require__("vdEC");

var _interopRequireDefault = __webpack_require__("63Ad");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("8VmE"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("SDJZ"));

var _createClass2 = _interopRequireDefault(__webpack_require__("NToG"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("K4DB"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("+IV6"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("T1e2"));

var _inherits2 = _interopRequireDefault(__webpack_require__("eef+"));

var _propTypes = _interopRequireDefault(__webpack_require__("W0B4"));

var _react = _interopRequireWildcard(__webpack_require__("mXGw"));

var _classnames = _interopRequireDefault(__webpack_require__("8Jek"));

var _Slider = _interopRequireDefault(__webpack_require__("NdzT"));

var _VolumeLevel = _interopRequireDefault(__webpack_require__("1Tm+"));

var propTypes = {
  actions: _propTypes["default"].object,
  player: _propTypes["default"].object,
  className: _propTypes["default"].string,
  onFocus: _propTypes["default"].func,
  onBlur: _propTypes["default"].func
};

var VolumeBar =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(VolumeBar, _Component);

  function VolumeBar(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, VolumeBar);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(VolumeBar).call(this, props, context));
    _this.state = {
      percentage: '0%'
    };
    _this.handleMouseMove = _this.handleMouseMove.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handlePercentageChange = _this.handlePercentageChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.checkMuted = _this.checkMuted.bind((0, _assertThisInitialized2["default"])(_this));
    _this.getPercent = _this.getPercent.bind((0, _assertThisInitialized2["default"])(_this));
    _this.stepForward = _this.stepForward.bind((0, _assertThisInitialized2["default"])(_this));
    _this.stepBack = _this.stepBack.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleFocus = _this.handleFocus.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleBlur = _this.handleBlur.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(VolumeBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "getPercent",
    value: function getPercent() {
      var player = this.props.player;

      if (player.muted) {
        return 0;
      }

      return player.volume;
    }
  }, {
    key: "checkMuted",
    value: function checkMuted() {
      var _this$props = this.props,
          player = _this$props.player,
          actions = _this$props.actions;

      if (player.muted) {
        actions.mute(false);
      }
    }
  }, {
    key: "handleMouseMove",
    value: function handleMouseMove(event) {
      var actions = this.props.actions;
      this.checkMuted();
      var distance = this.slider.calculateDistance(event);
      actions.changeVolume(distance);
    }
  }, {
    key: "stepForward",
    value: function stepForward() {
      var _this$props2 = this.props,
          player = _this$props2.player,
          actions = _this$props2.actions;
      this.checkMuted();
      actions.changeVolume(player.volume + 0.1);
    }
  }, {
    key: "stepBack",
    value: function stepBack() {
      var _this$props3 = this.props,
          player = _this$props3.player,
          actions = _this$props3.actions;
      this.checkMuted();
      actions.changeVolume(player.volume - 0.1);
    }
  }, {
    key: "handleFocus",
    value: function handleFocus(e) {
      if (this.props.onFocus) {
        this.props.onFocus(e);
      }
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(e) {
      if (this.props.onBlur) {
        this.props.onBlur(e);
      }
    }
  }, {
    key: "handlePercentageChange",
    value: function handlePercentageChange(percentage) {
      if (percentage !== this.state.percentage) {
        this.setState({
          percentage: percentage
        });
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick(event) {
      event.stopPropagation();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          player = _this$props4.player,
          className = _this$props4.className;
      var volume = (player.volume * 100).toFixed(2);
      return _react["default"].createElement(_Slider["default"], (0, _extends2["default"])({
        ref: function ref(c) {
          _this2.slider = c;
        },
        label: "volume level",
        valuenow: volume,
        valuetext: "".concat(volume, "%"),
        onMouseMove: this.handleMouseMove,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onClick: this.handleClick,
        sliderActive: this.handleFocus,
        sliderInactive: this.handleBlur,
        getPercent: this.getPercent,
        onPercentageChange: this.handlePercentageChange,
        stepForward: this.stepForward,
        stepBack: this.stepBack
      }, this.props, {
        className: (0, _classnames["default"])(className, 'video-react-volume-bar video-react-slider-bar')
      }), _react["default"].createElement(_VolumeLevel["default"], this.props));
    }
  }]);
  return VolumeBar;
}(_react.Component);

VolumeBar.propTypes = propTypes;
VolumeBar.displayName = 'VolumeBar';
var _default = VolumeBar;
exports["default"] = _default;

/***/ }),

/***/ "Rblx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("XNbM");
/* global window */

var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(root);
/* harmony default export */ __webpack_exports__["a"] = (result);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("pCvA"), __webpack_require__("Ono3")(module)))

/***/ }),

/***/ "ReZ7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("d3/y");

var _interopRequireDefault = __webpack_require__("63Ad");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = player;

var _objectSpread2 = _interopRequireDefault(__webpack_require__("gki9"));

var _video = __webpack_require__("DQXp");

var _player = __webpack_require__("F4hD");

var initialState = {
  currentSrc: null,
  duration: 0,
  currentTime: 0,
  seekingTime: 0,
  buffered: null,
  waiting: false,
  seeking: false,
  paused: true,
  autoPaused: false,
  ended: false,
  playbackRate: 1,
  muted: false,
  volume: 1,
  readyState: 0,
  networkState: 0,
  videoWidth: 0,
  videoHeight: 0,
  hasStarted: false,
  userActivity: true,
  isActive: false,
  isFullscreen: false,
  activeTextTrack: null
};

function player() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _player.USER_ACTIVATE:
      return (0, _objectSpread2["default"])({}, state, {
        userActivity: action.activity
      });

    case _player.PLAYER_ACTIVATE:
      return (0, _objectSpread2["default"])({}, state, {
        isActive: action.activity
      });

    case _player.FULLSCREEN_CHANGE:
      return (0, _objectSpread2["default"])({}, state, {
        isFullscreen: !!action.isFullscreen
      });

    case _video.SEEKING_TIME:
      return (0, _objectSpread2["default"])({}, state, {
        seekingTime: action.time
      });

    case _video.END_SEEKING:
      return (0, _objectSpread2["default"])({}, state, {
        seekingTime: 0
      });

    case _video.LOAD_START:
      return (0, _objectSpread2["default"])({}, state, action.videoProps, {
        hasStarted: false,
        ended: false
      });

    case _video.CAN_PLAY:
      return (0, _objectSpread2["default"])({}, state, action.videoProps, {
        waiting: false
      });

    case _video.WAITING:
      return (0, _objectSpread2["default"])({}, state, action.videoProps, {
        waiting: true
      });

    case _video.CAN_PLAY_THROUGH:
    case _video.PLAYING:
      return (0, _objectSpread2["default"])({}, state, action.videoProps, {
        waiting: false
      });

    case _video.PLAY:
      return (0, _objectSpread2["default"])({}, state, action.videoProps, {
        ended: false,
        paused: false,
        autoPaused: false,
        waiting: false,
        hasStarted: true
      });

    case _video.PAUSE:
      return (0, _objectSpread2["default"])({}, state, action.videoProps, {
        paused: true
      });

    case _video.END:
      return (0, _objectSpread2["default"])({}, state, action.videoProps, {
        ended: true
      });

    case _video.SEEKING:
      return (0, _objectSpread2["default"])({}, state, action.videoProps, {
        seeking: true
      });

    case _video.SEEKED:
      return (0, _objectSpread2["default"])({}, state, action.videoProps, {
        seeking: false
      });

    case _video.ERROR:
      return (0, _objectSpread2["default"])({}, state, action.videoProps, {
        error: 'UNKNOWN ERROR',
        ended: true
      });

    case _video.DURATION_CHANGE:
    case _video.TIME_UPDATE:
    case _video.VOLUME_CHANGE:
    case _video.PROGRESS_CHANGE:
    case _video.RATE_CHANGE:
    case _video.SUSPEND:
    case _video.ABORT:
    case _video.EMPTIED:
    case _video.STALLED:
    case _video.LOADED_META_DATA:
    case _video.LOADED_DATA:
    case _video.RESIZE:
      return (0, _objectSpread2["default"])({}, state, action.videoProps);

    case _video.ACTIVATE_TEXT_TRACK:
      return (0, _objectSpread2["default"])({}, state, {
        activeTextTrack: action.textTrack
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "RoC8":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("d3/y");

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "THQi":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


__webpack_require__("W1QL");

__webpack_require__("K/PF");

__webpack_require__("75LO");

__webpack_require__("yIlq");

__webpack_require__("4aJ6");

__webpack_require__("M/4x");

__webpack_require__("t91x");

__webpack_require__("+3V6");

var stringifyPrimitive = function stringifyPrimitive(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function (obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';

  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function (k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;

      if (isArray(obj[k])) {
        return map(obj[k], function (v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);
  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map(xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];

  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }

  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }

  return res;
};

/***/ }),

/***/ "UKnr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__("MNOf");
exports.encode = exports.stringify = __webpack_require__("THQi");

/***/ }),

/***/ "WI9V":
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "XNbM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
  var result;
  var Symbol = root.Symbol;

  if (typeof Symbol === 'function') {
    if (Symbol.observable) {
      result = Symbol.observable;
    } else {
      result = Symbol('observable');
      Symbol.observable = result;
    }
  } else {
    result = '@@observable';
  }

  return result;
}
;

/***/ }),

/***/ "XZtX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("o7PZ");

__webpack_require__("d3/y");

var _interopRequireWildcard = __webpack_require__("vdEC");

var _interopRequireDefault = __webpack_require__("63Ad");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("SDJZ"));

var _createClass2 = _interopRequireDefault(__webpack_require__("NToG"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("K4DB"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("+IV6"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("T1e2"));

var _inherits2 = _interopRequireDefault(__webpack_require__("eef+"));

var _propTypes = _interopRequireDefault(__webpack_require__("W0B4"));

var _react = _interopRequireWildcard(__webpack_require__("mXGw"));

var _classnames = _interopRequireDefault(__webpack_require__("8Jek"));

var propTypes = {
  actions: _propTypes["default"].object,
  player: _propTypes["default"].object,
  className: _propTypes["default"].string
};

var PlayToggle =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(PlayToggle, _Component);

  function PlayToggle(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, PlayToggle);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(PlayToggle).call(this, props, context));
    _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(PlayToggle, [{
    key: "handleClick",
    value: function handleClick() {
      var _this$props = this.props,
          actions = _this$props.actions,
          player = _this$props.player;

      if (player.paused) {
        actions.play();
      } else {
        actions.pause();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          player = _this$props2.player,
          className = _this$props2.className;
      var controlText = player.paused ? 'Play' : 'Pause';
      return _react["default"].createElement("button", {
        ref: function ref(c) {
          _this2.button = c;
        },
        className: (0, _classnames["default"])(className, {
          'video-react-play-control': true,
          'video-react-control': true,
          'video-react-button': true,
          'video-react-paused': player.paused,
          'video-react-playing': !player.paused
        }),
        type: "button",
        tabIndex: "0",
        onClick: this.handleClick
      }, _react["default"].createElement("span", {
        className: "video-react-control-text"
      }, controlText));
    }
  }]);
  return PlayToggle;
}(_react.Component);

exports["default"] = PlayToggle;
PlayToggle.propTypes = propTypes;
PlayToggle.displayName = 'PlayToggle';

/***/ }),

/***/ "XzE/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("d3/y");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ajaxGet;

function ajaxGet(url, callback) {
  if (typeof XDomainRequest !== 'undefined') {
    callback(null);
    return null;
  }

  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      callback(JSON.parse(xhr.responseText));
    }
  };

  xhr.open('GET', url, true);
  xhr.send();
  return xhr;
}

module.exports = exports['default'];

/***/ }),

/***/ "YSbK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * parse-github-url <https://github.com/jonschlinkert/parse-github-url>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */


__webpack_require__("Z8gF");

__webpack_require__("9ovy");

__webpack_require__("GkPX");

__webpack_require__("asZ9");

__webpack_require__("9p7t");

__webpack_require__("V7cS");

var url = __webpack_require__("so/P");

var cache = {};

module.exports = function parseGithubUrl(str) {
  return cache[str] || (cache[str] = parse(str));
};

function parse(str) {
  if (typeof str !== 'string' || !str.length) {
    return null;
  }

  if (str.indexOf('git@gist') !== -1 || str.indexOf('//gist') !== -1) {
    return null;
  } // parse the URL


  var obj = url.parse(str);

  if (typeof obj.path !== 'string' || !obj.path.length || typeof obj.pathname !== 'string' || !obj.pathname.length) {
    return null;
  }

  if (!obj.host && /^git@/.test(str) === true) {
    // return the correct host for git@ URLs
    obj.host = url.parse('http://' + str).host;
  }

  obj.path = trimSlash(obj.path);
  obj.pathname = trimSlash(obj.pathname);
  obj.filepath = null;

  if (obj.path.indexOf('repos') === 0) {
    obj.path = obj.path.slice(6);
  }

  var seg = obj.path.split('/').filter(Boolean);
  var hasBlob = seg[2] === 'blob';

  if (hasBlob && !isChecksum(seg[3])) {
    obj.branch = seg[3];

    if (seg.length > 4) {
      obj.filepath = seg.slice(4).join('/');
    }
  }

  var blob = str.indexOf('blob');

  if (blob !== -1) {
    obj.blob = str.slice(blob + 5);
  }

  var tree = str.indexOf('tree');

  if (tree !== -1) {
    var idx = tree + 5;
    var branch = str.slice(idx);
    var slash = branch.indexOf('/');

    if (slash !== -1) {
      branch = branch.slice(0, slash);
    }

    obj.branch = branch;
  }

  obj.owner = owner(seg[0]);
  obj.name = name(seg[1]);

  if (seg.length > 1 && obj.owner && obj.name) {
    obj.repo = obj.owner + '/' + obj.name;
  } else {
    var href = obj.href.split(':');

    if (href.length === 2 && obj.href.indexOf('//') === -1) {
      obj.repo = obj.repo || href[href.length - 1];
      var repoSegments = obj.repo.split('/');
      obj.owner = repoSegments[0];
      obj.name = repoSegments[1];
    } else {
      var match = obj.href.match(/\/([^\/]*)$/);
      obj.owner = match ? match[1] : null;
      obj.repo = null;
    }

    if (obj.repo && (!obj.owner || !obj.name)) {
      var segs = obj.repo.split('/');

      if (segs.length === 2) {
        obj.owner = segs[0];
        obj.name = segs[1];
      }
    }
  }

  if (!obj.branch) {
    obj.branch = seg[2] || getBranch(obj.path, obj);

    if (seg.length > 3) {
      obj.filepath = seg.slice(3).join('/');
    }
  }

  obj.host = obj.host || 'github.com';
  obj.owner = obj.owner || null;
  obj.name = obj.name || null;
  obj.repository = obj.repo;
  return obj;
}

function isChecksum(str) {
  return /^[a-f0-9]{40}$/i.test(str);
}

function getBranch(str, obj) {
  var segs = str.split('#');
  var branch;

  if (segs.length > 1) {
    branch = segs[segs.length - 1];
  }

  if (!branch && obj.hash && obj.hash.charAt(0) === '#') {
    branch = obj.hash.slice(1);
  }

  return branch || 'master';
}

function trimSlash(path) {
  return path.charAt(0) === '/' ? path.slice(1) : path;
}

function name(str) {
  return str ? str.replace(/^\W+|\.git$/g, '') : null;
}

function owner(str) {
  if (!str) return null;
  var idx = str.indexOf(':');

  if (idx > -1) {
    return str.slice(idx + 1);
  }

  return str;
}

/***/ }),

/***/ "Zw4j":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("d3/y");

var _interopRequireWildcard = __webpack_require__("vdEC");

var _interopRequireDefault = __webpack_require__("63Ad");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("SDJZ"));

var _createClass2 = _interopRequireDefault(__webpack_require__("NToG"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("K4DB"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("+IV6"));

var _inherits2 = _interopRequireDefault(__webpack_require__("eef+"));

var _react = _interopRequireWildcard(__webpack_require__("mXGw"));

var _PlaybackRateMenuButton = _interopRequireDefault(__webpack_require__("KF4W"));

var _utils = __webpack_require__("xcnx");

var PlaybackRate =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(PlaybackRate, _Component);

  function PlaybackRate(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, PlaybackRate);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(PlaybackRate).call(this, props, context));
    (0, _utils.deprecatedWarning)('PlaybackRate', 'PlaybackRateMenuButton');
    return _this;
  }

  (0, _createClass2["default"])(PlaybackRate, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_PlaybackRateMenuButton["default"], this.props);
    }
  }]);
  return PlaybackRate;
}(_react.Component);

exports["default"] = PlaybackRate;
PlaybackRate.displayName = 'PlaybackRate';

/***/ }),

/***/ "b1BQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("W1QL");

__webpack_require__("K/PF");

__webpack_require__("t91x");

__webpack_require__("75LO");

__webpack_require__("9p7t");

__webpack_require__("d3/y");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.classNames = classNames;

function classNames(classSet) {
  return Object.keys(classSet).filter(function (key) {
    return classSet[key];
  }).join(' ');
}

/***/ }),

/***/ "bF0Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("d3/y");

var _interopRequireDefault = __webpack_require__("63Ad");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__("W0B4"));

var _react = _interopRequireDefault(__webpack_require__("mXGw"));

var _classnames = _interopRequireDefault(__webpack_require__("8Jek"));

var _utils = __webpack_require__("xcnx");

var propTypes = {
  player: _propTypes["default"].object,
  className: _propTypes["default"].string
};

function RemainingTimeDisplay(_ref) {
  var _ref$player = _ref.player,
      currentTime = _ref$player.currentTime,
      duration = _ref$player.duration,
      className = _ref.className;
  var remainingTime = duration - currentTime;
  var formattedTime = (0, _utils.formatTime)(remainingTime);
  return _react["default"].createElement("div", {
    className: (0, _classnames["default"])('video-react-remaining-time video-react-time-control video-react-control', className)
  }, _react["default"].createElement("div", {
    className: "video-react-remaining-time-display",
    "aria-live": "off"
  }, _react["default"].createElement("span", {
    className: "video-react-control-text"
  }, "Remaining Time "), "-".concat(formattedTime)));
}

RemainingTimeDisplay.propTypes = propTypes;
RemainingTimeDisplay.displayName = 'RemainingTimeDisplay';
var _default = RemainingTimeDisplay;
exports["default"] = _default;

/***/ }),

/***/ "bI2v":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("d3/y");

var _interopRequireDefault = __webpack_require__("63Ad");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
exports.operationReducer = exports.playerReducer = void 0;

var _player = _interopRequireDefault(__webpack_require__("ReZ7"));

var _operation = _interopRequireDefault(__webpack_require__("2UPm"));

function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return {
    player: (0, _player["default"])(state.player, action),
    operation: (0, _operation["default"])(state.operation, action)
  };
}

var playerReducer = _player["default"];
exports.playerReducer = playerReducer;
var operationReducer = _operation["default"];
exports.operationReducer = operationReducer;

/***/ }),

/***/ "cnbf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE__ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return bindActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GkPX");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("yIlq");
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_reduce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("3y5y");
/* harmony import */ var core_js_modules_es6_array_reduce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_reduce__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_define_properties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("6/FK");
/* harmony import */ var core_js_modules_es6_object_define_properties__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_define_properties__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("2Tod");
/* harmony import */ var core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ABKx");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("d3/y");
/* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("7lGJ");
/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("9p7t");
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("9ovy");
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("W1QL");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("K/PF");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("75LO");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("V7cS");
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("4aJ6");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("M/4x");
/* harmony import */ var core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("t91x");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("asZ9");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("Rblx");



















/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */

var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */

function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}
/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */


function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"]] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"]] = observable, _ref2;
}
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */


function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {}

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (false) {}

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) { var warningMessage; }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
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
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }

  if (enumerableOnly) keys = keys.filter(function (sym) {
    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
  });
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
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */


function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}
/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */


function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2({}, store, {
        dispatch: _dispatch
      });
    };
  };
}
/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */


function isCrushed() {}

if (false) {}



/***/ }),

/***/ "dIBq":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("d3/y");

var _interopRequireDefault = __webpack_require__("63Ad");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ForwardReplayControl = _interopRequireDefault(__webpack_require__("2lL7")); // Pass mode into parent function


var ReplayControl = (0, _ForwardReplayControl["default"])('replay');
ReplayControl.displayName = 'ReplayControl';
var _default = ReplayControl;
exports["default"] = _default;

/***/ }),

/***/ "drO/":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("7lGJ");

__webpack_require__("W1QL");

__webpack_require__("K/PF");

__webpack_require__("t91x");

__webpack_require__("75LO");

var camel2hyphen = __webpack_require__("jFWS");

var isDimension = function isDimension(feature) {
  var re = /[height|width]$/;
  return re.test(feature);
};

var obj2mq = function obj2mq(obj) {
  var mq = '';
  var features = Object.keys(obj);
  features.forEach(function (feature, index) {
    var value = obj[feature];
    feature = camel2hyphen(feature); // Add px to dimension features

    if (isDimension(feature) && typeof value === 'number') {
      value = value + 'px';
    }

    if (value === true) {
      mq += feature;
    } else if (value === false) {
      mq += 'not ' + feature;
    } else {
      mq += '(' + feature + ': ' + value + ')';
    }

    if (index < features.length - 1) {
      mq += ' and ';
    }
  });
  return mq;
};

var json2mq = function json2mq(query) {
  var mq = '';

  if (typeof query === 'string') {
    return query;
  } // Handling array of media queries


  if (query instanceof Array) {
    query.forEach(function (q, index) {
      mq += obj2mq(q);

      if (index < query.length - 1) {
        mq += ', ';
      }
    });
    return mq;
  } // Handling single media query


  return obj2mq(query);
};

module.exports = json2mq;

/***/ }),

/***/ "e6E8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("d3/y");

var _interopRequireDefault = __webpack_require__("63Ad");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TimeDivider;

var _propTypes = _interopRequireDefault(__webpack_require__("W0B4"));

var _react = _interopRequireDefault(__webpack_require__("mXGw"));

var _classnames = _interopRequireDefault(__webpack_require__("8Jek"));

var propTypes = {
  separator: _propTypes["default"].string,
  className: _propTypes["default"].string
};

function TimeDivider(_ref) {
  var separator = _ref.separator,
      className = _ref.className;
  var separatorText = separator || '/';
  return _react["default"].createElement("div", {
    className: (0, _classnames["default"])('video-react-time-control video-react-time-divider', className),
    dir: "ltr"
  }, _react["default"].createElement("div", null, _react["default"].createElement("span", null, separatorText)));
}

TimeDivider.propTypes = propTypes;
TimeDivider.displayName = 'TimeDivider';

/***/ }),

/***/ "eef+":
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__("WI9V");

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
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "fFdl":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("o7PZ");

__webpack_require__("W1QL");

__webpack_require__("K/PF");

__webpack_require__("t91x");

__webpack_require__("75LO");

__webpack_require__("9p7t");

__webpack_require__("3y5y");

__webpack_require__("d3/y");

var _interopRequireWildcard = __webpack_require__("vdEC");

var _interopRequireDefault = __webpack_require__("63Ad");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__("gki9"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("SDJZ"));

var _createClass2 = _interopRequireDefault(__webpack_require__("NToG"));

var _redux = __webpack_require__("cnbf");

var _reducers = _interopRequireDefault(__webpack_require__("bI2v"));

var playerActions = _interopRequireWildcard(__webpack_require__("F4hD"));

var videoActions = _interopRequireWildcard(__webpack_require__("DQXp"));

var Manager =
/*#__PURE__*/
function () {
  function Manager(store) {
    (0, _classCallCheck2["default"])(this, Manager);
    this.store = store || (0, _redux.createStore)(_reducers["default"]);
    this.video = null;
    this.rootElement = null;
  }

  (0, _createClass2["default"])(Manager, [{
    key: "getActions",
    value: function getActions() {
      var manager = this;
      var dispatch = this.store.dispatch;
      var actions = (0, _objectSpread2["default"])({}, playerActions, videoActions);

      function bindActionCreator(actionCreator) {
        return function bindAction() {
          // eslint-disable-next-line prefer-rest-params
          var action = actionCreator.apply(manager, arguments);

          if (typeof action !== 'undefined') {
            dispatch(action);
          }
        };
      }

      return Object.keys(actions).filter(function (key) {
        return typeof actions[key] === 'function';
      }).reduce(function (boundActions, key) {
        boundActions[key] = bindActionCreator(actions[key]);
        return boundActions;
      }, {});
    }
  }, {
    key: "getState",
    value: function getState() {
      return this.store.getState();
    } // subscribe state change

  }, {
    key: "subscribeToStateChange",
    value: function subscribeToStateChange(listener, getState) {
      if (!getState) {
        getState = this.getState.bind(this);
      }

      var prevState = getState();

      var handleChange = function handleChange() {
        var state = getState();

        if (state === prevState) {
          return;
        }

        var prevStateCopy = prevState;
        prevState = state;
        listener(state, prevStateCopy);
      };

      return this.store.subscribe(handleChange);
    } // subscribe to operation state change

  }, {
    key: "subscribeToOperationStateChange",
    value: function subscribeToOperationStateChange(listener) {
      var _this = this;

      return this.subscribeToStateChange(listener, function () {
        return _this.getState().operation;
      });
    } // subscribe to player state change

  }, {
    key: "subscribeToPlayerStateChange",
    value: function subscribeToPlayerStateChange(listener) {
      var _this2 = this;

      return this.subscribeToStateChange(listener, function () {
        return _this2.getState().player;
      });
    }
  }]);
  return Manager;
}();

exports["default"] = Manager;

/***/ }),

/***/ "gki9":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("OvAC");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "hdnC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContainerRender; });
/* harmony import */ var core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("PAbq");
/* harmony import */ var core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("1qKx");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("d3/y");
/* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("+jjx");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ABKx");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("mXGw");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("xARA");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("W0B4");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);






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





var ContainerRender =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ContainerRender, _React$Component);

  function ContainerRender() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ContainerRender);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ContainerRender)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.removeContainer = function () {
      if (_this.container) {
        react_dom__WEBPACK_IMPORTED_MODULE_6___default.a.unmountComponentAtNode(_this.container);

        _this.container.parentNode.removeChild(_this.container);

        _this.container = null;
      }
    };

    _this.renderComponent = function (props, ready) {
      var _this$props = _this.props,
          visible = _this$props.visible,
          getComponent = _this$props.getComponent,
          forceRender = _this$props.forceRender,
          getContainer = _this$props.getContainer,
          parent = _this$props.parent;

      if (visible || parent._component || forceRender) {
        if (!_this.container) {
          _this.container = getContainer();
        }

        react_dom__WEBPACK_IMPORTED_MODULE_6___default.a.unstable_renderSubtreeIntoContainer(parent, getComponent(props), _this.container, function callback() {
          if (ready) {
            ready.call(this);
          }
        });
      }
    };

    return _this;
  }

  _createClass(ContainerRender, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.autoMount) {
        this.renderComponent();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.autoMount) {
        this.renderComponent();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.autoDestroy) {
        this.removeContainer();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children({
        renderComponent: this.renderComponent,
        removeContainer: this.removeContainer
      });
    }
  }]);

  return ContainerRender;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

ContainerRender.propTypes = {
  autoMount: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  autoDestroy: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  visible: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  forceRender: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  parent: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any,
  getComponent: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired,
  getContainer: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired
};
ContainerRender.defaultProps = {
  autoMount: true,
  autoDestroy: true,
  forceRender: false
};


/***/ }),

/***/ "hq6L":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Z8gF");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_string_trim__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("m8zh");
/* harmony import */ var core_js_modules_es6_string_trim__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_trim__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("J8hF");
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _getScrollBarSize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Exke");




/* harmony default export */ __webpack_exports__["a"] = (function (close) {
  var bodyIsOverflowing = document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;

  if (!bodyIsOverflowing) {
    return;
  } // https://github.com/ant-design/ant-design/issues/19729


  var scrollingEffectClassName = 'switch-scrolling-effect';
  var scrollingEffectClassNameReg = new RegExp("".concat(scrollingEffectClassName), 'g');
  var bodyClassName = document.body.className;

  if (close) {
    document.body.style.position = '';
    document.body.style.width = '';

    if (scrollingEffectClassNameReg.test(bodyClassName)) {
      document.body.className = bodyClassName.replace(scrollingEffectClassNameReg, '').trim();
    }

    return;
  }

  var scrollBarSize = Object(_getScrollBarSize__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])();

  if (scrollBarSize) {
    document.body.style.position = 'relative';
    document.body.style.width = "calc(100% - ".concat(scrollBarSize, "px)");

    if (!scrollingEffectClassNameReg.test(bodyClassName)) {
      document.body.className = "".concat(bodyClassName, " ").concat(scrollingEffectClassName);
    }
  }
});

/***/ }),

/***/ "iNmH":
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "iWpb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("3y5y");

__webpack_require__("lQyR");

__webpack_require__("YhIr");

__webpack_require__("+3V6");

__webpack_require__("9ovy");

__webpack_require__("e2Kn");

__webpack_require__("V7cS");

__webpack_require__("6/FK");

__webpack_require__("2Tod");

__webpack_require__("7lGJ");

__webpack_require__("9p7t");

__webpack_require__("ABKx");

__webpack_require__("W1QL");

__webpack_require__("K/PF");

__webpack_require__("t91x");

__webpack_require__("75LO");

__webpack_require__("d3/y");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canUseDOM = exports.slidesOnLeft = exports.slidesOnRight = exports.siblingDirection = exports.getTotalSlides = exports.getPostClones = exports.getPreClones = exports.getTrackLeft = exports.getTrackAnimateCSS = exports.getTrackCSS = exports.checkSpecKeys = exports.getSlideCount = exports.checkNavigable = exports.getNavigableIndexes = exports.swipeEnd = exports.swipeMove = exports.swipeStart = exports.keyHandler = exports.changeSlide = exports.slideHandler = exports.initializedState = exports.extractObject = exports.canGoNext = exports.getSwipeDirection = exports.getHeight = exports.getWidth = exports.lazySlidesOnRight = exports.lazySlidesOnLeft = exports.lazyEndIndex = exports.lazyStartIndex = exports.getRequiredLazySlides = exports.getOnDemandLazySlides = void 0;

var _react = _interopRequireDefault(__webpack_require__("mXGw"));

var _reactDom = _interopRequireDefault(__webpack_require__("xARA"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
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

var getOnDemandLazySlides = function getOnDemandLazySlides(spec) {
  var onDemandSlides = [];
  var startIndex = lazyStartIndex(spec);
  var endIndex = lazyEndIndex(spec);

  for (var slideIndex = startIndex; slideIndex < endIndex; slideIndex++) {
    if (spec.lazyLoadedList.indexOf(slideIndex) < 0) {
      onDemandSlides.push(slideIndex);
    }
  }

  return onDemandSlides;
}; // return list of slides that need to be present


exports.getOnDemandLazySlides = getOnDemandLazySlides;

var getRequiredLazySlides = function getRequiredLazySlides(spec) {
  var requiredSlides = [];
  var startIndex = lazyStartIndex(spec);
  var endIndex = lazyEndIndex(spec);

  for (var slideIndex = startIndex; slideIndex < endIndex; slideIndex++) {
    requiredSlides.push(slideIndex);
  }

  return requiredSlides;
}; // startIndex that needs to be present


exports.getRequiredLazySlides = getRequiredLazySlides;

var lazyStartIndex = function lazyStartIndex(spec) {
  return spec.currentSlide - lazySlidesOnLeft(spec);
};

exports.lazyStartIndex = lazyStartIndex;

var lazyEndIndex = function lazyEndIndex(spec) {
  return spec.currentSlide + lazySlidesOnRight(spec);
};

exports.lazyEndIndex = lazyEndIndex;

var lazySlidesOnLeft = function lazySlidesOnLeft(spec) {
  return spec.centerMode ? Math.floor(spec.slidesToShow / 2) + (parseInt(spec.centerPadding) > 0 ? 1 : 0) : 0;
};

exports.lazySlidesOnLeft = lazySlidesOnLeft;

var lazySlidesOnRight = function lazySlidesOnRight(spec) {
  return spec.centerMode ? Math.floor((spec.slidesToShow - 1) / 2) + 1 + (parseInt(spec.centerPadding) > 0 ? 1 : 0) : spec.slidesToShow;
}; // get width of an element


exports.lazySlidesOnRight = lazySlidesOnRight;

var getWidth = function getWidth(elem) {
  return elem && elem.offsetWidth || 0;
};

exports.getWidth = getWidth;

var getHeight = function getHeight(elem) {
  return elem && elem.offsetHeight || 0;
};

exports.getHeight = getHeight;

var getSwipeDirection = function getSwipeDirection(touchObject) {
  var verticalSwiping = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var xDist, yDist, r, swipeAngle;
  xDist = touchObject.startX - touchObject.curX;
  yDist = touchObject.startY - touchObject.curY;
  r = Math.atan2(yDist, xDist);
  swipeAngle = Math.round(r * 180 / Math.PI);

  if (swipeAngle < 0) {
    swipeAngle = 360 - Math.abs(swipeAngle);
  }

  if (swipeAngle <= 45 && swipeAngle >= 0 || swipeAngle <= 360 && swipeAngle >= 315) {
    return "left";
  }

  if (swipeAngle >= 135 && swipeAngle <= 225) {
    return "right";
  }

  if (verticalSwiping === true) {
    if (swipeAngle >= 35 && swipeAngle <= 135) {
      return "up";
    } else {
      return "down";
    }
  }

  return "vertical";
}; // whether or not we can go next


exports.getSwipeDirection = getSwipeDirection;

var canGoNext = function canGoNext(spec) {
  var canGo = true;

  if (!spec.infinite) {
    if (spec.centerMode && spec.currentSlide >= spec.slideCount - 1) {
      canGo = false;
    } else if (spec.slideCount <= spec.slidesToShow || spec.currentSlide >= spec.slideCount - spec.slidesToShow) {
      canGo = false;
    }
  }

  return canGo;
}; // given an object and a list of keys, return new object with given keys


exports.canGoNext = canGoNext;

var extractObject = function extractObject(spec, keys) {
  var newObject = {};
  keys.forEach(function (key) {
    return newObject[key] = spec[key];
  });
  return newObject;
}; // get initialized state


exports.extractObject = extractObject;

var initializedState = function initializedState(spec) {
  // spec also contains listRef, trackRef
  var slideCount = _react["default"].Children.count(spec.children);

  var listWidth = Math.ceil(getWidth(_reactDom["default"].findDOMNode(spec.listRef)));
  var trackWidth = Math.ceil(getWidth(_reactDom["default"].findDOMNode(spec.trackRef)));
  var slideWidth;

  if (!spec.vertical) {
    var centerPaddingAdj = spec.centerMode && parseInt(spec.centerPadding) * 2;

    if (typeof spec.centerPadding === "string" && spec.centerPadding.slice(-1) === "%") {
      centerPaddingAdj *= listWidth / 100;
    }

    slideWidth = Math.ceil((listWidth - centerPaddingAdj) / spec.slidesToShow);
  } else {
    slideWidth = listWidth;
  }

  var slideHeight = _reactDom["default"].findDOMNode(spec.listRef) && getHeight(_reactDom["default"].findDOMNode(spec.listRef).querySelector('[data-index="0"]'));
  var listHeight = slideHeight * spec.slidesToShow;
  var currentSlide = spec.currentSlide === undefined ? spec.initialSlide : spec.currentSlide;

  if (spec.rtl && spec.currentSlide === undefined) {
    currentSlide = slideCount - 1 - spec.initialSlide;
  }

  var lazyLoadedList = spec.lazyLoadedList || [];
  var slidesToLoad = getOnDemandLazySlides({
    currentSlide: currentSlide,
    lazyLoadedList: lazyLoadedList
  }, spec);
  lazyLoadedList.concat(slidesToLoad);
  var state = {
    slideCount: slideCount,
    slideWidth: slideWidth,
    listWidth: listWidth,
    trackWidth: trackWidth,
    currentSlide: currentSlide,
    slideHeight: slideHeight,
    listHeight: listHeight,
    lazyLoadedList: lazyLoadedList
  };

  if (spec.autoplaying === null && spec.autoplay) {
    state["autoplaying"] = "playing";
  }

  return state;
};

exports.initializedState = initializedState;

var slideHandler = function slideHandler(spec) {
  var waitForAnimate = spec.waitForAnimate,
      animating = spec.animating,
      fade = spec.fade,
      infinite = spec.infinite,
      index = spec.index,
      slideCount = spec.slideCount,
      lazyLoadedList = spec.lazyLoadedList,
      lazyLoad = spec.lazyLoad,
      currentSlide = spec.currentSlide,
      centerMode = spec.centerMode,
      slidesToScroll = spec.slidesToScroll,
      slidesToShow = spec.slidesToShow,
      useCSS = spec.useCSS;
  if (waitForAnimate && animating) return {};
  var animationSlide = index,
      finalSlide,
      animationLeft,
      finalLeft;
  var state = {},
      nextState = {};

  if (fade) {
    if (!infinite && (index < 0 || index >= slideCount)) return {};

    if (index < 0) {
      animationSlide = index + slideCount;
    } else if (index >= slideCount) {
      animationSlide = index - slideCount;
    }

    if (lazyLoad && lazyLoadedList.indexOf(animationSlide) < 0) {
      lazyLoadedList.push(animationSlide);
    }

    state = {
      animating: true,
      currentSlide: animationSlide,
      lazyLoadedList: lazyLoadedList
    };
    nextState = {
      animating: false
    };
  } else {
    finalSlide = animationSlide;

    if (animationSlide < 0) {
      finalSlide = animationSlide + slideCount;
      if (!infinite) finalSlide = 0;else if (slideCount % slidesToScroll !== 0) finalSlide = slideCount - slideCount % slidesToScroll;
    } else if (!canGoNext(spec) && animationSlide > currentSlide) {
      animationSlide = finalSlide = currentSlide;
    } else if (centerMode && animationSlide >= slideCount) {
      animationSlide = infinite ? slideCount : slideCount - 1;
      finalSlide = infinite ? 0 : slideCount - 1;
    } else if (animationSlide >= slideCount) {
      finalSlide = animationSlide - slideCount;
      if (!infinite) finalSlide = slideCount - slidesToShow;else if (slideCount % slidesToScroll !== 0) finalSlide = 0;
    }

    animationLeft = getTrackLeft(_objectSpread({}, spec, {
      slideIndex: animationSlide
    }));
    finalLeft = getTrackLeft(_objectSpread({}, spec, {
      slideIndex: finalSlide
    }));

    if (!infinite) {
      if (animationLeft === finalLeft) animationSlide = finalSlide;
      animationLeft = finalLeft;
    }

    lazyLoad && lazyLoadedList.concat(getOnDemandLazySlides(_objectSpread({}, spec, {
      currentSlide: animationSlide
    })));

    if (!useCSS) {
      state = {
        currentSlide: finalSlide,
        trackStyle: getTrackCSS(_objectSpread({}, spec, {
          left: finalLeft
        })),
        lazyLoadedList: lazyLoadedList
      };
    } else {
      state = {
        animating: true,
        currentSlide: finalSlide,
        trackStyle: getTrackAnimateCSS(_objectSpread({}, spec, {
          left: animationLeft
        })),
        lazyLoadedList: lazyLoadedList
      };
      nextState = {
        animating: false,
        currentSlide: finalSlide,
        trackStyle: getTrackCSS(_objectSpread({}, spec, {
          left: finalLeft
        })),
        swipeLeft: null
      };
    }
  }

  return {
    state: state,
    nextState: nextState
  };
};

exports.slideHandler = slideHandler;

var changeSlide = function changeSlide(spec, options) {
  var indexOffset, previousInt, slideOffset, unevenOffset, targetSlide;
  var slidesToScroll = spec.slidesToScroll,
      slidesToShow = spec.slidesToShow,
      slideCount = spec.slideCount,
      currentSlide = spec.currentSlide,
      lazyLoad = spec.lazyLoad,
      infinite = spec.infinite;
  unevenOffset = slideCount % slidesToScroll !== 0;
  indexOffset = unevenOffset ? 0 : (slideCount - currentSlide) % slidesToScroll;

  if (options.message === "previous") {
    slideOffset = indexOffset === 0 ? slidesToScroll : slidesToShow - indexOffset;
    targetSlide = currentSlide - slideOffset;

    if (lazyLoad && !infinite) {
      previousInt = currentSlide - slideOffset;
      targetSlide = previousInt === -1 ? slideCount - 1 : previousInt;
    }
  } else if (options.message === "next") {
    slideOffset = indexOffset === 0 ? slidesToScroll : indexOffset;
    targetSlide = currentSlide + slideOffset;

    if (lazyLoad && !infinite) {
      targetSlide = (currentSlide + slidesToScroll) % slideCount + indexOffset;
    }
  } else if (options.message === "dots") {
    // Click on dots
    targetSlide = options.index * options.slidesToScroll;

    if (targetSlide === options.currentSlide) {
      return null;
    }
  } else if (options.message === "children") {
    // Click on the slides
    targetSlide = options.index;

    if (targetSlide === options.currentSlide) {
      return null;
    }

    if (infinite) {
      var direction = siblingDirection(_objectSpread({}, spec, {
        targetSlide: targetSlide
      }));

      if (targetSlide > options.currentSlide && direction === "left") {
        targetSlide = targetSlide - slideCount;
      } else if (targetSlide < options.currentSlide && direction === "right") {
        targetSlide = targetSlide + slideCount;
      }
    }
  } else if (options.message === "index") {
    targetSlide = Number(options.index);

    if (targetSlide === options.currentSlide) {
      return null;
    }
  }

  return targetSlide;
};

exports.changeSlide = changeSlide;

var keyHandler = function keyHandler(e, accessibility, rtl) {
  if (e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !accessibility) return "";
  if (e.keyCode === 37) return rtl ? "next" : "previous";
  if (e.keyCode === 39) return rtl ? "previous" : "next";
  return "";
};

exports.keyHandler = keyHandler;

var swipeStart = function swipeStart(e, swipe, draggable) {
  e.target.tagName === "IMG" && e.preventDefault();
  if (!swipe || !draggable && e.type.indexOf("mouse") !== -1) return "";
  return {
    dragging: true,
    touchObject: {
      startX: e.touches ? e.touches[0].pageX : e.clientX,
      startY: e.touches ? e.touches[0].pageY : e.clientY,
      curX: e.touches ? e.touches[0].pageX : e.clientX,
      curY: e.touches ? e.touches[0].pageY : e.clientY
    }
  };
};

exports.swipeStart = swipeStart;

var swipeMove = function swipeMove(e, spec) {
  // spec also contains, trackRef and slideIndex
  var scrolling = spec.scrolling,
      animating = spec.animating,
      vertical = spec.vertical,
      swipeToSlide = spec.swipeToSlide,
      verticalSwiping = spec.verticalSwiping,
      rtl = spec.rtl,
      currentSlide = spec.currentSlide,
      edgeFriction = spec.edgeFriction,
      edgeDragged = spec.edgeDragged,
      onEdge = spec.onEdge,
      swiped = spec.swiped,
      swiping = spec.swiping,
      slideCount = spec.slideCount,
      slidesToScroll = spec.slidesToScroll,
      infinite = spec.infinite,
      touchObject = spec.touchObject,
      swipeEvent = spec.swipeEvent,
      listHeight = spec.listHeight,
      listWidth = spec.listWidth;
  if (scrolling) return;
  if (animating) return e.preventDefault();
  if (vertical && swipeToSlide && verticalSwiping) e.preventDefault();
  var swipeLeft,
      state = {};
  var curLeft = getTrackLeft(spec);
  touchObject.curX = e.touches ? e.touches[0].pageX : e.clientX;
  touchObject.curY = e.touches ? e.touches[0].pageY : e.clientY;
  touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curX - touchObject.startX, 2)));
  var verticalSwipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curY - touchObject.startY, 2)));

  if (!verticalSwiping && !swiping && verticalSwipeLength > 10) {
    return {
      scrolling: true
    };
  }

  if (verticalSwiping) touchObject.swipeLength = verticalSwipeLength;
  var positionOffset = (!rtl ? 1 : -1) * (touchObject.curX > touchObject.startX ? 1 : -1);
  if (verticalSwiping) positionOffset = touchObject.curY > touchObject.startY ? 1 : -1;
  var dotCount = Math.ceil(slideCount / slidesToScroll);
  var swipeDirection = getSwipeDirection(spec.touchObject, verticalSwiping);
  var touchSwipeLength = touchObject.swipeLength;

  if (!infinite) {
    if (currentSlide === 0 && swipeDirection === "right" || currentSlide + 1 >= dotCount && swipeDirection === "left" || !canGoNext(spec) && swipeDirection === "left") {
      touchSwipeLength = touchObject.swipeLength * edgeFriction;

      if (edgeDragged === false && onEdge) {
        onEdge(swipeDirection);
        state["edgeDragged"] = true;
      }
    }
  }

  if (!swiped && swipeEvent) {
    swipeEvent(swipeDirection);
    state["swiped"] = true;
  }

  if (!vertical) {
    if (!rtl) {
      swipeLeft = curLeft + touchSwipeLength * positionOffset;
    } else {
      swipeLeft = curLeft - touchSwipeLength * positionOffset;
    }
  } else {
    swipeLeft = curLeft + touchSwipeLength * (listHeight / listWidth) * positionOffset;
  }

  if (verticalSwiping) {
    swipeLeft = curLeft + touchSwipeLength * positionOffset;
  }

  state = _objectSpread({}, state, {
    touchObject: touchObject,
    swipeLeft: swipeLeft,
    trackStyle: getTrackCSS(_objectSpread({}, spec, {
      left: swipeLeft
    }))
  });

  if (Math.abs(touchObject.curX - touchObject.startX) < Math.abs(touchObject.curY - touchObject.startY) * 0.8) {
    return state;
  }

  if (touchObject.swipeLength > 10) {
    state["swiping"] = true;
    e.preventDefault();
  }

  return state;
};

exports.swipeMove = swipeMove;

var swipeEnd = function swipeEnd(e, spec) {
  var dragging = spec.dragging,
      swipe = spec.swipe,
      touchObject = spec.touchObject,
      listWidth = spec.listWidth,
      touchThreshold = spec.touchThreshold,
      verticalSwiping = spec.verticalSwiping,
      listHeight = spec.listHeight,
      currentSlide = spec.currentSlide,
      swipeToSlide = spec.swipeToSlide,
      scrolling = spec.scrolling,
      onSwipe = spec.onSwipe;

  if (!dragging) {
    if (swipe) e.preventDefault();
    return {};
  }

  var minSwipe = verticalSwiping ? listHeight / touchThreshold : listWidth / touchThreshold;
  var swipeDirection = getSwipeDirection(touchObject, verticalSwiping); // reset the state of touch related state variables.

  var state = {
    dragging: false,
    edgeDragged: false,
    scrolling: false,
    swiping: false,
    swiped: false,
    swipeLeft: null,
    touchObject: {}
  };

  if (scrolling) {
    return state;
  }

  if (!touchObject.swipeLength) {
    return state;
  }

  if (touchObject.swipeLength > minSwipe) {
    e.preventDefault();

    if (onSwipe) {
      onSwipe(swipeDirection);
    }

    var slideCount, newSlide;

    switch (swipeDirection) {
      case "left":
      case "up":
        newSlide = currentSlide + getSlideCount(spec);
        slideCount = swipeToSlide ? checkNavigable(spec, newSlide) : newSlide;
        state["currentDirection"] = 0;
        break;

      case "right":
      case "down":
        newSlide = currentSlide - getSlideCount(spec);
        slideCount = swipeToSlide ? checkNavigable(spec, newSlide) : newSlide;
        state["currentDirection"] = 1;
        break;

      default:
        slideCount = currentSlide;
    }

    state["triggerSlideHandler"] = slideCount;
  } else {
    // Adjust the track back to it's original position.
    var currentLeft = getTrackLeft(spec);
    state["trackStyle"] = getTrackAnimateCSS(_objectSpread({}, spec, {
      left: currentLeft
    }));
  }

  return state;
};

exports.swipeEnd = swipeEnd;

var getNavigableIndexes = function getNavigableIndexes(spec) {
  var max = spec.infinite ? spec.slideCount * 2 : spec.slideCount;
  var breakpoint = spec.infinite ? spec.slidesToShow * -1 : 0;
  var counter = spec.infinite ? spec.slidesToShow * -1 : 0;
  var indexes = [];

  while (breakpoint < max) {
    indexes.push(breakpoint);
    breakpoint = counter + spec.slidesToScroll;
    counter += Math.min(spec.slidesToScroll, spec.slidesToShow);
  }

  return indexes;
};

exports.getNavigableIndexes = getNavigableIndexes;

var checkNavigable = function checkNavigable(spec, index) {
  var navigables = getNavigableIndexes(spec);
  var prevNavigable = 0;

  if (index > navigables[navigables.length - 1]) {
    index = navigables[navigables.length - 1];
  } else {
    for (var n in navigables) {
      if (index < navigables[n]) {
        index = prevNavigable;
        break;
      }

      prevNavigable = navigables[n];
    }
  }

  return index;
};

exports.checkNavigable = checkNavigable;

var getSlideCount = function getSlideCount(spec) {
  var centerOffset = spec.centerMode ? spec.slideWidth * Math.floor(spec.slidesToShow / 2) : 0;

  if (spec.swipeToSlide) {
    var swipedSlide;

    var slickList = _reactDom["default"].findDOMNode(spec.listRef);

    var slides = slickList.querySelectorAll(".slick-slide");
    Array.from(slides).every(function (slide) {
      if (!spec.vertical) {
        if (slide.offsetLeft - centerOffset + getWidth(slide) / 2 > spec.swipeLeft * -1) {
          swipedSlide = slide;
          return false;
        }
      } else {
        if (slide.offsetTop + getHeight(slide) / 2 > spec.swipeLeft * -1) {
          swipedSlide = slide;
          return false;
        }
      }

      return true;
    });

    if (!swipedSlide) {
      return 0;
    }

    var currentIndex = spec.rtl === true ? spec.slideCount - spec.currentSlide : spec.currentSlide;
    var slidesTraversed = Math.abs(swipedSlide.dataset.index - currentIndex) || 1;
    return slidesTraversed;
  } else {
    return spec.slidesToScroll;
  }
};

exports.getSlideCount = getSlideCount;

var checkSpecKeys = function checkSpecKeys(spec, keysArray) {
  return keysArray.reduce(function (value, key) {
    return value && spec.hasOwnProperty(key);
  }, true) ? null : console.error("Keys Missing:", spec);
};

exports.checkSpecKeys = checkSpecKeys;

var getTrackCSS = function getTrackCSS(spec) {
  checkSpecKeys(spec, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
  var trackWidth, trackHeight;
  var trackChildren = spec.slideCount + 2 * spec.slidesToShow;

  if (!spec.vertical) {
    trackWidth = getTotalSlides(spec) * spec.slideWidth;
  } else {
    trackHeight = trackChildren * spec.slideHeight;
  }

  var style = {
    opacity: 1,
    transition: "",
    WebkitTransition: ""
  };

  if (spec.useTransform) {
    var WebkitTransform = !spec.vertical ? "translate3d(" + spec.left + "px, 0px, 0px)" : "translate3d(0px, " + spec.left + "px, 0px)";
    var transform = !spec.vertical ? "translate3d(" + spec.left + "px, 0px, 0px)" : "translate3d(0px, " + spec.left + "px, 0px)";
    var msTransform = !spec.vertical ? "translateX(" + spec.left + "px)" : "translateY(" + spec.left + "px)";
    style = _objectSpread({}, style, {
      WebkitTransform: WebkitTransform,
      transform: transform,
      msTransform: msTransform
    });
  } else {
    if (spec.vertical) {
      style["top"] = spec.left;
    } else {
      style["left"] = spec.left;
    }
  }

  if (spec.fade) style = {
    opacity: 1
  };
  if (trackWidth) style.width = trackWidth;
  if (trackHeight) style.height = trackHeight; // Fallback for IE8

  if (window && !window.addEventListener && window.attachEvent) {
    if (!spec.vertical) {
      style.marginLeft = spec.left + "px";
    } else {
      style.marginTop = spec.left + "px";
    }
  }

  return style;
};

exports.getTrackCSS = getTrackCSS;

var getTrackAnimateCSS = function getTrackAnimateCSS(spec) {
  checkSpecKeys(spec, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
  var style = getTrackCSS(spec); // useCSS is true by default so it can be undefined

  if (spec.useTransform) {
    style.WebkitTransition = "-webkit-transform " + spec.speed + "ms " + spec.cssEase;
    style.transition = "transform " + spec.speed + "ms " + spec.cssEase;
  } else {
    if (spec.vertical) {
      style.transition = "top " + spec.speed + "ms " + spec.cssEase;
    } else {
      style.transition = "left " + spec.speed + "ms " + spec.cssEase;
    }
  }

  return style;
};

exports.getTrackAnimateCSS = getTrackAnimateCSS;

var getTrackLeft = function getTrackLeft(spec) {
  if (spec.unslick) {
    return 0;
  }

  checkSpecKeys(spec, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
  var slideIndex = spec.slideIndex,
      trackRef = spec.trackRef,
      infinite = spec.infinite,
      centerMode = spec.centerMode,
      slideCount = spec.slideCount,
      slidesToShow = spec.slidesToShow,
      slidesToScroll = spec.slidesToScroll,
      slideWidth = spec.slideWidth,
      listWidth = spec.listWidth,
      variableWidth = spec.variableWidth,
      slideHeight = spec.slideHeight,
      fade = spec.fade,
      vertical = spec.vertical;
  var slideOffset = 0;
  var targetLeft;
  var targetSlide;
  var verticalOffset = 0;

  if (fade || spec.slideCount === 1) {
    return 0;
  }

  var slidesToOffset = 0;

  if (infinite) {
    slidesToOffset = -getPreClones(spec); // bring active slide to the beginning of visual area
    // if next scroll doesn't have enough children, just reach till the end of original slides instead of shifting slidesToScroll children

    if (slideCount % slidesToScroll !== 0 && slideIndex + slidesToScroll > slideCount) {
      slidesToOffset = -(slideIndex > slideCount ? slidesToShow - (slideIndex - slideCount) : slideCount % slidesToScroll);
    } // shift current slide to center of the frame


    if (centerMode) {
      slidesToOffset += parseInt(slidesToShow / 2);
    }
  } else {
    if (slideCount % slidesToScroll !== 0 && slideIndex + slidesToScroll > slideCount) {
      slidesToOffset = slidesToShow - slideCount % slidesToScroll;
    }

    if (centerMode) {
      slidesToOffset = parseInt(slidesToShow / 2);
    }
  }

  slideOffset = slidesToOffset * slideWidth;
  verticalOffset = slidesToOffset * slideHeight;

  if (!vertical) {
    targetLeft = slideIndex * slideWidth * -1 + slideOffset;
  } else {
    targetLeft = slideIndex * slideHeight * -1 + verticalOffset;
  }

  if (variableWidth === true) {
    var targetSlideIndex;

    var trackElem = _reactDom["default"].findDOMNode(trackRef);

    targetSlideIndex = slideIndex + getPreClones(spec);
    targetSlide = trackElem && trackElem.childNodes[targetSlideIndex];
    targetLeft = targetSlide ? targetSlide.offsetLeft * -1 : 0;

    if (centerMode === true) {
      targetSlideIndex = infinite ? slideIndex + getPreClones(spec) : slideIndex;
      targetSlide = trackElem && trackElem.children[targetSlideIndex];
      targetLeft = 0;

      for (var slide = 0; slide < targetSlideIndex; slide++) {
        targetLeft -= trackElem && trackElem.children[slide] && trackElem.children[slide].offsetWidth;
      }

      targetLeft -= parseInt(spec.centerPadding);
      targetLeft += targetSlide && (listWidth - targetSlide.offsetWidth) / 2;
    }
  }

  return targetLeft;
};

exports.getTrackLeft = getTrackLeft;

var getPreClones = function getPreClones(spec) {
  if (spec.unslick || !spec.infinite) {
    return 0;
  }

  if (spec.variableWidth) {
    return spec.slideCount;
  }

  return spec.slidesToShow + (spec.centerMode ? 1 : 0);
};

exports.getPreClones = getPreClones;

var getPostClones = function getPostClones(spec) {
  if (spec.unslick || !spec.infinite) {
    return 0;
  }

  return spec.slideCount;
};

exports.getPostClones = getPostClones;

var getTotalSlides = function getTotalSlides(spec) {
  return spec.slideCount === 1 ? 1 : getPreClones(spec) + spec.slideCount + getPostClones(spec);
};

exports.getTotalSlides = getTotalSlides;

var siblingDirection = function siblingDirection(spec) {
  if (spec.targetSlide > spec.currentSlide) {
    if (spec.targetSlide > spec.currentSlide + slidesOnRight(spec)) {
      return "left";
    }

    return "right";
  } else {
    if (spec.targetSlide < spec.currentSlide - slidesOnLeft(spec)) {
      return "right";
    }

    return "left";
  }
};

exports.siblingDirection = siblingDirection;

var slidesOnRight = function slidesOnRight(_ref) {
  var slidesToShow = _ref.slidesToShow,
      centerMode = _ref.centerMode,
      rtl = _ref.rtl,
      centerPadding = _ref.centerPadding; // returns no of slides on the right of active slide

  if (centerMode) {
    var right = (slidesToShow - 1) / 2 + 1;
    if (parseInt(centerPadding) > 0) right += 1;
    if (rtl && slidesToShow % 2 === 0) right += 1;
    return right;
  }

  if (rtl) {
    return 0;
  }

  return slidesToShow - 1;
};

exports.slidesOnRight = slidesOnRight;

var slidesOnLeft = function slidesOnLeft(_ref2) {
  var slidesToShow = _ref2.slidesToShow,
      centerMode = _ref2.centerMode,
      rtl = _ref2.rtl,
      centerPadding = _ref2.centerPadding; // returns no of slides on the left of active slide

  if (centerMode) {
    var left = (slidesToShow - 1) / 2 + 1;
    if (parseInt(centerPadding) > 0) left += 1;
    if (!rtl && slidesToShow % 2 === 0) left += 1;
    return left;
  }

  if (rtl) {
    return slidesToShow - 1;
  }

  return 0;
};

exports.slidesOnLeft = slidesOnLeft;

var canUseDOM = function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
};

exports.canUseDOM = canUseDOM;

/***/ }),

/***/ "iXzu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var core_js_modules_es6_weak_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("orKN");
/* harmony import */ var core_js_modules_es6_weak_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_weak_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("yIlq");
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("PAbq");
/* harmony import */ var core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_reduce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("3y5y");
/* harmony import */ var core_js_modules_es6_array_reduce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_reduce__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("75LO");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("9p7t");
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("V7cS");
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_date_now__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("7t+O");
/* harmony import */ var core_js_modules_es6_date_now__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_date_now__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("o7PZ");
/* harmony import */ var core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("7lGJ");
/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("d3/y");
/* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es6_array_some__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("VNvs");
/* harmony import */ var core_js_modules_es6_array_some__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_some__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("W1QL");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("K/PF");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("t91x");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("lQyR");
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("zx98");
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_16__);


















/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */

/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = function () {
  if (typeof Map !== 'undefined') {
    return Map;
  }
  /**
   * Returns index in provided array that matches the specified key.
   *
   * @param {Array<Array>} arr
   * @param {*} key
   * @returns {number}
   */


  function getIndex(arr, key) {
    var result = -1;
    arr.some(function (entry, index) {
      if (entry[0] === key) {
        result = index;
        return true;
      }

      return false;
    });
    return result;
  }

  return (
    /** @class */
    function () {
      function class_1() {
        this.__entries__ = [];
      }

      Object.defineProperty(class_1.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function get() {
          return this.__entries__.length;
        },
        enumerable: true,
        configurable: true
      });
      /**
       * @param {*} key
       * @returns {*}
       */

      class_1.prototype.get = function (key) {
        var index = getIndex(this.__entries__, key);
        var entry = this.__entries__[index];
        return entry && entry[1];
      };
      /**
       * @param {*} key
       * @param {*} value
       * @returns {void}
       */


      class_1.prototype.set = function (key, value) {
        var index = getIndex(this.__entries__, key);

        if (~index) {
          this.__entries__[index][1] = value;
        } else {
          this.__entries__.push([key, value]);
        }
      };
      /**
       * @param {*} key
       * @returns {void}
       */


      class_1.prototype["delete"] = function (key) {
        var entries = this.__entries__;
        var index = getIndex(entries, key);

        if (~index) {
          entries.splice(index, 1);
        }
      };
      /**
       * @param {*} key
       * @returns {void}
       */


      class_1.prototype.has = function (key) {
        return !!~getIndex(this.__entries__, key);
      };
      /**
       * @returns {void}
       */


      class_1.prototype.clear = function () {
        this.__entries__.splice(0);
      };
      /**
       * @param {Function} callback
       * @param {*} [ctx=null]
       * @returns {void}
       */


      class_1.prototype.forEach = function (callback, ctx) {
        if (ctx === void 0) {
          ctx = null;
        }

        for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
          var entry = _a[_i];
          callback.call(ctx, entry[1], entry[0]);
        }
      };

      return class_1;
    }()
  );
}();
/**
 * Detects whether window and document objects are available in current environment.
 */


var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document; // Returns global object of a current environment.

var global$1 = function () {
  if (typeof global !== 'undefined' && global.Math === Math) {
    return global;
  }

  if (typeof self !== 'undefined' && self.Math === Math) {
    return self;
  }

  if (typeof window !== 'undefined' && window.Math === Math) {
    return window;
  } // eslint-disable-next-line no-new-func


  return Function('return this')();
}();
/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */


var requestAnimationFrame$1 = function () {
  if (typeof requestAnimationFrame === 'function') {
    // It's required to use a bounded function because IE sometimes throws
    // an "Invalid calling object" error if rAF is invoked without the global
    // object on the left hand side.
    return requestAnimationFrame.bind(global$1);
  }

  return function (callback) {
    return setTimeout(function () {
      return callback(Date.now());
    }, 1000 / 60);
  };
}(); // Defines minimum timeout before adding a trailing call.


var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */

function throttle(callback, delay) {
  var leadingCall = false,
      trailingCall = false,
      lastCallTime = 0;
  /**
   * Invokes the original callback function and schedules new invocation if
   * the "proxy" was called during current request.
   *
   * @returns {void}
   */

  function resolvePending() {
    if (leadingCall) {
      leadingCall = false;
      callback();
    }

    if (trailingCall) {
      proxy();
    }
  }
  /**
   * Callback invoked after the specified delay. It will further postpone
   * invocation of the original function delegating it to the
   * requestAnimationFrame.
   *
   * @returns {void}
   */


  function timeoutCallback() {
    requestAnimationFrame$1(resolvePending);
  }
  /**
   * Schedules invocation of the original function.
   *
   * @returns {void}
   */


  function proxy() {
    var timeStamp = Date.now();

    if (leadingCall) {
      // Reject immediately following calls.
      if (timeStamp - lastCallTime < trailingTimeout) {
        return;
      } // Schedule new call to be in invoked when the pending one is resolved.
      // This is important for "transitions" which never actually start
      // immediately so there is a chance that we might miss one if change
      // happens amids the pending invocation.


      trailingCall = true;
    } else {
      leadingCall = true;
      trailingCall = false;
      setTimeout(timeoutCallback, delay);
    }

    lastCallTime = timeStamp;
  }

  return proxy;
} // Minimum delay before invoking the update of observers.


var REFRESH_DELAY = 20; // A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.

var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight']; // Check if MutationObserver is available.

var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */

var ResizeObserverController =
/** @class */
function () {
  /**
   * Creates a new instance of ResizeObserverController.
   *
   * @private
   */
  function ResizeObserverController() {
    /**
     * Indicates whether DOM listeners have been added.
     *
     * @private {boolean}
     */
    this.connected_ = false;
    /**
     * Tells that controller has subscribed for Mutation Events.
     *
     * @private {boolean}
     */

    this.mutationEventsAdded_ = false;
    /**
     * Keeps reference to the instance of MutationObserver.
     *
     * @private {MutationObserver}
     */

    this.mutationsObserver_ = null;
    /**
     * A list of connected observers.
     *
     * @private {Array<ResizeObserverSPI>}
     */

    this.observers_ = [];
    this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
    this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
  }
  /**
   * Adds observer to observers list.
   *
   * @param {ResizeObserverSPI} observer - Observer to be added.
   * @returns {void}
   */


  ResizeObserverController.prototype.addObserver = function (observer) {
    if (!~this.observers_.indexOf(observer)) {
      this.observers_.push(observer);
    } // Add listeners if they haven't been added yet.


    if (!this.connected_) {
      this.connect_();
    }
  };
  /**
   * Removes observer from observers list.
   *
   * @param {ResizeObserverSPI} observer - Observer to be removed.
   * @returns {void}
   */


  ResizeObserverController.prototype.removeObserver = function (observer) {
    var observers = this.observers_;
    var index = observers.indexOf(observer); // Remove observer if it's present in registry.

    if (~index) {
      observers.splice(index, 1);
    } // Remove listeners if controller has no connected observers.


    if (!observers.length && this.connected_) {
      this.disconnect_();
    }
  };
  /**
   * Invokes the update of observers. It will continue running updates insofar
   * it detects changes.
   *
   * @returns {void}
   */


  ResizeObserverController.prototype.refresh = function () {
    var changesDetected = this.updateObservers_(); // Continue running updates if changes have been detected as there might
    // be future ones caused by CSS transitions.

    if (changesDetected) {
      this.refresh();
    }
  };
  /**
   * Updates every observer from observers list and notifies them of queued
   * entries.
   *
   * @private
   * @returns {boolean} Returns "true" if any observer has detected changes in
   *      dimensions of it's elements.
   */


  ResizeObserverController.prototype.updateObservers_ = function () {
    // Collect observers that have active observations.
    var activeObservers = this.observers_.filter(function (observer) {
      return observer.gatherActive(), observer.hasActive();
    }); // Deliver notifications in a separate cycle in order to avoid any
    // collisions between observers, e.g. when multiple instances of
    // ResizeObserver are tracking the same element and the callback of one
    // of them changes content dimensions of the observed target. Sometimes
    // this may result in notifications being blocked for the rest of observers.

    activeObservers.forEach(function (observer) {
      return observer.broadcastActive();
    });
    return activeObservers.length > 0;
  };
  /**
   * Initializes DOM listeners.
   *
   * @private
   * @returns {void}
   */


  ResizeObserverController.prototype.connect_ = function () {
    // Do nothing if running in a non-browser environment or if listeners
    // have been already added.
    if (!isBrowser || this.connected_) {
      return;
    } // Subscription to the "Transitionend" event is used as a workaround for
    // delayed transitions. This way it's possible to capture at least the
    // final state of an element.


    document.addEventListener('transitionend', this.onTransitionEnd_);
    window.addEventListener('resize', this.refresh);

    if (mutationObserverSupported) {
      this.mutationsObserver_ = new MutationObserver(this.refresh);
      this.mutationsObserver_.observe(document, {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true
      });
    } else {
      document.addEventListener('DOMSubtreeModified', this.refresh);
      this.mutationEventsAdded_ = true;
    }

    this.connected_ = true;
  };
  /**
   * Removes DOM listeners.
   *
   * @private
   * @returns {void}
   */


  ResizeObserverController.prototype.disconnect_ = function () {
    // Do nothing if running in a non-browser environment or if listeners
    // have been already removed.
    if (!isBrowser || !this.connected_) {
      return;
    }

    document.removeEventListener('transitionend', this.onTransitionEnd_);
    window.removeEventListener('resize', this.refresh);

    if (this.mutationsObserver_) {
      this.mutationsObserver_.disconnect();
    }

    if (this.mutationEventsAdded_) {
      document.removeEventListener('DOMSubtreeModified', this.refresh);
    }

    this.mutationsObserver_ = null;
    this.mutationEventsAdded_ = false;
    this.connected_ = false;
  };
  /**
   * "Transitionend" event handler.
   *
   * @private
   * @param {TransitionEvent} event
   * @returns {void}
   */


  ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
    var _b = _a.propertyName,
        propertyName = _b === void 0 ? '' : _b; // Detect whether transition may affect dimensions of an element.

    var isReflowProperty = transitionKeys.some(function (key) {
      return !!~propertyName.indexOf(key);
    });

    if (isReflowProperty) {
      this.refresh();
    }
  };
  /**
   * Returns instance of the ResizeObserverController.
   *
   * @returns {ResizeObserverController}
   */


  ResizeObserverController.getInstance = function () {
    if (!this.instance_) {
      this.instance_ = new ResizeObserverController();
    }

    return this.instance_;
  };
  /**
   * Holds reference to the controller's instance.
   *
   * @private {ResizeObserverController}
   */


  ResizeObserverController.instance_ = null;
  return ResizeObserverController;
}();
/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */


var defineConfigurable = function defineConfigurable(target, props) {
  for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
    var key = _a[_i];
    Object.defineProperty(target, key, {
      value: props[key],
      enumerable: false,
      writable: false,
      configurable: true
    });
  }

  return target;
};
/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */


var getWindowOf = function getWindowOf(target) {
  // Assume that the element is an instance of Node, which means that it
  // has the "ownerDocument" property from which we can retrieve a
  // corresponding global object.
  var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView; // Return the local global object if it's not possible extract one from
  // provided element.

  return ownerGlobal || global$1;
}; // Placeholder of an empty content rectangle.


var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */

function toFloat(value) {
  return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */


function getBordersSize(styles) {
  var positions = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    positions[_i - 1] = arguments[_i];
  }

  return positions.reduce(function (size, position) {
    var value = styles['border-' + position + '-width'];
    return size + toFloat(value);
  }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */


function getPaddings(styles) {
  var positions = ['top', 'right', 'bottom', 'left'];
  var paddings = {};

  for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
    var position = positions_1[_i];
    var value = styles['padding-' + position];
    paddings[position] = toFloat(value);
  }

  return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */


function getSVGContentRect(target) {
  var bbox = target.getBBox();
  return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */


function getHTMLElementContentRect(target) {
  // Client width & height properties can't be
  // used exclusively as they provide rounded values.
  var clientWidth = target.clientWidth,
      clientHeight = target.clientHeight; // By this condition we can catch all non-replaced inline, hidden and
  // detached elements. Though elements with width & height properties less
  // than 0.5 will be discarded as well.
  //
  // Without it we would need to implement separate methods for each of
  // those cases and it's not possible to perform a precise and performance
  // effective test for hidden elements. E.g. even jQuery's ':visible' filter
  // gives wrong results for elements with width & height less than 0.5.

  if (!clientWidth && !clientHeight) {
    return emptyRect;
  }

  var styles = getWindowOf(target).getComputedStyle(target);
  var paddings = getPaddings(styles);
  var horizPad = paddings.left + paddings.right;
  var vertPad = paddings.top + paddings.bottom; // Computed styles of width & height are being used because they are the
  // only dimensions available to JS that contain non-rounded values. It could
  // be possible to utilize the getBoundingClientRect if only it's data wasn't
  // affected by CSS transformations let alone paddings, borders and scroll bars.

  var width = toFloat(styles.width),
      height = toFloat(styles.height); // Width & height include paddings and borders when the 'border-box' box
  // model is applied (except for IE).

  if (styles.boxSizing === 'border-box') {
    // Following conditions are required to handle Internet Explorer which
    // doesn't include paddings and borders to computed CSS dimensions.
    //
    // We can say that if CSS dimensions + paddings are equal to the "client"
    // properties then it's either IE, and thus we don't need to subtract
    // anything, or an element merely doesn't have paddings/borders styles.
    if (Math.round(width + horizPad) !== clientWidth) {
      width -= getBordersSize(styles, 'left', 'right') + horizPad;
    }

    if (Math.round(height + vertPad) !== clientHeight) {
      height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
    }
  } // Following steps can't be applied to the document's root element as its
  // client[Width/Height] properties represent viewport area of the window.
  // Besides, it's as well not necessary as the <html> itself neither has
  // rendered scroll bars nor it can be clipped.


  if (!isDocumentElement(target)) {
    // In some browsers (only in Firefox, actually) CSS width & height
    // include scroll bars size which can be removed at this step as scroll
    // bars are the only difference between rounded dimensions + paddings
    // and "client" properties, though that is not always true in Chrome.
    var vertScrollbar = Math.round(width + horizPad) - clientWidth;
    var horizScrollbar = Math.round(height + vertPad) - clientHeight; // Chrome has a rather weird rounding of "client" properties.
    // E.g. for an element with content width of 314.2px it sometimes gives
    // the client width of 315px and for the width of 314.7px it may give
    // 314px. And it doesn't happen all the time. So just ignore this delta
    // as a non-relevant.

    if (Math.abs(vertScrollbar) !== 1) {
      width -= vertScrollbar;
    }

    if (Math.abs(horizScrollbar) !== 1) {
      height -= horizScrollbar;
    }
  }

  return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */


var isSVGGraphicsElement = function () {
  // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
  // interface.
  if (typeof SVGGraphicsElement !== 'undefined') {
    return function (target) {
      return target instanceof getWindowOf(target).SVGGraphicsElement;
    };
  } // If it's so, then check that element is at least an instance of the
  // SVGElement and that it has the "getBBox" method.
  // eslint-disable-next-line no-extra-parens


  return function (target) {
    return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === 'function';
  };
}();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */


function isDocumentElement(target) {
  return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */


function getContentRect(target) {
  if (!isBrowser) {
    return emptyRect;
  }

  if (isSVGGraphicsElement(target)) {
    return getSVGContentRect(target);
  }

  return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */


function createReadOnlyRect(_a) {
  var x = _a.x,
      y = _a.y,
      width = _a.width,
      height = _a.height; // If DOMRectReadOnly is available use it as a prototype for the rectangle.

  var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
  var rect = Object.create(Constr.prototype); // Rectangle's properties are not writable and non-enumerable.

  defineConfigurable(rect, {
    x: x,
    y: y,
    width: width,
    height: height,
    top: y,
    right: x + width,
    bottom: height + y,
    left: x
  });
  return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */


function createRectInit(x, y, width, height) {
  return {
    x: x,
    y: y,
    width: width,
    height: height
  };
}
/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */


var ResizeObservation =
/** @class */
function () {
  /**
   * Creates an instance of ResizeObservation.
   *
   * @param {Element} target - Element to be observed.
   */
  function ResizeObservation(target) {
    /**
     * Broadcasted width of content rectangle.
     *
     * @type {number}
     */
    this.broadcastWidth = 0;
    /**
     * Broadcasted height of content rectangle.
     *
     * @type {number}
     */

    this.broadcastHeight = 0;
    /**
     * Reference to the last observed content rectangle.
     *
     * @private {DOMRectInit}
     */

    this.contentRect_ = createRectInit(0, 0, 0, 0);
    this.target = target;
  }
  /**
   * Updates content rectangle and tells whether it's width or height properties
   * have changed since the last broadcast.
   *
   * @returns {boolean}
   */


  ResizeObservation.prototype.isActive = function () {
    var rect = getContentRect(this.target);
    this.contentRect_ = rect;
    return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
  };
  /**
   * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
   * from the corresponding properties of the last observed content rectangle.
   *
   * @returns {DOMRectInit} Last observed content rectangle.
   */


  ResizeObservation.prototype.broadcastRect = function () {
    var rect = this.contentRect_;
    this.broadcastWidth = rect.width;
    this.broadcastHeight = rect.height;
    return rect;
  };

  return ResizeObservation;
}();

var ResizeObserverEntry =
/** @class */
function () {
  /**
   * Creates an instance of ResizeObserverEntry.
   *
   * @param {Element} target - Element that is being observed.
   * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
   */
  function ResizeObserverEntry(target, rectInit) {
    var contentRect = createReadOnlyRect(rectInit); // According to the specification following properties are not writable
    // and are also not enumerable in the native implementation.
    //
    // Property accessors are not being used as they'd require to define a
    // private WeakMap storage which may cause memory leaks in browsers that
    // don't support this type of collections.

    defineConfigurable(this, {
      target: target,
      contentRect: contentRect
    });
  }

  return ResizeObserverEntry;
}();

var ResizeObserverSPI =
/** @class */
function () {
  /**
   * Creates a new instance of ResizeObserver.
   *
   * @param {ResizeObserverCallback} callback - Callback function that is invoked
   *      when one of the observed elements changes it's content dimensions.
   * @param {ResizeObserverController} controller - Controller instance which
   *      is responsible for the updates of observer.
   * @param {ResizeObserver} callbackCtx - Reference to the public
   *      ResizeObserver instance which will be passed to callback function.
   */
  function ResizeObserverSPI(callback, controller, callbackCtx) {
    /**
     * Collection of resize observations that have detected changes in dimensions
     * of elements.
     *
     * @private {Array<ResizeObservation>}
     */
    this.activeObservations_ = [];
    /**
     * Registry of the ResizeObservation instances.
     *
     * @private {Map<Element, ResizeObservation>}
     */

    this.observations_ = new MapShim();

    if (typeof callback !== 'function') {
      throw new TypeError('The callback provided as parameter 1 is not a function.');
    }

    this.callback_ = callback;
    this.controller_ = controller;
    this.callbackCtx_ = callbackCtx;
  }
  /**
   * Starts observing provided element.
   *
   * @param {Element} target - Element to be observed.
   * @returns {void}
   */


  ResizeObserverSPI.prototype.observe = function (target) {
    if (!arguments.length) {
      throw new TypeError('1 argument required, but only 0 present.');
    } // Do nothing if current environment doesn't have the Element interface.


    if (typeof Element === 'undefined' || !(Element instanceof Object)) {
      return;
    }

    if (!(target instanceof getWindowOf(target).Element)) {
      throw new TypeError('parameter 1 is not of type "Element".');
    }

    var observations = this.observations_; // Do nothing if element is already being observed.

    if (observations.has(target)) {
      return;
    }

    observations.set(target, new ResizeObservation(target));
    this.controller_.addObserver(this); // Force the update of observations.

    this.controller_.refresh();
  };
  /**
   * Stops observing provided element.
   *
   * @param {Element} target - Element to stop observing.
   * @returns {void}
   */


  ResizeObserverSPI.prototype.unobserve = function (target) {
    if (!arguments.length) {
      throw new TypeError('1 argument required, but only 0 present.');
    } // Do nothing if current environment doesn't have the Element interface.


    if (typeof Element === 'undefined' || !(Element instanceof Object)) {
      return;
    }

    if (!(target instanceof getWindowOf(target).Element)) {
      throw new TypeError('parameter 1 is not of type "Element".');
    }

    var observations = this.observations_; // Do nothing if element is not being observed.

    if (!observations.has(target)) {
      return;
    }

    observations["delete"](target);

    if (!observations.size) {
      this.controller_.removeObserver(this);
    }
  };
  /**
   * Stops observing all elements.
   *
   * @returns {void}
   */


  ResizeObserverSPI.prototype.disconnect = function () {
    this.clearActive();
    this.observations_.clear();
    this.controller_.removeObserver(this);
  };
  /**
   * Collects observation instances the associated element of which has changed
   * it's content rectangle.
   *
   * @returns {void}
   */


  ResizeObserverSPI.prototype.gatherActive = function () {
    var _this = this;

    this.clearActive();
    this.observations_.forEach(function (observation) {
      if (observation.isActive()) {
        _this.activeObservations_.push(observation);
      }
    });
  };
  /**
   * Invokes initial callback function with a list of ResizeObserverEntry
   * instances collected from active resize observations.
   *
   * @returns {void}
   */


  ResizeObserverSPI.prototype.broadcastActive = function () {
    // Do nothing if observer doesn't have active observations.
    if (!this.hasActive()) {
      return;
    }

    var ctx = this.callbackCtx_; // Create ResizeObserverEntry instance for every active observation.

    var entries = this.activeObservations_.map(function (observation) {
      return new ResizeObserverEntry(observation.target, observation.broadcastRect());
    });
    this.callback_.call(ctx, entries, ctx);
    this.clearActive();
  };
  /**
   * Clears the collection of active observations.
   *
   * @returns {void}
   */


  ResizeObserverSPI.prototype.clearActive = function () {
    this.activeObservations_.splice(0);
  };
  /**
   * Tells whether observer has active observations.
   *
   * @returns {boolean}
   */


  ResizeObserverSPI.prototype.hasActive = function () {
    return this.activeObservations_.length > 0;
  };

  return ResizeObserverSPI;
}(); // Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.


var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */

var ResizeObserver =
/** @class */
function () {
  /**
   * Creates a new instance of ResizeObserver.
   *
   * @param {ResizeObserverCallback} callback - Callback that is invoked when
   *      dimensions of the observed elements change.
   */
  function ResizeObserver(callback) {
    if (!(this instanceof ResizeObserver)) {
      throw new TypeError('Cannot call a class as a function.');
    }

    if (!arguments.length) {
      throw new TypeError('1 argument required, but only 0 present.');
    }

    var controller = ResizeObserverController.getInstance();
    var observer = new ResizeObserverSPI(callback, controller, this);
    observers.set(this, observer);
  }

  return ResizeObserver;
}(); // Expose public methods of ResizeObserver.


['observe', 'unobserve', 'disconnect'].forEach(function (method) {
  ResizeObserver.prototype[method] = function () {
    var _a;

    return (_a = observers.get(this))[method].apply(_a, arguments);
  };
});

var index = function () {
  // Export existing implementation if available.
  if (typeof global$1.ResizeObserver !== 'undefined') {
    return global$1.ResizeObserver;
  }

  return ResizeObserver;
}();

/* harmony default export */ __webpack_exports__["default"] = (index);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("pCvA")))

/***/ }),

/***/ "jAeI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__("mXGw");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ../@antv/gatsby-theme-antv/site/components/Seo.tsx
var Seo = __webpack_require__("MlAH");

// EXTERNAL MODULE: ../node_modules/react-i18next/dist/es/index.js + 9 modules
var es = __webpack_require__("CE6G");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("GkPX");

// EXTERNAL MODULE: ../node_modules/antd/es/icon/style/index.js
var icon_style = __webpack_require__("EOmM");

// EXTERNAL MODULE: ../node_modules/antd/es/icon/index.js + 4 modules
var es_icon = __webpack_require__("epfg");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.string.link.js
var es6_string_link = __webpack_require__("ScpY");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.string.starts-with.js
var es6_string_starts_with = __webpack_require__("FEHE");

// EXTERNAL MODULE: ../node_modules/antd/es/style/index.less
var es_style = __webpack_require__("SwVN");

// EXTERNAL MODULE: ../node_modules/antd/es/modal/style/index.less
var modal_style = __webpack_require__("s5oV");

// EXTERNAL MODULE: ../node_modules/antd/es/button/style/index.js
var button_style = __webpack_require__("sbMj");

// CONCATENATED MODULE: ../node_modules/antd/es/modal/style/index.js

 // style dependencies


// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("5hJT");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.index-of.js
var es6_array_index_of = __webpack_require__("V7cS");

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

// EXTERNAL MODULE: ../node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("Kz1y");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.date.now.js
var es6_date_now = __webpack_require__("7t+O");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.for-each.js
var es6_array_for_each = __webpack_require__("7lGJ");

// EXTERNAL MODULE: ../node_modules/babel-runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("Zv/C");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ../node_modules/babel-runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("Dkg+");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ../node_modules/babel-runtime/helpers/inherits.js
var inherits = __webpack_require__("Gjrs");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ../node_modules/react-dom/index.js
var react_dom = __webpack_require__("xARA");

// EXTERNAL MODULE: ../node_modules/rc-util/es/KeyCode.js
var KeyCode = __webpack_require__("zAXs");

// EXTERNAL MODULE: ../node_modules/rc-util/es/Dom/contains.js
var contains = __webpack_require__("p82W");

// EXTERNAL MODULE: ../node_modules/rc-util/es/switchScrollingEffect.js
var switchScrollingEffect = __webpack_require__("hq6L");

// EXTERNAL MODULE: ../node_modules/rc-animate/es/Animate.js + 5 modules
var Animate = __webpack_require__("YSJY");

// CONCATENATED MODULE: ../node_modules/rc-dialog/es/LazyRenderBox.js







var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  }
  return t;
};



var LazyRenderBox_LazyRenderBox = function (_React$Component) {
  inherits_default()(LazyRenderBox, _React$Component);

  function LazyRenderBox() {
    classCallCheck_default()(this, LazyRenderBox);

    return possibleConstructorReturn_default()(this, _React$Component.apply(this, arguments));
  }

  LazyRenderBox.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    if (nextProps.forceRender) {
      return true;
    }

    return !!nextProps.hiddenClassName || !!nextProps.visible;
  };

  LazyRenderBox.prototype.render = function render() {
    var _a = this.props,
        className = _a.className,
        hiddenClassName = _a.hiddenClassName,
        visible = _a.visible,
        forceRender = _a.forceRender,
        restProps = __rest(_a, ["className", "hiddenClassName", "visible", "forceRender"]);

    var useClassName = className;

    if (!!hiddenClassName && !visible) {
      useClassName += " " + hiddenClassName;
    }

    return react["createElement"]("div", extends_default()({}, restProps, {
      className: useClassName
    }));
  };

  return LazyRenderBox;
}(react["Component"]);

/* harmony default export */ var es_LazyRenderBox = (LazyRenderBox_LazyRenderBox);
// CONCATENATED MODULE: ../node_modules/rc-dialog/es/Dialog.js













var uuid = 0;
/* eslint react/no-is-mounted:0 */

function getScroll(w, top) {
  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
  var method = 'scroll' + (top ? 'Top' : 'Left');

  if (typeof ret !== 'number') {
    var d = w.document;
    ret = d.documentElement[method];

    if (typeof ret !== 'number') {
      ret = d.body[method];
    }
  }

  return ret;
}

function setTransformOrigin(node, value) {
  var style = node.style;
  ['Webkit', 'Moz', 'Ms', 'ms'].forEach(function (prefix) {
    style[prefix + 'TransformOrigin'] = value;
  });
  style['transformOrigin'] = value;
}

function Dialog_offset(el) {
  var rect = el.getBoundingClientRect();
  var pos = {
    left: rect.left,
    top: rect.top
  };
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScroll(w);
  pos.top += getScroll(w, true);
  return pos;
}

var cacheOverflow = {};

var Dialog_Dialog = function (_React$Component) {
  inherits_default()(Dialog, _React$Component);

  function Dialog(props) {
    classCallCheck_default()(this, Dialog);

    var _this = possibleConstructorReturn_default()(this, _React$Component.call(this, props));

    _this.inTransition = false;

    _this.onAnimateLeave = function () {
      var afterClose = _this.props.afterClose; // need demo?
      // https://github.com/react-component/dialog/pull/28

      if (_this.wrap) {
        _this.wrap.style.display = 'none';
      }

      _this.inTransition = false;

      _this.switchScrollingEffect();

      if (afterClose) {
        afterClose();
      }
    };

    _this.onDialogMouseDown = function () {
      _this.dialogMouseDown = true;
    };

    _this.onMaskMouseUp = function () {
      if (_this.dialogMouseDown) {
        _this.timeoutId = setTimeout(function () {
          _this.dialogMouseDown = false;
        }, 0);
      }
    };

    _this.onMaskClick = function (e) {
      // android trigger click on open (fastclick??)
      if (Date.now() - _this.openTime < 300) {
        return;
      }

      if (e.target === e.currentTarget && !_this.dialogMouseDown) {
        _this.close(e);
      }
    };

    _this.onKeyDown = function (e) {
      var props = _this.props;

      if (props.keyboard && e.keyCode === KeyCode["a" /* default */].ESC) {
        e.stopPropagation();

        _this.close(e);

        return;
      } // keep focus inside dialog


      if (props.visible) {
        if (e.keyCode === KeyCode["a" /* default */].TAB) {
          var activeElement = document.activeElement;
          var sentinelStart = _this.sentinelStart;

          if (e.shiftKey) {
            if (activeElement === sentinelStart) {
              _this.sentinelEnd.focus();
            }
          } else if (activeElement === _this.sentinelEnd) {
            sentinelStart.focus();
          }
        }
      }
    };

    _this.getDialogElement = function () {
      var props = _this.props;
      var closable = props.closable;
      var prefixCls = props.prefixCls;
      var dest = {};

      if (props.width !== undefined) {
        dest.width = props.width;
      }

      if (props.height !== undefined) {
        dest.height = props.height;
      }

      var footer = void 0;

      if (props.footer) {
        footer = react["createElement"]("div", {
          className: prefixCls + '-footer',
          ref: _this.saveRef('footer')
        }, props.footer);
      }

      var header = void 0;

      if (props.title) {
        header = react["createElement"]("div", {
          className: prefixCls + '-header',
          ref: _this.saveRef('header')
        }, react["createElement"]("div", {
          className: prefixCls + '-title',
          id: _this.titleId
        }, props.title));
      }

      var closer = void 0;

      if (closable) {
        closer = react["createElement"]("button", {
          type: "button",
          onClick: _this.close,
          "aria-label": "Close",
          className: prefixCls + '-close'
        }, props.closeIcon || react["createElement"]("span", {
          className: prefixCls + '-close-x'
        }));
      }

      var style = extends_default()({}, props.style, dest);

      var sentinelStyle = {
        width: 0,
        height: 0,
        overflow: 'hidden'
      };

      var transitionName = _this.getTransitionName();

      var dialogElement = react["createElement"](es_LazyRenderBox, {
        key: "dialog-element",
        role: "document",
        ref: _this.saveRef('dialog'),
        style: style,
        className: prefixCls + ' ' + (props.className || ''),
        visible: props.visible,
        forceRender: props.forceRender,
        onMouseDown: _this.onDialogMouseDown
      }, react["createElement"]("div", {
        tabIndex: 0,
        ref: _this.saveRef('sentinelStart'),
        style: sentinelStyle,
        "aria-hidden": "true"
      }), react["createElement"]("div", {
        className: prefixCls + '-content'
      }, closer, header, react["createElement"]("div", extends_default()({
        className: prefixCls + '-body',
        style: props.bodyStyle,
        ref: _this.saveRef('body')
      }, props.bodyProps), props.children), footer), react["createElement"]("div", {
        tabIndex: 0,
        ref: _this.saveRef('sentinelEnd'),
        style: sentinelStyle,
        "aria-hidden": "true"
      }));
      return react["createElement"](Animate["a" /* default */], {
        key: "dialog",
        showProp: "visible",
        onLeave: _this.onAnimateLeave,
        transitionName: transitionName,
        component: "",
        transitionAppear: true
      }, props.visible || !props.destroyOnClose ? dialogElement : null);
    };

    _this.getZIndexStyle = function () {
      var style = {};
      var props = _this.props;

      if (props.zIndex !== undefined) {
        style.zIndex = props.zIndex;
      }

      return style;
    };

    _this.getWrapStyle = function () {
      return extends_default()({}, _this.getZIndexStyle(), _this.props.wrapStyle);
    };

    _this.getMaskStyle = function () {
      return extends_default()({}, _this.getZIndexStyle(), _this.props.maskStyle);
    };

    _this.getMaskElement = function () {
      var props = _this.props;
      var maskElement = void 0;

      if (props.mask) {
        var maskTransition = _this.getMaskTransitionName();

        maskElement = react["createElement"](es_LazyRenderBox, extends_default()({
          style: _this.getMaskStyle(),
          key: "mask",
          className: props.prefixCls + '-mask',
          hiddenClassName: props.prefixCls + '-mask-hidden',
          visible: props.visible
        }, props.maskProps));

        if (maskTransition) {
          maskElement = react["createElement"](Animate["a" /* default */], {
            key: "mask",
            showProp: "visible",
            transitionAppear: true,
            component: "",
            transitionName: maskTransition
          }, maskElement);
        }
      }

      return maskElement;
    };

    _this.getMaskTransitionName = function () {
      var props = _this.props;
      var transitionName = props.maskTransitionName;
      var animation = props.maskAnimation;

      if (!transitionName && animation) {
        transitionName = props.prefixCls + '-' + animation;
      }

      return transitionName;
    };

    _this.getTransitionName = function () {
      var props = _this.props;
      var transitionName = props.transitionName;
      var animation = props.animation;

      if (!transitionName && animation) {
        transitionName = props.prefixCls + '-' + animation;
      }

      return transitionName;
    };

    _this.switchScrollingEffect = function () {
      var getOpenCount = _this.props.getOpenCount;
      var openCount = getOpenCount();

      if (openCount === 1) {
        if (cacheOverflow.hasOwnProperty('overflowX')) {
          return;
        }

        cacheOverflow = {
          overflowX: document.body.style.overflowX,
          overflowY: document.body.style.overflowY,
          overflow: document.body.style.overflow
        };
        Object(switchScrollingEffect["a" /* default */])(); // Must be set after switchScrollingEffect

        document.body.style.overflow = 'hidden';
      } else if (!openCount) {
        // IE browser doesn't merge overflow style, need to set it separately
        // https://github.com/ant-design/ant-design/issues/19393
        if (cacheOverflow.overflow !== undefined) {
          document.body.style.overflow = cacheOverflow.overflow;
        }

        if (cacheOverflow.overflowX !== undefined) {
          document.body.style.overflowX = cacheOverflow.overflowX;
        }

        if (cacheOverflow.overflowY !== undefined) {
          document.body.style.overflowY = cacheOverflow.overflowY;
        }

        cacheOverflow = {};
        Object(switchScrollingEffect["a" /* default */])(true);
      }
    };

    _this.close = function (e) {
      var onClose = _this.props.onClose;

      if (onClose) {
        onClose(e);
      }
    };

    _this.saveRef = function (name) {
      return function (node) {
        _this[name] = node;
      };
    };

    _this.titleId = 'rcDialogTitle' + uuid++;
    return _this;
  }

  Dialog.prototype.componentDidMount = function componentDidMount() {
    this.componentDidUpdate({}); // if forceRender is true, set element style display to be none;

    if ((this.props.forceRender || this.props.getContainer === false && !this.props.visible) && this.wrap) {
      this.wrap.style.display = 'none';
    }
  };

  Dialog.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var props = this.props;
    var mousePosition = this.props.mousePosition;

    if (props.visible) {
      // first show
      if (!prevProps.visible) {
        this.openTime = Date.now();
        this.switchScrollingEffect();
        this.tryFocus();
        var dialogNode = react_dom["findDOMNode"](this.dialog);

        if (mousePosition) {
          var elOffset = Dialog_offset(dialogNode);
          setTransformOrigin(dialogNode, mousePosition.x - elOffset.left + 'px ' + (mousePosition.y - elOffset.top) + 'px');
        } else {
          setTransformOrigin(dialogNode, '');
        }
      }
    } else if (prevProps.visible) {
      this.inTransition = true;

      if (props.mask && this.lastOutSideFocusNode) {
        try {
          this.lastOutSideFocusNode.focus();
        } catch (e) {
          this.lastOutSideFocusNode = null;
        }

        this.lastOutSideFocusNode = null;
      }
    }
  };

  Dialog.prototype.componentWillUnmount = function componentWillUnmount() {
    var _props = this.props,
        visible = _props.visible,
        getOpenCount = _props.getOpenCount;

    if ((visible || this.inTransition) && !getOpenCount()) {
      this.switchScrollingEffect();
    }

    clearTimeout(this.timeoutId);
  };

  Dialog.prototype.tryFocus = function tryFocus() {
    if (!Object(contains["a" /* default */])(this.wrap, document.activeElement)) {
      this.lastOutSideFocusNode = document.activeElement;
      this.sentinelStart.focus();
    }
  };

  Dialog.prototype.render = function render() {
    var props = this.props;
    var prefixCls = props.prefixCls,
        maskClosable = props.maskClosable;
    var style = this.getWrapStyle(); // clear hide display
    // and only set display after async anim, not here for hide

    if (props.visible) {
      style.display = null;
    }

    return react["createElement"]("div", null, this.getMaskElement(), react["createElement"]("div", extends_default()({
      tabIndex: -1,
      onKeyDown: this.onKeyDown,
      className: prefixCls + '-wrap ' + (props.wrapClassName || ''),
      ref: this.saveRef('wrap'),
      onClick: maskClosable ? this.onMaskClick : null,
      onMouseUp: maskClosable ? this.onMaskMouseUp : null,
      role: "dialog",
      "aria-labelledby": props.title ? this.titleId : null,
      style: style
    }, props.wrapProps), this.getDialogElement()));
  };

  return Dialog;
}(react["Component"]);

/* harmony default export */ var es_Dialog = (Dialog_Dialog);
Dialog_Dialog.defaultProps = {
  className: '',
  mask: true,
  visible: false,
  keyboard: true,
  closable: true,
  maskClosable: true,
  destroyOnClose: false,
  prefixCls: 'rc-dialog'
};
// EXTERNAL MODULE: ../node_modules/rc-util/es/PortalWrapper.js
var PortalWrapper = __webpack_require__("tqkS");

// CONCATENATED MODULE: ../node_modules/rc-dialog/es/DialogWrap.js



 // fix issue #10656

/*
* getContainer remarks
* Custom container should not be return, because in the Portal component, it will remove the
* return container element here, if the custom container is the only child of it's component,
* like issue #10656, It will has a conflict with removeChild method in react-dom.
* So here should add a child (div element) to custom container.
* */

/* harmony default export */ var DialogWrap = (function (props) {
  var visible = props.visible,
      getContainer = props.getContainer,
      forceRender = props.forceRender; // 渲染在当前 dom 里；

  if (getContainer === false) {
    return react["createElement"](es_Dialog, extends_default()({}, props, {
      getOpenCount: function getOpenCount() {
        return 2;
      }
    }));
  }

  return react["createElement"](PortalWrapper["a" /* default */], {
    visible: visible,
    forceRender: forceRender,
    getContainer: getContainer
  }, function (childProps) {
    return react["createElement"](es_Dialog, extends_default()({}, props, childProps));
  });
});
// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__("W0B4");

// EXTERNAL MODULE: ../node_modules/classnames/index.js
var classnames = __webpack_require__("8Jek");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ../node_modules/rc-util/es/Dom/addEventListener.js
var addEventListener = __webpack_require__("4Alm");

// EXTERNAL MODULE: ../node_modules/antd/es/modal/locale.js
var modal_locale = __webpack_require__("7/fk");

// EXTERNAL MODULE: ../node_modules/antd/es/button/index.js + 2 modules
var es_button = __webpack_require__("H4M2");

// EXTERNAL MODULE: ../node_modules/antd/es/locale-provider/LocaleReceiver.js + 1 modules
var LocaleReceiver = __webpack_require__("fj6J");

// EXTERNAL MODULE: ../node_modules/antd/es/config-provider/context.js + 4 modules
var context = __webpack_require__("Bfez");

// CONCATENATED MODULE: ../node_modules/antd/es/modal/Modal.js








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

var Modal_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};











var Modal_mousePosition;
var destroyFns = []; // ref: https://github.com/ant-design/ant-design/issues/15795

var getClickPosition = function getClickPosition(e) {
  Modal_mousePosition = {
    x: e.pageX,
    y: e.pageY
  }; // 100ms 内发生过点击事件，则从点击位置动画展示
  // 否则直接 zoom 展示
  // 这样可以兼容非点击方式展开

  setTimeout(function () {
    return Modal_mousePosition = null;
  }, 100);
}; // 只有点击事件支持从鼠标位置动画展开


if (typeof window !== 'undefined' && window.document && window.document.documentElement) {
  Object(addEventListener["a" /* default */])(document.documentElement, 'click', getClickPosition);
}

var Modal_Modal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal() {
    var _this;

    _classCallCheck(this, Modal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Modal).apply(this, arguments));

    _this.handleCancel = function (e) {
      var onCancel = _this.props.onCancel;

      if (onCancel) {
        onCancel(e);
      }
    };

    _this.handleOk = function (e) {
      var onOk = _this.props.onOk;

      if (onOk) {
        onOk(e);
      }
    };

    _this.renderFooter = function (locale) {
      var _this$props = _this.props,
          okText = _this$props.okText,
          okType = _this$props.okType,
          cancelText = _this$props.cancelText,
          confirmLoading = _this$props.confirmLoading;
      return react["createElement"]("div", null, react["createElement"](es_button["a" /* default */], _extends({
        onClick: _this.handleCancel
      }, _this.props.cancelButtonProps), cancelText || locale.cancelText), react["createElement"](es_button["a" /* default */], _extends({
        type: okType,
        loading: confirmLoading,
        onClick: _this.handleOk
      }, _this.props.okButtonProps), okText || locale.okText));
    };

    _this.renderModal = function (_ref) {
      var getContextPopupContainer = _ref.getPopupContainer,
          getPrefixCls = _ref.getPrefixCls;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          footer = _a.footer,
          visible = _a.visible,
          wrapClassName = _a.wrapClassName,
          centered = _a.centered,
          getContainer = _a.getContainer,
          closeIcon = _a.closeIcon,
          restProps = Modal_rest(_a, ["prefixCls", "footer", "visible", "wrapClassName", "centered", "getContainer", "closeIcon"]);

      var prefixCls = getPrefixCls('modal', customizePrefixCls);
      var defaultFooter = react["createElement"](LocaleReceiver["a" /* default */], {
        componentName: "Modal",
        defaultLocale: Object(modal_locale["b" /* getConfirmLocale */])()
      }, _this.renderFooter);
      var closeIconToRender = react["createElement"]("span", {
        className: "".concat(prefixCls, "-close-x")
      }, closeIcon || react["createElement"](es_icon["a" /* default */], {
        className: "".concat(prefixCls, "-close-icon"),
        type: "close"
      }));
      return react["createElement"](DialogWrap, _extends({}, restProps, {
        getContainer: getContainer === undefined ? getContextPopupContainer : getContainer,
        prefixCls: prefixCls,
        wrapClassName: classnames_default()(_defineProperty({}, "".concat(prefixCls, "-centered"), !!centered), wrapClassName),
        footer: footer === undefined ? defaultFooter : footer,
        visible: visible,
        mousePosition: Modal_mousePosition,
        onClose: _this.handleCancel,
        closeIcon: closeIconToRender
      }));
    };

    return _this;
  }

  _createClass(Modal, [{
    key: "render",
    value: function render() {
      return react["createElement"](context["a" /* ConfigConsumer */], null, this.renderModal);
    }
  }]);

  return Modal;
}(react["Component"]);


Modal_Modal.defaultProps = {
  width: 520,
  transitionName: 'zoom',
  maskTransitionName: 'fade',
  confirmLoading: false,
  visible: false,
  okType: 'primary'
};
Modal_Modal.propTypes = {
  prefixCls: prop_types["string"],
  onOk: prop_types["func"],
  onCancel: prop_types["func"],
  okText: prop_types["node"],
  cancelText: prop_types["node"],
  centered: prop_types["bool"],
  width: prop_types["oneOfType"]([prop_types["number"], prop_types["string"]]),
  confirmLoading: prop_types["bool"],
  visible: prop_types["bool"],
  footer: prop_types["node"],
  title: prop_types["node"],
  closable: prop_types["bool"],
  closeIcon: prop_types["node"]
};
// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.function.bind.js
var es6_function_bind = __webpack_require__("o7PZ");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.some.js
var es6_array_some = __webpack_require__("VNvs");

// CONCATENATED MODULE: ../node_modules/antd/es/modal/ActionButton.js







function ActionButton_typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    ActionButton_typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    ActionButton_typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return ActionButton_typeof(obj);
}

function ActionButton_extends() {
  ActionButton_extends = Object.assign || function (target) {
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

  return ActionButton_extends.apply(this, arguments);
}

function ActionButton_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function ActionButton_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function ActionButton_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) ActionButton_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) ActionButton_defineProperties(Constructor, staticProps);
  return Constructor;
}

function ActionButton_possibleConstructorReturn(self, call) {
  if (call && (ActionButton_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return ActionButton_assertThisInitialized(self);
}

function ActionButton_assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function ActionButton_getPrototypeOf(o) {
  ActionButton_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return ActionButton_getPrototypeOf(o);
}

function ActionButton_inherits(subClass, superClass) {
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
  if (superClass) ActionButton_setPrototypeOf(subClass, superClass);
}

function ActionButton_setPrototypeOf(o, p) {
  ActionButton_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return ActionButton_setPrototypeOf(o, p);
}





var ActionButton_ActionButton =
/*#__PURE__*/
function (_React$Component) {
  ActionButton_inherits(ActionButton, _React$Component);

  function ActionButton(props) {
    var _this;

    ActionButton_classCallCheck(this, ActionButton);

    _this = ActionButton_possibleConstructorReturn(this, ActionButton_getPrototypeOf(ActionButton).call(this, props));

    _this.onClick = function () {
      var _this$props = _this.props,
          actionFn = _this$props.actionFn,
          closeModal = _this$props.closeModal;

      if (actionFn) {
        var ret;

        if (actionFn.length) {
          ret = actionFn(closeModal);
        } else {
          ret = actionFn();

          if (!ret) {
            closeModal();
          }
        }

        if (ret && ret.then) {
          _this.setState({
            loading: true
          });

          ret.then(function () {
            // It's unnecessary to set loading=false, for the Modal will be unmounted after close.
            // this.setState({ loading: false });
            closeModal.apply(void 0, arguments);
          }, function (e) {
            // Emit error when catch promise reject
            // eslint-disable-next-line no-console
            console.error(e); // See: https://github.com/ant-design/ant-design/issues/6183

            _this.setState({
              loading: false
            });
          });
        }
      } else {
        closeModal();
      }
    };

    _this.state = {
      loading: false
    };
    return _this;
  }

  ActionButton_createClass(ActionButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.autoFocus) {
        var $this = react_dom["findDOMNode"](this);
        this.timeoutId = setTimeout(function () {
          return $this.focus();
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timeoutId);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          type = _this$props2.type,
          children = _this$props2.children,
          buttonProps = _this$props2.buttonProps;
      var loading = this.state.loading;
      return react["createElement"](es_button["a" /* default */], ActionButton_extends({
        type: type,
        onClick: this.onClick,
        loading: loading
      }, buttonProps), children);
    }
  }]);

  return ActionButton;
}(react["Component"]);


// EXTERNAL MODULE: ../node_modules/antd/es/_util/warning.js
var warning = __webpack_require__("papw");

// CONCATENATED MODULE: ../node_modules/antd/es/modal/confirm.js





function confirm_extends() {
  confirm_extends = Object.assign || function (target) {
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

  return confirm_extends.apply(this, arguments);
}

function confirm_defineProperty(obj, key, value) {
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









var IS_REACT_16 = !!react_dom["createPortal"];

var confirm_ConfirmDialog = function ConfirmDialog(props) {
  var onCancel = props.onCancel,
      onOk = props.onOk,
      close = props.close,
      zIndex = props.zIndex,
      afterClose = props.afterClose,
      visible = props.visible,
      keyboard = props.keyboard,
      centered = props.centered,
      getContainer = props.getContainer,
      maskStyle = props.maskStyle,
      okButtonProps = props.okButtonProps,
      cancelButtonProps = props.cancelButtonProps,
      _props$iconType = props.iconType,
      iconType = _props$iconType === void 0 ? 'question-circle' : _props$iconType;
  Object(warning["a" /* default */])(!('iconType' in props), 'Modal', "The property 'iconType' is deprecated. Use the property 'icon' instead."); // 支持传入{ icon: null }来隐藏`Modal.confirm`默认的Icon

  var icon = props.icon === undefined ? iconType : props.icon;
  var okType = props.okType || 'primary';
  var prefixCls = props.prefixCls || 'ant-modal';
  var contentPrefixCls = "".concat(prefixCls, "-confirm"); // 默认为 true，保持向下兼容

  var okCancel = 'okCancel' in props ? props.okCancel : true;
  var width = props.width || 416;
  var style = props.style || {};
  var mask = props.mask === undefined ? true : props.mask; // 默认为 false，保持旧版默认行为

  var maskClosable = props.maskClosable === undefined ? false : props.maskClosable;
  var runtimeLocale = Object(modal_locale["b" /* getConfirmLocale */])();
  var okText = props.okText || (okCancel ? runtimeLocale.okText : runtimeLocale.justOkText);
  var cancelText = props.cancelText || runtimeLocale.cancelText;
  var autoFocusButton = props.autoFocusButton === null ? false : props.autoFocusButton || 'ok';
  var transitionName = props.transitionName || 'zoom';
  var maskTransitionName = props.maskTransitionName || 'fade';
  var classString = classnames_default()(contentPrefixCls, "".concat(contentPrefixCls, "-").concat(props.type), props.className);
  var cancelButton = okCancel && react["createElement"](ActionButton_ActionButton, {
    actionFn: onCancel,
    closeModal: close,
    autoFocus: autoFocusButton === 'cancel',
    buttonProps: cancelButtonProps
  }, cancelText);
  var iconNode = typeof icon === 'string' ? react["createElement"](es_icon["a" /* default */], {
    type: icon
  }) : icon;
  return react["createElement"](Modal_Modal, {
    prefixCls: prefixCls,
    className: classString,
    wrapClassName: classnames_default()(confirm_defineProperty({}, "".concat(contentPrefixCls, "-centered"), !!props.centered)),
    onCancel: function onCancel() {
      return close({
        triggerCancel: true
      });
    },
    visible: visible,
    title: "",
    transitionName: transitionName,
    footer: "",
    maskTransitionName: maskTransitionName,
    mask: mask,
    maskClosable: maskClosable,
    maskStyle: maskStyle,
    style: style,
    width: width,
    zIndex: zIndex,
    afterClose: afterClose,
    keyboard: keyboard,
    centered: centered,
    getContainer: getContainer
  }, react["createElement"]("div", {
    className: "".concat(contentPrefixCls, "-body-wrapper")
  }, react["createElement"]("div", {
    className: "".concat(contentPrefixCls, "-body")
  }, iconNode, props.title === undefined ? null : react["createElement"]("span", {
    className: "".concat(contentPrefixCls, "-title")
  }, props.title), react["createElement"]("div", {
    className: "".concat(contentPrefixCls, "-content")
  }, props.content)), react["createElement"]("div", {
    className: "".concat(contentPrefixCls, "-btns")
  }, cancelButton, react["createElement"](ActionButton_ActionButton, {
    type: okType,
    actionFn: onOk,
    closeModal: close,
    autoFocus: autoFocusButton === 'ok',
    buttonProps: okButtonProps
  }, okText))));
};

function confirm_confirm(config) {
  var div = document.createElement('div');
  document.body.appendChild(div); // eslint-disable-next-line no-use-before-define

  var currentConfig = confirm_extends(confirm_extends({}, config), {
    close: close,
    visible: true
  });

  function destroy() {
    var unmountResult = react_dom["unmountComponentAtNode"](div);

    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var triggerCancel = args.some(function (param) {
      return param && param.triggerCancel;
    });

    if (config.onCancel && triggerCancel) {
      config.onCancel.apply(config, args);
    }

    for (var i = 0; i < destroyFns.length; i++) {
      var fn = destroyFns[i]; // eslint-disable-next-line no-use-before-define

      if (fn === close) {
        destroyFns.splice(i, 1);
        break;
      }
    }
  }

  function render(props) {
    react_dom["render"](react["createElement"](confirm_ConfirmDialog, props), div);
  }

  function close() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    currentConfig = confirm_extends(confirm_extends({}, currentConfig), {
      visible: false,
      afterClose: destroy.bind.apply(destroy, [this].concat(args))
    });

    if (IS_REACT_16) {
      render(currentConfig);
    } else {
      destroy.apply(void 0, args);
    }
  }

  function update(newConfig) {
    currentConfig = confirm_extends(confirm_extends({}, currentConfig), newConfig);
    render(currentConfig);
  }

  render(currentConfig);
  destroyFns.push(close);
  return {
    destroy: close,
    update: update
  };
}
// CONCATENATED MODULE: ../node_modules/antd/es/modal/index.js


function modal_extends() {
  modal_extends = Object.assign || function (target) {
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

  return modal_extends.apply(this, arguments);
}






function modalWarn(props) {
  var config = modal_extends({
    type: 'warning',
    icon: react["createElement"](es_icon["a" /* default */], {
      type: "exclamation-circle"
    }),
    okCancel: false
  }, props);

  return confirm_confirm(config);
}

Modal_Modal.info = function infoFn(props) {
  var config = modal_extends({
    type: 'info',
    icon: react["createElement"](es_icon["a" /* default */], {
      type: "info-circle"
    }),
    okCancel: false
  }, props);

  return confirm_confirm(config);
};

Modal_Modal.success = function successFn(props) {
  var config = modal_extends({
    type: 'success',
    icon: react["createElement"](es_icon["a" /* default */], {
      type: "check-circle"
    }),
    okCancel: false
  }, props);

  return confirm_confirm(config);
};

Modal_Modal.error = function errorFn(props) {
  var config = modal_extends({
    type: 'error',
    icon: react["createElement"](es_icon["a" /* default */], {
      type: "close-circle"
    }),
    okCancel: false
  }, props);

  return confirm_confirm(config);
};

Modal_Modal.warning = modalWarn;
Modal_Modal.warn = modalWarn;

Modal_Modal.confirm = function confirmFn(props) {
  var config = modal_extends({
    type: 'confirm',
    okCancel: true
  }, props);

  return confirm_confirm(config);
};

Modal_Modal.destroyAll = function destroyAllFn() {
  while (destroyFns.length) {
    var close = destroyFns.pop();

    if (close) {
      close();
    }
  }
};

/* harmony default export */ var modal = (Modal_Modal);
// EXTERNAL MODULE: ./public/static/d/3896820173.json
var _3896820173 = __webpack_require__("H0W7");

// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__("Wbzz");

// EXTERNAL MODULE: ../node_modules/react-github-button/lib/index.js
var lib = __webpack_require__("EvxU");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ../node_modules/parse-github-url/index.js
var parse_github_url = __webpack_require__("YSbK");
var parse_github_url_default = /*#__PURE__*/__webpack_require__.n(parse_github_url);

// EXTERNAL MODULE: ../node_modules/video-react/dist/video-react.css
var video_react = __webpack_require__("lWP6");

// EXTERNAL MODULE: ../node_modules/video-react/lib/index.js
var video_react_lib = __webpack_require__("KwlR");

// EXTERNAL MODULE: ../@antv/gatsby-theme-antv/site/components/Banner.module.less
var Banner_module = __webpack_require__("o3VU");
var Banner_module_default = /*#__PURE__*/__webpack_require__.n(Banner_module);

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__("4aJ6");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__("t91x");

// EXTERNAL MODULE: ../@antv/gatsby-theme-antv/site/components/Notification.module.less
var Notification_module = __webpack_require__("DNr9");
var Notification_module_default = /*#__PURE__*/__webpack_require__.n(Notification_module);

// CONCATENATED MODULE: ../@antv/gatsby-theme-antv/site/components/Notification.tsx







var numberImages = ['https://gw.alipayobjects.com/zos/antfincdn/IqREAm36K7/1.png', 'https://gw.alipayobjects.com/zos/antfincdn/3fG1Iqjfnz/2.png'];

var Notification_Notification = function Notification(_ref) {
  var _ref$index = _ref.index,
      index = _ref$index === void 0 ? 0 : _ref$index,
      type = _ref.type,
      title = _ref.title,
      date = _ref.date,
      _ref$link = _ref.link,
      link = _ref$link === void 0 ? '' : _ref$link;
  var children = react_default.a.createElement("div", {
    className: Notification_module_default.a.container
  }, react_default.a.createElement("img", {
    className: Notification_module_default.a.number,
    src: numberImages[index],
    alt: index.toString()
  }), react_default.a.createElement("div", {
    className: Notification_module_default.a.content
  }, react_default.a.createElement("p", {
    className: Notification_module_default.a.description
  }, type, " \u2027 ", title), react_default.a.createElement("p", {
    className: Notification_module_default.a.date
  }, date)));

  if (link.startsWith('http')) {
    return react_default.a.createElement("a", {
      href: link,
      target: "_blank",
      rel: "noopener noreferrer",
      className: Notification_module_default.a.notification
    }, children);
  }

  return react_default.a.createElement(gatsby_browser_entry["Link"], {
    to: link,
    className: Notification_module_default.a.notification
  }, children);
};

/* harmony default export */ var components_Notification = (Notification_Notification);
// CONCATENATED MODULE: ../@antv/gatsby-theme-antv/site/components/Banner.tsx



















var backLeftBottom = 'https://gw.alipayobjects.com/zos/basement_prod/441d5eaf-e623-47cd-b9b9-2a581d9ce1e3.svg';

var Banner_Banner = function Banner(_ref) {
  var coverImage = _ref.coverImage,
      title = _ref.title,
      description = _ref.description,
      notifications = _ref.notifications,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      className = _ref.className,
      video = _ref.video,
      _ref$showGithubStars = _ref.showGithubStars,
      showGithubStars = _ref$showGithubStars === void 0 ? true : _ref$showGithubStars,
      _ref$buttons = _ref.buttons,
      buttons = _ref$buttons === void 0 ? [] : _ref$buttons,
      onCloseVideo = _ref.onCloseVideo,
      onPlayVideo = _ref.onPlayVideo;

  var _useTranslation = Object(es["b" /* useTranslation */])(),
      t = _useTranslation.t,
      i18n = _useTranslation.i18n;

  var site = _3896820173.data.site;
  var githubUrl = site.siteMetadata.githubUrl;
  var insNotifications = [{
    type: t('推荐'),
    title: t('AntV 11-22 品牌日：知源·致远'),
    date: '2019.11.22',
    link: '/'
  }, {
    type: t('更新'),
    title: t('G2Plot 图表库发布'),
    date: '2019.11.22',
    link: '/g2plot'
  }];
  var notificationsNode = (notifications || insNotifications).slice(0, 2).map(function (notification, i) {
    return react_default.a.createElement(components_Notification, Object.assign({
      index: i,
      key: i
    }, notification));
  });

  var showVideo = function showVideo() {
    if (onPlayVideo) {
      onPlayVideo();
    }

    modal.info({
      title: 'This is a notification message',
      className: Banner_module_default.a.videoModal,
      onCancel: onCloseVideo,
      content: react_default.a.createElement(video_react_lib["Player"], {
        className: Banner_module_default.a.video,
        autoPlay: true,
        src: "https://mdn.alipayobjects.com/afts/file/A*grJPTKqmP9QAAAAAAAAAAABjAQAAAQ?bz=antv_site"
      }),
      width: '70%'
    });
  };

  var renderButtons = buttons.map(function (button, i) {
    var ButtonLink = button.link.startsWith('http') || button.link.startsWith('#') ? 'a' : gatsby_browser_entry["Link"];
    var buttonProps = {};

    if (button.link.startsWith('http')) {
      buttonProps.target = '_blank';
      buttonProps.rel = 'noopener noreferrer';
    }

    if (ButtonLink === 'a') {
      buttonProps.href = button.link;
    } else {
      buttonProps.to = button.link;
    }

    return react_default.a.createElement(ButtonLink, Object.assign({}, buttonProps, {
      className: Banner_module_default.a.buttonLink,
      key: i
    }), react_default.a.createElement("div", {
      className: classnames_default()(Banner_module_default.a.button, Banner_module_default.a[button.type || ''], 'primary-button'),
      style: button.style
    }, button.text));
  });

  if (video) {
    renderButtons.push(react_default.a.createElement("div", {
      key: "video",
      onClick: showVideo,
      className: Banner_module_default.a.videoButtonWrapper
    }, react_default.a.createElement("div", {
      className: Banner_module_default.a.videoButton
    }, react_default.a.createElement(es_icon["a" /* default */], {
      type: "caret-right",
      className: Banner_module_default.a.videoButtonIcon,
      style: {
        fontSize: '16px',
        color: '#873BF4'
      }
    }), react_default.a.createElement("p", {
      className: Banner_module_default.a.videoButtonText,
      style: {
        fontSize: i18n.language === 'en' ? '7px' : '14px',
        lineHeight: i18n.language === 'en' ? '18px' : '40px'
      }
    }, t('知源・致远')))));
  }

  if (showGithubStars) {
    var githubObj = parse_github_url_default()(githubUrl);

    if (githubObj && githubObj.owner && githubObj.name) {
      renderButtons.push(react_default.a.createElement("div", {
        key: "github",
        className: Banner_module_default.a.githubWrapper
      }, react_default.a.createElement(lib_default.a, {
        type: "stargazers",
        size: "large",
        namespace: githubObj.owner,
        repo: githubObj.name
      })));
    }
  }

  return react_default.a.createElement("section", {
    className: classnames_default()(Banner_module_default.a.wrapper, className),
    style: style
  }, react_default.a.createElement("div", {
    className: Banner_module_default.a.content
  }, react_default.a.createElement("div", {
    className: Banner_module_default.a.text
  }, react_default.a.createElement("div", {
    className: classnames_default()(Banner_module_default.a.title, 'banner-title')
  }, title), react_default.a.createElement("p", {
    className: classnames_default()(Banner_module_default.a.description, 'banner-description')
  }, description), react_default.a.createElement("div", {
    className: classnames_default()(Banner_module_default.a.buttons, 'banner-buttons')
  }, renderButtons)), react_default.a.createElement("div", {
    className: classnames_default()(Banner_module_default.a.notifications, 'notifications')
  }, notificationsNode), react_default.a.createElement("div", {
    className: classnames_default()(Banner_module_default.a.teaser, 'teaser')
  }, react_default.a.createElement("div", {
    className: classnames_default()(Banner_module_default.a.teaserimg, 'teaser-img')
  }, coverImage)), react_default.a.createElement("img", {
    className: Banner_module_default.a.backLeftBottom,
    src: backLeftBottom,
    alt: "back"
  })));
};

/* harmony default export */ var components_Banner = (Banner_Banner);
// EXTERNAL MODULE: ../node_modules/antd/es/grid/style/index.less
var grid_style = __webpack_require__("nnHm");

// CONCATENATED MODULE: ../node_modules/antd/es/grid/style/index.js


// CONCATENATED MODULE: ../node_modules/antd/es/row/style/index.js
 // style dependencies
// deps-lint-skip: grid


// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.is-array.js
var es6_array_is_array = __webpack_require__("+3V6");

// EXTERNAL MODULE: ../node_modules/@ant-design/create-react-context/lib/index.js
var create_react_context_lib = __webpack_require__("1wI9");
var create_react_context_lib_default = /*#__PURE__*/__webpack_require__.n(create_react_context_lib);

// CONCATENATED MODULE: ../node_modules/antd/es/grid/RowContext.js

var RowContext = create_react_context_lib_default()({});
/* harmony default export */ var grid_RowContext = (RowContext);
// EXTERNAL MODULE: ../node_modules/antd/es/_util/type.js
var _util_type = __webpack_require__("UyNX");

// EXTERNAL MODULE: ../node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("W1QL");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("K/PF");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("75LO");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.map.js
var es6_array_map = __webpack_require__("yIlq");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.array.filter.js
var es6_array_filter = __webpack_require__("9p7t");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.date.to-string.js
var es6_date_to_string = __webpack_require__("M/4x");

// CONCATENATED MODULE: ../node_modules/antd/es/_util/responsiveObserve.js












function responsiveObserve_defineProperty(obj, key, value) {
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

function responsiveObserve_extends() {
  responsiveObserve_extends = Object.assign || function (target) {
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

  return responsiveObserve_extends.apply(this, arguments);
} // matchMedia polyfill for
// https://github.com/WickyNilliams/enquire.js/issues/82


var enquire; // TODO: Will be removed in antd 4.0 because we will no longer support ie9

if (typeof window !== 'undefined') {
  var matchMediaPolyfill = function matchMediaPolyfill(mediaQuery) {
    return {
      media: mediaQuery,
      matches: false,
      addListener: function addListener() {},
      removeListener: function removeListener() {}
    };
  }; // ref: https://github.com/ant-design/ant-design/issues/18774


  if (!window.matchMedia) window.matchMedia = matchMediaPolyfill; // eslint-disable-next-line global-require

  enquire = __webpack_require__("495I");
}

var responsiveArray = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
var responsiveMap = {
  xs: '(max-width: 575px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1600px)'
};
var subscribers = [];
var subUid = -1;
var responsiveObserve_screens = {};
var responsiveObserve = {
  dispatch: function dispatch(pointMap) {
    responsiveObserve_screens = pointMap;

    if (subscribers.length < 1) {
      return false;
    }

    subscribers.forEach(function (item) {
      item.func(responsiveObserve_screens);
    });
    return true;
  },
  subscribe: function subscribe(func) {
    if (subscribers.length === 0) {
      this.register();
    }

    var token = (++subUid).toString();
    subscribers.push({
      token: token,
      func: func
    });
    func(responsiveObserve_screens);
    return token;
  },
  unsubscribe: function unsubscribe(token) {
    subscribers = subscribers.filter(function (item) {
      return item.token !== token;
    });

    if (subscribers.length === 0) {
      this.unregister();
    }
  },
  unregister: function unregister() {
    Object.keys(responsiveMap).map(function (screen) {
      return enquire.unregister(responsiveMap[screen]);
    });
  },
  register: function register() {
    var _this = this;

    Object.keys(responsiveMap).map(function (screen) {
      return enquire.register(responsiveMap[screen], {
        match: function match() {
          var pointMap = responsiveObserve_extends(responsiveObserve_extends({}, responsiveObserve_screens), responsiveObserve_defineProperty({}, screen, true));

          _this.dispatch(pointMap);
        },
        unmatch: function unmatch() {
          var pointMap = responsiveObserve_extends(responsiveObserve_extends({}, responsiveObserve_screens), responsiveObserve_defineProperty({}, screen, false));

          _this.dispatch(pointMap);
        },
        // Keep a empty destory to avoid triggering unmatch when unregister
        destroy: function destroy() {}
      });
    });
  }
};
/* harmony default export */ var _util_responsiveObserve = (responsiveObserve);
// CONCATENATED MODULE: ../node_modules/antd/es/grid/row.js










function row_typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    row_typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    row_typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return row_typeof(obj);
}

function row_extends() {
  row_extends = Object.assign || function (target) {
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

  return row_extends.apply(this, arguments);
}

function row_defineProperty(obj, key, value) {
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

function row_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function row_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function row_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) row_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) row_defineProperties(Constructor, staticProps);
  return Constructor;
}

function row_possibleConstructorReturn(self, call) {
  if (call && (row_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return row_assertThisInitialized(self);
}

function row_assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function row_getPrototypeOf(o) {
  row_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return row_getPrototypeOf(o);
}

function row_inherits(subClass, superClass) {
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
  if (superClass) row_setPrototypeOf(subClass, superClass);
}

function row_setPrototypeOf(o, p) {
  row_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return row_setPrototypeOf(o, p);
}

var row_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};








var RowAligns = Object(_util_type["a" /* tuple */])('top', 'middle', 'bottom', 'stretch');
var RowJustify = Object(_util_type["a" /* tuple */])('start', 'end', 'center', 'space-around', 'space-between');

var row_Row =
/*#__PURE__*/
function (_React$Component) {
  row_inherits(Row, _React$Component);

  function Row() {
    var _this;

    row_classCallCheck(this, Row);

    _this = row_possibleConstructorReturn(this, row_getPrototypeOf(Row).apply(this, arguments));
    _this.state = {
      screens: {}
    };

    _this.renderRow = function (_ref) {
      var _classNames;

      var getPrefixCls = _ref.getPrefixCls;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          type = _a.type,
          justify = _a.justify,
          align = _a.align,
          className = _a.className,
          style = _a.style,
          children = _a.children,
          others = row_rest(_a, ["prefixCls", "type", "justify", "align", "className", "style", "children"]);

      var prefixCls = getPrefixCls('row', customizePrefixCls);

      var gutter = _this.getGutter();

      var classes = classnames_default()((_classNames = {}, row_defineProperty(_classNames, prefixCls, !type), row_defineProperty(_classNames, "".concat(prefixCls, "-").concat(type), type), row_defineProperty(_classNames, "".concat(prefixCls, "-").concat(type, "-").concat(justify), type && justify), row_defineProperty(_classNames, "".concat(prefixCls, "-").concat(type, "-").concat(align), type && align), _classNames), className);

      var rowStyle = row_extends(row_extends(row_extends({}, gutter[0] > 0 ? {
        marginLeft: gutter[0] / -2,
        marginRight: gutter[0] / -2
      } : {}), gutter[1] > 0 ? {
        marginTop: gutter[1] / -2,
        marginBottom: gutter[1] / -2
      } : {}), style);

      var otherProps = row_extends({}, others);

      delete otherProps.gutter;
      return react["createElement"](grid_RowContext.Provider, {
        value: {
          gutter: gutter
        }
      }, react["createElement"]("div", row_extends({}, otherProps, {
        className: classes,
        style: rowStyle
      }), children));
    };

    return _this;
  }

  row_createClass(Row, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.token = _util_responsiveObserve.subscribe(function (screens) {
        var gutter = _this2.props.gutter;

        if (row_typeof(gutter) === 'object' || Array.isArray(gutter) && (row_typeof(gutter[0]) === 'object' || row_typeof(gutter[1]) === 'object')) {
          _this2.setState({
            screens: screens
          });
        }
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _util_responsiveObserve.unsubscribe(this.token);
    }
  }, {
    key: "getGutter",
    value: function getGutter() {
      var results = [0, 0];
      var gutter = this.props.gutter;
      var screens = this.state.screens;
      var normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, 0];
      normalizedGutter.forEach(function (g, index) {
        if (row_typeof(g) === 'object') {
          for (var i = 0; i < responsiveArray.length; i++) {
            var breakpoint = responsiveArray[i];

            if (screens[breakpoint] && g[breakpoint] !== undefined) {
              results[index] = g[breakpoint];
              break;
            }
          }
        } else {
          results[index] = g || 0;
        }
      });
      return results;
    }
  }, {
    key: "render",
    value: function render() {
      return react["createElement"](context["a" /* ConfigConsumer */], null, this.renderRow);
    }
  }]);

  return Row;
}(react["Component"]);


row_Row.defaultProps = {
  gutter: 0
};
row_Row.propTypes = {
  type: prop_types["oneOf"](['flex']),
  align: prop_types["oneOf"](RowAligns),
  justify: prop_types["oneOf"](RowJustify),
  className: prop_types["string"],
  children: prop_types["node"],
  gutter: prop_types["oneOfType"]([prop_types["object"], prop_types["number"], prop_types["array"]]),
  prefixCls: prop_types["string"]
};
// CONCATENATED MODULE: ../node_modules/antd/es/row/index.js

/* harmony default export */ var row = (row_Row);
// CONCATENATED MODULE: ../node_modules/antd/es/col/style/index.js
 // style dependencies
// deps-lint-skip: grid


// CONCATENATED MODULE: ../node_modules/antd/es/grid/col.js









function col_defineProperty(obj, key, value) {
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

function col_extends() {
  col_extends = Object.assign || function (target) {
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

  return col_extends.apply(this, arguments);
}

function col_typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    col_typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    col_typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return col_typeof(obj);
}

function col_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function col_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function col_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) col_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) col_defineProperties(Constructor, staticProps);
  return Constructor;
}

function col_possibleConstructorReturn(self, call) {
  if (call && (col_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return col_assertThisInitialized(self);
}

function col_getPrototypeOf(o) {
  col_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return col_getPrototypeOf(o);
}

function col_assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function col_inherits(subClass, superClass) {
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
  if (superClass) col_setPrototypeOf(subClass, superClass);
}

function col_setPrototypeOf(o, p) {
  col_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return col_setPrototypeOf(o, p);
}

var col_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};






var objectOrNumber = prop_types["oneOfType"]([prop_types["object"], prop_types["number"]]);

var col_Col =
/*#__PURE__*/
function (_React$Component) {
  col_inherits(Col, _React$Component);

  function Col() {
    var _this;

    col_classCallCheck(this, Col);

    _this = col_possibleConstructorReturn(this, col_getPrototypeOf(Col).apply(this, arguments));

    _this.renderCol = function (_ref) {
      var _classNames;

      var getPrefixCls = _ref.getPrefixCls;

      var _assertThisInitialize = col_assertThisInitialized(_this),
          props = _assertThisInitialize.props;

      var customizePrefixCls = props.prefixCls,
          span = props.span,
          order = props.order,
          offset = props.offset,
          push = props.push,
          pull = props.pull,
          className = props.className,
          children = props.children,
          others = col_rest(props, ["prefixCls", "span", "order", "offset", "push", "pull", "className", "children"]);

      var prefixCls = getPrefixCls('col', customizePrefixCls);
      var sizeClassObj = {};
      ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].forEach(function (size) {
        var _extends2;

        var sizeProps = {};
        var propSize = props[size];

        if (typeof propSize === 'number') {
          sizeProps.span = propSize;
        } else if (col_typeof(propSize) === 'object') {
          sizeProps = propSize || {};
        }

        delete others[size];
        sizeClassObj = col_extends(col_extends({}, sizeClassObj), (_extends2 = {}, col_defineProperty(_extends2, "".concat(prefixCls, "-").concat(size, "-").concat(sizeProps.span), sizeProps.span !== undefined), col_defineProperty(_extends2, "".concat(prefixCls, "-").concat(size, "-order-").concat(sizeProps.order), sizeProps.order || sizeProps.order === 0), col_defineProperty(_extends2, "".concat(prefixCls, "-").concat(size, "-offset-").concat(sizeProps.offset), sizeProps.offset || sizeProps.offset === 0), col_defineProperty(_extends2, "".concat(prefixCls, "-").concat(size, "-push-").concat(sizeProps.push), sizeProps.push || sizeProps.push === 0), col_defineProperty(_extends2, "".concat(prefixCls, "-").concat(size, "-pull-").concat(sizeProps.pull), sizeProps.pull || sizeProps.pull === 0), _extends2));
      });
      var classes = classnames_default()(prefixCls, (_classNames = {}, col_defineProperty(_classNames, "".concat(prefixCls, "-").concat(span), span !== undefined), col_defineProperty(_classNames, "".concat(prefixCls, "-order-").concat(order), order), col_defineProperty(_classNames, "".concat(prefixCls, "-offset-").concat(offset), offset), col_defineProperty(_classNames, "".concat(prefixCls, "-push-").concat(push), push), col_defineProperty(_classNames, "".concat(prefixCls, "-pull-").concat(pull), pull), _classNames), className, sizeClassObj);
      return react["createElement"](grid_RowContext.Consumer, null, function (_ref2) {
        var gutter = _ref2.gutter;
        var style = others.style;

        if (gutter) {
          style = col_extends(col_extends(col_extends({}, gutter[0] > 0 ? {
            paddingLeft: gutter[0] / 2,
            paddingRight: gutter[0] / 2
          } : {}), gutter[1] > 0 ? {
            paddingTop: gutter[1] / 2,
            paddingBottom: gutter[1] / 2
          } : {}), style);
        }

        return react["createElement"]("div", col_extends({}, others, {
          style: style,
          className: classes
        }), children);
      });
    };

    return _this;
  }

  col_createClass(Col, [{
    key: "render",
    value: function render() {
      return react["createElement"](context["a" /* ConfigConsumer */], null, this.renderCol);
    }
  }]);

  return Col;
}(react["Component"]);


col_Col.propTypes = {
  span: prop_types["number"],
  order: prop_types["number"],
  offset: prop_types["number"],
  push: prop_types["number"],
  pull: prop_types["number"],
  className: prop_types["string"],
  children: prop_types["node"],
  xs: objectOrNumber,
  sm: objectOrNumber,
  md: objectOrNumber,
  lg: objectOrNumber,
  xl: objectOrNumber,
  xxl: objectOrNumber
};
// CONCATENATED MODULE: ../node_modules/antd/es/col/index.js

/* harmony default export */ var col = (col_Col);
// EXTERNAL MODULE: ../@antv/gatsby-theme-antv/site/components/Companies.module.less
var Companies_module = __webpack_require__("rR+b");
var Companies_module_default = /*#__PURE__*/__webpack_require__.n(Companies_module);

// CONCATENATED MODULE: ../@antv/gatsby-theme-antv/site/components/Companies.tsx









var Companies_Companies = function Companies(_ref) {
  var title = _ref.title,
      _ref$companies = _ref.companies,
      companies = _ref$companies === void 0 ? [] : _ref$companies,
      className = _ref.className,
      style = _ref.style;
  var getCompanies = companies.map(function (company) {
    return react_default.a.createElement(col, {
      key: company.name,
      className: Companies_module_default.a.company,
      md: 6,
      sm: 8,
      xs: 12
    }, react_default.a.createElement("img", {
      className: Companies_module_default.a.companyimg,
      src: company.img,
      alt: company.name
    }));
  });
  return react_default.a.createElement("div", {
    className: classnames_default()(Companies_module_default.a.wrapper, className),
    style: style
  }, react_default.a.createElement("div", {
    key: "content",
    className: Companies_module_default.a.content
  }, react_default.a.createElement("p", {
    key: "title",
    className: Companies_module_default.a.title
  }, title), react_default.a.createElement("div", {
    key: "slicer",
    className: Companies_module_default.a.slicer
  }), react_default.a.createElement("div", {
    key: "companies-container",
    className: Companies_module_default.a.companiesContainer
  }, react_default.a.createElement(row, {
    key: "companies",
    gutter: [{
      xs: 77,
      sm: 77,
      md: 50,
      lg: 124
    }, 10],
    className: Companies_module_default.a.companies
  }, getCompanies))));
};

/* harmony default export */ var components_Companies = (Companies_Companies);
// EXTERNAL MODULE: ../@antv/gatsby-theme-antv/site/components/FeatureCard.module.less
var FeatureCard_module = __webpack_require__("BFR7");
var FeatureCard_module_default = /*#__PURE__*/__webpack_require__.n(FeatureCard_module);

// CONCATENATED MODULE: ../@antv/gatsby-theme-antv/site/components/FeatureCard.tsx




var FeatureCard_FeatureCard = function FeatureCard(_ref) {
  var icon = _ref.icon,
      title = _ref.title,
      description = _ref.description;
  return react_default.a.createElement("div", {
    className: FeatureCard_module_default.a.card
  }, react_default.a.createElement("div", {
    className: FeatureCard_module_default.a.content
  }, react_default.a.createElement("img", {
    className: classnames_default()(FeatureCard_module_default.a.icon, 'feature-logo'),
    src: icon,
    alt: "advantage"
  }), react_default.a.createElement("p", {
    className: FeatureCard_module_default.a.title
  }, title), react_default.a.createElement("p", {
    className: FeatureCard_module_default.a.description
  }, description)));
};

/* harmony default export */ var components_FeatureCard = (FeatureCard_FeatureCard);
// EXTERNAL MODULE: ../@antv/gatsby-theme-antv/site/components/Features.module.less
var Features_module = __webpack_require__("S2Ec");
var Features_module_default = /*#__PURE__*/__webpack_require__.n(Features_module);

// CONCATENATED MODULE: ../@antv/gatsby-theme-antv/site/components/Features.tsx









var Features_Features = function Features(_ref) {
  var title = _ref.title,
      _ref$features = _ref.features,
      features = _ref$features === void 0 ? [] : _ref$features,
      className = _ref.className,
      style = _ref.style,
      id = _ref.id;

  var getCards = function getCards() {
    var children = features.map(function (card) {
      return react_default.a.createElement(col, {
        className: Features_module_default.a.cardWrapper,
        key: card.title,
        md: 8,
        xs: 24
      }, react_default.a.createElement(components_FeatureCard, card));
    });
    return children;
  }; // for small screen


  var getDots = function getDots() {
    var dots = [];
    var length = features.length;
    var startTop = 45;
    var cardHeight = 350;
    var startLeftPercent = 0.028;
    var rows = length + 1;

    for (var i = 0; i < rows; i += 1) {
      var yOffset = 1;
      var top = startTop + cardHeight * i - yOffset + "px";
      var leftColLeft = startLeftPercent * 100 + "%";
      var rigthColLeft = (startLeftPercent + 0.892) * 100 + "%";
      dots.push(react_default.a.createElement("div", {
        key: i + "-0",
        className: Features_module_default.a.dot,
        style: {
          marginLeft: leftColLeft,
          marginTop: top
        }
      }));
      dots.push(react_default.a.createElement("div", {
        key: i + "-1",
        className: Features_module_default.a.dot,
        style: {
          marginLeft: rigthColLeft,
          marginTop: top
        }
      }));
    }

    return dots;
  };

  return react_default.a.createElement("div", {
    id: id,
    className: classnames_default()(Features_module_default.a.wrapper, className),
    style: style
  }, title ? react_default.a.createElement("div", {
    className: classnames_default()(Features_module_default.a.lefttopWithTitle, Features_module_default.a.lefttop)
  }) : react_default.a.createElement("div", {
    className: classnames_default()(Features_module_default.a.lefttopWithoutTitle, Features_module_default.a.lefttop)
  }), react_default.a.createElement("div", {
    className: title ? Features_module_default.a.rightbottom : classnames_default()(Features_module_default.a.rightbottomWithoutTitle, Features_module_default.a.rightbottom)
  }, react_default.a.createElement("div", {
    className: classnames_default()(Features_module_default.a.slicerbar, Features_module_default.a.slicerbarv, Features_module_default.a.slicerbarv1)
  }), react_default.a.createElement("div", {
    className: classnames_default()(Features_module_default.a.slicerbar, Features_module_default.a.slicerbarv, Features_module_default.a.slicerbarv2)
  }), react_default.a.createElement("div", {
    className: classnames_default()(Features_module_default.a.slicerbar, Features_module_default.a.slicerbarh, Features_module_default.a.slicerbarh1)
  }), react_default.a.createElement("div", {
    className: classnames_default()(Features_module_default.a.slicerbar, Features_module_default.a.slicerbarh, Features_module_default.a.slicerbarh2)
  }), react_default.a.createElement("div", {
    className: classnames_default()(Features_module_default.a.slicerbar, Features_module_default.a.slicerbarh, Features_module_default.a.slicerbarh3)
  }), react_default.a.createElement("div", {
    className: classnames_default()(Features_module_default.a.slicerbar, Features_module_default.a.slicerbarh, Features_module_default.a.slicerbarh4)
  }), getDots()), react_default.a.createElement("div", {
    className: Features_module_default.a.content
  }, react_default.a.createElement("div", {
    key: "content"
  }, react_default.a.createElement("p", {
    key: "title",
    className: Features_module_default.a.title
  }, title), react_default.a.createElement("div", {
    key: "block",
    className: Features_module_default.a.cardsContainer
  }, react_default.a.createElement(row, {
    key: "cards",
    className: Features_module_default.a.cards
  }, getCards())))));
};

/* harmony default export */ var components_Features = (Features_Features);
// EXTERNAL MODULE: ../node_modules/react-slick/lib/index.js
var react_slick_lib = __webpack_require__("2UUl");
var react_slick_lib_default = /*#__PURE__*/__webpack_require__.n(react_slick_lib);

// EXTERNAL MODULE: ../node_modules/slick-carousel/slick/slick.css
var slick = __webpack_require__("IO5D");

// EXTERNAL MODULE: ../node_modules/slick-carousel/slick/slick-theme.css
var slick_theme = __webpack_require__("tCvC");

// EXTERNAL MODULE: ../@antv/gatsby-theme-antv/site/components/Cases.module.less
var Cases_module = __webpack_require__("KXm5");
var Cases_module_default = /*#__PURE__*/__webpack_require__.n(Cases_module);

// CONCATENATED MODULE: ../@antv/gatsby-theme-antv/site/components/Cases.tsx














var Cases_Cases = function Cases(_ref) {
  var _ref$cases = _ref.cases,
      cases = _ref$cases === void 0 ? [] : _ref$cases,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      className = _ref.className;

  var _useTranslation = Object(es["b" /* useTranslation */])(),
      t = _useTranslation.t;

  var slider;

  var clickPrevious = function clickPrevious() {
    slider.slickPrev();
  };

  var clickNext = function clickNext() {
    slider.slickNext();
  };

  var getCases = function getCases() {
    var buttons;

    if (cases.length > 1) {
      buttons = react_default.a.createElement("div", {
        className: Cases_module_default.a.buttons
      }, react_default.a.createElement("div", {
        className: Cases_module_default.a.controlButton,
        onClick: clickPrevious
      }, react_default.a.createElement(es_icon["a" /* default */], {
        type: "arrow-left",
        className: Cases_module_default.a.controlButtonIcon,
        style: {
          fontSize: '16px'
        }
      })), react_default.a.createElement("div", {
        className: Cases_module_default.a.controlButton,
        onClick: clickNext,
        style: {
          marginLeft: '-1px'
        }
      }, react_default.a.createElement(es_icon["a" /* default */], {
        type: "arrow-right",
        className: Cases_module_default.a.controlButtonIcon,
        style: {
          fontSize: '16px'
        }
      })));
    }

    var children = cases.map(function (app) {
      var linkDiv = react_default.a.createElement("div", {
        className: Cases_module_default.a.detailWrapper,
        style: {
          display: app.link ? 'block' : 'none'
        }
      }, app.link && app.link.startsWith('http') ? react_default.a.createElement("a", {
        className: Cases_module_default.a.detail,
        href: app.link,
        target: "_blank",
        rel: "noopener noreferrer"
      }, t('查看详情')) : react_default.a.createElement(gatsby_browser_entry["Link"], {
        className: Cases_module_default.a.detail,
        to: app.link ? app.link : ''
      }, t('查看详情')));
      return react_default.a.createElement("div", {
        className: Cases_module_default.a.appWrapper,
        key: app.title
      }, react_default.a.createElement("img", {
        className: Cases_module_default.a.appTeaser,
        src: app.image,
        alt: app.title
      }), react_default.a.createElement("div", {
        className: Cases_module_default.a.appLeft
      }, react_default.a.createElement("div", {
        className: Cases_module_default.a.appContent
      }, react_default.a.createElement("img", {
        className: Cases_module_default.a.appLogo,
        src: app.logo,
        alt: "logo",
        style: {
          borderRadius: app.isAppLogo ? '15px' : '0px',
          boxShadow: app.isAppLogo ? '0px 12px 24px #CED4D9' : '0px 0px 0px'
        }
      }), react_default.a.createElement("p", {
        className: Cases_module_default.a.appTitle
      }, app.title), react_default.a.createElement("p", {
        className: Cases_module_default.a.appDescription
      }, app.description), linkDiv), buttons));
    });
    return children;
  };

  var sliderSettings = {
    dots: cases.length > 1,
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    speed: 500,
    cssEase: 'linear',
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true
  };
  return react_default.a.createElement("div", {
    className: classnames_default()(Cases_module_default.a.wrapper, className),
    style: style
  }, react_default.a.createElement(react_slick_lib_default.a, Object.assign({}, sliderSettings, {
    className: Cases_module_default.a.slider,
    ref: function ref(c) {
      slider = c;
    }
  }), getCases()));
};

/* harmony default export */ var components_Cases = (Cases_Cases);
// EXTERNAL MODULE: ../@antv/gatsby-theme-antv/site/components/BannerSVG.module.less
var BannerSVG_module = __webpack_require__("UZFE");
var BannerSVG_module_default = /*#__PURE__*/__webpack_require__.n(BannerSVG_module);

// CONCATENATED MODULE: ../@antv/gatsby-theme-antv/site/components/BannerSVG.tsx


var BannerSVG = react_default.a.memo(function () {
  var block6NodeRadius = '2';
  var block6GridPositions = [{
    x: 45.5,
    y: 45.5
  }, // A
  {
    x: 65.5,
    y: 45.5
  }, // B
  {
    x: 85.5,
    y: 45.5
  }, // C
  {
    x: 105.5,
    y: 45.5
  }, // D
  {
    x: 45.5,
    y: 65.5
  }, // E
  {
    x: 65.5,
    y: 65.5
  }, // F
  {
    x: 85.5,
    y: 65.5
  }, // G
  {
    x: 105.5,
    y: 65.5
  }, // H
  {
    x: 45.5,
    y: 85.5
  }, // I
  {
    x: 65.5,
    y: 85.5
  }, // J
  {
    x: 85.5,
    y: 85.5
  }, // K
  {
    x: 105.5,
    y: 85.5
  }, // L
  {
    x: 45.5,
    y: 105.5
  }, // M
  {
    x: 65.5,
    y: 105.5
  }, // N
  {
    x: 85.5,
    y: 105.5
  }, // O
  {
    x: 105.5,
    y: 105.5
  } // P
  ];
  var fills = ['rgb(180, 100, 254)', // A
  'rgb(163, 89, 254)', // B
  'rgb(141, 76, 254)', // C
  'rgb(120, 64, 254)', // D
  'rgb(205, 114, 254)', // E
  'rgb(185, 103, 254)', // F
  'rgb(159, 87, 254)', // G
  'rgb(140, 78, 254)', // H
  'rgb(224, 126, 254)', // I
  'rgb(202, 114, 254)', // J
  'rgb(179, 100, 254)', // K
  'rgb(164, 92, 254)', // L
  'rgb(248, 141, 254)', // M
  'rgb(223, 126, 254)', // N
  'rgb(201, 112, 254)', // O
  'rgb(180, 101, 254)' // P
  ];

  var getBlock6Circles = function getBlock6Circles() {
    var labels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'];
    var circles = labels.map(function (label, i) {
      var beginx = block6GridPositions[i].x;
      var beginy = block6GridPositions[i].y;
      var classname = "block6Circle" + label;
      return react_default.a.createElement("circle", {
        id: "block6-circle-" + label,
        className: BannerSVG_module_default.a[classname],
        key: label,
        fill: fills[i],
        cx: beginx,
        cy: beginy,
        r: block6NodeRadius
      });
    });
    return circles;
  };

  return react_default.a.createElement("section", {
    className: BannerSVG_module_default.a.wrapper
  }, react_default.a.createElement("svg", {
    width: "130%",
    height: "130%",
    viewBox: "-50 -50 751 587",
    version: "1.1"
  }, react_default.a.createElement("defs", null, react_default.a.createElement("linearGradient", {
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "100%",
    id: "linearGradient-2"
  }, react_default.a.createElement("stop", {
    stopColor: "#F0EFFD",
    offset: "0%"
  }), react_default.a.createElement("stop", {
    stopColor: "#F9F8FF",
    offset: "100%"
  })), react_default.a.createElement("rect", {
    id: "path-3",
    x: "311",
    y: "445",
    width: "24",
    height: "24"
  }), react_default.a.createElement("filter", {
    x: "-275.0%",
    y: "-225.0%",
    width: "650.0%",
    height: "650.0%",
    filterUnits: "objectBoundingBox",
    id: "filter-4"
  }, react_default.a.createElement("feOffset", {
    dx: "0",
    dy: "12",
    in: "SourceAlpha",
    result: "shadowOffsetOuter1"
  }), react_default.a.createElement("feGaussianBlur", {
    stdDeviation: "20",
    in: "shadowOffsetOuter1",
    result: "shadowBlurOuter1"
  }), react_default.a.createElement("feColorMatrix", {
    values: "0 0 0 0 0.1925   0 0 0 0 0.273875   0 0 0 0 0.35  0 0 0 0.1 0",
    type: "matrix",
    in: "shadowBlurOuter1"
  })), react_default.a.createElement("rect", {
    id: "path-5",
    x: "39",
    y: "0",
    width: "24",
    height: "24"
  }), react_default.a.createElement("filter", {
    x: "-275.0%",
    y: "-225.0%",
    width: "650.0%",
    height: "650.0%",
    filterUnits: "objectBoundingBox",
    id: "filter-6"
  }, react_default.a.createElement("feOffset", {
    dx: "0",
    dy: "12",
    in: "SourceAlpha",
    result: "shadowOffsetOuter1"
  }), react_default.a.createElement("feGaussianBlur", {
    stdDeviation: "20",
    in: "shadowOffsetOuter1",
    result: "shadowBlurOuter1"
  }), react_default.a.createElement("feColorMatrix", {
    values: "0 0 0 0 0.1925   0 0 0 0 0.273875   0 0 0 0 0.35  0 0 0 0.1 0",
    type: "matrix",
    in: "shadowBlurOuter1"
  })), react_default.a.createElement("linearGradient", {
    x1: "78.4948196%",
    y1: "100%",
    x2: "0%",
    y2: "100%",
    id: "linearGradient-7"
  }, react_default.a.createElement("stop", {
    stopColor: "#FBF6FF",
    offset: "0%"
  }), react_default.a.createElement("stop", {
    stopColor: "#FAF9FC",
    offset: "100%"
  })), react_default.a.createElement("path", {
    d: "M0,0 L154,0 L154,152 C154,153.104569 153.104569,154 152,154 L2,154 C0.8954305,154 1.3527075e-16,153.104569 0,152 L0,0 L0,0 Z",
    id: "path-8"
  }), react_default.a.createElement("filter", {
    x: "-65.9%",
    y: "-51.0%",
    width: "231.8%",
    height: "231.8%",
    filterUnits: "objectBoundingBox",
    id: "filter-10"
  }, react_default.a.createElement("feOffset", {
    dx: "0",
    dy: "23",
    in: "SourceAlpha",
    result: "shadowOffsetOuter1"
  }), react_default.a.createElement("feGaussianBlur", {
    stdDeviation: "30",
    in: "shadowOffsetOuter1",
    result: "shadowBlurOuter1"
  }), react_default.a.createElement("feColorMatrix", {
    values: "0 0 0 0 0.89233777   0 0 0 0 0.767282774   0 0 0 0 1  0 0 0 0.34298514 0",
    type: "matrix",
    in: "shadowBlurOuter1"
  })), react_default.a.createElement("filter", {
    x: "-71.4%",
    y: "-56.5%",
    width: "242.9%",
    height: "242.9%",
    filterUnits: "objectBoundingBox",
    id: "filter-11"
  }, react_default.a.createElement("feGaussianBlur", {
    stdDeviation: "30.5",
    in: "SourceAlpha",
    result: "shadowBlurInner1"
  }), react_default.a.createElement("feOffset", {
    dx: "39",
    dy: "-12",
    in: "shadowBlurInner1",
    result: "shadowOffsetInner1"
  }), react_default.a.createElement("feComposite", {
    in: "shadowOffsetInner1",
    in2: "SourceAlpha",
    operator: "arithmetic",
    k2: "-1",
    k3: "1",
    result: "shadowInnerInner1"
  }), react_default.a.createElement("feColorMatrix", {
    values: "0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.60003278 0",
    type: "matrix",
    in: "shadowInnerInner1"
  })), react_default.a.createElement("radialGradient", {
    cx: "-3.18731345%",
    cy: "149.566259%",
    fx: "-3.18731345%",
    fy: "149.566259%",
    r: "181.707698%",
    id: "radialGradient-15"
  }, react_default.a.createElement("stop", {
    stopColor: "#E565FF",
    offset: "0%"
  }), react_default.a.createElement("stop", {
    stopColor: "#9C58FF",
    offset: "58.1529772%"
  }), react_default.a.createElement("stop", {
    stopColor: "#7818FF",
    offset: "100%"
  })), react_default.a.createElement("linearGradient", {
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "0%",
    id: "linearGradient-27"
  }, react_default.a.createElement("stop", {
    stopColor: "#3EB0FF",
    offset: "0%"
  }), react_default.a.createElement("stop", {
    stopColor: "#00FF97",
    offset: "100%"
  })), react_default.a.createElement("linearGradient", {
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "0%",
    id: "linearGradient-28"
  }, react_default.a.createElement("stop", {
    stopColor: "#3EB0FF",
    offset: "0%"
  }), react_default.a.createElement("stop", {
    stopColor: "#00FF97",
    offset: "100%"
  })), react_default.a.createElement("linearGradient", {
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "0%",
    id: "linearGradient-29"
  }, react_default.a.createElement("stop", {
    stopColor: "#3EB0FF",
    offset: "0%"
  }), react_default.a.createElement("stop", {
    stopColor: "#00FF97",
    offset: "100%"
  })), react_default.a.createElement("linearGradient", {
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "0%",
    id: "linearGradient-30"
  }, react_default.a.createElement("stop", {
    stopColor: "#3EB0FF",
    offset: "0%"
  }), react_default.a.createElement("stop", {
    stopColor: "#00FF97",
    offset: "100%"
  })), react_default.a.createElement("path", {
    d: "M0,0 L126,0 L126,124 C126,125.104569 125.104569,126 124,126 L2,126 C0.8954305,126 1.3527075e-16,125.104569 0,124 L0,0 L0,0 Z",
    id: "path-31"
  }), react_default.a.createElement("filter", {
    x: "-73.8%",
    y: "-59.5%",
    width: "247.6%",
    height: "247.6%",
    filterUnits: "objectBoundingBox",
    id: "filter-32"
  }, react_default.a.createElement("feOffset", {
    dx: "0",
    dy: "18",
    in: "SourceAlpha",
    result: "shadowOffsetOuter1"
  }), react_default.a.createElement("feGaussianBlur", {
    stdDeviation: "28",
    in: "shadowOffsetOuter1",
    result: "shadowBlurOuter1"
  }), react_default.a.createElement("feColorMatrix", {
    values: "0 0 0 0 0.86820607   0 0 0 0 0.783993902   0 0 0 0 1  0 0 0 0.111505682 0",
    type: "matrix",
    in: "shadowBlurOuter1"
  })), react_default.a.createElement("rect", {
    id: "path-33",
    x: "25",
    y: "37",
    width: "64",
    height: "64",
    rx: "2"
  }), react_default.a.createElement("filter", {
    x: "-56.2%",
    y: "-56.2%",
    width: "212.5%",
    height: "212.5%",
    filterUnits: "objectBoundingBox",
    id: "filter-34"
  }, react_default.a.createElement("feGaussianBlur", {
    stdDeviation: "33.5",
    in: "SourceAlpha",
    result: "shadowBlurInner1"
  }), react_default.a.createElement("feOffset", {
    dx: "5",
    dy: "-4",
    in: "shadowBlurInner1",
    result: "shadowOffsetInner1"
  }), react_default.a.createElement("feComposite", {
    in: "shadowOffsetInner1",
    in2: "SourceAlpha",
    operator: "arithmetic",
    k2: "-1",
    k3: "1",
    result: "shadowInnerInner1"
  }), react_default.a.createElement("feColorMatrix", {
    values: "0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.232927229 0",
    type: "matrix",
    in: "shadowInnerInner1"
  })), react_default.a.createElement("linearGradient", {
    x1: "100%",
    y1: "98.9231419%",
    x2: "100%",
    y2: "0%",
    id: "linearGradient-35"
  }, react_default.a.createElement("stop", {
    stopColor: "#79FFEF",
    offset: "0%"
  }), react_default.a.createElement("stop", {
    stopColor: "#35FFAD",
    offset: "100%"
  })), react_default.a.createElement("linearGradient", {
    x1: "100%",
    y1: "98.9231419%",
    x2: "100%",
    y2: "0%",
    id: "linearGradient-36"
  }, react_default.a.createElement("stop", {
    stopColor: "#79FFEF",
    offset: "0%"
  }), react_default.a.createElement("stop", {
    stopColor: "#35FFAD",
    offset: "100%"
  })), react_default.a.createElement("linearGradient", {
    x1: "100%",
    y1: "98.9231419%",
    x2: "100%",
    y2: "0%",
    id: "linearGradient-37"
  }, react_default.a.createElement("stop", {
    stopColor: "#79FFEF",
    offset: "0%"
  }), react_default.a.createElement("stop", {
    stopColor: "#35FFAD",
    offset: "100%"
  })), react_default.a.createElement("circle", {
    id: "path-41",
    cx: "65.5",
    cy: "65.5",
    r: "32.5"
  }), react_default.a.createElement("path", {
    d: "M0,0 L124,0 C125.104569,-2.02906125e-16 126,0.8954305 126,2 L126,124 C126,125.104569 125.104569,126 124,126 L0,126 L0,126 L0,0 Z",
    id: "path-46"
  }), react_default.a.createElement("filter", {
    x: "-97.2%",
    y: "-67.1%",
    width: "294.4%",
    height: "294.4%",
    filterUnits: "objectBoundingBox",
    id: "filter-48"
  }, react_default.a.createElement("feOffset", {
    dx: "0",
    dy: "38",
    in: "SourceAlpha",
    result: "shadowOffsetOuter1"
  }), react_default.a.createElement("feGaussianBlur", {
    stdDeviation: "34.5",
    in: "shadowOffsetOuter1",
    result: "shadowBlurOuter1"
  }), react_default.a.createElement("feColorMatrix", {
    values: "0 0 0 0 0.751720252   0 0 0 0 0.56875   0 0 0 0 1  0 0 0 0.407096809 0",
    type: "matrix",
    in: "shadowBlurOuter1"
  })), react_default.a.createElement("filter", {
    x: "-83.3%",
    y: "-53.2%",
    width: "266.7%",
    height: "266.7%",
    filterUnits: "objectBoundingBox",
    id: "filter-49"
  }, react_default.a.createElement("feGaussianBlur", {
    stdDeviation: "33.5",
    in: "SourceAlpha",
    result: "shadowBlurInner1"
  }), react_default.a.createElement("feOffset", {
    dx: "5",
    dy: "-4",
    in: "shadowBlurInner1",
    result: "shadowOffsetInner1"
  }), react_default.a.createElement("feComposite", {
    in: "shadowOffsetInner1",
    in2: "SourceAlpha",
    operator: "arithmetic",
    k2: "-1",
    k3: "1",
    result: "shadowInnerInner1"
  }), react_default.a.createElement("feColorMatrix", {
    values: "0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.232927229 0",
    type: "matrix",
    in: "shadowInnerInner1"
  })), react_default.a.createElement("linearGradient", {
    x1: "50%",
    y1: "3.85364977%",
    x2: "50%",
    y2: "89.6029946%",
    id: "linearGradient-50"
  }, react_default.a.createElement("stop", {
    stopColor: "rgba(255, 255, 255, 0.12)",
    offset: "0%"
  }), react_default.a.createElement("stop", {
    stopColor: "rgba(255, 255, 255, 0.12)",
    offset: "100%"
  })), react_default.a.createElement("linearGradient", {
    x1: "100%",
    y1: "50%",
    x2: "0%",
    y2: "50%",
    id: "linearGradient-51"
  }, react_default.a.createElement("stop", {
    stopColor: "rgba(255, 255, 255, 0.12)",
    offset: "0%"
  }), react_default.a.createElement("stop", {
    stopColor: "rgba(255, 255, 255, 0.12)",
    offset: "100%"
  })), react_default.a.createElement("linearGradient", {
    x1: "85.7700904%",
    y1: "92.3103523%",
    x2: "0%",
    y2: "34.9608269%",
    id: "linearGradient-52"
  }, react_default.a.createElement("stop", {
    stopColor: "rgba(255, 255, 255, 0.12)",
    offset: "0%"
  }), react_default.a.createElement("stop", {
    stopColor: "rgba(255, 255, 255, 0.12)",
    offset: "100%"
  })), react_default.a.createElement("linearGradient", {
    x1: "50%",
    y1: "100%",
    x2: "50%",
    y2: "0%",
    id: "linearGradient-53"
  }, react_default.a.createElement("stop", {
    stopColor: "#FF41F9",
    offset: "0%"
  }), react_default.a.createElement("stop", {
    stopColor: "#00FFCA",
    offset: "100%"
  })), react_default.a.createElement("path", {
    d: "M63,34 C74.045695,34 83,42.954305 83,54 C83,61.3637967 76.3333333,71.3637967 63,84 C49.6666667,71.3637967 43,61.3637967 43,54 C43,42.954305 51.954305,34 63,34 Z M63,39.8333333 C55.175966,39.8333333 48.8333333,46.1480369 48.8333333,53.9376185 C48.8333333,58.572673 53.4703894,66.0292388 63,75.6666667 L63,75.6666667 L63.4297955,75.230106 C72.669063,65.80393 77.1666667,58.5024449 77.1666667,53.9376185 C77.1666667,46.1480369 70.824034,39.8333333 63,39.8333333 Z M63,47 C66.3137085,47 69,49.6862915 69,53 C69,56.3137085 66.3137085,59 63,59 C59.6862915,59 57,56.3137085 57,53 C57,49.6862915 59.6862915,47 63,47 Z",
    id: "path-54"
  }), react_default.a.createElement("rect", {
    id: "path-56",
    x: "0",
    y: "0",
    width: "100",
    height: "100"
  }), react_default.a.createElement("filter", {
    x: "-122.5%",
    y: "-84.5%",
    width: "345.0%",
    height: "345.0%",
    filterUnits: "objectBoundingBox",
    id: "filter-57"
  }, react_default.a.createElement("feOffset", {
    dx: "0",
    dy: "38",
    in: "SourceAlpha",
    result: "shadowOffsetOuter1"
  }), react_default.a.createElement("feGaussianBlur", {
    stdDeviation: "34.5",
    in: "shadowOffsetOuter1",
    result: "shadowBlurOuter1"
  }), react_default.a.createElement("feColorMatrix", {
    values: "0 0 0 0 0.751720252   0 0 0 0 0.56875   0 0 0 0 1  0 0 0 0.407096809 0",
    type: "matrix",
    in: "shadowBlurOuter1"
  })), react_default.a.createElement("filter", {
    x: "-105.0%",
    y: "-67.0%",
    width: "310.0%",
    height: "310.0%",
    filterUnits: "objectBoundingBox",
    id: "filter-58"
  }, react_default.a.createElement("feGaussianBlur", {
    stdDeviation: "33.5",
    in: "SourceAlpha",
    result: "shadowBlurInner1"
  }), react_default.a.createElement("feOffset", {
    dx: "5",
    dy: "-4",
    in: "shadowBlurInner1",
    result: "shadowOffsetInner1"
  }), react_default.a.createElement("feComposite", {
    in: "shadowOffsetInner1",
    in2: "SourceAlpha",
    operator: "arithmetic",
    k2: "-1",
    k3: "1",
    result: "shadowInnerInner1"
  }), react_default.a.createElement("feColorMatrix", {
    values: "0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.232927229 0",
    type: "matrix",
    in: "shadowInnerInner1"
  })), react_default.a.createElement("linearGradient", {
    x1: "61.28125%",
    y1: "0%",
    x2: "38.71875%",
    y2: "100%",
    id: "linearGradient-59"
  }, react_default.a.createElement("stop", {
    stopColor: "#FFFFFF",
    offset: "0%"
  }), react_default.a.createElement("stop", {
    stopColor: "#FEFEFE",
    offset: "100%"
  })), react_default.a.createElement("rect", {
    id: "path-60",
    x: "32",
    y: "10",
    width: "38",
    height: "80",
    rx: "6"
  }), react_default.a.createElement("filter", {
    x: "-223.7%",
    y: "-73.8%",
    width: "547.4%",
    height: "312.5%",
    filterUnits: "objectBoundingBox",
    id: "filter-62"
  }, react_default.a.createElement("feOffset", {
    dx: "0",
    dy: "26",
    in: "SourceAlpha",
    result: "shadowOffsetOuter1"
  }), react_default.a.createElement("feGaussianBlur", {
    stdDeviation: "24",
    in: "shadowOffsetOuter1",
    result: "shadowBlurOuter1"
  }), react_default.a.createElement("feColorMatrix", {
    values: "0 0 0 0 0.643049592   0 0 0 0 0.24772541   0 0 0 0 0.82178442  0 0 0 0.199874344 0",
    type: "matrix",
    in: "shadowBlurOuter1"
  })), react_default.a.createElement("linearGradient", {
    x1: "100%",
    y1: "0%",
    x2: "0%",
    y2: "100%",
    id: "linearGradient-63"
  }, react_default.a.createElement("stop", {
    stopColor: "#FFFFFF",
    offset: "0%"
  }), react_default.a.createElement("stop", {
    stopColor: "#FEFEFE",
    offset: "100%"
  })), react_default.a.createElement("linearGradient", {
    id: "arc-gradient1",
    x1: "0",
    x2: "0.3",
    y1: "0",
    y2: "1",
    gradientTransform: "rotate(-90)"
  }, react_default.a.createElement("stop", {
    offset: "0%",
    stopColor: "rgb(154, 104, 255)",
    stopOpacity: "1"
  }), "\\", react_default.a.createElement("stop", {
    offset: "100%",
    stopColor: "rgb(255, 145, 253)",
    stopOpacity: "1"
  })), react_default.a.createElement("linearGradient", {
    id: "arc-gradient2",
    x1: "0",
    x2: "0",
    y1: "0",
    y2: "1",
    gradientTransform: "rotate(30)"
  }, react_default.a.createElement("stop", {
    offset: "0%",
    stopColor: "rgb(68, 17, 215)",
    stopOpacity: "0.16"
  }), react_default.a.createElement("stop", {
    offset: "100%",
    stopColor: "rgb(230, 54, 255)",
    stopOpacity: "1"
  })), react_default.a.createElement("filter", {
    id: "arc-filter1",
    x: "-100%",
    y: "-100%",
    width: "400%",
    height: "400%"
  }, react_default.a.createElement("feOffset", {
    result: "offOut",
    in: "SourceGraphic",
    dx: "-5",
    dy: "-5"
  }), react_default.a.createElement("feColorMatrix", {
    result: "matrixOut",
    in: "offOut",
    type: "matrix",
    values: "0.463 0 0 0 0 0 0.110 0 0 0 0 0 0.922 0 0 0 0 0 0.2 0"
  }), react_default.a.createElement("feGaussianBlur", {
    result: "blurOut",
    in: "matrixOut",
    stdDeviation: "20"
  }), react_default.a.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "blurOut",
    mode: "normal"
  })), react_default.a.createElement("filter", {
    id: "arc-filter2",
    x: "-50%",
    y: "-50%",
    width: "250%",
    height: "250%"
  }, react_default.a.createElement("feOffset", {
    result: "offOut",
    in: "SourceGraphic",
    dx: "5",
    dy: "5"
  }), react_default.a.createElement("feGaussianBlur", {
    result: "blurOut",
    in: "offOut",
    stdDeviation: "10"
  }), react_default.a.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "blurOut",
    mode: "normal"
  })), react_default.a.createElement("filter", {
    x: "-2875.0%",
    y: "-2000.0%",
    width: "5850.0%",
    height: "5850.0%",
    filterUnits: "objectBoundingBox",
    id: "filter-75"
  }, react_default.a.createElement("feOffset", {
    dx: "0",
    dy: "35",
    in: "SourceAlpha",
    result: "shadowOffsetOuter1"
  }), react_default.a.createElement("feGaussianBlur", {
    stdDeviation: "32.5",
    in: "shadowOffsetOuter1",
    result: "shadowBlurOuter1"
  }), react_default.a.createElement("feColorMatrix", {
    values: "0 0 0 0 0.490799576   0 0 0 0 0.194812378   0 0 0 0 0.892436594  0 0 0 0.3046875 0",
    type: "matrix",
    in: "shadowBlurOuter1"
  })), react_default.a.createElement("path", {
    d: "M2,0 L122,0 L122,0 L122,120 C122,121.104569 121.104569,122 120,122 L0,122 L0,122 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 Z",
    id: "path-78"
  }), react_default.a.createElement("filter", {
    x: "-69.7%",
    y: "-48.4%",
    width: "239.3%",
    height: "239.3%",
    filterUnits: "objectBoundingBox",
    id: "filter-79"
  }, react_default.a.createElement("feOffset", {
    dx: "0",
    dy: "26",
    in: "SourceAlpha",
    result: "shadowOffsetOuter1"
  }), react_default.a.createElement("feGaussianBlur", {
    stdDeviation: "24",
    in: "shadowOffsetOuter1",
    result: "shadowBlurOuter1"
  }), react_default.a.createElement("feColorMatrix", {
    values: "0 0 0 0 0.643049592   0 0 0 0 0.24772541   0 0 0 0 0.82178442  0 0 0 0.199874344 0",
    type: "matrix",
    in: "shadowBlurOuter1"
  })), react_default.a.createElement("filter", {
    x: "-300.0%",
    y: "-220.0%",
    width: "700.0%",
    height: "700.0%",
    filterUnits: "objectBoundingBox",
    id: "filter-81"
  }, react_default.a.createElement("feMorphology", {
    radius: "1",
    operator: "dilate",
    in: "SourceAlpha",
    result: "shadowSpreadOuter1"
  }), react_default.a.createElement("feOffset", {
    dx: "0",
    dy: "4",
    in: "shadowSpreadOuter1",
    result: "shadowOffsetOuter1"
  }), react_default.a.createElement("feGaussianBlur", {
    stdDeviation: "4",
    in: "shadowOffsetOuter1",
    result: "shadowBlurOuter1"
  }), react_default.a.createElement("feComposite", {
    in: "shadowBlurOuter1",
    in2: "SourceAlpha",
    operator: "out",
    result: "shadowBlurOuter1"
  }), react_default.a.createElement("feColorMatrix", {
    values: "0 0 0 0 0.538230561   0 0 0 0 0.163202963   0 0 0 0 0.817963089  0 0 0 0.229758523 0",
    type: "matrix",
    in: "shadowBlurOuter1"
  })), react_default.a.createElement("filter", {
    x: "-300.0%",
    y: "-220.0%",
    width: "700.0%",
    height: "700.0%",
    filterUnits: "objectBoundingBox",
    id: "filter-83"
  }, react_default.a.createElement("feMorphology", {
    radius: "1",
    operator: "dilate",
    in: "SourceAlpha",
    result: "shadowSpreadOuter1"
  }), react_default.a.createElement("feOffset", {
    dx: "0",
    dy: "4",
    in: "shadowSpreadOuter1",
    result: "shadowOffsetOuter1"
  }), react_default.a.createElement("feGaussianBlur", {
    stdDeviation: "4",
    in: "shadowOffsetOuter1",
    result: "shadowBlurOuter1"
  }), react_default.a.createElement("feComposite", {
    in: "shadowBlurOuter1",
    in2: "SourceAlpha",
    operator: "out",
    result: "shadowBlurOuter1"
  }), react_default.a.createElement("feColorMatrix", {
    values: "0 0 0 0 0.538230561   0 0 0 0 0.163202963   0 0 0 0 0.817963089  0 0 0 0.229758523 0",
    type: "matrix",
    in: "shadowBlurOuter1"
  })), react_default.a.createElement("filter", {
    x: "-300.0%",
    y: "-220.0%",
    width: "700.0%",
    height: "700.0%",
    filterUnits: "objectBoundingBox",
    id: "filter-85"
  }, react_default.a.createElement("feMorphology", {
    radius: "1",
    operator: "dilate",
    in: "SourceAlpha",
    result: "shadowSpreadOuter1"
  }), react_default.a.createElement("feOffset", {
    dx: "0",
    dy: "4",
    in: "shadowSpreadOuter1",
    result: "shadowOffsetOuter1"
  }), react_default.a.createElement("feGaussianBlur", {
    stdDeviation: "4",
    in: "shadowOffsetOuter1",
    result: "shadowBlurOuter1"
  }), react_default.a.createElement("feComposite", {
    in: "shadowBlurOuter1",
    in2: "SourceAlpha",
    operator: "out",
    result: "shadowBlurOuter1"
  }), react_default.a.createElement("feColorMatrix", {
    values: "0 0 0 0 0.538230561   0 0 0 0 0.163202963   0 0 0 0 0.817963089  0 0 0 0.229758523 0",
    type: "matrix",
    in: "shadowBlurOuter1"
  })), react_default.a.createElement("filter", {
    x: "-300.0%",
    y: "-220.0%",
    width: "700.0%",
    height: "700.0%",
    filterUnits: "objectBoundingBox",
    id: "filter-87"
  }, react_default.a.createElement("feMorphology", {
    radius: "1",
    operator: "dilate",
    in: "SourceAlpha",
    result: "shadowSpreadOuter1"
  }), react_default.a.createElement("feOffset", {
    dx: "0",
    dy: "4",
    in: "shadowSpreadOuter1",
    result: "shadowOffsetOuter1"
  }), react_default.a.createElement("feGaussianBlur", {
    stdDeviation: "4",
    in: "shadowOffsetOuter1",
    result: "shadowBlurOuter1"
  }), react_default.a.createElement("feComposite", {
    in: "shadowBlurOuter1",
    in2: "SourceAlpha",
    operator: "out",
    result: "shadowBlurOuter1"
  }), react_default.a.createElement("feColorMatrix", {
    values: "0 0 0 0 0.538230561   0 0 0 0 0.163202963   0 0 0 0 0.817963089  0 0 0 0.229758523 0",
    type: "matrix",
    in: "shadowBlurOuter1"
  })), react_default.a.createElement("filter", {
    x: "-300.0%",
    y: "-220.0%",
    width: "700.0%",
    height: "700.0%",
    filterUnits: "objectBoundingBox",
    id: "filter-89"
  }, react_default.a.createElement("feMorphology", {
    radius: "1",
    operator: "dilate",
    in: "SourceAlpha",
    result: "shadowSpreadOuter1"
  }), react_default.a.createElement("feOffset", {
    dx: "0",
    dy: "4",
    in: "shadowSpreadOuter1",
    result: "shadowOffsetOuter1"
  }), react_default.a.createElement("feGaussianBlur", {
    stdDeviation: "4",
    in: "shadowOffsetOuter1",
    result: "shadowBlurOuter1"
  }), react_default.a.createElement("feComposite", {
    in: "shadowBlurOuter1",
    in2: "SourceAlpha",
    operator: "out",
    result: "shadowBlurOuter1"
  }), react_default.a.createElement("feColorMatrix", {
    values: "0 0 0 0 0.538230561   0 0 0 0 0.163202963   0 0 0 0 0.817963089  0 0 0 0.229758523 0",
    type: "matrix",
    in: "shadowBlurOuter1"
  })), react_default.a.createElement("radialGradient", {
    id: "block5-gradient",
    fx: "50%",
    fy: "50%",
    cx: "50%",
    cy: "50%",
    r: "90%"
  }, react_default.a.createElement("stop", {
    stopOpacity: "1",
    stopColor: "#FFDBB8",
    offset: "0%"
  }), react_default.a.createElement("stop", {
    stopOpacity: "1",
    stopColor: "#FFD341",
    offset: "100%"
  })), react_default.a.createElement("filter", {
    id: "rect-shadow",
    x: "-50%",
    y: "-50%",
    width: "300%",
    height: "300%"
  }, react_default.a.createElement("feOffset", {
    result: "offOut",
    in: "SourceGraphic",
    dx: "10",
    dy: "10"
  }), react_default.a.createElement("feColorMatrix", {
    result: "matrixOut",
    in: "offOut",
    type: "matrix",
    values: "0.192 0 0 0 0 0 0.275 0 0 0 0 0 0.349 0 0 0 0 0 0.1 0"
  }), react_default.a.createElement("feGaussianBlur", {
    result: "blurOut",
    in: "matrixOut",
    stdDeviation: "10"
  }), react_default.a.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "blurOut",
    mode: "normal"
  }))), react_default.a.createElement("g", {
    id: "Ant-V-PC-\u5B9A\u7A3F-1101",
    transform: "translate(-711.000000, -100.000000)",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, react_default.a.createElement("g", {
    id: "banner-svg",
    transform: "translate(779.000000, 127.000000)"
  }, react_default.a.createElement("g", {
    id: "backs",
    transform: "translate(209.000000, 0.000000)"
  }, react_default.a.createElement("rect", {
    id: "back-lefttop-small",
    stroke: "#EBE1FB",
    opacity: "0.503348214",
    x: "257.5",
    y: "145.5",
    width: "206",
    height: "172",
    transform: "translate(-90.000000, -150.000000)"
  }), react_default.a.createElement("rect", {
    id: "back-righttop",
    stroke: "#EBE1FB",
    opacity: "0.293619792",
    x: "235.5",
    y: "0.5",
    width: "527",
    height: "451",
    transform: "translate(-320.000000, -180.000000)"
  }), react_default.a.createElement("path", {
    id: "back-fan",
    d: "M0.500015456,334.512545 L0.507890624,586.5 L252.499521,586.5 C252.235652,448.831454 143.017682,336.763448 7.1430388,334.533878 L3.01314849,334.5 C2.17494966,334.5 1.33723221,334.504183 0.500015456,334.512545 Z",
    stroke: "#EBE1FB",
    opacity: "0.503348214",
    transform: "translate(-285.000000, -172.000000)"
  }), react_default.a.createElement("image", {
    xlinkHref: "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*aRK0RKcWMzEAAAAAAAAAAABkARQnAQ",
    width: "120px",
    height: "120px",
    x: "0px",
    y: "350px"
  }), react_default.a.createElement("rect", {
    id: "back-rect1",
    fill: "url(#linearGradient-2)",
    x: "290",
    y: "424",
    width: "21",
    height: "21"
  }, react_default.a.createElement("animate", {
    attributeName: "y",
    from: "424",
    to: "424",
    begin: "0s",
    dur: "10s",
    values: "424;440;424",
    keySplines: "0.5 0.8 0.6 1; 0.5 0.8 0.6 1;",
    keyTimes: "0;0.5;1",
    calcMode: "spline",
    repeatCount: "indefinite"
  })), react_default.a.createElement("rect", {
    id: "back-rect2",
    fill: "#ffffff",
    filter: "url(#rect-shadow)",
    x: "312",
    y: "445",
    width: "28",
    height: "28"
  }, react_default.a.createElement("animate", {
    attributeName: "y",
    from: "445",
    to: "445",
    begin: "0s",
    dur: "10s",
    values: "445;430;445",
    keySplines: "0.5 0.8 0.6 1; 0.5 0.8 0.6 1;",
    keyTimes: "0;0.5;1",
    calcMode: "spline",
    repeatCount: "indefinite"
  })), react_default.a.createElement("circle", {
    id: "back-circle",
    fill: "#EEEBFD",
    cx: "205.5",
    cy: "431.5",
    r: "1.5"
  }), react_default.a.createElement("rect", {
    id: "back-rect-top",
    fill: "#ffffff",
    filter: "url(#rect-shadow)",
    x: "39",
    y: "0",
    width: "24",
    height: "24"
  }, react_default.a.createElement("animate", {
    attributeName: "y",
    from: "0",
    to: "0",
    begin: "0s",
    dur: "8s",
    values: "0;20;0",
    keySplines: "0.5 0.8 0.6 1; 0.5 0.8 0.6 1;",
    keyTimes: "0;0.5;1",
    calcMode: "spline",
    repeatCount: "indefinite"
  }))), react_default.a.createElement("g", {
    id: "block6",
    transform: "translate(131.000000, 218.000000)"
  }, react_default.a.createElement("g", {
    id: "block6-back-white",
    opacity: "0.966843378"
  }, react_default.a.createElement("use", {
    fill: "black",
    fillOpacity: "1",
    filter: "url(#filter-10)",
    xlinkHref: "#path-8"
  }), react_default.a.createElement("use", {
    fill: "url(#linearGradient-7)",
    fillRule: "evenodd",
    xlinkHref: "#path-8"
  }), react_default.a.createElement("use", {
    fill: "black",
    fillOpacity: "1",
    filter: "url(#filter-11)",
    xlinkHref: "#path-8"
  })), react_default.a.createElement("g", {
    id: "block6-nodes",
    className: BannerSVG_module_default.a.block6NodesContainer
  }, getBlock6Circles())), react_default.a.createElement("g", {
    id: "block2",
    transform: "translate(185.000000, 118.000000)"
  }, react_default.a.createElement("image", {
    id: "block2Back",
    xlinkHref: "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*JikGQZ3gmKsAAAAAAAAAAABkARQnAQ",
    width: "236px",
    height: "236px",
    x: "-69px",
    y: "-30px"
  }), react_default.a.createElement("g", {
    id: "block2-bars",
    transform: "translate(25.000000, 27.000000)"
  }, react_default.a.createElement("rect", {
    id: "block2-bar1",
    className: BannerSVG_module_default.a.block2Bar1,
    fill: "url(#linearGradient-27)",
    x: "0",
    y: "0",
    width: "27",
    height: "6"
  }), react_default.a.createElement("rect", {
    id: "block2-bar2",
    className: BannerSVG_module_default.a.block2Bar2,
    fill: "url(#linearGradient-28)",
    x: "0",
    y: "12",
    width: "44",
    height: "6"
  }), react_default.a.createElement("rect", {
    id: "block2-bar3",
    className: BannerSVG_module_default.a.block2Bar3,
    fill: "url(#linearGradient-29)",
    x: "0",
    y: "24",
    width: "17",
    height: "6"
  }), react_default.a.createElement("rect", {
    id: "block2-bar4",
    className: BannerSVG_module_default.a.block2Bar4,
    fill: "url(#linearGradient-30)",
    x: "0",
    y: "36",
    width: "34",
    height: "6"
  }))), react_default.a.createElement("g", {
    id: "block8",
    transform: "translate(385.000000, 218.000000)"
  }, react_default.a.createElement("g", {
    id: "block8-back-big-white"
  }, react_default.a.createElement("use", {
    fill: "black",
    fillOpacity: "1",
    filter: "url(#filter-32)",
    xlinkHref: "#path-31"
  }), react_default.a.createElement("use", {
    fill: "#FFFFFF",
    fillRule: "evenodd",
    xlinkHref: "#path-31"
  })), react_default.a.createElement("g", {
    id: "block8-back-purple"
  }, react_default.a.createElement("use", {
    fill: "url(#radialGradient-15)",
    fillRule: "evenodd",
    xlinkHref: "#path-33"
  }), react_default.a.createElement("use", {
    fill: "black",
    fillOpacity: "1",
    filter: "url(#filter-34)",
    xlinkHref: "#path-33"
  })), react_default.a.createElement("rect", {
    id: "block8-back-white",
    stroke: "#F0E8FC",
    fill: "#FFFFFF",
    x: "37.5",
    y: "25.5",
    width: "63",
    height: "63"
  }), react_default.a.createElement("g", {
    id: "block8-bars",
    transform: "translate(54.000000, 40.000000)"
  }, react_default.a.createElement("rect", {
    id: "block8-bar2",
    className: BannerSVG_module_default.a.block8Bar2,
    fill: "url(#linearGradient-35)",
    x: "12",
    y: "0",
    width: "6",
    height: "33.75"
  }), react_default.a.createElement("rect", {
    id: "block8-bar1",
    className: BannerSVG_module_default.a.block8Bar1,
    fill: "url(#linearGradient-36)",
    x: "0",
    y: "10",
    width: "6",
    height: "23.75"
  }), react_default.a.createElement("rect", {
    id: "block8-bar3",
    className: BannerSVG_module_default.a.block8Bar3,
    fill: "url(#linearGradient-37)",
    x: "24",
    y: "17",
    width: "6",
    height: "16.875"
  }))), react_default.a.createElement("g", {
    id: "blcok5",
    transform: "translate(0.000000, 218.000000)"
  }, react_default.a.createElement("image", {
    id: "block5Back",
    xlinkHref: "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*KpT9QrpQ4ZgAAAAAAAAAAABkARQnAQ",
    width: "268px",
    height: "268px",
    x: "-69px",
    y: "-30px"
  }), react_default.a.createElement("g", {
    id: "block5-circle",
    opacity: "0.326241629"
  }, react_default.a.createElement("use", {
    fill: "#F4E7FF",
    fillRule: "evenodd",
    xlinkHref: "#path-41"
  })), react_default.a.createElement("path", {
    id: "block5-fan",
    className: BannerSVG_module_default.a.block5Fan,
    stroke: "url(#block5-gradient)",
    strokeWidth: "32.5",
    strokeDasharray: "207.24",
    strokeDashoffset: "100" //
    ,
    d: "M65.5,49 C74.336556,49 81.5,56.3873016 81.5,65.5 C81.5,70.0566032 79.7089393,74.1818092 76.8132242,77.1677613"
  })), react_default.a.createElement("g", {
    id: "block4",
    transform: "translate(439.000000, 92.000000)"
  }, react_default.a.createElement("mask", {
    id: "mask-47",
    fill: "white"
  }, react_default.a.createElement("use", {
    xlinkHref: "#path-46"
  })), react_default.a.createElement("g", {
    id: "block4-back-purple"
  }, react_default.a.createElement("use", {
    fill: "black",
    fillOpacity: "1",
    filter: "url(#filter-48)",
    xlinkHref: "#path-46"
  }), react_default.a.createElement("use", {
    fill: "url(#radialGradient-15)",
    fillRule: "evenodd",
    xlinkHref: "#path-46"
  }), react_default.a.createElement("use", {
    fill: "black",
    fillOpacity: "1",
    filter: "url(#filter-49)",
    xlinkHref: "#path-46"
  })), react_default.a.createElement("g", {
    id: "block4-front-back",
    mask: "url(#mask-47)"
  }, react_default.a.createElement("g", {
    transform: "translate(64.994468, 55.918147) rotate(10.000000) translate(-64.994468, -55.918147) translate(-40.505532, -50.081853)"
  }, react_default.a.createElement("rect", {
    id: "block4-back-line-verti",
    className: BannerSVG_module_default.a.block4LineVerti,
    fill: "url(#linearGradient-50)",
    x: "64",
    y: "180",
    width: "4",
    height: "192"
  }), react_default.a.createElement("rect", {
    id: "block4-back-line-hori",
    className: BannerSVG_module_default.a.block4LineHori,
    fill: "url(#linearGradient-51)",
    x: "-1.36424205e-11",
    y: "151",
    width: "202",
    height: "4"
  }), react_default.a.createElement("path", {
    id: "block4-back-circle",
    className: BannerSVG_module_default.a.block4Circle,
    stroke: "url(#linearGradient-52)",
    opacity: "0.545549665",
    strokeDasharray: "132",
    strokeWidth: "5",
    d: "M111.248537,49.2552483 C107.33563,82.1953597 146.587514,105.361957 164.688607,98.6513257"
  }))), react_default.a.createElement("g", {
    id: "blockk4-pin",
    mask: "url(#mask-47)"
  }, react_default.a.createElement("use", {
    fill: "url(#linearGradient-53)",
    fillRule: "evenodd",
    xlinkHref: "#path-54"
  }))), react_default.a.createElement("g", {
    id: "blcok7",
    transform: "translate(285.000000, 218.000000)"
  }, react_default.a.createElement("g", {
    id: "block7-back-purple"
  }, react_default.a.createElement("use", {
    fill: "black",
    fillOpacity: "1",
    filter: "url(#filter-57)",
    xlinkHref: "#path-56"
  }), react_default.a.createElement("use", {
    fill: "url(#radialGradient-15)",
    fillRule: "evenodd",
    xlinkHref: "#path-56"
  }), react_default.a.createElement("use", {
    fill: "black",
    fillOpacity: "1",
    filter: "url(#filter-58)",
    xlinkHref: "#path-56"
  })), react_default.a.createElement("path", {
    d: "M0.501347558,99.5 L99.4968058,99.5 L99.5000192,99.1328902 L99.5,99.1372666 C99.5,72.2776127 77.3400243,50.5 50,50.5 C22.6599757,50.5 0.5,72.2776127 0.5,99.1372666 C0.5,99.2582303 0.50044932,99.3791419 0.501347558,99.5 Z",
    id: "block7-back-fan2",
    stroke: "#FFFFFF",
    opacity: "0.0636151414"
  }), react_default.a.createElement("path", {
    d: "M99.4968058,0.5 L0.501347558,0.5 C0.50044932,0.620858103 0.5,0.741769731 0.5,0.862733364 C0.5,27.7223873 22.6599757,49.5 50,49.5 C77.3400243,49.5 99.5,27.7223873 99.5,0.862733364 L99.5000192,0.867109806 L99.4968058,0.5 Z",
    id: "block7-back-fan1",
    stroke: "#FFFFFF",
    opacity: "0.0636151414"
  }), react_default.a.createElement("g", {
    id: "block7-phone"
  }, react_default.a.createElement("use", {
    fill: "black",
    fillOpacity: "1",
    filter: "url(#filter-62)",
    xlinkHref: "#path-60"
  }), react_default.a.createElement("use", {
    fill: "url(#linearGradient-59)",
    fillRule: "evenodd",
    xlinkHref: "#path-60"
  })), react_default.a.createElement("rect", {
    id: "block7-yaxis",
    fill: "#DEC9F9",
    mask: "url(#mask-61)",
    x: "34",
    y: "33",
    width: "1",
    height: "34"
  }), react_default.a.createElement("rect", {
    id: "block7-xaxis",
    fill: "#DEC9F9",
    mask: "url(#mask-61)",
    transform: "translate(51.000000, 66.500000) scale(1, -1) translate(-51.000000, -66.500000) ",
    x: "34",
    y: "66",
    width: "34",
    height: "1"
  }), react_default.a.createElement("path", {
    id: "block7-curve",
    className: BannerSVG_module_default.a.block7Curve,
    strokeDasharray: "90",
    d: "M36,65 C52.5685425,65 66,51.5685425 66,35",
    stroke: "#9655FE"
  })), react_default.a.createElement("g", {
    id: "block3",
    transform: "translate(285.000000, 64.000000)"
  }, react_default.a.createElement("image", {
    id: "block3Back",
    xlinkHref: "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*6vbkRapOLegAAAAAAAAAAABkARQnAQ",
    width: "250px",
    height: "250px",
    x: "-48px",
    y: "-22px"
  }), react_default.a.createElement("g", {
    id: "block3-arcs",
    transform: "translate(33.000000, 33.000000)"
  }, react_default.a.createElement("circle", {
    id: "block3-arc-big",
    className: BannerSVG_module_default.a.block3ArcBig,
    fill: "none",
    stroke: "url(#arc-gradient1)",
    filter: "url(#arc-filter1)",
    strokeWidth: "18",
    strokeMiterlimit: "1",
    cx: "45",
    cy: "45",
    r: "35",
    strokeDasharray: "201",
    strokeDashoffset: "50",
    transform: "rotate(-180 45 45)"
  }), react_default.a.createElement("circle", {
    id: "block3-arc-small",
    className: BannerSVG_module_default.a.block3ArcSmall,
    fill: "none",
    stroke: "url(#arc-gradient2)",
    filter: "url(#arc-filter2)",
    strokeWidth: "13",
    strokeMiterlimit: "1",
    cx: "45",
    cy: "45",
    r: "25",
    strokeDasharray: "123.6 1000",
    strokeDashoffset: "100",
    transform: "rotate(0 45 45)"
  }))), react_default.a.createElement("g", {
    id: "block1",
    transform: "translate(63.000000, 96.000000)"
  }, react_default.a.createElement("g", {
    id: "block1-bars",
    transform: "translate(29.000000, 26.000000)",
    fill: "#DEC9F9",
    opacity: "0.503348214"
  }, react_default.a.createElement("rect", {
    id: "\u77E9\u5F62",
    x: "32",
    y: "0",
    width: "1",
    height: "70"
  }), react_default.a.createElement("rect", {
    id: "\u77E9\u5F62\u5907\u4EFD-18",
    x: "48",
    y: "0",
    width: "1",
    height: "70"
  }), react_default.a.createElement("rect", {
    id: "\u77E9\u5F62\u5907\u4EFD-19",
    x: "64",
    y: "0",
    width: "1",
    height: "70"
  }), react_default.a.createElement("rect", {
    id: "\u77E9\u5F62\u5907\u4EFD-16",
    x: "16",
    y: "0",
    width: "1",
    height: "70"
  }), react_default.a.createElement("rect", {
    id: "\u77E9\u5F62\u5907\u4EFD-17",
    x: "0",
    y: "0",
    width: "1",
    height: "70"
  })), react_default.a.createElement("g", {
    id: "block1-back",
    opacity: "0.693987165"
  }, react_default.a.createElement("use", {
    fill: "black",
    fillOpacity: "1",
    filter: "url(#filter-79)",
    xlinkHref: "#path-78"
  }), react_default.a.createElement("use", {
    fill: "url(#linearGradient-63)",
    fillRule: "evenodd",
    xlinkHref: "#path-78"
  })), react_default.a.createElement("g", {
    id: "block1-circles",
    transform: "translate(27.000000, 34.000000)"
  }, react_default.a.createElement("circle", {
    id: "block-circle1-shadow",
    className: BannerSVG_module_default.a.block1Circle1,
    filter: "url(#filter-81)",
    stroke: "#8D3FFD",
    strokeWidth: "1",
    fill: "#FFFFFF",
    fillRule: "evenodd",
    cx: "2.5",
    cy: "30",
    r: "3"
  }), react_default.a.createElement("circle", {
    id: "block-circle1-object",
    className: BannerSVG_module_default.a.block1Circle1,
    stroke: "#8D3FFD",
    strokeWidth: "1",
    fill: "#FFFFFF",
    fillRule: "evenodd",
    cx: "2.5",
    cy: "30",
    r: "3"
  }), react_default.a.createElement("circle", {
    id: "block1-circle2-shadow",
    className: BannerSVG_module_default.a.block1Circle2,
    filter: "url(#filter-83)",
    stroke: "#8D3FFD",
    strokeWidth: "1",
    fill: "#FFFFFF",
    fillRule: "evenodd",
    cx: "18.5",
    cy: "15",
    r: "3"
  }), react_default.a.createElement("circle", {
    id: "block1-circle2-object",
    className: BannerSVG_module_default.a.block1Circle2,
    stroke: "#8D3FFD",
    strokeWidth: "1",
    fill: "#FFFFFF",
    fillRule: "evenodd",
    cx: "18.5",
    cy: "15",
    r: "3"
  }), react_default.a.createElement("circle", {
    id: "block1-circle3-shadow",
    className: BannerSVG_module_default.a.block1Circle3,
    filter: "url(#filter-85)",
    stroke: "#8D3FFD",
    strokeWidth: "1",
    fill: "#FFFFFF",
    fillRule: "evenodd",
    cx: "34.5",
    cy: "30",
    r: "3"
  }), react_default.a.createElement("circle", {
    id: "block1-circle3-object",
    className: BannerSVG_module_default.a.block1Circle3,
    stroke: "#8D3FFD",
    strokeWidth: "1",
    fill: "#FFFFFF",
    fillRule: "evenodd",
    cx: "34.5",
    cy: "30",
    r: "3"
  }), react_default.a.createElement("circle", {
    id: "block1-circle4-shadow",
    className: BannerSVG_module_default.a.block1Circle4,
    filter: "url(#filter-87)",
    stroke: "#8D3FFD",
    strokeWidth: "1",
    fill: "#FFFFFF",
    fillRule: "evenodd",
    cx: "50.5",
    cy: "45",
    r: "3"
  }), react_default.a.createElement("circle", {
    id: "block1-circle4-object",
    className: BannerSVG_module_default.a.block1Circle4,
    stroke: "#8D3FFD",
    strokeWidth: "1",
    fill: "#FFFFFF",
    fillRule: "evenodd",
    cx: "50.5",
    cy: "45",
    r: "3"
  }), react_default.a.createElement("circle", {
    id: "block1-circle5-shadow",
    className: BannerSVG_module_default.a.block1Circle5,
    filter: "url(#filter-89)",
    stroke: "#8D3FFD",
    strokeWidth: "1",
    fill: "#FFFFFF",
    fillRule: "evenodd",
    cx: "66.5",
    cy: "30",
    r: "3"
  }), react_default.a.createElement("circle", {
    id: "block1-circle5-object",
    className: BannerSVG_module_default.a.block1Circle5,
    stroke: "#8D3FFD",
    strokeWidth: "1",
    fill: "#FFFFFF",
    fillRule: "evenodd",
    cx: "66.5",
    cy: "30",
    r: "3"
  })))))));
});
/* harmony default export */ var components_BannerSVG = (BannerSVG);
// CONCATENATED MODULE: ./site/pages/index.zh.tsx









var index_zh_IndexPage = function IndexPage() {
  var _useTranslation = Object(es["b" /* useTranslation */])(),
      t = _useTranslation.t,
      i18n = _useTranslation.i18n;

  var features = [{
    icon: 'https://gw.alipayobjects.com/zos/basement_prod/5dbaf094-c064-4a0d-9968-76020b9f1510.svg',
    title: t('简单方便'),
    description: t('从数据出发，仅需几行代码可以轻松获得想要的图表展示效果。')
  }, {
    icon: 'https://gw.alipayobjects.com/zos/basement_prod/0a0371ab-6bed-41ad-a99b-87a5044ba11b.svg',
    title: t('方便可靠'),
    description: t('大量产品实践之上，提供绘图引擎、完备图形语法，专业设计规范。')
  }, {
    icon: 'https://gw.alipayobjects.com/zos/basement_prod/716d0bc0-e311-4b28-b79f-afdd16e8148e.svg',
    title: t('无限可能'),
    description: t('任何图表，都可以基于图形语法灵活绘制，满足你无限的创意。')
  }];
  var companies = [{
    name: '公司1',
    img: 'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Z1NnQ6L4xCIAAAAAAAAAAABkARQnAQ'
  }, {
    name: '公司2',
    img: 'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*6u3hTpsd7h8AAAAAAAAAAABkARQnAQ'
  }, {
    name: '公司3',
    img: 'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Fw8HTbFgUdAAAAAAAAAAAABkARQnAQ'
  }, {
    name: '公司4',
    img: 'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*lUdjTqQix48AAAAAAAAAAABkARQnAQ'
  }, {
    name: '公司5',
    img: 'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*1q8NQZ9GaN0AAAAAAAAAAABkARQnAQ'
  }, {
    name: '公司6',
    img: 'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*SqmTSqj4FjEAAAAAAAAAAABkARQnAQ'
  }, {
    name: '公司7',
    img: 'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*1q8NQZ9GaN0AAAAAAAAAAABkARQnAQ'
  }, {
    name: '公司8',
    img: 'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*SqmTSqj4FjEAAAAAAAAAAABkARQnAQ'
  }];
  var cases = [{
    logo: 'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*2Ij9T76DyCcAAAAAAAAAAABkARQnAQ',
    isAppLogo: true,
    title: '灯塔专业版',
    description: '深入金融的基金深入金融的基金深入金融的基金深入金融的基金深入金融的基金深入金融的基金深入金融的基金深入金融的基金深入金融的基金深入金融的基金深入金融的基金',
    link: '#',
    image: 'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*oCd7Sq3N-QEAAAAAAAAAAABkARQnAQ'
  }, {
    logo: 'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*ekkhR7ISzUsAAAAAAAAAAABkARQnAQ',
    title: '灯塔专业版2',
    description: '深2222222入金融的基金深入金融的基金深2222222入金融的基金深入金融的基金深2222222入金融的基金深入金融的基金',
    image: 'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*oCd7Sq3N-QEAAAAAAAAAAABkARQnAQ'
  }];
  var bannerButtons = [{
    text: t('图表示例'),
    link: '#features',
    type: 'primary'
  }, {
    text: t('下载使用'),
    link: 'https://antv.alipay.com/zh-cn/index.html' // `/${i18n.language}/examples/basic`

  }];
  return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(Seo["a" /* default */], {
    title: t('蚂蚁数据可视化'),
    lang: i18n.language
  }), react_default.a.createElement(components_Banner, {
    coverImage: react_default.a.createElement(components_BannerSVG, null),
    title: t('让数据栩栩如生'),
    description: t('AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。'),
    className: "banner",
    buttons: bannerButtons,
    showGithubStars: false,
    video: "https://mdn.alipayobjects.com/afts/file/A*qmPlRYhAlBkAAAAAAAAAAABjAQAAAQ?bz=antv_site",
    onCloseVideo: function onCloseVideo() {
      console.log('close'); // eslint-disable-line no-console
    },
    onPlayVideo: function onPlayVideo() {
      console.log('paly'); // eslint-disable-line no-console
    }
  }), react_default.a.createElement(components_Features, {
    id: "features",
    features: features,
    title: "\u6211\u4EEC\u7684\u4F18\u52BF",
    style: {
      width: '100%'
    }
  }), react_default.a.createElement(components_Features, {
    features: features,
    style: {
      width: '100%'
    }
  }), react_default.a.createElement(components_Cases, {
    cases: cases
  }), react_default.a.createElement(components_Companies, {
    title: t('合作公司'),
    companies: companies
  }));
};

/* harmony default export */ var index_zh = __webpack_exports__["default"] = (index_zh_IndexPage);

/***/ }),

/***/ "jFWS":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("Z8gF");

var camel2hyphen = function camel2hyphen(str) {
  return str.replace(/[A-Z]/g, function (match) {
    return '-' + match.toLowerCase();
  }).toLowerCase();
};

module.exports = camel2hyphen;

/***/ }),

/***/ "jffb":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {__webpack_require__("Z8gF");

__webpack_require__("4aJ6");

__webpack_require__("M/4x");

__webpack_require__("t91x");

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';
/** Used as references for various `Number` constants. */

var NAN = 0 / 0;
/** `Object#toString` result references. */

var symbolTag = '[object Symbol]';
/** Used to match leading and trailing whitespace. */

var reTrim = /^\s+|\s+$/g;
/** Used to detect bad signed hexadecimal string values. */

var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */

var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */

var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */

var freeParseInt = parseInt;
/** Detect free variable `global` from Node.js. */

var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
/** Detect free variable `self`. */

var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
/** Used for built-in method references. */

var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var objectToString = objectProto.toString;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeMax = Math.max,
    nativeMin = Math.min;
/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */

var now = function now() {
  return root.Date.now();
};
/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */


function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  wait = toNumber(wait) || 0;

  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;
    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time; // Start the timer for the trailing edge.

    timerId = setTimeout(timerExpired, wait); // Invoke the leading edge.

    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;
    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime; // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.

    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }

  function timerExpired() {
    var time = now();

    if (shouldInvoke(time)) {
      return trailingEdge(time);
    } // Restart the timer.


    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined; // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.

    if (trailing && lastArgs) {
      return invokeFunc(time);
    }

    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }

    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }

      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }

    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }

    return result;
  }

  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
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
  return !!value && (type == 'object' || type == 'function');
}
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
  return !!value && typeof value == 'object';
}
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
  return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */


function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }

  if (isSymbol(value)) {
    return NAN;
  }

  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }

  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }

  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

module.exports = debounce;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("pCvA")))

/***/ }),

/***/ "kd9Q":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("4aJ6");

__webpack_require__("M/4x");

__webpack_require__("t91x");

/**
 * Helper function for iterating over a collection
 *
 * @param collection
 * @param fn
 */
function each(collection, fn) {
  var i = 0,
      length = collection.length,
      cont;

  for (i; i < length; i++) {
    cont = fn(collection[i], i);

    if (cont === false) {
      break; //allow early exit
    }
  }
}
/**
 * Helper function for determining whether target object is an array
 *
 * @param target the object under test
 * @return {Boolean} true if array, false otherwise
 */


function isArray(target) {
  return Object.prototype.toString.apply(target) === '[object Array]';
}
/**
 * Helper function for determining whether target object is a function
 *
 * @param target the object under test
 * @return {Boolean} true if function, false otherwise
 */


function isFunction(target) {
  return typeof target === 'function';
}

module.exports = {
  isFunction: isFunction,
  isArray: isArray,
  each: each
};

/***/ }),

/***/ "kg3M":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("2UZ+");

__webpack_require__("oMRA");

__webpack_require__("6d4m");

__webpack_require__("7lGJ");

__webpack_require__("lQyR");

__webpack_require__("YhIr");

__webpack_require__("o7PZ");

__webpack_require__("d3/y");

var _interopRequireWildcard = __webpack_require__("vdEC");

var _interopRequireDefault = __webpack_require__("63Ad");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("SDJZ"));

var _createClass2 = _interopRequireDefault(__webpack_require__("NToG"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("K4DB"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("+IV6"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("T1e2"));

var _inherits2 = _interopRequireDefault(__webpack_require__("eef+"));

var _propTypes = _interopRequireDefault(__webpack_require__("W0B4"));

var _react = _interopRequireWildcard(__webpack_require__("mXGw"));

var _classnames = _interopRequireDefault(__webpack_require__("8Jek"));

var _MenuButton = _interopRequireDefault(__webpack_require__("CDtY"));

var propTypes = {
  player: _propTypes["default"].object,
  actions: _propTypes["default"].object,
  className: _propTypes["default"].string,
  offMenuText: _propTypes["default"].string,
  showOffMenu: _propTypes["default"].bool,
  kinds: _propTypes["default"].array
};
var defaultProps = {
  offMenuText: 'Off',
  showOffMenu: true,
  kinds: ['captions', 'subtitles'] // `kind`s of TextTrack to look for to associate it with this menu.

};

var ClosedCaptionButton =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(ClosedCaptionButton, _Component);

  function ClosedCaptionButton(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, ClosedCaptionButton);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ClosedCaptionButton).call(this, props, context));
    _this.getTextTrackItems = _this.getTextTrackItems.bind((0, _assertThisInitialized2["default"])(_this));
    _this.updateState = _this.updateState.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleSelectItem = _this.handleSelectItem.bind((0, _assertThisInitialized2["default"])(_this));
    _this.state = _this.getTextTrackItems();
    return _this;
  }

  (0, _createClass2["default"])(ClosedCaptionButton, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.updateState();
    }
  }, {
    key: "getTextTrackItems",
    value: function getTextTrackItems() {
      var _this$props = this.props,
          kinds = _this$props.kinds,
          player = _this$props.player,
          offMenuText = _this$props.offMenuText,
          showOffMenu = _this$props.showOffMenu;
      var textTracks = player.textTracks,
          activeTextTrack = player.activeTextTrack;
      var textTrackItems = {
        items: [],
        selectedIndex: 0
      };
      var tracks = Array.from(textTracks || []);

      if (tracks.length === 0) {
        return textTrackItems;
      }

      if (showOffMenu) {
        textTrackItems.items.push({
          label: offMenuText || 'Off',
          value: null
        });
      }

      tracks.forEach(function (textTrack) {
        // ignore invalid text track kind
        if (kinds.length && !kinds.includes(textTrack.kind)) {
          return;
        }

        textTrackItems.items.push({
          label: textTrack.label,
          value: textTrack.language
        });
      });
      textTrackItems.selectedIndex = textTrackItems.items.findIndex(function (item) {
        return activeTextTrack && activeTextTrack.language === item.value;
      });

      if (textTrackItems.selectedIndex === -1) {
        textTrackItems.selectedIndex = 0;
      }

      return textTrackItems;
    }
  }, {
    key: "updateState",
    value: function updateState() {
      var textTrackItems = this.getTextTrackItems();

      if (textTrackItems.selectedIndex !== this.state.selectedIndex || !this.textTrackItemsAreEqual(textTrackItems.items, this.state.items)) {
        this.setState(textTrackItems);
      }
    }
  }, {
    key: "textTrackItemsAreEqual",
    value: function textTrackItemsAreEqual(items1, items2) {
      if (items1.length !== items2.length) {
        return false;
      }

      for (var i = 0; i < items1.length; i++) {
        if (!items2[i] || items1[i].label !== items2[i].label || items1[i].value !== items2[i].value) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "handleSelectItem",
    value: function handleSelectItem(index) {
      var _this$props2 = this.props,
          player = _this$props2.player,
          actions = _this$props2.actions,
          showOffMenu = _this$props2.showOffMenu;
      var textTracks = player.textTracks; // For the 'subtitles-off' button, the first condition will never match
      // so all subtitles will be turned off

      Array.from(textTracks).forEach(function (textTrack, i) {
        // if it shows the `Off` menu, the first item is `Off`
        if (index === (showOffMenu ? i + 1 : i)) {
          textTrack.mode = 'showing';
          actions.activateTextTrack(textTrack);
        } else {
          textTrack.mode = 'hidden';
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          items = _this$state.items,
          selectedIndex = _this$state.selectedIndex;
      return _react["default"].createElement(_MenuButton["default"], {
        className: (0, _classnames["default"])('video-react-closed-caption', this.props.className),
        onSelectItem: this.handleSelectItem,
        items: items,
        selectedIndex: selectedIndex
      }, _react["default"].createElement("span", {
        className: "video-react-control-text"
      }, "Closed Caption"));
    }
  }]);
  return ClosedCaptionButton;
}(_react.Component);

ClosedCaptionButton.propTypes = propTypes;
ClosedCaptionButton.defaultProps = defaultProps;
ClosedCaptionButton.displayName = 'ClosedCaptionButton';
var _default = ClosedCaptionButton;
exports["default"] = _default;

/***/ }),

/***/ "kluZ":
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "l+eI":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("d3/y");

var _interopRequireDefault = __webpack_require__("63Ad");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PlayProgressBar;

var _propTypes = _interopRequireDefault(__webpack_require__("W0B4"));

var _react = _interopRequireDefault(__webpack_require__("mXGw"));

var _classnames = _interopRequireDefault(__webpack_require__("8Jek"));

var _utils = __webpack_require__("xcnx");

var propTypes = {
  currentTime: _propTypes["default"].number,
  duration: _propTypes["default"].number,
  percentage: _propTypes["default"].string,
  className: _propTypes["default"].string
}; // Shows play progress

function PlayProgressBar(_ref) {
  var currentTime = _ref.currentTime,
      duration = _ref.duration,
      percentage = _ref.percentage,
      className = _ref.className;
  return _react["default"].createElement("div", {
    "data-current-time": (0, _utils.formatTime)(currentTime, duration),
    className: (0, _classnames["default"])('video-react-play-progress video-react-slider-bar', className),
    style: {
      width: percentage
    }
  }, _react["default"].createElement("span", {
    className: "video-react-control-text"
  }, "Progress: ".concat(percentage)));
}

PlayProgressBar.propTypes = propTypes;
PlayProgressBar.displayName = 'PlayProgressBar';

/***/ }),

/***/ "lUS9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("e2Kn");

__webpack_require__("PAbq");

__webpack_require__("1qKx");

__webpack_require__("6/FK");

__webpack_require__("2Tod");

__webpack_require__("7lGJ");

__webpack_require__("9p7t");

__webpack_require__("+jjx");

__webpack_require__("W1QL");

__webpack_require__("K/PF");

__webpack_require__("t91x");

__webpack_require__("75LO");

__webpack_require__("V7cS");

__webpack_require__("ABKx");

__webpack_require__("5hJT");

__webpack_require__("d3/y");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InnerSlider = void 0;

var _react = _interopRequireDefault(__webpack_require__("mXGw"));

var _reactDom = _interopRequireDefault(__webpack_require__("xARA"));

var _initialState = _interopRequireDefault(__webpack_require__("NgIc"));

var _lodash = _interopRequireDefault(__webpack_require__("jffb"));

var _classnames = _interopRequireDefault(__webpack_require__("8Jek"));

var _innerSliderUtils = __webpack_require__("iWpb");

var _track = __webpack_require__("wMKW");

var _dots = __webpack_require__("6oRp");

var _arrows = __webpack_require__("BoRb");

var _resizeObserverPolyfill = _interopRequireDefault(__webpack_require__("iXzu"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
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

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
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

var InnerSlider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InnerSlider, _React$Component);

  function InnerSlider(props) {
    var _this;

    _classCallCheck(this, InnerSlider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InnerSlider).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "listRefHandler", function (ref) {
      return _this.list = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "trackRefHandler", function (ref) {
      return _this.track = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "adaptHeight", function () {
      if (_this.props.adaptiveHeight && _this.list) {
        var elem = _this.list.querySelector("[data-index=\"".concat(_this.state.currentSlide, "\"]"));

        _this.list.style.height = (0, _innerSliderUtils.getHeight)(elem) + "px";
      }
    });

    _defineProperty(_assertThisInitialized(_this), "UNSAFE_componentWillMount", function () {
      _this.ssrInit();

      _this.props.onInit && _this.props.onInit();

      if (_this.props.lazyLoad) {
        var slidesToLoad = (0, _innerSliderUtils.getOnDemandLazySlides)(_objectSpread({}, _this.props, {}, _this.state));

        if (slidesToLoad.length > 0) {
          _this.setState(function (prevState) {
            return {
              lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad)
            };
          });

          if (_this.props.onLazyLoad) {
            _this.props.onLazyLoad(slidesToLoad);
          }
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      var spec = _objectSpread({
        listRef: _this.list,
        trackRef: _this.track
      }, _this.props);

      _this.updateState(spec, true, function () {
        _this.adaptHeight();

        _this.props.autoplay && _this.autoPlay("update");
      });

      if (_this.props.lazyLoad === "progressive") {
        _this.lazyLoadTimer = setInterval(_this.progressiveLazyLoad, 1000);
      }

      _this.ro = new _resizeObserverPolyfill["default"](function () {
        if (_this.state.animating) {
          _this.onWindowResized(false); // don't set trackStyle hence don't break animation


          _this.callbackTimers.push(setTimeout(function () {
            return _this.onWindowResized();
          }, _this.props.speed));
        } else {
          _this.onWindowResized();
        }
      });

      _this.ro.observe(_this.list);

      Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"), function (slide) {
        slide.onfocus = _this.props.pauseOnFocus ? _this.onSlideFocus : null;
        slide.onblur = _this.props.pauseOnFocus ? _this.onSlideBlur : null;
      }); // To support server-side rendering

      if (!window) {
        return;
      }

      if (window.addEventListener) {
        window.addEventListener("resize", _this.onWindowResized);
      } else {
        window.attachEvent("onresize", _this.onWindowResized);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function () {
      if (_this.animationEndCallback) {
        clearTimeout(_this.animationEndCallback);
      }

      if (_this.lazyLoadTimer) {
        clearInterval(_this.lazyLoadTimer);
      }

      if (_this.callbackTimers.length) {
        _this.callbackTimers.forEach(function (timer) {
          return clearTimeout(timer);
        });

        _this.callbackTimers = [];
      }

      if (window.addEventListener) {
        window.removeEventListener("resize", _this.onWindowResized);
      } else {
        window.detachEvent("onresize", _this.onWindowResized);
      }

      if (_this.autoplayTimer) {
        clearInterval(_this.autoplayTimer);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "UNSAFE_componentWillReceiveProps", function (nextProps) {
      var spec = _objectSpread({
        listRef: _this.list,
        trackRef: _this.track
      }, nextProps, {}, _this.state);

      var setTrackStyle = false;

      for (var _i = 0, _Object$keys = Object.keys(_this.props); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];

        if (!nextProps.hasOwnProperty(key)) {
          setTrackStyle = true;
          break;
        }

        if (_typeof(nextProps[key]) === "object" || typeof nextProps[key] === "function") {
          continue;
        }

        if (nextProps[key] !== _this.props[key]) {
          setTrackStyle = true;
          break;
        }
      }

      _this.updateState(spec, setTrackStyle, function () {
        if (_this.state.currentSlide >= _react["default"].Children.count(nextProps.children)) {
          _this.changeSlide({
            message: "index",
            index: _react["default"].Children.count(nextProps.children) - nextProps.slidesToShow,
            currentSlide: _this.state.currentSlide
          });
        }

        if (nextProps.autoplay) {
          _this.autoPlay("update");
        } else {
          _this.pause("paused");
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function () {
      _this.checkImagesLoad();

      _this.props.onReInit && _this.props.onReInit();

      if (_this.props.lazyLoad) {
        var slidesToLoad = (0, _innerSliderUtils.getOnDemandLazySlides)(_objectSpread({}, _this.props, {}, _this.state));

        if (slidesToLoad.length > 0) {
          _this.setState(function (prevState) {
            return {
              lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad)
            };
          });

          if (_this.props.onLazyLoad) {
            _this.props.onLazyLoad(slidesToLoad);
          }
        }
      } // if (this.props.onLazyLoad) {
      //   this.props.onLazyLoad([leftMostSlide])
      // }


      _this.adaptHeight();
    });

    _defineProperty(_assertThisInitialized(_this), "onWindowResized", function (setTrackStyle) {
      if (_this.debouncedResize) _this.debouncedResize.cancel();
      _this.debouncedResize = (0, _lodash["default"])(function () {
        return _this.resizeWindow(setTrackStyle);
      }, 50);

      _this.debouncedResize();
    });

    _defineProperty(_assertThisInitialized(_this), "resizeWindow", function () {
      var setTrackStyle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (!_reactDom["default"].findDOMNode(_this.track)) return;

      var spec = _objectSpread({
        listRef: _this.list,
        trackRef: _this.track
      }, _this.props, {}, _this.state);

      _this.updateState(spec, setTrackStyle, function () {
        if (_this.props.autoplay) _this.autoPlay("update");else _this.pause("paused");
      }); // animating state should be cleared while resizing, otherwise autoplay stops working


      _this.setState({
        animating: false
      });

      clearTimeout(_this.animationEndCallback);
      delete _this.animationEndCallback;
    });

    _defineProperty(_assertThisInitialized(_this), "updateState", function (spec, setTrackStyle, callback) {
      var updatedState = (0, _innerSliderUtils.initializedState)(spec);
      spec = _objectSpread({}, spec, {}, updatedState, {
        slideIndex: updatedState.currentSlide
      });
      var targetLeft = (0, _innerSliderUtils.getTrackLeft)(spec);
      spec = _objectSpread({}, spec, {
        left: targetLeft
      });
      var trackStyle = (0, _innerSliderUtils.getTrackCSS)(spec);

      if (setTrackStyle || _react["default"].Children.count(_this.props.children) !== _react["default"].Children.count(spec.children)) {
        updatedState["trackStyle"] = trackStyle;
      }

      _this.setState(updatedState, callback);
    });

    _defineProperty(_assertThisInitialized(_this), "ssrInit", function () {
      if (_this.props.variableWidth) {
        var _trackWidth = 0,
            _trackLeft = 0;
        var childrenWidths = [];
        var preClones = (0, _innerSliderUtils.getPreClones)(_objectSpread({}, _this.props, {}, _this.state, {
          slideCount: _this.props.children.length
        }));
        var postClones = (0, _innerSliderUtils.getPostClones)(_objectSpread({}, _this.props, {}, _this.state, {
          slideCount: _this.props.children.length
        }));

        _this.props.children.forEach(function (child) {
          childrenWidths.push(child.props.style.width);
          _trackWidth += child.props.style.width;
        });

        for (var i = 0; i < preClones; i++) {
          _trackLeft += childrenWidths[childrenWidths.length - 1 - i];
          _trackWidth += childrenWidths[childrenWidths.length - 1 - i];
        }

        for (var _i2 = 0; _i2 < postClones; _i2++) {
          _trackWidth += childrenWidths[_i2];
        }

        for (var _i3 = 0; _i3 < _this.state.currentSlide; _i3++) {
          _trackLeft += childrenWidths[_i3];
        }

        var _trackStyle = {
          width: _trackWidth + "px",
          left: -_trackLeft + "px"
        };

        if (_this.props.centerMode) {
          var currentWidth = "".concat(childrenWidths[_this.state.currentSlide], "px");
          _trackStyle.left = "calc(".concat(_trackStyle.left, " + (100% - ").concat(currentWidth, ") / 2 ) ");
        }

        _this.setState({
          trackStyle: _trackStyle
        });

        return;
      }

      var childrenCount = _react["default"].Children.count(_this.props.children);

      var spec = _objectSpread({}, _this.props, {}, _this.state, {
        slideCount: childrenCount
      });

      var slideCount = (0, _innerSliderUtils.getPreClones)(spec) + (0, _innerSliderUtils.getPostClones)(spec) + childrenCount;
      var trackWidth = 100 / _this.props.slidesToShow * slideCount;
      var slideWidth = 100 / slideCount;
      var trackLeft = -slideWidth * ((0, _innerSliderUtils.getPreClones)(spec) + _this.state.currentSlide) * trackWidth / 100;

      if (_this.props.centerMode) {
        trackLeft += (100 - slideWidth * trackWidth / 100) / 2;
      }

      var trackStyle = {
        width: trackWidth + "%",
        left: trackLeft + "%"
      };

      _this.setState({
        slideWidth: slideWidth + "%",
        trackStyle: trackStyle
      });
    });

    _defineProperty(_assertThisInitialized(_this), "checkImagesLoad", function () {
      var images = document.querySelectorAll(".slick-slide img");
      var imagesCount = images.length,
          loadedCount = 0;
      Array.prototype.forEach.call(images, function (image) {
        var handler = function handler() {
          return ++loadedCount && loadedCount >= imagesCount && _this.onWindowResized();
        };

        if (!image.onclick) {
          image.onclick = function () {
            return image.parentNode.focus();
          };
        } else {
          var prevClickHandler = image.onclick;

          image.onclick = function () {
            prevClickHandler();
            image.parentNode.focus();
          };
        }

        if (!image.onload) {
          if (_this.props.lazyLoad) {
            image.onload = function () {
              _this.adaptHeight();

              _this.callbackTimers.push(setTimeout(_this.onWindowResized, _this.props.speed));
            };
          } else {
            image.onload = handler;

            image.onerror = function () {
              handler();
              _this.props.onLazyLoadError && _this.props.onLazyLoadError();
            };
          }
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "progressiveLazyLoad", function () {
      var slidesToLoad = [];

      var spec = _objectSpread({}, _this.props, {}, _this.state);

      for (var index = _this.state.currentSlide; index < _this.state.slideCount + (0, _innerSliderUtils.getPostClones)(spec); index++) {
        if (_this.state.lazyLoadedList.indexOf(index) < 0) {
          slidesToLoad.push(index);
          break;
        }
      }

      for (var _index = _this.state.currentSlide - 1; _index >= -(0, _innerSliderUtils.getPreClones)(spec); _index--) {
        if (_this.state.lazyLoadedList.indexOf(_index) < 0) {
          slidesToLoad.push(_index);
          break;
        }
      }

      if (slidesToLoad.length > 0) {
        _this.setState(function (state) {
          return {
            lazyLoadedList: state.lazyLoadedList.concat(slidesToLoad)
          };
        });

        if (_this.props.onLazyLoad) {
          _this.props.onLazyLoad(slidesToLoad);
        }
      } else {
        if (_this.lazyLoadTimer) {
          clearInterval(_this.lazyLoadTimer);
          delete _this.lazyLoadTimer;
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "slideHandler", function (index) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var _this$props = _this.props,
          asNavFor = _this$props.asNavFor,
          beforeChange = _this$props.beforeChange,
          onLazyLoad = _this$props.onLazyLoad,
          speed = _this$props.speed,
          afterChange = _this$props.afterChange; // capture currentslide before state is updated

      var currentSlide = _this.state.currentSlide;

      var _slideHandler = (0, _innerSliderUtils.slideHandler)(_objectSpread({
        index: index
      }, _this.props, {}, _this.state, {
        trackRef: _this.track,
        useCSS: _this.props.useCSS && !dontAnimate
      })),
          state = _slideHandler.state,
          nextState = _slideHandler.nextState;

      if (!state) return;
      beforeChange && beforeChange(currentSlide, state.currentSlide);
      var slidesToLoad = state.lazyLoadedList.filter(function (value) {
        return _this.state.lazyLoadedList.indexOf(value) < 0;
      });
      onLazyLoad && slidesToLoad.length > 0 && onLazyLoad(slidesToLoad);

      _this.setState(state, function () {
        asNavFor && asNavFor.innerSlider.slideHandler(index);
        if (!nextState) return;
        _this.animationEndCallback = setTimeout(function () {
          var animating = nextState.animating,
              firstBatch = _objectWithoutProperties(nextState, ["animating"]);

          _this.setState(firstBatch, function () {
            _this.callbackTimers.push(setTimeout(function () {
              return _this.setState({
                animating: animating
              });
            }, 10));

            afterChange && afterChange(state.currentSlide);
            delete _this.animationEndCallback;
          });
        }, speed);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changeSlide", function (options) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var spec = _objectSpread({}, _this.props, {}, _this.state);

      var targetSlide = (0, _innerSliderUtils.changeSlide)(spec, options);
      if (targetSlide !== 0 && !targetSlide) return;

      if (dontAnimate === true) {
        _this.slideHandler(targetSlide, dontAnimate);
      } else {
        _this.slideHandler(targetSlide);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "clickHandler", function (e) {
      if (_this.clickable === false) {
        e.stopPropagation();
        e.preventDefault();
      }

      _this.clickable = true;
    });

    _defineProperty(_assertThisInitialized(_this), "keyHandler", function (e) {
      var dir = (0, _innerSliderUtils.keyHandler)(e, _this.props.accessibility, _this.props.rtl);
      dir !== "" && _this.changeSlide({
        message: dir
      });
    });

    _defineProperty(_assertThisInitialized(_this), "selectHandler", function (options) {
      _this.changeSlide(options);
    });

    _defineProperty(_assertThisInitialized(_this), "disableBodyScroll", function () {
      var preventDefault = function preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault) e.preventDefault();
        e.returnValue = false;
      };

      window.ontouchmove = preventDefault;
    });

    _defineProperty(_assertThisInitialized(_this), "enableBodyScroll", function () {
      window.ontouchmove = null;
    });

    _defineProperty(_assertThisInitialized(_this), "swipeStart", function (e) {
      if (_this.props.verticalSwiping) {
        _this.disableBodyScroll();
      }

      var state = (0, _innerSliderUtils.swipeStart)(e, _this.props.swipe, _this.props.draggable);
      state !== "" && _this.setState(state);
    });

    _defineProperty(_assertThisInitialized(_this), "swipeMove", function (e) {
      var state = (0, _innerSliderUtils.swipeMove)(e, _objectSpread({}, _this.props, {}, _this.state, {
        trackRef: _this.track,
        listRef: _this.list,
        slideIndex: _this.state.currentSlide
      }));
      if (!state) return;

      if (state["swiping"]) {
        _this.clickable = false;
      }

      _this.setState(state);
    });

    _defineProperty(_assertThisInitialized(_this), "swipeEnd", function (e) {
      var state = (0, _innerSliderUtils.swipeEnd)(e, _objectSpread({}, _this.props, {}, _this.state, {
        trackRef: _this.track,
        listRef: _this.list,
        slideIndex: _this.state.currentSlide
      }));
      if (!state) return;
      var triggerSlideHandler = state["triggerSlideHandler"];
      delete state["triggerSlideHandler"];

      _this.setState(state);

      if (triggerSlideHandler === undefined) return;

      _this.slideHandler(triggerSlideHandler);

      if (_this.props.verticalSwiping) {
        _this.enableBodyScroll();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "slickPrev", function () {
      // this and fellow methods are wrapped in setTimeout
      // to make sure initialize setState has happened before
      // any of such methods are called
      _this.callbackTimers.push(setTimeout(function () {
        return _this.changeSlide({
          message: "previous"
        });
      }, 0));
    });

    _defineProperty(_assertThisInitialized(_this), "slickNext", function () {
      _this.callbackTimers.push(setTimeout(function () {
        return _this.changeSlide({
          message: "next"
        });
      }, 0));
    });

    _defineProperty(_assertThisInitialized(_this), "slickGoTo", function (slide) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      slide = Number(slide);
      if (isNaN(slide)) return "";

      _this.callbackTimers.push(setTimeout(function () {
        return _this.changeSlide({
          message: "index",
          index: slide,
          currentSlide: _this.state.currentSlide
        }, dontAnimate);
      }, 0));
    });

    _defineProperty(_assertThisInitialized(_this), "play", function () {
      var nextIndex;

      if (_this.props.rtl) {
        nextIndex = _this.state.currentSlide - _this.props.slidesToScroll;
      } else {
        if ((0, _innerSliderUtils.canGoNext)(_objectSpread({}, _this.props, {}, _this.state))) {
          nextIndex = _this.state.currentSlide + _this.props.slidesToScroll;
        } else {
          return false;
        }
      }

      _this.slideHandler(nextIndex);
    });

    _defineProperty(_assertThisInitialized(_this), "autoPlay", function (playType) {
      if (_this.autoplayTimer) {
        clearInterval(_this.autoplayTimer);
      }

      var autoplaying = _this.state.autoplaying;

      if (playType === "update") {
        if (autoplaying === "hovered" || autoplaying === "focused" || autoplaying === "paused") {
          return;
        }
      } else if (playType === "leave") {
        if (autoplaying === "paused" || autoplaying === "focused") {
          return;
        }
      } else if (playType === "blur") {
        if (autoplaying === "paused" || autoplaying === "hovered") {
          return;
        }
      }

      _this.autoplayTimer = setInterval(_this.play, _this.props.autoplaySpeed + 50);

      _this.setState({
        autoplaying: "playing"
      });
    });

    _defineProperty(_assertThisInitialized(_this), "pause", function (pauseType) {
      if (_this.autoplayTimer) {
        clearInterval(_this.autoplayTimer);
        _this.autoplayTimer = null;
      }

      var autoplaying = _this.state.autoplaying;

      if (pauseType === "paused") {
        _this.setState({
          autoplaying: "paused"
        });
      } else if (pauseType === "focused") {
        if (autoplaying === "hovered" || autoplaying === "playing") {
          _this.setState({
            autoplaying: "focused"
          });
        }
      } else {
        // pauseType  is 'hovered'
        if (autoplaying === "playing") {
          _this.setState({
            autoplaying: "hovered"
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onDotsOver", function () {
      return _this.props.autoplay && _this.pause("hovered");
    });

    _defineProperty(_assertThisInitialized(_this), "onDotsLeave", function () {
      return _this.props.autoplay && _this.state.autoplaying === "hovered" && _this.autoPlay("leave");
    });

    _defineProperty(_assertThisInitialized(_this), "onTrackOver", function () {
      return _this.props.autoplay && _this.pause("hovered");
    });

    _defineProperty(_assertThisInitialized(_this), "onTrackLeave", function () {
      return _this.props.autoplay && _this.state.autoplaying === "hovered" && _this.autoPlay("leave");
    });

    _defineProperty(_assertThisInitialized(_this), "onSlideFocus", function () {
      return _this.props.autoplay && _this.pause("focused");
    });

    _defineProperty(_assertThisInitialized(_this), "onSlideBlur", function () {
      return _this.props.autoplay && _this.state.autoplaying === "focused" && _this.autoPlay("blur");
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      var className = (0, _classnames["default"])("slick-slider", _this.props.className, {
        "slick-vertical": _this.props.vertical,
        "slick-initialized": true
      });

      var spec = _objectSpread({}, _this.props, {}, _this.state);

      var trackProps = (0, _innerSliderUtils.extractObject)(spec, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding"]);
      var pauseOnHover = _this.props.pauseOnHover;
      trackProps = _objectSpread({}, trackProps, {
        onMouseEnter: pauseOnHover ? _this.onTrackOver : null,
        onMouseLeave: pauseOnHover ? _this.onTrackLeave : null,
        onMouseOver: pauseOnHover ? _this.onTrackOver : null,
        focusOnSelect: _this.props.focusOnSelect ? _this.selectHandler : null
      });
      var dots;

      if (_this.props.dots === true && _this.state.slideCount >= _this.props.slidesToShow) {
        var dotProps = (0, _innerSliderUtils.extractObject)(spec, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]);
        var pauseOnDotsHover = _this.props.pauseOnDotsHover;
        dotProps = _objectSpread({}, dotProps, {
          clickHandler: _this.changeSlide,
          onMouseEnter: pauseOnDotsHover ? _this.onDotsLeave : null,
          onMouseOver: pauseOnDotsHover ? _this.onDotsOver : null,
          onMouseLeave: pauseOnDotsHover ? _this.onDotsLeave : null
        });
        dots = _react["default"].createElement(_dots.Dots, dotProps);
      }

      var prevArrow, nextArrow;
      var arrowProps = (0, _innerSliderUtils.extractObject)(spec, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
      arrowProps.clickHandler = _this.changeSlide;

      if (_this.props.arrows) {
        prevArrow = _react["default"].createElement(_arrows.PrevArrow, arrowProps);
        nextArrow = _react["default"].createElement(_arrows.NextArrow, arrowProps);
      }

      var verticalHeightStyle = null;

      if (_this.props.vertical) {
        verticalHeightStyle = {
          height: _this.state.listHeight
        };
      }

      var centerPaddingStyle = null;

      if (_this.props.vertical === false) {
        if (_this.props.centerMode === true) {
          centerPaddingStyle = {
            padding: "0px " + _this.props.centerPadding
          };
        }
      } else {
        if (_this.props.centerMode === true) {
          centerPaddingStyle = {
            padding: _this.props.centerPadding + " 0px"
          };
        }
      }

      var listStyle = _objectSpread({}, verticalHeightStyle, {}, centerPaddingStyle);

      var touchMove = _this.props.touchMove;
      var listProps = {
        className: "slick-list",
        style: listStyle,
        onClick: _this.clickHandler,
        onMouseDown: touchMove ? _this.swipeStart : null,
        onMouseMove: _this.state.dragging && touchMove ? _this.swipeMove : null,
        onMouseUp: touchMove ? _this.swipeEnd : null,
        onMouseLeave: _this.state.dragging && touchMove ? _this.swipeEnd : null,
        onTouchStart: touchMove ? _this.swipeStart : null,
        onTouchMove: _this.state.dragging && touchMove ? _this.swipeMove : null,
        onTouchEnd: touchMove ? _this.swipeEnd : null,
        onTouchCancel: _this.state.dragging && touchMove ? _this.swipeEnd : null,
        onKeyDown: _this.props.accessibility ? _this.keyHandler : null
      };
      var innerSliderProps = {
        className: className,
        dir: "ltr",
        style: _this.props.style
      };

      if (_this.props.unslick) {
        listProps = {
          className: "slick-list"
        };
        innerSliderProps = {
          className: className
        };
      }

      return _react["default"].createElement("div", innerSliderProps, !_this.props.unslick ? prevArrow : "", _react["default"].createElement("div", _extends({
        ref: _this.listRefHandler
      }, listProps), _react["default"].createElement(_track.Track, _extends({
        ref: _this.trackRefHandler
      }, trackProps), _this.props.children)), !_this.props.unslick ? nextArrow : "", !_this.props.unslick ? dots : "");
    });

    _this.list = null;
    _this.track = null;
    _this.state = _objectSpread({}, _initialState["default"], {
      currentSlide: _this.props.initialSlide,
      slideCount: _react["default"].Children.count(_this.props.children)
    });
    _this.callbackTimers = [];
    _this.clickable = true;
    _this.debouncedResize = null;
    return _this;
  }

  return InnerSlider;
}(_react["default"].Component);

exports.InnerSlider = InnerSlider;

/***/ }),

/***/ "lphy":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__("P/oo");

__webpack_require__("Z8gF");

__webpack_require__("asZ9");

/*! https://mths.be/punycode v1.4.1 by @mathias */
;

(function (root) {
  /** Detect free variables */
  var freeExports =  true && exports && !exports.nodeType && exports;
  var freeModule =  true && module && !module.nodeType && module;
  var freeGlobal = typeof global == 'object' && global;

  if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal) {
    root = freeGlobal;
  }
  /**
   * The `punycode` object.
   * @name punycode
   * @type Object
   */


  var punycode,

  /** Highest positive signed 32-bit float value */
  maxInt = 2147483647,
      // aka. 0x7FFFFFFF or 2^31-1

  /** Bootstring parameters */
  base = 36,
      tMin = 1,
      tMax = 26,
      skew = 38,
      damp = 700,
      initialBias = 72,
      initialN = 128,
      // 0x80
  delimiter = '-',
      // '\x2D'

  /** Regular expressions */
  regexPunycode = /^xn--/,
      regexNonASCII = /[^\x20-\x7E]/,
      // unprintable ASCII chars + non-ASCII chars
  regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g,
      // RFC 3490 separators

  /** Error messages */
  errors = {
    'overflow': 'Overflow: input needs wider integers to process',
    'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
    'invalid-input': 'Invalid input'
  },

  /** Convenience shortcuts */
  baseMinusTMin = base - tMin,
      floor = Math.floor,
      stringFromCharCode = String.fromCharCode,

  /** Temporary variable */
  key;
  /*--------------------------------------------------------------------------*/

  /**
   * A generic error utility function.
   * @private
   * @param {String} type The error type.
   * @returns {Error} Throws a `RangeError` with the applicable error message.
   */

  function error(type) {
    throw new RangeError(errors[type]);
  }
  /**
   * A generic `Array#map` utility function.
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} callback The function that gets called for every array
   * item.
   * @returns {Array} A new array of values returned by the callback function.
   */


  function map(array, fn) {
    var length = array.length;
    var result = [];

    while (length--) {
      result[length] = fn(array[length]);
    }

    return result;
  }
  /**
   * A simple `Array#map`-like wrapper to work with domain name strings or email
   * addresses.
   * @private
   * @param {String} domain The domain name or email address.
   * @param {Function} callback The function that gets called for every
   * character.
   * @returns {Array} A new string of characters returned by the callback
   * function.
   */


  function mapDomain(string, fn) {
    var parts = string.split('@');
    var result = '';

    if (parts.length > 1) {
      // In email addresses, only the domain name should be punycoded. Leave
      // the local part (i.e. everything up to `@`) intact.
      result = parts[0] + '@';
      string = parts[1];
    } // Avoid `split(regex)` for IE8 compatibility. See #17.


    string = string.replace(regexSeparators, '\x2E');
    var labels = string.split('.');
    var encoded = map(labels, fn).join('.');
    return result + encoded;
  }
  /**
   * Creates an array containing the numeric code points of each Unicode
   * character in the string. While JavaScript uses UCS-2 internally,
   * this function will convert a pair of surrogate halves (each of which
   * UCS-2 exposes as separate characters) into a single code point,
   * matching UTF-16.
   * @see `punycode.ucs2.encode`
   * @see <https://mathiasbynens.be/notes/javascript-encoding>
   * @memberOf punycode.ucs2
   * @name decode
   * @param {String} string The Unicode input string (UCS-2).
   * @returns {Array} The new array of code points.
   */


  function ucs2decode(string) {
    var output = [],
        counter = 0,
        length = string.length,
        value,
        extra;

    while (counter < length) {
      value = string.charCodeAt(counter++);

      if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
        // high surrogate, and there is a next character
        extra = string.charCodeAt(counter++);

        if ((extra & 0xFC00) == 0xDC00) {
          // low surrogate
          output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
        } else {
          // unmatched surrogate; only append this code unit, in case the next
          // code unit is the high surrogate of a surrogate pair
          output.push(value);
          counter--;
        }
      } else {
        output.push(value);
      }
    }

    return output;
  }
  /**
   * Creates a string based on an array of numeric code points.
   * @see `punycode.ucs2.decode`
   * @memberOf punycode.ucs2
   * @name encode
   * @param {Array} codePoints The array of numeric code points.
   * @returns {String} The new Unicode string (UCS-2).
   */


  function ucs2encode(array) {
    return map(array, function (value) {
      var output = '';

      if (value > 0xFFFF) {
        value -= 0x10000;
        output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
        value = 0xDC00 | value & 0x3FF;
      }

      output += stringFromCharCode(value);
      return output;
    }).join('');
  }
  /**
   * Converts a basic code point into a digit/integer.
   * @see `digitToBasic()`
   * @private
   * @param {Number} codePoint The basic numeric code point value.
   * @returns {Number} The numeric value of a basic code point (for use in
   * representing integers) in the range `0` to `base - 1`, or `base` if
   * the code point does not represent a value.
   */


  function basicToDigit(codePoint) {
    if (codePoint - 48 < 10) {
      return codePoint - 22;
    }

    if (codePoint - 65 < 26) {
      return codePoint - 65;
    }

    if (codePoint - 97 < 26) {
      return codePoint - 97;
    }

    return base;
  }
  /**
   * Converts a digit/integer into a basic code point.
   * @see `basicToDigit()`
   * @private
   * @param {Number} digit The numeric value of a basic code point.
   * @returns {Number} The basic code point whose value (when used for
   * representing integers) is `digit`, which needs to be in the range
   * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
   * used; else, the lowercase form is used. The behavior is undefined
   * if `flag` is non-zero and `digit` has no uppercase form.
   */


  function digitToBasic(digit, flag) {
    //  0..25 map to ASCII a..z or A..Z
    // 26..35 map to ASCII 0..9
    return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
  }
  /**
   * Bias adaptation function as per section 3.4 of RFC 3492.
   * https://tools.ietf.org/html/rfc3492#section-3.4
   * @private
   */


  function adapt(delta, numPoints, firstTime) {
    var k = 0;
    delta = firstTime ? floor(delta / damp) : delta >> 1;
    delta += floor(delta / numPoints);

    for (;
    /* no initialization */
    delta > baseMinusTMin * tMax >> 1; k += base) {
      delta = floor(delta / baseMinusTMin);
    }

    return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
  }
  /**
   * Converts a Punycode string of ASCII-only symbols to a string of Unicode
   * symbols.
   * @memberOf punycode
   * @param {String} input The Punycode string of ASCII-only symbols.
   * @returns {String} The resulting string of Unicode symbols.
   */


  function decode(input) {
    // Don't use UCS-2
    var output = [],
        inputLength = input.length,
        out,
        i = 0,
        n = initialN,
        bias = initialBias,
        basic,
        j,
        index,
        oldi,
        w,
        k,
        digit,
        t,

    /** Cached calculation results */
    baseMinusT; // Handle the basic code points: let `basic` be the number of input code
    // points before the last delimiter, or `0` if there is none, then copy
    // the first basic code points to the output.

    basic = input.lastIndexOf(delimiter);

    if (basic < 0) {
      basic = 0;
    }

    for (j = 0; j < basic; ++j) {
      // if it's not a basic code point
      if (input.charCodeAt(j) >= 0x80) {
        error('not-basic');
      }

      output.push(input.charCodeAt(j));
    } // Main decoding loop: start just after the last delimiter if any basic code
    // points were copied; start at the beginning otherwise.


    for (index = basic > 0 ? basic + 1 : 0; index < inputLength;)
    /* no final expression */
    {
      // `index` is the index of the next character to be consumed.
      // Decode a generalized variable-length integer into `delta`,
      // which gets added to `i`. The overflow checking is easier
      // if we increase `i` as we go, then subtract off its starting
      // value at the end to obtain `delta`.
      for (oldi = i, w = 1, k = base;;
      /* no condition */
      k += base) {
        if (index >= inputLength) {
          error('invalid-input');
        }

        digit = basicToDigit(input.charCodeAt(index++));

        if (digit >= base || digit > floor((maxInt - i) / w)) {
          error('overflow');
        }

        i += digit * w;
        t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;

        if (digit < t) {
          break;
        }

        baseMinusT = base - t;

        if (w > floor(maxInt / baseMinusT)) {
          error('overflow');
        }

        w *= baseMinusT;
      }

      out = output.length + 1;
      bias = adapt(i - oldi, out, oldi == 0); // `i` was supposed to wrap around from `out` to `0`,
      // incrementing `n` each time, so we'll fix that now:

      if (floor(i / out) > maxInt - n) {
        error('overflow');
      }

      n += floor(i / out);
      i %= out; // Insert `n` at position `i` of the output

      output.splice(i++, 0, n);
    }

    return ucs2encode(output);
  }
  /**
   * Converts a string of Unicode symbols (e.g. a domain name label) to a
   * Punycode string of ASCII-only symbols.
   * @memberOf punycode
   * @param {String} input The string of Unicode symbols.
   * @returns {String} The resulting Punycode string of ASCII-only symbols.
   */


  function encode(input) {
    var n,
        delta,
        handledCPCount,
        basicLength,
        bias,
        j,
        m,
        q,
        k,
        t,
        currentValue,
        output = [],

    /** `inputLength` will hold the number of code points in `input`. */
    inputLength,

    /** Cached calculation results */
    handledCPCountPlusOne,
        baseMinusT,
        qMinusT; // Convert the input in UCS-2 to Unicode

    input = ucs2decode(input); // Cache the length

    inputLength = input.length; // Initialize the state

    n = initialN;
    delta = 0;
    bias = initialBias; // Handle the basic code points

    for (j = 0; j < inputLength; ++j) {
      currentValue = input[j];

      if (currentValue < 0x80) {
        output.push(stringFromCharCode(currentValue));
      }
    }

    handledCPCount = basicLength = output.length; // `handledCPCount` is the number of code points that have been handled;
    // `basicLength` is the number of basic code points.
    // Finish the basic string - if it is not empty - with a delimiter

    if (basicLength) {
      output.push(delimiter);
    } // Main encoding loop:


    while (handledCPCount < inputLength) {
      // All non-basic code points < n have been handled already. Find the next
      // larger one:
      for (m = maxInt, j = 0; j < inputLength; ++j) {
        currentValue = input[j];

        if (currentValue >= n && currentValue < m) {
          m = currentValue;
        }
      } // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
      // but guard against overflow


      handledCPCountPlusOne = handledCPCount + 1;

      if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
        error('overflow');
      }

      delta += (m - n) * handledCPCountPlusOne;
      n = m;

      for (j = 0; j < inputLength; ++j) {
        currentValue = input[j];

        if (currentValue < n && ++delta > maxInt) {
          error('overflow');
        }

        if (currentValue == n) {
          // Represent delta as a generalized variable-length integer
          for (q = delta, k = base;;
          /* no condition */
          k += base) {
            t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;

            if (q < t) {
              break;
            }

            qMinusT = q - t;
            baseMinusT = base - t;
            output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
            q = floor(qMinusT / baseMinusT);
          }

          output.push(stringFromCharCode(digitToBasic(q, 0)));
          bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
          delta = 0;
          ++handledCPCount;
        }
      }

      ++delta;
      ++n;
    }

    return output.join('');
  }
  /**
   * Converts a Punycode string representing a domain name or an email address
   * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
   * it doesn't matter if you call it on a string that has already been
   * converted to Unicode.
   * @memberOf punycode
   * @param {String} input The Punycoded domain name or email address to
   * convert to Unicode.
   * @returns {String} The Unicode representation of the given Punycode
   * string.
   */


  function toUnicode(input) {
    return mapDomain(input, function (string) {
      return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
    });
  }
  /**
   * Converts a Unicode string representing a domain name or an email address to
   * Punycode. Only the non-ASCII parts of the domain name will be converted,
   * i.e. it doesn't matter if you call it with a domain that's already in
   * ASCII.
   * @memberOf punycode
   * @param {String} input The domain name or email address to convert, as a
   * Unicode string.
   * @returns {String} The Punycode representation of the given domain name or
   * email address.
   */


  function toASCII(input) {
    return mapDomain(input, function (string) {
      return regexNonASCII.test(string) ? 'xn--' + encode(string) : string;
    });
  }
  /*--------------------------------------------------------------------------*/

  /** Define the public API */


  punycode = {
    /**
     * A string representing the current Punycode.js version number.
     * @memberOf punycode
     * @type String
     */
    'version': '1.4.1',

    /**
     * An object of methods to convert from JavaScript's internal character
     * representation (UCS-2) to Unicode code points, and back.
     * @see <https://mathiasbynens.be/notes/javascript-encoding>
     * @memberOf punycode
     * @type Object
     */
    'ucs2': {
      'decode': ucs2decode,
      'encode': ucs2encode
    },
    'decode': decode,
    'encode': encode,
    'toASCII': toASCII,
    'toUnicode': toUnicode
  };
  /** Expose `punycode` */
  // Some AMD build optimizers, like r.js, check for specific condition patterns
  // like the following:

  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return punycode;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("RoC8")(module), __webpack_require__("pCvA")))

/***/ }),

/***/ "ltLC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("d3/y");

var _interopRequireDefault = __webpack_require__("63Ad");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__("W0B4"));

var _react = _interopRequireDefault(__webpack_require__("mXGw"));

var _classnames = _interopRequireDefault(__webpack_require__("8Jek"));

var _utils = __webpack_require__("xcnx");

function MouseTimeDisplay(_ref) {
  var duration = _ref.duration,
      mouseTime = _ref.mouseTime,
      className = _ref.className,
      text = _ref.text;

  if (!mouseTime.time) {
    return null;
  }

  var time = text || (0, _utils.formatTime)(mouseTime.time, duration);
  return _react["default"].createElement("div", {
    className: (0, _classnames["default"])('video-react-mouse-display', className),
    style: {
      left: "".concat(mouseTime.position, "px")
    },
    "data-current-time": time
  });
}

MouseTimeDisplay.propTypes = {
  duration: _propTypes["default"].number,
  mouseTime: _propTypes["default"].object,
  className: _propTypes["default"].string
};
MouseTimeDisplay.displayName = 'MouseTimeDisplay';
var _default = MouseTimeDisplay;
exports["default"] = _default;

/***/ }),

/***/ "nEIY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("9p7t");

__webpack_require__("yIlq");

__webpack_require__("lQyR");

__webpack_require__("YhIr");

__webpack_require__("it7j");

__webpack_require__("3y5y");

__webpack_require__("o7PZ");

__webpack_require__("d3/y");

var _interopRequireWildcard = __webpack_require__("vdEC");

var _interopRequireDefault = __webpack_require__("63Ad");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__("gki9"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("SDJZ"));

var _createClass2 = _interopRequireDefault(__webpack_require__("NToG"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("K4DB"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("+IV6"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("T1e2"));

var _inherits2 = _interopRequireDefault(__webpack_require__("eef+"));

var _propTypes = _interopRequireDefault(__webpack_require__("W0B4"));

var _react = _interopRequireWildcard(__webpack_require__("mXGw"));

var _classnames = _interopRequireDefault(__webpack_require__("8Jek"));

var _utils = __webpack_require__("xcnx");

var propTypes = {
  actions: _propTypes["default"].object,
  player: _propTypes["default"].object,
  children: _propTypes["default"].any,
  startTime: _propTypes["default"].number,
  loop: _propTypes["default"].bool,
  muted: _propTypes["default"].bool,
  autoPlay: _propTypes["default"].bool,
  playsInline: _propTypes["default"].bool,
  src: _propTypes["default"].string,
  poster: _propTypes["default"].string,
  className: _propTypes["default"].string,
  preload: _propTypes["default"].oneOf(['auto', 'metadata', 'none']),
  crossOrigin: _propTypes["default"].string,
  onLoadStart: _propTypes["default"].func,
  onWaiting: _propTypes["default"].func,
  onCanPlay: _propTypes["default"].func,
  onCanPlayThrough: _propTypes["default"].func,
  onPlaying: _propTypes["default"].func,
  onEnded: _propTypes["default"].func,
  onSeeking: _propTypes["default"].func,
  onSeeked: _propTypes["default"].func,
  onPlay: _propTypes["default"].func,
  onPause: _propTypes["default"].func,
  onProgress: _propTypes["default"].func,
  onDurationChange: _propTypes["default"].func,
  onError: _propTypes["default"].func,
  onSuspend: _propTypes["default"].func,
  onAbort: _propTypes["default"].func,
  onEmptied: _propTypes["default"].func,
  onStalled: _propTypes["default"].func,
  onLoadedMetadata: _propTypes["default"].func,
  onLoadedData: _propTypes["default"].func,
  onTimeUpdate: _propTypes["default"].func,
  onRateChange: _propTypes["default"].func,
  onVolumeChange: _propTypes["default"].func,
  onResize: _propTypes["default"].func
};

var Video =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Video, _Component);

  function Video(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Video);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Video).call(this, props));
    _this.video = null; // the html5 video

    _this.play = _this.play.bind((0, _assertThisInitialized2["default"])(_this));
    _this.pause = _this.pause.bind((0, _assertThisInitialized2["default"])(_this));
    _this.seek = _this.seek.bind((0, _assertThisInitialized2["default"])(_this));
    _this.forward = _this.forward.bind((0, _assertThisInitialized2["default"])(_this));
    _this.replay = _this.replay.bind((0, _assertThisInitialized2["default"])(_this));
    _this.toggleFullscreen = _this.toggleFullscreen.bind((0, _assertThisInitialized2["default"])(_this));
    _this.getProperties = _this.getProperties.bind((0, _assertThisInitialized2["default"])(_this));
    _this.renderChildren = _this.renderChildren.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleLoadStart = _this.handleLoadStart.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleCanPlay = _this.handleCanPlay.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleCanPlayThrough = _this.handleCanPlayThrough.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handlePlay = _this.handlePlay.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handlePlaying = _this.handlePlaying.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handlePause = _this.handlePause.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleEnded = _this.handleEnded.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleWaiting = _this.handleWaiting.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleSeeking = _this.handleSeeking.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleSeeked = _this.handleSeeked.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleFullscreenChange = _this.handleFullscreenChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleError = _this.handleError.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleSuspend = _this.handleSuspend.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleAbort = _this.handleAbort.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleEmptied = _this.handleEmptied.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleStalled = _this.handleStalled.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleLoadedMetaData = _this.handleLoadedMetaData.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleLoadedData = _this.handleLoadedData.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleTimeUpdate = _this.handleTimeUpdate.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleRateChange = _this.handleRateChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleVolumeChange = _this.handleVolumeChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleDurationChange = _this.handleDurationChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleProgress = (0, _utils.throttle)(_this.handleProgress.bind((0, _assertThisInitialized2["default"])(_this)), 250);
    _this.handleKeypress = _this.handleKeypress.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleTextTrackChange = _this.handleTextTrackChange.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(Video, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.forceUpdate(); // make sure the children can get the video property

      if (this.video && this.video.textTracks) {
        this.video.textTracks.onaddtrack = this.handleTextTrackChange;
        this.video.textTracks.onremovetrack = this.handleTextTrackChange;
      }
    } // get all video properties

  }, {
    key: "getProperties",
    value: function getProperties() {
      var _this2 = this;

      if (!this.video) {
        return null;
      }

      return _utils.mediaProperties.reduce(function (properties, key) {
        properties[key] = _this2.video[key];
        return properties;
      }, {});
    } // get playback rate

  }, {
    key: "handleTextTrackChange",
    value: function handleTextTrackChange() {
      var _this$props = this.props,
          actions = _this$props.actions,
          player = _this$props.player;

      if (this.video && this.video.textTracks) {
        var activeTextTrack = Array.from(this.video.textTracks).find(function (textTrack) {
          return textTrack.mode === 'showing';
        });

        if (activeTextTrack !== player.activeTextTrack) {
          actions.activateTextTrack(activeTextTrack);
        }
      }
    } // play the video

  }, {
    key: "play",
    value: function play() {
      var promise = this.video.play();

      if (promise !== undefined) {
        promise["catch"](function () {}).then(function () {});
      }
    } // pause the video

  }, {
    key: "pause",
    value: function pause() {
      var promise = this.video.pause();

      if (promise !== undefined) {
        promise["catch"](function () {}).then(function () {});
      }
    } // Change the video source and re-load the video:

  }, {
    key: "load",
    value: function load() {
      this.video.load();
    } // Add a new text track to the video

  }, {
    key: "addTextTrack",
    value: function addTextTrack() {
      var _this$video;

      (_this$video = this.video).addTextTrack.apply(_this$video, arguments);
    } // Check if your browser can play different types of video:

  }, {
    key: "canPlayType",
    value: function canPlayType() {
      var _this$video2;

      (_this$video2 = this.video).canPlayType.apply(_this$video2, arguments);
    } // toggle play

  }, {
    key: "togglePlay",
    value: function togglePlay() {
      if (this.video.paused) {
        this.play();
      } else {
        this.pause();
      }
    } // seek video by time

  }, {
    key: "seek",
    value: function seek(time) {
      try {
        this.video.currentTime = time;
      } catch (e) {// console.log(e, 'Video is not ready.')
      }
    } // jump forward x seconds

  }, {
    key: "forward",
    value: function forward(seconds) {
      this.seek(this.video.currentTime + seconds);
    } // jump back x seconds

  }, {
    key: "replay",
    value: function replay(seconds) {
      this.forward(-seconds);
    } // enter or exist full screen

  }, {
    key: "toggleFullscreen",
    value: function toggleFullscreen() {
      var _this$props2 = this.props,
          player = _this$props2.player,
          actions = _this$props2.actions;
      actions.toggleFullscreen(player);
    } // Fired when the user agent
    // begins looking for media data

  }, {
    key: "handleLoadStart",
    value: function handleLoadStart() {
      var _this$props3 = this.props,
          actions = _this$props3.actions,
          onLoadStart = _this$props3.onLoadStart;
      actions.handleLoadStart(this.getProperties());

      if (onLoadStart) {
        onLoadStart.apply(void 0, arguments);
      }
    } // A handler for events that
    // signal that waiting has ended

  }, {
    key: "handleCanPlay",
    value: function handleCanPlay() {
      var _this$props4 = this.props,
          actions = _this$props4.actions,
          onCanPlay = _this$props4.onCanPlay;
      actions.handleCanPlay(this.getProperties());

      if (onCanPlay) {
        onCanPlay.apply(void 0, arguments);
      }
    } // A handler for events that
    // signal that waiting has ended

  }, {
    key: "handleCanPlayThrough",
    value: function handleCanPlayThrough() {
      var _this$props5 = this.props,
          actions = _this$props5.actions,
          onCanPlayThrough = _this$props5.onCanPlayThrough;
      actions.handleCanPlayThrough(this.getProperties());

      if (onCanPlayThrough) {
        onCanPlayThrough.apply(void 0, arguments);
      }
    } // A handler for events that
    // signal that waiting has ended

  }, {
    key: "handlePlaying",
    value: function handlePlaying() {
      var _this$props6 = this.props,
          actions = _this$props6.actions,
          onPlaying = _this$props6.onPlaying;
      actions.handlePlaying(this.getProperties());

      if (onPlaying) {
        onPlaying.apply(void 0, arguments);
      }
    } // Fired whenever the media has been started

  }, {
    key: "handlePlay",
    value: function handlePlay() {
      var _this$props7 = this.props,
          actions = _this$props7.actions,
          onPlay = _this$props7.onPlay;
      actions.handlePlay(this.getProperties());

      if (onPlay) {
        onPlay.apply(void 0, arguments);
      }
    } // Fired whenever the media has been paused

  }, {
    key: "handlePause",
    value: function handlePause() {
      var _this$props8 = this.props,
          actions = _this$props8.actions,
          onPause = _this$props8.onPause;
      actions.handlePause(this.getProperties());

      if (onPause) {
        onPause.apply(void 0, arguments);
      }
    } // Fired when the duration of
    // the media resource is first known or changed

  }, {
    key: "handleDurationChange",
    value: function handleDurationChange() {
      var _this$props9 = this.props,
          actions = _this$props9.actions,
          onDurationChange = _this$props9.onDurationChange;
      actions.handleDurationChange(this.getProperties());

      if (onDurationChange) {
        onDurationChange.apply(void 0, arguments);
      }
    } // Fired while the user agent
    // is downloading media data

  }, {
    key: "handleProgress",
    value: function handleProgress() {
      var _this$props10 = this.props,
          actions = _this$props10.actions,
          onProgress = _this$props10.onProgress;

      if (this.video) {
        actions.handleProgressChange(this.getProperties());
      }

      if (onProgress) {
        onProgress.apply(void 0, arguments);
      }
    } // Fired when the end of the media resource
    // is reached (currentTime == duration)

  }, {
    key: "handleEnded",
    value: function handleEnded() {
      var _this$props11 = this.props,
          loop = _this$props11.loop,
          player = _this$props11.player,
          actions = _this$props11.actions,
          onEnded = _this$props11.onEnded;

      if (loop) {
        this.seek(0);
        this.play();
      } else if (!player.paused) {
        this.pause();
      }

      actions.handleEnd(this.getProperties());

      if (onEnded) {
        onEnded.apply(void 0, arguments);
      }
    } // Fired whenever the media begins waiting

  }, {
    key: "handleWaiting",
    value: function handleWaiting() {
      var _this$props12 = this.props,
          actions = _this$props12.actions,
          onWaiting = _this$props12.onWaiting;
      actions.handleWaiting(this.getProperties());

      if (onWaiting) {
        onWaiting.apply(void 0, arguments);
      }
    } // Fired whenever the player
    // is jumping to a new time

  }, {
    key: "handleSeeking",
    value: function handleSeeking() {
      var _this$props13 = this.props,
          actions = _this$props13.actions,
          onSeeking = _this$props13.onSeeking;
      actions.handleSeeking(this.getProperties());

      if (onSeeking) {
        onSeeking.apply(void 0, arguments);
      }
    } // Fired when the player has
    // finished jumping to a new time

  }, {
    key: "handleSeeked",
    value: function handleSeeked() {
      var _this$props14 = this.props,
          actions = _this$props14.actions,
          onSeeked = _this$props14.onSeeked;
      actions.handleSeeked(this.getProperties());

      if (onSeeked) {
        onSeeked.apply(void 0, arguments);
      }
    } // Handle Fullscreen Change

  }, {
    key: "handleFullscreenChange",
    value: function handleFullscreenChange() {} // Fires when the browser is
    // intentionally not getting media data

  }, {
    key: "handleSuspend",
    value: function handleSuspend() {
      var _this$props15 = this.props,
          actions = _this$props15.actions,
          onSuspend = _this$props15.onSuspend;
      actions.handleSuspend(this.getProperties());

      if (onSuspend) {
        onSuspend.apply(void 0, arguments);
      }
    } // Fires when the loading of an audio/video is aborted

  }, {
    key: "handleAbort",
    value: function handleAbort() {
      var _this$props16 = this.props,
          actions = _this$props16.actions,
          onAbort = _this$props16.onAbort;
      actions.handleAbort(this.getProperties());

      if (onAbort) {
        onAbort.apply(void 0, arguments);
      }
    } // Fires when the current playlist is empty

  }, {
    key: "handleEmptied",
    value: function handleEmptied() {
      var _this$props17 = this.props,
          actions = _this$props17.actions,
          onEmptied = _this$props17.onEmptied;
      actions.handleEmptied(this.getProperties());

      if (onEmptied) {
        onEmptied.apply(void 0, arguments);
      }
    } // Fires when the browser is trying to
    // get media data, but data is not available

  }, {
    key: "handleStalled",
    value: function handleStalled() {
      var _this$props18 = this.props,
          actions = _this$props18.actions,
          onStalled = _this$props18.onStalled;
      actions.handleStalled(this.getProperties());

      if (onStalled) {
        onStalled.apply(void 0, arguments);
      }
    } // Fires when the browser has loaded
    // meta data for the audio/video

  }, {
    key: "handleLoadedMetaData",
    value: function handleLoadedMetaData() {
      var _this$props19 = this.props,
          actions = _this$props19.actions,
          onLoadedMetadata = _this$props19.onLoadedMetadata,
          startTime = _this$props19.startTime;

      if (startTime && startTime > 0) {
        this.video.currentTime = startTime;
      }

      actions.handleLoadedMetaData(this.getProperties());

      if (onLoadedMetadata) {
        onLoadedMetadata.apply(void 0, arguments);
      }
    } // Fires when the browser has loaded
    // the current frame of the audio/video

  }, {
    key: "handleLoadedData",
    value: function handleLoadedData() {
      var _this$props20 = this.props,
          actions = _this$props20.actions,
          onLoadedData = _this$props20.onLoadedData;
      actions.handleLoadedData(this.getProperties());

      if (onLoadedData) {
        onLoadedData.apply(void 0, arguments);
      }
    } // Fires when the current
    // playback position has changed

  }, {
    key: "handleTimeUpdate",
    value: function handleTimeUpdate() {
      var _this$props21 = this.props,
          actions = _this$props21.actions,
          onTimeUpdate = _this$props21.onTimeUpdate;
      actions.handleTimeUpdate(this.getProperties());

      if (onTimeUpdate) {
        onTimeUpdate.apply(void 0, arguments);
      }
    }
    /**
     * Fires when the playing speed of the audio/video is changed
     */

  }, {
    key: "handleRateChange",
    value: function handleRateChange() {
      var _this$props22 = this.props,
          actions = _this$props22.actions,
          onRateChange = _this$props22.onRateChange;
      actions.handleRateChange(this.getProperties());

      if (onRateChange) {
        onRateChange.apply(void 0, arguments);
      }
    } // Fires when the volume has been changed

  }, {
    key: "handleVolumeChange",
    value: function handleVolumeChange() {
      var _this$props23 = this.props,
          actions = _this$props23.actions,
          onVolumeChange = _this$props23.onVolumeChange;
      actions.handleVolumeChange(this.getProperties());

      if (onVolumeChange) {
        onVolumeChange.apply(void 0, arguments);
      }
    } // Fires when an error occurred
    // during the loading of an audio/video

  }, {
    key: "handleError",
    value: function handleError() {
      var _this$props24 = this.props,
          actions = _this$props24.actions,
          onError = _this$props24.onError;
      actions.handleError(this.getProperties());

      if (onError) {
        onError.apply(void 0, arguments);
      }
    }
  }, {
    key: "handleResize",
    value: function handleResize() {
      var _this$props25 = this.props,
          actions = _this$props25.actions,
          onResize = _this$props25.onResize;
      actions.handleResize(this.getProperties());

      if (onResize) {
        onResize.apply(void 0, arguments);
      }
    }
  }, {
    key: "handleKeypress",
    value: function handleKeypress() {}
  }, {
    key: "renderChildren",
    value: function renderChildren() {
      var _this3 = this;

      var props = (0, _objectSpread2["default"])({}, this.props, {
        video: this.video
      }); // to make sure the children can get video property

      if (!this.video) {
        return null;
      } // only keep <source />, <track />, <MyComponent isVideoChild /> elements


      return _react["default"].Children.toArray(this.props.children).filter(_utils.isVideoChild).map(function (c) {
        var cprops;

        if (typeof c.type === 'string') {
          // add onError to <source />
          if (c.type === 'source') {
            cprops = (0, _objectSpread2["default"])({}, c.props);
            var preOnError = cprops.onError;

            cprops.onError = function () {
              if (preOnError) {
                preOnError.apply(void 0, arguments);
              }

              _this3.handleError.apply(_this3, arguments);
            };
          }
        } else {
          cprops = props;
        }

        return _react["default"].cloneElement(c, cprops);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props26 = this.props,
          loop = _this$props26.loop,
          poster = _this$props26.poster,
          preload = _this$props26.preload,
          src = _this$props26.src,
          autoPlay = _this$props26.autoPlay,
          playsInline = _this$props26.playsInline,
          muted = _this$props26.muted,
          crossOrigin = _this$props26.crossOrigin,
          videoId = _this$props26.videoId;
      return _react["default"].createElement("video", {
        className: (0, _classnames["default"])('video-react-video', this.props.className),
        id: videoId,
        crossOrigin: crossOrigin,
        ref: function ref(c) {
          _this4.video = c;
        },
        muted: muted,
        preload: preload,
        loop: loop,
        playsInline: playsInline,
        autoPlay: autoPlay,
        poster: poster,
        src: src,
        onLoadStart: this.handleLoadStart,
        onWaiting: this.handleWaiting,
        onCanPlay: this.handleCanPlay,
        onCanPlayThrough: this.handleCanPlayThrough,
        onPlaying: this.handlePlaying,
        onEnded: this.handleEnded,
        onSeeking: this.handleSeeking,
        onSeeked: this.handleSeeked,
        onPlay: this.handlePlay,
        onPause: this.handlePause,
        onProgress: this.handleProgress,
        onDurationChange: this.handleDurationChange,
        onError: this.handleError,
        onSuspend: this.handleSuspend,
        onAbort: this.handleAbort,
        onEmptied: this.handleEmptied,
        onStalled: this.handleStalled,
        onLoadedMetadata: this.handleLoadedMetaData,
        onLoadedData: this.handleLoadedData,
        onTimeUpdate: this.handleTimeUpdate,
        onRateChange: this.handleRateChange,
        onVolumeChange: this.handleVolumeChange,
        tabIndex: "-1"
      }, this.renderChildren());
    }
  }, {
    key: "playbackRate",
    get: function get() {
      return this.video.playbackRate;
    } // set playback rate
    // speed of video
    ,
    set: function set(rate) {
      this.video.playbackRate = rate;
    }
  }, {
    key: "muted",
    get: function get() {
      return this.video.muted;
    },
    set: function set(val) {
      this.video.muted = val;
    }
  }, {
    key: "volume",
    get: function get() {
      return this.video.volume;
    },
    set: function set(val) {
      if (val > 1) {
        val = 1;
      }

      if (val < 0) {
        val = 0;
      }

      this.video.volume = val;
    } // video width

  }, {
    key: "videoWidth",
    get: function get() {
      return this.video.videoWidth;
    } // video height

  }, {
    key: "videoHeight",
    get: function get() {
      return this.video.videoHeight;
    }
  }]);
  return Video;
}(_react.Component);

exports["default"] = Video;
Video.propTypes = propTypes;
Video.displayName = 'Video';

/***/ }),

/***/ "oiJB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("o7PZ");

__webpack_require__("d3/y");

var _interopRequireWildcard = __webpack_require__("vdEC");

var _interopRequireDefault = __webpack_require__("63Ad");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("SDJZ"));

var _createClass2 = _interopRequireDefault(__webpack_require__("NToG"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("K4DB"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("+IV6"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("T1e2"));

var _inherits2 = _interopRequireDefault(__webpack_require__("eef+"));

var _propTypes = _interopRequireDefault(__webpack_require__("W0B4"));

var _react = _interopRequireWildcard(__webpack_require__("mXGw"));

var propTypes = {
  player: _propTypes["default"].object,
  children: _propTypes["default"].any
};

var Popup =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Popup, _Component);

  function Popup(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, Popup);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Popup).call(this, props, context));
    _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(Popup, [{
    key: "handleClick",
    value: function handleClick(event) {
      event.preventDefault(); // event.stopPropagation();
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return _react["default"].createElement("div", {
        className: "video-react-menu",
        onClick: this.handleClick
      }, _react["default"].createElement("div", {
        className: "video-react-menu-content"
      }, children));
    }
  }]);
  return Popup;
}(_react.Component);

exports["default"] = Popup;
Popup.propTypes = propTypes;
Popup.displayName = 'Popup';

/***/ }),

/***/ "p82W":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return contains; });
function contains(root, n) {
  var node = n;

  while (node) {
    if (node === root) {
      return true;
    }

    node = node.parentNode;
  }

  return false;
}

/***/ }),

/***/ "pLEv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("d3/y");

var _interopRequireDefault = __webpack_require__("63Ad");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("SDJZ"));

var _createClass2 = _interopRequireDefault(__webpack_require__("NToG"));

var Fullscreen =
/*#__PURE__*/
function () {
  function Fullscreen() {
    (0, _classCallCheck2["default"])(this, Fullscreen);
  }

  (0, _createClass2["default"])(Fullscreen, [{
    key: "request",
    value: function request(elm) {
      if (elm.requestFullscreen) {
        elm.requestFullscreen();
      } else if (elm.webkitRequestFullscreen) {
        elm.webkitRequestFullscreen();
      } else if (elm.mozRequestFullScreen) {
        elm.mozRequestFullScreen();
      } else if (elm.msRequestFullscreen) {
        elm.msRequestFullscreen();
      }
    }
  }, {
    key: "exit",
    value: function exit() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(handler) {
      document.addEventListener('fullscreenchange', handler);
      document.addEventListener('webkitfullscreenchange', handler);
      document.addEventListener('mozfullscreenchange', handler);
      document.addEventListener('MSFullscreenChange', handler);
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(handler) {
      document.removeEventListener('fullscreenchange', handler);
      document.removeEventListener('webkitfullscreenchange', handler);
      document.removeEventListener('mozfullscreenchange', handler);
      document.removeEventListener('MSFullscreenChange', handler);
    }
  }, {
    key: "isFullscreen",
    get: function get() {
      return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
    }
  }, {
    key: "enabled",
    get: function get() {
      return document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled;
    }
  }]);
  return Fullscreen;
}();

var _default = new Fullscreen();

exports["default"] = _default;

/***/ }),

/***/ "qW1e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("o7PZ");

__webpack_require__("d3/y");

var _interopRequireWildcard = __webpack_require__("vdEC");

var _interopRequireDefault = __webpack_require__("63Ad");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("SDJZ"));

var _createClass2 = _interopRequireDefault(__webpack_require__("NToG"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("K4DB"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("+IV6"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("T1e2"));

var _inherits2 = _interopRequireDefault(__webpack_require__("eef+"));

var _propTypes = _interopRequireDefault(__webpack_require__("W0B4"));

var _react = _interopRequireWildcard(__webpack_require__("mXGw"));

var propTypes = {
  children: _propTypes["default"].any
};

var Menu =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Menu, _Component);

  function Menu(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, Menu);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Menu).call(this, props, context));
    _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(Menu, [{
    key: "handleClick",
    value: function handleClick(event) {
      event.preventDefault(); // event.stopPropagation();
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: "video-react-menu video-react-lock-showing",
        role: "presentation",
        onClick: this.handleClick
      }, _react["default"].createElement("ul", {
        className: "video-react-menu-content"
      }, this.props.children));
    }
  }]);
  return Menu;
}(_react.Component);

exports["default"] = Menu;
Menu.propTypes = propTypes;
Menu.displayName = 'Menu';

/***/ }),

/***/ "s7ML":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("d3/y");

var _interopRequireDefault = __webpack_require__("63Ad");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__("W0B4"));

var _react = _interopRequireDefault(__webpack_require__("mXGw"));

var _classnames = _interopRequireDefault(__webpack_require__("8Jek"));

var _utils = __webpack_require__("xcnx");

var propTypes = {
  player: _propTypes["default"].object,
  className: _propTypes["default"].string
};

function DurationDisplay(_ref) {
  var duration = _ref.player.duration,
      className = _ref.className;
  var formattedTime = (0, _utils.formatTime)(duration);
  return _react["default"].createElement("div", {
    className: (0, _classnames["default"])(className, 'video-react-duration video-react-time-control video-react-control')
  }, _react["default"].createElement("div", {
    className: "video-react-duration-display",
    "aria-live": "off"
  }, _react["default"].createElement("span", {
    className: "video-react-control-text"
  }, "Duration Time "), formattedTime));
}

DurationDisplay.propTypes = propTypes;
DurationDisplay.displayName = 'DurationDisplay';
var _default = DurationDisplay;
exports["default"] = _default;

/***/ }),

/***/ "so/P":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


__webpack_require__("W1QL");

__webpack_require__("K/PF");

__webpack_require__("t91x");

__webpack_require__("75LO");

__webpack_require__("P/oo");

__webpack_require__("9ovy");

__webpack_require__("m8zh");

__webpack_require__("Z8gF");

__webpack_require__("asZ9");

__webpack_require__("V7cS");

__webpack_require__("nsbO");

var punycode = __webpack_require__("lphy");

var util = __webpack_require__("wjI5");

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;
exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
} // Reference: RFC 3986, RFC 1808, RFC 2396
// define these here so at least they only have to be
// compiled once on the first module load.


var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,
    // Special case for a simple path URL
simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
    // RFC 2396: characters reserved for delimiting URLs.
// We actually just auto-escape these.
delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],
    // RFC 2396: characters not allowed for various reasons.
unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),
    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
// Note that any invalid chars are also handled, but these
// are the ones that are *expected* to be seen, so we fast-path
// them.
nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
unsafeProtocol = {
  'javascript': true,
  'javascript:': true
},
    // protocols that never have a hostname.
hostlessProtocol = {
  'javascript': true,
  'javascript:': true
},
    // protocols that always contain a // bit.
slashedProtocol = {
  'http': true,
  'https': true,
  'ftp': true,
  'gopher': true,
  'file': true,
  'http:': true,
  'https:': true,
  'ftp:': true,
  'gopher:': true,
  'file:': true
},
    querystring = __webpack_require__("UKnr");

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;
  var u = new Url();
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function (url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  } // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916


  var queryIndex = url.indexOf('?'),
      splitter = queryIndex !== -1 && queryIndex < url.indexOf('#') ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);
  var rest = url; // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"

  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);

    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];

      if (simplePath[2]) {
        this.search = simplePath[2];

        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }

      return this;
    }
  }

  var proto = protocolPattern.exec(rest);

  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  } // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.


  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';

    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c
    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.
    // find the first instance of any hostEndingChars
    var hostEnd = -1;

    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
    } // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.


    var auth, atSign;

    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    } // Now we have a portion which is definitely the auth.
    // Pull that off.


    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    } // the host is the remaining to the left of the first non-host char


    hostEnd = -1;

    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
    } // if we still have not hit it, then the entire thing is a host.


    if (hostEnd === -1) hostEnd = rest.length;
    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd); // pull out port.

    this.parseHost(); // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.

    this.hostname = this.hostname || ''; // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.

    var ipv6Hostname = this.hostname[0] === '[' && this.hostname[this.hostname.length - 1] === ']'; // validate a little.

    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);

      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;

        if (!part.match(hostnamePartPattern)) {
          var newpart = '';

          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          } // we test again with ASCII char only


          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);

            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }

            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }

            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host; // strip [ and ] from the hostname
    // the host field still retains them, though

    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);

      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  } // now rest is set to the post-host stuff.
  // chop off any delim chars.


  if (!unsafeProtocol[lowerProto]) {
    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1) continue;
      var esc = encodeURIComponent(ae);

      if (esc === ae) {
        esc = escape(ae);
      }

      rest = rest.split(ae).join(esc);
    }
  } // chop off from the tail first.


  var hash = rest.indexOf('#');

  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }

  var qm = rest.indexOf('?');

  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);

    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }

    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }

  if (rest) this.pathname = rest;

  if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
    this.pathname = '/';
  } //to support http.request


  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  } // finally, reconstruct the href based on what has been validated.


  this.href = this.format();
  return this;
}; // format a parsed object into a url string


function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function () {
  var auth = this.auth || '';

  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ? this.hostname : '[' + this.hostname + ']');

    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query && util.isObject(this.query) && Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || query && '?' + query || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':'; // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.

  if (this.slashes || (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, function (match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');
  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function (relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function (relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);

  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  } // hash is always overridden, no matter what.
  // even href="" will remove it.


  result.hash = relative.hash; // if the relative url is empty, then there's nothing left to do here.

  if (relative.href === '') {
    result.href = result.format();
    return result;
  } // hrefs like //foo/bar always cut to the protocol.


  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);

    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol') result[rkey] = relative[rkey];
    } //urlParse appends trailing / to urls like http://www.example.com


    if (slashedProtocol[result.protocol] && result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);

      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }

      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;

    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');

      while (relPath.length && !(relative.host = relPath.shift())) {
        ;
      }

      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }

    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port; // to support http.request

    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }

    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = result.pathname && result.pathname.charAt(0) === '/',
      isRelAbs = relative.host || relative.pathname && relative.pathname.charAt(0) === '/',
      mustEndAbs = isRelAbs || isSourceAbs || result.host && relative.pathname,
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol]; // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.

  if (psychotic) {
    result.hostname = '';
    result.port = null;

    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;else srcPath.unshift(result.host);
    }

    result.host = '';

    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;

      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;else relPath.unshift(relative.host);
      }

      relative.host = null;
    }

    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = relative.host || relative.host === '' ? relative.host : result.host;
    result.hostname = relative.hostname || relative.hostname === '' ? relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath; // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift(); //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')

      var authInHost = result.host && result.host.indexOf('@') > 0 ? result.host.split('@') : false;

      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }

    result.search = relative.search;
    result.query = relative.query; //to support http.request

    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '');
    }

    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null; //to support http.request

    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }

    result.href = result.format();
    return result;
  } // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.


  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (result.host || relative.host || srcPath.length > 1) && (last === '.' || last === '..') || last === ''; // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0

  var up = 0;

  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];

    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  } // if the path is allowed to go above the root, restore leading ..s


  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' && (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && srcPath.join('/').substr(-1) !== '/') {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' || srcPath[0] && srcPath[0].charAt(0) === '/'; // put the host back

  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' : srcPath.length ? srcPath.shift() : ''; //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')

    var authInHost = result.host && result.host.indexOf('@') > 0 ? result.host.split('@') : false;

    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || result.host && srcPath.length;

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  } //to support request.http


  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '');
  }

  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function () {
  var host = this.host;
  var port = portPattern.exec(host);

  if (port) {
    port = port[0];

    if (port !== ':') {
      this.port = port.substr(1);
    }

    host = host.substr(0, host.length - port.length);
  }

  if (host) this.hostname = host;
};

/***/ }),

/***/ "t0sw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("o7PZ");

__webpack_require__("d3/y");

var _interopRequireWildcard = __webpack_require__("vdEC");

var _interopRequireDefault = __webpack_require__("63Ad");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("SDJZ"));

var _createClass2 = _interopRequireDefault(__webpack_require__("NToG"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("K4DB"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("+IV6"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("T1e2"));

var _inherits2 = _interopRequireDefault(__webpack_require__("eef+"));

var _propTypes = _interopRequireDefault(__webpack_require__("W0B4"));

var _react = _interopRequireWildcard(__webpack_require__("mXGw"));

var _classnames = _interopRequireDefault(__webpack_require__("8Jek"));

var propTypes = {
  actions: _propTypes["default"].object,
  player: _propTypes["default"].object,
  position: _propTypes["default"].string,
  className: _propTypes["default"].string
};
var defaultProps = {
  position: 'left'
};

var BigPlayButton =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(BigPlayButton, _Component);

  function BigPlayButton(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, BigPlayButton);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(BigPlayButton).call(this, props, context));
    _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(BigPlayButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "handleClick",
    value: function handleClick() {
      var actions = this.props.actions;
      actions.play();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          player = _this$props.player,
          position = _this$props.position;
      return _react["default"].createElement("button", {
        className: (0, _classnames["default"])('video-react-big-play-button', "video-react-big-play-button-".concat(position), this.props.className, {
          'big-play-button-hide': player.hasStarted || !player.currentSrc
        }),
        type: "button",
        "aria-live": "polite",
        tabIndex: "0",
        onClick: this.handleClick
      }, _react["default"].createElement("span", {
        className: "video-react-control-text"
      }, "Play Video"));
    }
  }]);
  return BigPlayButton;
}(_react.Component);

exports["default"] = BigPlayButton;
BigPlayButton.propTypes = propTypes;
BigPlayButton.defaultProps = defaultProps;
BigPlayButton.displayName = 'BigPlayButton';

/***/ }),

/***/ "tJXC":
/***/ (function(module, exports, __webpack_require__) {

var MediaQuery = __webpack_require__("w24S");

var Util = __webpack_require__("kd9Q");

var each = Util.each;
var isFunction = Util.isFunction;
var isArray = Util.isArray;
/**
 * Allows for registration of query handlers.
 * Manages the query handler's state and is responsible for wiring up browser events
 *
 * @constructor
 */

function MediaQueryDispatch() {
  if (!window.matchMedia) {
    throw new Error('matchMedia not present, legacy browsers require a polyfill');
  }

  this.queries = {};
  this.browserIsIncapable = !window.matchMedia('only all').matches;
}

MediaQueryDispatch.prototype = {
  constructor: MediaQueryDispatch,

  /**
   * Registers a handler for the given media query
   *
   * @param {string} q the media query
   * @param {object || Array || Function} options either a single query handler object, a function, or an array of query handlers
   * @param {function} options.match fired when query matched
   * @param {function} [options.unmatch] fired when a query is no longer matched
   * @param {function} [options.setup] fired when handler first triggered
   * @param {boolean} [options.deferSetup=false] whether setup should be run immediately or deferred until query is first matched
   * @param {boolean} [shouldDegrade=false] whether this particular media query should always run on incapable browsers
   */
  register: function register(q, options, shouldDegrade) {
    var queries = this.queries,
        isUnconditional = shouldDegrade && this.browserIsIncapable;

    if (!queries[q]) {
      queries[q] = new MediaQuery(q, isUnconditional);
    } //normalise to object in an array


    if (isFunction(options)) {
      options = {
        match: options
      };
    }

    if (!isArray(options)) {
      options = [options];
    }

    each(options, function (handler) {
      if (isFunction(handler)) {
        handler = {
          match: handler
        };
      }

      queries[q].addHandler(handler);
    });
    return this;
  },

  /**
   * unregisters a query and all it's handlers, or a specific handler for a query
   *
   * @param {string} q the media query to target
   * @param {object || function} [handler] specific handler to unregister
   */
  unregister: function unregister(q, handler) {
    var query = this.queries[q];

    if (query) {
      if (handler) {
        query.removeHandler(handler);
      } else {
        query.clear();
        delete this.queries[q];
      }
    }

    return this;
  }
};
module.exports = MediaQueryDispatch;

/***/ }),

/***/ "tKeH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("9p7t");

__webpack_require__("W1QL");

__webpack_require__("K/PF");

__webpack_require__("t91x");

__webpack_require__("75LO");

__webpack_require__("yIlq");

__webpack_require__("U8p0");

__webpack_require__("7lGJ");

__webpack_require__("5hJT");

__webpack_require__("3y5y");

__webpack_require__("o7PZ");

__webpack_require__("d3/y");

var _interopRequireDefault = __webpack_require__("63Ad");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__("OvAC"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("5WRv"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("SDJZ"));

var _createClass2 = _interopRequireDefault(__webpack_require__("NToG"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("K4DB"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("+IV6"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("T1e2"));

var _inherits2 = _interopRequireDefault(__webpack_require__("eef+"));

var _react = __webpack_require__("mXGw");

var _propTypes = _interopRequireDefault(__webpack_require__("W0B4"));

var _dom = __webpack_require__("+QRm");

var propTypes = {
  clickable: _propTypes["default"].bool,
  dblclickable: _propTypes["default"].bool,
  manager: _propTypes["default"].object,
  actions: _propTypes["default"].object,
  player: _propTypes["default"].object,
  shortcuts: _propTypes["default"].array
};
var defaultProps = {
  clickable: true,
  dblclickable: true
};

var Shortcut =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Shortcut, _Component);

  function Shortcut(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, Shortcut);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Shortcut).call(this, props, context));
    _this.defaultShortcuts = [{
      keyCode: 32,
      // spacebar
      handle: _this.togglePlay
    }, {
      keyCode: 75,
      // k
      handle: _this.togglePlay
    }, {
      keyCode: 70,
      // f
      handle: _this.toggleFullscreen
    }, {
      keyCode: 37,
      // Left arrow
      handle: function handle(player, actions) {
        if (!player.hasStarted) {
          return;
        }

        actions.replay(5, {
          action: 'replay-5',
          source: 'shortcut'
        }); // Go back 5 seconds
      }
    }, {
      keyCode: 74,
      // j
      handle: function handle(player, actions) {
        if (!player.hasStarted) {
          return;
        }

        actions.replay(10, {
          action: 'replay-10',
          source: 'shortcut'
        }); // Go back 10 seconds
      }
    }, {
      keyCode: 39,
      // Right arrow
      handle: function handle(player, actions) {
        if (!player.hasStarted) {
          return;
        }

        actions.forward(5, {
          action: 'forward-5',
          source: 'shortcut'
        }); // Go forward 5 seconds
      }
    }, {
      keyCode: 76,
      // l
      handle: function handle(player, actions) {
        if (!player.hasStarted) {
          return;
        }

        actions.forward(10, {
          action: 'forward-10',
          source: 'shortcut'
        }); // Go forward 10 seconds
      }
    }, {
      keyCode: 36,
      // Home
      handle: function handle(player, actions) {
        if (!player.hasStarted) {
          return;
        }

        actions.seek(0); // Go to beginning of video
      }
    }, {
      keyCode: 35,
      // End
      handle: function handle(player, actions) {
        if (!player.hasStarted) {
          return;
        } // Go to end of video


        actions.seek(player.duration);
      }
    }, {
      keyCode: 38,
      // Up arrow
      handle: function handle(player, actions) {
        // Increase volume 5%
        var v = player.volume + 0.05;

        if (v > 1) {
          v = 1;
        }

        actions.changeVolume(v, {
          action: 'volume-up',
          source: 'shortcut'
        });
      }
    }, {
      keyCode: 40,
      // Down arrow
      handle: function handle(player, actions) {
        // Decrease volume 5%
        var v = player.volume - 0.05;

        if (v < 0) {
          v = 0;
        }

        var action = v > 0 ? 'volume-down' : 'volume-off';
        actions.changeVolume(v, {
          action: action,
          source: 'shortcut'
        });
      }
    }, {
      keyCode: 190,
      // Shift + >
      shift: true,
      handle: function handle(player, actions) {
        // Increase speed
        var playbackRate = player.playbackRate;

        if (playbackRate >= 1.5) {
          playbackRate = 2;
        } else if (playbackRate >= 1.25) {
          playbackRate = 1.5;
        } else if (playbackRate >= 1.0) {
          playbackRate = 1.25;
        } else if (playbackRate >= 0.5) {
          playbackRate = 1.0;
        } else if (playbackRate >= 0.25) {
          playbackRate = 0.5;
        } else if (playbackRate >= 0) {
          playbackRate = 0.25;
        }

        actions.changeRate(playbackRate, {
          action: 'fast-forward',
          source: 'shortcut'
        });
      }
    }, {
      keyCode: 188,
      // Shift + <
      shift: true,
      handle: function handle(player, actions) {
        // Decrease speed
        var playbackRate = player.playbackRate;

        if (playbackRate <= 0.5) {
          playbackRate = 0.25;
        } else if (playbackRate <= 1.0) {
          playbackRate = 0.5;
        } else if (playbackRate <= 1.25) {
          playbackRate = 1.0;
        } else if (playbackRate <= 1.5) {
          playbackRate = 1.25;
        } else if (playbackRate <= 2) {
          playbackRate = 1.5;
        }

        actions.changeRate(playbackRate, {
          action: 'fast-rewind',
          source: 'shortcut'
        });
      }
    }];
    _this.shortcuts = (0, _toConsumableArray2["default"])(_this.defaultShortcuts);
    _this.mergeShortcuts = _this.mergeShortcuts.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleKeyPress = _this.handleKeyPress.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleDoubleClick = _this.handleDoubleClick.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(Shortcut, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mergeShortcuts();
      document.addEventListener('keydown', this.handleKeyPress);
      document.addEventListener('click', this.handleClick);
      document.addEventListener('dblclick', this.handleDoubleClick);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.shortcuts !== this.props.shortcuts) {
        this.mergeShortcuts();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyPress);
      document.removeEventListener('click', this.handleClick);
      document.removeEventListener('dblclick', this.handleDoubleClick);
    } // merge the shortcuts from props

  }, {
    key: "mergeShortcuts",
    value: function mergeShortcuts() {
      var getShortcutKey = function getShortcutKey(_ref) {
        var _ref$keyCode = _ref.keyCode,
            keyCode = _ref$keyCode === void 0 ? 0 : _ref$keyCode,
            _ref$ctrl = _ref.ctrl,
            ctrl = _ref$ctrl === void 0 ? false : _ref$ctrl,
            _ref$shift = _ref.shift,
            shift = _ref$shift === void 0 ? false : _ref$shift,
            _ref$alt = _ref.alt,
            alt = _ref$alt === void 0 ? false : _ref$alt;
        return "".concat(keyCode, ":").concat(ctrl, ":").concat(shift, ":").concat(alt);
      };

      var defaultShortcuts = this.defaultShortcuts.reduce(function (shortcuts, shortcut) {
        return Object.assign(shortcuts, (0, _defineProperty2["default"])({}, getShortcutKey(shortcut), shortcut));
      }, {});
      var mergedShortcuts = (this.props.shortcuts || []).reduce(function (shortcuts, shortcut) {
        var keyCode = shortcut.keyCode,
            handle = shortcut.handle;

        if (keyCode && typeof handle === 'function') {
          return Object.assign(shortcuts, (0, _defineProperty2["default"])({}, getShortcutKey(shortcut), shortcut));
        }

        return shortcuts;
      }, defaultShortcuts);

      var gradeShortcut = function gradeShortcut(s) {
        var score = 0;
        var ps = ['ctrl', 'shift', 'alt'];
        ps.forEach(function (key) {
          if (s[key]) {
            score++;
          }
        });
        return score;
      };

      this.shortcuts = Object.keys(mergedShortcuts).map(function (key) {
        return mergedShortcuts[key];
      }).sort(function (a, b) {
        return gradeShortcut(b) - gradeShortcut(a);
      });
    }
  }, {
    key: "togglePlay",
    value: function togglePlay(player, actions) {
      if (player.paused) {
        actions.play({
          action: 'play',
          source: 'shortcut'
        });
      } else {
        actions.pause({
          action: 'pause',
          source: 'shortcut'
        });
      }
    }
  }, {
    key: "toggleFullscreen",
    value: function toggleFullscreen(player, actions) {
      actions.toggleFullscreen(player);
    }
  }, {
    key: "handleKeyPress",
    value: function handleKeyPress(e) {
      var _this$props = this.props,
          player = _this$props.player,
          actions = _this$props.actions;

      if (!player.isActive) {
        return;
      }

      if (document.activeElement && ((0, _dom.hasClass)(document.activeElement, 'video-react-control') || (0, _dom.hasClass)(document.activeElement, 'video-react-menu-button-active') // || hasClass(document.activeElement, 'video-react-slider')
      || (0, _dom.hasClass)(document.activeElement, 'video-react-big-play-button'))) {
        return;
      }

      var keyCode = e.keyCode || e.which;
      var ctrl = e.ctrlKey || e.metaKey;
      var shift = e.shiftKey;
      var alt = e.altKey;
      var shortcut = this.shortcuts.filter(function (s) {
        if (!s.keyCode || s.keyCode - keyCode !== 0) {
          return false;
        }

        if (s.ctrl !== undefined && s.ctrl !== ctrl || s.shift !== undefined && s.shift !== shift || s.alt !== undefined && s.alt !== alt) {
          return false;
        }

        return true;
      })[0];

      if (shortcut) {
        shortcut.handle(player, actions);
        e.preventDefault();
      }
    } // only if player is active and player is ready

  }, {
    key: "canBeClicked",
    value: function canBeClicked(player, e) {
      if (!player.isActive || e.target.nodeName !== 'VIDEO' || player.readyState !== 4) {
        return false;
      }

      return true;
    }
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      var _this$props2 = this.props,
          player = _this$props2.player,
          actions = _this$props2.actions,
          clickable = _this$props2.clickable;

      if (!this.canBeClicked(player, e) || !clickable) {
        return;
      }

      this.togglePlay(player, actions); // e.preventDefault();
    }
  }, {
    key: "handleDoubleClick",
    value: function handleDoubleClick(e) {
      var _this$props3 = this.props,
          player = _this$props3.player,
          actions = _this$props3.actions,
          dblclickable = _this$props3.dblclickable;

      if (!this.canBeClicked(player, e) || !dblclickable) {
        return;
      }

      this.toggleFullscreen(player, actions); // e.preventDefault();
    } // this component dose not render anything
    // it's just for the key down event

  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);
  return Shortcut;
}(_react.Component);

exports["default"] = Shortcut;
Shortcut.propTypes = propTypes;
Shortcut.defaultProps = defaultProps;
Shortcut.displayName = 'Shortcut';

/***/ }),

/***/ "tqkS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4aJ6");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("M/4x");
/* harmony import */ var core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("PAbq");
/* harmony import */ var core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("1qKx");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("+jjx");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("d3/y");
/* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_object_define_properties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("6/FK");
/* harmony import */ var core_js_modules_es6_object_define_properties__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_define_properties__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("2Tod");
/* harmony import */ var core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("7lGJ");
/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("9p7t");
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("ABKx");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("W1QL");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("K/PF");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("t91x");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("75LO");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("mXGw");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("xARA");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("W0B4");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("94VI");
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _ContainerRender__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("hdnC");
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("LKC9");
















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







var openCount = 0;
var windowIsUndefined = !(typeof window !== 'undefined' && window.document && window.document.createElement);
var IS_REACT_16 = 'createPortal' in react_dom__WEBPACK_IMPORTED_MODULE_16___default.a;

var PortalWrapper =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PortalWrapper, _React$Component);

  function PortalWrapper(props) {
    var _this;

    _classCallCheck(this, PortalWrapper);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PortalWrapper).call(this, props));

    _this.getParent = function () {
      var getContainer = _this.props.getContainer;

      if (getContainer) {
        if (typeof getContainer === 'string') {
          return document.querySelectorAll(getContainer)[0];
        }

        if (typeof getContainer === 'function') {
          return getContainer();
        }

        if (_typeof(getContainer) === 'object' && getContainer instanceof window.HTMLElement) {
          return getContainer;
        }
      }

      return document.body;
    };

    _this.getContainer = function () {
      if (windowIsUndefined) {
        return null;
      }

      if (!_this.container) {
        _this.container = document.createElement('div');

        var parent = _this.getParent();

        if (parent) {
          parent.appendChild(_this.container);
        }
      }

      _this.setWrapperClassName();

      return _this.container;
    };

    _this.setWrapperClassName = function () {
      var wrapperClassName = _this.props.wrapperClassName;

      if (_this.container && wrapperClassName && wrapperClassName !== _this.container.className) {
        _this.container.className = wrapperClassName;
      }
    };

    _this.savePortal = function (c) {
      _this._component = c;
    };

    _this.removeCurrentContainer = function (visible) {
      _this.container = null;
      _this._component = null;

      if (!IS_REACT_16) {
        if (visible) {
          _this.renderComponent({
            afterClose: _this.removeContainer,
            onClose: function onClose() {},
            visible: false
          });
        } else {
          _this.removeContainer();
        }
      }
    };

    var _visible = props.visible;
    openCount = _visible ? openCount + 1 : openCount;
    _this.state = {
      _self: _assertThisInitialized(_this)
    };
    return _this;
  }

  _createClass(PortalWrapper, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.setWrapperClassName();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var visible = this.props.visible; // 离开时不会 render， 导到离开时数值不变，改用 func 。。

      openCount = visible && openCount ? openCount - 1 : openCount;
      this.removeCurrentContainer(visible);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          forceRender = _this$props.forceRender,
          visible = _this$props.visible;
      var portal = null;
      var childProps = {
        getOpenCount: function getOpenCount() {
          return openCount;
        },
        getContainer: this.getContainer
      }; // suppport react15

      if (!IS_REACT_16) {
        return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_ContainerRender__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"], {
          parent: this,
          visible: visible,
          autoDestroy: false,
          getComponent: function getComponent() {
            var extra = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return children(_objectSpread({}, extra, {}, childProps, {
              ref: _this2.savePortal
            }));
          },
          getContainer: this.getContainer,
          forceRender: forceRender
        }, function (_ref) {
          var renderComponent = _ref.renderComponent,
              removeContainer = _ref.removeContainer;
          _this2.renderComponent = renderComponent;
          _this2.removeContainer = removeContainer;
          return null;
        });
      }

      if (forceRender || visible || this._component) {
        portal = react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_Portal__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"], {
          getContainer: this.getContainer,
          ref: this.savePortal
        }, children(childProps));
      }

      return portal;
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, _ref2) {
      var prevProps = _ref2.prevProps,
          _self = _ref2._self;
      var visible = props.visible,
          getContainer = props.getContainer;

      if (prevProps) {
        var prevVisible = prevProps.visible,
            prevGetContainer = prevProps.getContainer;

        if (visible !== prevVisible) {
          openCount = visible && !prevVisible ? openCount + 1 : openCount - 1;
        }

        var getContainerIsFunc = typeof getContainer === 'function' && typeof prevGetContainer === 'function';

        if (getContainerIsFunc ? getContainer.toString() !== prevGetContainer.toString() : getContainer !== prevGetContainer) {
          _self.removeCurrentContainer(false);
        }
      }

      return {
        prevProps: props
      };
    }
  }]);

  return PortalWrapper;
}(react__WEBPACK_IMPORTED_MODULE_15___default.a.Component);

PortalWrapper.propTypes = {
  wrapperClassName: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.string,
  forceRender: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.bool,
  getContainer: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.any,
  children: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.func,
  visible: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.bool
};
/* harmony default export */ __webpack_exports__["a"] = (Object(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_18__["polyfill"])(PortalWrapper));

/***/ }),

/***/ "vdEC":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("e+GP");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "w24S":
/***/ (function(module, exports, __webpack_require__) {

var QueryHandler = __webpack_require__("L7zD");

var each = __webpack_require__("kd9Q").each;
/**
 * Represents a single media query, manages it's state and registered handlers for this query
 *
 * @constructor
 * @param {string} query the media query string
 * @param {boolean} [isUnconditional=false] whether the media query should run regardless of whether the conditions are met. Primarily for helping older browsers deal with mobile-first design
 */


function MediaQuery(query, isUnconditional) {
  this.query = query;
  this.isUnconditional = isUnconditional;
  this.handlers = [];
  this.mql = window.matchMedia(query);
  var self = this;

  this.listener = function (mql) {
    // Chrome passes an MediaQueryListEvent object, while other browsers pass MediaQueryList directly
    self.mql = mql.currentTarget || mql;
    self.assess();
  };

  this.mql.addListener(this.listener);
}

MediaQuery.prototype = {
  constuctor: MediaQuery,

  /**
   * add a handler for this query, triggering if already active
   *
   * @param {object} handler
   * @param {function} handler.match callback for when query is activated
   * @param {function} [handler.unmatch] callback for when query is deactivated
   * @param {function} [handler.setup] callback for immediate execution when a query handler is registered
   * @param {boolean} [handler.deferSetup=false] should the setup callback be deferred until the first time the handler is matched?
   */
  addHandler: function addHandler(handler) {
    var qh = new QueryHandler(handler);
    this.handlers.push(qh);
    this.matches() && qh.on();
  },

  /**
   * removes the given handler from the collection, and calls it's destroy methods
   *
   * @param {object || function} handler the handler to remove
   */
  removeHandler: function removeHandler(handler) {
    var handlers = this.handlers;
    each(handlers, function (h, i) {
      if (h.equals(handler)) {
        h.destroy();
        return !handlers.splice(i, 1); //remove from array and exit each early
      }
    });
  },

  /**
   * Determine whether the media query should be considered a match
   *
   * @return {Boolean} true if media query can be considered a match, false otherwise
   */
  matches: function matches() {
    return this.mql.matches || this.isUnconditional;
  },

  /**
   * Clears all handlers and unbinds events
   */
  clear: function clear() {
    each(this.handlers, function (handler) {
      handler.destroy();
    });
    this.mql.removeListener(this.listener);
    this.handlers.length = 0; //clear array
  },

  /*
      * Assesses the query, turning on all handlers if it matches, turning them off if it doesn't match
      */
  assess: function assess() {
    var action = this.matches() ? 'on' : 'off';
    each(this.handlers, function (handler) {
      handler[action]();
    });
  }
};
module.exports = MediaQuery;

/***/ }),

/***/ "wMKW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("V7cS");

__webpack_require__("6/FK");

__webpack_require__("2Tod");

__webpack_require__("7lGJ");

__webpack_require__("9p7t");

__webpack_require__("W1QL");

__webpack_require__("K/PF");

__webpack_require__("t91x");

__webpack_require__("75LO");

__webpack_require__("PAbq");

__webpack_require__("1qKx");

__webpack_require__("5hJT");

__webpack_require__("+jjx");

__webpack_require__("ABKx");

__webpack_require__("d3/y");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Track = void 0;

var _react = _interopRequireDefault(__webpack_require__("mXGw"));

var _classnames = _interopRequireDefault(__webpack_require__("8Jek"));

var _innerSliderUtils = __webpack_require__("iWpb");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
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
} // given specifications/props for a slide, fetch all the classes that need to be applied to the slide


var getSlideClasses = function getSlideClasses(spec) {
  var slickActive, slickCenter, slickCloned;
  var centerOffset, index;

  if (spec.rtl) {
    index = spec.slideCount - 1 - spec.index;
  } else {
    index = spec.index;
  }

  slickCloned = index < 0 || index >= spec.slideCount;

  if (spec.centerMode) {
    centerOffset = Math.floor(spec.slidesToShow / 2);
    slickCenter = (index - spec.currentSlide) % spec.slideCount === 0;

    if (index > spec.currentSlide - centerOffset - 1 && index <= spec.currentSlide + centerOffset) {
      slickActive = true;
    }
  } else {
    slickActive = spec.currentSlide <= index && index < spec.currentSlide + spec.slidesToShow;
  }

  var slickCurrent = index === spec.currentSlide;
  return {
    "slick-slide": true,
    "slick-active": slickActive,
    "slick-center": slickCenter,
    "slick-cloned": slickCloned,
    "slick-current": slickCurrent // dubious in case of RTL

  };
};

var getSlideStyle = function getSlideStyle(spec) {
  var style = {};

  if (spec.variableWidth === undefined || spec.variableWidth === false) {
    style.width = spec.slideWidth;
  }

  if (spec.fade) {
    style.position = "relative";

    if (spec.vertical) {
      style.top = -spec.index * parseInt(spec.slideHeight);
    } else {
      style.left = -spec.index * parseInt(spec.slideWidth);
    }

    style.opacity = spec.currentSlide === spec.index ? 1 : 0;
    style.transition = "opacity " + spec.speed + "ms " + spec.cssEase + ", " + "visibility " + spec.speed + "ms " + spec.cssEase;
    style.WebkitTransition = "opacity " + spec.speed + "ms " + spec.cssEase + ", " + "visibility " + spec.speed + "ms " + spec.cssEase;
  }

  return style;
};

var getKey = function getKey(child, fallbackKey) {
  return child.key || fallbackKey;
};

var renderSlides = function renderSlides(spec) {
  var key;
  var slides = [];
  var preCloneSlides = [];
  var postCloneSlides = [];

  var childrenCount = _react["default"].Children.count(spec.children);

  var startIndex = (0, _innerSliderUtils.lazyStartIndex)(spec);
  var endIndex = (0, _innerSliderUtils.lazyEndIndex)(spec);

  _react["default"].Children.forEach(spec.children, function (elem, index) {
    var child;
    var childOnClickOptions = {
      message: "children",
      index: index,
      slidesToScroll: spec.slidesToScroll,
      currentSlide: spec.currentSlide
    }; // in case of lazyLoad, whether or not we want to fetch the slide

    if (!spec.lazyLoad || spec.lazyLoad && spec.lazyLoadedList.indexOf(index) >= 0) {
      child = elem;
    } else {
      child = _react["default"].createElement("div", null);
    }

    var childStyle = getSlideStyle(_objectSpread({}, spec, {
      index: index
    }));
    var slideClass = child.props.className || "";
    var slideClasses = getSlideClasses(_objectSpread({}, spec, {
      index: index
    })); // push a cloned element of the desired slide

    slides.push(_react["default"].cloneElement(child, {
      key: "original" + getKey(child, index),
      "data-index": index,
      className: (0, _classnames["default"])(slideClasses, slideClass),
      tabIndex: "-1",
      "aria-hidden": !slideClasses["slick-active"],
      style: _objectSpread({
        outline: "none"
      }, child.props.style || {}, {}, childStyle),
      onClick: function onClick(e) {
        child.props && child.props.onClick && child.props.onClick(e);

        if (spec.focusOnSelect) {
          spec.focusOnSelect(childOnClickOptions);
        }
      }
    })); // if slide needs to be precloned or postcloned

    if (spec.infinite && spec.fade === false) {
      var preCloneNo = childrenCount - index;

      if (preCloneNo <= (0, _innerSliderUtils.getPreClones)(spec) && childrenCount !== spec.slidesToShow) {
        key = -preCloneNo;

        if (key >= startIndex) {
          child = elem;
        }

        slideClasses = getSlideClasses(_objectSpread({}, spec, {
          index: key
        }));
        preCloneSlides.push(_react["default"].cloneElement(child, {
          key: "precloned" + getKey(child, key),
          "data-index": key,
          tabIndex: "-1",
          className: (0, _classnames["default"])(slideClasses, slideClass),
          "aria-hidden": !slideClasses["slick-active"],
          style: _objectSpread({}, child.props.style || {}, {}, childStyle),
          onClick: function onClick(e) {
            child.props && child.props.onClick && child.props.onClick(e);

            if (spec.focusOnSelect) {
              spec.focusOnSelect(childOnClickOptions);
            }
          }
        }));
      }

      if (childrenCount !== spec.slidesToShow) {
        key = childrenCount + index;

        if (key < endIndex) {
          child = elem;
        }

        slideClasses = getSlideClasses(_objectSpread({}, spec, {
          index: key
        }));
        postCloneSlides.push(_react["default"].cloneElement(child, {
          key: "postcloned" + getKey(child, key),
          "data-index": key,
          tabIndex: "-1",
          className: (0, _classnames["default"])(slideClasses, slideClass),
          "aria-hidden": !slideClasses["slick-active"],
          style: _objectSpread({}, child.props.style || {}, {}, childStyle),
          onClick: function onClick(e) {
            child.props && child.props.onClick && child.props.onClick(e);

            if (spec.focusOnSelect) {
              spec.focusOnSelect(childOnClickOptions);
            }
          }
        }));
      }
    }
  });

  if (spec.rtl) {
    return preCloneSlides.concat(slides, postCloneSlides).reverse();
  } else {
    return preCloneSlides.concat(slides, postCloneSlides);
  }
};

var Track =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Track, _React$PureComponent);

  function Track() {
    _classCallCheck(this, Track);

    return _possibleConstructorReturn(this, _getPrototypeOf(Track).apply(this, arguments));
  }

  _createClass(Track, [{
    key: "render",
    value: function render() {
      var slides = renderSlides(this.props);
      var _this$props = this.props,
          onMouseEnter = _this$props.onMouseEnter,
          onMouseOver = _this$props.onMouseOver,
          onMouseLeave = _this$props.onMouseLeave;
      var mouseEvents = {
        onMouseEnter: onMouseEnter,
        onMouseOver: onMouseOver,
        onMouseLeave: onMouseLeave
      };
      return _react["default"].createElement("div", _extends({
        className: "slick-track",
        style: this.props.trackStyle
      }, mouseEvents), slides);
    }
  }]);

  return Track;
}(_react["default"].PureComponent);

exports.Track = Track;

/***/ }),

/***/ "wPJX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("o7PZ");

__webpack_require__("d3/y");

var _interopRequireWildcard = __webpack_require__("vdEC");

var _interopRequireDefault = __webpack_require__("63Ad");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("SDJZ"));

var _createClass2 = _interopRequireDefault(__webpack_require__("NToG"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("K4DB"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("+IV6"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("T1e2"));

var _inherits2 = _interopRequireDefault(__webpack_require__("eef+"));

var _propTypes = _interopRequireDefault(__webpack_require__("W0B4"));

var _react = _interopRequireWildcard(__webpack_require__("mXGw"));

var _classnames = _interopRequireDefault(__webpack_require__("8Jek"));

var _Slider = _interopRequireDefault(__webpack_require__("NdzT"));

var _PlayProgressBar = _interopRequireDefault(__webpack_require__("l+eI"));

var _LoadProgressBar = _interopRequireDefault(__webpack_require__("27Aj"));

var _MouseTimeDisplay = _interopRequireDefault(__webpack_require__("ltLC"));

var _utils = __webpack_require__("xcnx");

var propTypes = {
  player: _propTypes["default"].object,
  mouseTime: _propTypes["default"].object,
  actions: _propTypes["default"].object,
  className: _propTypes["default"].string
};

var SeekBar =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(SeekBar, _Component);

  function SeekBar(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, SeekBar);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(SeekBar).call(this, props, context));
    _this.getPercent = _this.getPercent.bind((0, _assertThisInitialized2["default"])(_this));
    _this.getNewTime = _this.getNewTime.bind((0, _assertThisInitialized2["default"])(_this));
    _this.stepForward = _this.stepForward.bind((0, _assertThisInitialized2["default"])(_this));
    _this.stepBack = _this.stepBack.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleMouseDown = _this.handleMouseDown.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleMouseMove = _this.handleMouseMove.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleMouseUp = _this.handleMouseUp.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(SeekBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {}
    /**
     * Get percentage of video played
     *
     * @return {Number} Percentage played
     * @method getPercent
     */

  }, {
    key: "getPercent",
    value: function getPercent() {
      var _this$props$player = this.props.player,
          currentTime = _this$props$player.currentTime,
          seekingTime = _this$props$player.seekingTime,
          duration = _this$props$player.duration;
      var time = seekingTime || currentTime;
      var percent = time / duration;
      return percent >= 1 ? 1 : percent;
    }
  }, {
    key: "getNewTime",
    value: function getNewTime(event) {
      var duration = this.props.player.duration;
      var distance = this.slider.calculateDistance(event);
      var newTime = distance * duration; // Don't let video end while scrubbing.

      return newTime === duration ? newTime - 0.1 : newTime;
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown() {}
  }, {
    key: "handleMouseUp",
    value: function handleMouseUp(event) {
      var actions = this.props.actions;
      var newTime = this.getNewTime(event); // Set new time (tell video to seek to new time)

      actions.seek(newTime);
      actions.handleEndSeeking(newTime);
    }
  }, {
    key: "handleMouseMove",
    value: function handleMouseMove(event) {
      var actions = this.props.actions;
      var newTime = this.getNewTime(event);
      actions.handleSeekingTime(newTime);
    }
  }, {
    key: "stepForward",
    value: function stepForward() {
      var actions = this.props.actions;
      actions.forward(5);
    }
  }, {
    key: "stepBack",
    value: function stepBack() {
      var actions = this.props.actions;
      actions.replay(5);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          _this$props$player2 = _this$props.player,
          currentTime = _this$props$player2.currentTime,
          seekingTime = _this$props$player2.seekingTime,
          duration = _this$props$player2.duration,
          buffered = _this$props$player2.buffered,
          mouseTime = _this$props.mouseTime;
      var time = seekingTime || currentTime;
      return _react["default"].createElement(_Slider["default"], {
        ref: function ref(input) {
          _this2.slider = input;
        },
        label: "video progress bar",
        className: (0, _classnames["default"])('video-react-progress-holder', this.props.className),
        valuenow: (this.getPercent() * 100).toFixed(2),
        valuetext: (0, _utils.formatTime)(time, duration),
        onMouseDown: this.handleMouseDown,
        onMouseMove: this.handleMouseMove,
        onMouseUp: this.handleMouseUp,
        getPercent: this.getPercent,
        stepForward: this.stepForward,
        stepBack: this.stepBack
      }, _react["default"].createElement(_LoadProgressBar["default"], {
        buffered: buffered,
        currentTime: time,
        duration: duration
      }), _react["default"].createElement(_MouseTimeDisplay["default"], {
        duration: duration,
        mouseTime: mouseTime
      }), _react["default"].createElement(_PlayProgressBar["default"], {
        currentTime: time,
        duration: duration
      }));
    }
  }]);
  return SeekBar;
}(_react.Component);

exports["default"] = SeekBar;
SeekBar.propTypes = propTypes;
SeekBar.displayName = 'SeekBar';

/***/ }),

/***/ "wQeU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("d3/y");

var _interopRequireDefault = __webpack_require__("63Ad");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ForwardReplayControl = _interopRequireDefault(__webpack_require__("2lL7")); // Pass mode into parent function


var ForwardControl = (0, _ForwardReplayControl["default"])('forward');
ForwardControl.displayName = 'ForwardControl';
var _default = ForwardControl;
exports["default"] = _default;

/***/ }),

/***/ "wjI5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  isString: function isString(arg) {
    return typeof arg === 'string';
  },
  isObject: function isObject(arg) {
    return typeof arg === 'object' && arg !== null;
  },
  isNull: function isNull(arg) {
    return arg === null;
  },
  isNullOrUndefined: function isNullOrUndefined(arg) {
    return arg == null;
  }
};

/***/ }),

/***/ "x2Pa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("o7PZ");

__webpack_require__("d3/y");

var _interopRequireWildcard = __webpack_require__("vdEC");

var _interopRequireDefault = __webpack_require__("63Ad");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("SDJZ"));

var _createClass2 = _interopRequireDefault(__webpack_require__("NToG"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("K4DB"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("+IV6"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("T1e2"));

var _inherits2 = _interopRequireDefault(__webpack_require__("eef+"));

var _propTypes = _interopRequireDefault(__webpack_require__("W0B4"));

var _react = _interopRequireWildcard(__webpack_require__("mXGw"));

var _classnames = _interopRequireDefault(__webpack_require__("8Jek"));

var propTypes = {
  item: _propTypes["default"].object,
  index: _propTypes["default"].number,
  activateIndex: _propTypes["default"].number,
  onSelectItem: _propTypes["default"].func
};

var MenuItem =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(MenuItem, _Component);

  function MenuItem(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, MenuItem);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(MenuItem).call(this, props, context));
    _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(MenuItem, [{
    key: "handleClick",
    value: function handleClick() {
      var _this$props = this.props,
          index = _this$props.index,
          onSelectItem = _this$props.onSelectItem;
      onSelectItem(index);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          item = _this$props2.item,
          index = _this$props2.index,
          activateIndex = _this$props2.activateIndex;
      return _react["default"].createElement("li", {
        className: (0, _classnames["default"])({
          'video-react-menu-item': true,
          'video-react-selected': index === activateIndex
        }),
        role: "menuitem",
        onClick: this.handleClick
      }, item.label, _react["default"].createElement("span", {
        className: "video-react-control-text"
      }));
    }
  }]);
  return MenuItem;
}(_react.Component);

exports["default"] = MenuItem;
MenuItem.propTypes = propTypes;
MenuItem.displayName = 'MenuItem';

/***/ }),

/***/ "xKwe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("o7PZ");

__webpack_require__("d3/y");

var _interopRequireWildcard = __webpack_require__("vdEC");

var _interopRequireDefault = __webpack_require__("63Ad");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("8VmE"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("SDJZ"));

var _createClass2 = _interopRequireDefault(__webpack_require__("NToG"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("K4DB"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("+IV6"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("T1e2"));

var _inherits2 = _interopRequireDefault(__webpack_require__("eef+"));

var _propTypes = _interopRequireDefault(__webpack_require__("W0B4"));

var _react = _interopRequireWildcard(__webpack_require__("mXGw"));

var _classnames = _interopRequireDefault(__webpack_require__("8Jek"));

var _PopupButton = _interopRequireDefault(__webpack_require__("K8k1"));

var _VolumeBar = _interopRequireDefault(__webpack_require__("Quk2"));

var propTypes = {
  player: _propTypes["default"].object,
  actions: _propTypes["default"].object,
  vertical: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  alwaysShowVolume: _propTypes["default"].bool
};
var defaultProps = {
  vertical: false
};

var VolumeMenuButton =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(VolumeMenuButton, _Component);

  function VolumeMenuButton(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, VolumeMenuButton);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(VolumeMenuButton).call(this, props, context));
    _this.state = {
      active: false
    };
    _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleFocus = _this.handleFocus.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleBlur = _this.handleBlur.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(VolumeMenuButton, [{
    key: "handleClick",
    value: function handleClick() {
      var _this$props = this.props,
          player = _this$props.player,
          actions = _this$props.actions;
      actions.mute(!player.muted);
    }
  }, {
    key: "handleFocus",
    value: function handleFocus() {
      this.setState({
        active: true
      });
    }
  }, {
    key: "handleBlur",
    value: function handleBlur() {
      this.setState({
        active: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          vertical = _this$props2.vertical,
          player = _this$props2.player,
          className = _this$props2.className;
      var inline = !vertical;
      var level = this.volumeLevel;
      return _react["default"].createElement(_PopupButton["default"], {
        className: (0, _classnames["default"])(className, {
          'video-react-volume-menu-button-vertical': vertical,
          'video-react-volume-menu-button-horizontal': !vertical,
          'video-react-vol-muted': player.muted,
          'video-react-vol-0': level === 0 && !player.muted,
          'video-react-vol-1': level === 1,
          'video-react-vol-2': level === 2,
          'video-react-vol-3': level === 3,
          'video-react-slider-active': this.props.alwaysShowVolume || this.state.active,
          'video-react-lock-showing': this.props.alwaysShowVolume || this.state.active
        }, 'video-react-volume-menu-button'),
        onClick: this.handleClick,
        inline: inline
      }, _react["default"].createElement(_VolumeBar["default"], (0, _extends2["default"])({
        onFocus: this.handleFocus,
        onBlur: this.handleBlur
      }, this.props)));
    }
  }, {
    key: "volumeLevel",
    get: function get() {
      var _this$props$player = this.props.player,
          volume = _this$props$player.volume,
          muted = _this$props$player.muted;
      var level = 3;

      if (volume === 0 || muted) {
        level = 0;
      } else if (volume < 0.33) {
        level = 1;
      } else if (volume < 0.67) {
        level = 2;
      }

      return level;
    }
  }]);
  return VolumeMenuButton;
}(_react.Component);

VolumeMenuButton.propTypes = propTypes;
VolumeMenuButton.defaultProps = defaultProps;
VolumeMenuButton.displayName = 'VolumeMenuButton';
var _default = VolumeMenuButton;
exports["default"] = _default;

/***/ }),

/***/ "xcnx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("yIlq");

__webpack_require__("U8p0");

__webpack_require__("9p7t");

__webpack_require__("e2Kn");

__webpack_require__("MYxt");

__webpack_require__("d3/y");

var _interopRequireDefault = __webpack_require__("63Ad");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatTime = formatTime;
exports.isVideoChild = isVideoChild;
exports.mergeAndSortChildren = mergeAndSortChildren;
exports.deprecatedWarning = deprecatedWarning;
exports.throttle = throttle;
exports.mediaProperties = void 0;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("5WRv"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__("gki9"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("RiSW"));

var _react = _interopRequireDefault(__webpack_require__("mXGw")); // NaN is the only value in javascript which is not equal to itself.
// eslint-disable-next-line no-self-compare


var isNaN = Number.isNaN || function (value) {
  return value !== value;
};
/**
 * @file format-time.js
 *
 * Format seconds as a time string, H:MM:SS or M:SS
 * Supplying a guide (in seconds) will force a number of leading zeros
 * to cover the length of the guide
 *
 * @param  {Number} seconds Number of seconds to be turned into a string
 * @param  {Number} guide   Number (in seconds) to model the string after
 * @return {String}         Time formatted as H:MM:SS or M:SS
 * @private
 * @function formatTime
 */


function formatTime() {
  var seconds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var guide = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : seconds;
  var s = Math.floor(seconds % 60);
  var m = Math.floor(seconds / 60 % 60);
  var h = Math.floor(seconds / 3600);
  var gm = Math.floor(guide / 60 % 60);
  var gh = Math.floor(guide / 3600); // handle invalid times

  if (isNaN(seconds) || seconds === Infinity) {
    // '-' is false for all relational operators (e.g. <, >=) so this setting
    // will add the minimum number of fields specified by the guide
    h = '-';
    m = '-';
    s = '-';
  } // Check if we need to show hours


  h = h > 0 || gh > 0 ? "".concat(h, ":") : ''; // If hours are showing, we may need to add a leading zero.
  // Always show at least one digit of minutes.

  m = "".concat((h || gm >= 10) && m < 10 ? "0".concat(m) : m, ":"); // Check if leading zero is need for seconds

  s = s < 10 ? "0".concat(s) : s;
  return h + m + s;
} // Check if the element belongs to a video element
// only accept <source />, <track />,
// <MyComponent isVideoChild />
// elements


function isVideoChild(c) {
  if (c.props && c.props.isVideoChild) {
    return true;
  }

  return c.type === 'source' || c.type === 'track';
}

var find = function find(elements, func) {
  return elements.filter(func)[0];
}; // check if two components are the same type


var isTypeEqual = function isTypeEqual(component1, component2) {
  var type1 = component1.type;
  var type2 = component2.type;

  if (typeof type1 === 'string' || typeof type2 === 'string') {
    return type1 === type2;
  }

  if (typeof type1 === 'function' && typeof type2 === 'function') {
    return type1.displayName === type2.displayName;
  }

  return false;
}; // merge default children
// sort them by `order` property
// filter them by `disabled` property


function mergeAndSortChildren(defaultChildren, _children, _parentProps) {
  var defaultOrder = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

  var children = _react["default"].Children.toArray(_children);

  var order = _parentProps.order,
      parentProps = (0, _objectWithoutProperties2["default"])(_parentProps, ["order"]); // ignore order from parent

  return children.filter(function (e) {
    return !e.props.disabled;
  }) // filter the disabled components
  .concat(defaultChildren.filter(function (c) {
    return !find(children, function (component) {
      return isTypeEqual(component, c);
    });
  })).map(function (element) {
    var defaultComponent = find(defaultChildren, function (c) {
      return isTypeEqual(c, element);
    });
    var defaultProps = defaultComponent ? defaultComponent.props : {};
    var props = (0, _objectSpread2["default"])({}, parentProps, defaultProps, element.props);

    var e = _react["default"].cloneElement(element, props, element.props.children);

    return e;
  }).sort(function (a, b) {
    return (a.props.order || defaultOrder) - (b.props.order || defaultOrder);
  });
}
/**
 * Temporary utility for generating the warnings
 */


function deprecatedWarning(oldMethodCall, newMethodCall) {
  // eslint-disable-next-line no-console
  console.warn("WARNING: ".concat(oldMethodCall, " will be deprecated soon! Please use ").concat(newMethodCall, " instead."));
}

function throttle(callback, limit) {
  var _arguments = arguments;
  var wait = false;
  return function () {
    if (!wait) {
      // eslint-disable-next-line prefer-rest-params
      callback.apply(void 0, (0, _toConsumableArray2["default"])(_arguments));
      wait = true;
      setTimeout(function () {
        wait = false;
      }, limit);
    }
  };
}

var mediaProperties = ['error', 'src', 'srcObject', 'currentSrc', 'crossOrigin', 'networkState', 'preload', 'buffered', 'readyState', 'seeking', 'currentTime', 'duration', 'paused', 'defaultPlaybackRate', 'playbackRate', 'played', 'seekable', 'ended', 'autoplay', 'loop', 'mediaGroup', 'controller', 'controls', 'volume', 'muted', 'defaultMuted', 'audioTracks', 'videoTracks', 'textTracks', 'width', 'height', 'videoWidth', 'videoHeight', 'poster'];
exports.mediaProperties = mediaProperties;

/***/ }),

/***/ "zAXs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("V7cS");
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_0__);


/**
 * @ignore
 * some key-codes definition and utils from closure-library
 * @author yiminghe@gmail.com
 */
var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,

  /**
   * BACKSPACE
   */
  BACKSPACE: 8,

  /**
   * TAB
   */
  TAB: 9,

  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,
  // NUMLOCK on FF/Safari Mac

  /**
   * ENTER
   */
  ENTER: 13,

  /**
   * SHIFT
   */
  SHIFT: 16,

  /**
   * CTRL
   */
  CTRL: 17,

  /**
   * ALT
   */
  ALT: 18,

  /**
   * PAUSE
   */
  PAUSE: 19,

  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,

  /**
   * ESC
   */
  ESC: 27,

  /**
   * SPACE
   */
  SPACE: 32,

  /**
   * PAGE_UP
   */
  PAGE_UP: 33,
  // also NUM_NORTH_EAST

  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,
  // also NUM_SOUTH_EAST

  /**
   * END
   */
  END: 35,
  // also NUM_SOUTH_WEST

  /**
   * HOME
   */
  HOME: 36,
  // also NUM_NORTH_WEST

  /**
   * LEFT
   */
  LEFT: 37,
  // also NUM_WEST

  /**
   * UP
   */
  UP: 38,
  // also NUM_NORTH

  /**
   * RIGHT
   */
  RIGHT: 39,
  // also NUM_EAST

  /**
   * DOWN
   */
  DOWN: 40,
  // also NUM_SOUTH

  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,

  /**
   * INSERT
   */
  INSERT: 45,
  // also NUM_INSERT

  /**
   * DELETE
   */
  DELETE: 46,
  // also NUM_DELETE

  /**
   * ZERO
   */
  ZERO: 48,

  /**
   * ONE
   */
  ONE: 49,

  /**
   * TWO
   */
  TWO: 50,

  /**
   * THREE
   */
  THREE: 51,

  /**
   * FOUR
   */
  FOUR: 52,

  /**
   * FIVE
   */
  FIVE: 53,

  /**
   * SIX
   */
  SIX: 54,

  /**
   * SEVEN
   */
  SEVEN: 55,

  /**
   * EIGHT
   */
  EIGHT: 56,

  /**
   * NINE
   */
  NINE: 57,

  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,
  // needs localization

  /**
   * A
   */
  A: 65,

  /**
   * B
   */
  B: 66,

  /**
   * C
   */
  C: 67,

  /**
   * D
   */
  D: 68,

  /**
   * E
   */
  E: 69,

  /**
   * F
   */
  F: 70,

  /**
   * G
   */
  G: 71,

  /**
   * H
   */
  H: 72,

  /**
   * I
   */
  I: 73,

  /**
   * J
   */
  J: 74,

  /**
   * K
   */
  K: 75,

  /**
   * L
   */
  L: 76,

  /**
   * M
   */
  M: 77,

  /**
   * N
   */
  N: 78,

  /**
   * O
   */
  O: 79,

  /**
   * P
   */
  P: 80,

  /**
   * Q
   */
  Q: 81,

  /**
   * R
   */
  R: 82,

  /**
   * S
   */
  S: 83,

  /**
   * T
   */
  T: 84,

  /**
   * U
   */
  U: 85,

  /**
   * V
   */
  V: 86,

  /**
   * W
   */
  W: 87,

  /**
   * X
   */
  X: 88,

  /**
   * Y
   */
  Y: 89,

  /**
   * Z
   */
  Z: 90,

  /**
   * META
   */
  META: 91,
  // WIN_KEY_LEFT

  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,

  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,

  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,

  /**
   * NUM_ONE
   */
  NUM_ONE: 97,

  /**
   * NUM_TWO
   */
  NUM_TWO: 98,

  /**
   * NUM_THREE
   */
  NUM_THREE: 99,

  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,

  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,

  /**
   * NUM_SIX
   */
  NUM_SIX: 102,

  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,

  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,

  /**
   * NUM_NINE
   */
  NUM_NINE: 105,

  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,

  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,

  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,

  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,

  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,

  /**
   * F1
   */
  F1: 112,

  /**
   * F2
   */
  F2: 113,

  /**
   * F3
   */
  F3: 114,

  /**
   * F4
   */
  F4: 115,

  /**
   * F5
   */
  F5: 116,

  /**
   * F6
   */
  F6: 117,

  /**
   * F7
   */
  F7: 118,

  /**
   * F8
   */
  F8: 119,

  /**
   * F9
   */
  F9: 120,

  /**
   * F10
   */
  F10: 121,

  /**
   * F11
   */
  F11: 122,

  /**
   * F12
   */
  F12: 123,

  /**
   * NUMLOCK
   */
  NUMLOCK: 144,

  /**
   * SEMICOLON
   */
  SEMICOLON: 186,
  // needs localization

  /**
   * DASH
   */
  DASH: 189,
  // needs localization

  /**
   * EQUALS
   */
  EQUALS: 187,
  // needs localization

  /**
   * COMMA
   */
  COMMA: 188,
  // needs localization

  /**
   * PERIOD
   */
  PERIOD: 190,
  // needs localization

  /**
   * SLASH
   */
  SLASH: 191,
  // needs localization

  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,
  // needs localization

  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,
  // needs localization

  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,
  // needs localization

  /**
   * BACKSLASH
   */
  BACKSLASH: 220,
  // needs localization

  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,
  // needs localization

  /**
   * WIN_KEY
   */
  WIN_KEY: 224,

  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,
  // Firefox (Gecko) fires this for the meta key instead of 91

  /**
   * WIN_IME
   */
  WIN_IME: 229
};
/*
 whether text and modified key is entered at the same time.
 */

KeyCode.isTextModifyingKeyEvent = function isTextModifyingKeyEvent(e) {
  var keyCode = e.keyCode;

  if (e.altKey && !e.ctrlKey || e.metaKey || // Function keys don't generate text
  keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
    return false;
  } // The following keys are quite harmless, even in combination with
  // CTRL, ALT or SHIFT.


  switch (keyCode) {
    case KeyCode.ALT:
    case KeyCode.CAPS_LOCK:
    case KeyCode.CONTEXT_MENU:
    case KeyCode.CTRL:
    case KeyCode.DOWN:
    case KeyCode.END:
    case KeyCode.ESC:
    case KeyCode.HOME:
    case KeyCode.INSERT:
    case KeyCode.LEFT:
    case KeyCode.MAC_FF_META:
    case KeyCode.META:
    case KeyCode.NUMLOCK:
    case KeyCode.NUM_CENTER:
    case KeyCode.PAGE_DOWN:
    case KeyCode.PAGE_UP:
    case KeyCode.PAUSE:
    case KeyCode.PRINT_SCREEN:
    case KeyCode.RIGHT:
    case KeyCode.SHIFT:
    case KeyCode.UP:
    case KeyCode.WIN_KEY:
    case KeyCode.WIN_KEY_RIGHT:
      return false;

    default:
      return true;
  }
};
/*
 whether character is entered.
 */


KeyCode.isCharacterKey = function isCharacterKey(keyCode) {
  if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
    return true;
  }

  if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
    return true;
  }

  if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
    return true;
  } // Safari sends zero key code for non-latin characters.


  if (window.navigation.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
    return true;
  }

  switch (keyCode) {
    case KeyCode.SPACE:
    case KeyCode.QUESTION_MARK:
    case KeyCode.NUM_PLUS:
    case KeyCode.NUM_MINUS:
    case KeyCode.NUM_PERIOD:
    case KeyCode.NUM_DIVISION:
    case KeyCode.SEMICOLON:
    case KeyCode.DASH:
    case KeyCode.EQUALS:
    case KeyCode.COMMA:
    case KeyCode.PERIOD:
    case KeyCode.SLASH:
    case KeyCode.APOSTROPHE:
    case KeyCode.SINGLE_QUOTE:
    case KeyCode.OPEN_SQUARE_BRACKET:
    case KeyCode.BACKSLASH:
    case KeyCode.CLOSE_SQUARE_BRACKET:
      return true;

    default:
      return false;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (KeyCode);

/***/ })

}]);
//# sourceMappingURL=component---site-pages-index-zh-tsx-c54d7723ee3bd44f0e3b.js.map