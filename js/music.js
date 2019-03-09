var x = document.getElementById("myAudio");
$(#)
function enableControls() { 
  x.controls = true;
  x.load();
} 

function disableControls() { 
  x.controls = false;
  x.load();
} 
 
function checkControls() { 
  alert(x.controls);
} 