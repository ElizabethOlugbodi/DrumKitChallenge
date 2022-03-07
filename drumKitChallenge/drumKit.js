window.addEventListener("keydown", function(e) {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(audio) {
        audio.play();
        audio.CurrentTime = 0;
        this.classList.add("playing");
        } else {
            return;
        }
});
let kk = document.querySelectorAll(".key")
kk.forEach(function(e) {
    e.addEventListener('transitionend',remove);
});

function remove() {
    if(k.propertyName = "transform") {
        this.classList.remove("playing");
    } else {
        return;
    }
}