  /*----- constants -----*/




// Objects
const winLossTexts = [
  {
    name: "win message",
    "button text": "You Win!",
  },
  {
    name: "lose message",
    "button text": "You Lose.",
  }
];

const playQuitBtns = [
  {
    name: "Play button",
    "button text": "Play",
  },
  {
    name: "Play Again button",
    "button text": "Play Again",
  },
  {
    name: "Quit Button",
    "button text": "Quit",
  }
];

  /*----- state variables -----*/
let board;  // Array ref 4 color selections
let turn;  // Cur player turn --> 0/1
let winLoseSwtc;
let cpuNums = [];
let playerNums = [];

  /*----- cached elements  -----*/
// text messages
const winLossText = document.querySelector("#winLossText");


// color selections
const redBtn = document.querySelector('#redBtn');
const grnBtn = document.querySelector('#grnBtn');
const bluBtn = document.querySelector('#bluBtn');
const ylwBtn = document.querySelector('#ylwBtn');

// controls
const playStartBtn = document.querySelector('#startGame');
const playAgainBtn = document.querySelector('#playAgain');
const quitGameBtn = document.querySelector('#quitGame');


  /*----- event listeners -----*/
redBtn.addEventListener('click', playBtn);

// event test
const playNew = new Audio;

function playBtn(name) {
  playNew.src = 'audio/pickBtnSnd.wav';
  playNew.play();
}

/*----- functions -----*/
init();

function init() {
  playAgainBtn.style.display = 'none';
  // render();
}

/*
render(){
}
*/

function winLossFunc(winLoss) {
  if (winLoss === 'w') {
    winLossText.innerText = winLossTexts[0]["button text"];
  } else if (winLoss === 'l') {
    winLossText.innerText = winLossTexts[1]["button text"];
  }
}

playStartBtn.onclick = function () {
  // startGame();
  playStartBtn.style.display = 'none';
};

// Clicking quit = You Lose, need to also unhide play again
quitGameBtn.onclick = function () {
  winLossFunc('l');
  playAgainBtn.style.display = '';
};

playAgainBtn.onclick = function () {
  // playAgain();
  playAgainBtn.style.display = 'none';
}

function startGame() { 

}

// Picks 1 of 4 numbers   // Test passed
function setPattern() { 
  const boardSlcts = [ 5, 6, 7, 8]; /*redBtn, grnBtn, bluBtn, ylwBtn*/
  const numGen = boardSlcts[Math.floor(Math.random() * boardSlcts.length)];

  return numGen;
}

// console.log(setPattern());

function cpuTurn() { 
  const livePattern = [...cpuNums];
  livePattern.push(setPattern());
}

// console.log(cpuTurn());








