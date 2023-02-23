const div = document.createElement("div");
const reset = document.querySelector("input.reset");
const color = document.querySelector("input.color");

function createGrid(size) {
  const grid = document.querySelector(".grid-container");
  //remove previous grid
  removeOldGrid();
  //create new grid size
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const div = document.createElement("div");
      div.classList.add("square");
      grid.appendChild(div);
      div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "black";
      });
    }
  }
}

function clearGrid() {
  const square = document.querySelectorAll(".square");
  square.forEach((square) => {
    square.style.backgroundColor = "white";
  });
}

function removeOldGrid() {
  const divs = document.querySelectorAll(".grid-container div");
  divs.forEach((div) => div.remove());
}

const slider = document.querySelector(".input .slider input");
const output = document.querySelector(".input .slider output");
slider.addEventListener("input", (e) => {
  output.innerHTML = e.target.value + "x" + e.target.value;
  createGrid(e.target.value);
});

reset.addEventListener("click", clearGrid);

createGrid(16);
