function setSpeed() {
    const videos = document.getElementByTagName("video");
    videos.playbackRate = 16.0;

}

window.addEventListener("load", setSpeed);