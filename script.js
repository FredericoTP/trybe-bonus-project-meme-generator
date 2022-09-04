const inputText = document.getElementById('text-input');
const memeImageContainer = document.getElementById('meme-image-container');
const memeText = document.getElementById('meme-text');

function showTextInPreview(event) {
  memeText.innerText = event.target.value;
}

inputText.addEventListener('keyup', showTextInPreview);
