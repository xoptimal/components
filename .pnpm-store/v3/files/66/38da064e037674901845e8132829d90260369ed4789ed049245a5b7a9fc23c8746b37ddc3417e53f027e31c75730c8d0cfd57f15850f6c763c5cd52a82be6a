"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _jsxRuntime = require("react/jsx-runtime");
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _react = require("react");
var _style = require("./style");
var ProCardOperation = function ProCardOperation(props) {
  var className = props.className,
    _props$style = props.style,
    style = _props$style === void 0 ? {} : _props$style,
    children = props.children;
  var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var prefixCls = getPrefixCls('pro-card-operation');
  var _useStyle = (0, _style.useStyle)(prefixCls),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var classString = (0, _classnames.default)(prefixCls, className, hashId);
  return wrapSSR((0, _jsxRuntime.jsx)("div", {
    className: classString,
    style: style,
    children: children
  }));
};
var _default = ProCardOperation;
exports.default = _default;