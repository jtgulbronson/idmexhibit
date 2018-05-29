$(document).ready(function () {
    //////////////////////////////////////
    // disabling some default functionality of browser
    //////////////////////////////////////
    //drag to scroll
    document.body.addEventListener('touchmove', function (event) {
        event.preventDefault();
    }, false);

    //keeps users from selecting text (highlighting)
    var textSelect = $("html");
    textSelect.attr('unselectable', 'on').css('user-select', 'none').on('selectstart dragstart', false);

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

    //setting sides to fadeout for smoother animation
    $('.info_bar_left > .extras').hide();
    $('.info_bar_right > .extras').hide();

    //color portrait with black dress interaction
    // enable draggables to be dropped into this
    interact('#len_1').dropzone({
        // only accept elements matching this CSS selector
        accept: '.magnify_glass',
        // Require a 75% element overlap for a drop to be possible
        overlap: 0.25,
        ondragenter: function (event) {
            var draggableElement = event.relatedTarget,
                dropzoneElement = event.target;
            draggableElement.classList.add('dropped-element');
            draggableElement.classList.remove('removed-element');
            var glass = draggableElement.getAttribute('id');
            switch (glass) {
                case 'glass_1':
                    $('#len_1').css('z-index', '5');
                    $('#len_1_image').css("transform", "scale(1.2)");
                    $('#glass_1').css("transform", "scale(2.5)");
                    $('#left_instruct').hide();
                    $('.info_bar_left > .extras').show();

                    $('.info_bar_left > .info_name').html("Len");
                    $('.info_bar_left > .info_image').css({
                        'display': 'block',
                        'background-image': 'url("img/sides/Cropped_Len_Mom.png")',
                        'width': '100%',
                        'height': '400px'
                    }).delay(200).fadeIn(400);
                    $('.info_bar_left > .info_content > .info_content_title').html("Mother");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("Len’s mother's strength and boldness is an inspiration to her. She raised many children and adults. Her life story is one of triumph.");
                    $('.info_bar_left').show();
                    break;
                case 'glass_2':
                    $('#len_1').css('z-index', '5');
                    $('#len_1_image').css("transform", "scale(1.2)");
                    $('#glass_2').css("transform", "scale(2.5)");
                    $('#right_instruct').hide();
                    $('.info_bar_right > .extras').show();

                    $('.info_bar_right > .info_name').html("Len");
                    $('.info_bar_right > .info_image').css({
                        'display': 'block',
                        'background-image': 'url("img/sides/Cropped_Len_Mom.png")',
                        'width': '100%',
                        'height': '400px'
                    }).delay(200).fadeIn(400);
                    $('.info_bar_right > .info_content > .info_content_title').html("Mother");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("Len’s mother's strength and boldness is an inspiration to her. She raised many children and adults. Her life story is one of triumph.");
                    $('.info_bar_right').show();
                    break;
            }
        },
        ondragleave: function (event) {
            var draggableElement = event.relatedTarget,
                dropzoneElement = event.target;
            draggableElement.classList.add('removed-element');
            draggableElement.classList.remove('dropped-element');
            var glass = draggableElement.getAttribute('id');
            switch (glass) {
                case 'glass_1':
                    $('#len_1').css('z-index', '1');
                    $('#len_1_image').css("transform", "scale(1)");
                    $('#glass_1').css("transform", "scale(1)");
                    $('#left_instruct').show();
                    $('.info_bar_left > .extras').hide();

                    $('.info_bar_left > .info_name').html("");
                    $('.info_bar_left > .info_image').css({
                        'background-image': 'none',
                        'display': 'none'
                    });
                    $('.info_bar_left > .info_content > .info_content_title').html("");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("");
                    $('.info_bar_left').hide();
                    break;
                case 'glass_2':
                    $('#len_1').css('z-index', '1');
                    $('#len_1_image').css("transform", "scale(1)");
                    $('#glass_2').css("transform", "scale(1)");
                    $('#right_instruct').show();
                    $('.info_bar_right > .extras').hide();

                    $('.info_bar_right > .info_name').html("");
                    $('.info_bar_right > .info_image').css({
                        'background-image': 'none',
                        'display': 'none'
                    });
                    $('.info_bar_right > .info_content > .info_content_title').html("");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("");
                    $('.info_bar_right').hide();
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
        ondragenter: function (event) {
            var draggableElement = event.relatedTarget,
                dropzoneElement = event.target;
            draggableElement.classList.add('dropped-element')
            draggableElement.classList.remove('removed-element');
            var glass = draggableElement.getAttribute('id');
            switch (glass) {
                case 'glass_1':
                    $('#len_2').css('z-index', '5');
                    $('#len_2_image').css("transform", "scale(1.2)");
                    $('#glass_1').css("transform", "scale(2)");
                    $('#left_instruct').hide();
                    $('.info_bar_left > .extras').show();

                    $('.info_bar_left > .info_name').html("Len");
                    $('.info_bar_left > .info_image').css({
                        'display': 'block',
                        "background-image": 'url("img/sides/Cropped_Len_Alley.png")',
                        'width': '100%',
                        'height': '400px'
                    });

                    $('.info_bar_left > .info_content > .info_content_title').html("Space Between");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("Len has many images from Robertsport, the capital of Grand Cape Mount in Liberia; however, she loves capturing people in their daily routines unbothered by a curious transnational.");
                    $('.info_bar_left').show();
                    break;
                case 'glass_2':
                    $('#len_2').css('z-index', '5');
                    $('#len_2_image').css("transform", "scale(1.2)");
                    $('#glass_2').css("transform", "scale(2)");
                    $('#right_instruct').hide();
                    $('.info_bar_right > .extras').show();

                    $('.info_bar_right > .info_name').html("Len");
                    $('.info_bar_right > .info_image').css({
                        'display': 'block',
                        "background-image": 'url("img/sides/Cropped_Len_Alley.png")',
                        'width': '100%',
                        'height': '400px'
                    });
                    $('.info_bar_right > .info_content > .info_content_title').html("Space Between");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("Len has many images from Robertsport, the capital of Grand Cape Mount in Liberia; however, she loves capturing people in their daily routines unbothered by a curious transnational.");
                    $('.info_bar_right').show();
                    break;
            }
        },
        ondragleave: function (event) {
            var draggableElement = event.relatedTarget,
                dropzoneElement = event.target;
            draggableElement.classList.add('removed-element');
            draggableElement.classList.remove('dropped-element');
            var glass = draggableElement.getAttribute('id');
            switch (glass) {
                case 'glass_1':
                    $('#len_2').css('z-index', '1');
                    $('#len_2_image').css("transform", "scale(1)");
                    $('#glass_1').css("transform", "scale(1)");
                    $('#left_instruct').show();
                    $('.info_bar_left > .extras').hide();

                    $('.info_bar_left > .info_name').html("");
                    $('.info_bar_left > .info_image').css("background-image", 'none');
                    $('.info_bar_left > .info_content > .info_content_title').html("");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("");
                    $('.info_bar_left').hide();
                    break;
                case 'glass_2':
                    $('#len_2').css('z-index', '1');
                    $('#len_2_image').css("transform", "scale(1)");
                    $('#glass_2').css("transform", "scale(1)");
                    $('#right_instruct').show();
                    $('.info_bar_right > .extras').hide();

                    $('.info_bar_right > .info_name').html("");
                    $('.info_bar_right > .info_image').css("background-image", 'none');
                    $('.info_bar_right > .info_content > .info_content_title').html("");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("");
                    $('.info_bar_right').hide();
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
        ondragenter: function (event) {
            var draggableElement = event.relatedTarget,
                dropzoneElement = event.target;
            draggableElement.classList.add('dropped-element');
            draggableElement.classList.remove('removed-element');
            var glass = draggableElement.getAttribute('id');
            switch (glass) {
                case 'glass_1':
                    $('#len_3').css('z-index', '5');
                    $('#len_3_image').css("transform", "scale(1.2)");
                    $('#glass_1').css("transform", "scale(2)");
                    $('#left_instruct').hide();
                    $('.info_bar_left > .extras').show();

                    $('.info_bar_left > .info_name').html("Len");
                    $('.info_bar_left > .info_image').css({
                        'display': 'block',
                        'background-image': 'url("img/sides/Cropped_Len_GMom.png")',
                        'width': '100%',
                        'height': '400px'
                    });
                    $('.info_bar_left > .info_content > .info_content_title').html("Grandmother");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("Len’s maternal grandmother transitioned when she was very young. Although she does not remember her presence, she passed down her love of textiles and artistic creativity. She was a known healer and Len has been told people would come to her for dislocated limbs and infertility. She is inspired by her generous spirit and proud to carry her name, Lendeh.");
                    $('.info_bar_left').show();
                    break;
                case 'glass_2':
                    $('#len_3').css('z-index', '5');
                    $('#len_3_image').css("transform", "scale(1.2)");
                    $('#glass_2').css("transform", "scale(2)");
                    $('#right_instruct').hide();
                    $('.info_bar_right > .extras').show();

                    $('.info_bar_right > .info_name').html("Len");
                    $('.info_bar_right > .info_image').css({
                        'display': 'block',
                        'background-image': 'url("img/sides/Cropped_Len_GMom.png")',
                        'width': '100%',
                        'height': '400px'
                    });
                    $('.info_bar_right > .info_content > .info_content_title').html("Grandmother");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("Len’s maternal grandmother transitioned when she was very young. Although she does not remember her presence, she passed down her love of textiles and artistic creativity. She was a known healer and Len has been told people would come to her for dislocated limbs and infertility. She is inspired by her generous spirit and proud to carry her name, Lendeh.");
                    $('.info_bar_right').show();
                    break;
            }
        },
        ondragleave: function (event) {
            var draggableElement = event.relatedTarget,
                dropzoneElement = event.target;
            draggableElement.classList.add('removed-element');
            draggableElement.classList.remove('dropped-element');
            var glass = draggableElement.getAttribute('id');
            switch (glass) {
                case 'glass_1':
                    $('#len_3').css('z-index', '1');
                    $('#len_3_image').css("transform", "scale(1)");
                    $('#glass_1').css("transform", "scale(1)");
                    $('#left_instruct').show();
                    $('.info_bar_left > .extras').hide();

                    $('.info_bar_left > .info_name').html("");
                    $('.info_bar_left > .info_image').css({
                        'background-image': 'none',
                        'display': 'none'
                    });
                    $('.info_bar_left > .info_content > .info_content_title').html("");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("");
                    $('.info_bar_left').hide();
                    break;
                case 'glass_2':
                    $('#len_3').css('z-index', '1');
                    $('#len_3_image').css("transform", "scale(1)");
                    $('#glass_2').css("transform", "scale(1)");
                    $('#right_instruct').show();
                    $('.info_bar_right > .extras').hide();

                    $('.info_bar_right > .info_name').html("");
                    $('.info_bar_right > .info_image').css({
                        'background-image': 'none',
                        'display': 'none'
                    });
                    $('.info_bar_right > .info_content > .info_content_title').html("");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("");
                    $('.info_bar_right').hide();
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
        ondragenter: function (event) {
            var draggableElement = event.relatedTarget,
                dropzoneElement = event.target;
            draggableElement.classList.add('dropped-element');
            draggableElement.classList.remove('removed-element');
            var glass = draggableElement.getAttribute('id');
            switch (glass) {
                case 'glass_1':
                    $('#len_8').css('z-index', '5');
                    $('#len_8_image').css("transform", "scale(1.2)");
                    $('#glass_1').css("transform", "scale(2)");
                    $('#left_instruct').hide();
                    $('.info_bar_left > .extras').show();

                    $('.info_bar_left > .info_name').html("Len");
                    $('.info_bar_left > .info_image').css({
                        'display': 'block',
                        'background-image': 'url("img/sides/Cropped_Len_Road.png")',
                        'width': '100%',
                        'height': '400px'
                    });
                    $('.info_bar_left > .info_content > .info_content_title').html("Uptown");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("The simple life from my perspective reminds me of all the wonderful convenience that make life complicated and inconvenient in the West.");
                    $('.info_bar_left').show();
                    break;
                case 'glass_2':
                    $('#len_8').css('z-index', '5');
                    $('#len_8_image').css("transform", "scale(1.2)");
                    $('#glass_2').css("transform", "scale(2)");
                    $('#right_instruct').hide();
                    $('.info_bar_right > .extras').show();

                    $('.info_bar_right > .info_name').html("Len");
                    $('.info_bar_right > .info_image').css({
                        'display': 'block',
                        'background-image': 'url("img/sides/Cropped_Len_Road.png")',
                        'width': '100%',
                        'height': '400px'
                    });
                    $('.info_bar_right > .info_content > .info_content_title').html("Uptown");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("The simple life from my perspective reminds me of all the wonderful convenience that make life complicated and inconvenient in the West.");
                    $('.info_bar_right').show();
                    break;
            }
        },
        ondragleave: function (event) {
            var draggableElement = event.relatedTarget,
                dropzoneElement = event.target;
            draggableElement.classList.add('removed-element');
            draggableElement.classList.remove('dropped-element');
            var glass = draggableElement.getAttribute('id');
            switch (glass) {
                case 'glass_1':
                    $('#len_8').css('z-index', '1');
                    $('#len_8_image').css("transform", "scale(1)");
                    $('#glass_1').css("transform", "scale(1)");
                    $('#left_instruct').show();
                    $('.info_bar_left > .extras').hide();

                    $('.info_bar_left > .info_name').html("");
                    $('.info_bar_left > .info_image').css({
                        'background-image': 'none',
                        'display': 'none'
                    });
                    $('.info_bar_left > .info_content > .info_content_title').html("");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("");
                    $('.info_bar_left').hide();
                    break;
                case 'glass_2':
                    $('#len_8').css('z-index', '1');
                    $('#len_8_image').css("transform", "scale(1)");
                    $('#glass_2').css("transform", "scale(1)");
                    $('#right_instruct').show();
                    $('.info_bar_right > .extras').hide();

                    $('.info_bar_right > .info_name').html("");
                    $('.info_bar_right > .info_image').css({
                        'background-image': 'none',
                        'display': 'none'
                    });
                    $('.info_bar_right > .info_content > .info_content_title').html("");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("");
                    $('.info_bar_right').hide();
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
        ondragenter: function (event) {
            var draggableElement = event.relatedTarget,
                dropzoneElement = event.target;
            draggableElement.classList.add('dropped-element');
            draggableElement.classList.remove('removed-element');
            var glass = draggableElement.getAttribute('id');
            switch (glass) {
                case 'glass_1':
                    $('#len_4').css('z-index', '5');
                    $('#len_4_image').css("transform", "scale(1.2)");
                    $('#glass_1').css("transform", "scale(2)");
                    $('#left_instruct').hide();
                    $('.info_bar_left > .extras').show();

                    $('.info_bar_left > .info_name').html("Len");
                    $('.info_bar_left > .info_image').css({
                        'display': 'block',
                        'background-image': 'url("img/sides/Cropped_Len_House.png")',
                        'width': '100%',
                        'height': '400px'
                    });
                    $('.info_bar_left > .info_content > .info_content_title').html("Cece Lendeh's House");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("Traveling across the Atlantic ocean and being able to see where my Mother was raised anchors Len. Liberia went through fifteen years of uncivil war and having the opportunity to hear stories from survivors who knew her grandmother and mother as a child helps her understand parts of herself.");
                    $('.info_bar_left').show();
                    break;
                case 'glass_2':
                    $('#len_4').css('z-index', '5');
                    $('#len_4_image').css("transform", "scale(1.2)");
                    $('#glass_2').css("transform", "scale(2)");
                    $('#right_instruct').hide();
                    $('.info_bar_right > .extras').show();

                    $('.info_bar_right > .info_name').html("Len");
                    $('.info_bar_right > .info_image').css({
                        'display': 'block',
                        'background-image': 'url("img/sides/Cropped_Len_House.png")',
                        'width': '100%',
                        'height': '400px'
                    });
                    $('.info_bar_right > .info_content > .info_content_title').html("Cece Lendeh's House");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("Traveling across the Atlantic ocean and being able to see where my Mother was raised anchors Len. Liberia went through fifteen years of uncivil war and having the opportunity to hear stories from survivors who knew her grandmother and mother as a child helps her understand parts of herself. ");
                    $('.info_bar_right').show();
                    break;
            }
        },
        ondragleave: function (event) {
            var draggableElement = event.relatedTarget,
                dropzoneElement = event.target;
            draggableElement.classList.add('removed-element');
            draggableElement.classList.remove('dropped-element');
            var glass = draggableElement.getAttribute('id');
            switch (glass) {
                case 'glass_1':
                    $('#len_4').css('z-index', '1');
                    $('#len_4_image').css("transform", "scale(1)");
                    $('#glass_1').css("transform", "scale(1)");
                    $('#left_instruct').show();
                    $('.info_bar_left > .extras').hide();

                    $('.info_bar_left > .info_name').html("");
                    $('.info_bar_left > .info_image').css({
                        'background-image': 'none',
                        'display': 'none'
                    });
                    $('.info_bar_left > .info_content > .info_content_title').html("");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("");
                    $('.info_bar_left').hide();
                    break;
                case 'glass_2':
                    $('#len_4').css('z-index', '1');
                    $('#len_4_image').css("transform", "scale(1)");
                    $('#glass_2').css("transform", "scale(1)");
                    $('#right_instruct').show();
                    $('.info_bar_right > .extras').hide();

                    $('.info_bar_right > .info_name').html("");
                    $('.info_bar_right > .info_image').css({
                        'background-image': 'none',
                        'display': 'none'
                    });
                    $('.info_bar_right > .info_content > .info_content_title').html("");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("");
                    $('.info_bar_right').hide();
                    break;
            }
        }
    });

    //len car black and white
    // enable draggables to be dropped into this
    interact('#len_5').dropzone({
        // only accept elements matching this CSS selector
        accept: '.magnify_glass',
        // Require a 75% element overlap for a drop to be possible
        overlap: 0.25,
        ondragenter: function (event) {
            var draggableElement = event.relatedTarget,
                dropzoneElement = event.target;
            draggableElement.classList.add('dropped-element');
            draggableElement.classList.remove('removed-element');
            var glass = draggableElement.getAttribute('id');
            switch (glass) {
                case 'glass_1':
                    $('#len_5').css('z-index', '5');
                    $('#len_5_image').css("transform", "scale(1.2)");
                    $('#glass_1').css("transform", "scale(2)");
                    $('#left_instruct').hide();
                    $('.info_bar_left > .extras').show();

                    $('.info_bar_left > .info_name').html("Len");
                    $('.info_bar_left > .info_image').css({
                        'display': 'block',
                        "background-image": 'url("img/sides/Cropped_Len_Car.png")',
                        'width': '100%',
                        'height': '400px'
                    });
                    $('.info_bar_left > .info_content > .info_content_title').html("Space Between");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("This image was taken in 2004, six months after the uncivil war ended. Len was traveling to the airport and on several occasions, felt afraid to take pictures.");
                    $('.info_bar_left').show();
                    break;
                case 'glass_2':
                    $('#len_5').css('z-index', '5');
                    $('#len_5_image').css("transform", "scale(1.2)");
                    $('#glass_2').css("transform", "scale(2)");
                    $('#right_instruct').hide();
                    $('.info_bar_right > .extras').show();

                    $('.info_bar_right > .info_name').html("Len");
                    $('.info_bar_right > .info_image').css({
                        'display': 'block',
                        "background-image": 'url("img/sides/Cropped_Len_Car.png")',
                        'width': '100%',
                        'height': '400px'
                    });
                    $('.info_bar_right > .info_content > .info_content_title').html("Space Between");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("This image was taken in 2004, six months after the uncivil war ended. Len was traveling to the airport and on several occasions, felt afraid to take pictures.");
                    $('.info_bar_right').show();
                    break;
            }
        },
        ondragleave: function (event) {
            var draggableElement = event.relatedTarget,
                dropzoneElement = event.target;
            draggableElement.classList.add('removed-element');
            draggableElement.classList.remove('dropped-element');
            var glass = draggableElement.getAttribute('id');
            switch (glass) {
                case 'glass_1':
                    $('#len_5').css('z-index', '1');
                    $('#len_5_image').css("transform", "scale(1)");
                    $('#glass_1').css("transform", "scale(1)");
                    $('#left_instruct').show();
                    $('.info_bar_left > .extras').hide();

                    $('.info_bar_left > .info_name').html("");
                    $('.info_bar_left > .info_image').css("background-image", 'none');
                    $('.info_bar_left > .info_content > .info_content_title').html("");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("");
                    $('.info_bar_left').hide();
                    break;
                case 'glass_2':
                    $('#len_5').css('z-index', '1');
                    $('#len_5_image').css("transform", "scale(1)");
                    $('#glass_2').css("transform", "scale(1)");
                    $('#right_instruct').show();
                    $('.info_bar_right > .extras').hide();

                    $('.info_bar_right > .info_name').html("");
                    $('.info_bar_right > .info_image').css({
                        'background-image': 'none',
                        'display': 'none'
                    });
                    $('.info_bar_right > .info_content > .info_content_title').html("");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("");
                    $('.info_bar_right').hide();
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
        ondragenter: function (event) {
            var draggableElement = event.relatedTarget,
                dropzoneElement = event.target;
            draggableElement.classList.add('dropped-element');
            draggableElement.classList.remove('removed-element');
            var glass = draggableElement.getAttribute('id');
            switch (glass) {
                case 'glass_1':
                    $('#ange_1').css('z-index', '5');
                    $('#ange_1_image').css("transform", "scale(1.2)");
                    $('#glass_1').css("transform", "scale(2)");
                    $('#left_instruct').hide();
                    $('.info_bar_left > .extras').show();

                    $('.info_bar_left > .info_name').html("Ange");
                    $('.info_bar_left > .info_image').css({
                        'display': 'block',
                        'background-image': 'url("img/sides/Cropped_Ange_Baby.png")',
                        'width': '100%',
                        'height': '400px'
                    });
                    $('.info_bar_left > .info_content > .info_content_title').html("Mother");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("Here Ange is with her mom outside their home in Kampar.");
                    $('.info_bar_left').show();
                    break;
                case 'glass_2':
                    $('#ange_1').css('z-index', '5');
                    $('#ange_1_image').css("transform", "scale(1.2)");
                    $('#glass_2').css("transform", "scale(2)");
                    $('#right_instruct').hide();
                    $('.info_bar_right > .extras').show();

                    $('.info_bar_right > .info_name').html("Ange");
                    $('.info_bar_right > .info_image').css({
                        'display': 'block',
                        'background-image': 'url("img/sides/Cropped_Ange_Baby.png")',
                        'width': '100%',
                        'height': '400px'
                    });
                    $('.info_bar_right > .info_content > .info_content_title').html("Mother");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("Here Ange is with her mom outside their home in Kampar.");
                    $('.info_bar_right').show();
                    break;
            }
        },
        ondragleave: function (event) {
            var draggableElement = event.relatedTarget,
                dropzoneElement = event.target;
            draggableElement.classList.add('removed-element');
            draggableElement.classList.remove('dropped-element');
            var glass = draggableElement.getAttribute('id');
            switch (glass) {
                case 'glass_1':
                    $('#ange_1').css('z-index', '1');
                    $('#ange_1_image').css("transform", "scale(1)");
                    $('#glass_1').css("transform", "scale(1)");
                    $('#left_instruct').show();
                    $('.info_bar_left > .extras').hide();

                    $('.info_bar_left > .info_name').html("");
                    $('.info_bar_left > .info_image').css({
                        'background-image': 'none',
                        'display': 'none'
                    });
                    $('.info_bar_left > .info_content > .info_content_title').html("");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("");
                    $('.info_bar_left').hide();
                    break;
                case 'glass_2':
                    $('#ange_1').css('z-index', '1');
                    $('#ange_1_image').css("transform", "scale(1)");
                    $('#glass_2').css("transform", "scale(1)");
                    $('#right_instruct').show();
                    $('.info_bar_right > .extras').hide();

                    $('.info_bar_right > .info_name').html("");
                    $('.info_bar_right > .info_image').css({
                        'background-image': 'none',
                        'display': 'none'
                    });
                    $('.info_bar_right > .info_content > .info_content_title').html("");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("");
                    $('.info_bar_right').hide();
                    break;
            }
        }
    });
    //Children in Tree
    // enable draggables to be dropped into this
    interact('#ange_2').dropzone({
        // only accept elements matching this CSS selector
        accept: '.magnify_glass',
        // Require a 75% element overlap for a drop to be possible
        overlap: 0.25,
        ondragenter: function (event) {
            var draggableElement = event.relatedTarget,
                dropzoneElement = event.target;
            draggableElement.classList.add('dropped-element');
            draggableElement.classList.remove('removed-element');
            var glass = draggableElement.getAttribute('id');
            switch (glass) {
                case 'glass_1':
                    $('#ange_2').css('z-index', '5');
                    $('#ange_2_image').css("transform", "scale(1.2)");
                    $('#glass_1').css("transform", "scale(2)");
                    $('#left_instruct').hide();
                    $('.info_bar_left > .extras').show();

                    $('.info_bar_left > .info_name').html("Ange");
                    $('.info_bar_left > .info_image').css({
                        'display': 'block',
                        'background-image': 'url("img/sides/Cropped_Ange_Kids.png")',
                        'width': '100%',
                        'height': '400px'
                    });
                    $('.info_bar_left > .info_content > .info_content_title').html("Cousins");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("In the little town of Kampar, Ange hanging out with her cousin thinking of what to eat next. ");
                    $('.info_bar_left').show();
                    break;
                case 'glass_2':
                    $('#ange_2').css('z-index', '5');
                    $('#ange_2_image').css("transform", "scale(1.2)");
                    $('#glass_2').css("transform", "scale(2)");
                    $('#right_instruct').hide();
                    $('.info_bar_right > .extras').show();

                    $('.info_bar_right > .info_name').html("Ange");
                    $('.info_bar_right > .info_image').css({
                        'display': 'block',
                        'background-image': 'url("img/sides/Cropped_Ange_Kids.png")',
                        'width': '100%',
                        'height': '400px'
                    });
                    $('.info_bar_right > .info_content > .info_content_title').html("Cousins");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("In the little town of Kampar, Ange hanging out with her cousin thinking of what to eat next. ");
                    $('.info_bar_right').show();
                    break;
            }
        },
        ondragleave: function (event) {
            var draggableElement = event.relatedTarget,
                dropzoneElement = event.target;
            draggableElement.classList.add('removed-element');
            draggableElement.classList.remove('dropped-element');
            var glass = draggableElement.getAttribute('id');
            switch (glass) {
                case 'glass_1':
                    $('#ange_2').css('z-index', '1');
                    $('#ange_2_image').css("transform", "scale(1)");
                    $('#glass_1').css("transform", "scale(1)");
                    $('#left_instruct').show();
                    $('.info_bar_left > .extras').hide();

                    $('.info_bar_left > .info_name').html("");
                    $('.info_bar_left > .info_image').css({
                        'background-image': 'none',
                        'display': 'none'
                    });
                    $('.info_bar_left > .info_content > .info_content_title').html("");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("");
                    $('.info_bar_left').hide();
                    break;
                case 'glass_2':
                    $('#ange_2').css('z-index', '1');
                    $('#ange_2_image').css("transform", "scale(1)");
                    $('#glass_2').css("transform", "scale(1)");
                    $('#right_instruct').show();
                    $('.info_bar_right > .extras').hide();

                    $('.info_bar_right > .info_name').html("");
                    $('.info_bar_right > .info_image').css({
                        'background-image': 'none',
                        'display': 'none'
                    });
                    $('.info_bar_right > .info_content > .info_content_title').html("");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("");
                    $('.info_bar_right').hide();
                    break;
            }
        }
    });

    //kiss
    // enable draggables to be dropped into this
    interact('#ange_3').dropzone({
        // only accept elements matching this CSS selector
        accept: '.magnify_glass',
        // Require a 75% element overlap for a drop to be possible
        overlap: 0.25,
        ondragenter: function (event) {
            var draggableElement = event.relatedTarget,
                dropzoneElement = event.target;
            draggableElement.classList.add('dropped-element');
            draggableElement.classList.remove('removed-element');
            var glass = draggableElement.getAttribute('id');
            switch (glass) {
                case 'glass_1':
                    $('#ange_3').css('z-index', '5');
                    $('#ange_3_image').css("transform", "scale(1.2)");
                    $('#glass_1').css("transform", "scale(2)");
                    $('#left_instruct').hide();
                    $('.info_bar_left > .extras').show();

                    $('.info_bar_left > .info_name').html("Ange");
                    $('.info_bar_left > .info_image').css({
                        'display': 'block',
                        'background-image': 'url("img/sides/Cropped_Ange_Kiss.png")',
                        'width': '100%',
                        'height': '400px'
                    });
                    $('.info_bar_left > .info_content > .info_content_title').html("Grandmother");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("Ange’s grandmother, an important influence in her cooking, and herself. Growing up, she wrote and preserved recipes, many of which Ange uses at Sate Kampar.");
                    $('.info_bar_left').show();
                    break;
                case 'glass_2':
                    $('#ange_3').css('z-index', '5');
                    $('#ange_3_image').css("transform", "scale(1.2)");
                    $('#glass_2').css("transform", "scale(2)");
                    $('#right_instruct').hide();
                    $('.info_bar_right > .extras').show();

                    $('.info_bar_right > .info_name').html("Ange");
                    $('.info_bar_right > .info_image').css({
                        'display': 'block',
                        'background-image': 'url("img/sides/Cropped_Ange_Kiss.png")',
                        'width': '100%',
                        'height': '400px'
                    });
                    $('.info_bar_right > .info_content > .info_content_title').html("Grandmother");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("Ange’s grandmother, an important influence in her cooking, and herself. Growing up, she wrote and preserved recipes, many of which Ange uses at Sate Kampar.                    ");
                    $('.info_bar_right').show();
                    break;
            }
        },
        ondragleave: function (event) {
            var draggableElement = event.relatedTarget,
                dropzoneElement = event.target;
            draggableElement.classList.add('removed-element');
            draggableElement.classList.remove('dropped-element');
            var glass = draggableElement.getAttribute('id');
            switch (glass) {
                case 'glass_1':
                    $('#ange_3').css('z-index', '1');
                    $('#ange_3_image').css("transform", "scale(1)");
                    $('#glass_1').css("transform", "scale(1)");
                    $('.info_bar_left > .info_name').html("");
                    $('.info_bar_left > .info_image').css({
                        'background-image': 'none',
                        'display': 'none'
                    });
                    $('.info_bar_left > .info_content > .info_content_title').html("");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("");
                    $('#left_instruct').show();
                    $('.info_bar_left > .extras').hide();
                    $('.info_bar_left').hide();
                    break;
                case 'glass_2':
                    $('#ange_3').css('z-index', '1');
                    $('#ange_3_image').css("transform", "scale(1)");
                    $('#glass_2').css("transform", "scale(1)");
                    $('#right_instruct').show();
                    $('.info_bar_right > .extras').hide();

                    $('.info_bar_right > .info_name').html("");
                    $('.info_bar_right > .info_image').css({
                        'background-image': 'none',
                        'display': 'none'
                    });
                    $('.info_bar_right > .info_content > .info_content_title').html("");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("");
                    $('.info_bar_right').hide();
                    break;
            }
        }
    });


    //lettering
    // enable draggables to be dropped into this
    interact('#ange_4').dropzone({
        // only accept elements matching this CSS selector
        accept: '.magnify_glass',
        // Require a 75% element overlap for a drop to be possible
        overlap: 0.25,
        ondragenter: function (event) {
            var draggableElement = event.relatedTarget,
                dropzoneElement = event.target;
            draggableElement.classList.add('dropped-element');
            draggableElement.classList.remove('removed-element');
            var glass = draggableElement.getAttribute('id');
            switch (glass) {
                case 'glass_1':
                    $('#ange_4').css('z-index', '5');
                    $('#ange_4_image').css("transform", "scale(1.2)");
                    $('#glass_1').css("transform", "scale(2)");
                    $('#left_instruct').hide();
                    $('.info_bar_left > .extras').show();

                    $('.info_bar_left > .info_name').html("Ange");
                    $('.info_bar_left > .info_image').css({
                        'display': 'block',
                        'background-image': 'url("img/sides/Cropped_Ange_Sign.png")',
                        'width': '100%',
                        'height': '400px'
                    });
                    $('.info_bar_left > .info_content > .info_content_title').html("Black Dog Beer");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("Referred to in Malaysia as the Black Dog Beer because it was advertised as being a medicinal drink. The dog is a symbol of strength and Guinness was advertised as able to give a person strength. As a child, Ange would throw stones at the sign, trying to hit certain words like a bullseye.");
                    $('.info_bar_left').show();
                    break;
                case 'glass_2':
                    $('#ange_4').css('z-index', '5');
                    $('#ange_4_image').css("transform", "scale(1.2)");
                    $('#glass_2').css("transform", "scale(2)");
                    $('#right_instruct').hide();
                    $('.info_bar_right > .extras').show();

                    $('.info_bar_right > .info_name').html("Ange");
                    $('.info_bar_right > .info_image').css({
                        'display': 'block',
                        'background-image': 'url("img/sides/Cropped_Ange_Sign.png")',
                        'width': '100%',
                        'height': '400px'
                    });
                    $('.info_bar_right > .info_content > .info_content_title').html("Black Dog Beer");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("Referred to in Malaysia as the Black Dog Beer because it was advertised as being a medicinal drink. The dog is a symbol of strength and Guinness was advertised as able to give a person strength. As a child, Ange would throw stones at the sign, trying to hit certain words like a bullseye.");
                    $('.info_bar_right').show();
                    break;
            }
        },
        ondragleave: function (event) {
            var draggableElement = event.relatedTarget,
                dropzoneElement = event.target;
            draggableElement.classList.add('removed-element');
            draggableElement.classList.remove('dropped-element');
            var glass = draggableElement.getAttribute('id');
            switch (glass) {
                case 'glass_1':
                    $('#ange_4').css('z-index', '1');
                    $('#ange_4_image').css("transform", "scale(1)");
                    $('#glass_1').css("transform", "scale(1)");
                    $('#left_instruct').show();
                    $('.info_bar_left > .extras').hide();

                    $('.info_bar_left > .info_name').html("");
                    $('.info_bar_left > .info_image').css({
                        'background-image': 'none',
                        'display': 'none'
                    });
                    $('.info_bar_left > .info_content > .info_content_title').html("");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("");
                    $('.info_bar_left').hide();
                    break;
                case 'glass_2':
                    $('#ange_4').css('z-index', '1');
                    $('#ange_4_image').css("transform", "scale(1)");
                    $('#glass_2').css("transform", "scale(1)");
                    $('#right_instruct').show();
                    $('.info_bar_right > .extras').hide();

                    $('.info_bar_right > .info_name').html("");
                    $('.info_bar_right > .info_image').css({
                        'background-image': 'none',
                        'display': 'none'
                    });
                    $('.info_bar_right > .info_content > .info_content_title').html("");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("");
                    $('.info_bar_right').hide();
                    break;
            }
        }
    });

    //stitching
    // enable draggables to be dropped into this
    interact('#ange_5').dropzone({
        // only accept elements matching this CSS selector
        accept: '.magnify_glass',
        // Require a 75% element overlap for a drop to be possible
        overlap: 0.25,
        ondragenter: function (event) {
            var draggableElement = event.relatedTarget,
                dropzoneElement = event.target;
            draggableElement.classList.add('dropped-element');
            draggableElement.classList.remove('removed-element');
            var glass = draggableElement.getAttribute('id');
            switch (glass) {
                case 'glass_1':
                    $('#ange_5').css('z-index', '5');
                    $('#ange_5_image').css("transform", "scale(1.2)");
                    $('#glass_1').css("transform", "scale(2)");
                    $('#left_instruct').hide();
                    $('.info_bar_left > .extras').show();

                    $('.info_bar_left > .info_name').html("Ange");
                    $('.info_bar_left > .info_image').css({
                        'display': 'block',
                        'background-image': 'url("img/sides/Cropped_Ange_Needle.png")',
                        'width': '100%',
                        'height': '400px'
                    });
                    $('.info_bar_left > .info_content > .info_content_title').html("Silk Needle-point");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("This is silk needle-point work done by Ange’s grandmother. It was said that traditionally a woman needs two skills to get married, cooking and sewing. Ange always hated sewing.");
                    $('.info_bar_left').show();
                    break;
                case 'glass_2':
                    $('#ange_5').css('z-index', '5');
                    $('#ange_5_image').css("transform", "scale(1.2)");
                    $('#glass_2').css("transform", "scale(2)");
                    $('#right_instruct').hide();
                    $('.info_bar_right > .extras').show();

                    $('.info_bar_right > .info_name').html("Ange");
                    $('.info_bar_right > .info_image').css({
                        'display': 'block',
                        'background-image': 'url("img/sides/Cropped_Ange_Needle.png")',
                        'width': '100%',
                        'height': '400px'
                    });
                    $('.info_bar_right > .info_content > .info_content_title').html("Silk Needle-point");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("This is silk needle-point work done by Ange’s grandmother. It was said that traditionally a woman needs two skills to get married, cooking and sewing. Ange always hated sewing.");
                    $('.info_bar_right').show();
                    break;
            }
        },
        ondragleave: function (event) {
            var draggableElement = event.relatedTarget,
                dropzoneElement = event.target;
            draggableElement.classList.add('removed-element');
            draggableElement.classList.remove('dropped-element');
            var glass = draggableElement.getAttribute('id');
            switch (glass) {
                case 'glass_1':
                    $('#ange_5').css('z-index', '1');
                    $('#ange_5_image').css("transform", "scale(1)");
                    $('#glass_1').css("transform", "scale(1)");
                    $('#left_instruct').show();
                    $('.info_bar_left > .extras').hide();

                    $('.info_bar_left > .info_name').html("");
                    $('.info_bar_left > .info_image').css({
                        'background-image': 'none',
                        'display': 'none'
                    });
                    $('.info_bar_left > .info_content > .info_content_title').html("");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("");
                    $('.info_bar_left').hide();
                    break;
                case 'glass_2':
                    $('#ange_5').css('z-index', '1');
                    $('#ange_5_image').css("transform", "scale(1)");
                    $('#glass_2').css("transform", "scale(1)");
                    $('#right_instruct').show();
                    $('.info_bar_right > .extras').hide();

                    $('.info_bar_right > .info_name').html("");
                    $('.info_bar_right > .info_image').css({
                        'background-image': 'none',
                        'display': 'none'
                    });
                    $('.info_bar_right > .info_content > .info_content_title').html("");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("");
                    $('.info_bar_right').hide();
                    break;
            }
        }
    });

    function resetLeft() {
        console.log('left clicked');
        $("#glass_1").animate({
            'top': '930px',
            'left': '142px'
        });
        $('#left_instruct').show();
        $('.info_bar_left > .extras').hide();

        $('.info_bar_left > .info_name').html("");
        $('.info_bar_left > .info_image').css({
            'background-image': 'none',
            'display': 'none'
        });
        $('.info_bar_left > .info_content > .info_content_title').html("");
        $('.info_bar_left > .info_content > .info_content_wrap').html("");
        $("#glass_1").attr("data-x", "142");
        $("#glass_1").attr("data-y", "930");
        $('#glass_1').css("transform", "scale(1)");
        $('#ange_1_image').css("transform", "scale(1)");
        $('#ange_1').css('z-index', '1');
        $('#ange_2_image').css("transform", "scale(1)");
        $('#ange_2').css('z-index', '1');
        $('#ange_3_image').css("transform", "scale(1)");
        $('#ange_3').css('z-index', '1');
        $('#ange_4_image').css("transform", "scale(1)");
        $('#ange_4').css('z-index', '1');
        $('#ange_5_image').css("transform", "scale(1)");
        $('#ange_5').css('z-index', '1');
        $('#len_1').css('z-index', '1');
        $('#len_1_image').css("transform", "scale(1)");
        $('#len_2').css('z-index', '1');
        $('#len_2_image').css("transform", "scale(1)");
        $('#len_3').css('z-index', '1');
        $('#len_3_image').css("transform", "scale(1)");
        $('#len_4').css('z-index', '1');
        $('#len_4_image').css("transform", "scale(1)");
        $('#len_5').css('z-index', '1');
        $('#len_5_image').css("transform", "scale(1)");
    };

    function resetRight() {
        console.log('right clicked');
        $("#glass_2").animate({
            'top': '930px',
            'left': '2263px'
        });
        $('#right_instruct').show();
        $('.info_bar_right > .extras').hide();

        $('.info_bar_right > .info_name').html("");
        $('.info_bar_right > .info_image').css({
            'background-image': 'none',
            'display': 'none'
        });
        $('.info_bar_right > .info_content > .info_content_title').html("");
        $('.info_bar_right > .info_content > .info_content_wrap').html("");
        $("#glass_2").attr("data-x", "2263");
        $("#glass_2").attr("data-y", "930");
        $('#glass_2').css("transform", "scale(1)");
        $('#ange_1_image').css("transform", "scale(1)");
        $('#ange_1').css('z-index', '1');
        $('#ange_2_image').css("transform", "scale(1)");
        $('#ange_2').css('z-index', '1');
        $('#ange_3_image').css("transform", "scale(1)");
        $('#ange_3').css('z-index', '1');
        $('#ange_4_image').css("transform", "scale(1)");
        $('#ange_4').css('z-index', '1');
        $('#ange_5_image').css("transform", "scale(1)");
        $('#ange_5').css('z-index', '1');
        $('#len_1').css('z-index', '1');
        $('#len_1_image').css("transform", "scale(1)");
        $('#len_2').css('z-index', '1');
        $('#len_2_image').css("transform", "scale(1)");
        $('#len_3').css('z-index', '1');
        $('#len_3_image').css("transform", "scale(1)");
        $('#len_4').css('z-index', '1');
        $('#len_4_image').css("transform", "scale(1)");
        $('#len_5').css('z-index', '1');
        $('#len_5_image').css("transform", "scale(1)");
    };

    var currentWidthOne = $("#glass_1").width();
    var currentHeightOne = $("#glass_1").height();
    var currentWidthTwo = $("#glass_2").width();
    var currentHeightTwo = $("#glass_2").height();

    interact('.wrapper')
        .on('tap', function (ev) {
            console.log('a thing is happening');


            $("#glass_1").animate({
                width: "+=40",
                height: "+=40",
                left: "-=20",
                top: "-=20",
            });
            $("#glass_2").animate({
                width: "+=40",
                height: "+=40",
                left: "-=20",
                top: "-=20",
            });

            $("#block").css('display', 'block');

            setTimeout(removePulse, 400);
        });

    function removePulse() {
        $("#glass_1").animate({
            width: "-=40",
            height: "-=40",
            left: "+=20",
            top: "+=20"
        });
        $("#glass_2").animate({
            width: "-=40",
            height: "-=40",
            left: "+=20",
            top: "+=20"
        });

        $("#block").css('display', 'none');

    }

    //Browser Idle Refresh

    var time = new Date().getTime();
    $(document.body).bind("touchmove mousemove keypress", function (e) {
        time = new Date().getTime();
    });

    function refresh() {
        if (new Date().getTime() - time >= 17000) {

            resetRight();
            resetLeft();

        } else {
            setTimeout(refresh, 70000);
        }
    }

    setTimeout(refresh, 70000);

}); //do not lose this closing bracket - unless you like breaking everything for fun