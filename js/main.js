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
let winSwtc;
let cpuNums = [];
let playerNums = [];

  /*----- cached elements  -----*/
// text messages
const winLossText = document.querySelector("#winLossText");

/*
// color selections
const redBtn = document.querySelector('#redBtn').addEventListener('click', slctRed);
const grnBtn = document.querySelector('#grnBtn').addEventListener('click', slctGrn);
const bluBtn = document.querySelector('#bluBtn').addEventListener('click', slctBlu);
const orgBtn = document.querySelector('#orgBtn').addEventListener('click', slctOrg);

// controls
const playStartBtn = document.querySelector('#startGame').addEventListener('click', playStart);
const playAgainBtn = document.querySelector('#playAgain').addEventListener('click', playAgain);
const quirGameBtn = document.querySelector('#quitGame').addEventListener('click', quitGame);
*/

  /*----- event listeners -----*/



/*----- functions -----*/
// init();


function winLossFunc(winLoss) {
  if (winLoss === 'w') {
    winLossText.innerText = winLossTexts[0]["button text"];
  } else if (winLoss === 'l') {
    winLossText.innerText = winLossTexts[1]["button text"];
  }
}

winLossFunc(winSwtc);




