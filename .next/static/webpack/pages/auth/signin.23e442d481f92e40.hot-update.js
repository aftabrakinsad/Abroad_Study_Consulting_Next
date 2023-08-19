"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/auth/signin",{

/***/ "./pages/component/session.js":
/*!************************************!*\
  !*** ./pages/component/session.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Session; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Session() {\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (true) {\n            const session = sessionStorage.getItem(\"email\");\n            if (session) {\n                setEmail(sessionStorage.getItem(\"email\"));\n            }\n        }\n    }, []);\n    const handleSignOut = async (event)=>{\n        event.preventDefault();\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:3001/admin/signout\");\n            console.log(response.data);\n            sessionStorage.removeItem(\"email\");\n            setEmail(null);\n            router.push(\"/signin\");\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: email !== null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex md:order-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"#\",\n                        className: \"pr-3 pt-2 font-medium text-blue-600 dark:text-blue-500 hover:underline\",\n                        children: email\n                    }, void 0, false, {\n                        fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/component/session.js\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800\",\n                        onClick: handleSignOut,\n                        children: \"Sign out\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/component/session.js\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/admin/dashboard\",\n                        className: \"text-white bg-gray-400 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800\",\n                        children: \"DashBoard\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/component/session.js\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/component/session.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this)\n        }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex md:order-2\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/auth/signin\",\n                className: \"text-white bg-gray-400 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800\",\n                children: \"Sign In\"\n            }, void 0, false, {\n                fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/component/session.js\",\n                lineNumber: 45,\n                columnNumber: 25\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/component/session.js\",\n            lineNumber: 44,\n            columnNumber: 21\n        }, this)()\n    }, void 0, false);\n}\n_s(Session, \"zjPq2cmFrlNCv3AXWRLS12+WcdA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Session;\nvar _c;\n$RefreshReg$(_c, \"Session\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnQvc2Vzc2lvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDZTtBQUNuQjtBQUNlO0FBRXpCLFNBQVNLOztJQUNwQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUM7SUFDbkMsTUFBTU8sU0FBU0osc0RBQVNBO0lBRXhCRixnREFBU0EsQ0FBQztRQUNOLElBQUksSUFBa0IsRUFDdEI7WUFDSSxNQUFNTyxVQUFVQyxlQUFlQyxPQUFPLENBQUM7WUFDdkMsSUFBSUYsU0FBUztnQkFDVEYsU0FBU0csZUFBZUMsT0FBTyxDQUFDO1lBQ3BDO1FBQ0o7SUFDSixHQUFHLEVBQUU7SUFFTCxNQUFNQyxnQkFBZ0IsT0FBT0M7UUFDekJBLE1BQU1DLGNBQWM7UUFDcEIsSUFBSTtZQUNBLE1BQU1DLFdBQVcsTUFBTVosaURBQVMsQ0FBQztZQUNqQ2MsUUFBUUMsR0FBRyxDQUFDSCxTQUFTSSxJQUFJO1lBQ3pCVCxlQUFlVSxVQUFVLENBQUM7WUFDMUJiLFNBQVM7WUFDVEMsT0FBT2EsSUFBSSxDQUFDO1FBQ2hCLEVBQUUsT0FBT0MsT0FBTztZQUNaTCxRQUFRSyxLQUFLLENBQUNBO1FBQ2xCO0lBQ0o7SUFDQSxxQkFDQTtrQkFDS2hCLFVBQVUscUJBQ1g7c0JBQ0ksNEVBQUNpQjtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNDO3dCQUFFQyxNQUFLO3dCQUFJRixXQUFVO2tDQUEwRWxCOzs7Ozs7a0NBQ2hHLDhEQUFDcUI7d0JBQVFILFdBQVU7d0JBQWtPSSxTQUFTaEI7a0NBQWU7Ozs7OztrQ0FFN1EsOERBQUNaLGtEQUFJQTt3QkFBQzBCLE1BQUs7d0JBQW1CRixXQUFVO2tDQUFrTzs7Ozs7Ozs7Ozs7OzRCQUcxUSxjQUNJLDhEQUFDRDtZQUFJQyxXQUFVO3NCQUNYLDRFQUFDeEIsa0RBQUlBO2dCQUFDMEIsTUFBSztnQkFBZUYsV0FBVTswQkFBa087Ozs7Ozs7Ozs7OztBQVE5UjtHQS9Dd0JuQjs7UUFFTEQsa0RBQVNBOzs7S0FGSkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50L3Nlc3Npb24uanM/MDYwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2Vzc2lvbigpIHtcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2VtYWlsJyk7XG4gICAgICAgICAgICBpZiAoc2Vzc2lvbikge1xuICAgICAgICAgICAgICAgIHNldEVtYWlsKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2VtYWlsJykpO1xuICAgICAgICAgICAgfSAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGhhbmRsZVNpZ25PdXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYWRtaW4vc2lnbm91dCcpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgnZW1haWwnKTtcbiAgICAgICAgICAgIHNldEVtYWlsKG51bGwpO1xuICAgICAgICAgICAgcm91dGVyLnB1c2goJy9zaWduaW4nKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgPD5cbiAgICAgICAge2VtYWlsICE9PSBudWxsID8gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1kOm9yZGVyLTJcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInByLTMgcHQtMiBmb250LW1lZGl1bSB0ZXh0LWJsdWUtNjAwIGRhcms6dGV4dC1ibHVlLTUwMCBob3Zlcjp1bmRlcmxpbmVcIj57ZW1haWx9PC9hPlxuICAgICAgICAgICAgICAgIDxidXR0b24gIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmctYmx1ZS03MDAgaG92ZXI6YmctYmx1ZS04MDAgZm9jdXM6cmluZy00IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWJsdWUtMzAwIGZvbnQtbWVkaXVtIHJvdW5kZWQtbGcgdGV4dC1zbSBweC00IHB5LTIgdGV4dC1jZW50ZXIgbXItMyBtZDptci0wIGRhcms6YmctYmx1ZS02MDAgZGFyazpob3ZlcjpiZy1ibHVlLTcwMCBkYXJrOmZvY3VzOnJpbmctYmx1ZS04MDBcIiBvbkNsaWNrPXtoYW5kbGVTaWduT3V0fT5TaWduIG91dDwvYnV0dG9uPlxuICAgICAgXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hZG1pbi9kYXNoYm9hcmRcIiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGJnLWdyYXktNDAwIGhvdmVyOmJnLWdyYXktODAwIGZvY3VzOnJpbmctNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1ibHVlLTMwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gcHgtNCBweS0yIHRleHQtY2VudGVyIG1yLTMgbWQ6bXItMCBkYXJrOmJnLWJsdWUtNjAwIGRhcms6aG92ZXI6YmctYmx1ZS03MDAgZGFyazpmb2N1czpyaW5nLWJsdWUtODAwXCI+RGFzaEJvYXJkPC9MaW5rPiAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWQ6b3JkZXItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRoL3NpZ25pblwiIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmctZ3JheS00MDAgaG92ZXI6YmctZ3JheS04MDAgZm9jdXM6cmluZy00IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWJsdWUtMzAwIGZvbnQtbWVkaXVtIHJvdW5kZWQtbGcgdGV4dC1zbSBweC00IHB5LTIgdGV4dC1jZW50ZXIgbXItMyBtZDptci0wIGRhcms6YmctYmx1ZS02MDAgZGFyazpob3ZlcjpiZy1ibHVlLTcwMCBkYXJrOmZvY3VzOnJpbmctYmx1ZS04MDBcIj5TaWduIEluPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTGluayIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJTZXNzaW9uIiwiZW1haWwiLCJzZXRFbWFpbCIsInJvdXRlciIsInNlc3Npb24iLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJoYW5kbGVTaWduT3V0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJyZW1vdmVJdGVtIiwicHVzaCIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiYSIsImhyZWYiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/component/session.js\n"));

/***/ })

});