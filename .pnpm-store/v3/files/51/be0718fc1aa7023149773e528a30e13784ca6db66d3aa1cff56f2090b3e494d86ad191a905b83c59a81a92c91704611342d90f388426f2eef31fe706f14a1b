import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ConfigProvider, Popover } from 'antd';
import { useContext } from 'react';
import { DropdownFooter } from '../DropdownFooter';
import { useStyle } from './style';
import 'antd/es/dropdown/style';
import { openVisibleCompatible } from '../../compareVersions/openVisibleCompatible';
var FilterDropdown = function FilterDropdown(props) {
  var children = props.children,
    label = props.label,
    footer = props.footer,
    open = props.open,
    onOpenChange = props.onOpenChange,
    disabled = props.disabled,
    onVisibleChange = props.onVisibleChange,
    visible = props.visible,
    footerRender = props.footerRender,
    placement = props.placement;
  var _useContext = useContext(ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var prefixCls = getPrefixCls('pro-core-field-dropdown');
  var _useStyle = useStyle(prefixCls),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var dropdownOpenProps = openVisibleCompatible(open || visible || false, onOpenChange || onVisibleChange);
  return wrapSSR(_jsx(Popover, _objectSpread(_objectSpread({
    placement: placement,
    trigger: ['click']
  }, dropdownOpenProps), {}, {
    overlayInnerStyle: {
      padding: 0
    },
    content: _jsxs("div", {
      className: "".concat(prefixCls, "-overlay ").concat(prefixCls, "-overlay-").concat(placement, " ").concat(hashId),
      children: [_jsx("div", {
        className: "".concat(prefixCls, "-content ").concat(hashId),
        children: children
      }), footer && _jsx(DropdownFooter, _objectSpread({
        disabled: disabled,
        footerRender: footerRender
      }, footer))]
    }),
    children: _jsx("span", {
      className: "".concat(prefixCls, "-label ").concat(hashId),
      children: label
    })
  })));
};
export { FilterDropdown };