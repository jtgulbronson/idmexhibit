//function reads on load of page
window.addEventListener('load', function() {

    //PAN EXAMPLE U1
    var panObj = document.getElementById('pan_obj');
    var panEx = new Hammer(panObj);
    panEx.on("panleft", function(p) {
        panObj.style.backgroundColor = "#f3f3f3";
        panObj.textContent = p.type ;
    });
    panEx.on("panright", function(p) {
        panObj.style.backgroundColor = "#939393";
        panObj.textContent = p.type ;
    });

    //TAP EXAMPLE U1
    var tapObj = document.getElementById('tap_obj');
    var tapEx = new Hammer(tapObj);
    tapEx.on("tap" ,function(t) {
        var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        tapObj.style.backgroundColor = hue;
    });

    //PRESS/DRAG EXAMPLE U1
    var pressObj = document.getElementById('press_obj');
    var pressEx = new Hammer(pressObj);
    pressEx.add( new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold: 0 }) );
    var lastPosX = 0;
    var lastPosY = 0;
    var isDragging = false;
    pressEx.on("pan", function(pr) {
        pressObj.textContent = "drag me";
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
          pressObj.textContent = "I have been dropped";
        }
    });


    //USER 2

    //PAN EXAMPLE
    var panObjU2 = document.getElementById('pan_obj_u2');
    var panExU2 = new Hammer(panObjU2);
    panExU2.add( new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold: 0 }) ); //enables vertical motion
    panExU2.on("panup", function(p) {
        panObjU2.style.backgroundColor = "#f3f3f3";
        panObjU2.textContent ="panleft"; //text says pan left but is really pan up because parent div is rotates

    });
    panExU2.on("pandown", function(p) {
        panObjU2.style.backgroundColor = "#939393";
        panObjU2.textContent = "panright" ; //text says pan right but is really pan down because parent div is rotates
    });

    //TAP EXAMPLE U2
    var tapObjU2 = document.getElementById('tap_obj_u2');
    var tapExU2 = new Hammer(tapObjU2);
    tapExU2.on("tap" ,function(t) {
        var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        tapObjU2.style.backgroundColor = hue;
    });

    //PRESS/DRAG EXAMPLE U2
    var pressObj_u2 = document.getElementById('press_obj_u2');
    var pressEx_u2 = new Hammer(pressObj_u2);
    pressEx_u2.add( new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold: 0 }) );
    var lastPosX_u2 = pressObj_u2.offsetLeft; //this makes sure the object can be dragged multiple times without reverting to origin
    var lastPosY_u2 = pressObj_u2.offsetTop; //this makes sure the object can be dragged multiple times without reverting to origin
    var isDragging_u2 = false;
    pressEx_u2.on("pan", function(pru2) {
        pressObj_u2.textContent = "drag me";
        var elem_u2 = pru2.target;
          if ( ! isDragging_u2 ) {
            isDragging_u2 = true;
            lastPosX_u2 = elem_u2.offsetLeft;
            lastPosY_u2 = elem_u2.offsetTop;
          }
        var posX_u2 = pru2.deltaX + lastPosX_u2;
        var posY_u2 = pru2.deltaY + lastPosY_u2;

        // move our element to that position
        elem_u2.style.left = posX_u2 + "px";
        elem_u2.style.top = posY_u2 + "px";

        // DRAG ENDED
        // this is where we simply forget we are dragging
        if (pru2.isFinal) {
          isDragging_u2 = false;
          pressObj_u2.textContent = "I have been dropped";
        }
    });

    //User 3

    //PAN EXAMPLE
    var panObjU3 = document.getElementById('pan_obj_u3');
    var panExU3 = new Hammer(panObjU3);
    panExU3.add( new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold: 0 }) ); //enables vertical motion
    panExU3.on("panup", function(p) {
        panObjU3.style.backgroundColor = "#f3f3f3";
        panObjU3.textContent ="panright";

    });
    panExU3.on("pandown", function(p) {
        panObjU3.style.backgroundColor = "#939393";
        panObjU3.textContent = "panleft" ;
    });

    //TAP EXAMPLE U3
    var tapObjU3 = document.getElementById('tap_obj_u3');
    var tapExU3 = new Hammer(tapObjU3);
    tapExU3.on("tap" ,function(t) {
        var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        tapObjU3.style.backgroundColor = hue;
    });

    //PRESS/DRAG EXAMPLE U3
    var pressObj_u3 = document.getElementById('press_obj_u3');
    var pressEx_u3 = new Hammer(pressObj_u3);
    pressEx_u3.add( new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold: 0 }) );
    var lastPosX_u3 = pressObj_u3.offsetLeft; //this makes sure the object can be dragged multiple times without reverting to origin
    var lastPosY_u3 = pressObj_u3.offsetTop; //this makes sure the object can be dragged multiple times without reverting to origin
    var isDragging_u3 = false;
    pressEx_u3.on("pan", function(pru3) {
        pressObj_u3.textContent = "drag me";
        var elem_u3 = pru3.target;
          if ( ! isDragging_u3 ) {
            isDragging_u3 = true;
            lastPosX_u3 = elem_u3.offsetLeft;
            lastPosY_u3 = elem_u3.offsetTop;
          }
        var posX_u3 = pru3.deltaX + lastPosX_u3;
        var posY_u3 = pru3.deltaY + lastPosY_u3;

        // move our element to that position
        elem_u3.style.left = posX_u3 + "px";
        elem_u3.style.top = posY_u3 + "px";

        // DRAG ENDED
        // this is where we simply forget we are dragging
        if (pru3.isFinal) {
          isDragging_u3 = false;
          pressObj_u3.textContent = "I have been dropped";
        }
    });

 });
