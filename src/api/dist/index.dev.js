"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchBlog = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const postUrl = "http://localhost:8000/blogs";
var fetchBlog = function fetchBlog(url, source) {
  try {
    return _axios["default"].get(url, {
      cancelToken: source.token
    });
  } catch (error) {
    if (_axios["default"].isCancel(error)) {
      console.log("Error ".concat(error.message));
    }

    return error;
  }
};

exports.fetchBlog = fetchBlog;