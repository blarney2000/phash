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

let canvas = document.createElement('canvas');
let ctx = canvas.getContext('2d');

function getScaledImage(imageid) {
  ctx.drawImage(document.getElementById('squirrel1'), 0, 0);
  let img = canvas.toDataURL('image/png');
  console.log(img);

  let image = new Image();
  image.onload = function () {
    ctx.drawImage(image, 0, 0);
  };
  image.src = img;
  //document.getElementById('scaled').src = img;

  // const img = document.getElementById('squirrel1').Image;
  // console.log(img);
  // image.onload = () => {
  //   ctx.drawImage(img, 0, 0, 8, 8);
  // };
  // document.getElementById('scaled').Image = ctx.Image;
}
getScaledImage();
function scaleImage() {
  ctx.drawImage;
}

function getPhashRows() {}
