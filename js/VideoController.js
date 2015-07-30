  
  
  
  // Event listener for the seek bar
seekBar.addEventListener("change", function() {
  // Calculate the new time
  var time = video.duration * (seekBar.value / 100);

  // Update the video time
  video.currentTime = time;
});
  
  // Update the seek bar as the video plays
  video.addEventListener("timeupdate", function() {
  // Calculate the slider value
  var value = (100 / video.duration) * video.currentTime;
  
  // Update the slider value
  seekBar.value = value;
  });
  
  // Pause the video when the slider handle is being dragged
  seekBar.addEventListener("mousedown", function() {
  video.pause();
  });
  
  // Play the video when the slider handle is dropped
  seekBar.addEventListener("mouseup", function() {
  video.play();
  });