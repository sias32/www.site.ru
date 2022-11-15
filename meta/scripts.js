let body = document.querySelector("body");
let infoText = body.querySelector(".nav-button-text");
let infoButton = body.querySelector(".nav-button");

infoButton.onclick = function() {
    infoText.textContent = "Тсс это JS, не пали что я тут";
}