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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AIFleet\": () => (/* binding */ AIFleet),\n/* harmony export */   \"playerFleet\": () => (/* binding */ playerFleet)\n/* harmony export */ });\n/* harmony import */ var _modules_gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/gameBoard */ \"./src/modules/gameBoard.js\");\n/* harmony import */ var _modules_shipFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/shipFactory */ \"./src/modules/shipFactory.js\");\n/* harmony import */ var _modules_gameplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/gameplay */ \"./src/modules/gameplay.js\");\n\n\n\n\nconst playerFleet = (0,_modules_shipFactory__WEBPACK_IMPORTED_MODULE_1__.newFleet)();\nconst AIFleet = (0,_modules_shipFactory__WEBPACK_IMPORTED_MODULE_1__.newFleet)();\n\n(0,_modules_gameBoard__WEBPACK_IMPORTED_MODULE_0__.makePlayerBoard)();\n(0,_modules_gameBoard__WEBPACK_IMPORTED_MODULE_0__.makeAIBoard)();\n(0,_modules_gameplay__WEBPACK_IMPORTED_MODULE_2__.placeAIShip)(AIFleet[0])\n;(0,_modules_gameplay__WEBPACK_IMPORTED_MODULE_2__.placeAIShip)(AIFleet[1])\n;(0,_modules_gameplay__WEBPACK_IMPORTED_MODULE_2__.placeAIShip)(AIFleet[2])\n;(0,_modules_gameplay__WEBPACK_IMPORTED_MODULE_2__.placeAIShip)(AIFleet[3])\n;(0,_modules_gameplay__WEBPACK_IMPORTED_MODULE_2__.placeAIShip)(AIFleet[4])\n\n//! FOR TESTS\nplayerFleet[0].hit();\nAIFleet[1].hit();\nAIFleet[1].hit();\nAIFleet[4].sunk();\n\n\n\n\n\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/modules/gameBoard.js":
/*!**********************************!*\
  !*** ./src/modules/gameBoard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeAIBoard\": () => (/* binding */ makeAIBoard),\n/* harmony export */   \"makePlayerBoard\": () => (/* binding */ makePlayerBoard)\n/* harmony export */ });\n\n\n// creates board for player \nfunction makePlayerBoard() {\n  const board = document.querySelector('.playerBoard');\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('id', 'Player' + 'A' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('id', 'Player' + 'B' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('id', 'Player' + 'C' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('id', 'Player' + 'D' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('id', 'Player' + 'E' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('id', 'Player' + 'F' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('id', 'Player' + 'G' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('id', 'Player' + 'H' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('id', 'Player' + 'I' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('id', 'Player' + 'J' + i);\n    board.appendChild(tile);\n  }\n}\n//creates board for AI\nfunction makeAIBoard() {\n  const board = document.querySelector('.AIBoard');\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('data', 'AI');\n    tile.setAttribute('id', 'A' + i);\n    board.appendChild(tile);\n  }\n\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('data', 'AI');\n    tile.setAttribute('id', 'B' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('data', 'AI');\n    tile.setAttribute('id', 'C' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('data', 'AI');\n    tile.setAttribute('id', 'D' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('data', 'AI');\n    tile.setAttribute('id', 'E' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('data', 'AI');\n    tile.setAttribute('id', 'F' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('data', 'AI');\n    tile.setAttribute('id', 'G' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('data', 'AI');\n    tile.setAttribute('id', 'H' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('data', 'AI');\n    tile.setAttribute('id', 'I' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('data', 'AI');\n    tile.setAttribute('id', 'J' + i);\n    board.appendChild(tile);\n  }\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/modules/gameBoard.js?");

/***/ }),

