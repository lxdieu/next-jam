webpackHotUpdate_N_E("pages/posts/[slug]",{

/***/ "./pages/posts/[slug].js":
/*!*******************************!*\
  !*** ./pages/posts/[slug].js ***!
  \*******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Post; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_component_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/component/Layout */ "./src/component/Layout/index.jsx");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/src/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "E:\\Project\\next-jam\\pages\\posts\\[slug].js";


var __N_SSG = true;
function Post(_ref) {
  var configData = _ref.configData,
      page = _ref.page,
      pages = _ref.pages;
  var data = JSON.parse(page);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_component_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    config: configData,
    pages: pages,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("article", {
      className: "post page post-full",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
        className: "post-header",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "post-title",
          children: data.data.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "post-subtitle",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_markdown__WEBPACK_IMPORTED_MODULE_2___default.a, {
          source: data.data.Desciption
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "post-content",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_markdown__WEBPACK_IMPORTED_MODULE_2___default.a, {
          children: data.data.Content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
_c = Post;

var _c;

$RefreshReg$(_c, "Post");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW3NsdWddLmpzIl0sIm5hbWVzIjpbIlBvc3QiLCJjb25maWdEYXRhIiwicGFnZSIsInBhZ2VzIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsInRpdGxlIiwiRGVzY2lwdGlvbiIsIkNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHZSxTQUFTQSxJQUFULE9BQTJDO0FBQUEsTUFBM0JDLFVBQTJCLFFBQTNCQSxVQUEyQjtBQUFBLE1BQWZDLElBQWUsUUFBZkEsSUFBZTtBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUztBQUN4RCxNQUFNQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixJQUFYLENBQWI7QUFFQSxzQkFDRSxxRUFBQyw2REFBRDtBQUFRLFVBQU0sRUFBRUQsVUFBaEI7QUFBNEIsU0FBSyxFQUFFRSxLQUFuQztBQUFBLDJCQUNFO0FBQVMsZUFBUyxFQUFDLHFCQUFuQjtBQUFBLDhCQUNFO0FBQVEsaUJBQVMsRUFBQyxhQUFsQjtBQUFBLCtCQUNFO0FBQUksbUJBQVMsRUFBQyxZQUFkO0FBQUEsb0JBQTRCQyxJQUFJLENBQUNBLElBQUwsQ0FBVUc7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUlFO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUEsK0JBQ0UscUVBQUMscURBQUQ7QUFBZSxnQkFBTSxFQUFFSCxJQUFJLENBQUNBLElBQUwsQ0FBVUk7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQU9FO0FBQUssaUJBQVMsRUFBQyxjQUFmO0FBQUEsK0JBQ0UscUVBQUMscURBQUQ7QUFBZSxrQkFBUSxFQUFFSixJQUFJLENBQUNBLElBQUwsQ0FBVUs7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFlRDtLQWxCdUJULEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvW3NsdWddLjg4NWNlMDIzMzY4ZDI1ZDU4YWQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9zcmMvY29tcG9uZW50L0xheW91dFwiO1xyXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcclxuaW1wb3J0IGNvbmZpZ0RhdGEgZnJvbSBcIi4uLy4uL2RhdGEvY29uZmlnLmpzb25cIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHsgY29uZmlnRGF0YSwgcGFnZSwgcGFnZXMgfSkge1xyXG4gIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHBhZ2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCBjb25maWc9e2NvbmZpZ0RhdGF9IHBhZ2VzPXtwYWdlc30+XHJcbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cInBvc3QgcGFnZSBwb3N0LWZ1bGxcIj5cclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInBvc3QtaGVhZGVyXCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicG9zdC10aXRsZVwiPntkYXRhLmRhdGEudGl0bGV9PC9oMT5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3Qtc3VidGl0bGVcIj5cclxuICAgICAgICAgIDxSZWFjdE1hcmtkb3duIHNvdXJjZT17ZGF0YS5kYXRhLkRlc2NpcHRpb259IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LWNvbnRlbnRcIj5cclxuICAgICAgICAgIDxSZWFjdE1hcmtkb3duIGNoaWxkcmVuPXtkYXRhLmRhdGEuQ29udGVudH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9hcnRpY2xlPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQVBJfS9uZXdzL3Bvc3QvYCwge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIlgtRmxhdHRlblwiOiB0cnVlLFxyXG4gICAgICBcIlgtTGFuZ3VhZ2VzXCI6IFwidmlcIixcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgY29uc3QgcG9zdFBhdGggPSBkYXRhLmRhdGEuaXRlbXMubWFwKChwb3N0KSA9PiAoe1xyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgIHNsdWc6IHBvc3QuaWQsXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHM6IHBvc3RQYXRoLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5BUEl9L25ld3MvcG9zdC8ke3BhcmFtcy5zbHVnfWAsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJYLUZsYXR0ZW5cIjogdHJ1ZSxcclxuICAgICAgXCJYLUxhbmd1YWdlc1wiOiBcInZpXCIsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGNvbnN0IHBhZ2UgPSBKU09OLnN0cmluZ2lmeShkYXRhLmRhdGEpO1xyXG4gIGNvbnN0IHBhZ2VzID0gW107XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBjb25maWdEYXRhLFxyXG4gICAgICBwYWdlLFxyXG4gICAgICBwYWdlcyxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9