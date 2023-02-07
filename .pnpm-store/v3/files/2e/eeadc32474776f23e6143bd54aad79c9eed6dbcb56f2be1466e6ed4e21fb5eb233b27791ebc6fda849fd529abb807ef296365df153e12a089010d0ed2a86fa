function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import { ReactComponent as IconInbox } from '@ant-design/icons-svg/inline-svg/outlined/inbox.svg';
import { FormattedMessage, history, Link } from 'dumi';
import React, { Fragment, useCallback, useEffect, useState } from 'react';
import "./index.less";

var IconTitle = function IconTitle() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5.333 10.667h21.334c.889 0 1.333.444 1.333 1.333s-.444 1.333-1.333 1.333H5.333C4.444 13.333 4 12.89 4 12s.444-1.333 1.333-1.333Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.207 2.667h.126a1.206 1.206 0 0 1 1.2 1.326l-2.413 24.14a1.333 1.333 0 0 1-1.327 1.2h-.126a1.206 1.206 0 0 1-1.2-1.326l2.413-24.14c.068-.682.642-1.2 1.327-1.2Zm8 0h.126a1.206 1.206 0 0 1 1.2 1.326l-2.413 24.14a1.333 1.333 0 0 1-1.327 1.2h-.126a1.206 1.206 0 0 1-1.2-1.326l2.413-24.14c.068-.682.642-1.2 1.327-1.2Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.333 18.667h21.334c.889 0 1.333.444 1.333 1.333s-.444 1.333-1.333 1.333H5.333C4.444 21.333 4 20.89 4 20s.444-1.333 1.333-1.333Z"
  }));
};

var IconPage = function IconPage() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9.402 0h14.78L30 6.16V24.5c0 1.933-1.71 3.5-3.589 3.5H9.401C7.524 28 6 26.433 6 24.5v-21C6 1.567 7.523 0 9.402 0ZM23 2v4.183c0 .451.366.817.817.817H28l-5-5Zm3.333 24c.92 0 1.667-.768 1.667-1.714V8.857h-5c-.92 0-1.667-.767-1.667-1.714V2H9.667C8.747 2 8 2.768 8 3.714v20.572C8 25.232 8.746 26 9.667 26h16.666Z"
  }));
};

var IconContent = function IconContent() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6.12 14.589h6.628l1.52 4.004h2.485l-5.938-15.19H8.053L2.115 18.732H4.6l1.52-4.143ZM8.88 6.855c.139-.414.277-.828.415-1.38h.138c0 .138.138.414.414 1.104 0 .138.138.276.138.276 0 .138.829 2.072 2.21 5.938H6.672c1.519-3.866 2.21-5.8 2.21-5.938Zm8.148 2.348h12.705v1.933H17.029V9.203ZM2.115 20.665h27.619v1.933H2.114v-1.933Zm14.914-5.662h12.705v1.933H17.029v-1.933ZM2.115 26.327h27.619v1.933H2.114v-1.933ZM17.029 3.54h12.705v1.934H17.029V3.54Z"
  }));
};

var IconDemo = function IconDemo() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M28 6h-5a5 5 0 0 0-10 0H8a2 2 0 0 0-2 2v5a5 5 0 0 0 0 10v5a2 2 0 0 0 2 2h7v-2a3 3 0 0 1 6 0v2h7a2 2 0 0 0 2-2v-7h-2a3 3 0 0 1 0-6h2V8a2 2 0 0 0-2-2Zm-5 12a5 5 0 0 0 5 5v5h-5a5 5 0 0 0-10 0H8v-7H6a3 3 0 0 1 0-6h2V8h7V6a3 3 0 0 1 6 0v2h7v5a5 5 0 0 0-5 5Z"
  }));
};

var ICONS_MAPPING = {
  title: IconTitle,
  page: IconPage,
  content: IconContent,
  demo: IconDemo
};

var Highlight = function Highlight(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, props.texts.map(function (text, idx) {
    return /*#__PURE__*/React.createElement(Fragment, {
      key: idx
    }, text.highlighted ? /*#__PURE__*/React.createElement("mark", null, text.text) : text.text);
  }));
};

