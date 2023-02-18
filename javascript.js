const container = document.querySelector('.grid-container');

function addDiv(num) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      const newDiv = document.createElement("div");
      container.appendChild(newDiv);
    }
  }
}

addDiv(16);

