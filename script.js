const inputText = document.getElementById('text-input');
const inputImg = document.getElementById('meme-insert');
const memeImageContainer = document.getElementById('meme-image-container');
const memeText = document.getElementById('meme-text');
const memeImage = document.getElementById('meme-image');
const imagePreview = document.getElementById('image-preview');
const buttonFire = document.getElementById('fire');
const buttonWater = document.getElementById('water');
const buttonEarth = document.getElementById('earth');

function showTextInPreview(event) {
  memeText.innerText = event.target.value;
}

inputText.addEventListener('keyup', showTextInPreview);

function showPreview(event) {
  if(event.target.files.length > 0) {
    let src = URL.createObjectURL(event.target.files[0]);
    imagePreview.src = src;
  }
}

inputImg.addEventListener('change', showPreview);

function changeBorderFire() {
  memeImageContainer.style.border = '3px dashed rgb(255, 0, 0)';
}

function changeBorderWater() {
  memeImageContainer.style.border = '5px double rgb(0, 0, 255)';
}

function changeBorderEarth() {
  memeImageContainer.style.border = '6px groove rgb(0, 128, 0)';
}

buttonFire.addEventListener('click', changeBorderFire);
buttonWater.addEventListener('click', changeBorderWater);
buttonEarth.addEventListener('click', changeBorderEarth);
