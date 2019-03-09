/*global $*/


var x = document.getElementById("myAudio");

function enableControls() { 
  x.controls = true;
  x.load();
} 

function disableControls() { 
  x.controls = false;
  x.load();
} 
 
var clicknumber=0;
$(".playstop").click(function(){
    
    
    var num=clicknumber+++1;
    $("h1").html(num);
    if(num%2 !== 0){
        $(".h1").html("even");
        enableControls();
        }
    else if (num%2 === 0){
        $(".h1").html("odd");
        disableControls();
        }
    });