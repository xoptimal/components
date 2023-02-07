import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { useStyle as useAntdStyle } from '@ant-design/pro-provider';
var genProStyle = function genProStyle(token) {
  var _token$componentCls;
  return _defineProperty({}, token.componentCls, (_token$componentCls = {
    '&-loading': {
      overflow: 'hidden'
    },
    '&-loading &-body': {
      userSelect: 'none'
    }
  }, _defineProperty(_token$componentCls, "".concat(token.componentCls, "-loading-content"), {
    width: '100%',
    p: {
      marginBlock: 0,
      marginInline: 0
    }
  }), _defineProperty(_token$componentCls, "".concat(token.componentCls, "-loading-block"), {
    height: '14px',
    marginBlock: '4px',
    background: "linear-gradient(90deg, rgba(54, 61, 64, 0.2), rgba(54, 61, 64, 0.4), rgba(54, 61, 64, 0.2))",
    backgroundSize: '600% 600%',
    borderRadius: token.borderRadius,
    animationName: 'card-loading',
    animationDuration: '1.4s',
    animationTimingFunction: 'ease',
    animationIterationCount: 'infinite'
  }), _defineProperty(_token$componentCls, '@keyframes card-loading', {
    '0%': {
      backgroundPosition: '0 50%'
    },
    '50%': {
      backgroundPosition: '100% 50%'
    },
    '100%': {
      backgroundPosition: '0 50 % '
    }
  }), _token$componentCls));
};
export function useStyle(prefixCls) {
  return useAntdStyle('ProCardLoading', function (token) {
    var proToken = _objectSpread(_objectSpread({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProStyle(proToken)];
  });
}