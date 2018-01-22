onload = function () { //this will be executed when the page is ready
	window.audioFiles = ['reverb.mp3', 'strings.mp3']; //this is gonna be the array with all file names
	window.audio = document.getElementById('audio');
	window.red = document.getElementById('red');
	window.blue = document.getElementById('blue');
	window.AudioContext = window.AudioContext || window.webkitAudioContext;
	context = new AudioContext();
	source = context.createMediaElementSource(audio);
	analyser = context.createAnalyser();
	panNodeL = context.createStereoPanner();
	panNodeR = context.createStereoPanner();
	source.connect(analyser);
	source.connect(panNodeL);
	source.connect(panNodeR);

	red.onclick = function () {
		audio.src = audioFiles[0];
		panNodeL.pan.value = -1;
		audio.play();
	}

	blue.onclick = function () {
		audio.src = audioFiles[1];
		panNodeR.pan.value = 1;
		audio.play();
	}

	analyser.connect(context.destination);
	panNodeL.connect(context.destination);
	panNodeR.connect(context.destination);
}