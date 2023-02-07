function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import { useNavData, useSiteData } from 'dumi';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useLocaleDocRoutes } from "../utils"; // @ts-ignore

import workerCode from '-!../../../../compiled/_internal/searchWorker.min?dumi-raw';
var worker; // for ssr

if (typeof window !== 'undefined') {
  // use blob to avoid generate entry(chunk) for worker
  worker = new Worker(URL.createObjectURL(new Blob([workerCode], {
    type: 'application/javascript'
  })));
}

export var useSiteSearch = function useSiteSearch() {
  var debounceTimer = useRef();
  var routes = useLocaleDocRoutes();

  var _useSiteData = useSiteData(),
      demos = _useSiteData.demos;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      keywords = _useState4[0],
      setKeywords = _useState4[1];

  var navData = useNavData();

  var _useState5 = useState([]),
      _useState6 = _slicedToArray(_useState5, 2),
      result = _useState6[0],
      setResult = _useState6[1];

  var setter = useCallback(function (val) {
    setLoading(true);
    setKeywords(val);
  }, []);
  useEffect(function () {
    worker.onmessage = function (e) {
      setResult(e.data);
      setLoading(false);
    };
  }, []);
  useEffect(function () {
    // omit demo component for postmessage
    var demoData = Object.entries(demos).reduce(function (acc, _ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          _ref2$ = _ref2[1],
          asset = _ref2$.asset,
          routeId = _ref2$.routeId;

      return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, key, {
        asset: asset,
        routeId: routeId
      }));
    }, {});
    worker.postMessage({
      action: 'generate-metadata',
      args: {
        routes: JSON.parse(JSON.stringify(routes)),
        nav: navData,
        demos: demoData
      }
    });
  }, [routes, demos, navData]);
  useEffect(function () {
    var str = keywords.trim();

    if (str) {
      clearTimeout(debounceTimer.current);
      debounceTimer.current = window.setTimeout(function () {
        worker.postMessage({
          action: 'get-search-result',
          args: {
            keywords: str
          }
        });
      }, 200);
    } else {
      setResult([]);
    }
  }, [keywords]);
  return {
    keywords: keywords,
    setKeywords: setter,
    result: result,
    loading: loading
  };
};