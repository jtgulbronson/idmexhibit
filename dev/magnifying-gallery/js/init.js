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
                    $('.info_bar_left .extras').show();
                    $('.info_bar_left > .info_name').html("Len");
                    $('.info_bar_left > .info_image').css({
                        'display': 'block',
                        'background-image': 'url("img/sides/Cropped_Len_Mom.png")',
                        'width': '100%',
                        'height': '400px'
                    });
                    $('.info_bar_left > .info_content > .info_content_title').html("Mother");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("My mother's strength and boldness is an inspiration to me. She has raised many children and adults. Her life story is one of triumph.");
                    break;
                case 'glass_2':
                    $('#len_1').css('z-index', '5');
                    $('#len_1_image').css("transform", "scale(1.2)");
                    $('#glass_2').css("transform", "scale(2.5)");
                    $('#right_instruct').hide();
                    $('.info_bar_right .extras').show();
                    $('.info_bar_right > .info_name').html("Len");
                    $('.info_bar_right > .info_image').css({
                        'display': 'block',
                        'background-image': 'url("img/sides/Cropped_Len_Mom.png")',
                        'width': '100%',
                        'height': '400px'
                    });
                    $('.info_bar_right > .info_content > .info_content_title').html("Mother");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("My mother's strength and boldness is an inspiration to me. She has raised many children and adults. Her life story is one of triumph.");
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
                    $('.info_bar_left .extras').hide();
                    $('.info_bar_left > .info_name').html("");
                    $('.info_bar_left > .info_image').css({
                        'background-image': 'none',
                        'display': 'none'
                    });
                    $('.info_bar_left > .info_content > .info_content_title').html("");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("");
                    break;
                case 'glass_2':
                    $('#len_1').css('z-index', '1');
                    $('#len_1_image').css("transform", "scale(1)");
                    $('#glass_2').css("transform", "scale(1)");
                    $('#right_instruct').show();
                    $('.info_bar_right .extras').hide();
                    $('.info_bar_right > .info_name').html("");
                    $('.info_bar_right > .info_image').css({
                        'background-image': 'none',
                        'display': 'none'
                    });
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
                    $('.info_bar_left .extras').show();
                    $('.info_bar_left > .info_name').html("Len");
                    $('.info_bar_left > .info_image').css({
                        'display': 'block',
                        "background-image": 'url("img/sides/Cropped_Len_Alley.png")',
                        'width': '100%',
                        'height': '400px'
                    });

                    $('.info_bar_left > .info_content > .info_content_title').html("Space Between");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("I have so many images from Robertsport, the capital of Grand Cape Mount in Liberia; however, I love the capturing people in their daily routines unbothered by a curious transnational.");
                    break;
                case 'glass_2':
                    $('#len_2').css('z-index', '5');
                    $('#len_2_image').css("transform", "scale(1.2)");
                    $('#glass_2').css("transform", "scale(2)");
                    $('#right_instruct').hide();
                    $('.info_bar_right .extras').show();
                    $('.info_bar_right > .info_name').html("Len");
                    $('.info_bar_right > .info_image').css({
                        'display': 'block',
                        "background-image": 'url("img/sides/Cropped_Len_Alley.png")',
                        'width': '100%',
                        'height': '400px'
                    });
                    $('.info_bar_right > .info_content > .info_content_title').html("Space Between");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("I have so many images from Robertsport, the capital of Grand Cape Mount in Liberia; however, I love the capturing people in their daily routines unbothered by a curious transnational.");
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
                    $('.info_bar_left .extras').hide();
                    $('.info_bar_left > .info_name').html("");
                    $('.info_bar_left > .info_image').css("background-image", 'none');
                    $('.info_bar_left > .info_content > .info_content_title').html("");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("");
                    break;
                case 'glass_2':
                    $('#len_2').css('z-index', '1');
                    $('#len_2_image').css("transform", "scale(1)");
                    $('#glass_2').css("transform", "scale(1)");
                    $('#right_instruct').show();
                    $('.info_bar_right .extras').hide();
                    $('.info_bar_right > .info_name').html("");
                    $('.info_bar_right > .info_image').css("background-image", 'none');
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
                    $('.info_bar_left .extras').show();
                    $('.info_bar_left > .info_name').html("Len");
                    $('.info_bar_left > .info_image').css({
                        'display': 'block',
                        'background-image': 'url("img/sides/Cropped_Len_GMom.png")',
                        'width': '100%',
                        'height': '400px'
                    });
                    $('.info_bar_left > .info_content > .info_content_title').html("Grandmother");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("My maternal grandmother transitioned when I was very young. Although I do not remember her presence, she passed down her love of textiles and artistic creativity. She was a known healer and I was told people would come to her for dislocated limbs and infertility. I am inspired by her generous spirit and proud to carry her name, Lendeh.");
                    break;
                case 'glass_2':
                    $('#len_3').css('z-index', '5');
                    $('#len_3_image').css("transform", "scale(1.2)");
                    $('#glass_2').css("transform", "scale(2)");
                    $('#right_instruct').hide();
                    $('.info_bar_right .extras').show();
                    $('.info_bar_right > .info_name').html("Len");
                    $('.info_bar_right > .info_image').css({
                        'display': 'block',
                        'background-image': 'url("img/sides/Cropped_Len_GMom.png")',
                        'width': '100%',
                        'height': '400px'
                    });
                    $('.info_bar_right > .info_content > .info_content_title').html("Grandmother");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("My maternal grandmother transitioned when I was very young. Although I do not remember her presence, she passed down her love of textiles and artistic creativity. She was a known healer and I was told people would come to her for dislocated limbs and infertility. I am inspired by her generous spirit and proud to carry her name, Lendeh.");
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
                    $('.info_bar_left .extras').hide();
                    $('.info_bar_left > .info_name').html("");
                    $('.info_bar_left > .info_image').css({
                        'background-image': 'none',
                        'display': 'none'
                    });
                    $('.info_bar_left > .info_content > .info_content_title').html("");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("");
                    break;
                case 'glass_2':
                    $('#len_3').css('z-index', '1');
                    $('#len_3_image').css("transform", "scale(1)");
                    $('#glass_2').css("transform", "scale(1)");
                    $('#right_instruct').show();
                    $('.info_bar_right .extras').hide();
                    $('.info_bar_right > .info_name').html("");
                    $('.info_bar_right > .info_image').css({
                        'background-image': 'none',
                        'display': 'none'
                    });
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
                    $('.info_bar_left .extras').show();
                    $('.info_bar_left > .info_name').html("Len");
                    $('.info_bar_left > .info_image').css({
                        'display': 'block',
                        'background-image': 'url("img/sides/Cropped_Len_Road.png")',
                        'width': '100%',
                        'height': '400px'
                    });
                    $('.info_bar_left > .info_content > .info_content_title').html("Uptown");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("The simple life from my perspective reminds me of all the wonderful convenience that make life complicated and inconvenient in the West.");
                    break;
                case 'glass_2':
                    $('#len_8').css('z-index', '5');
                    $('#len_8_image').css("transform", "scale(1.2)");
                    $('#glass_2').css("transform", "scale(2)");
                    $('#right_instruct').hide();
                    $('.info_bar_right .extras').show();
                    $('.info_bar_right > .info_name').html("Len");
                    $('.info_bar_right > .info_image').css({
                        'display': 'block',
                        'background-image': 'url("img/sides/Cropped_Len_Road.png")',
                        'width': '100%',
                        'height': '400px'
                    });
                    $('.info_bar_right > .info_content > .info_content_title').html("Uptown");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("The simple life from my perspective reminds me of all the wonderful convenience that make life complicated and inconvenient in the West.");
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
                    $('.info_bar_left .extras').hide();
                    $('.info_bar_left > .info_name').html("");
                    $('.info_bar_left > .info_image').css({
                        'background-image': 'none',
                        'display': 'none'
                    });
                    $('.info_bar_left > .info_content > .info_content_title').html("");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("");
                    break;
                case 'glass_2':
                    $('#len_8').css('z-index', '1');
                    $('#len_8_image').css("transform", "scale(1)");
                    $('#glass_2').css("transform", "scale(1)");
                    $('#right_instruct').show();
                    $('.info_bar_right .extras').hide();
                    $('.info_bar_right > .info_name').html("");
                    $('.info_bar_right > .info_image').css({
                        'background-image': 'none',
                        'display': 'none'
                    });
                    $('.info_bar_right > .info_content > .info_content_title').html("");
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
                    $('.info_bar_left .extras').show();
                    $('.info_bar_left > .info_name').html("Len");
                    $('.info_bar_left > .info_image').css({
                        'display': 'block',
                        'background-image': 'url("img/sides/Cropped_Len_House.png")',
                        'width': '100%',
                        'height': '400px'
                    });
                    $('.info_bar_left > .info_content > .info_content_title').html("Cece Lendeh's House");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("Traveling across the Atlantic ocean and being able to see where my Mother was raised anchors me. Liberia went through fifteen years or uncivil war and having the opportunity to hear stories from survivors who knew my grandmother and mother as a child helps me understand parts of myself. ");
                    break;
                case 'glass_2':
                    $('#len_4').css('z-index', '5');
                    $('#len_4_image').css("transform", "scale(1.2)");
                    $('#glass_2').css("transform", "scale(2)");
                    $('#right_instruct').hide();
                    $('.info_bar_right .extras').show();
                    $('.info_bar_right > .info_name').html("Len");
                    $('.info_bar_right > .info_image').css({
                        'display': 'block',
                        'background-image': 'url("img/sides/Cropped_Len_House.png")',
                        'width': '100%',
                        'height': '400px'
                    });
                    $('.info_bar_right > .info_content > .info_content_title').html("Cece Lendeh's House");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("Traveling across the Atlantic ocean and being able to see where my Mother was raised anchors me. Liberia went through fifteen years or uncivil war and having the opportunity to hear stories from survivors who knew my grandmother and mother as a child helps me understand parts of myself. ");
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
                    $('.info_bar_left .extras').hide();
                    $('.info_bar_left > .info_name').html("");
                    $('.info_bar_left > .info_image').css({
                        'background-image': 'none',
                        'display': 'none'
                    });
                    $('.info_bar_left > .info_content > .info_content_title').html("");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("");
                    break;
                case 'glass_2':
                    $('#len_4').css('z-index', '1');
                    $('#len_4_image').css("transform", "scale(1)");
                    $('#glass_2').css("transform", "scale(1)");
                    $('#right_instruct').show();
                    $('.info_bar_right .extras').hide();
                    $('.info_bar_right > .info_name').html("");
                    $('.info_bar_right > .info_image').css({
                        'background-image': 'none',
                        'display': 'none'
                    });
                    $('.info_bar_right > .info_content > .info_content_title').html("");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("");
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
                    $('.info_bar_left .extras').show();
                    $('.info_bar_left > .info_name').html("Len");
                    $('.info_bar_left > .info_image').css({
                        'display': 'block',
                        "background-image": 'url("img/sides/Cropped_Len_Car.png")',
                        'width': '100%',
                        'height': '400px'
                    });
                    $('.info_bar_left > .info_content > .info_content_title').html("Space Between");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("This image was taken in 2004, six months after the uncivil war ended. I was traveling to the airport and on several occasions was afraid to take pictures.");
                    break;
                case 'glass_2':
                    $('#len_5').css('z-index', '5');
                    $('#len_5_image').css("transform", "scale(1.2)");
                    $('#glass_2').css("transform", "scale(2)");
                    $('#right_instruct').hide();
                    $('.info_bar_right .extras').show();
                    $('.info_bar_right > .info_name').html("Len");
                    $('.info_bar_right > .info_image').css({
                        'display': 'block',
                        "background-image": 'url("img/sides/Cropped_Len_Car.png")',
                        'width': '100%',
                        'height': '400px'
                    });
                    $('.info_bar_right > .info_content > .info_content_title').html("Space Between");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("This image was taken in 2004, six months after the uncivil war ended. I was traveling to the airport and on several occasions was afraid to take pictures.");
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
                    $('.info_bar_left .extras').hide();
                    $('.info_bar_left > .info_name').html("");
                    $('.info_bar_left > .info_image').css("background-image", 'none');
                    $('.info_bar_left > .info_content > .info_content_title').html("");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("");
                    break;
                case 'glass_2':
                    $('#len_5').css('z-index', '1');
                    $('#len_5_image').css("transform", "scale(1)");
                    $('#glass_2').css("transform", "scale(1)");
                    $('#right_instruct').show();
                    $('.info_bar_right .extras').show();
                    $('.info_bar_right > .info_name').html("");
                    $('.info_bar_right > .info_image').css({
                        'background-image': 'none',
                        'display': 'none'
                    });
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
                    $('.info_bar_left .extras').show();
                    $('.info_bar_left > .info_name').html("Ange");
                    $('.info_bar_left > .info_image').css({
                        'display': 'block',
                        'background-image': 'url("img/sides/Cropped_Ange_Baby.png")',
                        'width': '100%',
                        'height': '400px'
                    });
                    $('.info_bar_left > .info_content > .info_content_title').html("Image Title");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("This is where the information about the magnified object would display.");
                    break;
                case 'glass_2':
                    $('#ange_1').css('z-index', '5');
                    $('#ange_1_image').css("transform", "scale(1.2)");
                    $('#glass_2').css("transform", "scale(2)");
                    $('#right_instruct').hide();
                    $('.info_bar_right .extras').show();
                    $('.info_bar_right > .info_name').html("Ange");
                    $('.info_bar_right > .info_image').css({
                        'display': 'block',
                        'background-image': 'url("img/sides/Cropped_Ange_Baby.png")',
                        'width': '100%',
                        'height': '400px'
                    });
                    $('.info_bar_right > .info_content > .info_content_title').html("Image Title");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("This is where the information about the magnified object would display.");
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
                    $('.info_bar_left .extras').hide();
                    $('.info_bar_left > .info_name').html("");
                    $('.info_bar_left > .info_image').css({
                        'background-image': 'none',
                        'display': 'none'
                    });
                    $('.info_bar_left > .info_content > .info_content_title').html("");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("");
                    break;
                case 'glass_2':
                    $('#ange_1').css('z-index', '1');
                    $('#ange_1_image').css("transform", "scale(1)");
                    $('#glass_2').css("transform", "scale(1)");
                    $('#right_instruct').show();
                    $('.info_bar_right .extras').hide();
                    $('.info_bar_right > .info_name').html("");
                    $('.info_bar_right > .info_image').css({
                        'background-image': 'none',
                        'display': 'none'
                    });
                    $('.info_bar_right > .info_content > .info_content_title').html("");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("");
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
                    $('.info_bar_left .extras').show();
                    $('.info_bar_left > .info_name').html("Ange");
                    $('.info_bar_left > .info_image').css({
                        'display': 'block',
                        'background-image': 'url("img/sides/Cropped_Ange_Kids.png")',
                        'width': '100%',
                        'height': '400px'
                    });
                    $('.info_bar_left > .info_content > .info_content_title').html("Image Title");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("This is where the information about the magnified object would display.");
                    break;
                case 'glass_2':
                    $('#ange_2').css('z-index', '5');
                    $('#ange_2_image').css("transform", "scale(1.2)");
                    $('#glass_2').css("transform", "scale(2)");
                    $('#right_instruct').hide();
                    $('.info_bar_right .extras').show();
                    $('.info_bar_right > .info_name').html("Ange");
                    $('.info_bar_right > .info_image').css({
                        'display': 'block',
                        'background-image': 'url("img/sides/Cropped_Ange_Kids.png")',
                        'width': '100%',
                        'height': '400px'
                    });
                    $('.info_bar_right > .info_content > .info_content_title').html("Image Title");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("This is where the information about the magnified object would display.");
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
                    $('.info_bar_left .extras').hide();
                    $('.info_bar_left > .info_name').html("");
                    $('.info_bar_left > .info_image').css({
                        'background-image': 'none',
                        'display': 'none'
                    });
                    $('.info_bar_left > .info_content > .info_content_title').html("");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("");
                    break;
                case 'glass_2':
                    $('#ange_2').css('z-index', '1');
                    $('#ange_2_image').css("transform", "scale(1)");
                    $('#glass_2').css("transform", "scale(1)");
                    $('#right_instruct').show();
                    $('.info_bar_right .extras').hide();
                    $('.info_bar_right > .info_name').html("");
                    $('.info_bar_right > .info_image').css({
                        'background-image': 'none',
                        'display': 'none'
                    });
                    $('.info_bar_right > .info_content > .info_content_title').html("");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("");
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
                    $('.info_bar_left .extras').show();
                    $('.info_bar_left > .info_name').html("Ange");
                    $('.info_bar_left > .info_image').css({
                        'display': 'block',
                        'background-image': 'url("img/sides/Cropped_Ange_Kiss.png")',
                        'width': '100%',
                        'height': '400px'
                    }).fadeIn('slow');
                    $('.info_bar_left > .info_content > .info_content_title').html("Image Title");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("This is where the information about the magnified object would display.");
                    break;
                case 'glass_2':
                    $('#ange_3').css('z-index', '5');
                    $('#ange_3_image').css("transform", "scale(1.2)");
                    $('#glass_2').css("transform", "scale(2)");
                    $('#right_instruct').hide();
                    $('.info_bar_right .extras').show();
                    $('.info_bar_right > .info_name').html("Ange");
                    $('.info_bar_right > .info_image').css({
                        'display': 'block',
                        'background-image': 'url("img/sides/Cropped_Ange_Kiss.png")',
                        'width': '100%',
                        'height': '400px'
                    });
                    $('.info_bar_right > .info_content > .info_content_title').html("Image Title");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("This is where the information about the magnified object would display.");
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
                    $('#left_instruct').show();
                    $('.info_bar_left .extras').hide();
                    $('.info_bar_left > .info_name').html("");
                    $('.info_bar_left > .info_image').css({
                        'background-image': 'none',
                        'display': 'none'
                    });
                    $('.info_bar_left > .info_content > .info_content_title').html("");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("");
                    break;
                case 'glass_2':
                    $('#ange_3').css('z-index', '1');
                    $('#ange_3_image').css("transform", "scale(1)");
                    $('#glass_2').css("transform", "scale(1)");
                    $('#right_instruct').show();
                    $('.info_bar_right .extras').hide();
                    $('.info_bar_right > .info_name').html("");
                    $('.info_bar_right > .info_image').css({
                        'background-image': 'none',
                        'display': 'none'
                    });
                    $('.info_bar_right > .info_content > .info_content_title').html("");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("");
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
                    $('.info_bar_left .extras').show();
                    $('.info_bar_left > .info_name').html("Ange");
                    $('.info_bar_left > .info_image').css({
                        'display': 'block',
                        'background-image': 'url("img/sides/Cropped_Ange_Sign.png")',
                        'width': '100%',
                        'height': '400px'
                    });
                    $('.info_bar_left > .info_content > .info_content_title').html("Image Title");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("This is where the information about the magnified object would display.");
                    break;
                case 'glass_2':
                    $('#ange_4').css('z-index', '5');
                    $('#ange_4_image').css("transform", "scale(1.2)");
                    $('#glass_2').css("transform", "scale(2)");
                    $('#right_instruct').hide();
                    $('.info_bar_right .extras').show();
                    $('.info_bar_right > .info_name').html("Ange");
                    $('.info_bar_right > .info_image').css({
                        'display': 'block',
                        'background-image': 'url("img/sides/Cropped_Ange_Sign.png")',
                        'width': '100%',
                        'height': '400px'
                    });
                    $('.info_bar_right > .info_content > .info_content_title').html("Image Title");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("This is where the information about the magnified object would display.");
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
                    $('.info_bar_left .extras').hide();
                    $('.info_bar_left > .info_name').html("");
                    $('.info_bar_left > .info_image').css({
                        'background-image': 'none',
                        'display': 'none'
                    });
                    $('.info_bar_left > .info_content > .info_content_title').html("");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("");
                    break;
                case 'glass_2':
                    $('#ange_4').css('z-index', '1');
                    $('#ange_4_image').css("transform", "scale(1)");
                    $('#glass_2').css("transform", "scale(1)");
                    $('#right_instruct').show();
                    $('.info_bar_right .extras').hide();
                    $('.info_bar_right > .info_name').html("");
                    $('.info_bar_right > .info_image').css({
                        'background-image': 'none',
                        'display': 'none'
                    });
                    $('.info_bar_right > .info_content > .info_content_title').html("");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("");
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
                    $('.info_bar_left .extras').show();
                    $('.info_bar_left > .info_name').html("Ange");
                    $('.info_bar_left > .info_image').css({
                        'display': 'block',
                        'background-image': 'url("img/sides/Cropped_Ange_Needle.png")',
                        'width': '100%',
                        'height': '400px'
                    });
                    $('.info_bar_left > .info_content > .info_content_title').html("Image Title");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("This is where the information about the magnified object would display.");
                    break;
                case 'glass_2':
                    $('#ange_5').css('z-index', '5');
                    $('#ange_5_image').css("transform", "scale(1.2)");
                    $('#glass_2').css("transform", "scale(2)");
                    $('#right_instruct').hide();
                    $('.info_bar_right .extras').show();
                    $('.info_bar_right > .info_name').html("Ange");
                    $('.info_bar_right > .info_image').css({
                        'display': 'block',
                        'background-image': 'url("img/sides/Cropped_Ange_Needle.png")',
                        'width': '100%',
                        'height': '400px'
                    });
                    $('.info_bar_right > .info_content > .info_content_title').html("Image Title");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("This is where the information about the magnified object would display.");
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
                    $('.info_bar_left .extras').hide();
                    $('.info_bar_left > .info_name').html("");
                    $('.info_bar_left > .info_image').css({
                        'background-image': 'none',
                        'display': 'none'
                    });
                    $('.info_bar_left > .info_content > .info_content_title').html("");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("");
                    break;
                case 'glass_2':
                    $('#ange_5').css('z-index', '1');
                    $('#ange_5_image').css("transform", "scale(1)");
                    $('#glass_2').css("transform", "scale(1)");
                    $('#right_instruct').show();
                    $('.info_bar_right .extras').hide();
                    $('.info_bar_right > .info_name').html("");
                    $('.info_bar_right > .info_image').css({
                        'background-image': 'none',
                        'display': 'none'
                    });
                    $('.info_bar_right > .info_content > .info_content_title').html("");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("");
                    break;
            }
        }
    });
    interact('.left_reset')
        .on('tap', function (event) {
            console.log('left clicked');
            $("#glass_1").animate({
                'top': '750px',
                'left': '400px'
            });
            $('#left_instruct').show();
            $('.info_bar_left .extras').hide();
            $('.info_bar_left > .info_name').html("");
            $('.info_bar_left > .info_image').css({
                'background-image': 'none',
                'display': 'none'
            });
            $('.info_bar_left > .info_content > .info_content_title').html("");
            $('.info_bar_left > .info_content > .info_content_wrap').html("");
            $("#glass_1").attr("data-x", "400");
            $("#glass_1").attr("data-y", "750");
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
        });

    interact('.right_reset')
        .on('tap', function (event) {
            console.log('right clicked');
            $("#glass_2").animate({
                'top': '750px',
                'left': '2040px'
            });
            $('#right_instruct').show();
            $('.info_bar_right .extras').hide();
            $('.info_bar_right > .info_name').html("");
            $('.info_bar_right > .info_image').css({
                'background-image': 'none',
                'display': 'none'
            });
            $('.info_bar_right > .info_content > .info_content_title').html("");
            $('.info_bar_right > .info_content > .info_content_wrap').html("");
            $("#glass_2").attr("data-x", "2040");
            $("#glass_2").attr("data-y", "750");
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
        });

    interact(document.body)
        .on('tap', function (ev) {
            console.log('a thing is happening');
            $("#glass_1").css('transform', 'scale(1.2)');
            $("#glass_1").delay(200).css('transform', 'scale(1)');
            $("#glass_2").css('transform', 'scale(1.2)');
            $("#glass_2").delay(200).css('transform', 'scale(1)');
        });

    //Browser Idle Refresh

    var time = new Date().getTime();
    $(document.body).bind("touchmove mousemove keypress", function (e) {
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