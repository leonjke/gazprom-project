webpackHotUpdate("main", {
  /***/ "./src/components/App/App.jsx":
    /*!************************************!*\
  !*** ./src/components/App/App.jsx ***!
  \************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! react */ "./node_modules/react/index.js"
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js"
      );
      /* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./App.scss */ "./src/components/App/App.scss"
      );
      /* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        _App_scss__WEBPACK_IMPORTED_MODULE_2__
      );
      /* harmony import */ var _utils_history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ../../utils/history */ "./src/utils/history.js"
      );
      /* harmony import */ var _PrivateRoute_PrivateRoute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ../PrivateRoute/PrivateRoute */ "./src/components/PrivateRoute/PrivateRoute.jsx"
      );
      /* harmony import */ var _pages_Main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ../../pages/Main */ "./src/pages/Main/index.js"
      );
      /* harmony import */ var _pages_Idea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! ../../pages/Idea */ "./src/pages/Idea/index.js"
      );
      /* harmony import */ var _pages_User__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! ../../pages/User */ "./src/pages/User/index.js"
      );
      var _jsxFileName =
        "/home/user/WebstormProjects/gazprom-portal/src/components/App/App.jsx";

      const App = () => {
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Router"],
          {
            history: _utils_history__WEBPACK_IMPORTED_MODULE_3__["default"],
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 12,
              columnNumber: 5,
            },
          },
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"],
            {
              exact: true,
              path: "/",
              __self: undefined,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 13,
                columnNumber: 7,
              },
            },
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _pages_Main__WEBPACK_IMPORTED_MODULE_5__["default"],
              {
                __self: undefined,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 14,
                  columnNumber: 9,
                },
              }
            )
          ),
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _PrivateRoute_PrivateRoute__WEBPACK_IMPORTED_MODULE_4__["default"],
            {
              exact: true,
              path: "/idea",
              __self: undefined,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 16,
                columnNumber: 7,
              },
            },
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _pages_Idea__WEBPACK_IMPORTED_MODULE_6__["default"],
              {
                __self: undefined,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 17,
                  columnNumber: 9,
                },
              }
            )
          ),
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _PrivateRoute_PrivateRoute__WEBPACK_IMPORTED_MODULE_4__["default"],
            {
              exact: true,
              path: "/idea/profile",
              __self: undefined,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 19,
                columnNumber: 7,
              },
            },
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _pages_User__WEBPACK_IMPORTED_MODULE_7__["default"],
              {
                __self: undefined,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 20,
                  columnNumber: 9,
                },
              }
            )
          )
        );
      };

      /* harmony default export */ __webpack_exports__["default"] = App;

      /***/
    },

  /***/ "./src/components/Navigation/Navigation.jsx":
    /*!**************************************************!*\
  !*** ./src/components/Navigation/Navigation.jsx ***!
  \**************************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! react */ "./node_modules/react/index.js"
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js"
      );
      /* harmony import */ var _holism_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! @holism/icons */ "./node_modules/@holism/icons/esm/index.js"
      );
      /* harmony import */ var _Navigation_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./Navigation.scss */ "./src/components/Navigation/Navigation.scss"
      );
      /* harmony import */ var _Navigation_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        _Navigation_scss__WEBPACK_IMPORTED_MODULE_3__
      );
      var _jsxFileName =
        "/home/user/WebstormProjects/gazprom-portal/src/components/Navigation/Navigation.jsx";

      const Navigation = () => {
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          "div",
          {
            className: "navigation",
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 8,
              columnNumber: 5,
            },
          },
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "div",
            {
              className: "navigation__item",
              __self: undefined,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 9,
                columnNumber: 7,
              },
            },
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"],
              {
                to: "/idea/profile",
                __self: undefined,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 10,
                  columnNumber: 9,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _holism_icons__WEBPACK_IMPORTED_MODULE_2__["ProfileIcon"],
                {
                  color: "#FFFFFF",
                  size: 50,
                  __self: undefined,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11,
                    columnNumber: 11,
                  },
                }
              )
            )
          ),
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "div",
            {
              className: "navigation__item",
              __self: undefined,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 14,
                columnNumber: 7,
              },
            },
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"],
              {
                to: "",
                __self: undefined,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 15,
                  columnNumber: 9,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _holism_icons__WEBPACK_IMPORTED_MODULE_2__["CupIcon"],
                {
                  color: "#FFFFFF",
                  size: 50,
                  __self: undefined,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16,
                    columnNumber: 11,
                  },
                }
              )
            )
          ),
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "div",
            {
              className: "navigation__item",
              __self: undefined,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 19,
                columnNumber: 7,
              },
            },
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"],
              {
                to: "",
                __self: undefined,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 20,
                  columnNumber: 9,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _holism_icons__WEBPACK_IMPORTED_MODULE_2__["EmailIcon"],
                {
                  color: "#FFFFFF",
                  size: 50,
                  __self: undefined,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21,
                    columnNumber: 11,
                  },
                }
              )
            )
          ),
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "div",
            {
              className: "navigation__item",
              __self: undefined,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 24,
                columnNumber: 7,
              },
            },
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"],
              {
                to: "",
                __self: undefined,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 25,
                  columnNumber: 9,
                },
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _holism_icons__WEBPACK_IMPORTED_MODULE_2__["GiftIcon"],
                {
                  color: "#FFFFFF",
                  size: 50,
                  __self: undefined,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26,
                    columnNumber: 11,
                  },
                }
              )
            )
          )
        );
      };

      /* harmony default export */ __webpack_exports__["default"] = Navigation;

      /***/
    },
});
//# sourceMappingURL=main.3859bd110918d12ee607.hot-update.js.map
