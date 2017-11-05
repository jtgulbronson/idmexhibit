$(function(){
  $(".drag").draggable();
  $("#drop").droppable({
    drop: function(event, ui){
      //detect which draggables are being dropped
      var dropped = ui.draggable.attr("id");
      if("block1" == dropped){
        document.getElementById("block1").innerHTML = "dropped!";
      }else if("block2" == dropped){
        document.getElementById("block2").innerHTML = "dropped!";
      }else{
        document.getElementById("block3").innerHTML = "dropped!"; 
      }
    }
  });
});