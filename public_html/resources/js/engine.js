//window.onload = function ()
//{
//  init();
//};
//
//function init() {
//  
//}

let prvniHracNaTahu = true;
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
}

function zjistiVyhru() {
  
}

function reset() {
  poleAll.forEach(function(pole) {
    pole.player = 0;
    pole.clicked = false;
    pole.class = '';
  });
  prvniHracNaTahu = true;
  render();
}

function vypisPole() {
  console.log(poleAll);
}