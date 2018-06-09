// CURSOR STATE WHEN VIDEOS ARE PLAYING
// $(function(){
// 	var timer;
// 	var fadeIn = false;

// 	$(document).mousemove(function(){
// 		if(!fadeIn){
// 			if(timer){
// 				clearTimeout(timer);
// 				timer = 0;
// 			}

// 			$("html").css({
// 				cursor: ''
// 			});
// 		}else{
// 			$("video").css({
// 				cursor: 'default'
// 			});
// 			fadeIn = false;
// 		}

// 		timer = setTimeout(function(){
// 			$("video").css({
// 				cursor: 'none'
// 			});
// 			fadeIn = true;
// 		}, 2000)
// 	});

// 	$("video").css({
// 		cursor: 'default'
// 	});
// });


// PLAY AND STOP VIDEOS
var lVid = document.getElementById("left-vid");
var mVid = document.getElementById("mid-vid");
var rVid = document.getElementById("right-vid");

function playVidL() {
	document.getElementById("cart-L-vid").style.display = "block";
	document.querySelector(".vid-btn-container").style.display = "block";
	document.querySelector(".vid-btn").style.display = "block";
	document.getElementById("shutter").style.display = "block";
	lVid.play();
	document.getElementById("cart-L-container").style.display = "none";
	document.getElementById("cart-M-container").style.display = "none";
	document.getElementById("cart-R-container").style.display = "none";

	// lanterns issue quick fix
	document.getElementById("left-lantern").style.display = "none";
}

function playVidM() {
	document.getElementById("cart-M-vid").style.display = "block";
	document.querySelector(".vid-btn-container").style.display = "block";
	document.querySelector(".vid-btn").style.display = "block";
	document.getElementById("shutter").style.display = "block";
	mVid.play();
	document.getElementById("cart-L-container").style.display = "none";
	document.getElementById("cart-M-container").style.display = "none";
	document.getElementById("cart-R-container").style.display = "none";

	// lanterns issue quick fix
	document.getElementById("mid-lantern").style.display = "none";
}

function playVidR() {
	document.getElementById("cart-R-vid").style.display = "block";
	document.querySelector(".vid-btn-container").style.display = "block";
	document.querySelector(".vid-btn").style.display = "block";
	document.getElementById("shutter").style.display = "block";
	rVid.play();
	document.getElementById("cart-L-container").style.display = "none";
	document.getElementById("cart-M-container").style.display = "none";
	document.getElementById("cart-R-container").style.display = "none";

	// lanterns issue quick fix
	document.getElementById("right-lantern").style.display = "none";
}

function stopVidL() {
	document.getElementById("cart-L-vid").style.display = "none";
	document.querySelector(".vid-btn-container").style.display = "none";
	document.querySelector(".vid-btn").style.display = "none";
	document.getElementById("shutter").style.display = "none";
	lVid.pause();
	lVid.currentTime = 0;
	document.getElementById("cart-L-container").style.display = "block";
	document.getElementById("cart-M-container").style.display = "block";
	document.getElementById("cart-R-container").style.display = "block";

	// lanterns issue quick fix
	document.getElementById("left-lantern").style.display = "block";
}

function stopVidM() {
	document.getElementById("cart-M-vid").style.display = "none";
	document.querySelector(".vid-btn-container").style.display = "none";
	document.querySelector(".vid-btn").style.display = "none";
	document.getElementById("shutter").style.display = "none";
	mVid.pause();
	mVid.currentTime = 0;
	document.getElementById("cart-L-container").style.display = "block";
	document.getElementById("cart-M-container").style.display = "block";
	document.getElementById("cart-R-container").style.display = "block";

	// lanterns issue quick fix
	document.getElementById("mid-lantern").style.display = "block";
}

function stopVidR() {
	document.getElementById("cart-R-vid").style.display = "none";
	document.querySelector(".vid-btn-container").style.display = "none";
	document.querySelector(".vid-btn").style.display = "none";
	document.getElementById("shutter").style.display = "none";
	rVid.pause();
	rVid.currentTime = 0;
	document.getElementById("cart-L-container").style.display = "block";
	document.getElementById("cart-M-container").style.display = "block";
	document.getElementById("cart-R-container").style.display = "block";

	// lanterns issue quick fix
	document.getElementById("right-lantern").style.display = "block";
}

