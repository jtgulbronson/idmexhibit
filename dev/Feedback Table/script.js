var colors = [];
var result_color;

var toTap = $(".spice");
toTap.hammer().on("tap", function(ev) {
    let currentId = this.id;
    console.log("tap detected");
    console.log(currentId);
    colors.push(currentId);
    console.log(colors);
    var result_color = Color_mixer.mix(colors);
    console.log(result_color);
});