import { get } from 'lodash';
import { AIFleet, playerFleet } from '..';

// removing placedShip if invalid placement

//variables
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
let randomPlacement = Math.floor(Math.random() * 10 + 1).toString();
let randomChar = letters[Math.floor(Math.random() * letters.length)];
let selectedTiles = [];
let playerTurn = true;
let AISelectedTiles = [];
let placementPhase = true;
let gamePhase = false;

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

function userClick() {
  let playerHit = true;

  const tile = document.querySelectorAll('[data=AI]');
  let valid = true;
  tile.forEach((tile) => {
    tile.addEventListener('click', (e) => {
      let domSelected = document.getElementById(e.target.id);
      if (playerTurn) {
        if (selectedTiles.includes(domSelected.id)) {
          alert('Please Select a valid tile');
          valid = false;
        } else if (!selectedTiles.includes(domSelected.id)) {
          selectedTiles.push(domSelected.id);
          valid = true;
          for (let l in AIFleet) {
            if (
              AIFleet[l].location.includes(
                selectedTiles[selectedTiles.length - 1]
              )
            ) {
              AIFleet[l].hit();
              console.log('hit');
              domSelected.classList.add('hit');
              playerHit = true;

              if (AIFleet[l].shipHit == AIFleet[l].shipHealth) {
                AIFleet[l].sunk();
                endGame();
              }
            }
          }
        }
        if (!domSelected.classList.contains('hit')) {
          domSelected.classList.add('miss');
          playerHit = false;
        }
      }
      if (!playerHit && valid) {
        swapTurn();
        AITurn();
      }
    });
  });
}

function AITurn() {
  let num = newNum();
  let letter = newLetter();
  let selectedCoordinate = document.getElementById(
    'player,' + letter + ',' + num
  );
  let AIValid = false;
  do {
    if (!playerTurn && !AISelectedTiles.includes(letter + num)) {
      AISelectedTiles.push(letter + num);
      AIValid = true;
    } else if (AISelectedTiles.includes(letter + num)) {
      letter = newLetter();
      num = newNum();
      selectedCoordinate = document.getElementById(
        'player,' + letter + ',' + num
      );
    }
  } while (!AIValid);
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
  }
  if (!selectedCoordinate.classList.contains('hit')) {
    console.log('miss');
    selectedCoordinate.classList.add('miss');
    swapTurn();
  } else if (selectedCoordinate.classList.contains('hit')) {
    AITurn();
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
  AISelectedTiles = [];
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
// if contains placedShip do nothing
function playerPlaceShip(ship, grid) {
  let playerShipPlaced;
  let tempArr = grid.split(',');
  let char = tempArr[1];
  let number = tempArr[2];
  let index = letters.indexOf(char);
  if (horizontal && Number(number) + ship.shipHealth <= 11) {
    for (let i = 0; i < ship.shipHealth; i++) {
      if (checkPlacement([char + number])) {
        ship.location = [];
        alert('Please select a valid space');
        playerShipPlaced = false;
        return playerShipPlaced;
      } else if (!checkPlacement([char + number])) {
        ship.location.push(char + number);
        number++;
      }
    }
    playerShipPlaced = true;
    return playerShipPlaced;
  } else if (!horizontal && index + ship.shipHealth <= 11) {
    for (let i = 0; i < ship.shipHealth; i++) {
      let newChar = letters[index];
      if (checkPlacement([newChar + number])) {
        ship.location = [];
        alert('Please select a valid space');
        playerShipPlaced = false;
        return playerShipPlaced;
      } else if (!checkPlacement([newChar + number])) {
        ship.location.push(newChar + number);
        index++;
      }
    }
    playerShipPlaced = true;
    return playerShipPlaced;
  }
}
function endPhase() {
  placementPhase = !placementPhase;
  gamePhase = !gamePhase;
}
function playerSelect() {
  const playerTile = document.querySelectorAll('[data=player]');
  if (placementPhase) {
    playerTile.forEach(
      (tile) => {
        tile.addEventListener('click', (e) => {
          let selectedTile = e.target.id;
          if (playerFleet[0].location.length < 5) {
            console.log(selectedTile);
            playerPlaceShip(playerFleet[0], selectedTile);
            playerFleet[0].location.forEach((square) => {
              let idArr = square.split('');
              let char = idArr[0];
              let num = idArr[1];
              let domSelected = document.getElementById(
                'player' + ',' + char + ',' + num
              );
              domSelected.classList.add('placedShip');
            });
            console.log(playerFleet[0].location);
          } else if (
            playerFleet[0].location.length == 5 &&
            playerFleet[1].location.length < 4
          ) {
            console.log(selectedTile);
            playerPlaceShip(playerFleet[1], selectedTile);
            playerFleet[1].location.forEach((square) => {
              let idArr = square.split('');
              let char = idArr[0];
              let num = idArr[1];
              let domSelected = document.getElementById(
                'player' + ',' + char + ',' + num
              );
              domSelected.classList.add('placedShip');
            });
            console.log(playerFleet[1].location);
          } else if (
            playerFleet[0].location.length == 5 &&
            playerFleet[1].location.length == 4 &&
            playerFleet[2].location.length < 3
          ) {
            console.log(selectedTile);
            playerPlaceShip(playerFleet[2], selectedTile);
            playerFleet[2].location.forEach((square) => {
              let idArr = square.split('');
              let char = idArr[0];
              let num = idArr[1];
              let domSelected = document.getElementById(
                'player' + ',' + char + ',' + num
              );
              domSelected.classList.add('placedShip');
            });
            console.log(playerFleet[2].location);
          } else if (
            playerFleet[0].location.length == 5 &&
            playerFleet[1].location.length == 4 &&
            playerFleet[2].location.length == 3 &&
            playerFleet[3].location.length < 3
          ) {
            console.log(selectedTile);
            playerPlaceShip(playerFleet[3], selectedTile);
            playerFleet[3].location.forEach((square) => {
              let idArr = square.split('');
              let char = idArr[0];
              let num = idArr[1];
              let domSelected = document.getElementById(
                'player' + ',' + char + ',' + num
              );
              domSelected.classList.add('placedShip');
            });
            console.log(playerFleet[3].location);
          } else if (
            playerFleet[0].location.length == 5 &&
            playerFleet[1].location.length == 4 &&
            playerFleet[2].location.length == 3 &&
            playerFleet[3].location.length == 3 &&
            playerFleet[4].location.length < 2
          ) {
            console.log(selectedTile);
            playerPlaceShip(playerFleet[4], selectedTile);
            playerFleet[4].location.forEach((square) => {
              let idArr = square.split('');
              let char = idArr[0];
              let num = idArr[1];
              let domSelected = document.getElementById(
                'player' + ',' + char + ',' + num
              );
              domSelected.classList.add('placedShip');
            });
            console.log(playerFleet[4].location);
            endPhase();
          }
        });
      },
      { once: true }
    );
  }
}
function gameLoop() {
  playerSelect();
  userClick();
}

export {
  placeAIFleet,
  checkSpace,
  shipsPlaced,
  AITurn,
  playerSelect,
  userClick,
  gameLoop,
};
