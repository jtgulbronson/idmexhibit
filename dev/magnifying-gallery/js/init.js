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
        drag: 'parent',
        endOnly: true,
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

 //V element interaction
    // enable draggables to be dropped into this
    interact('#v').dropzone({
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
          $('#v_image').css("transform", "scale(2)");
          $('#glass_1').css("transform","scale(2.5)");
          $('.info_bar_left > .info_image').css('background-image', 'url("img/v-small.png")');
          $('.info_bar_left > .info_content > .info_content_wrap').html("This is where the information about the magnified object would display.");
          break;
          case 'glass_2':
          $('#v_image').css("transform", "scale(2)");
          $('#glass_2').css("transform","scale(2.5)");
          $('.info_bar_right > .info_image').css('background-image', 'url("img/v-small.png")');
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
          $('#v_image').css("transform", "scale(1)");
          $('#glass_1').css("transform","scale(1)");
          $('.info_bar_left > .info_image').css('background-image', 'none');
          $('.info_bar_left > .info_content > .info_content_wrap').html("");
          break;
          case 'glass_2':
          $('#v_image').css("transform", "scale(1)");
          $('#glass_2').css("transform","scale(1)");
          $('.info_bar_right > .info_image').css('background-image', 'none');
          $('.info_bar_right > .info_content > .info_content_wrap').html("");
          break;
        }
      }
    });

//Flower element interaction
       // enable draggables to be dropped into this
       interact('#flower').dropzone({
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
             $('#flower_image').css("transform", "scale(2)");
             $('#glass_1').css("transform","scale(2)");
             $('.info_bar_left > .info_image').css('background-image', 'url("img/flower.png")');
             $('.info_bar_left > .info_content > .info_content_wrap').html("This is where the information about the magnified object would display.");
             break;
             case 'glass_2':
             $('#flower_image').css("transform", "scale(2)");
             $('#glass_2').css("transform","scale(2)");
             $('.info_bar_right > .info_image').css('background-image', 'url("img/flower.png")');
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
             $('#flower_image').css("transform", "scale(1)");
             $('#glass_1').css("transform","scale(1)");
             $('.info_bar_left > .info_image').css('background-image', 'none');
             $('.info_bar_left > .info_content > .info_content_wrap').html("");
             break;
             case 'glass_2':
             $('#flower_image').css("transform", "scale(1)");
             $('#glass_2').css("transform","scale(1)");
             $('.info_bar_right > .info_image').css('background-image', 'none');
             $('.info_bar_right > .info_content > .info_content_wrap').html("");
             break;
          }
         }
       });

	   //Leaf element interaction
	          // enable draggables to be dropped into this
	          interact('#leaf').dropzone({
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
	                $('#leaf_image').css("transform", "scale(2)");
	                $('#glass_1').css("transform","scale(2)");
	                $('.info_bar_left > .info_image').css('background-image', 'url("img/leaf.png")');
	                $('.info_bar_left > .info_content > .info_content_wrap').html("This is where the information about the magnified object would display.");
	                break;
	                case 'glass_2':
	                $('#leaf_image').css("transform", "scale(2)");
	                $('#glass_2').css("transform","scale(2)");
	                $('.info_bar_right > .info_image').css('background-image', 'url("img/leaf.png")');
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
	                $('#leaf_image').css("transform", "scale(1)");
	                $('#glass_1').css("transform","scale(1)");
	                $('.info_bar_left > .info_image').css('background-image', 'none');
	                $('.info_bar_left > .info_content > .info_content_wrap').html("");
	                break;
	                case 'glass_2':
	                $('#leaf_image').css("transform", "scale(1)");
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
