$(function(){

       // target elements with the "draggable" class
   interact('#photo_1')
    .draggable({
      // enable inertial throwing
      inertia: false,
      // keep the element within the area of it's parent
      restrict: {
        drag: 'parent',
        endOnly: true,
        elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
      },
      // enable autoScroll
      autoScroll: true,

      // call this function on every dragmove event
      onmove: dragMoveListener,
    });

    function dragMoveListener (event) {
      $('#photo_1').css('width','300px');
      $('#photo_1').css('height', '150px');
      $('#photo_1').css('background-position', 'center center');
      $('#photo_1').css('background', '#28464B');
      $('#photo_1').css('padding-bottom','0px');
      $('#photo_1_text').css('display', 'none');
      var target = event.target,

          // keep the dragged position in the data-x/data-y attributes
          x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
          y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

      // translate the element
      // target.style.webkitTransform =
      // target.style.transform =
      //   'translate(' + x + 'px, ' + y + 'px)';
      target.style.top = y + 'px';
      target.style.left = x + 'px';

      // update the position attributes
      target.setAttribute('data-x', x);
      target.setAttribute('data-y', y);
      document.getElementById('transform-info').textContent =
      'position = ' + x + ',' + y;

    };

    interact('#photo_1')
    .on('tap', function (event) {
        $('#photo_1').css('width','600px');
        $('#photo_1').css('height', '400px');
        $('#photo_1').css('padding-bottom','100px');
        $('#photo_1').css('background-position', 'top left');
        $('#photo_1').css('background', '#28464B');
        $('#photo_1_text').css('display', 'block');
        event.preventDefault();
     });

    var angle = 0;

  interact('#photo_1').gesturable({
    onmove: function (event) {
      var arrow = document.getElementById('photo_1');

      angle += event.da;

      arrow.style.webkitTransform =
      arrow.style.transform =
        'rotate(' + angle + 'deg)';

        document.getElementById('transform-info').textContent =
        'Rotation = ' + angle.toFixed(2) + '°';
      }
  });

});
