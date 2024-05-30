const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const textInput = document.getElementById('text-input');
const fontSizeInput = document.getElementById('fontSize');
let fontSize = parseInt(fontSizeInput.value);
const image = new Image();
image.src = './img/sign.webp';

image.onload = () => {
  initializeCanvas();
  drawImageWithText();
};

textInput.addEventListener('input', drawImageWithText);
fontSizeInput.addEventListener('input', () => {
  fontSize = parseInt(fontSizeInput.value);
  drawImageWithText();
});

function initializeCanvas() {
  canvas.width = image.width;
  canvas.height = image.height;
}

function drawImageWithText() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(image, 0, 0);
  ctx.font = `${fontSize}px Arial`;
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  ctx.fillText(textInput.value, canvas.width / 2, canvas.height / 1.8);
  updateCurrentFontSize();
}

function downloadImage() {
    const randomCode = Math.floor(Math.random() * 100).toString().padStart(2, '0');
    const link = document.createElement('a');
    link.download = `edited_image_${randomCode}.png`;
    link.href = canvas.toDataURL();
    link.click();
  }
function updateCurrentFontSize() {
  const currentFontSizeElement = document.getElementById('current-font-size');
  currentFontSizeElement.textContent = fontSize;
}
