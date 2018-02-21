$(document).ready(function() {
    //////////////////////////////////////
    // disabling some default functionality of browser
    //////////////////////////////////////
    //drag to scroll
    document.body.addEventListener('touchmove', function(event) {
        event.preventDefault();
    }, false);

    //keeps users from selecting text (highlighting)
    var textSelect = $("html");
    textSelect.attr('unselectable', 'on').css('user-select', 'none').on('selectstart dragstart', false);

    /////////////////////////////////////
    // Base Audio Stuff
    ////////////////////////////////////

	// array of all audio files
	window.audioFiles = [
        'reverb.mp3', // 0
        'reverb2.mp3', // 1
        'strings.mp3', // 2
        'strings2.mp3', // 3
        'meadowlark.mp3', // 4
        'meadowlark2.mp3', // 5
        'frogs.mp3', // 6
        'frogs2.mp3', // 7
        'dream.mp3', // 8
        'dream2.mp3', // 9
		'rainforest.mp3', // 10
		'rainforest2.mp3', //11
        'flute.mp3', //12
        'flute2.mp3' //13
    ];

    //Finding the audio tag in the HTML to hold and play the files
    window.audio_len_1_L = document.getElementById('audio_len_1_L');
    window.audio_len_1_R = document.getElementById('audio_len_1_R');

    window.audio_len_2_L = document.getElementById('audio_len_2_L');
    window.audio_len_2_R = document.getElementById('audio_len_2_R');

    window.audio_len_3_L = document.getElementById('audio_len_3_L');
    window.audio_len_3_R = document.getElementById('audio_len_3_R');

    window.audio_len_8_L = document.getElementById('audio_len_8_L');
    window.audio_len_8_R = document.getElementById('audio_len_8_R');

    window.audio_len_4_L = document.getElementById('audio_len_4_L');
    window.audio_len_4_R = document.getElementById('audio_len_4_R');

    window.audio_len_5_L = document.getElementById('audio_len_5_L');
    window.audio_len_5_R = document.getElementById('audio_len_5_R');

    window.audio_ange_1_L = document.getElementById('audio_ange_1_L');
    window.audio_ange_1_R = document.getElementById('audio_ange_1_R');

    // setting up AudioContext for WebAudio API
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    context = new AudioContext();

    // connecting AudioContext to audio HTML element for each element L and R
    source_len_1_L = context.createMediaElementSource(audio_len_1_L);
    source_len_1_R = context.createMediaElementSource(audio_len_1_R);

    source_len_2_L = context.createMediaElementSource(audio_len_2_L);
    source_len_2_R = context.createMediaElementSource(audio_len_2_R);

    source_len_3_L = context.createMediaElementSource(audio_len_3_L);
    source_len_3_R = context.createMediaElementSource(audio_len_3_R);

    source_len_8_L = context.createMediaElementSource(audio_len_8_L);
    source_len_8_R = context.createMediaElementSource(audio_len_8_R);

    source_len_4_L = context.createMediaElementSource(audio_len_4_L);
    source_len_4_R = context.createMediaElementSource(audio_len_4_R);

    source_len_5_L = context.createMediaElementSource(audio_len_5_L);
    source_len_5_R = context.createMediaElementSource(audio_len_5_R);

    source_ange_1_L = context.createMediaElementSource(audio_ange_1_L);
    source_ange_1_R = context.createMediaElementSource(audio_ange_1_R);

    // add WebAudio API Analyser on for L one for R
    analyser_L = context.createAnalyser();
    analyser_R = context.createAnalyser();

    // add left and right WebAudio API so each ear can be panned independently
    panNode_L = context.createStereoPanner();
    panNode_R = context.createStereoPanner();


    // connecting all nodes to audio source
    source_len_1_L.connect(analyser_L);
    source_len_1_L.connect(panNode_L);
    source_len_1_R.connect(analyser_R);
    source_len_1_R.connect(panNode_R);

    source_len_2_L.connect(analyser_L);
    source_len_2_L.connect(panNode_L);
    source_len_2_R.connect(analyser_R);
    source_len_2_R.connect(panNode_R);

    source_len_3_L.connect(analyser_L);
    source_len_3_L.connect(panNode_L);
    source_len_3_R.connect(analyser_R);
    source_len_3_R.connect(panNode_R);

    source_len_8_L.connect(analyser_L);
    source_len_8_L.connect(panNode_L);
    source_len_8_R.connect(analyser_R);
    source_len_8_R.connect(panNode_R);

    source_len_4_L.connect(analyser_L);
    source_len_4_L.connect(panNode_L);
    source_len_4_R.connect(analyser_R);
    source_len_4_R.connect(panNode_R);

    source_len_5_L.connect(analyser_L);
    source_len_5_L.connect(panNode_L);
    source_len_5_R.connect(analyser_R);
    source_len_5_R.connect(panNode_R);

    source_ange_1_L.connect(analyser_L);
    source_ange_1_L.connect(panNode_L);
    source_ange_1_R.connect(analyser_R);
    source_ange_1_R.connect(panNode_R);

    //connecting to the output
    analyser_L.connect(context.destination);
    analyser_R.connect(context.destination);
	panNode_L.connect(context.destination);
    panNode_R.connect(context.destination);
    /////////////////////////////////////
    // Drag and Drop
    ////////////////////////////////////

    var glassOne = $('#glass_1');
    var glassTwo = $('#glass_2');
    // Draggable
    interact('.magnify_glass')
        .draggable({
            inertia: false, //makes the element stop when user stops
            // keep the element within the area of the wrappe
            restrict: {
                restriction: '.wrapper',
                endOnly: false, //prevents any of the magnifier from leaving the window
                elementRect: {
                    top: 0,
                    left: 0,
                    bottom: 1,
                    right: 1
                } //offsets for draggable element size
            },
            autoScroll: false, // disable scroll via drag
            onmove: dragHandler, // call this function on every dragmove event
        })

    //drag handler for both magnifiers
    function dragHandler(dragOne) {
        var target = dragOne.target;
        x = (parseFloat(target.getAttribute('data-x')) || 0) + dragOne.dx,
            y = (parseFloat(target.getAttribute('data-y')) || 0) + dragOne.dy;
        target.style.top = y + 'px'; //adjust positioning based on dragged location
        target.style.left = x + 'px'; //adjust positioning based on dragged location
        // update the position attributes
        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
        dragOne.preventDefault();
    };

    //color portrait with black dress interaction
    // enable draggables to be dropped into this
    interact('#len_1').dropzone({
        // only accept elements matching this CSS selector
        accept: '.magnify_glass',
        // Require a 75% element overlap for a drop to be possible
        overlap: 0.25,
        ondragenter: function(event) {
            var draggableElement = event.relatedTarget,
                dropzoneElement = event.target;
            draggableElement.classList.add('dropped-element');
            draggableElement.classList.remove('removed-element');
            var glass = draggableElement.getAttribute('id');
            switch (glass) {
                case 'glass_1':
                    audio_len_1_L.src = audioFiles[0];
                    // pan left
                    panNode_L.pan.value = -1;
                    // play audio
                    audio_len_1_L.play();
                    console.log(panNode_L.pan.value);
					$('#len_1').css('z-index', '5');
                    $('#len_1_image').css("transform", "scale(1.2)");
                    $('#glass_1').css("transform", "scale(2.5)");
                    $('#left_instruct').hide();
                    $('.info_bar_left > .info_image').css({
                        'background-image' : 'url("img/len-1.jpeg")',
                        'width' : '270px',
                        'height' : '420px'
                    });
					$('.info_bar_left > .info_content > .info_content_title').html("Mother");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("My mother's strength and boldness is an inspiration to me. She has raised many children and adults. Her life story is one of triumph.");
                    break;
                case 'glass_2':
                    audio_len_1_R.src = audioFiles[1];
                    // pan left
                    panNode_R.pan.value = 1;
                    // play audio
                    audio_len_1_R.play();
                    console.log(panNode_R.pan.value);
					$('#len_1').css('z-index', '5');
                    $('#len_1_image').css("transform", "scale(1.2)");
                    $('#glass_2').css("transform", "scale(2.5)");
                    $('#right_instruct').hide();
                    $('.info_bar_right > .info_image').css({
                        'background-image' : 'url("img/len-1.jpeg")',
                        'width' : '270px',
                        'height' : '420px'
                    });
                    $('.info_bar_right > .info_content > .info_content_title').html("Mother");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("My mother's strength and boldness is an inspiration to me. She has raised many children and adults. Her life story is one of triumph.");
                    break;
            }
        },
        ondragleave: function(event) {
            var draggableElement = event.relatedTarget,
                dropzoneElement = event.target;
            draggableElement.classList.add('removed-element');
            draggableElement.classList.remove('dropped-element');
            var glass = draggableElement.getAttribute('id');
            switch (glass) {
                case 'glass_1':
                    audio_len_1_L.pause();
                    audio_len_1_L.currentTime = 0;
					$('#len_1').css('z-index', '1');
                    $('#len_1_image').css("transform", "scale(1)");
                    $('#glass_1').css("transform", "scale(1)");
                    $('#left_instruct').show();
                    $('.info_bar_left > .info_image').css('background-image', 'none');
                    $('.info_bar_left > .info_content > .info_content_title').html("");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("");
                    break;
                case 'glass_2':
                    audio_len_1_R.pause();
                    audio_len_1_R.currentTime = 0;
					$('#len_1').css('z-index', '1');
                    $('#len_1_image').css("transform", "scale(1)");
                    $('#glass_2').css("transform", "scale(1)");
                    $('#right_instruct').show();
                    $('.info_bar_right > .info_image').css('background-image', 'none');
                    $('.info_bar_right > .info_content > .info_content_title').html("");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("");
                    break;
            }
        }
    });

    //alley between houses interaction
    // enable draggables to be dropped into this
    interact('#len_2').dropzone({
        // only accept elements matching this CSS selector
        accept: '.magnify_glass',
        // Require a 75% element overlap for a drop to be possible
        overlap: 0.25,
        ondragenter: function(event) {
            var draggableElement = event.relatedTarget,
                dropzoneElement = event.target;
            draggableElement.classList.add('dropped-element')
            draggableElement.classList.remove('removed-element');
            var glass = draggableElement.getAttribute('id');
            switch (glass) {
                case 'glass_1':
                    audio_len_2_L.src = audioFiles[2];
                    // pan left
                    panNode_L.pan.value = -1;
                    // play audio
                    audio_len_2_L.play();
                    console.log(panNode_L.pan.value);
                    $('#len_2').css('z-index', '5');
                    $('#len_2_image').css("transform", "scale(1.2)");
                    $('#glass_1').css("transform", "scale(2)");
                    $('#left_instruct').hide();
                    $('.info_bar_left > .info_image').css({
						"background-image": 'url("img/len-2.jpeg")',
                        'width': '425px',
                        'height': '330px'
					});

                    $('.info_bar_left > .info_content > .info_content_title').html("Space Between");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("I have so many images from Robertsport, the capital of Grand Cape Mount in Liberia; however, I love the capturing people in their daily routines unbothered by a curious transnational.");
                    break;
                case 'glass_2':
                    audio_len_2_R.src = audioFiles[3];
                    // pan left
                    panNode_R.pan.value = 1;
                    // play audio
                    audio_len_2_R.play();
                    console.log(panNode_R.pan.value);
                    $('#len_2').css('z-index', '5');
                    $('#len_2_image').css("transform", "scale(1.2)");
                    $('#glass_2').css("transform", "scale(2)");
                    $('#right_instruct').hide();
                    $('.info_bar_right > .info_image').css({
                        "background-image": 'url("img/len-2.jpeg")',
                        'width': '425px',
                        'height': '330px'
                    });
                    $('.info_bar_right > .info_content > .info_content_title').html("Space Between");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("I have so many images from Robertsport, the capital of Grand Cape Mount in Liberia; however, I love the capturing people in their daily routines unbothered by a curious transnational.");
                    break;
            }
        },
        ondragleave: function(event) {
            var draggableElement = event.relatedTarget,
                dropzoneElement = event.target;
            draggableElement.classList.add('removed-element');
            draggableElement.classList.remove('dropped-element');
            var glass = draggableElement.getAttribute('id');
            switch (glass) {
                case 'glass_1':
                    audio_len_2_L.pause();
                    audio_len_2_L.currentTime = 0;
                    $('#len_2').css('z-index', '1');
                    $('#len_2_image').css("transform", "scale(1)");
                    $('#glass_1').css("transform", "scale(1)");
                    $('#left_instruct').show();
                    $('.info_bar_left > .info_image').css("background-image", 'none');
                    $('.info_bar_left > .info_content > .info_content_title').html("");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("");
                    break;
                case 'glass_2':
                    audio_len_2_R.pause();
                    audio_len_2_R.currentTime = 0;
                    $('#len_2').css('z-index', '1');
                    $('#len_2_image').css("transform", "scale(1)");
                    $('#glass_2').css("transform", "scale(1)");
                    $('#right_instruct').show();
                    $('.info_bar_right > .info_image').css("background-image",'none');
                    $('.info_bar_right > .info_content > .info_content_title').html("");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("");
                    break;
            }
        }
    });

    //Monochormatic portrait
    // enable draggables to be dropped into this
    interact('#len_3').dropzone({
        // only accept elements matching this CSS selector
        accept: '.magnify_glass',
        // Require a 75% element overlap for a drop to be possible
        overlap: 0.25,
        ondragenter: function(event) {
            var draggableElement = event.relatedTarget,
                dropzoneElement = event.target;
            draggableElement.classList.add('dropped-element');
            draggableElement.classList.remove('removed-element');
            var glass = draggableElement.getAttribute('id');
            switch (glass) {
                case 'glass_1':
                    audio_len_3_L.src = audioFiles[4];
                    // pan left
                    panNode_L.pan.value = -1;
                    // play audio
                    audio_len_3_L.play();
                    console.log(panNode_L.pan.value);
                    $('#len_3').css('z-index', '5');
                    $('#len_3_image').css("transform", "scale(1.2)");
                    $('#glass_1').css("transform", "scale(2)");
                    $('#left_instruct').hide();
                    $('.info_bar_left > .info_image').css({
                        'background-image': 'url("img/len-3.jpeg")',
                        'width' : '270px',
                        'height' : '420px'
                    });
                    $('.info_bar_left > .info_content > .info_content_title').html("Grandmother");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("My maternal grandmother transitioned when I was very young, most likely when I was 5 years old. Although I do not remember her presence, she passed down her love of textiles and artistic creativity. She was a known healer and I was told people would come to her for dislocated limbs and infertility. I am inspired by her generous spirit and proud to carry her name, Lendeh.");
                    break;
                case 'glass_2':
                    audio_len_3_R.src = audioFiles[5];
                    // pan left
                    panNode_R.pan.value = 1;
                    // play audio
                    audio_len_3_R.play();
                    console.log(panNode_R.pan.value);
                    $('#len_3').css('z-index', '5');
                    $('#len_3_image').css("transform", "scale(1.2)");
                    $('#glass_2').css("transform", "scale(2)");
                    $('#right_instruct').hide();
                    $('.info_bar_right > .info_image').css({
                        'background-image': 'url("img/len-3.jpeg")',
                        'width' : '270px',
                        'height' : '420px'
                    });
                    $('.info_bar_right > .info_content > .info_content_title').html("Grandmother");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("My maternal grandmother transitioned when I was very young, most likely when I was 5 years old. Although I do not remember her presence, she passed down her love of textiles and artistic creativity. She was a known healer and I was told people would come to her for dislocated limbs and infertility. I am inspired by her generous spirit and proud to carry her name, Lendeh.");
                    break;
            }
        },
        ondragleave: function(event) {
            var draggableElement = event.relatedTarget,
                dropzoneElement = event.target;
            draggableElement.classList.add('removed-element');
            draggableElement.classList.remove('dropped-element');
            var glass = draggableElement.getAttribute('id');
            switch (glass) {
                case 'glass_1':
                    audio_len_3_L.pause();
                    audio_len_3_L.currentTime = 0;
                    $('#len_3').css('z-index', '1');
                    $('#len_3_image').css("transform", "scale(1)");
                    $('#glass_1').css("transform", "scale(1)");
                    $('#left_instruct').show();
                    $('.info_bar_left > .info_image').css('background-image', 'none');
                    $('.info_bar_left > .info_content > .info_content_title').html("");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("");
                    break;
                case 'glass_2':
                    audio_len_3_R.pause();
                    audio_len_3_R.currentTime = 0;
                    $('#len_3').css('z-index', '1');
                    $('#len_3_image').css("transform", "scale(1)");
                    $('#glass_2').css("transform", "scale(1)");
                    $('#right_instruct').show();
                    $('.info_bar_right > .info_image').css('background-image', 'none');
                    $('.info_bar_right > .info_content > .info_content_title').html("");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("");
                    break;
            }
        }
    });

    //Roadway
    // enable draggables to be dropped into this
    interact('#len_8').dropzone({
        // only accept elements matching this CSS selector
        accept: '.magnify_glass',
        // Require a 75% element overlap for a drop to be possible
        overlap: 0.25,
        ondragenter: function(event) {
            var draggableElement = event.relatedTarget,
                dropzoneElement = event.target;
            draggableElement.classList.add('dropped-element');
            draggableElement.classList.remove('removed-element');
            var glass = draggableElement.getAttribute('id');
            switch (glass) {
                case 'glass_1':
                    audio_len_8_L.src = audioFiles[6];
                    // pan left
                    panNode_L.pan.value = -1;
                    // play audio
                    audio_len_8_L.play();
                    console.log(panNode_L.pan.value);
                    $('#len_8').css('z-index', '5');
                    $('#len_8_image').css("transform", "scale(1.2)");
                    $('#glass_1').css("transform", "scale(2)");
                    $('#left_instruct').hide();
                    $('.info_bar_left > .info_image').css({
                        'background-image' : 'url("img/len-8.jpeg")',
                        'width' : '425px',
                        'height' : '330px'
                    });
                    $('.info_bar_left > .info_content > .info_content_title').html("Uptown");
                    $('.info_bar_left > .info_content > .info_content_subtitle').html('Robertsport, Grand Cape Mount');
                    $('.info_bar_left > .info_content > .info_content_wrap').html("The simple life from my perspective reminds me of all the wonderful convenience that make life complicated and inconvenient in the West.");
                    break;
                case 'glass_2':
                    audio_len_8_R.src = audioFiles[7];
                    // pan left
                    panNode_R.pan.value = 1;
                    // play audio
                    audio_len_8_R.play();
                    console.log(panNode_R.pan.value);
                    $('#len_8').css('z-index', '5');
                    $('#len_8_image').css("transform", "scale(1.2)");
                    $('#glass_2').css("transform", "scale(2)");
                    $('#right_instruct').hide();
                    $('.info_bar_right > .info_image').css({
                        'background-image' : 'url("img/len-8.jpeg")',
                        'width' : '425px',
                        'height' : '330px'
                    });
                    $('.info_bar_right > .info_content > .info_content_title').html("Uptown");
                    $('.info_bar_right > .info_content > .info_content_subtitle').html('Robertsport, Grand Cape Mount');
                    $('.info_bar_right > .info_content > .info_content_wrap').html("The simple life from my perspective reminds me of all the wonderful convenience that make life complicated and inconvenient in the West.");
                    break;
            }
        },
        ondragleave: function(event) {
            var draggableElement = event.relatedTarget,
                dropzoneElement = event.target;
            draggableElement.classList.add('removed-element');
            draggableElement.classList.remove('dropped-element');
            var glass = draggableElement.getAttribute('id');
            switch (glass) {
                case 'glass_1':
                    audio_len_8_L.pause();
                    audio_len_8_L.currentTime = 0;
                    $('#len_8').css('z-index', '1');
                    $('#len_8_image').css("transform", "scale(1)");
                    $('#glass_1').css("transform", "scale(1)");
                    $('#left_instruct').show();
                    $('.info_bar_left > .info_image').css('background-image', 'none');
                    $('.info_bar_left > .info_content > .info_content_title').html("");
                    $('.info_bar_left > .info_content > .info_content_subtitle').html('');
                    $('.info_bar_left > .info_content > .info_content_wrap').html("");
                    break;
                case 'glass_2':
                    audio_len_8_R.pause();
                    audio_len_8_R.currentTime = 0;
                    $('#len_8').css('z-index', '1');
                    $('#len_8_image').css("transform", "scale(1)");
                    $('#glass_2').css("transform", "scale(1)");
                    $('#right_instruct').show();
                    $('.info_bar_right > .info_image').css('background-image', 'none');
                    $('.info_bar_right > .info_content > .info_content_title').html("");
                    $('.info_bar_right > .info_content > .info_content_subtitle').html('');
                    $('.info_bar_right > .info_content > .info_content_wrap').html("");
                    break;
            }
        }
    });

    //Driveway
    // enable draggables to be dropped into this
    interact('#len_4').dropzone({
        // only accept elements matching this CSS selector
        accept: '.magnify_glass',
        // Require a 75% element overlap for a drop to be possible
        overlap: 0.25,
        ondragenter: function(event) {
            var draggableElement = event.relatedTarget,
                dropzoneElement = event.target;
            draggableElement.classList.add('dropped-element');
            draggableElement.classList.remove('removed-element');
            var glass = draggableElement.getAttribute('id');
            switch (glass) {
                case 'glass_1':
                    audio_len_4_L.src = audioFiles[8];
                    // pan left
                    panNode_L.pan.value = -1;
                    // play audio
                    audio_len_4_L.play();
                    console.log(panNode_L.pan.value);
                    $('#len_4').css('z-index', '5');
                    $('#len_4_image').css("transform", "scale(1.2)");
                    $('#glass_1').css("transform", "scale(2)");
                    $('#left_instruct').hide();
                    $('.info_bar_left > .info_image').css({
                        'background-image': 'url("img/len-4.jpeg")',
                        'width': '425px',
                        'height': '330px'
                    });
                    $('.info_bar_left > .info_content > .info_content_title').html("Cece Lendeh's House");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("Traveling across the Atlantic ocean and being able to see where my Mother was raised anchors me. Liberia went through fifteen years or uncivil war and having the opportunity to hear stories from survivors who knew my grandmother and mother as a child helps me understand parts of myself. ");
                    break;
                case 'glass_2':
                    audio_len_4_R.src = audioFiles[9];
                    // pan left
                    panNode_R.pan.value = 1;
                    // play audio
                    audio_len_4_R.play();
                    console.log(panNode_R.pan.value);
                    $('#len_4').css('z-index', '5');
                    $('#len_4_image').css("transform", "scale(1.2)");
                    $('#glass_2').css("transform", "scale(2)");
                    $('#right_instruct').hide();
                    $('.info_bar_right > .info_image').css({
                        'background-image': 'url("img/len-4.jpeg")',
                        'width': '425px',
                        'height': '330px'
                    });
                    $('.info_bar_right > .info_content > .info_content_title').html("Cece Lendeh's House");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("Traveling across the Atlantic ocean and being able to see where my Mother was raised anchors me. Liberia went through fifteen years or uncivil war and having the opportunity to hear stories from survivors who knew my grandmother and mother as a child helps me understand parts of myself. ");
                    break;
            }
        },
        ondragleave: function(event) {
            var draggableElement = event.relatedTarget,
                dropzoneElement = event.target;
            draggableElement.classList.add('removed-element');
            draggableElement.classList.remove('dropped-element');
            var glass = draggableElement.getAttribute('id');
            switch (glass) {
                case 'glass_1':
                    audio_len_4_L.pause();
                    audio_len_4_L.currentTime = 0;
                    $('#len_4').css('z-index', '1');
                    $('#len_4_image').css("transform", "scale(1)");
                    $('#glass_1').css("transform", "scale(1)");
                    $('#left_instruct').show();
                    $('.info_bar_left > .info_image').css('background-image', 'none');
                    $('.info_bar_left > .info_content > .info_content_title').html("");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("");
                    break;
                case 'glass_2':
                    audio_len_4_R.pause();
                    audio_len_4_R.currentTime = 0;
                    $('#len_4').css('z-index', '1');
                    $('#len_4_image').css("transform", "scale(1)");
                    $('#glass_2').css("transform", "scale(1)");
                    $('#right_instruct').show();
                    $('.info_bar_right > .info_image').css('background-image', 'none');
                    $('.info_bar_right > .info_content > .info_content_title').html("");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("");
                    break;
            }
        }
    });

    //diver element interaction
    // enable draggables to be dropped into this
    interact('#len_5').dropzone({
        // only accept elements matching this CSS selector
        accept: '.magnify_glass',
        // Require a 75% element overlap for a drop to be possible
        overlap: 0.25,
        ondragenter: function(event) {
            var draggableElement = event.relatedTarget,
                dropzoneElement = event.target;
            draggableElement.classList.add('dropped-element');
            draggableElement.classList.remove('removed-element');
            var glass = draggableElement.getAttribute('id');
            switch (glass) {
                case 'glass_1':
                    audio_len_5_L.src = audioFiles[10];
                    // pan left
                    panNode_L.pan.value = -1;
                    // play audio
                    audio_len_5_L.play();
                    console.log(panNode_L.pan.value);
                    $('#len_5').css('z-index', '5');
                    $('#len_5_image').css("transform", "scale(1.2)");
                    $('#glass_1').css("transform", "scale(2)");
                    $('#left_instruct').hide();
                    $('.info_bar_left > .info_image').css({
                        "background-image": 'url("img/len-5.jpeg")',
                        'width': '425px',
                        'height': '280px'
                    });
                    $('.info_bar_left > .info_content > .info_content_title').html("Space Between");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("This image was taken in 2004, six months after the uncivil war ended. I was traveling to the airport and on several occasions was afraid to take pictures.");
                    break;
                case 'glass_2':
                    audio_len_5_R.src = audioFiles[11];
                    // pan left
                    panNode_R.pan.value = 1;
                    // play audio
                    audio_len_5_R.play();
                    console.log(panNode_R.pan.value);
                    $('#len_5').css('z-index', '5');
                    $('#len_5_image').css("transform", "scale(1.2)");
                    $('#glass_2').css("transform", "scale(2)");
                    $('#right_instruct').hide();
                    $('.info_bar_right > .info_image').css({
                        "background-image": 'url("img/len-5.jpeg")',
                        'width': '425px',
                        'height': '280px'
                    });
                    $('.info_bar_right > .info_content > .info_content_title').html("Space Between");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("This image was taken in 2004, six months after the uncivil war ended. I was traveling to the airport and on several occasions was afraid to take pictures.");
                    break;
            }
        },
        ondragleave: function(event) {
            var draggableElement = event.relatedTarget,
                dropzoneElement = event.target;
            draggableElement.classList.add('removed-element');
            draggableElement.classList.remove('dropped-element');
            var glass = draggableElement.getAttribute('id');
            switch (glass) {
                case 'glass_1':
                    audio_len_5_L.pause();
                    audio_len_5_L.currentTime = 0;
                    $('#len_5').css('z-index', '1');
                    $('#len_5_image').css("transform", "scale(1)");
                    $('#glass_1').css("transform", "scale(1)");
                    $('#left_instruct').show();
                    $('.info_bar_left > .info_image').css("background-image", 'none');
                    $('.info_bar_left > .info_content > .info_content_title').html("");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("");
                    break;
                case 'glass_2':
                    audio_len_5_R.pause();
                    audio_len_5_R.currentTime = 0;
                    $('#len_5').css('z-index', '1');
                    $('#len_5_image').css("transform", "scale(1)");
                    $('#glass_2').css("transform", "scale(1)");
                    $('#right_instruct').css("background-image", 'none');
                    $('.info_bar_right > .info_image').css('background-image', 'none');
                    $('.info_bar_right > .info_content > .info_content_title').html("");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("");
                    break;
            }
        }
    });

    //Mom and Child
    // enable draggables to be dropped into this
    interact('#ange_1').dropzone({
        // only accept elements matching this CSS selector
        accept: '.magnify_glass',
        // Require a 75% element overlap for a drop to be possible
        overlap: 0.25,
        ondragenter: function(event) {
            var draggableElement = event.relatedTarget,
                dropzoneElement = event.target;
            draggableElement.classList.add('dropped-element');
            draggableElement.classList.remove('removed-element');
            var glass = draggableElement.getAttribute('id');
            switch (glass) {
                case 'glass_1':
                    audio_ange_1_L.src = audioFiles[12];
                    // pan left
                    panNode_L.pan.value = -1;
                    // play audio
                    audio_ange_1_L.play();
                    console.log(panNode_L.pan.value);
                    $('#ange_1').css('z-index', '5');
                    $('#ange_1_image').css("transform", "scale(1.2)");
                    $('#glass_1').css("transform", "scale(2)");
                    $('#left_instruct').hide();
                    $('.info_bar_left > .info_image').css({
                        'background-image' : 'url("img/ange-1.jpg")',
                        'width': '425px',
                        'height' : '425px'
                    });
                    $('.info_bar_left > .info_content > .info_content_title').html("Image Title");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("This is where the information about the magnified object would display.");
                    break;
                case 'glass_2':
                    audio_ange_1_R.src = audioFiles[13];
                    // pan left
                    panNode_R.pan.value = 1;
                    // play audio
                    audio_ange_1_R.play();
                    console.log(panNode_R.pan.value);
                    $('#ange_1').css('z-index', '5');
                    $('#ange_1_image').css("transform", "scale(1.2)");
                    $('#glass_2').css("transform", "scale(2)");
                    $('#right_instruct').hide();
                    $('.info_bar_right > .info_image').css({
                        'background-image' : 'url("img/ange-1.jpg")',
                        'width': '425px',
                        'height' : '425px'
                    });
                    $('.info_bar_right > .info_content > .info_content_title').html("Image Title");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("This is where the information about the magnified object would display.");
                    break;
            }
        },
        ondragleave: function(event) {
            var draggableElement = event.relatedTarget,
                dropzoneElement = event.target;
            draggableElement.classList.add('removed-element');
            draggableElement.classList.remove('dropped-element');
            var glass = draggableElement.getAttribute('id');
            switch (glass) {
                case 'glass_1':
                    audio_ange_1_L.pause();
                    audio_ange_1_L.currentTime = 0;
                    $('#ange_1').css('z-index', '1');
                    $('#ange_1_image').css("transform", "scale(1)");
                    $('#glass_1').css("transform", "scale(1)");
                    $('#left_instruct').show();
                    $('.info_bar_left > .info_image').css('background-image', 'none');
                    $('.info_bar_left > .info_content > .info_content_title').html("");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("");
                    break;
                case 'glass_2':
                    audio_ange_1_R.pause();
                    audio_ange_1_R.currentTime = 0;
                    $('#ange_1').css('z-index', '1');
                    $('#ange_1_image').css("transform", "scale(1)");
                    $('#glass_2').css("transform", "scale(1)");
                    $('#right_instruct').show();
                    $('.info_bar_right > .info_image').css('background-image', 'none');
                    $('.info_bar_right > .info_content > .info_content_title').html("");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("");
                    break;
            }
        }
    });

    //Browser Idle Refresh

    var time = new Date().getTime();
    $(document.body).bind("touchmove mousemove keypress", function(e) {
        time = new Date().getTime();
    });

    function refresh() {
        if (new Date().getTime() - time >= 120000)
            window.location.reload(true);
        else
            setTimeout(refresh, 20000);
    }

    setTimeout(refresh, 20000);

}); //do not lose this closing bracket - unless you like breaking everything for fun
