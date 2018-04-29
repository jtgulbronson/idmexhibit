//VARIABLES
var vidL = document.getElementById("cart-L-vid");
var vidM = document.getElementById("cart-M-vid");
var vidR = document.getElementById("cart-R-vid");

//videos appear and start playing when carts are zoomed in
function displayVidL(){
	document.getElementById("cart-L-vid").style.display = "block";
	document.getElementById("cart-M-vid").style.display = "none";
	document.getElementById("cart-R-vid").style.display = "none";
	vidL.play();
}

function displayVidM(){
	document.getElementById("cart-M-vid").style.display = "block";
	document.getElementById("cart-L-vid").style.display = "none";
	document.getElementById("cart-R-vid").style.display = "none";
	vidM.play();
}

function displayVidR(){
	document.getElementById("cart-R-vid").style.display = "block";
	document.getElementById("cart-L-vid").style.display = "none";
	document.getElementById("cart-M-vid").style.display = "none";
	vidR.play();
}

//videos stop playing and disappear when zoomed out
function hideVid(){
	document.getElementById("cart-L-vid").style.display = "none";
	document.getElementById("cart-M-vid").style.display = "none";
	document.getElementById("cart-R-vid").style.display = "none";
//	vidL.pause();
//	vidM.pause();
//	vidR.pause();
}