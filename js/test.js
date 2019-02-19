/*global $*/
$("#two").click(function(){
	$("#five").html("<h4 id=","'five'","></h4>");
	
	var english= $("#one").val() ;
	var piglat= english.split(" ");
	console.log(english);
	console.log(piglat);
	
	for( var i=0; i < piglat.length ; i++){
		var first = piglat[i].charAt(0);
		var wordtwo = piglat[i].slice(1);
	
			if(first==="a" ||first==="e"||first==="i"||first==="o"||first==="u"){
			$("#five").append(piglat[i]+"yay ");
		}
		else if(first!== "a"){
			$("#five").append(wordtwo+first+"ay ");
		}	
		

	
	}
});


