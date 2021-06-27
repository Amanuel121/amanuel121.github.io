let defaultSpeed = 250;
let text = "";
let cAnimation;
let temp = 0;
let frames;

window.onload = function () {
    // disable stop button => 
    document.getElementById("stop").disabled = true;

    // when start button clicked
    let start = document.getElementById("start");
    start.onclick = startAnim;

    // when stop button clicked
    let stop = document.getElementById("stop");
    stop.onclick = stopAnimation;

    // when speed changed
    let speed = document.getElementById("turbo");
    speed.onchange = speedChange;
}
function startAnim() {
    // starting animation
    let animationType = document.getElementById("animation");
    let content = ANIMATIONS[animationType.value];
    let textBox = document.getElementById("text-area");

    text = textBox.value;

    frames = content.split("=====\n");

    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    animationType.disabled = true;
    cAnimation = setInterval(animateFrame, defaultSpeed, frames); // need modificaiton because it is not supported in IE9 and erlier versions
}
function animateFrame(input) {
    let animationBox = document.getElementById("text-area");
    animationBox.value = frames[(temp % input.length)];
    temp++;
}
function speedChange() {
    const speed = document.getElementById("turbo").checked;

    if (speed) {
        defaultSpeed = 50;
        clearInterval(cAnimation);
        cAnimation = setInterval(animateFrame, defaultSpeed, frames);
    } else {
        defaultSpeed = 250;
        clearInterval(cAnimation);
        cAnimation = setInterval(animateFrame, defaultSpeed, frames);
    }
}
function stopAnimation() {
    let animationBox = document.getElementById("text-area");
    animationBox.value = text;

    text = '';
    clearInterval(cAnimation);
    temp = 0;
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
    document.getElementById("animation").disabled = false;

}
function changeAnimation() {
    let animType = document.getElementById("animation").value;
    if (animType === "Blank") {
        console.log("set the text area empty value");
    } else {
        document.getElementById("text-area").innerHTML =
            ANIMATIONS[animType];
    }
}
function changeFont() {
    const selectedFontSize = document.getElementById("fontSizeType").value;
    document.getElementById("text-area").style.fontSize = selectedFontSize;
}