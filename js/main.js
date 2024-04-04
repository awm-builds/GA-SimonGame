  /*----- constants -----*/

// text messages
const winLossText = document.querySelector("#winLossText");


// color selections
const redBtn = document.querySelector('#redBtn').addEventListener('click', playStart);
const grnBtn = document.querySelector('#grnBtn').addEventListener('click', playStart);
const bluBtn = document.querySelector('#bluBtn').addEventListener('click', playStart);
const orgBtn = document.querySelector('#orgBtn').addEventListener('click', playStart);

// controls
const playStartBtn = document.querySelector('#startGame').addEventListener('click', playStart);
const playAgainBtn = document.querySelector('#playAgain').addEventListener('click', playAgain);
const quirGameBtn = document.querySelector('#quitGame').addEventListener('click', quitGame);

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


  /*----- cached elements  -----*/


  /*----- event listeners -----*/


/*----- functions -----*/
  





