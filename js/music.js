/*global $*/
/*global firebase*/



var x = document.getElementById("myAudio");

function enableControls() { 
  x.pause();
} 

function disableControls() { 
  x.play();
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
    
var database = firebase.database();
var databaseRef = database.ref("/");

// Read the data from the database and take a snapshot of that data.
databaseRef.once("value").then(function(snapshot) {
 // Use .val() to get the data from the snapshot.
 const directory = snapshot.val();
 console.log(directory);
    for(var key in directory){
        console.log(key);
        console.log(directory[key].name);
        var uname = directory[key].name.name;
        var umail = directory[key].name.mail;
        var ucomment = directory[key].name.comment;
        console.log(uname);
        console.log(umail);
        console.log(ucomment);
    }
});

$("#submit").click(function(){
            var name1=$("#viewername").val();
            var mail1=$("#viewermail").val();
            var comment1=$("#viewercoment").val();
            var scomment=comment1.split(" ");
            var comle=scomment.length;
            
            if(comle >10){
                alert("no");
            }else{
                databaseRef.push({
                    name:name1,
                    mail:mail1,
                    comment:comment1
                });
            }
});
