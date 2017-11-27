$( document ).ready(function(){

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
		  // used for debugging - sometimes the cards like to run away
      dragOne.preventDefault();
    };
// enable draggables to be dropped into this
    interact('.dropzone').dropzone({
      // only accept elements matching this CSS selector
      accept: '.example_block',
      // Require a 75% element overlap for a drop to be possible
      overlap: 0.25,
      ondragenter: function (event) {
        var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;
        draggableElement.classList.add('dropped-element');
        draggableElement.classList.remove('removed-element');
        var id = draggableElement.getAttribute('id');
        switch(id){
          case 'photo_1':
          $('#photo_1_text').css('display', 'block');
          break;
          case 'photo_2':
          $('#photo_2_text').css('display', 'block');
          break;
        }
      },
      ondragleave: function (event) {
        var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;
         draggableElement.classList.add('removed-element');
        draggableElement.classList.remove('dropped-element');
        var id = draggableElement.getAttribute('id');
        switch(id){
          case 'photo_1':
          $('#photo_1_text').css('display', 'none');
          break;
          case 'photo_2':
          $('#photo_2_text').css('display', 'none');
          break;
        }
      }
    });

    // Rotatable
      var angle = 0; // used for rotation
      interact('#photo_1').gesturable({
        onmove: function (rotateOne) {
          var rotateObj = document.getElementById('photo_1'); //find our object to rotate
          angle += rotateOne.da; //track our angle changed by user
          rotateObj.style.webkitTransform = rotateObj.style.transform = 'rotate(' + angle + 'deg)';
          //set our rotation from user input - for old and new browsers

          // document.getElementById('transform-info2').textContent = 'Rotation = ' + angle.toFixed(2) + '°';
          //Used for debugging - the cards like to run away without warning
          }
      });
      //Rotatable
      var angle = 0;
        interact('#photo_2').gesturable({
          onmove: function (rotateTwo) {
            var rotateObj = document.getElementById('photo_2'); //find our object to rotate
            angle += rotateTwo.da; //track our angle changed by user
            rotateObj.style.webkitTransform = rotateObj.style.transform = 'rotate(' + angle + 'deg)';
            //set our rotation from user input - for old and new browsers

            // document.getElementById('transform-info2').textContent = 'Rotation = ' + angle.toFixed(2) + '°';
            //Used for debugging - the cards like to run away without warning
            }
        });


});//do not lose this closing bracket - unless you like breaking everything for fun
