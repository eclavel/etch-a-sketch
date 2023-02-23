const reset = document.querySelector("input.reset");
const colorInput = document.querySelector("input.color");
const randomColor = document.querySelector("button.random");
let currentColor = "black";
let randomRGB = false;

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
        if(!randomRGB){
          div.style.backgroundColor = currentColor;
        }else{
          div.style.backgroundColor = getRandomColor();
        }
      });
    }
  }
}

function clearGrid() {
  randomRGB = false;
  const square = document.querySelectorAll(".square");
  square.forEach((square) => {
    square.style.backgroundColor = "white";
  });
}

function removeOldGrid() {
  const divs = document.querySelectorAll(".grid-container div");
  divs.forEach((div) => div.remove());
}

function getRandomColor(){
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const slider = document.querySelector(".input .slider input");
const output = document.querySelector(".input .slider output");
slider.addEventListener("input", (e) => {
  output.innerHTML = e.target.value + "x" + e.target.value;
  createGrid(e.target.value);
});

colorInput.addEventListener("change",e =>{
  randomRGB = false;
  currentColor = e.target.value;
})

randomColor.addEventListener("click", () => {
  randomRGB = true;})

reset.addEventListener("click", clearGrid);

createGrid(16);
