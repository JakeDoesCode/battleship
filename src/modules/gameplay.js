import { AIFleet, playerFleet } from "..";

//variables
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
let randomPlacement = Math.floor(Math.random() * 10 + 1).toString();
let randomChar = letters[Math.floor(Math.random() * letters.length)];

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
  
  function placeAIShip(ship) {
    //loops over until conditions are met and ships are placed in valid locations
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
    console.table(ship.location)
  }


  export {placeAIShip, checkSpace, shipsPlaced}