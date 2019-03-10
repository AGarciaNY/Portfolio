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
        var uname = directory[key].name;
        var umail = directory[key].mail;
        var ucomment = directory[key].comment;
        $("#commentsbox").html(
            
            "<h1></h1>"
            ""
            ""
            );
    }
});

$("#submit").click(function(){
            var name1=$("#viewername").val();
            var mail1=$("#viewermail").val();
            var comment1=$("#viewercoment").val();
            
            var sname=name1.split("");
            var smail=mail1.split("");
            var scomment=comment1.split(" ");
            
            var namelegth=sname.length;
            var maillegth=smail.length;
            var comle=scomment.length;
            
            if(comle < 10 || maillegth<4  || namelegth<4){
                alert("no");
            }else{
                databaseRef.push({
                    name:name1,
                    mail:mail1,
                    comment:comment1
                });
            }
    
});