var useFlatSearchData = function useFlatSearchData(data) {
  var update = useCallback(function () {
    var activeIndex = 0;
    var ret = [];
    data.forEach(function (item) {
      if (item.title) {
        ret.push({
          type: 'title',
          value: {
            title: item.title
          }
        });
      }

      item.hints.forEach(function (hint) {
        ret.push({
          type: 'hint',
          activeIndex: activeIndex++,
          value: hint
        });
      });
    });
    return [ret, activeIndex];
  }, [data]);

  var _useState = useState(update),
      _useState2 = _slicedToArray(_useState, 2),
      flatData = _useState2[0],
      setFlatData = _useState2[1];

  useEffect(function () {
    setFlatData(update);
  }, [data]);
  return flatData;
};

var SearchResult = function SearchResult(props) {
  var _useFlatSearchData = useFlatSearchData(props.data),
      _useFlatSearchData2 = _slicedToArray(_useFlatSearchData, 2),
      data = _useFlatSearchData2[0],
      histsCount = _useFlatSearchData2[1];

  var _useState3 = useState(-1),
      _useState4 = _slicedToArray(_useState3, 2),
      activeIndex = _useState4[0],
      setActiveIndex = _useState4[1];

  useEffect(function () {
    var handler = function handler(ev) {
      // TODO: scroll into view for invisible items
      if (ev.key === 'ArrowDown') {
        setActiveIndex((activeIndex + 1) % histsCount);
      } else if (ev.key === 'ArrowUp') {
        setActiveIndex((activeIndex + histsCount - 1) % histsCount);
      } else if (ev.key === 'Enter' && activeIndex >= 0) {
        var _props$onItemSelect;

        var _item = data.find(function (item) {
          return item.type === 'hint' && item.activeIndex === activeIndex;
        }).value;
        history.push(_item.link);
        (_props$onItemSelect = props.onItemSelect) === null || _props$onItemSelect === void 0 ? void 0 : _props$onItemSelect.call(props, _item);
        document.activeElement.blur();
      }

      if (['Escape', 'Enter'].includes(ev.key)) {
        setActiveIndex(-1);
      }
    };

    document.addEventListener('keydown', handler);
    return function () {
      return document.removeEventListener('keydown', handler);
    };
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "dumi-default-search-result",
    onMouseEnter: function onMouseEnter() {
      return setActiveIndex(-1);
    } // for ux, only hide result when mouse up
    ,
    onMouseDownCapture: function onMouseDownCapture(ev) {
      return ev.preventDefault();
    },
    onMouseUpCapture: function onMouseUpCapture() {
      document.activeElement.blur();
    }
  }, Boolean(props.data.length || props.loading) ? /*#__PURE__*/React.createElement("dl", null, data.map(function (item, i) {
    return item.type === 'title' ? /*#__PURE__*/React.createElement("dt", {
      key: String(i)
    }, item.value.title) : /*#__PURE__*/React.createElement("dd", {
      key: String(i)
    }, /*#__PURE__*/React.createElement(Link, {
      to: item.value.link,
      "data-active": activeIndex === item.activeIndex || undefined,
      onClick: function onClick() {
        var _props$onItemSelect2;

        return (_props$onItemSelect2 = props.onItemSelect) === null || _props$onItemSelect2 === void 0 ? void 0 : _props$onItemSelect2.call(props, item.value);
      }
    }, /*#__PURE__*/React.createElement(ICONS_MAPPING[item.value.type]), /*#__PURE__*/React.createElement("h4", null, /*#__PURE__*/React.createElement(Highlight, {
      texts: item.value.highlightTitleTexts
    })), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(Highlight, {
      texts: item.value.highlightTexts
    }))));
  })) : /*#__PURE__*/React.createElement("div", {
    className: "dumi-default-search-empty"
  }, /*#__PURE__*/React.createElement(IconInbox, null), /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "search.not.found"
  })));
};

export default SearchResult;