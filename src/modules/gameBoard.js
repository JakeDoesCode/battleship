import { AIFleet } from '..';
//Variables
let randomPlacement = Math.floor(Math.random() * 10 + 1).toString();
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
let randomChar = letters[Math.floor(Math.random() * letters.length)];
// Generates a new random letter
function newNum() {
  return (randomPlacement = Math.floor(Math.random() * 10 + 1).toString());
}
// Generates a new random letter
function newLetter() {
  return (randomChar = letters[Math.floor(Math.random() * letters.length)]);
}
//creates board 10 rows of 10 with a label for each row/column
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
function shipPlaced() {
  for (let i = 0; AIFleet[i].length > i; i++)
    return AIFleet[i].location.length == AIFleet[i].shipHealth ? true : false;
}

function checkSpace(randomChar, randomPlacement) {
  if (AIFleet[0].location.includes(randomChar + randomPlacement)) {
    return true;
  } else if (AIFleet[1].location.includes(randomChar + randomPlacement)) {
    return true;
  } else if (AIFleet[2].location.includes(randomChar + randomPlacement)) {
    return true;
  } else if (AIFleet[3].location.includes(randomChar + randomPlacement)) {
    return true;
  } else if (AIFleet[4].location.includes(randomChar + randomPlacement)) {
    return true;
  } else {
    return false;
  }
}

// assign tiles based on x/y axis to specific ships within the AI Fleet array
function placeShips() {
  let placement = true;
  //places all ships in the AIFleet
  for (let i = 0; i < AIFleet.length; i++) {
    //loops over until conditions are met and ships are placed in valid locations
    do {
      newLetter();
      newNum();
      orientation();
      let tempChar = letters.indexOf(randomChar);
      if (orientation() && randomPlacement < 10) {
        for (let n = 0; n < AIFleet[i].shipHealth; n++) {
          if (
            randomChar > 10 ||
            tempChar > 10 ||
            randomPlacement > 10
          ) {
            AIFleet[i].location = [];
            placement = false;
          } else {
            AIFleet[i].location.push(randomChar + randomPlacement++);
            placement = true;
          }
        }
      } else if (!orientation() && tempChar < 9) {
        for (let n = 0; n < AIFleet[i].shipHealth; n++) {
          let updatedChar = letters[tempChar];
          if (
            tempChar > 9 ||
            updatedChar == undefined
          ) {
            AIFleet[i].location = [];
            placement = false;
          } else {
            AIFleet[i].location.push(updatedChar + randomPlacement);
            tempChar++;
            placement = true;
          }
        }
      }

      console.table(AIFleet[i].location);
    } while (
      !shipPlaced(), AIFleet[i].location.length == 0)
    ;
  }
}

export { makePlayerBoard, makeAIBoard, placeShips, checkSpace };
