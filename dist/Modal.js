"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Modal.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Modal = function Modal(_ref) {
  var isOpen = _ref.isOpen,
    onClose = _ref.onClose,
    title = _ref.title,
    children = _ref.children;
  if (!isOpen) return null; // Si la modale n'est pas ouverte, ne rien rendre

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/_react["default"].createElement("h2", null, title), /*#__PURE__*/_react["default"].createElement("button", {
    className: "close-btn",
    onClick: onClose
  }, "\xD7")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-body"
  }, children)));
};
var _default = exports["default"] = Modal;