// Setting up colors array
var colors = [];

//Setting up Hammer.js with jQuery
var toTap = $(".spice");
toTap.hammer().on("tap", function(ev) {
    //Making currentHex the name value of input.js
    let currentHex = eval(this.attributes["name"].value);
    //Logging name value
    console.log(currentHex);
    //Pushing name value to colors array
    colors.push(currentHex);
    //Checking array values
    console.log(colors);
    return colors;
});

console.log(colors);
//Setting up Hammer.js with jQuery
var toTapBtn = $("#mix-colors");
toTapBtn.hammer().on("tap", function(ev) {
    //Mixing colors through Color_mixer https://github.com/AndreasSoiron/Color_mixer
    if (colors.length < 1 ) {
        $("#test-strip").css("background-color","#ffffff");
    } else {
    result_color = Color_mixer.mix(colors);
    $("#test-strip").css("background-color",result_color.toHexString());

    colors = [];
    }
});