

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


