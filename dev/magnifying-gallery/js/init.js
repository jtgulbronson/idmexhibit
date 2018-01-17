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

    // enable draggables to be dropped into this
    interact('#v').dropzone({
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
          case 'glass_1':
          $('#v-image').css("width","90px").css("height","100px").css("top","685px").css("left","485px");
          $('#glass_1').css("width","120px").css("height","120px");
          $('#side').css("display","block");
          break;
          case 'glass_2':
          $('#v-image').css("width","90px").css("height","100px").css("top","685px").css("left","485px");
          $('#glass_2').css("width","120px").css("height","120px");
          $('#side').css("display","block");
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
          case 'glass_1':
          $('#v-image').css("width","60px").css("height","70px").css("top","700px").css("left","500px");
          $('#glass_1').css("width","60px").css("height","60px");
          $('#side').css("display","none");
          break;
          case 'glass_2':
          $('#v-image').css("width","60px").css("height","70px").css("top","700px").css("left","500px");
          $('#glass_2').css("width","60px").css("height","60px");
          $('#side').css("display","none");
          break;
        }
      }
    });

});//do not lose this closing bracket - unless you like breaking everything for fun
