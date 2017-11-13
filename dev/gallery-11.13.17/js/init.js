$(function(){
    // $('#photo_1').draggable({
    //     start: function(){
    //       $('#photo_1').css('transform', 'scale(1)rotateY(0deg)');
    //   }
    // });
    // $('#photo_2').draggable({
    //
    //     start: function(){
    //       $('#photo_2').css('transform', 'scale(1)rotateY(0deg)');
    //   }
    // });
       var photo1_obj = document.getElementById('photo_1');
       photo1_drag = new Hammer(photo1_obj);
       photo1_drag.add( new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold: 0 }) );
       var lastPosX = 0;
       var lastPosY = 0;
       var isDragging = false;
       photo1_drag.on("pan", function(pr) {
           photo1_obj.style.transform = "scale(1)rotateY(0deg)";
           var elem = pr.target;
              if ( ! isDragging ) {
                isDragging = true;
                lastPosX = elem.offsetLeft;
                lastPosY = elem.offsetTop;
              }
           var posX = pr.deltaX + lastPosX;
           var posY = pr.deltaY + lastPosY;

           // move our element to that position
           elem.style.left = posX + "px";
           elem.style.top = posY + "px";

           // DRAG ENDED
           // this is where we simply forget we are dragging
           if (pr.isFinal) {
              isDragging = false;
           }
       });

       var photo2_obj = document.getElementById('photo_2');
       photo2_drag = new Hammer(photo2_obj);
       photo2_drag.add( new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold: 0 }) );
       var lastPosX = 0;
       var lastPosY = 0;
       var isDragging = false;
       photo2_drag.on("pan", function(pr) {
           photo2_obj.style.transform = "scale(1)rotateY(0deg)";
           var elem = pr.target;
              if ( ! isDragging ) {
                isDragging = true;
                lastPosX = elem.offsetLeft;
                lastPosY = elem.offsetTop;
              }
           var posX = pr.deltaX + lastPosX;
           var posY = pr.deltaY + lastPosY;

           // move our element to that position
           elem.style.left = posX + "px";
           elem.style.top = posY + "px";

           // DRAG ENDED
           // this is where we simply forget we are dragging
           if (pr.isFinal) {
              isDragging = false;
           }
       });


       $('#photo_1').on('click touchstart', function (){
         var transformed = $('#photo_1').css('transform');
  	      switch (transformed){
              case "matrix(1, 0, 0, 1, 0, 0)" :
                  $('#photo_1').css('transform','scale(2)');
                  break;
              case "matrix(2, 0, 0, 2, 0, 0)":
                  $('#photo_1').css('transform','scale(2)rotateY(180deg)');
                  break;
              case "matrix3d(-2, 0, -1.22465e-16, 0, 0, 2, 0, 0, 2.44929e-16, 0, -1, 0, 0, 0, 0, 1)":
                  $('#photo_1').css('transform','scale(2)rotateY(0deg)');
                  break;
                }
       });
	   $('#photo_2').on('click touchstart', function (){
         var transformed = $('#photo_2').css('transform');
  	      switch (transformed){
              case "matrix(1, 0, 0, 1, 0, 0)" :
                  $('#photo_2').css('transform','scale(2)');
                  break;
              case "matrix(2, 0, 0, 2, 0, 0)":
                  $('#photo_2').css('transform','scale(2)rotateY(180deg)');
                  break;
              case "matrix3d(-2, 0, -1.22465e-16, 0, 0, 2, 0, 0, 2.44929e-16, 0, -1, 0, 0, 0, 0, 1)":
                  $('#photo_2').css('transform','scale(2)rotateY(0deg)');
                  break;
                }
       });
});
