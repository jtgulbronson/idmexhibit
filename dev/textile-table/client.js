window.onload = function () {
    // Setting up colors array
    var colors = [];
    var mixed_color;
    var region,
        spice;
    var direction;
    var count = 1;
    var thread = {};
    var socket = io.connect();

    socket.on('connect', function () {

        socket.emit('loadAll', thread);

    })

    socket.on('loadAll', function (threads) {
        console.log(threads);

        if (count > 1) {
        threads.forEach(function (thread, index) {
            console.log(thread.dir);
            $(`.textile-${thread.dir}`).append(`<div class="thread ${thread.dir} id="${thread.id}" style="background-color:${thread.color}; display: block;"></div> `);
        });
    }
    });

    socket.on('toTextile', function (data) {

        if (count < 24) {
            $(`.textile-${thread.dir}`).append(`<div class="thread ${thread.dir} id="${thread.id}" style="background-color:${thread.color}; display: block; z-index:${count};"></div> `);
    
            console.log(`.textile-${thread.dir}`);
            colors = [];
        } else {
            $('.thread').hide();
        }
    
        count++;

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
        direction = this.attributes["name"].value;

        console.log(direction);
        return direction;
    });

    //Setting up Hammer.js with jQuery
    var toTapBtn = $("#mix-colors");
    toTapBtn.hammer().on("tap", function (ev) {
        console.log(colors);
        //Mixing colors through Color_mixer https://github.com/AndreasSoiron/Color_mixer
        result_color = Color_mixer.mix(colors);

        mixed_color = result_color.toHexString();

        let id = Math.random().toString(36).substr(2, 9);
        console.log(direction);
        console.log(mixed_color);

        thread = {
            id: id,
            color: mixed_color,
            region: region,
            spice: spice,
            dir: direction
        }

        console.log(thread);


        socket.emit('myTap', thread);

    });

    document.body.addEventListener('touchstart', log, false);
    document.body.addEventListener('touchmove', log, false);
    document.body.addEventListener('touchend', log, false);
    //scroll smooth
    // $('a').click(function () {
    //     $('html, body').animate({
    //         scrollLeft: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().left - 70
    //     }, 500);
    //     return false;
    // });
}