document.getElementById("left-vid").addEventListener("ended", function () {
	document.getElementById("cart-L-vid").style.display = "none";
	document.querySelector(".vid-btn-container").style.display = "none";
	document.querySelector(".vid-btn").style.display = "none";
	document.getElementById("shutter").style.display = "none";
	document.getElementById("cart-L-container").style.display = "block";
	document.getElementById("cart-M-container").style.display = "block";
	document.getElementById("cart-R-container").style.display = "block";
});

document.getElementById("mid-vid").addEventListener("ended", function () {
	document.getElementById("cart-M-vid").style.display = "none";
	document.querySelector(".vid-btn-container").style.display = "none";
	document.querySelector(".vid-btn").style.display = "none";
	document.getElementById("shutter").style.display = "none";
	document.getElementById("cart-L-container").style.display = "block";
	document.getElementById("cart-M-container").style.display = "block";
	document.getElementById("cart-R-container").style.display = "block";
});

document.getElementById("right-vid").addEventListener("ended", function () {
	document.getElementById("cart-R-vid").style.display = "none";
	document.querySelector(".vid-btn-container").style.display = "none";
	document.querySelector(".vid-btn").style.display = "none";
	document.getElementById("shutter").style.display = "none";
	document.getElementById("cart-L-container").style.display = "block";
	document.getElementById("cart-M-container").style.display = "block";
	document.getElementById("cart-R-container").style.display = "block";
});

document.querySelector(".vid-btn").addEventListener("ended", function () {
	document.getElementById("cart-R-vid").style.display = "none";
	document.querySelector(".vid-btn-container").style.display = "none";
	document.querySelector(".vid-btn").style.display = "none";
	document.getElementById("cart-L-container").style.display = "block";
	document.getElementById("cart-M-container").style.display = "block";
	document.getElementById("cart-R-container").style.display = "block";
});

var isSeen;

function toBlock() {
	$("#exposure").display.opacity = '1';
	var isSeen = true;
};

function toNone() {
	$("#exposure").display.opacity = '0';
	var isSeen = false;
};


// RETICLE
var setVidL;
var setVidM;
var setVidR;
var setExitL;
var setExitM;
var setExitR;
var setFade;
var setFadeOff;

function reticleOnL() {
	setVidL = setTimeout(playVidL, 2000);
	$('#exposure').fadeTo(2000, 1, function () {});

	setFade = setTimeout(toBlock, 2000);
}

function reticleOffL() {
	clearTimeout(setVidL);
	if (isSeen = false) {
		clearTimeout(setFade);
		$('#exposure').fadeOut(200, function () {

		});
	}
}

function reticleOnM() {
	setVidM = setTimeout(playVidM, 2000);
	$('#exposure').fadeTo(1999, 1, function () {});
	setFade = setTimeout(toBlock, 2000);
}

function reticleOffM() {
	clearTimeout(setVidM);
	if (isSeen = false) {
		clearTimeout(setFade);
		$('#exposure').fadeOut(200, function () {

		});
	}
}

function reticleOnR() {
	setVidR = setTimeout(playVidR, 2000);
	$('#exposure').fadeTo(2000, 1, function () {});
	setFade = setTimeout(toBlock, 2000);
}

function reticleOffR() {
	clearTimeout(setVidR);
	if (isSeen = false) {
		clearTimeout(setFade);
		$('#exposure').fadeOut(200, function () {

		});
	}
}

function reticleOnBtn() {
	setExitL = setTimeout(stopVidL, 2000);
	setExitM = setTimeout(stopVidM, 2000);
	setExitR = setTimeout(stopVidR, 2000);
	if (isSeen = true) {
		setFadeOff = setTimeout(toNone, 2000);
		$('#exposure').delay(2000).fadeOut(200, function () {

		});
	}
}

function reticleOffBtn() {
	clearTimeout(setExitL);
	clearTimeout(setExitM);
	clearTimeout(setExitR);
	if (isSeen = true) {
		clearTimeout(setFadeOff);
		$('#exposure').fadeTo(200, 1, function () {

		});
	}

}

$(document).ready(function () {
	$("body").mousemove(function (event) {
		$('.circle').css("left", (event.pageX - 140));
		$('.circle').css("top", (event.pageY - 140));
	});
});