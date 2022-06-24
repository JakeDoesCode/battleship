const hitClass = 'x';
const missClass = 'o';
let playerTurn = true;

// FOR DEVELOPMENT
const hasShip = 'h';

// Ship creating factory function
const shipFactory = (shipName, shipHealth, shipHit, shipSink, location) => {
  return { shipName, shipHealth, shipHit, shipSink, location };
};

const carrier = shipFactory('Carrier', 5, 0, false, []);
const battleShip = shipFactory('Battleship', 4, 0, false, []);
const destroyer = shipFactory('Destroyer', 3, 3, false, []);
const submarine = shipFactory('Submarine', 3, 0, false, []);
const patrolBoat = shipFactory('Patrol Boat', 2, 0, false, []);

//sets up a "shipYard" for the player and AI
const shipyardOne = {
  carrier,
  battleShip,
  destroyer,
  submarine,
  patrolBoat,
};
const shipyardTwo = {
  carrier,
  battleShip,
  destroyer,
  submarine,
  patrolBoat,
};

//checks to see if the selectedTile matches a number in the ships location array if so, adds a hit to hit counter
function checkHit(selectedTile) {
  let player = whosTurn();
  if (player.carrier.location.includes(selectedTile)) {
    player.carrier.shipHit++;
    return true;
  } else if (player.battleShip.location.includes(selectedTile)) {
    player.battleShip.shipHit++;
    return true;
  } else if (player.destroyer.location.includes(selectedTile)) {
    player.destroyer.shipHit++;
    return true;
  } else if (player.submarine.location.includes(selectedTile)) {
    player.submarine.shipHit++;
    return true;
  } else if (player.patrolBoat.location.includes(selectedTile)) {
    player.patrolBoat.shipHit++;
    return true;
  } else {
    return false;
  }
}
// checks if the hit counter is equal to shipHealth (or length) if it is, will change shipSunk status to true
function checkSunk() {
  let player = whosTurn();
  if (player.carrier.shipHealth == player.carrier.shipHit) {
    player.carrier.shipSink = true;
    return true;
  } else if (player.battleShip.shipHealth == player.battleShip.shipHit) {
    player.battleShip.shipSink = true;
    return true;
  } else if (player.destroyer.shipHealth == player.destroyer.shipHit) {
    player.destroyer.shipSink = true;
    return true;
  } else if (player.submarine.shipHealth == player.submarine.shipHit) {
    player.submarine.shipSink = true;
    return true;
  } else if (player.patrolBoat.shipHealth == player.patrolBoat.shipHit) {
    player.patrolBoat.shipSink = true;
    return true;
  }
}
function whosTurn() {
  if ((playerTurn = true)) {
    return shipyardOne;
  } else {
    return shipyardTwo;
  }
}

//!FOR TESTING ONLY
checkHit(1);
checkSunk();

//targets appropriate "shipyard" based on turn
//switches turns
function swapTurn() {
  playerTurn = !playerTurn;
}

// creates player board and an array to use for location
function makePlayerBoard() {
  const board = document.querySelector('.playerBoard');
  for (let i = 0; i < 100; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.setAttribute('data', 'player');
    tile.setAttribute('id', i);
    board.appendChild(tile);
  }
}

function makeAIBoard() {
  const board = document.querySelector('.AIBoard');
  for (let i = 100; i < 200; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.setAttribute('data', 'AI');
    tile.setAttribute('id', i);
    board.appendChild(tile);
  }
}

function makeBoards() {
  makePlayerBoard();
  makeAIBoard();
}

makeBoards();

function placeAIShips() {
  let tilesUnavailable = [];
  let randomCarrierLoc = Math.floor(Math.random() * 100) + 100;
  console.log(randomCarrierLoc);
  for (let i = 0; i < shipyardOne.carrier.shipHealth; i++) {
    shipyardOne.carrier.location.push(randomCarrierLoc++);
    tilesUnavailable.push[randomCarrierLoc]
    let carrierLoc = document.getElementById(shipyardOne.carrier.location[i]);
    carrierLoc.classList.add('h');
  }
  let randomBattleshipLoc = Math.floor(Math.random() * 100) + 100;
  for (let i = 0; i < shipyardOne.battleShip.shipHealth; i++) {
    shipyardOne.battleShip.location.push(randomBattleshipLoc++);
    let battleshipLoc = document.getElementById(
      shipyardOne.battleShip.location[i]
      );
      battleshipLoc.classList.add('h')
  }
  
}
placeAIShips();

// function userTurn() {
//   const tile = document.querySelectorAll('.tile');
//   tile.forEach((tile) => {
//     tile.addEventListener('click', (e) => {
//       let selectionId = parseFloat(e.target.id);
//       let domSelected = document.getElementById(e.target.id);

//     });
//   });
// }

// function winConditions() {
//   if (
//     shipyardOne.carrier.shipSink == true &&
//     shipyardOne.battleShip.shipSink == true &&
//     shipyardOne.destroyer.shipSink == true &&
//     shipyardOne.submarine.shipSink == true &&
//     shipyardOne.patrolBoat.shipSink == true
//   ) {
//     alert('Player lost :(');
//   } else if (
//     shipyardTwo.carrier.shipSink == true &&
//     shipyardTwo.battleShip.shipSink == true &&
//     shipyardTwo.destroyer.shipSink == true &&
//     shipyardTwo.submarine.shipSink == true &&
//     shipyardTwo.patrolBoat.shipSink == true
//   ) {
//     alert('Epic Victory.');
//   }
// }

// set pieces on the board, randomly, but within certain parameters (must be vertical or horizontal)
// add functionality for human players to set pieces
//display players board to player. and an AI board with no placement indicator
// player selects a tile on the board
// if selectedTile contains ship, it is a hit. and player will get to go again
// if hit, add 1 to shipHit, if shipHit == shipHealth change shipSink from false to true
// evaluate win. if all shipSink==true , player wins. show win message
// if selectedTile does not contain a ship it is a miss
// update board to display all previously selected tiles
// swap turns
// AI will select a random position on the board that AI has not previously selected
// if AI hits, evaluate if ship is sunk, if not AI will select another tile vertical or horizontal of the previously selected tile.
// if AI has more than 1 hit in a single row or column. It will continue to hit the row or column until it sinks a ship
// if AI misses, swap turn
// evaluate if win conditions are met
// update playerboard to reflect where AI has selected.
// swap turns
// keep score of wins and losses


