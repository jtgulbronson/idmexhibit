$(function(){
    function log(ev) {
         console.log(ev);
        }

        document.body.addEventListener('touchstart', log, false);
        document.body.addEventListener('touchmove', log, false);
        document.body.addEventListener('touchend', log, false);
    $('.trans').freetrans();
    $('.trans').freetrans('scale', false);
    $('#one').freetrans({
        // matrix: "matrix(.95,.25,-.25,.95,30,50)"
    });

});
