const keys = document.querySelectorAll(".key");

function playSound(e) {
    const audioKey = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const keyAnimation = document.querySelector(
        `.key[data-key = "${e.keyCode}"]`
    );
    if (!audioKey) return; //stop function from running all together

    audioKey.currentTime = 0; //rewind the audio to the start
    audioKey.play();
    keyAnimation.classList.add("playing");
}
function removeTransition(e) {
    console.log(e);
    if (e.propertyName !== "transform") return; // skip it if it's not a transform
    this.classList.remove("playing");
}

window.addEventListener("keydown", playSound);

keys.forEach((e) => e.addEventListener("transitionend", removeTransition));
