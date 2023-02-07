"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalHeader = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _jsxRuntime = require("react/jsx-runtime");
var _icons = require("@ant-design/icons");
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _react = require("react");
var _utils = require("../../utils/utils");
var _AppsLogoComponents = require("../AppsLogoComponents");
var _SiderMenu = require("../SiderMenu/SiderMenu");
var _TopNavHeader = require("../TopNavHeader");
var _RightContent = require("./RightContent");
var _style = require("./style");
var renderLogo = function renderLogo(menuHeaderRender, logoDom) {
  if (menuHeaderRender === false) {
    return null;
  }
  if (menuHeaderRender) {
    return menuHeaderRender(logoDom, null);
  }
  return logoDom;
};
var GlobalHeader = function GlobalHeader(props) {
  var _classNames;
  var isMobile = props.isMobile,
    logo = props.logo,
    collapsed = props.collapsed,
    onCollapse = props.onCollapse,
    rightContentRender = props.rightContentRender,
    menuHeaderRender = props.menuHeaderRender,
    onMenuHeaderClick = props.onMenuHeaderClick,
    propClassName = props.className,
    style = props.style,
    layout = props.layout,
    children = props.children,
    splitMenus = props.splitMenus,
    menuData = props.menuData,
    prefixCls = props.prefixCls;
  var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
    direction = _useContext.direction;
  var _useContext2 = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
    getPrefixCls = _useContext2.getPrefixCls;
  var baseClassName = "".concat(prefixCls || getPrefixCls('pro'), "-global-header");
  var _useStyle = (0, _style.useStyle)(baseClassName),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var className = (0, _classnames.default)(propClassName, baseClassName, hashId);
  if (layout === 'mix' && !isMobile && splitMenus) {
    var noChildrenMenuData = (menuData || []).map(function (item) {
      return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, item), {}, {
        children: undefined,
        routes: undefined
      });
    });
    var clearMenuData = (0, _utils.clearMenuItem)(noChildrenMenuData);
    return (0, _jsxRuntime.jsx)(_TopNavHeader.TopNavHeader, (0, _objectSpread2.default)((0, _objectSpread2.default)({
      mode: "horizontal"
    }, props), {}, {
      splitMenus: false,
      menuData: clearMenuData
    }));
  }
  var logoClassNames = (0, _classnames.default)("".concat(baseClassName, "-logo"), hashId, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(baseClassName, "-logo-rtl"), direction === 'rtl'), (0, _defineProperty2.default)(_classNames, "".concat(baseClassName, "-logo-mix"), layout === 'mix'), (0, _defineProperty2.default)(_classNames, "".concat(baseClassName, "-logo-mobile"), isMobile), _classNames));
  var logoDom = (0, _jsxRuntime.jsx)("span", {
    className: logoClassNames,
    children: (0, _jsxRuntime.jsx)("a", {
      children: (0, _AppsLogoComponents.defaultRenderLogo)(logo)
    })
  }, "logo");
  return wrapSSR((0, _jsxRuntime.jsxs)("div", {
    className: className,
    style: (0, _objectSpread2.default)({}, style),
    children: [isMobile && (0, _jsxRuntime.jsx)("span", {
      className: "".concat(baseClassName, "-collapsed-button ").concat(hashId),
      onClick: function onClick() {
        onCollapse === null || onCollapse === void 0 ? void 0 : onCollapse(!collapsed);
      },
      children: (0, _jsxRuntime.jsx)(_icons.MenuOutlined, {})
    }), isMobile && renderLogo(menuHeaderRender, logoDom), layout === 'mix' && !isMobile && (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [(0, _jsxRuntime.jsx)(_AppsLogoComponents.AppsLogoComponents, (0, _objectSpread2.default)({}, props)), (0, _jsxRuntime.jsx)("div", {
        className: logoClassNames,
        onClick: onMenuHeaderClick,
        children: (0, _SiderMenu.renderLogoAndTitle)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
          collapsed: false
        }), 'headerTitleRender')
      })]
    }), (0, _jsxRuntime.jsx)("div", {
      style: {
        flex: 1
      },
      children: children
    }), (rightContentRender || props.actionsRender || props.avatarProps) && (0, _jsxRuntime.jsx)(_RightContent.RightContent, (0, _objectSpread2.default)({
      rightContentRender: rightContentRender
    }, props))]
  }));
};
exports.GlobalHeader = GlobalHeader;