/*global $*/
/*global firebase*/
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

var database = firebase.database();
var databaseRef = database.ref("/");

// Read the data from the database and take a snapshot of that data.
databaseRef.once("value").then(function(snapshot) {
 // Use .val() to get the data from the snapshot.
 const directory = snapshot.val();
 console.log(directory)
 var stories = $("#stories")
    for(var key in directory){
        console.log(key);
        console.log(directory[key].age);
        var age = directory[key].age
        var title = directory[key].title
        var story = directory[key].story
        var country = directory[key].country
       // var div = $("<div>").text(" age: " + age + " country: " + country + " title: " + title + " story: " + story );
      //  $("#stories").append(div);
        var outerdiv = $("<div class='col-lg-4 col-sm-6 portfolio-item'>");
        var carddiv = $("<div class='card h-100'>");
        var bodydiv = $("<div class='card-body'>");
        var titleh4 = $("<h4 class= 'card-title'>").text(title);
        var storyp = $("<p class='card-text'>").text(story);
        bodydiv.append(titleh4, storyp);
        carddiv.append(bodydiv);
        outerdiv.append(carddiv);
        $("#stories").append(outerdiv);
    }
});
$("#submit").click(function(){
        //$("#age").val()
        databaseRef.push({
            age:$("#age").val(),
            country:$("#country").val(),
            story:$("#story").val(),
            title:$("#title").val()
        })
}   
    );
