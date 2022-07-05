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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AIFleet\": () => (/* binding */ AIFleet),\n/* harmony export */   \"playerFleet\": () => (/* binding */ playerFleet)\n/* harmony export */ });\n/* harmony import */ var _modules_gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/gameBoard */ \"./src/modules/gameBoard.js\");\n/* harmony import */ var _modules_shipFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/shipFactory */ \"./src/modules/shipFactory.js\");\n/* harmony import */ var _modules_gameplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/gameplay */ \"./src/modules/gameplay.js\");\n\n\n\n\nlet playerFleet = (0,_modules_shipFactory__WEBPACK_IMPORTED_MODULE_1__.newFleet)();\nlet AIFleet = (0,_modules_shipFactory__WEBPACK_IMPORTED_MODULE_1__.newFleet)();\n\n\n(0,_modules_gameBoard__WEBPACK_IMPORTED_MODULE_0__.makePlayerBoard)();\n(0,_modules_gameBoard__WEBPACK_IMPORTED_MODULE_0__.makeAIBoard)();\n(0,_modules_gameplay__WEBPACK_IMPORTED_MODULE_2__.placeAIFleet)()\nplayerFleet[0].location = ['A1','A2,','A3','A4','A5']\nplayerFleet[1].location = ['B1','B2,','B3','B4']\nplayerFleet[2].location = ['C1','C2,','C3']\nplayerFleet[3].location = ['D1','D2,','D3']\nplayerFleet[4].location = ['E1','E2']\n;(0,_modules_gameplay__WEBPACK_IMPORTED_MODULE_2__.userClick)();\n\n\n\n//! FOR TESTS\n\n\n\n\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/modules/gameBoard.js":
/*!**********************************!*\
  !*** ./src/modules/gameBoard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeAIBoard\": () => (/* binding */ makeAIBoard),\n/* harmony export */   \"makePlayerBoard\": () => (/* binding */ makePlayerBoard)\n/* harmony export */ });\n\n\n// creates board for player \nfunction makePlayerBoard() {\n  const board = document.querySelector('.playerBoard');\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('id', 'player' + 'A' + i);\n    tile.setAttribute('data','player')\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('id', 'player' + 'B' + i);\n    tile.setAttribute('data','player')\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('id', 'player' + 'C' + i);\n    tile.setAttribute('data','player')\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('id', 'player' + 'D' + i);\n    tile.setAttribute('data','player')\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('id', 'player' + 'E' + i);\n    tile.setAttribute('data','player')\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('id', 'player' + 'F' + i);\n    tile.setAttribute('data','player')\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('id', 'player' + 'G' + i);\n    tile.setAttribute('data','player')\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('id', 'player' + 'H' + i);\n    tile.setAttribute('data','player')\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('id', 'player' + 'I' + i);\n    tile.setAttribute('data','player')\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('id', 'player' + 'J' + i);\n    tile.setAttribute('data','player')\n    board.appendChild(tile);\n  }\n}\n//creates board for AI\nfunction makeAIBoard() {\n  const board = document.querySelector('.AIBoard');\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('data', 'AI');\n    tile.setAttribute('id', 'A' + i);\n    board.appendChild(tile);\n  }\n\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('data', 'AI');\n    tile.setAttribute('id', 'B' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('data', 'AI');\n    tile.setAttribute('id', 'C' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('data', 'AI');\n    tile.setAttribute('id', 'D' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('data', 'AI');\n    tile.setAttribute('id', 'E' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('data', 'AI');\n    tile.setAttribute('id', 'F' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('data', 'AI');\n    tile.setAttribute('id', 'G' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('data', 'AI');\n    tile.setAttribute('id', 'H' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('data', 'AI');\n    tile.setAttribute('id', 'I' + i);\n    board.appendChild(tile);\n  }\n  for (let i = 1; i < 11; i++) {\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n    tile.setAttribute('data', 'AI');\n    tile.setAttribute('id', 'J' + i);\n    board.appendChild(tile);\n  }\n}\n\n\n\n\n\n//# sourceURL=webpack://battleship/./src/modules/gameBoard.js?");

/***/ }),

