function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import sdk from '@stackblitz/sdk';
import { genReactRenderCode } from "./utils";
export var openStackBlitz = function openStackBlitz(data) {
  var _data$asset$dependenc, _react, _deps$_react, _reactDom, _deps$_reactDom;

  var isTSX = Boolean((_data$asset$dependenc = data.asset.dependencies) === null || _data$asset$dependenc === void 0 ? void 0 : _data$asset$dependenc['index.tsx']);
  var ext = isTSX ? '.tsx' : '.jsx';
  var deps = {};
  var entryFileName = "index".concat(ext);
  var files = {
    'index.html': '<div style="margin: 16px;" id="root"></div>'
  };
  var config = {
    title: data.title || '',
    description: data.description || 'An auto-generated demo by dumi',
    template: 'create-react-app',
    files: {}
  };
  Object.entries(data.asset.dependencies).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        name = _ref2[0],
        _ref2$ = _ref2[1],
        type = _ref2$.type,
        value = _ref2$.value;

    if (type === 'NPM') {
      // generate dependencies
      deps[name] = value;
    } else {
      // append other imported local files
      files[name === entryFileName ? "App".concat(ext) : name] = value;
    }
  });
  (_deps$_react = deps[_react = 'react']) !== null && _deps$_react !== void 0 ? _deps$_react : deps[_react] = 'latest';
  (_deps$_reactDom = deps[_reactDom = 'react-dom']) !== null && _deps$_reactDom !== void 0 ? _deps$_reactDom : deps[_reactDom] = deps.react;
  files['package.json'] = JSON.stringify({
    name: data.title,
    description: data.description || 'An auto-generated demo by dumi',
    dependencies: deps,
    // add TypeScript dependency if required, must in devDeps to avoid csb compile error
    devDependencies: isTSX ? {
      typescript: '^4'
    } : {}
  }, null, 2);
  files[entryFileName] = genReactRenderCode(deps.react);
  config.files = files;
  sdk.openProject(config);
};