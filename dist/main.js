/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AIFleet\": () => (/* binding */ AIFleet),\n/* harmony export */   \"playerFleet\": () => (/* binding */ playerFleet)\n/* harmony export */ });\n/* harmony import */ var _modules_gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/gameBoard */ \"./src/modules/gameBoard.js\");\n/* harmony import */ var _modules_shipFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/shipFactory */ \"./src/modules/shipFactory.js\");\n\n\nconst playerFleet = (0,_modules_shipFactory__WEBPACK_IMPORTED_MODULE_1__.newFleet)();\nconst AIFleet = (0,_modules_shipFactory__WEBPACK_IMPORTED_MODULE_1__.newFleet)();\n\n(0,_modules_gameBoard__WEBPACK_IMPORTED_MODULE_0__.makePlayerBoard)();\n(0,_modules_gameBoard__WEBPACK_IMPORTED_MODULE_0__.makeAIBoard)()\n\n//! FOR TESTS\nplayerFleet.carrier.hit();\nAIFleet.battleShip.hit();\nAIFleet.battleShip.hit();\nAIFleet.patrolBoat.sunk();\n\n\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/modules/gameBoard.js":
/*!**********************************!*\
  !*** ./src/modules/gameBoard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeAIBoard\": () => (/* binding */ makeAIBoard),\n/* harmony export */   \"makePlayerBoard\": () => (/* binding */ makePlayerBoard)\n/* harmony export */ });\nfunction makePlayerBoard() {\n  const board = document.querySelector('.playerBoard');\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('data', 'player');\n    tile.setAttribute('id', 'A' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('data', 'player');\n    tile.setAttribute('id', 'B' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('data', 'player');\n    tile.setAttribute('id', 'C' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('data', 'player');\n    tile.setAttribute('id', 'D' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('data', 'player');\n    tile.setAttribute('id', 'E' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('data', 'player');\n    tile.setAttribute('id', 'F' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('data', 'player');\n    tile.setAttribute('id', 'G' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('data', 'player');\n    tile.setAttribute('id', 'H' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('data', 'player');\n    tile.setAttribute('id', 'I' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('data', 'player');\n    tile.setAttribute('id', 'J' + i);\n    board.appendChild(tile);\n  }\n}\n\nfunction makeAIBoard() {\n  const board = document.querySelector('.AIBoard')\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('data', 'AI');\n    tile.setAttribute('id', 'A' + i);\n    board.appendChild(tile);\n  }\n\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('data', 'AI');\n    tile.setAttribute('id', 'B' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('data', 'AI');\n    tile.setAttribute('id', 'C' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('data', 'AI');\n    tile.setAttribute('id', 'D' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('data', 'AI');\n    tile.setAttribute('id', 'E' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('data', 'AI');\n    tile.setAttribute('id', 'F' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('data', 'AI');\n    tile.setAttribute('id', 'G' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('data', 'AI');\n    tile.setAttribute('id', 'H' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('data', 'AI');\n    tile.setAttribute('id', 'I' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('data', 'AI');\n    tile.setAttribute('id', 'J' + i);\n    board.appendChild(tile);\n  }\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/modules/gameBoard.js?");

/***/ }),

/***/ "./src/modules/shipFactory.js":
/*!************************************!*\
  !*** ./src/modules/shipFactory.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newFleet\": () => (/* binding */ newFleet)\n/* harmony export */ });\nconst shipFactory = (shipHealth, shipHit, shipSink) => {\n  function hit() {\n    return this.shipHit++;\n  }\n  function sunk() {\n    return (this.shipSink = true);\n  }\n  return { shipHealth, shipHit, shipSink, hit, sunk };\n};\nconst newFleet = () => {\n  const carrier = shipFactory(5, 0, false);\n  const battleShip = shipFactory(4, 0, false);\n  const destroyer = shipFactory(3, 0, false);\n  const submarine = shipFactory(3, 0, false);\n  const patrolBoat = shipFactory(2, 0, false);\n  return { carrier, battleShip, destroyer, submarine, patrolBoat };\n};\n\n\n\n//# sourceURL=webpack://battleship/./src/modules/shipFactory.js?");

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