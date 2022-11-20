// Page load
var video = document.querySelector("#videoplayer");
video.removeAttribute("loop");
video.removeAttribute("autoplay"); 


// Play Button
document.querySelector("#play").addEventListener("click", function () {
  video.play();
  document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

// Pause Button
document.querySelector("#pause").addEventListener("click", function () {
  video.pause();
});

// Slow Down
const speedList = [0.5,1,2];
let speedPtr = 1;
document.querySelector("#slower").addEventListener("click", function () {
  if(speedPtr > 0){
    speedPtr--;
    video.playbackRate = speedList[speedPtr];
  }else{
    alert("Video is at slowest speed!");
  }
  // console.log(`New speed is ${video.playbackRate}`);s
});

// Speed Up
document.querySelector("#faster").addEventListener("click", function () {
  if(speedPtr < speedList.length - 1){
    speedPtr++;
    video.playbackRate = speedList[speedPtr];
  }else{
    alert("Video is at fastest speed!");
  }
  // console.log(`New speed is ${video.playbackRate}`);
});

// Skip Ahead
document.querySelector("#skip").addEventListener("click", function () {
  // console.log(`Original location ${video.currentTime}`);
  video.currentTime += 15;
  if (video.currentTime >= video.duration) {
    video.currentTime = 0;
  }
  // console.log(`Current location ${video.currentTime}`);
});

// Mute
document.querySelector("#mute").addEventListener("click", function () {
  if (video.muted) {
    video.muted = false;
    document.querySelector("#mute").innerHTML = "Mute";
  } else {
    video.muted = true;
    document.querySelector("#mute").innerHTML = "Unmute";
  }
});

// Volume Slider
document.querySelector("#slider").addEventListener("click", function () {
  video.volume = this.value / 100;
  console.log(video.volume);
  document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});