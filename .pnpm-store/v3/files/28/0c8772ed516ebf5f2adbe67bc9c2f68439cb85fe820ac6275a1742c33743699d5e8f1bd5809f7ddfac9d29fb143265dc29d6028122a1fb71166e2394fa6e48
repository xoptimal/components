"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegionalSetting = void 0;
var _jsxRuntime = require("react/jsx-runtime");
var _antd = require("antd");
var _index = require("./index");
var _LayoutChange = require("./LayoutChange");
var RegionalSetting = function RegionalSetting(_ref) {
  var _ref$settings = _ref.settings,
    settings = _ref$settings === void 0 ? {} : _ref$settings,
    prefixCls = _ref.prefixCls,
    changeSetting = _ref.changeSetting,
    hashId = _ref.hashId;
  var formatMessage = (0, _index.getFormatMessage)();
  var regionalSetting = ['header', 'footer', 'menu', 'menuHeader'];
  return (0, _jsxRuntime.jsx)(_antd.List, {
    className: "".concat(prefixCls, "-list ").concat(hashId),
    split: false,
    renderItem: _LayoutChange.renderLayoutSettingItem,
    dataSource: regionalSetting.map(function (key) {
      return {
        title: formatMessage({
          id: "app.setting.regionalsettings.".concat(key)
        }),
        action: (0, _jsxRuntime.jsx)(_antd.Switch, {
          size: "small",
          className: "regional-".concat(key, " ").concat(hashId),
          checked: settings["".concat(key, "Render")] || settings["".concat(key, "Render")] === undefined,
          onChange: function onChange(checked) {
            return changeSetting("".concat(key, "Render"), checked === true ? undefined : false);
          }
        })
      };
    })
  });
};
exports.RegionalSetting = RegionalSetting;