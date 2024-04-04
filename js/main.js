  /*----- constants -----*/
// Objects
const winLossTexts = [
  {
    name: "win message",
    "button text": "You've Won!",
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
let board;
let turn;
let winner;


  /*----- cached elements  -----*/
// text messages
const winLossText = document.querySelector("#winLossText");


// color selections
const redBtn = document.querySelector('#redBtn').addEventListener('click', );
const grnBtn = document.querySelector('#grnBtn').addEventListener('click', );
const bluBtn = document.querySelector('#bluBtn').addEventListener('click', );
const orgBtn = document.querySelector('#orgBtn').addEventListener('click', );

// controls
const playStartBtn = document.querySelector('#startGame').addEventListener('click', playStart);
const playAgainBtn = document.querySelector('#playAgain').addEventListener('click', playAgain);
const quirGameBtn = document.querySelector('#quitGame').addEventListener('click', quitGame);


  /*----- event listeners -----*/



/*----- functions -----*/
// init();

board = [redBtn, grnBtn, bluBtn, orgBtn];






