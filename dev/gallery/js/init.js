$(function(){
       $(".example_block").draggable();
       $('#photo_1').click(function(){
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
});
