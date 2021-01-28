"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchBlog = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const postUrl = "http://localhost:8000/blogs";
var fetchBlog = function fetchBlog(url, source) {
  return regeneratorRuntime.async(function fetchBlog$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          return _context.abrupt("return", _axios["default"].get(url, {
            cancelToken: source.token
          }));

        case 4:
          _context.prev = 4;
          _context.t0 = _context["catch"](0);

          if (_axios["default"].isCancel(_context.t0)) {
            console.log("Error ".concat(_context.t0.message));
          }

          return _context.abrupt("return", _context.t0);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 4]]);
};

exports.fetchBlog = fetchBlog;