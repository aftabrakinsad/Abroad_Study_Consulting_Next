"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/auth/registration",{

/***/ "./pages/auth/registration.js":
/*!************************************!*\
  !*** ./pages/auth/registration.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _component_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/footer */ \"./pages/component/footer.js\");\n/* harmony import */ var _component_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/layout */ \"./pages/component/layout.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst RegistrationForm = ()=>{\n    _s();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [registrationSuccess, setRegistrationSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://localhost:3001/admin/signup\", {\n                username,\n                email,\n                password,\n                address\n            });\n            console.log(\"Registration response:\", response.data);\n            if (response.status === 200) {\n                alert(\"Registration successful\");\n            } else {\n                alert(\"Registration failed\");\n            }\n        // Handle success, perhaps redirect to a success page\n        } catch (error) {\n            console.error(\"Registration error:\", error);\n        // Handle error, display a message to the user, etc.\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: \"Registration\"\n            }, void 0, false, {\n                fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/auth/registration.js\",\n                lineNumber: 41,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center h-screen dark:bg-gray-800 dark:border-gray-700\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white p-8 rounded w-full max-w-md dark:bg-gray-800 dark:border-gray-100\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-2xl font-semibold mb-4 text-center text-white\",\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/auth/registration.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubmit,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            className: \"block text-white text-sm font-medium mb-1\",\n                                            children: \"Email\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/auth/registration.js\",\n                                            lineNumber: 47,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"email\",\n                                            className: \"w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300\",\n                                            placeholder: \"Enter your email\",\n                                            value: email,\n                                            onChange: (e)=>setEmail(e.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/auth/registration.js\",\n                                            lineNumber: 48,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/auth/registration.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            className: \"block text-white text-sm font-medium mb-1\",\n                                            children: \"Password\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/auth/registration.js\",\n                                            lineNumber: 57,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"password\",\n                                            className: \"w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300\",\n                                            placeholder: \"Enter your password\",\n                                            value: password,\n                                            onChange: (e)=>setPassword(e.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/auth/registration.js\",\n                                            lineNumber: 58,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/auth/registration.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            className: \"block text-white text-sm font-medium mb-1\",\n                                            children: \"Email\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/auth/registration.js\",\n                                            lineNumber: 67,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"email\",\n                                            className: \"w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300\",\n                                            placeholder: \"Enter your email\",\n                                            value: email,\n                                            onChange: (e)=>setEmail(e.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/auth/registration.js\",\n                                            lineNumber: 68,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/auth/registration.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: \"w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:ring focus:ring-blue-300\",\n                                    children: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/auth/registration.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/auth/registration.js\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, undefined),\n                        error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-red-500 mt-2\",\n                            children: error\n                        }, void 0, false, {\n                            fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/auth/registration.js\",\n                            lineNumber: 82,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/auth/registration.js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/auth/registration.js\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_FT_FE/pages/auth/registration.js\",\n                lineNumber: 85,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(RegistrationForm, \"la8AuM55M3+FW/CFrOFrISCqt+8=\");\n_c = RegistrationForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RegistrationForm);\nvar _c;\n$RefreshReg$(_c, \"RegistrationForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoL3JlZ2lzdHJhdGlvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXdDO0FBQ2Q7QUFDZTtBQUNFO0FBRTNDLE1BQU1LLG1CQUFtQjs7SUFDdkIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ08sT0FBT0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNTLFVBQVVDLFlBQVksR0FBR1YsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDVyxTQUFTQyxXQUFXLEdBQUdaLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ2EsT0FBT0MsU0FBUyxHQUFHZCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNlLHFCQUFxQkMsdUJBQXVCLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUUvRCxNQUFNaUIsZUFBZSxPQUFPQztRQUMxQkEsRUFBRUMsY0FBYztRQUNoQixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNbkIsa0RBQVUsQ0FBQyxzQ0FBc0M7Z0JBQ3RFSTtnQkFDQUU7Z0JBQ0FFO2dCQUNBRTtZQUNGO1lBRUFXLFFBQVFDLEdBQUcsQ0FBQywwQkFBMEJILFNBQVNJLElBQUk7WUFDbkQsSUFBR0osU0FBU0ssTUFBTSxLQUFLLEtBQUs7Z0JBQzFCQyxNQUFNO1lBQ1IsT0FFQTtnQkFDRUEsTUFBTTtZQUNSO1FBQ0EscURBQXFEO1FBQ3ZELEVBQUUsT0FBT2IsT0FBTztZQUNkUyxRQUFRVCxLQUFLLENBQUMsdUJBQXVCQTtRQUNyQyxvREFBb0Q7UUFDdEQ7SUFDRjtJQUVBLHFCQUNFOzswQkFDQSw4REFBQ1YseURBQVFBO2dCQUFDd0IsT0FBTTs7Ozs7OzBCQUNaLDhEQUFDQztnQkFBSUMsV0FBVTswQkFDZiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDQzs0QkFBR0QsV0FBVTtzQ0FBcUQ7Ozs7OztzQ0FDbkUsOERBQUNFOzRCQUFLQyxVQUFVZjs7OENBQ2QsOERBQUNXO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ0k7NENBQU1KLFdBQVU7c0RBQTRDOzs7Ozs7c0RBQzdELDhEQUFDSzs0Q0FDQ0MsTUFBSzs0Q0FDTE4sV0FBVTs0Q0FDVk8sYUFBWTs0Q0FDWkMsT0FBTzlCOzRDQUNQK0IsVUFBVSxDQUFDcEIsSUFBTVYsU0FBU1UsRUFBRXFCLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7Ozs7Ozs7OzhDQUc1Qyw4REFBQ1Q7b0NBQUlDLFdBQVU7O3NEQUNiLDhEQUFDSTs0Q0FBTUosV0FBVTtzREFBNEM7Ozs7OztzREFDN0QsOERBQUNLOzRDQUNDQyxNQUFLOzRDQUNMTixXQUFVOzRDQUNWTyxhQUFZOzRDQUNaQyxPQUFPNUI7NENBQ1A2QixVQUFVLENBQUNwQixJQUFNUixZQUFZUSxFQUFFcUIsTUFBTSxDQUFDRixLQUFLOzs7Ozs7Ozs7Ozs7OENBRy9DLDhEQUFDVDtvQ0FBSUMsV0FBVTs7c0RBQ2IsOERBQUNJOzRDQUFNSixXQUFVO3NEQUE0Qzs7Ozs7O3NEQUM3RCw4REFBQ0s7NENBQ0NDLE1BQUs7NENBQ0xOLFdBQVU7NENBQ1ZPLGFBQVk7NENBQ1pDLE9BQU85Qjs0Q0FDUCtCLFVBQVUsQ0FBQ3BCLElBQU1WLFNBQVNVLEVBQUVxQixNQUFNLENBQUNGLEtBQUs7Ozs7Ozs7Ozs7Ozs4Q0FHNUMsOERBQUNHO29DQUNDTCxNQUFLO29DQUNMTixXQUFVOzhDQUFtRzs7Ozs7Ozs7Ozs7O3dCQUloSGhCLHVCQUFTLDhEQUFDNEI7NEJBQUVaLFdBQVU7c0NBQXFCaEI7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUc5Qyw4REFBQ1gseURBQU1BOzs7Ozs7O0FBR2Y7R0FsRk1FO0tBQUFBO0FBbUZOLCtEQUFlQSxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9yZWdpc3RyYXRpb24uanM/ODY5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnQvZm9vdGVyJztcbmltcG9ydCBNeUxheW91dCBmcm9tICcuLi9jb21wb25lbnQvbGF5b3V0JztcblxuY29uc3QgUmVnaXN0cmF0aW9uRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3JlZ2lzdHJhdGlvblN1Y2Nlc3MsIHNldFJlZ2lzdHJhdGlvblN1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hZG1pbi9zaWdudXAnLCB7XG4gICAgICAgIHVzZXJuYW1lLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgIGFkZHJlc3MsXG4gICAgICB9KTtcblxuICAgICAgY29uc29sZS5sb2coJ1JlZ2lzdHJhdGlvbiByZXNwb25zZTonLCByZXNwb25zZS5kYXRhKTtcbiAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIGFsZXJ0KCdSZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCcpO1xuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAge1xuICAgICAgICBhbGVydCgnUmVnaXN0cmF0aW9uIGZhaWxlZCcpO1xuICAgICAgfVxuICAgICAgLy8gSGFuZGxlIHN1Y2Nlc3MsIHBlcmhhcHMgcmVkaXJlY3QgdG8gYSBzdWNjZXNzIHBhZ2VcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignUmVnaXN0cmF0aW9uIGVycm9yOicsIGVycm9yKTtcbiAgICAgIC8vIEhhbmRsZSBlcnJvciwgZGlzcGxheSBhIG1lc3NhZ2UgdG8gdGhlIHVzZXIsIGV0Yy5cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxNeUxheW91dCB0aXRsZT1cIlJlZ2lzdHJhdGlvblwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1zY3JlZW4gZGFyazpiZy1ncmF5LTgwMCBkYXJrOmJvcmRlci1ncmF5LTcwMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtOCByb3VuZGVkIHctZnVsbCBtYXgtdy1tZCBkYXJrOmJnLWdyYXktODAwIGRhcms6Ym9yZGVyLWdyYXktMTAwXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgbWItNCB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCI+TG9naW48L2gxPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXdoaXRlIHRleHQtc20gZm9udC1tZWRpdW0gbWItMVwiPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIGJvcmRlciByb3VuZGVkLWxnIGZvY3VzOnJpbmcgZm9jdXM6cmluZy1ibHVlLTMwMFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC13aGl0ZSB0ZXh0LXNtIGZvbnQtbWVkaXVtIG1iLTFcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMiBib3JkZXIgcm91bmRlZC1sZyBmb2N1czpyaW5nIGZvY3VzOnJpbmctYmx1ZS0zMDBcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtd2hpdGUgdGV4dC1zbSBmb250LW1lZGl1bSBtYi0xXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTIgYm9yZGVyIHJvdW5kZWQtbGcgZm9jdXM6cmluZyBmb2N1czpyaW5nLWJsdWUtMzAwXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZW1haWxcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcHktMiBweC00IHJvdW5kZWQgaG92ZXI6YmctYmx1ZS02MDAgZm9jdXM6cmluZyBmb2N1czpyaW5nLWJsdWUtMzAwXCI+XG4gICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAge2Vycm9yICYmIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCBtdC0yXCI+e2Vycm9yfTwvcD59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICAgIDxGb290ZXIvPlxuICAgIDwvPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdHJhdGlvbkZvcm07Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIkZvb3RlciIsIk15TGF5b3V0IiwiUmVnaXN0cmF0aW9uRm9ybSIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImFkZHJlc3MiLCJzZXRBZGRyZXNzIiwiZXJyb3IiLCJzZXRFcnJvciIsInJlZ2lzdHJhdGlvblN1Y2Nlc3MiLCJzZXRSZWdpc3RyYXRpb25TdWNjZXNzIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJzdGF0dXMiLCJhbGVydCIsInRpdGxlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImJ1dHRvbiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/auth/registration.js\n"));

/***/ })

});