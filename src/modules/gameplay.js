import { AIFleet, playerFleet } from '..';

//variables
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
let randomPlacement = Math.floor(Math.random() * 10 + 1).toString();
let randomChar = letters[Math.floor(Math.random() * letters.length)];
let selectedTiles = [];
let playerTurn = true;
 


function swapTurn() {
  playerTurn = !playerTurn;
}

// Generates a new random letter
function newNum() {
  return (randomPlacement = Math.floor(Math.random() * 10 + 1).toString());
}
// Generates a new random letter
function newLetter() {
  return (randomChar = letters[Math.floor(Math.random() * letters.length)]);
}

//randomly assigns a direction (vertical (false) or horizontal (true))
function orientation() {
  let direction = Math.floor(Math.random() * 100);
  if (direction > 50) {
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
    return false;
  }
}
//confirms space is not occupied by another ship// also will function to check for a ship when the user clicks
function checkSpace(args) {
  for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < AIFleet.length; j++) {
      if (AIFleet[j].location.includes(args[i])) return true;
    }
  }
  return false;
}
//places ship randomly in a valid position with AIFleet[i] as arguement
function placeAIShip(ship) {
  do {
    newLetter();
    newNum();
    orientation();
    let tempChar = letters.indexOf(randomChar);
    if (orientation() && randomPlacement < 10) {
      for (let n = 0; n < ship.shipHealth; n++) {
        if (
          tempChar > 10 ||
          randomPlacement > 10 ||
          checkSpace([randomChar + randomPlacement])
        ) {
          ship.location = [];
        } else {
          ship.location.push(randomChar + randomPlacement++);
        }
      }
    } else if (!orientation() && tempChar < 9) {
      for (let n = 0; n < ship.shipHealth; n++) {
        let updatedChar = letters[tempChar];
        if (
          tempChar > 9 ||
          updatedChar == undefined ||
          checkSpace([updatedChar + randomPlacement])
        ) {
          ship.location = [];
        } else {
          ship.location.push(updatedChar + randomPlacement);
          tempChar++;
        }
      }
    }
  } while (ship.location.length == 0);
}
//places all AI ships with one function
function placeAIShips() {
  placeAIShip(AIFleet[0]);
  placeAIShip(AIFleet[1]);
  placeAIShip(AIFleet[2]);
  placeAIShip(AIFleet[3]);
  placeAIShip(AIFleet[4]);
}
// on userClick on the AI side of the board, will check if tile has already been selected
//if not it will add the selected tile id to an array of "selected tiles"
// loops through all AI ships to determine if the most recently selected tile id is part of the ships location
// if yes, call hit function to add to ships hit counter. then checks to see if shipHit is == to shipHealth
// if yes, ship is sunk. if ship is sunk endGame function determines if win conditions are met (i.e. all ships
// are shipSunk == true)
//if the most recently selected tile does not match any ship location, and no hit is called, will add "miss"
// to selected tile
function userClick() {
  const tile = document.querySelectorAll('[data=AI]');
  tile.forEach((tile) => {
    tile.addEventListener('click', (e) => {
      let domSelected = document.getElementById(e.target.id);
      if (selectedTiles.includes(domSelected.id)) {
        alert('Please Select a valid tile');
      } else if (!selectedTiles.includes(domSelected.id)) {
        selectedTiles.push(domSelected.id);
        for (let l in AIFleet) {
          if (
            AIFleet[l].location.includes(
              selectedTiles[selectedTiles.length - 1]
            )
          ) {
            AIFleet[l].hit();
            console.log('hit');
            domSelected.classList.add('hit');
            if (AIFleet[l].shipHit == AIFleet[l].shipHealth) {
              AIFleet[l].sunk();
              endGame();
            }
          }
        }
      }
      if (!domSelected.classList.contains('hit')) {
        domSelected.classList.add('miss');
        swapTurn()
      }
    });
  });
}
// checks each ship in both player's fleets. If all ships are sunk, win message is displayed
function endGame() {
  let AIfleetSunk;
  let playerFleetSunk;
  if (
    AIFleet[0].shipSink &&
    AIFleet[1].shipSink &&
    AIFleet[2].shipSink &&
    AIFleet[3].shipSink &&
    AIFleet[4].shipSink
  ) {
    AIfleetSunk = true;
  } else if (
    playerFleet[0].shipSink &&
    playerFleet[1].shipSink &&
    playerFleet[2].shipSink &&
    playerFleet[3].shipSink &&
    playerFleet[4].shipSink
  ) {
    playerFleetSunk = true;
  }
  if (AIfleetSunk) {
    alert('Player wins');
    resetGame();
  } else if (playerFleetSunk) {
    alert('AI wins. Computers are our masters now.');
  }
}
//reset resets AI
function resetGame() {
  const tile = document.querySelectorAll('.tile');
  tile.forEach((tile) => {
    tile.classList.remove('hit');
    tile.classList.remove('miss');
  });
  selectedTiles = [];
  for(let i =0; i< AIFleet.length;i++){
    AIFleet[i].shipHit = 0
  }
  placeAIShips();
}

function checkPlacement(args) {
  for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < playerFleet.length; j++) {
      if (playerFleet[j].location.includes(args[i])) return true;
    }
  }
  return false;
}
 let rotate=  document.getElementById('rotate')
 let horizontal = true

  rotate.addEventListener('click', () => {
  horizontal = !horizontal
  console.log(horizontal)
  })

function playerTileSelect(){
  const tile = document.querySelectorAll('[data=player]');
  tile.forEach((tile) => {
    tile.addEventListener('click', (e) => {
    let domSelected = document.getElementById(e.target.id);
    let tempArr = domSelected.id.split('')
    let char = tempArr[6]
    let num = tempArr[7]
    console.log(char+num)
  })})
  
}



export { placeAIShips, checkSpace, shipsPlaced, userClick, playerTileSelect };
