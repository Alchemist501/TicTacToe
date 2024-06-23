let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset_btn");
let newGameBtn = document.querySelector("#new_btn");
let msgContainer = document.querySelector(".msg");
let msg = document.querySelector("p");
let text = "X";
let count = 0;
let patterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const clear = () => {
  text = "X";
  for (box of boxes) {
    box.innerText = "";
    box.disabled = false;
  }
  msgContainer.classList.add("hide");
  count = 0;
};
resetBtn.addEventListener("click", clear);
newGameBtn.addEventListener("click", clear);
const click = (e) => {
  e.target.innerText = text;
  e.target.disabled = true;
  if (text === "X") {
    text = "O";
  } else if (text === "O") {
    text = "X";
  }
  check();
};
for (box of boxes) {
  box.addEventListener("click", click);
}
const disableBoxes = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};
const check = () => {
  count++;
  for (pattern of patterns) {
    let pos1 = pattern[0];
    let pos2 = pattern[1];
    let pos3 = pattern[2];
    console.log(count);

    if (
      boxes[pos1].disabled === true &&
      boxes[pos2].disabled === true &&
      boxes[pos3].disabled === true
    ) {
      if (
        boxes[pos1].innerText === boxes[pos2].innerText &&
        boxes[pos3].innerText === boxes[pos2].innerText
      ) {
        text === "O"
          ? (msg.innerText = `Congratulations, winner is player1`)
          : (msg.innerText = `Congratulations, winner is player2`);
        msgContainer.classList.remove("hide");
        disableBoxes();
      }else if (count > 8) {
        msg.innerText = "DRAW!!!";
        msgContainer.classList.remove("hide");
      }
    }
  }
};
