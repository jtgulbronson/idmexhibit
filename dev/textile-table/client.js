window.onload = function () {
    // Setting up colors array
    var colors = [];
    var mixed_color = "#ffffff";
    var info,
        region,
        spice;
    var textiles = [];

    //Setting up Hammer.js with jQuery
    var toTap = $(".spice");
    toTap.hammer().on("tap", function (ev) {
        console.log('tap successful');
        //Making currentHex the name value of colors
        let currentHex = eval(this.attributes["name"].value);
        region = this.attributes["data-region"].value;
        spice = this.attributes["data-spice"].value;
        //Pushing name value to colors array
        colors.push(currentHex);
        console.log(colors);
        return colors;
        return region;
        return spice;
    });

    //Setting up Hammer.js with jQuery
    var toTapBtn = $("#mix-colors");
    toTapBtn.hammer().on("tap", function (ev) {
        console.log(colors);
        //Mixing colors through Color_mixer https://github.com/AndreasSoiron/Color_mixer
        result_color = Color_mixer.mix(colors);

        info = {
            color: result_color,
            region: region,
            spice: spice
        }

        socket.emit('myTap', info);

    });

    var socket = io.connect();

    socket.on('loadAll', function (users) {
        console.log(users);

        users.forEach(function (user, index) {
            generateAvatar(user);
        });
    });

    socket.on('addThread', function (data) {
        console.log("Thread added");
        console.log(data);
        console.log(result_color);
        console.log(result_color._rgba);
        result_color._rgba.splice(-1, 1);
        var exportedRgba = result_color._rgba.join(", ");
        console.log(exportedRgba);
        mixed_color = rgb2hex(exportedRgba);
        // https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
        function rgb2hex(r, g, b) {
            var rgb = b | (g << 8) | (r << 16);
            return '#' + (0x1000000 + rgb).toString(16).slice(1);
        }

        // location.href = "/textile.html";

        textiles.push(mixed_color);
        console.log("textile.push: " + textiles);

        socket.emit('toTextile', mixed_color);
    });

    socket.on('toTextile', function (dataTwo) {
        console.log(dataTwo);

        if (dataTwo === "undefined") {
            $("#test-strip").css("background-color", "#ffffff");
        } else {
            $("#test-strip").css("background-color", dataTwo);

            colors = [];
        }

    });

    // function changeColor() {
    //     if (mixed_color === "undefined") {
    //         $("#test-strip").css("background-color", "#ffffff");
    //     } else {
    //         $("#test-strip").css("background-color", mixed_color);

    //         colors = [];
    //     }

    document.body.addEventListener('touchstart', log, false);
    document.body.addEventListener('touchmove', log, false);
    document.body.addEventListener('touchend', log, false);
}