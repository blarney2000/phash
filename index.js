// Import stylesheets
import './style.css';
//hello

const pHashElement = document.getElementById('pHash');

for (let i = 0; i < 64; i++) {
  const cell = document.createElement('div');
  cell.innerHTML = `<div style=" text-align: center; background-color: blue; color: gray; width: 22px; height: 22px;">${
    i + 1
  }</div>`;
  pHashElement.append(cell);
}

function scaleImage(){
  let img = new Image();
  let canvas = document.createElement('canvas')
  let ctx = canvas.getContext('2d')
  

}

function getPhashRows(){

}