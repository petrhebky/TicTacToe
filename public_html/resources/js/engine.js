//window.onload = function ()
//{
//  init();
//};
//
//function init() {
//  
//}

let prvniHracNaTahu = true;
let winner = 0;
let pole1 = {id:1, clicked:false, player:0, class:''};
let pole2 = {id:2, clicked:false, player:0, class:''};
let pole3 = {id:3, clicked:false, player:0, class:''};
let pole4 = {id:4, clicked:false, player:0, class:''};
let pole5 = {id:5, clicked:false, player:0, class:''};
let pole6 = {id:6, clicked:false, player:0, class:''};
let pole7 = {id:7, clicked:false, player:0, class:''};
let pole8 = {id:8, clicked:false, player:0, class:''};
let pole9 = {id:9, clicked:false, player:0, class:''};
var poleAll = [pole1, pole2, pole3, pole4, pole5, pole6, pole7, pole8, pole9];

function poleClick(poleCislo) {
  poleAll.forEach(function(pole) {
    if (poleCislo == pole.id) {
      if (!pole.clicked) {
        pole.clicked = true;
        if (prvniHracNaTahu) {
          pole.player = 1;
          pole.class = 'crossBG';
          prvniHracNaTahu = !prvniHracNaTahu;
        } else {
          pole.player = 2;
          pole.class = 'circleBG';
          prvniHracNaTahu = !prvniHracNaTahu;
        }
        handleWin();
        render();
      }
      return;
    }
  });
}

function render() {
  poleAll.forEach(function(pole) {
    document.getElementById('pole'+pole.id).className = 'pole ' + pole.class;
  });
  document.getElementById('playersIcon').className = prvniHracNaTahu ? 'crossBG' : 'circleBG';
  if (winner === 0) {
    document.getElementById('winnerWrap').style.visibility = "hidden";
  } else {
    document.getElementById('winner').className = (winner === 1) ? 'crossBG' : 'circleBG';
    document.getElementById('winnerWrap').style.visibility = "visible";
  }
}

function handleWin() {
  winner = checkWin();
  if (winner !== 0) {
    poleAll.forEach(function(pole) {
      pole.clicked = true;
    });
  }
}

function checkWin() {
  //check rows
  if (pole1.player === pole2.player && pole2.player === pole3.player && pole1.player !== 0) { return pole1.player; }
  if (pole4.player === pole5.player && pole5.player === pole6.player && pole4.player !== 0) { return pole4.player; }
  if (pole7.player === pole8.player && pole8.player === pole9.player && pole7.player !== 0) { return pole7.player; }
  //check columns
  if (pole1.player === pole4.player && pole4.player === pole7.player && pole1.player !== 0) { return pole1.player; }
  if (pole2.player === pole5.player && pole5.player === pole8.player && pole2.player !== 0) { return pole2.player; }
  if (pole3.player === pole6.player && pole6.player === pole9.player && pole3.player !== 0) { return pole3.player; }
  //check diagonal
  if (pole1.player === pole5.player && pole5.player === pole9.player && pole1.player !== 0) { return pole1.player; }
  if (pole3.player === pole5.player && pole5.player === pole7.player && pole3.player !== 0) { return pole3.player; }
  else {return 0;}
}

function reset() {
  poleAll.forEach(function(pole) {
    pole.player = 0;
    pole.clicked = false;
    pole.class = '';
  });
  prvniHracNaTahu = true;
  winner = 0;
  render();
}

function vypisPole() {
  console.log(poleAll);
}