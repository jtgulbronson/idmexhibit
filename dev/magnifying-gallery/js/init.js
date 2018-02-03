$( document ).ready(function(){
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
      // keep the element within the area of it's parent -- doesnt work??
      restrict: {
        restriction: '.wrapper',
        endOnly: false,
        elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
      },
      autoScroll: false,  // disable scroll via drag
      onmove: dragHandler, // call this function on every dragmove event
    })
   //  .on('tap', function(tapHandler){
   //    var tappedElement = tapHandler.target;
   //    var id = tappedElement.getAttribute('id');
   //    // event.preventDefault();
   // });
    function dragHandler (dragOne) {
      var target = dragOne.target;
        x = (parseFloat(target.getAttribute('data-x')) || 0) + dragOne.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + dragOne.dy;
      	target.style.top = y + 'px'; //adjust positioning based on dragged location
      	target.style.left = x + 'px'; //adjust positioning based on dragged location
	      // update the position attributes
	      target.setAttribute('data-x', x);
	      target.setAttribute('data-y', y);
	      // document.getElementById('transform-info').textContent = 'position = ' + x + ',' + y;
         var hideMe = target.getAttribute('id');
         switch(hideMe){
           case 'glass_1':
           $('#left_instruct').hide();
           break;
           case 'glass_2':
           $('#right_instruct').hide();
           break;
           //this hides the instructions based on what magnifier is moved
         }

      dragOne.preventDefault();
    };

 //bird element interaction
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
        switch(glass){
          case 'glass_1':
          $('#len_1_image').css("transform", "scale(1.2)");
          $('#glass_1').css("transform","scale(2.5)");
          $('.info_bar_left > .info_image').css('background-image', 'url("img/len-1.jpeg")');
          $('.info_bar_left > .info_content > .info_content_wrap').html("This is where the information about the magnified object would display.");
          break;
          case 'glass_2':
          $('#len_1_image').css("transform", "scale(1.2)");
          $('#glass_2').css("transform","scale(2.5)");
          $('.info_bar_right > .info_image').css('background-image', 'url("img/len-1.jpeg")');
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
        switch(glass){
          case 'glass_1':
          $('#len_1_image').css("transform", "scale(1)");
          $('#glass_1').css("transform","scale(1)");
          $('.info_bar_left > .info_image').css('background-image', 'none');
          $('.info_bar_left > .info_content > .info_content_wrap').html("");
          break;
          case 'glass_2':
          $('#len_1_image').css("transform", "scale(1)");
          $('#glass_2').css("transform","scale(1)");
          $('.info_bar_right > .info_image').css('background-image', 'none');
          $('.info_bar_right > .info_content > .info_content_wrap').html("");
          break;
        }
      }
    });

