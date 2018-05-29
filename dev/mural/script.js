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

function playVidL(){
	document.getElementById("cart-L-vid").style.display = "block";
	lVid.play();
}

function playVidM(){
	document.getElementById("cart-M-vid").style.display = "block";
	mVid.play();
}

function playVidR(){
	document.getElementById("cart-R-vid").style.display = "block";
	rVid.play();
}

function stopVidL(){
	document.getElementById("cart-L-vid").style.display = "none";
	lVid.pause();
	lVid.currentTime = 0;
}

function stopVidM(){
	document.getElementById("cart-M-vid").style.display = "none";
	mVid.pause();
	mVid.currentTime = 0;
}

function stopVidR(){
	document.getElementById("cart-R-vid").style.display = "none";
	rVid.pause();
	rVid.currentTime = 0;
}

document.getElementById("left-vid").addEventListener("ended", function(){
	document.getElementById("cart-L-vid").style.display = "none";
});

document.getElementById("mid-vid").addEventListener("ended", function(){
	document.getElementById("cart-M-vid").style.display = "none";
});

document.getElementById("right-vid").addEventListener("ended", function(){
	document.getElementById("cart-R-vid").style.display = "none";
});

// RETICLE
function reticleOnL(){
	document.getElementById("reticle-L").style.display = "block";
	setTimeout(playVidL, 2000);
}

function reticleOffL(){
	document.getElementById("reticle-L").style.display = "none";
	clearTimeout(playVidL);
}

function reticleOnM(){
	document.getElementById("reticle-M").style.display = "block";
	setTimeout(playVidM, 2000);
}

function reticleOffM(){
	document.getElementById("reticle-M").style.display = "none";
	clearTimeout(playVidM);
}

function reticleOnR(){
	document.getElementById("reticle-R").style.display = "block";
	setTimeout(playVidR, 2000);
}

function reticleOffR(){
	document.getElementById("reticle-R").style.display = "none";
	clearTimeout(playVidR);
}