/***/ "./src/modules/gameplay.js":
/*!*********************************!*\
  !*** ./src/modules/gameplay.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AITurn\": () => (/* binding */ AITurn),\n/* harmony export */   \"checkSpace\": () => (/* binding */ checkSpace),\n/* harmony export */   \"placeAIFleet\": () => (/* binding */ placeAIFleet),\n/* harmony export */   \"shipsPlaced\": () => (/* binding */ shipsPlaced),\n/* harmony export */   \"userClick\": () => (/* binding */ userClick)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./src/index.js\");\n\n\n//variables\nconst letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];\nlet randomPlacement = Math.floor(Math.random() * 10 + 1).toString();\nlet randomChar = letters[Math.floor(Math.random() * letters.length)];\nlet selectedTiles = [];\nlet playerTurn = true;\nlet AISelectedTiles = [];\nlet placementPhase = false;\nlet gamePhase = true;\n\nfunction swapTurn() {\n  playerTurn = !playerTurn;\n}\n\n// Generates a new random letter\nfunction newNum() {\n  return (randomPlacement = Math.floor(Math.random() * 10 + 1).toString());\n}\n// Generates a new random letter\nfunction newLetter() {\n  return (randomChar = letters[Math.floor(Math.random() * letters.length)]);\n}\n\n//randomly assigns a direction (vertical (false) or horizontal (true))\nfunction orientation() {\n  let direction = Math.floor(Math.random() * 100);\n  if (direction > 50) {\n    return true;\n  } else {\n    return false;\n  }\n}\n\n// checks to see if shiphealth is equal to the amount of tiles assigned in location array\nfunction shipsPlaced() {\n  if (\n    ___WEBPACK_IMPORTED_MODULE_0__.AIFleet[0].location.length == 5 &&\n    ___WEBPACK_IMPORTED_MODULE_0__.AIFleet[1].location.length == 4 &&\n    ___WEBPACK_IMPORTED_MODULE_0__.AIFleet[2].location.length == 3 &&\n    ___WEBPACK_IMPORTED_MODULE_0__.AIFleet[3].location.length == 3 &&\n    ___WEBPACK_IMPORTED_MODULE_0__.AIFleet[4].location.length == 2\n  ) {\n    return true;\n  } else {\n    return false;\n  }\n}\n//confirms space is not occupied by another ship// also will function to check for a ship when the user clicks\nfunction checkSpace(args) {\n  for (let i = 0; i < args.length; i++) {\n    for (let j = 0; j < ___WEBPACK_IMPORTED_MODULE_0__.AIFleet.length; j++) {\n      if (___WEBPACK_IMPORTED_MODULE_0__.AIFleet[j].location.includes(args[i])) return true;\n    }\n  }\n  return false;\n}\n//places ship randomly in a valid position with AIFleet[i] as arguement\nfunction placeAIShip(ship) {\n  do {\n    newLetter();\n    newNum();\n    orientation();\n    let tempChar = letters.indexOf(randomChar);\n    if (orientation() && randomPlacement < 10) {\n      for (let n = 0; n < ship.shipHealth; n++) {\n        if (\n          tempChar > 10 ||\n          randomPlacement > 10 ||\n          checkSpace([randomChar + randomPlacement])\n        ) {\n          ship.location = [];\n        } else {\n          ship.location.push(randomChar + randomPlacement++);\n        }\n      }\n    } else if (!orientation() && tempChar < 9) {\n      for (let n = 0; n < ship.shipHealth; n++) {\n        let updatedChar = letters[tempChar];\n        if (\n          tempChar > 9 ||\n          updatedChar == undefined ||\n          checkSpace([updatedChar + randomPlacement])\n        ) {\n          ship.location = [];\n        } else {\n          ship.location.push(updatedChar + randomPlacement);\n          tempChar++;\n        }\n      }\n    }\n  } while (ship.location.length == 0);\n}\n//places all AI ships with one function\nfunction placeAIFleet() {\n  placeAIShip(___WEBPACK_IMPORTED_MODULE_0__.AIFleet[0]);\n  placeAIShip(___WEBPACK_IMPORTED_MODULE_0__.AIFleet[1]);\n  placeAIShip(___WEBPACK_IMPORTED_MODULE_0__.AIFleet[2]);\n  placeAIShip(___WEBPACK_IMPORTED_MODULE_0__.AIFleet[3]);\n  placeAIShip(___WEBPACK_IMPORTED_MODULE_0__.AIFleet[4]);\n}\n// on userClick on the AI side of the board, will check if tile has already been selected\n//if not it will add the selected tile id to an array of \"selected tiles\"\n// loops through all AI ships to determine if the most recently selected tile id is part of the ships location\n// if yes, call hit function to add to ships hit counter. then checks to see if shipHit is == to shipHealth\n// if yes, ship is sunk. if ship is sunk endGame function determines if win conditions are met (i.e. all ships\n// are shipSunk == true)\n//if the most recently selected tile does not match any ship location, and no hit is called, will add \"miss\"\n// to selected tile\n\nfunction userClick() {\n  if(gamePhase){\n  const tile = document.querySelectorAll('[data=AI]');\n  tile.forEach((tile) => {\n    tile.addEventListener('click', (e) => {\n      let domSelected = document.getElementById(e.target.id);\n      if (playerTurn) {\n        if (selectedTiles.includes(domSelected.id)) {\n          alert('Please Select a valid tile');\n        } else if (!selectedTiles.includes(domSelected.id)) {\n          selectedTiles.push(domSelected.id);\n          for (let l in ___WEBPACK_IMPORTED_MODULE_0__.AIFleet) {\n            if (\n              ___WEBPACK_IMPORTED_MODULE_0__.AIFleet[l].location.includes(\n                selectedTiles[selectedTiles.length - 1]\n              )\n            ) {\n              ___WEBPACK_IMPORTED_MODULE_0__.AIFleet[l].hit();\n              console.log('hit');\n              domSelected.classList.add('hit');\n              if (___WEBPACK_IMPORTED_MODULE_0__.AIFleet[l].shipHit == ___WEBPACK_IMPORTED_MODULE_0__.AIFleet[l].shipHealth) {\n                ___WEBPACK_IMPORTED_MODULE_0__.AIFleet[l].sunk();\n                endGame();\n              }\n            }\n          }\n        }\n        if (!domSelected.classList.contains('hit')) {\n          domSelected.classList.add('miss');\n          swapTurn();\n          AITurn()\n        }\n      }\n    });\n  });\n  }}\n\nfunction AITurn() {\nlet coordinate = newLetter() + newNum();\nlet selectedCoordinate = document.getElementById('player'+coordinate) \nlet AIValid = false\ndo{ \n  if (!playerTurn && !AISelectedTiles.includes(coordinate)) {\n    AISelectedTiles.push(coordinate); \n    AIValid = true\n    console.log(AISelectedTiles)\n  }else if(AISelectedTiles.includes(coordinate)){\n    coordinate = newLetter()+newNum()\n  }}while(!AIValid)\n  for (let l in ___WEBPACK_IMPORTED_MODULE_0__.playerFleet) {\n    if (\n      ___WEBPACK_IMPORTED_MODULE_0__.playerFleet[l].location.includes(\n        AISelectedTiles[AISelectedTiles.length - 1]\n      )\n    ) {\n      ___WEBPACK_IMPORTED_MODULE_0__.playerFleet[l].hit();\n      selectedCoordinate.classList.add('hit');\n      console.log('hit');\n      if (___WEBPACK_IMPORTED_MODULE_0__.playerFleet[l].shipHit == ___WEBPACK_IMPORTED_MODULE_0__.playerFleet[l].shipHealth) {\n        ___WEBPACK_IMPORTED_MODULE_0__.playerFleet[l].sunk();\n        endGame();\n      } \n    }\n  }if (!selectedCoordinate.classList.contains('hit')) {\n        console.log('miss')\n    selectedCoordinate.classList.add('miss');\n    swapTurn();\n    \n  }else if(selectedCoordinate.classList.contains('hit')){\n    AITurn()\n\n  }\n}\n\n// checks each ship in both player's fleets. If all ships are sunk, win message is displayed\nfunction endGame() {\n  let AIfleetSunk;\n  let playerFleetSunk;\n  if (\n    ___WEBPACK_IMPORTED_MODULE_0__.AIFleet[0].shipSink &&\n    ___WEBPACK_IMPORTED_MODULE_0__.AIFleet[1].shipSink &&\n    ___WEBPACK_IMPORTED_MODULE_0__.AIFleet[2].shipSink &&\n    ___WEBPACK_IMPORTED_MODULE_0__.AIFleet[3].shipSink &&\n    ___WEBPACK_IMPORTED_MODULE_0__.AIFleet[4].shipSink\n  ) {\n    AIfleetSunk = true;\n  } else if (\n    ___WEBPACK_IMPORTED_MODULE_0__.playerFleet[0].shipSink &&\n    ___WEBPACK_IMPORTED_MODULE_0__.playerFleet[1].shipSink &&\n    ___WEBPACK_IMPORTED_MODULE_0__.playerFleet[2].shipSink &&\n    ___WEBPACK_IMPORTED_MODULE_0__.playerFleet[3].shipSink &&\n    ___WEBPACK_IMPORTED_MODULE_0__.playerFleet[4].shipSink\n  ) {\n    playerFleetSunk = true;\n  }\n  if (AIfleetSunk) {\n    alert('Player wins');\n    resetGame();\n  } else if (playerFleetSunk) {\n    alert('AI wins. Computers are our masters now.');\n  }\n}\n//reset resets AI\nfunction resetGame() {\n  const tile = document.querySelectorAll('.tile');\n  tile.forEach((tile) => {\n    tile.classList.remove('hit');\n    tile.classList.remove('miss');\n    tile.classList.remove('placedShip');\n  });\n  selectedTiles = [];\n  AISelectedTiles=[]\n  for (let i = 0; i < ___WEBPACK_IMPORTED_MODULE_0__.AIFleet.length; i++) {\n    ___WEBPACK_IMPORTED_MODULE_0__.AIFleet[i].shipHit = 0;\n  }\n  for (let i = 0; i < ___WEBPACK_IMPORTED_MODULE_0__.playerFleet.length; i++) {\n    ___WEBPACK_IMPORTED_MODULE_0__.playerFleet[i].shipHit = 0;\n  }\n  placeAIFleet();\n}\n\nfunction checkPlacement(args) {\n  for (let i = 0; i < args.length; i++) {\n    for (let j = 0; j < ___WEBPACK_IMPORTED_MODULE_0__.playerFleet.length; j++) {\n      if (___WEBPACK_IMPORTED_MODULE_0__.playerFleet[j].location.includes(args[i])) return true;\n    }\n  }\n  return false;\n}\nlet rotate = document.getElementById('rotate');\nlet horizontal = true;\n\nrotate.addEventListener('click', () => {\n  horizontal = !horizontal;\n});\n\n// ! Functions needed\n// ! playerPlace\n\n\n\n\n//# sourceURL=webpack://battleship/./src/modules/gameplay.js?");

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