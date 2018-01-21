//StereoPannerNode experiment from WebAudio API - https://developer.mozilla.org/en-US/docs/Web/API/StereoPannerNode
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

var redAudio = document.getElementById('#firstAudio');
var blueAudio = document.getElementById('#secondAudio');

//setting up two audio channels for WebAudio API
var source = audioCtx.createMediaElementSource(redAudio);

//setting up StereoPanner
var panNode = audioCtx.createStereoPanner();

var redBtn = document.getElementById("#red");
redBtn.click(function() {
  panNode.pan.value = -1;
	redAudio.play();
	console.log("click is working");
});


//connecting everything at the end
source.connect(panNode);
panNode.connect(audioCtx.destination);