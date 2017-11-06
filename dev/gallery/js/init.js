//function reads on load of page
window.addEventListener('load', function() {

    // //PAN EXAMPLE U1
    // var panObj = document.getElementById('pan_obj');
    // var panEx = new Hammer(panObj);
    // panEx.on("panleft", function(p) {
    //     panObj.style.backgroundColor = "#f3f3f3";
    //     panObj.textContent = p.type ;
    // });
    // panEx.on("panright", function(p) {
    //     panObj.style.backgroundColor = "#939393";
    //     panObj.textContent = p.type ;
    // });
    //
    // //TAP EXAMPLE U1
    // var tapObj = document.getElementById('tap_obj');
    // var tapEx = new Hammer(tapObj);
    // tapEx.on("tap" ,function(t) {
    //     var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    //     tapObj.style.backgroundColor = hue;
    // });

    //PRESS/DRAG EXAMPLE U1
    var pressObj = document.getElementById('press_obj1');
    var pressEx = new Hammer(pressObj);
    pressEx.add( new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold: 0 }) );
    var lastPosX = 0;
    var lastPosY = 0;
    var isDragging = false;
    pressEx.on("pan", function(pr) {
        pressObj.style.transform = "scale(1)";
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
          pressObj.textContent = "click to zoom/flip press and hold to exit";
        }
    });
    pressEx.on("doubletap", function(scaleUp) {
        // console.log(pressObj.style.transform);
        switch (pressObj.style.transform){
            case "scale(1)" :
                pressObj.style.transform = "scale(2)";
                console.log(pressObj.style.transform);
                break;
            case "scale(1) rotateY(0deg)":
                pressObj.style.transform = "scale(2)";
                console.log(pressObj.style.transform);
                break;
            case "scale(2)":
                pressObj.style.transform = "scale(2)rotateY(180deg)";
                console.log(pressObj.style.transform);
                break;
            case "scale(2) rotateY(180deg)":
                pressObj.style.transform = "scale(2)rotateY(0deg)";
                console.log(pressObj.style.transform);
                break;
            case "scale(2) rotateY(0deg)":
                pressObj.style.transform = "scale(2)rotateY(180deg)";
                console.log(pressObj.style.transform);
                break;
    }
});
    pressEx.on("press", function(scaleDown) {
        pressObj.style.transform = "scale(1)rotateY(0deg)";
    });


 });
