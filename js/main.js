  /*----- constants -----*/

const playNew = new Audio;


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
let level = 0;

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
grnBtn.addEventListener('click', playBtn);
bluBtn.addEventListener('click', playBtn);
ylwBtn.addEventListener('click', playBtn);

// event test



function playBtn() {
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

function playBtn() {
  playNew.src = 'audio/pickBtnSnd.wav';
  playNew.play();
}

function startGame() { 

}

// Test Iteration Func
const boardSlcts = [0, 1, 2, 3];
let gamePattern = [];
let userClickedPattern = [];

const numGen = Math.floor(Math.random() * 4);

let difLvl = Math.floor(Math.random()*8)+4;

function livePattern() {
  userClickedPattern = [];
  for (i = 0; i < difLvl; i++) {
    const numGen = Math.floor(Math.random() * 4);
    let randomBtn = boardSlcts[numGen];
    gamePattern.push(randomBtn);
  }
    return gamePattern;
}

/*
// Iterate array into single values
function iterate(item) {
  // console.log(item);
}

// livePattern().forEach(iterate);
*/


const cpuFuncPic = [
  redAct,
  grnAct,
  bluAct,
  ylwAct
];


function redAct() { 
  // lightUp();
  // Sound
  console.log('Red Works!');
}
function grnAct() { 
  // lightUp();
  // Sound
  console.log('Green Works!');
}
function bluAct() { 
  // lightUp();
  // Sound
  console.log('Blue Works!');
}
function ylwAct() { 
  // lightUp();
  // Sound
  console.log('Yellow Works!');
}

livePattern();

for (i = 0; i < gamePattern.length; i++) {
  cpuFuncPic[gamePattern[i]]();
 }

function lightUp() {
  
 }


