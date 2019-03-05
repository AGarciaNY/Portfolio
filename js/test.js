/*global $*/
$(".pigla").click(function(){
    window.open("https://agarciany.github.io/piglaten/");
});
$(".rockp").click(function(){
    window.open("https://kingaldair.github.io/advanced_rockpaperscissors_startercode/");
});
$(".gifs").click(function(){
    window.open("https://agarciany.github.io/gif/");
});
$(".hagman").click(function(){
    window.open("https://kingaldair.github.io/unit13HangmanStarterCode/");
});
$(".helpingyou").click(function(){
    window.open("https://kingaldair.github.io/helping-you/");
});
$(".disor").click(function(){
    window.open("https://jalvarez2016.github.io/disorderhelper/");
});
$(".mario").click(function(){
    window.open("https://kingaldair.github.io/sidescroll-game/");
});
$(".school").click(function(){
    window.open("https://jalvarez2016.github.io/Compture-science-class/");
});


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1;}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}