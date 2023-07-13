const totalCells = [];
for (let i = 0; i < 76; i++) {
  totalCells.push(i);
}

function createBingoBoard() {
  const board = document.createElement("div");
  board.classList.add("bingo-board");

  for (let i = 1; i < 76; i++) {
    const cell = document.createElement("div");
    cell.classList.add("bingo-cell");
    cell.innerText = i;
    for (let j = 0; j < cell; i++) {
      totalCells.push(j);
    }

    board.appendChild(cell);
  }

  return board;
}

const tombolaContainer = document.getElementById("bingo-container");
tombolaContainer.appendChild(createBingoBoard());

const randomNum = function () {
  return Math.floor(Math.random() * 76) + 1;
};

const exctract = function () {
  const number = randomNum();
  console.log("extracted number" + number);
};

const button = document.getElementsByTagName("button");
button.addEventListener("click");
