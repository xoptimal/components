import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { jsx as _jsx } from "react/jsx-runtime";
import { Menu } from 'antd';
import { omitUndefined } from '../omitUndefined';
import { compareVersions } from './index';
import { getVersion } from './openVisibleCompatible';
var menuOverlayCompatible = function menuOverlayCompatible(menu) {
  var props = compareVersions(getVersion(), '4.24.0') > -1 ? {
    menu: menu
  } : {
    overlay: _jsx(Menu, _objectSpread({}, menu))
  };
  return omitUndefined(props);
};
export { menuOverlayCompatible };