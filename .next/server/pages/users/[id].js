module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/users/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/users/[id].js":
/*!*****************************!*\
  !*** ./pages/users/[id].js ***!
  \*****************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/felipecorredor/Documents/react-udemy/next-project/pages/users/[id].js\";\n\n\nconst User = ({\n  user\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"row\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"col-md-6 offset-md-3\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"card\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"card-body text-center\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n            children: user.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 9,\n            columnNumber: 13\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: [\"Email: \", user.email, \" \"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 10,\n            columnNumber: 13\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 8,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, undefined);\n};\n\nasync function getStaticPaths() {\n  const res = await fetch('https://jsonplaceholder.typicode.com/users');\n  const users = await res.json();\n  const paths = users.map(user => ({\n    params: {\n      id: user.id.toString()\n    }\n  }));\n  return {\n    paths,\n    fallback: false\n  };\n}\nasync function getStaticProps({\n  params\n}) {\n  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);\n  const user = await res.json();\n  return {\n    props: {\n      user\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy91c2Vycy8uanM/MmNlYiJdLCJuYW1lcyI6WyJVc2VyIiwidXNlciIsIm5hbWUiLCJlbWFpbCIsImdldFN0YXRpY1BhdGhzIiwicmVzIiwiZmV0Y2giLCJ1c2VycyIsImpzb24iLCJwYXRocyIsIm1hcCIsInBhcmFtcyIsImlkIiwidG9TdHJpbmciLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLElBQUksR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFjO0FBQ3pCLHNCQUNFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxzQkFBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLHVCQUFmO0FBQUEsa0NBQ0U7QUFBQSxzQkFBS0EsSUFBSSxDQUFDQztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFFRTtBQUFBLGtDQUFXRCxJQUFJLENBQUNFLEtBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVlELENBYkQ7O0FBZU8sZUFBZUMsY0FBZixHQUFnQztBQUNyQyxRQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLDRDQUFELENBQXZCO0FBQ0EsUUFBTUMsS0FBSyxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csSUFBSixFQUFwQjtBQUVBLFFBQU1DLEtBQUssR0FBR0YsS0FBSyxDQUFDRyxHQUFOLENBQVdULElBQUQsS0FBVztBQUNqQ1UsVUFBTSxFQUFFO0FBQUVDLFFBQUUsRUFBRVgsSUFBSSxDQUFDVyxFQUFMLENBQVFDLFFBQVI7QUFBTjtBQUR5QixHQUFYLENBQVYsQ0FBZDtBQUlBLFNBQU87QUFBRUosU0FBRjtBQUFTSyxZQUFRLEVBQUU7QUFBbkIsR0FBUDtBQUNEO0FBR00sZUFBZUMsY0FBZixDQUE4QjtBQUFFSjtBQUFGLENBQTlCLEVBQTBDO0FBQy9DLFFBQU1OLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUUsOENBQTZDSyxNQUFNLENBQUNDLEVBQUcsRUFBekQsQ0FBdkI7QUFDQSxRQUFNWCxJQUFJLEdBQUcsTUFBTUksR0FBRyxDQUFDRyxJQUFKLEVBQW5CO0FBRUEsU0FBTztBQUFFUSxTQUFLLEVBQUU7QUFBRWY7QUFBRjtBQUFULEdBQVA7QUFDRDtBQUVjRCxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3VzZXJzL1tpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IFVzZXIgPSAoeyB1c2VyIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBvZmZzZXQtbWQtM1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGgzPnt1c2VyLm5hbWV9PC9oMz5cbiAgICAgICAgICAgIDxwPkVtYWlsOiB7dXNlci5lbWFpbH0gPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2VycycpXG4gIGNvbnN0IHVzZXJzID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gIGNvbnN0IHBhdGhzID0gdXNlcnMubWFwKCh1c2VyKSA9PiAoe1xuICAgIHBhcmFtczogeyBpZDogdXNlci5pZC50b1N0cmluZygpIH0sXG4gIH0pKVxuXG4gIHJldHVybiB7IHBhdGhzLCBmYWxsYmFjazogZmFsc2UgfVxufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMvJHtwYXJhbXMuaWR9YClcbiAgY29uc3QgdXNlciA9IGF3YWl0IHJlcy5qc29uKClcblxuICByZXR1cm4geyBwcm9wczogeyB1c2VyIH0gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/users/[id].js\n");

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