// CURSOR STATE WHEN VIDEOS ARE PLAYING
$(function(){
	var timer;
	var fadeIn = false;

	$(document).mousemove(function(){
		if(!fadeIn){
			if(timer){
				clearTimeout(timer);
				timer = 0;
			}

			$("html").css({
				cursor: ''
			});
		}else{
			$("video").css({
				cursor: 'default'
			});
			fadeIn = false;
		}

		timer = setTimeout(function(){
			$("video").css({
				cursor: 'none'
			});
			fadeIn = true;
		}, 2000)
	});

	$("video").css({
		cursor: 'default'
	});
});

// VIDEO TRANSITIONS
$(document).ready(function(){
	var delay = 500, setTimeoutConst;
	
	$("#cart-L-container").hover(function(){
		setTimeoutConst = setTimeout(function(){
			
			$("#cart-L-vid").css({
				transition: '1s'
			});
			
		}, delay);
	}, function(){
		clearTimeout(setTimeoutConst);
	});
	
	$("#cart-M-container").hover(function(){
		setTimeoutConst = setTimeout(function(){
			
			$("#cart-M-vid").css({
				transition: '1s'
			});
			
		}, delay);
	}, function(){
		clearTimeout(setTimeoutConst);
	});
	
	$("#cart-R-container").hover(function(){
		setTimeoutConst = setTimeout(function(){
			
			$("#cart-R-vid").css({
				transition: '1s'
			});
			
		}, delay);
	}, function(){
		clearTimeout(setTimeoutConst);
	});
	
	// EXIT VIDEOS
	$(".vid-btn").hover(function(){
		setTimeoutConst = setTimeout(function(){
			
			$("#cart-L-vid").css({
				transition: '1s',
				display: 'none'
			});
			
			$("#cart-M-vid").css({
				transition: '1s',
				display: 'none'
			});
			
			$("#cart-R-vid").css({
				transition: '1s',
				display: 'none'
			});
			
		}, delay);
	}, function(){
		clearTimeout(setTimeoutConst);
	});
	
});

// PLAY AND STOP VIDEOS
var lVid = document.getElementById("left-vid");
var mVid = document.getElementById("mid-vid");
var rVid = document.getElementById("right-vid");
var lCart = document.getElementById("cart-L-container");
var mCart = document.getElementById("cart-M-container");
var rCart = document.getElementById("cart-R-container");

function playVidL(){
	document.getElementById("cart-L-vid").style.display = "block";
	lVid.play();
	lCart.style.display = "none";
	mCart.style.display = "none";
	rCart.style.display = "none";
}

function playVidM(){
	document.getElementById("cart-M-vid").style.display = "block";
	mVid.play();
	lCart.style.display = "none";
	mCart.style.display = "none";
	rCart.style.display = "none";
}

function playVidR(){
	document.getElementById("cart-R-vid").style.display = "block";
	rVid.play();
	lCart.style.display = "none";
	mCart.style.display = "none";
	rCart.style.display = "none";
}

function stopVidL(){
	document.getElementById("cart-L-vid").style.display = "none";
	lVid.pause();
	lVid.currentTime = 0;
	lCart.style.display = "block";
	mCart.style.display = "block";
	rCart.style.display = "block";
}

function stopVidM(){
	document.getElementById("cart-M-vid").style.display = "none";
	mVid.pause();
	mVid.currentTime = 0;
	lCart.style.display = "block";
	mCart.style.display = "block";
	rCart.style.display = "block";
}

function stopVidR(){
	document.getElementById("cart-R-vid").style.display = "none";
	rVid.pause();
	rVid.currentTime = 0;
	lCart.style.display = "block";
	mCart.style.display = "block";
	rCart.style.display = "block";
}

document.getElementById("left-vid").addEventListener("ended", function(){
	document.getElementById("cart-L-vid").style.display = "none";
	lCart.style.display = "block";
	mCart.style.display = "block";
	rCart.style.display = "block";
});

document.getElementById("mid-vid").addEventListener("ended", function(){
	document.getElementById("cart-M-vid").style.display = "none";
	lCart.style.display = "block";
	mCart.style.display = "block";
	rCart.style.display = "block";
});

document.getElementById("right-vid").addEventListener("ended", function(){
	document.getElementById("cart-R-vid").style.display = "none";
	lCart.style.display = "block";
	mCart.style.display = "block";
	rCart.style.display = "block";
});

// RETICLE

var setVidL;
var setVidM;
var setVidR;

function reticleOnL(){
	document.getElementById("reticle-L").style.display = "block";
	setVidL = setTimeout(playVidL, 2000);
}

function reticleOffL(){
	document.getElementById("reticle-L").style.display = "none";
	clearTimeout(setVidL);
}

function reticleOnM(){
	document.getElementById("reticle-M").style.display = "block";
	setVidM = setTimeout(playVidM, 2000);
}

function reticleOffM(){
	document.getElementById("reticle-M").style.display = "none";
	clearTimeout(setVidM);
}

function reticleOnR(){
	document.getElementById("reticle-R").style.display = "block";
	setVidR = setTimeout(playVidR, 2000);
}

function reticleOffR(){
	document.getElementById("reticle-R").style.display = "none";
	clearTimeout(setVidR);
}

$(document).ready(function(){
	$("body").mousemove(function(event){
		$('.circle').css("left", (event.pageX-140));
		$('.circle').css("top", (event.pageY - 140));
	});
});