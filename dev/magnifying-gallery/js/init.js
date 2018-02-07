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
        // document.getElementById('transform-info').textContent = 'position = ' + x + ',' + y;
        // var hideMe = target.getAttribute('id');
        // switch (hideMe) {
        //     case 'glass_1':
        //         $('#left_instruct').hide();
        //         break;
        //     case 'glass_2':
        //         $('#right_instruct').hide();
        //         break;
        //         //this hides the instructions based on what magnifier is moved
        // }
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
                    $('#len_1_image').css("transform", "scale(1.2)");
                    $('#glass_1').css("transform", "scale(2.5)");
                    $('#left_instruct').hide();
                    $('.info_bar_left > .info_image').css('background-image', 'url("img/len-1.jpeg")');
					$('.info_bar_left > .info_content > .info_content_title').html("Mother");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("My mother's strength and boldness is an inspiration to me. She has raised many children and adults. Her life story is one of triumph.");
                    break;
                case 'glass_2':
                    $('#len_1_image').css("transform", "scale(1.2)");
                    $('#glass_2').css("transform", "scale(2.5)");
                    $('#right_instruct').hide();
                    $('.info_bar_right > .info_image').css('background-image', 'url("img/len-1.jpeg")');
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
                    $('#len_1_image').css("transform", "scale(1)");
                    $('#glass_1').css("transform", "scale(1)");
                    $('#left_instruct').show();
                    $('.info_bar_left > .info_image').css('background-image', 'none');
                    $('.info_bar_left > .info_content > .info_content_title').html("");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("");
                    break;
                case 'glass_2':
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
                    $('#len_2_image').css("transform", "scale(1.2)");
                    $('#glass_1').css("transform", "scale(2)");
                    $('#left_instruct').hide();
                    $('.info_bar_left > .info_image').css('background-image', 'url("img/len-2.jpeg")');
                    $('.info_bar_left > .info_content > .info_content_title').html("Space Between");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("I have so many images from Robertsport, the capital of Grand Cape Mount in Liberia; however, I love the capturing people in their daily routines unbothered by a curious transnational.");
                    break;
                case 'glass_2':
                    $('#len_2_image').css("transform", "scale(1.2)");
                    $('#glass_2').css("transform", "scale(2)");
                    $('#right_instruct').hide();
                    $('.info_bar_right > .info_image').css('background-image', 'url("img/len-2.jpeg")');
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
                    $('#len_2_image').css("transform", "scale(1)");
                    $('#glass_1').css("transform", "scale(1)");
                    $('#left_instruct').show();
                    $('.info_bar_left > .info_image').css('background-image', 'none');
                    $('.info_bar_left > .info_content > .info_content_title').html("");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("");
                    break;
                case 'glass_2':
                    $('#len_2_image').css("transform", "scale(1)");
                    $('#glass_2').css("transform", "scale(1)");
                    $('#right_instruct').show();
                    $('.info_bar_right > .info_image').css('background-image', 'none');
                    $('.info_bar_right > .info_content > .info_content_title').html("");
                    $('.info_bar_right > .info_content > .info_content_wrap').html("");
                    break;
            }
        }
    });

    //stamp element interaction
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
                    $('#len_3_image').css("transform", "scale(1.2)");
                    $('#glass_1').css("transform", "scale(2)");
                    $('#left_instruct').hide();
                    $('.info_bar_left > .info_image').css('background-image', 'url("img/len-3.jpeg")');
                    $('.info_bar_left > .info_content > .info_content_title').html("Grandmother");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("My maternal grandmother transitioned when I was very young, most likely when I was 5 years old. Although I do not remember her presence, she passed down her love of textiles and artistic creativity. She was a known healer and I was told people would come to her for dislocated limbs and infertility. I am inspired by her generous spirit and proud to carry her name, Lendeh.");
                    break;
                case 'glass_2':
                    $('#len_3_image').css("transform", "scale(1.2)");
                    $('#glass_2').css("transform", "scale(2)");
                    $('#right_instruct').hide();
                    $('.info_bar_right > .info_image').css('background-image', 'url("img/len-3.jpeg")');
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
                    $('#len_3_image').css("transform", "scale(1)");
                    $('#glass_1').css("transform", "scale(1)");
                    $('#left_instruct').show();
                    $('.info_bar_left > .info_image').css('background-image', 'none');
                    $('.info_bar_left > .info_content > .info_content_title').html("");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("");
                    break;
                case 'glass_2':
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


    //diver element interaction
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
                    $('#len_4_image').css("transform", "scale(1.2)");
                    $('#glass_1').css("transform", "scale(2)");
                    $('#left_instruct').hide();
                    $('.info_bar_left > .info_image').css('background-image', 'url("img/len-4.jpeg")');
                    $('.info_bar_left > .info_content > .info_content_title').html("Cece Lendeh's House");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("Traveling across the Atlantic ocean and being able to see where my Mother was raised anchors me. Liberia went through fifteen years or uncivil war and having the opportunity to hear stories from survivors who knew my grandmother and mother as a child helps me understand parts of myself. ");
                    break;
                case 'glass_2':
                    $('#len_4_image').css("transform", "scale(1.2)");
                    $('#glass_2').css("transform", "scale(2)");
                    $('#right_instruct').hide();
                    $('.info_bar_right > .info_image').css('background-image', 'url("img/len-4.jpeg")');
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
                    $('#len_4_image').css("transform", "scale(1)");
                    $('#glass_1').css("transform", "scale(1)");
                    $('#left_instruct').show();
                    $('.info_bar_left > .info_image').css('background-image', 'none');
                    $('.info_bar_left > .info_content > .info_content_title').html("");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("");
                    break;
                case 'glass_2':
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
                    $('#len_5_image').css("transform", "scale(1.2)");
                    $('#glass_1').css("transform", "scale(2)");
                    $('#left_instruct').hide();
                    $('.info_bar_left > .info_image').css('background-image', 'url("img/len-5.jpeg")');
                    $('.info_bar_left > .info_content > .info_content_title').html("Space Between");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("This image was taken in 2004, six months after the uncivil war ended. I was traveling to the airport and on several occasions was afraid to take pictures.");
                    break;
                case 'glass_2':
                    $('#len_5_image').css("transform", "scale(1.2)");
                    $('#glass_2').css("transform", "scale(2)");
                    $('#right_instruct').hide();
                    $('.info_bar_right > .info_image').css('background-image', 'url("img/len-5.jpeg")');
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
                    $('#len_5_image').css("transform", "scale(1)");
                    $('#glass_1').css("transform", "scale(1)");
                    $('#left_instruct').show();
                    $('.info_bar_left > .info_image').css('background-image', 'none');
                    $('.info_bar_left > .info_content > .info_content_title').html("");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("");
                    break;
                case 'glass_2':
                    $('#len_5_image').css("transform", "scale(1)");
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
                    $('#len_8_image').css("transform", "scale(1.2)");
                    $('#glass_1').css("transform", "scale(2)");
                    $('#left_instruct').hide();
                    $('.info_bar_left > .info_image').css('background-image', 'url("img/len-8.jpeg")');
                    $('.info_bar_left > .info_content > .info_content_title').html("Uptown - Robertsport, Grand Cape Mount");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("The simple life from my perspective reminds me of all the wonderful convenience that make life complicated and inconvenient in the West.");
                    break;
                case 'glass_2':
                    $('#len_8_image').css("transform", "scale(1.2)");
                    $('#glass_2').css("transform", "scale(2)");
                    $('#right_instruct').hide();
                    $('.info_bar_right > .info_image').css('background-image', 'url("img/len-8.jpeg")');
                    $('.info_bar_right > .info_content > .info_content_title').html("Uptown - Robertsport, Grand Cape Mount");
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
                    $('#len_8_image').css("transform", "scale(1)");
                    $('#glass_1').css("transform", "scale(1)");
                    $('#left_instruct').show();
                    $('.info_bar_left > .info_image').css('background-image', 'none');
                    $('.info_bar_left > .info_content > .info_content_title').html("");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("");
                    break;
                case 'glass_2':
                    $('#len_8_image').css("transform", "scale(1)");
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
                    $('#ange_1_image').css("transform", "scale(1.2)");
                    $('#glass_1').css("transform", "scale(2)");
                    $('#left_instruct').hide();
                    $('.info_bar_left > .info_image').css('background-image', 'url("img/ange-1.jpg")');
                    $('.info_bar_left > .info_content > .info_content_title').html("Image Title");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("This is where the information about the magnified object would display.");
                    break;
                case 'glass_2':
                    $('#ange_1_image').css("transform", "scale(1.2)");
                    $('#glass_2').css("transform", "scale(2)");
                    $('#right_instruct').hide();
                    $('.info_bar_right > .info_image').css('background-image', 'url("img/ange-1.jpg")');
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
                    $('#ange_1_image').css("transform", "scale(1)");
                    $('#glass_1').css("transform", "scale(1)");
                    $('#left_instruct').show();
                    $('.info_bar_left > .info_image').css('background-image', 'none');
                    $('.info_bar_left > .info_content > .info_content_title').html("");
                    $('.info_bar_left > .info_content > .info_content_wrap').html("");
                    break;
                case 'glass_2':
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

    // var time = new Date().getTime();
    // $(document.body).bind("touchmove mousemove keypress", function(e) {
    //     time = new Date().getTime();
    // });
    //
    // function refresh() {
    //     if (new Date().getTime() - time >= 120000)
    //         window.location.reload(true);
    //     else
    //         setTimeout(refresh, 20000);
    // }
    //
    // setTimeout(refresh, 20000);

}); //do not lose this closing bracket - unless you like breaking everything for fun
