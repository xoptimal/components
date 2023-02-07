import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["text", "mode", "render", "renderFormItem", "fieldProps", "proFieldKey"];
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { useIntl } from '@ant-design/pro-provider';
import { Input, Space } from 'antd';
import useMergedState from 'rc-util/lib/hooks/useMergedState';
import React from 'react';
// 兼容代码-----------
import 'antd/es/input/style';
import 'antd/es/space/style';
//----------------------
/**
 * 最基本的组件，就是个普通的 Input.Password
 *
 * @param
 */
var FieldPassword = function FieldPassword(_ref, ref) {
  var text = _ref.text,
    mode = _ref.mode,
    render = _ref.render,
    renderFormItem = _ref.renderFormItem,
    fieldProps = _ref.fieldProps,
    proFieldKey = _ref.proFieldKey,
    rest = _objectWithoutProperties(_ref, _excluded);
  var intl = useIntl();
  var _useMergedState = useMergedState(function () {
      return rest.open || rest.visible || false;
    }, {
      value: rest.open || rest.visible,
      onChange: rest.onOpenChange || rest.onVisible
    }),
    _useMergedState2 = _slicedToArray(_useMergedState, 2),
    open = _useMergedState2[0],
    setOpen = _useMergedState2[1];
  if (mode === 'read') {
    var dom = _jsx(_Fragment, {
      children: "-"
    });
    if (text) {
      dom = _jsxs(Space, {
        children: [_jsx("span", {
          ref: ref,
          children: open ? text : '＊ ＊ ＊ ＊ ＊'
        }), _jsx("a", {
          onClick: function onClick() {
            return setOpen(!open);
          },
          children: open ? _jsx(EyeOutlined, {}) : _jsx(EyeInvisibleOutlined, {})
        })]
      });
    }
    if (render) {
      return render(text, _objectSpread({
        mode: mode
      }, fieldProps), dom);
    }
    return dom;
  }
  if (mode === 'edit' || mode === 'update') {
    var _dom = _jsx(Input.Password, _objectSpread({
      placeholder: intl.getMessage('tableForm.inputPlaceholder', '请输入'),
      ref: ref
    }, fieldProps));
    if (renderFormItem) {
      return renderFormItem(text, _objectSpread({
        mode: mode
      }, fieldProps), _dom);
    }
    return _dom;
  }
  return null;
};
export default /*#__PURE__*/React.forwardRef(FieldPassword);