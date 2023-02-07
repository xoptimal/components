function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { PREFERS_COLOR_ATTR, PREFERS_COLOR_LS_KEY } from "../../constants";
import { useSiteData } from 'dumi';
import { useCallback, useEffect, useState } from 'react';
var colorChanger;

var ColorChanger = /*#__PURE__*/function () {
  /**
   * current color
   * @note  exclude `auto`
   */

  /**
   * current prefers color
   * @note  include `auto`
   */

  /**
   * color change callbacks
   */
  function ColorChanger(opts) {
    var _this = this;

    _classCallCheck(this, ColorChanger);

    _defineProperty(this, "color", void 0);

    _defineProperty(this, "prefersColor", void 0);

    _defineProperty(this, "callbacks", []);

    this.prefersColor = navigator.cookieEnabled && // read from localStorage first, because `auto` will not be set to attr
    localStorage.getItem(PREFERS_COLOR_LS_KEY) || // then use default value from themeConfig
    opts.default;
    this.color = document.documentElement.getAttribute(PREFERS_COLOR_ATTR); // listen prefers color change

    ['light', 'dark'].forEach(function (color) {
      var mediaQueryList = _this.getColorMedia(color);

      var handler = function handler(ev) {
        // only apply media prefers color in auto mode
        if (ev.matches && _this.prefersColor === 'auto') {
          _this.color = color;
          document.documentElement.setAttribute(PREFERS_COLOR_ATTR, color);

          _this.applyCallbacks();
        }
      }; // compatible with Safari 13-

      /* istanbul ignore else */


      if (mediaQueryList.addEventListener) {
        mediaQueryList.addEventListener('change', handler);
      } else if (mediaQueryList.addListener) {
        mediaQueryList.addListener(handler);
      }
    });
  }
  /**
   * get media instance for prefers color
   * @param color   prefers color
   */


  _createClass(ColorChanger, [{
    key: "getColorMedia",
    value: function getColorMedia(color) {
      return window.matchMedia("(prefers-color-scheme: ".concat(color, ")"));
    }
    /**
     * detect color whether matches current color mode
     * @param color   expected color
     */

  }, {
    key: "isColorMode",
    value: function isColorMode(color) {
      return this.getColorMedia(color).matches;
    }
    /**
     * apply all event change callbacks
     */

  }, {
    key: "applyCallbacks",
    value: function applyCallbacks() {
      var _this2 = this;

      this.callbacks.forEach(function (cb) {
        return cb({
          color: _this2.color,
          prefersColor: _this2.prefersColor
        });
      });
    }
    /**
     * listen color change
     * @param cb  callback
     */

  }, {
    key: "listen",
    value: function listen(cb) {
      this.callbacks.push(cb);
    }
    /**
     * unlisten color change
     * @param cb  callback
     */

  }, {
    key: "unlisten",
    value: function unlisten(cb) {
      this.callbacks.splice(this.callbacks.indexOf(cb), 1);
    }
    /**
     * set prefers color
     */

  }, {
    key: "tryPrefersColor",
    value: function tryPrefersColor(color) {
      if (navigator.cookieEnabled) {
        localStorage.setItem(PREFERS_COLOR_LS_KEY, color);
      }

      this.prefersColor = color;
      this.color = color === 'auto' ? this.isColorMode('dark') ? 'dark' : 'light' : color;
      document.documentElement.setAttribute(PREFERS_COLOR_ATTR, color);
      this.applyCallbacks();
      return color;
    }
  }]);

  return ColorChanger;
}();
/**
 * hook for get/set prefers-color-schema, use to control color mode for theme package
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme
 */


export var usePrefersColor = function usePrefersColor() {
  var _useSiteData = useSiteData(),
      themeConfig = _useSiteData.themeConfig;

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      color = _useState2[0],
      setColor = _useState2[1];

  var _useState3 = useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      prefersColor = _useState4[0],
      setPrefersColor = _useState4[1];

  var tryPrefersColor = useCallback(function (val) {
    colorChanger.tryPrefersColor(val);
  }, []);
  var colorChangeHandler = useCallback(function (args) {
    setColor(args.color);
    setPrefersColor(args.prefersColor);
  }, []);
  useEffect(function () {
    var _colorChanger;

    // lazy initialize, for SSR
    (_colorChanger = colorChanger) !== null && _colorChanger !== void 0 ? _colorChanger : colorChanger = new ColorChanger({
      default: themeConfig.prefersColor.default
    });
    colorChanger.listen(colorChangeHandler);
    setColor(colorChanger.color);
    setPrefersColor(colorChanger.prefersColor);
    return function () {
      return colorChanger.unlisten(colorChangeHandler);
    };
  }, []);
  return [color, prefersColor, tryPrefersColor];
};