window.addEventListener('DOMContentLoaded', (event) => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const textInput = document.getElementById('text-input');
  const fontSizeInput = document.getElementById('font-size');
  const textColorInput = document.getElementById('text-color');
  const fontFamilyInput = document.getElementById('font-family');

  let fontSize = parseInt(fontSizeInput.value);

  const image = new Image();
  image.src = './img/sign.webp';

  const downloadButton = document.querySelector('button');
  downloadButton.addEventListener('click', downloadImage);

  textInput.addEventListener('input', drawImageWithText);
  fontSizeInput.addEventListener('input', () => {
    fontSize = parseInt(fontSizeInput.value);
    drawImageWithText();
  });
  textColorInput.addEventListener('input', drawImageWithText);
  fontFamilyInput.addEventListener('change', drawImageWithText);

  image.onload = () => {
    initializeCanvas();
    drawImageWithText();
  };

  function initializeCanvas() {
    canvas.width = image.width;
    canvas.height = image.height;
  }

  function drawImageWithText() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 0, 0);

    const fontFamily = document.getElementById('font-family').value;
    ctx.font = `${fontSize}px ${fontFamily}`;
    ctx.fillStyle = document.getElementById('text-color').value;
    ctx.textAlign = 'center';
    ctx.fillText(textInput.value, canvas.width / 2, canvas.height / 1.8);

    updateCurrentFontSize();
  }

  function downloadImage() {
    const randomCode = Math.floor(Math.random() * 100).toString().padStart(2, '0');
    canvas.toBlob((blob) => {
      saveAs(blob, `edited_image_${randomCode}.png`);
    });
  }

  function updateCurrentFontSize() {
    const currentFontSizeElement = document.getElementById('current-font-size');
    currentFontSizeElement.textContent = fontSize;
  }

  function hideOnDesktop() {
    const browserWarning = document.getElementById('browser-warning');
    const isDesktop = window.innerWidth >= 768;
    if (isDesktop) {
      browserWarning.style.display = 'none';
    } else {
      browserWarning.style.display = 'block';
    }
  }

  function preventZoomAndScroll(event) {
    event.preventDefault();
  }

  window.addEventListener('resize', hideOnDesktop);
  window.addEventListener('load', hideOnDesktop);
});
