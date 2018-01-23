onload = function () {
	
	// array of all audio files
	window.audioFiles = ['reverb.mp3', 'strings.mp3'];

	// getting html elements
	window.audio = document.getElementById('audio');
	window.red = document.getElementById('red');
	window.blue = document.getElementById('blue');

	// setting up AudioContext for WebAudio API
	window.AudioContext = window.AudioContext || window.webkitAudioContext;
	context = new AudioContext();

	// connectind AudioContect to audio HTML element
	source = context.createMediaElementSource(audio);

	// add WebAudio API Analyser
	analyser = context.createAnalyser();

	// add left and right WebAudio API so each ear can be panned independently
	panNodeL = context.createStereoPanner();
	panNodeR = context.createStereoPanner();

	// connecting all nodes to audio source
	source.connect(analyser);
	source.connect(panNodeL);
	source.connect(panNodeR);

	// on red btn click...
	red.onclick = function () {

		// choose audio source from array
		audio.src = audioFiles[0];

		// pan left
		panNodeL.pan.value = -1;

		// play audio
		audio.play();
	}

	// on blue btn click...
	blue.onclick = function () {

		//choose audio source from array
		audio.src = audioFiles[1];
		// pan right
		panNodeR.pan.value = 1;

		// play audio
		audio.play();
	}

	// connected each node to destination (in this case headphones)
	analyser.connect(context.destination);
	panNodeL.connect(context.destination);
	panNodeR.connect(context.destination);
}