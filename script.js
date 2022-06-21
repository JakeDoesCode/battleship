const hitClass = 'x';
const missClass = 'o';
let playerTurn = true;
//Arrays for each player
let harborOne = [];
let harborTwo = [];
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
//
function whosTurn() {
  if ((playerTurn = true)) {
    return shipyardOne;
  } else {
    return shipyardTwo;
  }
}
function swapTurn(){
  playerTurn=!playerTurn
}
// TODO Refactor this to take a variable for the ship
function isSunk() {
  let player = whosTurn();
  if (player.destroyer.shipHit == player.destroyer.shipHealth) {
    player.destroyer.shipSink = true;
  }
}
// creates player board and an array to use for location
function makePlayerBoard() {
  const board = document.querySelector('.playerBoard');
  for (let i = 0; i < 100; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.setAttribute('data', 'player');
    tile.setAttribute('id', i);
    harborOne.push(i);
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
    harborTwo.push(i);
    board.appendChild(tile);
  }
}

function makeBoards() {
  makePlayerBoard();
  makeAIBoard();
}
makeBoards();
function placeAIShips(){
 let placeShip = Math.floor(Math.random() * 100);
 let carrierLocation = placeShip

 shipyardTwo.carrier.location = []
}


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

console.log(harborOne)

export { shipyardOne, shipyardTwo };
