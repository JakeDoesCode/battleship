import { AIFleet } from '..';
//Variables
let randomPlacement = Math.floor(Math.random() * 10 + 1).toString();
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
let randomChar = letters[Math.floor(Math.random() * letters.length)];
function makePlayerBoard() {
  const board = document.querySelector('.playerBoard');
  for (let i = 1; i < 11; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.setAttribute('id', 'Player' + 'A' + i);
    board.appendChild(tile);
  }
  for (let i = 1; i < 11; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.setAttribute('id', 'Player' + 'B' + i);
    board.appendChild(tile);
  }
  for (let i = 1; i < 11; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.setAttribute('id', 'Player' + 'C' + i);
    board.appendChild(tile);
  }
  for (let i = 1; i < 11; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.setAttribute('id', 'Player' + 'D' + i);
    board.appendChild(tile);
  }
  for (let i = 1; i < 11; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.setAttribute('id', 'Player' + 'E' + i);
    board.appendChild(tile);
  }
  for (let i = 1; i < 11; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.setAttribute('id', 'Player' + 'F' + i);
    board.appendChild(tile);
  }
  for (let i = 1; i < 11; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.setAttribute('id', 'Player' + 'G' + i);
    board.appendChild(tile);
  }
  for (let i = 1; i < 11; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.setAttribute('id', 'Player' + 'H' + i);
    board.appendChild(tile);
  }
  for (let i = 1; i < 11; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.setAttribute('id', 'Player' + 'I' + i);
    board.appendChild(tile);
  }
  for (let i = 1; i < 11; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.setAttribute('id', 'Player' + 'J' + i);
    board.appendChild(tile);
  }
}

function makeAIBoard() {
  const board = document.querySelector('.AIBoard');
  for (let i = 1; i < 11; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.setAttribute('data', 'AI');
    tile.setAttribute('id', 'A' + i);
    board.appendChild(tile);
  }

  for (let i = 1; i < 11; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.setAttribute('data', 'AI');
    tile.setAttribute('id', 'B' + i);
    board.appendChild(tile);
  }
  for (let i = 1; i < 11; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.setAttribute('data', 'AI');
    tile.setAttribute('id', 'C' + i);
    board.appendChild(tile);
  }
  for (let i = 1; i < 11; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.setAttribute('data', 'AI');
    tile.setAttribute('id', 'D' + i);
    board.appendChild(tile);
  }
  for (let i = 1; i < 11; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.setAttribute('data', 'AI');
    tile.setAttribute('id', 'E' + i);
    board.appendChild(tile);
  }
  for (let i = 1; i < 11; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.setAttribute('data', 'AI');
    tile.setAttribute('id', 'F' + i);
    board.appendChild(tile);
  }
  for (let i = 1; i < 11; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.setAttribute('data', 'AI');
    tile.setAttribute('id', 'G' + i);
    board.appendChild(tile);
  }
  for (let i = 1; i < 11; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.setAttribute('data', 'AI');
    tile.setAttribute('id', 'H' + i);
    board.appendChild(tile);
  }
  for (let i = 1; i < 11; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.setAttribute('data', 'AI');
    tile.setAttribute('id', 'I' + i);
    board.appendChild(tile);
  }
  for (let i = 1; i < 11; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.setAttribute('data', 'AI');
    tile.setAttribute('id', 'J' + i);
    board.appendChild(tile);
  }
}

// Generates a new random letter
function newNum() {
  return (randomPlacement = Math.floor(Math.random() * 10 + 1).toString());
}
// Generates a new random letter
function newLetter() {
  return (randomChar = letters[Math.floor(Math.random() * letters.length)]);
}
//creates board 10 rows of 10 with a label for each row/column

//randomly assigns a direction (vertical (false) or horizontal (true))
function orientation() {
  let direction = Math.floor(Math.random() * 100);
  if (direction < 50) {
    return true;
  } else {
    return false;
  }
}

// checks to see if shiphealth is equal to the amount of tiles assigned in location array
function shipsPlaced() {
  if (
    AIFleet[0].location.length == 5 &&
    AIFleet[1].location.length == 4 &&
    AIFleet[2].location.length == 3 &&
    AIFleet[3].location.length == 3 &&
    AIFleet[4].location.length == 2
  ) {
    return true;
  } else {
    console.log(AIFleet[0].location.length,
      AIFleet[1].location.length,
      AIFleet[2].location.length,
      AIFleet[3].location.length,
      AIFleet[4].location.length )
    return false;
  }
}
// For every arg item I want to loop through every AIFleet item and check
//  if an array of coordinates inside that AIFleet includes the arg item.
// If that happens any one time, I want to return true.
// If the loop ends and I didn't return true, I want to return false.

export { makePlayerBoard, makeAIBoard, shipsPlaced };
