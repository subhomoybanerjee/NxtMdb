webpackHotUpdate_N_E("pages/new-meetup",{

/***/ "./pages/new-meetup.js":
/*!*****************************!*\
  !*** ./pages/new-meetup.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_DELL_Desktop_code_react_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_DELL_Desktop_code_react_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_DELL_Desktop_code_react_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_DELL_Desktop_code_react_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/meetups/NewMeetupForm */ "./components/meetups/NewMeetupForm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);





var _jsxFileName = "C:\\Users\\DELL\\Desktop\\code\\react\\nextjs\\pages\\new-meetup.js",
    _s = $RefreshSig$();




function NewMeetupPage() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  function onAddMeetupHandler(_x) {
    return _onAddMeetupHandler.apply(this, arguments);
  }

  function _onAddMeetupHandler() {
    _onAddMeetupHandler = Object(C_Users_DELL_Desktop_code_react_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_DELL_Desktop_code_react_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(enteredMeetUpData) {
      var response, data;
      return C_Users_DELL_Desktop_code_react_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch('./api/new-meetup', {
                method: 'POST',
                body: JSON.stringify(enteredMeetUpData),
                headers: {
                  'Content-Type': 'application/json'
                }
              });

            case 2:
              response = _context.sent;
              _context.next = 5;
              return response.json();

            case 5:
              data = _context.sent;
              console.log(data);
              router.push('/');

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _onAddMeetupHandler.apply(this, arguments);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onAddMeetup: onAddMeetupHandler
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }, this)
  }, void 0, false);
}

_s(NewMeetupPage, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = NewMeetupPage;
/* harmony default export */ __webpack_exports__["default"] = (NewMeetupPage);

var _c;

$RefreshReg$(_c, "NewMeetupPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3LW1lZXR1cC5qcyJdLCJuYW1lcyI6WyJOZXdNZWV0dXBQYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwib25BZGRNZWV0dXBIYW5kbGVyIiwiZW50ZXJlZE1lZXRVcERhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxhQUFULEdBQXlCO0FBQUE7O0FBRXJCLE1BQU1DLE1BQU0sR0FBQ0MsNkRBQVMsRUFBdEI7O0FBRnFCLFdBSU5DLGtCQUpNO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGlUQUlyQixpQkFBa0NDLGlCQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUcwQkMsS0FBSyxDQUFDLGtCQUFELEVBQW9CO0FBQzNDQyxzQkFBTSxFQUFDLE1BRG9DO0FBRTNDQyxvQkFBSSxFQUFDQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUwsaUJBQWYsQ0FGc0M7QUFHM0NNLHVCQUFPLEVBQUM7QUFDSixrQ0FBZTtBQURYO0FBSG1DLGVBQXBCLENBSC9COztBQUFBO0FBR1VDLHNCQUhWO0FBQUE7QUFBQSxxQkFXcUJBLFFBQVEsQ0FBQ0MsSUFBVCxFQVhyQjs7QUFBQTtBQVdVQyxrQkFYVjtBQVlJQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFFQVosb0JBQU0sQ0FBQ2UsSUFBUCxDQUFZLEdBQVo7O0FBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FKcUI7QUFBQTtBQUFBOztBQXdCckIsc0JBRUk7QUFBQSwyQkFFQSxxRUFBQyx5RUFBRDtBQUFlLGlCQUFXLEVBQUViO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQSxtQkFGSjtBQVNIOztHQWpDUUgsYTtVQUVRRSxxRDs7O0tBRlJGLGE7QUFtQ01BLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL25ldy1tZWV0dXAuNjVhMDZkMjM5MWNlMzczZDg3N2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgTmV3TWVldHVwRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9tZWV0dXBzL05ld01lZXR1cEZvcm1cIlxyXG5pbXBvcnQgcm91dGVyLCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuIFxyXG5cclxuZnVuY3Rpb24gTmV3TWVldHVwUGFnZSgpIHtcclxuXHJcbiAgICBjb25zdCByb3V0ZXI9dXNlUm91dGVyKClcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBvbkFkZE1lZXR1cEhhbmRsZXIoZW50ZXJlZE1lZXRVcERhdGEpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGVudGVyZWRNZWV0VXBEYXRhKVxyXG5cclxuICAgICAgICBjb25zdCByZXNwb25zZT0gYXdhaXQgZmV0Y2goJy4vYXBpL25ldy1tZWV0dXAnLHtcclxuICAgICAgICAgICAgbWV0aG9kOidQT1NUJyxcclxuICAgICAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeShlbnRlcmVkTWVldFVwRGF0YSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCBkYXRhPWF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcblxyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvJylcclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPE5ld01lZXR1cEZvcm0gb25BZGRNZWV0dXA9e29uQWRkTWVldHVwSGFuZGxlcn0gLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgICBcclxuXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld01lZXR1cFBhZ2UiXSwic291cmNlUm9vdCI6IiJ9