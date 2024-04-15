let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msgCont = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let playerO = true;
const willWinner = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
];

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = ""
    }
};

const resetgame = () => {

    turnO = true;
    enableBoxes();
    msgCont.classList.add("hide");

};

const showWinner = (winner) => {

    msg.innerText = `Congratulations, ${winner} is winner`;
    msgCont.classList.remove("hide");
    disableBoxes();

};
const isWinner = () => {
    for (let pattern of willWinner) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("winner is", pos1);
                showWinner(pos1);
            }

        }
    }

};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (playerO) {
            box.style.color = "blue";
            box.innerText = "O";
            playerO = false;
        }
        else {
            box.style.color = "red";
            box.innerText = "X";
            playerO = true;
        }
        box.disabled = true;
        isWinner();
    });
});

resetbtn.addEventListener("click", resetgame);
newbtn.addEventListener("click", resetgame);
