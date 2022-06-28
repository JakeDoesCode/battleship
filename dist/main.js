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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AIFleet\": () => (/* binding */ AIFleet),\n/* harmony export */   \"playerFleet\": () => (/* binding */ playerFleet)\n/* harmony export */ });\n/* harmony import */ var _modules_gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/gameBoard */ \"./src/modules/gameBoard.js\");\n/* harmony import */ var _modules_shipFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/shipFactory */ \"./src/modules/shipFactory.js\");\n\n\n\nconst playerFleet = (0,_modules_shipFactory__WEBPACK_IMPORTED_MODULE_1__.newFleet)();\nconst AIFleet = (0,_modules_shipFactory__WEBPACK_IMPORTED_MODULE_1__.newFleet)();\n\n// makePlayerBoard();\n// makeAIBoard();\n(0,_modules_gameBoard__WEBPACK_IMPORTED_MODULE_0__.placeShips)()\n;(0,_modules_gameBoard__WEBPACK_IMPORTED_MODULE_0__.checkSpace)()\n//! FOR TESTS\nplayerFleet[0].hit();\nAIFleet[1].hit();\nAIFleet[1].hit();\nAIFleet[4].sunk();\n\n\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/modules/gameBoard.js":
/*!**********************************!*\
  !*** ./src/modules/gameBoard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkSpace\": () => (/* binding */ checkSpace),\n/* harmony export */   \"makeAIBoard\": () => (/* binding */ makeAIBoard),\n/* harmony export */   \"makePlayerBoard\": () => (/* binding */ makePlayerBoard),\n/* harmony export */   \"placeShips\": () => (/* binding */ placeShips)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./src/index.js\");\n\n//Variables\nlet randomPlacement = Math.floor(Math.random() * 10 + 1).toString();\nconst letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];\nlet randomChar = letters[Math.floor(Math.random() * letters.length)];\n// Generates a new random letter\nfunction newNum() {\n  return (randomPlacement = Math.floor(Math.random() * 10 + 1).toString());\n}\n// Generates a new random letter\nfunction newLetter() {\n  return (randomChar = letters[Math.floor(Math.random() * letters.length)]);\n}\n//creates board 10 rows of 10 with a label for each row/column\nfunction makePlayerBoard() {\n  const board = document.querySelector('.playerBoard');\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('id', 'Player' + 'A' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('id', 'Player' + 'B' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('id', 'Player' + 'C' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('id', 'Player' + 'D' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('id', 'Player' + 'E' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('id', 'Player' + 'F' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('id', 'Player' + 'G' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('id', 'Player' + 'H' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('id', 'Player' + 'I' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('id', 'Player' + 'J' + i);\n    board.appendChild(tile);\n  }\n}\n\nfunction makeAIBoard() {\n  const board = document.querySelector('.AIBoard');\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('data', 'AI');\n    tile.setAttribute('id', 'A' + i);\n    board.appendChild(tile);\n  }\n\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('data', 'AI');\n    tile.setAttribute('id', 'B' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('data', 'AI');\n    tile.setAttribute('id', 'C' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('data', 'AI');\n    tile.setAttribute('id', 'D' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('data', 'AI');\n    tile.setAttribute('id', 'E' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('data', 'AI');\n    tile.setAttribute('id', 'F' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('data', 'AI');\n    tile.setAttribute('id', 'G' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('data', 'AI');\n    tile.setAttribute('id', 'H' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('data', 'AI');\n    tile.setAttribute('id', 'I' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('data', 'AI');\n    tile.setAttribute('id', 'J' + i);\n    board.appendChild(tile);\n  }\n}\n//randomly assigns a direction (vertical (false) or horizontal (true))\nfunction orientation() {\n  let direction = Math.floor(Math.random() * 100);\n  if (direction < 50) {\n    return true;\n  } else {\n    return false;\n  }\n}\n\n// checks to see if shiphealth is equal to the amount of tiles assigned in location array\nfunction shipPlaced() {\n  for (let i = 0; ___WEBPACK_IMPORTED_MODULE_0__.AIFleet[i].length > i; i++)\n    return ___WEBPACK_IMPORTED_MODULE_0__.AIFleet[i].location.length == ___WEBPACK_IMPORTED_MODULE_0__.AIFleet[i].shipHealth ? true : false;\n}\n\nfunction checkSpace(randomChar, randomPlacement) {\n  if (___WEBPACK_IMPORTED_MODULE_0__.AIFleet[0].location.includes(randomChar + randomPlacement)) {\n    return true;\n  } else if (___WEBPACK_IMPORTED_MODULE_0__.AIFleet[1].location.includes(randomChar + randomPlacement)) {\n    return true;\n  } else if (___WEBPACK_IMPORTED_MODULE_0__.AIFleet[2].location.includes(randomChar + randomPlacement)) {\n    return true;\n  } else if (___WEBPACK_IMPORTED_MODULE_0__.AIFleet[3].location.includes(randomChar + randomPlacement)) {\n    return true;\n  } else if (___WEBPACK_IMPORTED_MODULE_0__.AIFleet[4].location.includes(randomChar + randomPlacement)) {\n    return true;\n  } else {\n    return false;\n  }\n}\n\n// assign tiles based on x/y axis to specific ships within the AI Fleet array\nfunction placeShips() {\n  let placement = true;\n  //places all ships in the AIFleet\n  for (let i = 0; i < ___WEBPACK_IMPORTED_MODULE_0__.AIFleet.length; i++) {\n    //loops over until conditions are met and ships are placed in valid locations\n    do {\n      newLetter();\n      newNum();\n      orientation();\n      let tempChar = letters.indexOf(randomChar);\n      if (orientation() && randomPlacement < 10) {\n        for (let n = 0; n < ___WEBPACK_IMPORTED_MODULE_0__.AIFleet[i].shipHealth; n++) {\n          if (\n            randomChar > 10 ||\n            tempChar > 10 ||\n            randomPlacement > 10\n          ) {\n            ___WEBPACK_IMPORTED_MODULE_0__.AIFleet[i].location = [];\n            placement = false;\n          } else {\n            ___WEBPACK_IMPORTED_MODULE_0__.AIFleet[i].location.push(randomChar + randomPlacement++);\n            placement = true;\n          }\n        }\n      } else if (!orientation() && tempChar < 9) {\n        for (let n = 0; n < ___WEBPACK_IMPORTED_MODULE_0__.AIFleet[i].shipHealth; n++) {\n          let updatedChar = letters[tempChar];\n          if (\n            tempChar > 9 ||\n            updatedChar == undefined\n          ) {\n            ___WEBPACK_IMPORTED_MODULE_0__.AIFleet[i].location = [];\n            placement = false;\n          } else {\n            ___WEBPACK_IMPORTED_MODULE_0__.AIFleet[i].location.push(updatedChar + randomPlacement);\n            tempChar++;\n            placement = true;\n          }\n        }\n      }\n\n      console.table(___WEBPACK_IMPORTED_MODULE_0__.AIFleet[i].location);\n    } while (\n      !shipPlaced(), ___WEBPACK_IMPORTED_MODULE_0__.AIFleet[i].location.length == 0)\n    ;\n  }\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/modules/gameBoard.js?");

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