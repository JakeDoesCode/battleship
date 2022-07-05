import { AIFleet, playerFleet } from '..';



//variables
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
let randomPlacement = Math.floor(Math.random() * 10 + 1).toString();
let randomChar = letters[Math.floor(Math.random() * letters.length)];
let selectedTiles = [];
let playerTurn = true;
let AISelectedTiles = [];
let placementPhase = false;
let gamePhase = true;

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
function placeAIFleet() {
  placeAIShip(AIFleet[0]);
  placeAIShip(AIFleet[1]);
  placeAIShip(AIFleet[2]);
  placeAIShip(AIFleet[3]);
  placeAIShip(AIFleet[4]);
}

//basic game loop. in game phase user can click, if the location is included in the AIFleet[i]'s loc
//arr, it will register as a hit
// if user selects a tile which has alread been selected, a prompt is given asking the user to select a valid tile
// if the the user selects a place occupied by AIFleet, the ship is hit. One is added to it's hit counter
// if the ship is sunk (shipHit counter matches shipHealth), the shipSunk becomes true
//  endGame runs, which checks to see if all ships in the fleet have been sunk.
// if yes, win message is displayed, if a ship is hit, but win conditions are not met, the player goes again
// once the player misses, the swap turn and AI turn function is called
function userClick() {
  let playerHit = true
  if(gamePhase){
  const tile = document.querySelectorAll('[data=AI]');
  let valid = true
  tile.forEach((tile) => {
    tile.addEventListener('click', (e) => {
      let domSelected = document.getElementById(e.target.id);
      if (playerTurn) {
        if (selectedTiles.includes(domSelected.id)) {
          alert('Please Select a valid tile');
          valid = false
        } else if (!selectedTiles.includes(domSelected.id)) {
          selectedTiles.push(domSelected.id);
          valid = true
          for (let l in AIFleet) {
            if (
              AIFleet[l].location.includes(
                selectedTiles[selectedTiles.length - 1]
              )
            ) {
              AIFleet[l].hit();
              console.log('hit');
              domSelected.classList.add('hit');
              playerHit = true
              
              if (AIFleet[l].shipHit == AIFleet[l].shipHealth) {
                AIFleet[l].sunk();
                endGame();
              }
            }
          }
        }if (!domSelected.classList.contains('hit')) {
          domSelected.classList.add('miss');
          playerHit = false
        }}if(!playerHit&&valid){
          swapTurn()
          AITurn()
        }

      
    });
  });
  } 
  }



function AITurn() {
let coordinate = newLetter() + newNum();
let selectedCoordinate = document.getElementById('player'+coordinate) 
let AIValid = false
do{ 
  if (!playerTurn && !AISelectedTiles.includes(coordinate)) {
    AISelectedTiles.push(coordinate); 
    AIValid = true
  }else if(AISelectedTiles.includes(coordinate)){
    coordinate = newLetter()+newNum()
  }}while(!AIValid)
  for (let l in playerFleet) {
    if (
      playerFleet[l].location.includes(
        AISelectedTiles[AISelectedTiles.length - 1]
      )
    ) {
      playerFleet[l].hit();
      selectedCoordinate.classList.add('hit');
      console.log('hit');
      if (playerFleet[l].shipHit == playerFleet[l].shipHealth) {
        playerFleet[l].sunk();
        endGame();
      } 
    }
  }if (!selectedCoordinate.classList.contains('hit')) {
        console.log('miss')
    selectedCoordinate.classList.add('miss');
    swapTurn();
    
  }else if(selectedCoordinate.classList.contains('hit')){
    AITurn()

  }
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
//reset resets AI and Player board, fleet location, and ship counter
function resetGame() {
  const tile = document.querySelectorAll('.tile');
  tile.forEach((tile) => {
    tile.classList.remove('hit');
    tile.classList.remove('miss');
    tile.classList.remove('placedShip');
  });
  selectedTiles = [];
  AISelectedTiles=[]
  for (let i = 0; i < AIFleet.length; i++) {
    AIFleet[i].shipHit = 0;
  }
  for (let i = 0; i < playerFleet.length; i++) {
    playerFleet[i].shipHit = 0;
  }
  placeAIFleet();
}

function checkPlacement(args) {
  for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < playerFleet.length; j++) {
      if (playerFleet[j].location.includes(args[i])) return true;
    }
  }
  return false;
}
let rotate = document.getElementById('rotate');
let horizontal = true;

rotate.addEventListener('click', () => {
  horizontal = !horizontal;
});

// ! Functions needed
// ! playerPlace

export { placeAIFleet, checkSpace, shipsPlaced, userClick, AITurn };
