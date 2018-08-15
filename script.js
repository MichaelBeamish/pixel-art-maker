//CREATE CANVAS:
for (let i = 0; i < 30; i++) {
  document.getElementById("display").insertAdjacentHTML(
    "beforeend",
    `
        <div>
    `
  );
  for (let j = 0; j < 60; j++) {
    document.getElementById("display").insertAdjacentHTML(
      "beforeend",
      `
            <div class="square"></div>
        `
    );
  }
  document.getElementById("display").insertAdjacentHTML(
    "beforeend",
    `
        </div>
    `
  );
}

//ARRAY FOR COLORS:
let colors = [
  "maroon",
  "red",
  "orange",
  "yellow",
  "olive",
  "green",
  "purple",
  "fuchsia",
  "lime",
  "teal",
  "aqua",
  "blue",
  "navy",
  "black",
  "gray",
  "silver",
  "white"
];


//THIS VARIABLE WILL HOLD THE VALUE OF THE SELECTED COLOR.
let chosenColor;


//CREATE PAINT PALETTE:
for (let i = 0; i < colors.length; i++) {
  document.getElementById("palette").insertAdjacentHTML(
    "beforeend",
    `
        <div class="paintSquare paintColors" style="background-color:${colors[i]}"></div>
    `
  );
}





let allColors = document.querySelectorAll(".paintColors");
let allBlocks = document.querySelectorAll(".square");


//EVENT LISTENERS:
allColors.forEach(el => {
  el.addEventListener("click", e => {
    chosenColor = e.target.style.backgroundColor;
  });
});

var mouseDown = 0;
document.body.onmousedown = function() { 
  ++mouseDown;
}
document.body.onmouseup = function() {
  --mouseDown;
}

allBlocks.forEach(el => {
  el.addEventListener("mouseover", e => {
      if(mouseDown){
        e.target.style.backgroundColor = chosenColor;
      }
  });
});