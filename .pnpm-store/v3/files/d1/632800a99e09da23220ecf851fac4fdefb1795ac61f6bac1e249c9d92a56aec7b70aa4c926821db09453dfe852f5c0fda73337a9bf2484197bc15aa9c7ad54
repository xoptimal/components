import { useParams, useSiteData } from 'dumi';
import { createElement } from 'react';
import "./index.less";

var DemoRenderPage = function DemoRenderPage() {
  var _useParams = useParams(),
      id = _useParams.id;

  var _useSiteData = useSiteData(),
      demos = _useSiteData.demos;

  var _ref = demos[id] || {},
      component = _ref.component;

  return component && /*#__PURE__*/createElement(component);
};

export default DemoRenderPage;