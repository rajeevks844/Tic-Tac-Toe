let modebtn = document.querySelector('#mode-box');
let currmode = 'light';

modebtn.onclick = () => {
    if (currmode === 'light') {
        document.querySelector('body').classList.add('dark-mode');
        document.querySelector('body').classList.remove('light-mode');
        currmode = 'Dark Mode ';
        modebtn.innerText = 'Night Mode 🌚';
       
    } else {
        currmode = 'light'; 
        document.querySelector('body').classList.remove('dark-mode');
        document.querySelector('body').classList.add('light-mode');
        modebtn.innerText = 'Day Mode 🌞';
        
    }
};

// main
let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('.reset-btn');
let newGameBtn = document.querySelector("#playagain");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true; // playerX, PlayerO

const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let count = 0;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0 === true){
        
            box.innerText = "X"
            turn0 = false;
        } else {

            box.innerText = "O"
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
        count++;
        let isWinner = checkWinner();
        if (count === 9 && !isWinner) {
            gameDraw();
    }
    })
});

const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
    for (let pattern of winningCombos){
        let box1 = boxes[pattern[0]].innerText;
        let box2 = boxes[pattern[1]].innerText;
        let box3 = boxes[pattern[2]].innerText; 
        if (box1 !== "" && box1 === box2 && box2 === box3){
            if (box1 === box2 && box2 === box3){
                showWinner(box1);
            } 
        }
    }
};



const disablebtn  = () => {
    for (let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};


const showWinner = (winner) => {
  msg.innerHTML = `Congratulations,  Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disablebtn();
};
// reset
resetbtn.onclick = () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    }); 
    turn0 = true;
};
newGameBtn.onclick = () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    }); 
    turn0 = true;
    msgContainer.classList.add("hide");
};