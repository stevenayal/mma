var audio = document.getElementById("myAudio");
var playBtn = document.getElementById("playBtn");
var pauseBtn = document.getElementById("pauseBtn");
var progressBar = document.getElementById("progressBar");

function playAudio() {
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

playBtn.addEventListener("click", playAudio);
pauseBtn.addEventListener("click", pauseAudio);

audio.addEventListener("timeupdate", function() {
  var duration = audio.duration;
  var currentTime = audio.currentTime;
  var progress = (currentTime / duration) * 100;
  progressBar.value = progress;
});