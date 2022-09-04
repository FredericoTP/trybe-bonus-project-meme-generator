const inputText = document.getElementById('text-input');
const inputImg = document.getElementById('meme-insert');
const memeImageContainer = document.getElementById('meme-image-container');
const memeText = document.getElementById('meme-text');
const memeImage = document.getElementById('meme-image');
const buttonFire = document.getElementById('fire');
const buttonWater = document.getElementById('water');
const buttonEarth = document.getElementById('earth');
const miniatureMeme1 = document.getElementById('meme-1');
const miniatureMeme2 = document.getElementById('meme-2');
const miniatureMeme3 = document.getElementById('meme-3');
const miniatureMeme4 = document.getElementById('meme-4');

function showTextInPreview(event) {
  memeText.innerText = event.target.value;
}

inputText.addEventListener('keyup', showTextInPreview);

function showPreview(event) {
  if(event.target.files.length > 0) {
    const src = URL.createObjectURL(event.target.files[0]);
    memeImage.src = src;
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

function imagePreviewExemple1() {
  const src = './imgs/meme1.png';
  memeImage.src = src;
}

function imagePreviewExemple2() {
  const src = './imgs/meme2.png';
  memeImage.src = src;
}

function imagePreviewExemple3() {
  const src = './imgs/meme3.png';
  memeImage.src = src;
}

function imagePreviewExemple4() {
  const src = './imgs/meme4.png';
  memeImage.src = src;
}

miniatureMeme1.addEventListener('click', imagePreviewExemple1);
miniatureMeme2.addEventListener('click', imagePreviewExemple2);
miniatureMeme3.addEventListener('click', imagePreviewExemple3);
miniatureMeme4.addEventListener('click', imagePreviewExemple4);
