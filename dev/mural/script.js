//VIDEO TRANSITIONS
$(document).ready(function(){
	var delay = 500, setTimeoutConst;
	
	$("#cart-L-container").hover(function(){
		setTimeoutConst = setTimeout(function(){
			
			$("#cart-L-vid").css({
				transition: '1s'
			})
			
		}, delay);
	}, function(){
		//document.getElementById("exposure-L").style.visibility = "hidden";
		clearTimeout(setTimeoutConst);
	});
	
	$("#cart-M-container").hover(function(){
		setTimeoutConst = setTimeout(function(){
			
			$("#cart-M-vid").css({
				transition: '1s'
			})
			
		}, delay);
	}, function(){
		clearTimeout(setTimeoutConst);
	});
	
	$("#cart-R-container").hover(function(){
		setTimeoutConst = setTimeout(function(){
			
			$("#cart-R-vid").css({
				transition: '1s'
			})
			
		}, delay);
	}, function(){
		clearTimeout(setTimeoutConst);
	});
	
	//EXIT VIDEOS
	$(".vid-btn").hover(function(){
		setTimeoutConst = setTimeout(function(){
			
			$("#cart-L-vid").css({
				transition: '1s',
				display: 'none'
			})
			
			$("#cart-M-vid").css({
				transition: '1s',
				display: 'none'
			})
			
			$("#cart-R-vid").css({
				transition: '1s',
				display: 'none'
			})
			
		}, delay);
	}, function(){
		clearTimeout(setTimeoutConst);
	})
	
});

//PLAY AND STOP VIDEOS
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
}

function stopVidM(){
	document.getElementById("cart-M-vid").style.display = "none";
	mVid.pause();
}

function stopVidR(){
	document.getElementById("cart-R-vid").style.display = "none";
	rVid.pause();
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

//RETICLE - CONTROL OTHER FUNCTIONS
function reticleOnL(){
  document.getElementById("reticle-L").style.display = "block";
}

function reticleOffL(){
  document.getElementById("reticle-L").style.display = "none";
}

function reticleOnM(){
  document.getElementById("reticle-M").style.display = "block";
}

function reticleOffM(){
  document.getElementById("reticle-M").style.display = "none";
}

function reticleOnR(){
  document.getElementById("reticle-R").style.display = "block";
}

function reticleOffR(){
  document.getElementById("reticle-R").style.display = "none";
}