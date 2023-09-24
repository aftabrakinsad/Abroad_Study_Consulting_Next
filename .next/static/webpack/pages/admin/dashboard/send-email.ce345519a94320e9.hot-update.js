"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin/dashboard/send-email",{

/***/ "./pages/admin/dashboard/send-email.js":
/*!*********************************************!*\
  !*** ./pages/admin/dashboard/send-email.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EmailForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_component_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/pages/component/footer */ \"./pages/component/footer.js\");\n/* harmony import */ var _pages_component_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/pages/component/layout */ \"./pages/component/layout.js\");\n/* harmony import */ var _pages_api_sessioncheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/pages/api/sessioncheck */ \"./pages/api/sessioncheck.js\");\n/* harmony import */ var _pages_component_admindrawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/pages/component/admindrawer */ \"./pages/component/admindrawer.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction EmailForm() {\n    _s();\n    const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        subject: \"\",\n        text: \"\"\n    });\n    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        subject: \"\",\n        text: \"\"\n    });\n    const [successMessage, setSuccessMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleInputChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData((prevData)=>({\n                ...prevData,\n                [name]: value\n            }));\n    };\n    const handleFormSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"http://localhost:3001/admin/send-email\", formData);\n            setSuccessMessage(\"Email sent successfully\");\n            setErrorMessage(\"\");\n        } catch (error) {\n            setSuccessMessage(\"\");\n            setErrorMessage(\"Failed to send email\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_api_sessioncheck__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_Next/pages/admin/dashboard/send-email.js\",\n                lineNumber: 50,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_component_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: \"Send Email\"\n            }, void 0, false, {\n                fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_Next/pages/admin/dashboard/send-email.js\",\n                lineNumber: 51,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_component_admindrawer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_Next/pages/admin/dashboard/send-email.js\",\n                lineNumber: 52,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pt-9 sm:ml-64\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"bg-gray-50 dark:bg-gray-900\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col items-center justify-center px-auto mx-auto md:h-screen lg:py-0\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"pt-10 space-y-4 md:space-y-6 sm:p-8\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_Next/pages/admin/dashboard/send-email.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white\",\n                                    children: \"Email Form\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_Next/pages/admin/dashboard/send-email.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    id: \"filled_success_help\",\n                                    class: \"mt-2 text-xs text-green-600 dark:text-green-400\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        class: \"font-medium\",\n                                        children: [\n                                            \" \",\n                                            success,\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_Next/pages/admin/dashboard/send-email.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_Next/pages/admin/dashboard/send-email.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                    onSubmit: handleFormSubmit,\n                                    className: \"space-y-4 md:space-y-6\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"input-group\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    htmlFor: \"email\",\n                                                    className: \"block mb-2 text-sm font-medium text-gray-900 dark:text-white\",\n                                                    children: \"Recipient's Email:\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_Next/pages/admin/dashboard/send-email.js\",\n                                                    lineNumber: 64,\n                                                    columnNumber: 11\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"email\",\n                                                    id: \"email\",\n                                                    name: \"email\",\n                                                    value: formData.email,\n                                                    onChange: handleInputChange,\n                                                    required: true,\n                                                    className: \"\".concat(errors.email ? \"border-red-500\" : \"border-gray-300\", \" bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500\")\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_Next/pages/admin/dashboard/send-email.js\",\n                                                    lineNumber: 65,\n                                                    columnNumber: 11\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_Next/pages/admin/dashboard/send-email.js\",\n                                            lineNumber: 63,\n                                            columnNumber: 9\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    htmlFor: \"subject\",\n                                                    className: \"block mb-2 text-sm font-medium text-gray-900 dark:text-white\",\n                                                    children: \"Subject:\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_Next/pages/admin/dashboard/send-email.js\",\n                                                    lineNumber: 78,\n                                                    columnNumber: 11\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"text\",\n                                                    id: \"subject\",\n                                                    name: \"subject\",\n                                                    value: formData.subject,\n                                                    onChange: handleInputChange,\n                                                    className: \"\".concat(errors.subject ? \"border-red-500\" : \"border-gray-300\", \" bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500\")\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_Next/pages/admin/dashboard/send-email.js\",\n                                                    lineNumber: 79,\n                                                    columnNumber: 11\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_Next/pages/admin/dashboard/send-email.js\",\n                                            lineNumber: 77,\n                                            columnNumber: 9\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    htmlFor: \"text\",\n                                                    className: \"block mb-2 text-sm font-medium text-gray-900 dark:text-white\",\n                                                    children: \"Message:\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_Next/pages/admin/dashboard/send-email.js\",\n                                                    lineNumber: 91,\n                                                    columnNumber: 11\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                                    id: \"text\",\n                                                    name: \"text\",\n                                                    value: formData.text,\n                                                    onChange: handleInputChange,\n                                                    className: \"\".concat(errors.text ? \"border-red-500\" : \"border-gray-300\", \" bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500\")\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_Next/pages/admin/dashboard/send-email.js\",\n                                                    lineNumber: 92,\n                                                    columnNumber: 11\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_Next/pages/admin/dashboard/send-email.js\",\n                                            lineNumber: 90,\n                                            columnNumber: 9\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"submit\",\n                                            class: \"text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full bg-blue-500 text-white rounded py-2 hover:bg-blue-600 transition duration-300\",\n                                            children: \"Send Email\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_Next/pages/admin/dashboard/send-email.js\",\n                                            lineNumber: 102,\n                                            columnNumber: 9\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_Next/pages/admin/dashboard/send-email.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 7\n                                }, this),\n                                successMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: successMessage\n                                }, void 0, false, {\n                                    fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_Next/pages/admin/dashboard/send-email.js\",\n                                    lineNumber: 104,\n                                    columnNumber: 26\n                                }, this),\n                                errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: errorMessage\n                                }, void 0, false, {\n                                    fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_Next/pages/admin/dashboard/send-email.js\",\n                                    lineNumber: 105,\n                                    columnNumber: 24\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_Next/pages/admin/dashboard/send-email.js\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_Next/pages/admin/dashboard/send-email.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_Next/pages/admin/dashboard/send-email.js\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/rakinsadaftab/Library/CloudStorage/OneDrive-AmericanInternationalUniversity-Bangladesh/11th Semester/CSC4261 Advanced Programming in Web Technologies/Abroad_Study_Consulting_Next/pages/admin/dashboard/send-email.js\",\n                lineNumber: 53,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(EmailForm, \"OJtsPbxNGC9HNpzNDgCTi6A04ec=\");\n_c = EmailForm;\nvar _c;\n$RefreshReg$(_c, \"EmailForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZG1pbi9kYXNoYm9hcmQvc2VuZC1lbWFpbC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEM7QUFDakI7QUFDTztBQUNjO0FBQ0U7QUFDSTtBQUNJO0FBRXpDLFNBQVNPOztJQUVwQixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDUSxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDO1FBQ3ZDVSxPQUFPO1FBQ1BDLFNBQVM7UUFDVEMsTUFBTTtJQUNSO0lBRUEsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdkLCtDQUFRQSxDQUFDO1FBQ25DVSxPQUFPO1FBQ1BDLFNBQVM7UUFDVEMsTUFBTTtJQUNSO0lBRUEsTUFBTSxDQUFDRyxnQkFBZ0JDLGtCQUFrQixHQUFHaEIsK0NBQVFBLENBQUM7SUFDckQsTUFBTSxDQUFDaUIsY0FBY0MsZ0JBQWdCLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUVqRCxNQUFNbUIsb0JBQW9CLENBQUNDO1FBQ3pCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0YsRUFBRUcsTUFBTTtRQUNoQ2QsWUFBWSxDQUFDZSxXQUFjO2dCQUN6QixHQUFHQSxRQUFRO2dCQUNYLENBQUNILEtBQUssRUFBRUM7WUFDVjtJQUNGO0lBRUEsTUFBTUcsbUJBQW1CLE9BQU9MO1FBQzlCQSxFQUFFTSxjQUFjO1FBRWhCLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU01QixrREFBVSxDQUFDLDBDQUEwQ1M7WUFDNUVRLGtCQUFrQjtZQUNsQkUsZ0JBQWdCO1FBQ2xCLEVBQUUsT0FBT1csT0FBTztZQUNkYixrQkFBa0I7WUFDbEJFLGdCQUFnQjtRQUNsQjtJQUNGO0lBRUEscUJBQ0U7OzBCQUNBLDhEQUFDZiwrREFBWUE7Ozs7OzBCQUNiLDhEQUFDRCwrREFBUUE7Z0JBQUM0QixPQUFNOzs7Ozs7MEJBQ2hCLDhEQUFDMUIsb0VBQVdBOzs7OzswQkFDWiw4REFBQzJCO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDQztvQkFBUUQsV0FBVTs4QkFDbkIsNEVBQUNEO3dCQUFJQyxXQUFVO2tDQUNYLDRFQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNEO29DQUFJQyxXQUFVOzs7Ozs7OENBQ3ZCLDhEQUFDRTtvQ0FBR0YsV0FBVTs4Q0FBdUc7Ozs7Ozs4Q0FDckgsOERBQUNHO29DQUFFQyxJQUFHO29DQUFzQkMsT0FBTTs4Q0FDdEIsNEVBQUNDO3dDQUFLRCxPQUFNOzs0Q0FBYzs0Q0FBRS9COzRDQUFROzs7Ozs7Ozs7Ozs7OENBRWhELDhEQUFDaUM7b0NBQUtDLFVBQVVmO29DQUFrQk8sV0FBVTs7c0RBQzFDLDhEQUFDRDs0Q0FBSUMsV0FBVTs7OERBQ2IsOERBQUNTO29EQUFNQyxTQUFRO29EQUFRVixXQUFVOzhEQUErRDs7Ozs7OzhEQUNoRyw4REFBQ1c7b0RBQ0NDLE1BQUs7b0RBQ0xSLElBQUc7b0RBQ0hmLE1BQUs7b0RBQ0xDLE9BQU9kLFNBQVNFLEtBQUs7b0RBQ3JCbUMsVUFBVTFCO29EQUNWMkIsUUFBUTtvREFDUmQsV0FBVyxHQUVBLE9BRENuQixPQUFPSCxLQUFLLEdBQUcsbUJBQW1CLG1CQUNuQzs7Ozs7Ozs7Ozs7O3NEQUdmLDhEQUFDcUI7OzhEQUNDLDhEQUFDVTtvREFBTUMsU0FBUTtvREFBVVYsV0FBVTs4REFBK0Q7Ozs7Ozs4REFDbEcsOERBQUNXO29EQUNDQyxNQUFLO29EQUNMUixJQUFHO29EQUNIZixNQUFLO29EQUNMQyxPQUFPZCxTQUFTRyxPQUFPO29EQUN2QmtDLFVBQVUxQjtvREFDVmEsV0FBVyxHQUVBLE9BRENuQixPQUFPRixPQUFPLEdBQUcsbUJBQW1CLG1CQUNyQzs7Ozs7Ozs7Ozs7O3NEQUdmLDhEQUFDb0I7OzhEQUNDLDhEQUFDVTtvREFBTUMsU0FBUTtvREFBT1YsV0FBVTs4REFBK0Q7Ozs7Ozs4REFDL0YsOERBQUNlO29EQUNDWCxJQUFHO29EQUNIZixNQUFLO29EQUNMQyxPQUFPZCxTQUFTSSxJQUFJO29EQUNwQmlDLFVBQVUxQjtvREFDVmEsV0FBVyxHQUVBLE9BRENuQixPQUFPRCxJQUFJLEdBQUcsbUJBQW1CLG1CQUNsQzs7Ozs7Ozs7Ozs7O3NEQUdmLDhEQUFDb0M7NENBQU9KLE1BQUs7NENBQVNQLE9BQU07c0RBQWdVOzs7Ozs7Ozs7Ozs7Z0NBRTdWdEIsZ0NBQWtCLDhEQUFDb0I7OENBQUdwQjs7Ozs7O2dDQUN0QkUsOEJBQWdCLDhEQUFDa0I7OENBQUdsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPM0I7R0F2R3dCWjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hZG1pbi9kYXNoYm9hcmQvc2VuZC1lbWFpbC5qcz9kNzdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgRm9vdGVyIGZyb20gJ0AvcGFnZXMvY29tcG9uZW50L2Zvb3Rlcic7XG5pbXBvcnQgTXlMYXlvdXQgZnJvbSBcIkAvcGFnZXMvY29tcG9uZW50L2xheW91dFwiO1xuaW1wb3J0IFNlc3Npb25DaGVjayBmcm9tIFwiQC9wYWdlcy9hcGkvc2Vzc2lvbmNoZWNrXCI7XG5pbXBvcnQgQWRtaW5EcmF3ZXIgZnJvbSBcIkAvcGFnZXMvY29tcG9uZW50L2FkbWluZHJhd2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVtYWlsRm9ybSgpIHtcblxuICAgIGNvbnN0IFtzdWNjZXNzLCBzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcbiAgICBlbWFpbDogJycsXG4gICAgc3ViamVjdDogJycsXG4gICAgdGV4dDogJycsXG4gIH0pO1xuXG4gIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZSh7XG4gICAgZW1haWw6ICcnLFxuICAgIHN1YmplY3Q6ICcnLFxuICAgIHRleHQ6ICcnLFxuICB9KTtcblxuICBjb25zdCBbc3VjY2Vzc01lc3NhZ2UsIHNldFN1Y2Nlc3NNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgc2V0Rm9ybURhdGEoKHByZXZEYXRhKSA9PiAoe1xuICAgICAgLi4ucHJldkRhdGEsXG4gICAgICBbbmFtZV06IHZhbHVlLFxuICAgIH0pKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYWRtaW4vc2VuZC1lbWFpbCcsIGZvcm1EYXRhKTtcbiAgICAgIHNldFN1Y2Nlc3NNZXNzYWdlKCdFbWFpbCBzZW50IHN1Y2Nlc3NmdWxseScpO1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKCcnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgc2V0U3VjY2Vzc01lc3NhZ2UoJycpO1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKCdGYWlsZWQgdG8gc2VuZCBlbWFpbCcpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPFNlc3Npb25DaGVjayAvPlxuICAgIDxNeUxheW91dCB0aXRsZT1cIlNlbmQgRW1haWxcIiAvPlxuICAgIDxBZG1pbkRyYXdlciAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtOSBzbTptbC02NFwiPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIGRhcms6YmctZ3JheS05MDBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC1hdXRvIG14LWF1dG8gbWQ6aC1zY3JlZW4gbGc6cHktMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3cgZGFyazpib3JkZXIgbWQ6bXQtMCBzbTptYXgtdy1tZCB4bDpwLTAgZGFyazpiZy1ncmF5LTgwMCBkYXJrOmJvcmRlci1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTEwIHNwYWNlLXktNCBtZDpzcGFjZS15LTYgc206cC04XCI+PC9kaXY+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bCB0ZXh0LWNlbnRlciBmb250LWJvbGQgbGVhZGluZy10aWdodCB0cmFja2luZy10aWdodCB0ZXh0LWdyYXktOTAwIG1kOnRleHQtMnhsIGRhcms6dGV4dC13aGl0ZVwiPkVtYWlsIEZvcm08L2gxPlxuICAgICAgPHAgaWQ9XCJmaWxsZWRfc3VjY2Vzc19oZWxwXCIgY2xhc3M9XCJtdC0yIHRleHQteHMgdGV4dC1ncmVlbi02MDAgZGFyazp0ZXh0LWdyZWVuLTQwMFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmb250LW1lZGl1bVwiPiB7c3VjY2Vzc30gPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVGb3JtU3VibWl0fSBjbGFzc05hbWU9XCJzcGFjZS15LTQgbWQ6c3BhY2UteS02XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPSdibG9jayBtYi0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGUnPlJlY2lwaWVudCdzIEVtYWlsOjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMuZW1haWwgPyAnYm9yZGVyLXJlZC01MDAnIDogJ2JvcmRlci1ncmF5LTMwMCdcbiAgICAgICAgICAgICAgICAgICAgICB9IGJnLWdyYXktNTAgYm9yZGVyIHRleHQtZ3JheS05MDAgc206dGV4dC1zbSByb3VuZGVkLWxnIGZvY3VzOnJpbmctcHJpbWFyeS02MDAgZm9jdXM6Ym9yZGVyLXByaW1hcnktNjAwIGJsb2NrIHctZnVsbCBwLTIuNSBkYXJrOmJnLWdyYXktNzAwIGRhcms6Ym9yZGVyLWdyYXktNjAwIGRhcms6cGxhY2Vob2xkZXItZ3JheS00MDAgZGFyazp0ZXh0LXdoaXRlIGRhcms6Zm9jdXM6cmluZy1ibHVlLTUwMCBkYXJrOmZvY3VzOmJvcmRlci1ibHVlLTUwMGB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzdWJqZWN0XCIgY2xhc3NOYW1lPVwiYmxvY2sgbWItMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlXCI+U3ViamVjdDo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgaWQ9XCJzdWJqZWN0XCJcbiAgICAgICAgICAgIG5hbWU9XCJzdWJqZWN0XCJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5zdWJqZWN0fVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5zdWJqZWN0ID8gJ2JvcmRlci1yZWQtNTAwJyA6ICdib3JkZXItZ3JheS0zMDAnXG4gICAgICAgICAgICAgICAgICAgICAgfSBiZy1ncmF5LTUwIGJvcmRlciB0ZXh0LWdyYXktOTAwIHNtOnRleHQtc20gcm91bmRlZC1sZyBmb2N1czpyaW5nLXByaW1hcnktNjAwIGZvY3VzOmJvcmRlci1wcmltYXJ5LTYwMCBibG9jayB3LWZ1bGwgcC0yLjUgZGFyazpiZy1ncmF5LTcwMCBkYXJrOmJvcmRlci1ncmF5LTYwMCBkYXJrOnBsYWNlaG9sZGVyLWdyYXktNDAwIGRhcms6dGV4dC13aGl0ZSBkYXJrOmZvY3VzOnJpbmctYmx1ZS01MDAgZGFyazpmb2N1czpib3JkZXItYmx1ZS01MDBgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGV4dFwiIGNsYXNzTmFtZT1cImJsb2NrIG1iLTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZVwiPk1lc3NhZ2U6PC9sYWJlbD5cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIGlkPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPVwidGV4dFwiXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEudGV4dH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMudGV4dCA/ICdib3JkZXItcmVkLTUwMCcgOiAnYm9yZGVyLWdyYXktMzAwJ1xuICAgICAgICAgICAgICAgICAgICAgIH0gYmctZ3JheS01MCBib3JkZXIgdGV4dC1ncmF5LTkwMCBzbTp0ZXh0LXNtIHJvdW5kZWQtbGcgZm9jdXM6cmluZy1wcmltYXJ5LTYwMCBmb2N1czpib3JkZXItcHJpbWFyeS02MDAgYmxvY2sgdy1mdWxsIHAtMi41IGRhcms6YmctZ3JheS03MDAgZGFyazpib3JkZXItZ3JheS02MDAgZGFyazpwbGFjZWhvbGRlci1ncmF5LTQwMCBkYXJrOnRleHQtd2hpdGUgZGFyazpmb2N1czpyaW5nLWJsdWUtNTAwIGRhcms6Zm9jdXM6Ym9yZGVyLWJsdWUtNTAwYH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJ0ZXh0LXdoaXRlIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ibHVlLTUwMCB2aWEtYmx1ZS02MDAgdG8tYmx1ZS03MDAgaG92ZXI6YmctZ3JhZGllbnQtdG8tYnIgZm9jdXM6cmluZy00IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWJsdWUtMzAwIGRhcms6Zm9jdXM6cmluZy1ibHVlLTgwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gcHgtNSBweS0yLjUgdGV4dC1jZW50ZXIgbXItMiBtYi0yIHctZnVsbCBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQgcHktMiBob3ZlcjpiZy1ibHVlLTYwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMFwiPlNlbmQgRW1haWw8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIHtzdWNjZXNzTWVzc2FnZSAmJiA8cD57c3VjY2Vzc01lc3NhZ2V9PC9wPn1cbiAgICAgIHtlcnJvck1lc3NhZ2UgJiYgPHA+e2Vycm9yTWVzc2FnZX08L3A+fVxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VGb3JtIiwiYXhpb3MiLCJ1c2VTdGF0ZSIsIkZvb3RlciIsIk15TGF5b3V0IiwiU2Vzc2lvbkNoZWNrIiwiQWRtaW5EcmF3ZXIiLCJFbWFpbEZvcm0iLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJlbWFpbCIsInN1YmplY3QiLCJ0ZXh0IiwiZXJyb3JzIiwic2V0RXJyb3JzIiwic3VjY2Vzc01lc3NhZ2UiLCJzZXRTdWNjZXNzTWVzc2FnZSIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsInByZXZEYXRhIiwiaGFuZGxlRm9ybVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJwb3N0IiwiZXJyb3IiLCJ0aXRsZSIsImRpdiIsImNsYXNzTmFtZSIsInNlY3Rpb24iLCJoMSIsInAiLCJpZCIsImNsYXNzIiwic3BhbiIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJ0ZXh0YXJlYSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/admin/dashboard/send-email.js\n"));

/***/ })

});