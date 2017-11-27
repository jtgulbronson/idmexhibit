window.onload = function () {
    // Setting up colors array
    var colors = [];
    var mixed_color = "#ffffff";
    var info,
        region,
        spice;
    var textiles = [];
    var direction;
    var user = new User();

    //Setting up Hammer.js with jQuery
    var toTap = $(".spice");
    toTap.hammer().on("tap", function (ev) {
        console.log('tap spice successful');
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

    var socket = io.connect();

    socket.on('connect', function() {

        socket.emit('loadAll', user);

    })

    socket.on('loadAll', function (users) {
        console.log(users);

        users.forEach(function (user, index) {
            generateThread(user);
        });
    });

    socket.on('addThread', function (data) {

        mixed_color = result_color.toHexString();

        console.log(mixed_color);

        // Send user to page with textile
        // location.href = "/textile.html";

        // Send mixed_color to server.js
        socket.emit('toTextile', mixed_color);
    });

    socket.on('toTextile', function (dataTwo) {

        if (direction === "ver" && dataTwo !== "undefined") {
            $(".ver").css("display", "block");
            $(".ver").css("background-color", dataTwo);
            // Add color to textiles array for the loadAll function for all new users
            textiles.push(dataTwo + counter);
            console.log("textile.push: " + textiles);

            // Reset colors array for new user
            colors = [];
        } else if (direction === "hor" && dataTwo !== "undefined") {
            $(".hor").css("display", "block");
            $(".hor").css("background-color", dataTwo);
            // Add color to textiles array for the loadAll function for all new users
            textiles.push(dataTwo + counter);
            console.log("textile.push: " + textiles);

            // Reset colors array for new user
            colors = [];
        } else if (dataTwo === "undefined") {
            this.css("background-color", "#ffffff");
        }


    });

    // Start of Event Handlers
    var toTap = $(".spice");
    toTap.hammer().on("tap", function (ev) {
        console.log('tap spice successful');
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

    // Setting up HammerJs for direction of thread
    var toTap = $(".dir");
    toTap.hammer().on("tap", function (ev) {
        console.log('tap dir successful');

        // Take direction value from input.html
        direction = this.attributes["name"].value;

        // Generate Thread Direction in user.js
        user.dir = user.generateThreadDir();
        this.append(user.dir);
        console.log(user.dir);

        // Emit direction to server
        socket.emit('addDirection', user);
        return direction;
    });

    //Setting up Hammer.js with jQuery
    var toTapBtn = $("#mix-colors");
    toTapBtn.hammer().on("tap", function (ev) {
        console.log(colors);
        //Mixing colors through Color_mixer https://github.com/AndreasSoiron/Color_mixer
        result_color = Color_mixer.mix(colors);

        user = {
            color: result_color,
            region: region,
            spice: spice
        }

        console.log(user);

        $("#wrapper2").css("display", "none");
        $("#wrapper4").css("display", "block");
        socket.emit('myTap', user);

    });

    document.body.addEventListener('touchstart', log, false);
    document.body.addEventListener('touchmove', log, false);
    document.body.addEventListener('touchend', log, false);
}