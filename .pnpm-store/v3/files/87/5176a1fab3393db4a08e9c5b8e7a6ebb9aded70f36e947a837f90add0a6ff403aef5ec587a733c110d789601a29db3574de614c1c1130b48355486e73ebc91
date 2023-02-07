function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import { matchRoutes, useAppData, useLocation, useRouteData } from 'dumi';
import { useCallback, useState } from 'react';
import { useIsomorphicLayoutEffect } from "./utils";
/**
 * hook for get matched route meta
 */

export var useRouteMeta = function useRouteMeta() {
  var _useRouteData = useRouteData(),
      route = _useRouteData.route;

  var _useLocation = useLocation(),
      pathname = _useLocation.pathname;

  var _useAppData = useAppData(),
      clientRoutes = _useAppData.clientRoutes;

  var getter = useCallback(function () {
    var ret;

    if (route.path === pathname && !('isLayout' in route)) {
      // use `useRouteData` result if matched, for performance
      ret = route.meta;
    } else {
      var _matchRoutes, _matched$route;

      // match manually for dynamic route & layout component
      var matched = (_matchRoutes = matchRoutes(clientRoutes, pathname)) === null || _matchRoutes === void 0 ? void 0 : _matchRoutes.pop();
      ret = matched === null || matched === void 0 ? void 0 : (_matched$route = matched.route) === null || _matched$route === void 0 ? void 0 : _matched$route.meta;
    }

    return ret || {
      frontmatter: {},
      toc: [],
      texts: []
    };
  }, [clientRoutes.length, pathname]);

  var _useState = useState(getter),
      _useState2 = _slicedToArray(_useState, 2),
      meta = _useState2[0],
      setMeta = _useState2[1];

  useIsomorphicLayoutEffect(function () {
    setMeta(getter);
  }, [clientRoutes.length, pathname]);
  return meta;
};