/***/ "./src/modules/gameplay.js":
/*!*********************************!*\
  !*** ./src/modules/gameplay.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkSpace\": () => (/* binding */ checkSpace),\n/* harmony export */   \"placeAIShip\": () => (/* binding */ placeAIShip),\n/* harmony export */   \"shipsPlaced\": () => (/* binding */ shipsPlaced)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./src/index.js\");\n\n\n//variables\nconst letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];\nlet randomPlacement = Math.floor(Math.random() * 10 + 1).toString();\nlet randomChar = letters[Math.floor(Math.random() * letters.length)];\n\n// Generates a new random letter\nfunction newNum() {\n    return (randomPlacement = Math.floor(Math.random() * 10 + 1).toString());\n  }\n  // Generates a new random letter\n  function newLetter() {\n    return (randomChar = letters[Math.floor(Math.random() * letters.length)]);\n  }\n \n  \n  //randomly assigns a direction (vertical (false) or horizontal (true))\n  function orientation() {\n    let direction = Math.floor(Math.random() * 100);\n    if (direction > 50) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n  \n  // checks to see if shiphealth is equal to the amount of tiles assigned in location array\n  function shipsPlaced() {\n    if (\n      ___WEBPACK_IMPORTED_MODULE_0__.AIFleet[0].location.length == 5 &&\n      ___WEBPACK_IMPORTED_MODULE_0__.AIFleet[1].location.length == 4 &&\n      ___WEBPACK_IMPORTED_MODULE_0__.AIFleet[2].location.length == 3 &&\n      ___WEBPACK_IMPORTED_MODULE_0__.AIFleet[3].location.length == 3 &&\n      ___WEBPACK_IMPORTED_MODULE_0__.AIFleet[4].location.length == 2\n    ) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n  //confirms space is not occupied by another ship// also will function to check for a ship when the user clicks\n  function checkSpace(args) {\n    for (let i = 0; i < args.length; i++) {\n      for (let j = 0; j < ___WEBPACK_IMPORTED_MODULE_0__.AIFleet.length; j++) {\n        if (___WEBPACK_IMPORTED_MODULE_0__.AIFleet[j].location.includes(args[i])) return true;\n      }\n    }\n    return false;\n  }\n  \n  function placeAIShip(ship) {\n    //loops over until conditions are met and ships are placed in valid locations\n    do {\n      newLetter();\n      newNum();\n      orientation();\n      let tempChar = letters.indexOf(randomChar);\n      if (orientation() && randomPlacement < 10) {\n        for (let n = 0; n < ship.shipHealth; n++) {\n          if (\n            tempChar > 10 ||\n            randomPlacement > 10 ||\n            checkSpace([randomChar + randomPlacement])\n          ) {\n            ship.location = [];\n          } else {\n            ship.location.push(randomChar + randomPlacement++);\n          }\n        }\n      } else if (!orientation() && tempChar < 9) {\n        for (let n = 0; n < ship.shipHealth; n++) {\n          let updatedChar = letters[tempChar];\n          if (\n            tempChar > 9 ||\n            updatedChar == undefined ||\n            checkSpace([updatedChar + randomPlacement])\n          ) {\n            ship.location = [];\n          } else {\n            ship.location.push(updatedChar + randomPlacement);\n            tempChar++;\n          }\n        }\n      }\n    } while (ship.location.length == 0);\n    console.table(ship.location)\n  }\n\n\n  \n\n//# sourceURL=webpack://battleship/./src/modules/gameplay.js?");

/***/ }),

/***/ "./src/modules/shipFactory.js":
/*!************************************!*\
  !*** ./src/modules/shipFactory.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newFleet\": () => (/* binding */ newFleet)\n/* harmony export */ });\n//factory function for ship\nconst shipFactory = (shipName, shipHealth, shipHit, shipSink, location) => {\n  function hit() {\n    return this.shipHit++;\n  }\n  function sunk() {\n    return (this.shipSink = true);\n  }\n  return { shipName, shipHealth, shipHit, shipSink, location, hit, sunk };\n};\n\n//will build the \"fleet\" for both players\nconst newFleet = () => {\n  const carrier = shipFactory('carrier', 5, 0, false, []);\n  const battleShip = shipFactory('battleShip', 4, 0, false, []);\n  const destroyer = shipFactory('destroyer', 3, 0, false, []);\n  const submarine = shipFactory('submarine', 3, 0, false, []);\n  const patrolBoat = shipFactory('patrolBoat', 2, 0, false, []);\n  const ship = [carrier, battleShip, destroyer, submarine, patrolBoat];\n  return ship;\n};\n\n\n\n//# sourceURL=webpack://battleship/./src/modules/shipFactory.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;