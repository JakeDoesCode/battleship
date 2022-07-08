// creates board for player
function makePlayerBoard() {
  const board = document.querySelector('.playerBoard');
  for (let i = 1; i < 11; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.setAttribute('id', 'player' + 'A' + i);
    tile.setAttribute('data', 'player');
    board.appendChild(tile);
  }
  for (let i = 1; i < 11; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.setAttribute('id', 'player' + 'B' + i);
    tile.setAttribute('data', 'player');
    board.appendChild(tile);
  }
  for (let i = 1; i < 11; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.setAttribute('id', 'player' + 'C' + i);
    tile.setAttribute('data', 'player');
    board.appendChild(tile);
  }
  for (let i = 1; i < 11; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.setAttribute('id', 'player' + 'D' + i);
    tile.setAttribute('data', 'player');
    board.appendChild(tile);
  }
  for (let i = 1; i < 11; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.setAttribute('id', 'player' + 'E' + i);
    tile.setAttribute('data', 'player');
    board.appendChild(tile);
  }
  for (let i = 1; i < 11; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.setAttribute('id', 'player' + 'F' + i);
    tile.setAttribute('data', 'player');
    board.appendChild(tile);
  }
  for (let i = 1; i < 11; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.setAttribute('id', 'player' + 'G' + i);
    tile.setAttribute('data', 'player');
    board.appendChild(tile);
  }
  for (let i = 1; i < 11; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.setAttribute('id', 'player' + 'H' + i);
    tile.setAttribute('data', 'player');
    board.appendChild(tile);
  }
  for (let i = 1; i < 11; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.setAttribute('id', 'player' + 'I' + i);
    tile.setAttribute('data', 'player');
    board.appendChild(tile);
  }
  for (let i = 1; i < 11; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.setAttribute('id', 'player' + 'J' + i);
    tile.setAttribute('data', 'player');
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

export { makePlayerBoard, makeAIBoard };
