$( document ).ready(function(){
//////////////////////////////////////
// PLZ dont autoScroll
//////////////////////////////////////

   document.body.addEventListener('touchmove', function(event) {
     event.preventDefault();
   }, false);
/////////////////////////////////////
// Drag and Drop
////////////////////////////////////

// Draggable
   interact('.example_block')
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
    .on('tap', function(tapHandler){
      var tappedElement = tapHandler.target;
      var id = tappedElement.getAttribute('id');
      if ($(tappedElement).hasClass('expand')){
         switch(id){
                  case 'photo_1':
                  $('#photo_1').css('width', '180px');
                  $('#photo_1').css('height', '100px');
                  $('#photo_1').css('border-bottom-width', '50px');
                  $('#photo_1_text').hide();
                  $('#photo_1').removeClass('expand');
                  break;

                  case 'photo_2':
                  $('#photo_2').css('width', '200px');
                  $('#photo_2').css('height', '100px');
                  $('#photo_2').css('border-bottom-width', '50px');
                  $('#photo_2_text').hide();
                  $('#photo_2').removeClass('expand')
                  break;

                  case 'photo_3':
                  $('#photo_3').css('width', '200px');
                  $('#photo_3').css('height', '100px');
                   $('#photo_3').css('border-bottom-width', '50px');
                  $('#photo_3_text').hide();
                  $('#photo_3').removeClass('expand');
                  break;
                }
      }else{
         switch(id){
                  case 'photo_1':
                  $('#photo_1').css('width', '360px');
                  $('#photo_1').css('height', '200px');
                  $('#photo_1').css('border-bottom-width', '10px');
                  $('#photo_1_text').show();
                  $('#photo_1').addClass('expand');
                  break;

                  case 'photo_2':
                  $('#photo_2').css('width', '400px');
                  $('#photo_2').css('height', '200px');
                  $('#photo_2').css('border-bottom-width', '10px');
                  $('#photo_2_text').show();
                  $('#photo_2').addClass('expand');
                  break;

                  case 'photo_3':
                  $('#photo_3').css('width', '400px');
                  $('#photo_3').css('height', '200px');
                  $('#photo_3').css('border-bottom-width', '10px');
                  $('#photo_3_text').show();
                  $('#photo_3').addClass('expand');
                  break;
                }
      }
      // event.preventDefault();
   });
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
      dragOne.preventDefault();
    };

});//do not lose this closing bracket - unless you like breaking everything for fun
