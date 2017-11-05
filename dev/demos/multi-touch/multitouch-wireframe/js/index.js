//Touch table dev wireframe based on Jacklyn Kjerstie's HammerJS Touch Table demo at http://www.jackelynkjerstie.com/sr-proj/touch-table/
//My additions are found directly underneath the "jtg73" comments
window.addEventListener('load', function() {
    // jtg73 - setting up color array for tap example
    var myArray = ["#5F0CE8", "#3600FF", "#0B93FF"];
    // jtg73 - setting index for array
    var myIndex = 1;
    // jtg73 - getting doc ID for content manipulation
    var middleSquare = document.getElementById('middle-square');

    //Tap circle 1
    var tapObj = document.getElementById('tap_obj');
    var tapEx = new Hammer(tapObj);
    tapEx.on("tap" ,function(t) {
        //jtg73 - cycle though array of content (colors in this case)
      var middleColorChange = middleSquare.style.backgroundColor = myArray[myIndex];
      console.log(middleColorChange);
      myIndex = (myIndex+1)%(myArray.length);
    });
  
  //Tap circle 2
    var tapObj2 = document.getElementById('tap_obj2');
    var tapEx2 = new Hammer(tapObj2);
    tapEx2.on("tap" ,function(t) {
        //jtg73 - cycle though array of content (colors in this case)
      var middleColorChange = middleSquare.style.backgroundColor = myArray[myIndex];
      console.log(middleColorChange);
      myIndex = (myIndex+1)%(myArray.length);
    });
  
  //Tap circle 3
    var tapObj3 = document.getElementById('tap_obj3');
    var tapEx3 = new Hammer(tapObj3);
    tapEx3.on("tap" ,function(t) {
        //jtg73 - cycle though array of content (colors in this case)
      var middleColorChange = middleSquare.style.backgroundColor = myArray[myIndex];
      console.log(middleColorChange);
      myIndex = (myIndex+1)%(myArray.length);
    });

    // Press/drag square 1
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

        // move element to that position
        elem.style.left = posX + "px";
        elem.style.top = posY + "px";
       
        // /Drag
        // Dropping the object
        if (pr.isFinal) {
            isDragging = false;
            pressObj.textContent = "Pick me up again!";

            // jtg73 - changes color of square once dragged within square
            if (elem.style.left >= "475px" && elem.style.left <= "975px") {
               middleSquare.style.backgroundColor = "#eb4333";
               elem.style.left = "75%";
               elem.style.top = "1%";
              //jtg - interval function for first example
              setTimeout(function(){ middleSquare.style.backgroundColor = "#aaa"; }, 2000);
            }
         }
    });
  
  // Press/drag square 2
    var pressObj2 = document.getElementById('press_obj2');
    var pressEx2 = new Hammer(pressObj2);
    pressEx2.add( new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold: 0 }) );
    var lastPosX2 = 0;
    var lastPosY2 = 0;
    var isDragging2 = false;
    pressEx2.on("pan", function(pr2) {
        pressObj2.textContent = "drag me";
        var elem2 = pr2.target;
          if ( ! isDragging2 ) {
            isDragging2 = true;
            lastPosX2 = elem2.offsetLeft;
            lastPosY2 = elem2.offsetTop;
          }
        var posX2 = pr2.deltaX + lastPosX2;
        var posY2 = pr2.deltaY + lastPosY2;

        // move element to that position
        elem2.style.left = posX2 + "px";
        elem2.style.top = posY2 + "px";
       
        // /Drag
        // Dropping the object
        if (pr2.isFinal) {
            isDragging2 = false;
            pressObj2.textContent = "Pick me up again!";

            // jtg73 - changes color of square once dragged within square
            if (elem2.style.left >= "475px" && elem2.style.left <= "975px") {
               middleSquare.style.backgroundColor = "#EB6726";
            } else if (elem2.style.left < "475px" || elem2.style.left > "975px") { 
             middleSquare.style.backgroundColor = "#ccc";
            }
         }
    });

// Press/drag square 3
    var pressObj3 = document.getElementById('press_obj3');
    var pressEx3 = new Hammer(pressObj3);
    pressEx3.add( new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold: 0 }) );
    var lastPosX3 = 0;
    var lastPosY3 = 0;
    var isDragging3 = false;
    pressEx3.on("pan", function(pr3) {
        pressObj3.textContent = "drag me";
        var elem3 = pr3.target;
          if ( ! isDragging3 ) {
            isDragging3 = true;
            lastPosX3 = elem3.offsetLeft;
            lastPosY3 = elem3.offsetTop;
          }
        var posX3 = pr3.deltaX + lastPosX3;
        var posY3 = pr3.deltaY + lastPosY3;

        // move element to that position
        elem3.style.left = posX3 + "px";
        elem3.style.top = posY3 + "px";
       
        // /Drag
        // Dropping the object
        if (pr3.isFinal) {
            isDragging3 = false;
            pressObj3.textContent = "Pick me up again!";

            // jtg73 - changes color of square once dragged within square
            if (elem3.style.left >= "475px" && elem3.style.left <= "975px") {
               middleSquare.style.backgroundColor = "#EBA832";
               elem3.style.left = "75%";
               elem3.style.top = "81%";
            }
         }
    });
});