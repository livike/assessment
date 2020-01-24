/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { createElement, numberToEnglish } = __webpack_require__(/*! ./util */ \"./util.js\");\r\n\r\nconst initApp = () => {\r\n  // Initializes the app, registers the button click listener\r\n  const newButton = document.querySelector('#btnConvertNumber');\r\n  newButton.addEventListener('click', convertNumber);\r\n};\r\n\r\nconst convertNumber = () => {\r\n  // Fetching the user input\r\n  const newNumberInput = document.querySelector('input#number');\r\n  const newNumberInputStr = newNumberInput.value.toString() + ' ==> ';\r\n  \r\n  const numbersList = document.querySelector('.numbers-list');\r\n  \r\n  // converts the number to english\r\n  const outputText = numberToEnglish(\r\n    newNumberInput.value\r\n  );\r\n\r\n  // creates a new HTML element based on it\r\n  const element = createElement('li',newNumberInputStr, outputText, 'number-item');\r\n\r\n  // inserts the element to the DOM\r\n  numbersList.insertBefore(element, numbersList.childNodes[0]);\r\n\r\n  // clear input value\r\n  newNumberInput.value = '';\r\n};\r\n\r\n// Start the application\r\ninitApp();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./util.js":
/*!*****************!*\
  !*** ./util.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.createElement = (type, original, text, className) => {\r\n  // Creates a new HTML element and returns it\r\n  const newElement = document.createElement(type);\r\n  newElement.classList.add(className);\r\n  newElement.textContent = original + text;\r\n  return newElement;\r\n};\r\n\r\nexports.numberToEnglish= (n)=> {\r\n\r\n  const string = n.toString();\r\n\r\n  /* Is number zero? */\r\n  if (parseInt(string) === 0) {\r\n      return 'zero';\r\n  }\r\n\r\n  // units\r\n  const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];\r\n  // tens\r\n  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];\r\n  // Scales\r\n  const scales = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quatttuor-decillion', 'quindecillion', 'sexdecillion', 'septen-decillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'centillion'];\r\n\r\n  /* Split user arguemnt into 3 digit chunks from right to left */\r\n  let start = string.length;\r\n  let chunks = [];\r\n\r\n  while (start > 0) {\r\n      const end = start;\r\n      chunks.push(string.slice((start = Math.max(0, start - 3)), end));\r\n  }\r\n\r\n  /* Check if the input number is too big */\r\n  const chunksLen = chunks.length;\r\n  \r\n  if (chunksLen > scales.length) {\r\n      return '';\r\n  }\r\n\r\n  /* Stringify each integer in each chunk */\r\n  const words = [];\r\n  let i, ints;\r\n  for (i = 0; i < chunksLen; i++) {\r\n\r\n      chunk = parseInt(chunks[i]);\r\n      let firstOfMultiple = chunksLen > 1 && i === 0;\r\n\r\n\r\n      if (chunk) {\r\n          /* Split chunk into array of individual integers */\r\n          ints = chunks[i].split('').reverse().map(parseFloat);\r\n\r\n          /* If tens integer is 1, i.e. 10, then add 10 to units integer */\r\n          if (ints[1] === 1) {\r\n              ints[0] += 10;\r\n          }\r\n          /* Add scale word if chunk is not zero and array item exists */\r\n          if ((word = scales[i])) {\r\n              words.push(word);\r\n          }\r\n          /* Add unit word if array item exists */\r\n          if ((word = units[ints[0]])) {\r\n              words.push(word);\r\n          }\r\n          /* Add tens word if array item exists */\r\n          if ((word = tens[ints[1]])) {\r\n              words.push(word);\r\n          }\r\n\r\n           /* Add 'and' string after units or tens integer if: */\r\n          if (ints[0] || ints[1]) {\r\n            /* Chunk has a hundreds integer or chunk is the first of multiple chunks */\r\n            if (ints[2] !== undefined && firstOfMultiple) {\r\n                words.push('and');\r\n            }\r\n          }\r\n          /* Add hundreds word if array item exists */\r\n          if ((word = units[ints[2]])) {\r\n              words.push(word + ' hundred');\r\n          }\r\n      }\r\n  }\r\n\r\n  return words.reverse().join(' ');\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./util.js?");

/***/ })

/******/ });