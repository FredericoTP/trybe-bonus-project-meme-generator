const inputText = document.getElementById('text-input');
const inputImg = document.getElementById('meme-insert');
const memeImageContainer = document.getElementById('meme-image-container');
const memeText = document.getElementById('meme-text');
const memeImage = document.getElementById('meme-image');
const imagePreview = document.getElementById('image-preview');

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