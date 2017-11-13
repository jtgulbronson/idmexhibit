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
        // https://gist.github.com/sabman/1018594/b58cbe80342a7a9f302987e6585be27be270b6be
        function rgb2hex(rgb)
        {
            rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
            function hex(x) {
                return ("0" + parseInt(x).toString(16)).slice(-2);
            }
            return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
        }
        mixed_color = rgb2hex(exportedRgba);
        console.log(mixed_color);

        // location.href = "/textile.html";

        socket.emit('toTextile', mixed_color);
    });

    socket.on('toTextile', function (dataTwo) {
        console.log(dataTwo);

        if (dataTwo === "undefined") {
            $("#test-strip").css("background-color", "#ffffff");
        } else {
            $("#test-strip").css("background-color", dataTwo);

            textiles.push(dataTwo);
            console.log("textile.push: " + textiles);

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