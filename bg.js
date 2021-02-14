const body = document.querySelector("body");
const IMAGE_NUMBER = 3;

function genRandom() {
    const number = Math.floor(Math.random() * IMAGE_NUMBER) + 1;
    return number;
}

function handleImgLoad() {
    // console.log('image loading end');
}

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber}.jpg`;
    image.classList.add("bgImage");
    image.addEventListener("loadend", handleImgLoad)
    body.appendChild(image);
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();