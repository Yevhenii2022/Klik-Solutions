/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/main.js */ \"./src/js/main.js\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n\n\n\n//# sourceURL=webpack://webpack_theme/./src/index.js?");

/***/ }),

/***/ "./src/js/libraries/add-alt-title.js":
/*!*******************************************!*\
  !*** ./src/js/libraries/add-alt-title.js ***!
  \*******************************************/
/***/ (() => {

eval("jQuery(\"img:not([title])\").each(function () {\n  if (jQuery(this).attr(\"alt\") !== \"\")\n    jQuery(this).attr(\"title\", jQuery(this).attr(\"alt\"));\n});\n\njQuery(\"img:not([alt])\").each(function () {\n  if (jQuery(this).attr(\"title\") !== \"\")\n    jQuery(this).attr(\"alt\", jQuery(this).attr(\"title\"));\n});\n\n\n//# sourceURL=webpack://webpack_theme/./src/js/libraries/add-alt-title.js?");

/***/ }),

/***/ "./src/js/libraries/animation-on-scroll.js":
/*!*************************************************!*\
  !*** ./src/js/libraries/animation-on-scroll.js ***!
  \*************************************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', function () {\r\n\tconst animItems = document.querySelectorAll('._anim-items');\r\n\r\n\tif (animItems.length > 0) {\r\n\t\twindow.addEventListener('scroll', animOnScroll, { passive: true });\r\n\r\n\t\tfunction animOnScroll() {\r\n\t\t\tfor (let index = 0; index < animItems.length; index++) {\r\n\t\t\t\tconst animItem = animItems[index];\r\n\t\t\t\tconst animItemHeight = animItem.offsetHeight;\r\n\t\t\t\tconst animItemOffset = offset(animItem).top;\r\n\t\t\t\tconst animStart = 10;\r\n\t\t\t\tlet animItemPoint = window.innerHeight + animItemHeight / animStart;\r\n\t\t\t\tif (animItemHeight < window.innerHeight) {\r\n\t\t\t\t\tanimItemPoint = window.innerHeight - window.innerHeight / animStart;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (scrollY > animItemOffset - animItemPoint && scrollY < animItemOffset + animItemHeight) {\r\n\t\t\t\t\tanimItem.classList.add('_active');\r\n\t\t\t\t} else {\r\n\t\t\t\t\tanimItem.classList.remove('_active');\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tfunction offset(el) {\r\n\t\t\tconst rect = el.getBoundingClientRect(),\r\n\t\t\t\tscrollLeft = window.pageXOffset || document.documentElement.scrollLeft,\r\n\t\t\t\tscrollTop = window.pageYOffset || document.documentElement.scrollTop;\r\n\t\t\treturn {\r\n\t\t\t\ttop: rect.top + scrollTop,\r\n\t\t\t\tleft: rect.left + scrollLeft,\r\n\t\t\t};\r\n\t\t}\r\n\r\n\t\tsetTimeout(() => {\r\n\t\t\tanimOnScroll();\r\n\t\t}, 300);\r\n\t}\r\n\r\n\tconst animCar = document.querySelectorAll('._anim-items-driver');\r\n\r\n\tif (animCar.length > 0) {\r\n\t\twindow.addEventListener('scroll', animOnScrollCar, { passive: true });\r\n\r\n\t\tfunction animOnScrollCar() {\r\n\t\t\tfor (let index = 0; index < animCar.length; index++) {\r\n\t\t\t\tconst animItem = animCar[index];\r\n\t\t\t\tconst animItemHeight = animItem.offsetHeight;\r\n\t\t\t\tconst animItemOffset = offsetCar(animItem).top;\r\n\t\t\t\tconst animStart = 10;\r\n\r\n\t\t\t\tlet animItemPoint = window.innerHeight - animItemHeight * animStart;\r\n\t\t\t\tif (animItemHeight > window.innerHeight) {\r\n\t\t\t\t\tanimItemPoint = window.innerHeight + window.innerHeight * animStart;\r\n\t\t\t\t} else if (animItemHeight < window.innerHeight) {\r\n\t\t\t\t\tanimItemPoint = window.innerHeight + window.innerHeight * animStart;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (scrollY > animItemOffset - animItemPoint && scrollY < animItemOffset + animItemHeight) {\r\n\t\t\t\t\tanimItem.classList.add('_active');\r\n\t\t\t\t} else {\r\n\t\t\t\t\tanimItem.classList.remove('_active');\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tfunction offsetCar(el) {\r\n\t\t\tconst rect = el.getBoundingClientRect(),\r\n\t\t\t\tscrollLeft = window.pageXOffset || document.documentElement.scrollLeft,\r\n\t\t\t\tscrollTop = window.pageYOffset || document.documentElement.scrollTop;\r\n\t\t\treturn {\r\n\t\t\t\ttop: rect.top + scrollTop,\r\n\t\t\t\tleft: rect.left + scrollLeft,\r\n\t\t\t};\r\n\t\t}\r\n\r\n\t\tsetTimeout(() => {\r\n\t\t\tanimOnScrollCar();\r\n\t\t}, 300);\r\n\t}\r\n});\r\n\n\n//# sourceURL=webpack://webpack_theme/./src/js/libraries/animation-on-scroll.js?");

/***/ }),

