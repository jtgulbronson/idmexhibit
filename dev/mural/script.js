//play and pause button for videos
var myVid = document.getElementById("left-vid");
var myVid = document.getElementById("mid-vid");
var myVid = document.getElementById("right-vid");
var btnVid = document.getElementsByClassName("vid-btn");

function playVid(){
	if(myVid.paused){
		myVid.play();
		
		for(var i = 0; i < btnVid.length; i++){
			btnVid[i].innerHTML = "Pause";
		}
		
	}else{
		myVid.pause();
		
		for(var i = 0; i < btnVid.length; i++){
			btnVid[i].innerHTML = "Play";
		}
	}
}