//bass element interaction
       // enable draggables to be dropped into this
       interact('#len_2').dropzone({
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
          switch(glass){
             case 'glass_1':
             $('#len_2_image').css("transform", "scale(1.2)");
             $('#glass_1').css("transform","scale(2)");
             $('.info_bar_left > .info_image').css('background-image', 'url("img/len-2.jpeg")');
             $('.info_bar_left > .info_content > .info_content_wrap').html("This is where the information about the magnified object would display.");
             break;
             case 'glass_2':
             $('#len_2_image').css("transform", "scale(1.2)");
             $('#glass_2').css("transform","scale(2)");
             $('.info_bar_right > .info_image').css('background-image', 'url("img/len-2.jpeg")');
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
          switch(glass){
             case 'glass_1':
             $('#len_2_image').css("transform", "scale(1)");
             $('#glass_1').css("transform","scale(1)");
             $('.info_bar_left > .info_image').css('background-image', 'none');
             $('.info_bar_left > .info_content > .info_content_wrap').html("");
             break;
             case 'glass_2':
             $('#len_2_image').css("transform", "scale(1)");
             $('#glass_2').css("transform","scale(1)");
             $('.info_bar_right > .info_image').css('background-image', 'none');
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
	            ondragenter: function (event) {
	             var draggableElement = event.relatedTarget,
	             dropzoneElement = event.target;
	             draggableElement.classList.add('dropped-element');
	             draggableElement.classList.remove('removed-element');
	             var glass = draggableElement.getAttribute('id');
	             switch(glass){
	                case 'glass_1':
	                $('#len_3_image').css("transform", "scale(1.2)");
	                $('#glass_1').css("transform","scale(2)");
	                $('.info_bar_left > .info_image').css('background-image', 'url("img/len-3.jpeg")');
	                $('.info_bar_left > .info_content > .info_content_wrap').html("This is where the information about the magnified object would display.");
	                break;
	                case 'glass_2':
	                $('#len_3_image').css("transform", "scale(1.2)");
	                $('#glass_2').css("transform","scale(2)");
	                $('.info_bar_right > .info_image').css('background-image', 'url("img/len-3.jpeg")');
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
	             switch(glass){
	                case 'glass_1':
	                $('#len_3_image').css("transform", "scale(1)");
	                $('#glass_1').css("transform","scale(1)");
	                $('.info_bar_left > .info_image').css('background-image', 'none');
	                $('.info_bar_left > .info_content > .info_content_wrap').html("");
	                break;
	                case 'glass_2':
	                $('#len_3_image').css("transform", "scale(1)");
	                $('#glass_2').css("transform","scale(1)");
	                $('.info_bar_right > .info_image').css('background-image', 'none');
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
                     ondragenter: function (event) {
                      var draggableElement = event.relatedTarget,
                      dropzoneElement = event.target;
                      draggableElement.classList.add('dropped-element');
                      draggableElement.classList.remove('removed-element');
                      var glass = draggableElement.getAttribute('id');
                      switch(glass){
                         case 'glass_1':
                         $('#len_4_image').css("transform", "scale(1.2)");
                         $('#glass_1').css("transform","scale(2)");
                         $('.info_bar_left > .info_image').css('background-image', 'url("img/len-4.jpeg")');
                         $('.info_bar_left > .info_content > .info_content_wrap').html("This is where the information about the magnified object would display.");
                         break;
                         case 'glass_2':
                         $('#len_4_image').css("transform", "scale(1.2)");
                         $('#glass_2').css("transform","scale(2)");
                         $('.info_bar_right > .info_image').css('background-image', 'url("img/len-4.jpeg")');
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
                      switch(glass){
                         case 'glass_1':
                         $('#len_4_image').css("transform", "scale(1)");
                         $('#glass_1').css("transform","scale(1)");
                         $('.info_bar_left > .info_image').css('background-image', 'none');
                         $('.info_bar_left > .info_content > .info_content_wrap').html("");
                         break;
                         case 'glass_2':
                         $('#len_4_image').css("transform", "scale(1)");
                         $('#glass_2').css("transform","scale(1)");
                         $('.info_bar_right > .info_image').css('background-image', 'none');
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
                            ondragenter: function (event) {
                             var draggableElement = event.relatedTarget,
                             dropzoneElement = event.target;
                             draggableElement.classList.add('dropped-element');
                             draggableElement.classList.remove('removed-element');
                             var glass = draggableElement.getAttribute('id');
                             switch(glass){
                                case 'glass_1':
                                $('#len_5_image').css("transform", "scale(1.2)");
                                $('#glass_1').css("transform","scale(2)");
                                $('.info_bar_left > .info_image').css('background-image', 'url("img/len-5.jpeg")');
                                $('.info_bar_left > .info_content > .info_content_wrap').html("This is where the information about the magnified object would display.");
                                break;
                                case 'glass_2':
                                $('#len_5_image').css("transform", "scale(1.2)");
                                $('#glass_2').css("transform","scale(2)");
                                $('.info_bar_right > .info_image').css('background-image', 'url("img/len-5.jpeg")');
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
                             switch(glass){
                                case 'glass_1':
                                $('#len_5_image').css("transform", "scale(1)");
                                $('#glass_1').css("transform","scale(1)");
                                $('.info_bar_left > .info_image').css('background-image', 'none');
                                $('.info_bar_left > .info_content > .info_content_wrap').html("");
                                break;
                                case 'glass_2':
                                $('#len_5_image').css("transform", "scale(1)");
                                $('#glass_2').css("transform","scale(1)");
                                $('.info_bar_right > .info_image').css('background-image', 'none');
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
                                   ondragenter: function (event) {
                                    var draggableElement = event.relatedTarget,
                                    dropzoneElement = event.target;
                                    draggableElement.classList.add('dropped-element');
                                    draggableElement.classList.remove('removed-element');
                                    var glass = draggableElement.getAttribute('id');
                                    switch(glass){
                                       case 'glass_1':
                                       $('#len_8_image').css("transform", "scale(1.2)");
                                       $('#glass_1').css("transform","scale(2)");
                                       $('.info_bar_left > .info_image').css('background-image', 'url("img/len-8.jpeg")');
                                       $('.info_bar_left > .info_content > .info_content_wrap').html("This is where the information about the magnified object would display.");
                                       break;
                                       case 'glass_2':
                                       $('#len_8_image').css("transform", "scale(1.2)");
                                       $('#glass_2').css("transform","scale(2)");
                                       $('.info_bar_right > .info_image').css('background-image', 'url("img/len-8.jpeg")');
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
                                    switch(glass){
                                       case 'glass_1':
                                       $('#len_8_image').css("transform", "scale(1)");
                                       $('#glass_1').css("transform","scale(1)");
                                       $('.info_bar_left > .info_image').css('background-image', 'none');
                                       $('.info_bar_left > .info_content > .info_content_wrap').html("");
                                       break;
                                       case 'glass_2':
                                       $('#len_8_image').css("transform", "scale(1)");
                                       $('#glass_2').css("transform","scale(1)");
                                       $('.info_bar_right > .info_image').css('background-image', 'none');
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
                                          ondragenter: function (event) {
                                           var draggableElement = event.relatedTarget,
                                           dropzoneElement = event.target;
                                           draggableElement.classList.add('dropped-element');
                                           draggableElement.classList.remove('removed-element');
                                           var glass = draggableElement.getAttribute('id');
                                           switch(glass){
                                              case 'glass_1':
                                              $('#ange_1_image').css("transform", "scale(1.2)");
                                              $('#glass_1').css("transform","scale(2)");
                                              $('.info_bar_left > .info_image').css('background-image', 'url("img/ange-1.jpg")');
                                              $('.info_bar_left > .info_content > .info_content_wrap').html("This is where the information about the magnified object would display.");
                                              break;
                                              case 'glass_2':
                                              $('#ange_1_image').css("transform", "scale(1.2)");
                                              $('#glass_2').css("transform","scale(2)");
                                              $('.info_bar_right > .info_image').css('background-image', 'url("img/ange-1.jpg")');
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
                                           switch(glass){
                                              case 'glass_1':
                                              $('#ange_1_image').css("transform", "scale(1)");
                                              $('#glass_1').css("transform","scale(1)");
                                              $('.info_bar_left > .info_image').css('background-image', 'none');
                                              $('.info_bar_left > .info_content > .info_content_wrap').html("");
                                              break;
                                              case 'glass_2':
                                              $('#ange_1_image').css("transform", "scale(1)");
                                              $('#glass_2').css("transform","scale(1)");
                                              $('.info_bar_right > .info_image').css('background-image', 'none');
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
         if(new Date().getTime() - time >= 120000)
             window.location.reload(true);
         else
             setTimeout(refresh, 20000);
     }

     setTimeout(refresh, 20000);

});//do not lose this closing bracket - unless you like breaking everything for fun
