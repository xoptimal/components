import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["mode", "render", "renderFormItem", "fieldProps", "emptyText"];
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Segmented, Spin } from 'antd';
import React, { useImperativeHandle, useRef } from 'react';
import omit from 'omit.js';
import { ObjToMap, proFieldParsingText, useFieldFetchData } from '../Select';
import 'antd/es/segmented/style';
import 'antd/es/spin/style';
/**
 * Segmented https://ant.design/components/segmented-cn/
 *
 * @param
 */
var FieldSegmented = function FieldSegmented(_ref, ref) {
  var mode = _ref.mode,
    render = _ref.render,
    renderFormItem = _ref.renderFormItem,
    fieldProps = _ref.fieldProps,
    _ref$emptyText = _ref.emptyText,
    emptyText = _ref$emptyText === void 0 ? '-' : _ref$emptyText,
    rest = _objectWithoutProperties(_ref, _excluded);
  var inputRef = useRef();
  var _useFieldFetchData = useFieldFetchData(rest),
    _useFieldFetchData2 = _slicedToArray(_useFieldFetchData, 3),
    loading = _useFieldFetchData2[0],
    options = _useFieldFetchData2[1],
    _fetchData = _useFieldFetchData2[2];
  useImperativeHandle(ref, function () {
    return _objectSpread(_objectSpread({}, inputRef.current || {}), {}, {
      fetchData: function fetchData() {
        return _fetchData();
      }
    });
  });
  if (loading) {
    return _jsx(Spin, {
      size: "small"
    });
  }
  if (mode === 'read') {
    var optionsValueEnum = (options === null || options === void 0 ? void 0 : options.length) ? options === null || options === void 0 ? void 0 : options.reduce(function (pre, cur) {
      var _cur$value;
      return _objectSpread(_objectSpread({}, pre), {}, _defineProperty({}, (_cur$value = cur.value) !== null && _cur$value !== void 0 ? _cur$value : '', cur.label));
    }, {}) : undefined;
    var dom = _jsx(_Fragment, {
      children: proFieldParsingText(rest.text, ObjToMap(rest.valueEnum || optionsValueEnum))
    });
    if (render) {
      var _render;
      return (_render = render(rest.text, _objectSpread({
        mode: mode
      }, fieldProps), _jsx(_Fragment, {
        children: dom
      }))) !== null && _render !== void 0 ? _render : emptyText;
    }
    return dom;
  }
  if (mode === 'edit' || mode === 'update') {
    var _dom = _jsx(Segmented, _objectSpread(_objectSpread({
      ref: inputRef
    }, omit(fieldProps || {}, ['allowClear'])), {}, {
      options: options
    }));
    if (renderFormItem) {
      return renderFormItem(rest.text, _objectSpread(_objectSpread({
        mode: mode
      }, fieldProps), {}, {
        options: options
      }), _dom);
    }
    return _dom;
  }
  return null;
};
export default /*#__PURE__*/React.forwardRef(FieldSegmented);