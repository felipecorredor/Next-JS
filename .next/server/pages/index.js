module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ListUsers.js/index.js":
/*!******************************************!*\
  !*** ./components/ListUsers.js/index.js ***!
  \******************************************/
/*! exports provided: ListUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ListUsers\", function() { return ListUsers; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/felipecorredor/Documents/react-udemy/next-project/components/ListUsers.js/index.js\";\n\n\nconst ListUsers = ({\n  users\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: users.map(user => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"row\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        className: \"list-group col-md-4\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          className: \"list-group-item mb-2 hover\",\n          onClick: () => next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/users/[id]', `/users/${user.id}`),\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h5\", {\n            children: user.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 13,\n            columnNumber: 17\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: user.email\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 14,\n            columnNumber: 17\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 15\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 13\n      }, undefined)\n    }, user.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 11\n    }, undefined))\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, undefined);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xpc3RVc2Vycy5qcy9pbmRleC5qcz85ZWViIl0sIm5hbWVzIjpbIkxpc3RVc2VycyIsInVzZXJzIiwibWFwIiwidXNlciIsIlJvdXRlciIsInB1c2giLCJpZCIsIm5hbWUiLCJlbWFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxNQUFNQSxTQUFTLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBYztBQUNyQyxzQkFDRSxxRUFBQyw4Q0FBRDtBQUFBLGNBRUlBLEtBQUssQ0FBQ0MsR0FBTixDQUFXQyxJQUFELGlCQUNSO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSw2QkFDRTtBQUFJLGlCQUFTLEVBQUMscUJBQWQ7QUFBQSwrQkFDRTtBQUFJLG1CQUFTLEVBQUMsNEJBQWQ7QUFDSSxpQkFBTyxFQUFFLE1BQU1DLGtEQUFNLENBQUNDLElBQVAsQ0FBWSxhQUFaLEVBQTRCLFVBQVNGLElBQUksQ0FBQ0csRUFBRyxFQUE3QyxDQURuQjtBQUFBLGtDQUVFO0FBQUEsc0JBQUtILElBQUksQ0FBQ0k7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGLGVBR0U7QUFBQSxzQkFBSUosSUFBSSxDQUFDSztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLE9BQTBCTCxJQUFJLENBQUNHLEVBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFpQkQsQ0FsQk0iLCJmaWxlIjoiLi9jb21wb25lbnRzL0xpc3RVc2Vycy5qcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuZXhwb3J0IGNvbnN0IExpc3RVc2VycyA9ICh7IHVzZXJzfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIHtcbiAgICAgICAgdXNlcnMubWFwKCh1c2VyKSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBrZXk9e3VzZXIuaWR9PlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgY29sLW1kLTRcIj5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBtYi0yIGhvdmVyXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvdXNlcnMvW2lkXScsIGAvdXNlcnMvJHt1c2VyLmlkfWApfT5cbiAgICAgICAgICAgICAgICA8aDU+e3VzZXIubmFtZX08L2g1PlxuICAgICAgICAgICAgICAgIDxwPnt1c2VyLmVtYWlsfTwvcD5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpXG4gICAgICB9XG4gICAgPC9GcmFnbWVudD5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ListUsers.js/index.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ListUsers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ListUsers.js */ \"./components/ListUsers.js/index.js\");\n\nvar _jsxFileName = \"/Users/felipecorredor/Documents/react-udemy/next-project/pages/index.js\";\n\n\n\n\nconst Index = ({\n  users\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_ListUsers_js__WEBPACK_IMPORTED_MODULE_3__[\"ListUsers\"], {\n    users: users\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 10\n  }, undefined);\n};\n\nasync function getStaticProps() {\n  const res = await isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default()('https://jsonplaceholder.typicode.com/users');\n  const users = await res.json();\n\n  if (!users) {\n    return {\n      notFound: true\n    };\n  }\n\n  return {\n    props: {\n      users\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4IiwidXNlcnMiLCJnZXRTdGF0aWNQcm9wcyIsInJlcyIsImZldGNoIiwianNvbiIsIm5vdEZvdW5kIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLEtBQUssR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlO0FBQzNCLHNCQUFPLHFFQUFDLGtFQUFEO0FBQVcsU0FBSyxFQUFFQTtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxDQUZEOztBQUlPLGVBQWVDLGNBQWYsR0FBZ0M7QUFDckMsUUFBTUMsR0FBRyxHQUFHLE1BQU1DLHVEQUFLLENBQUMsNENBQUQsQ0FBdkI7QUFDQSxRQUFNSCxLQUFLLEdBQUcsTUFBTUUsR0FBRyxDQUFDRSxJQUFKLEVBQXBCOztBQUVBLE1BQUksQ0FBQ0osS0FBTCxFQUFZO0FBQ1YsV0FBTztBQUNMSyxjQUFRLEVBQUU7QUFETCxLQUFQO0FBR0Q7O0FBRUQsU0FBTztBQUNMQyxTQUFLLEVBQUU7QUFDTE47QUFESztBQURGLEdBQVA7QUFLRDtBQUVjRCxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCdcbmltcG9ydCB7IExpc3RVc2VycyB9IGZyb20gJy4uL2NvbXBvbmVudHMvTGlzdFVzZXJzLmpzJ1xuXG5jb25zdCBJbmRleCA9ICh7IHVzZXJzIH0pID0+IHtcbiAgcmV0dXJuIDxMaXN0VXNlcnMgdXNlcnM9e3VzZXJzfSAvPlxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMnKVxuICBjb25zdCB1c2VycyA9IGF3YWl0IHJlcy5qc29uKClcblxuICBpZiAoIXVzZXJzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vdEZvdW5kOiB0cnVlLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHVzZXJzLFxuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-fetch\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLWZldGNoXCI/NzNhOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJpc29tb3JwaGljLWZldGNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy1mZXRjaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///isomorphic-fetch\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });