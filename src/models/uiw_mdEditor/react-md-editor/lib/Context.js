"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditorContext = void 0;
exports.reducer = reducer;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _react = _interopRequireDefault(require("react"));
function reducer(state, action) {
  return (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, state), action);
}
var EditorContext = exports.EditorContext = /*#__PURE__*/_react["default"].createContext({
  markdown: ''
});