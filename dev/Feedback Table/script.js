// Setting up colors array
var colors = [];
//Setting up color mixing result
var result_color;

//Setting up Hammer.js with jQuery
var toTap = $(".spice");
toTap.hammer().on("tap", function(ev) {
    //Making currentHex the name value of input.js
    let currentHex = this.attributes["name"].value;
    //Checking for Hammer.js tap
    console.log("tap detected");
    //Logging name value
    console.log(currentHex);
    //Pushing name value to colors array
    colors.push(currentHex);
    //Checking array values
    console.log(colors);
    //Mixing colors through Color_mixer https://github.com/AndreasSoiron/Color_mixer
    var result_color = Color_mixer.mix(colors);
    //Checking color mixing result
    console.log(result_color);
});