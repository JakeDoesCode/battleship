

// creates board for player 
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
//creates board for AI
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

export { makePlayerBoard, makeAIBoard};
