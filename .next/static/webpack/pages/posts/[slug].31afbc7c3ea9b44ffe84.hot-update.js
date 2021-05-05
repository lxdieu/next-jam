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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_component_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    config: configData,
    pages: pages,
    posts: posts,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("article", {
      className: "post page post-full",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
        className: "post-header",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "post-title",
          children: page.data.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "post-content",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_markdown__WEBPACK_IMPORTED_MODULE_2___default.a, {
          children: page.data.Desciption
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "post-content",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_markdown__WEBPACK_IMPORTED_MODULE_2___default.a, {
          children: page.data.Content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW3NsdWddLmpzIl0sIm5hbWVzIjpbIlBvc3QiLCJjb25maWdEYXRhIiwicGFnZSIsInBhZ2VzIiwicG9zdHMiLCJkYXRhIiwidGl0bGUiLCJEZXNjaXB0aW9uIiwiQ29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUllLFNBQVNBLElBQVQsT0FBMkM7QUFBQSxNQUEzQkMsVUFBMkIsUUFBM0JBLFVBQTJCO0FBQUEsTUFBZkMsSUFBZSxRQUFmQSxJQUFlO0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTO0FBQ3hELHNCQUNFLHFFQUFDLDZEQUFEO0FBQVEsVUFBTSxFQUFFRixVQUFoQjtBQUE0QixTQUFLLEVBQUVFLEtBQW5DO0FBQTBDLFNBQUssRUFBRUMsS0FBakQ7QUFBQSwyQkFDRTtBQUFTLGVBQVMsRUFBQyxxQkFBbkI7QUFBQSw4QkFDRTtBQUFRLGlCQUFTLEVBQUMsYUFBbEI7QUFBQSwrQkFDRTtBQUFJLG1CQUFTLEVBQUMsWUFBZDtBQUFBLG9CQUE0QkYsSUFBSSxDQUFDRyxJQUFMLENBQVVDO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRTtBQUFLLGlCQUFTLEVBQUMsY0FBZjtBQUFBLCtCQUNFLHFFQUFDLHFEQUFEO0FBQWUsa0JBQVEsRUFBRUosSUFBSSxDQUFDRyxJQUFMLENBQVVFO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsZUFPRTtBQUFLLGlCQUFTLEVBQUMsY0FBZjtBQUFBLCtCQUNFLHFFQUFDLHFEQUFEO0FBQWUsa0JBQVEsRUFBRUwsSUFBSSxDQUFDRyxJQUFMLENBQVVHO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZUQ7S0FoQnVCUixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL1tzbHVnXS4zMWFmYmM3YzNlYTliNDRmZmU4NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudC9MYXlvdXRcIjtcclxuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XHJcbmltcG9ydCBjb25maWdEYXRhIGZyb20gXCIuLi8uLi9kYXRhL2NvbmZpZy5qc29uXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QoeyBjb25maWdEYXRhLCBwYWdlLCBwYWdlcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgY29uZmlnPXtjb25maWdEYXRhfSBwYWdlcz17cGFnZXN9IHBvc3RzPXtwb3N0c30+XHJcbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cInBvc3QgcGFnZSBwb3N0LWZ1bGxcIj5cclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInBvc3QtaGVhZGVyXCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicG9zdC10aXRsZVwiPntwYWdlLmRhdGEudGl0bGV9PC9oMT5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtY29udGVudFwiPlxyXG4gICAgICAgICAgPFJlYWN0TWFya2Rvd24gY2hpbGRyZW49e3BhZ2UuZGF0YS5EZXNjaXB0aW9ufSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1jb250ZW50XCI+XHJcbiAgICAgICAgICA8UmVhY3RNYXJrZG93biBjaGlsZHJlbj17cGFnZS5kYXRhLkNvbnRlbnR9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvYXJ0aWNsZT5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkFQSX0vbmV3cy9wb3N0L2AsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJYLUZsYXR0ZW5cIjogdHJ1ZSxcclxuICAgICAgXCJYLUxhbmd1YWdlc1wiOiBcInZpXCIsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGNvbnN0IHBvc3RQYXRoID0gZGF0YS5kYXRhLml0ZW1zLm1hcCgocG9zdCkgPT4gKHtcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBzbHVnOiBwb3N0LmlkLFxyXG4gICAgfSxcclxuICB9KSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzOiBwb3N0UGF0aCxcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQVBJfS9uZXdzL3Bvc3QvJHtwYXJhbXMuc2x1Z31gLCB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiWC1GbGF0dGVuXCI6IHRydWUsXHJcbiAgICAgIFwiWC1MYW5ndWFnZXNcIjogXCJ2aVwiLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgbGlzdFBhZ2VzID0gYXdhaXQgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkFQSX0vbmV3cy9wYWdlYCwge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIlgtRmxhdHRlblwiOiB0cnVlLFxyXG4gICAgICBcIlgtTGFuZ3VhZ2VzXCI6IFwidmlcIixcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGxpc3RQb3N0cyA9IGF3YWl0IGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5BUEl9L25ld3MvcG9zdGAsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJYLUZsYXR0ZW5cIjogdHJ1ZSxcclxuICAgICAgXCJYLUxhbmd1YWdlc1wiOiBcInZpXCIsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGNvbnN0IHBhZ2UgPSBkYXRhLmRhdGE7XHJcbiAgY29uc3QgcGFnZXMgPSBsaXN0UGFnZXMuZGF0YS5pdGVtcztcclxuICBjb25zdCBwb3N0cyA9IGxpc3RQb3N0cy5kYXRhLml0ZW1zO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgY29uZmlnRGF0YSxcclxuICAgICAgcGFnZSxcclxuICAgICAgcGFnZXMsXHJcbiAgICAgIHBvc3RzLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=