/***/ "./src/js/libraries/libraries.js":
/*!***************************************!*\
  !*** ./src/js/libraries/libraries.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _add_alt_title__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-alt-title */ \"./src/js/libraries/add-alt-title.js\");\n/* harmony import */ var _add_alt_title__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_add_alt_title__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _phone_mask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phone-mask */ \"./src/js/libraries/phone-mask.js\");\n/* harmony import */ var _phone_mask__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_phone_mask__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _animation_on_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animation-on-scroll */ \"./src/js/libraries/animation-on-scroll.js\");\n/* harmony import */ var _animation_on_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_animation_on_scroll__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack_theme/./src/js/libraries/libraries.js?");

/***/ }),

/***/ "./src/js/libraries/phone-mask.js":
/*!****************************************!*\
  !*** ./src/js/libraries/phone-mask.js ***!
  \****************************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  var phoneInputs = document.querySelectorAll('input[type=\"tel\"]');\n\n  if (phoneInputs) {\n    phoneInputs.forEach(function (phoneInput) {\n      var phoneMask = IMask(phoneInput, {\n        mask: \"+38(000)000-00-00\",\n      });\n    });\n  }\n});\n\n\n//# sourceURL=webpack://webpack_theme/./src/js/libraries/phone-mask.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _parts_parts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts/parts */ \"./src/js/parts/parts.js\");\n/* harmony import */ var _parts_parts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_parts_parts__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libraries_libraries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libraries/libraries */ \"./src/js/libraries/libraries.js\");\n/* harmony import */ var _parts_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/slider */ \"./src/js/parts/slider.js\");\n/* harmony import */ var _parts_slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_parts_slider__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack_theme/./src/js/main.js?");

/***/ }),

/***/ "./src/js/parts/parts.js":
/*!*******************************!*\
  !*** ./src/js/parts/parts.js ***!
  \*******************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://webpack_theme/./src/js/parts/parts.js?");

/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\r\n    const swiper = new Swiper(\".swiper__swiper\", {\r\n        loop: true,\r\n        effect: \"fade\",\r\n\r\n        // If we need pagination\r\n        pagination: {\r\n            el: \".swiper__pagination\",\r\n            clickable: true,\r\n        },\r\n\r\n        // Navigation arrows\r\n        navigation: {\r\n            nextEl: \".swiper__nav--next\",\r\n            prevEl: \".swiper__nav--prev\",\r\n        },\r\n    });\r\n});\n\n//# sourceURL=webpack://webpack_theme/./src/js/parts/slider.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack_theme/./src/scss/main.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;