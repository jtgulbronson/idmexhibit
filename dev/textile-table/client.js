window.onload = function () {
    // Setting up colors array
    var colors = [];
    var mixed_color;
    var spice;
    var count = 1;
    var thread = {};
    var socket = io.connect();


    socket.on('connect', function () {

        socket.emit('loadAll', thread);

        //----- Adding the initial threads
        var toAdd = document.createDocumentFragment();
        for (var i = 0; i < 20; i++) {
            var threadDiv = document.createElement('div');
            threadDiv.id = 'thread-' + i;
            threadDiv.className = 'thread ver';
            toAdd.appendChild(threadDiv);
        }

        $('.textile-ver').append(toAdd);
    })

    socket.on('loadAll', function (threads) {
        // console.log(threads);

        // if (count > 1) {
        // threads.forEach(function (threadTwo, index) {
        // });
        //}
    });

    //----- Textile info to send to the server
    socket.on('toTextile', function (thread) {

        if (count < 25) {
            if (count % 2) {
                $(`.textile-hor`).append(`<div class="thread hor even" id="${thread.id}" data-color="${thread.color}" data-spice="${thread.spice}"><svg class="svg-thread" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" width="1960" height="75" viewBox="0 0 1960 75">
                <g fill="${thread.color}">
                    <rect width="30" height="75"/>
                    <rect x="105" width="135" height="75"/>
                    <rect x="315" width="135" height="75"/>
                    <rect x="525" width="135" height="75"/>
                    <rect x="735" width="135" height="75"/>
                    <rect x="945" width="135" height="75"/>
                    <rect x="1155" width="135" height="75"/>
                    <rect x="1365" width="135" height="75"/>
                    <rect x="1575" width="135" height="75"/>
                    <rect x="1789" width="135" height="75"/>
                </g>
                </svg></div> `);
                count++;
            } else {
                $(`.textile-hor`).append(`<div class="thread hor odd" id="${thread.id}" data-color="${thread.color}" data-spice="${thread.spice}"><svg class="svg-thread" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="1960" height="75" viewBox="0 0 1960 75">
            <g fill="${thread.color}">
              <rect width="135" height="75"/>
              <rect x="210" width="135" height="75"/>
              <rect x="420" width="135" height="75"/>
              <rect x="630" width="135" height="75"/>
              <rect x="840" width="135" height="75"/>
              <rect x="1050" width="135" height="75"/>
              <rect x="1260" width="135" height="75"/>
              <rect x="1470" width="135" height="75"/>
              <rect x="1680" width="135" height="75"/>
              <rect x="1890" width="75" height="75"/>
            </g>
          </svg></div> `);
                count++;
            }
            console.log("thread added");
            colors = [];
        } else {
            $('.thread').hide();
        }


    });

    //----- Selecting all the spices
    var toTap = $(".spice");
    toTap.hammer().on("tap", function (ev) {
        console.log('tap spice successful');
        //Making currentHex the name value of colors
        let currentHex = eval(this.attributes["name"].value);
        spice = this.attributes["data-spice"].value;
        //Pushing name value to colors array
        colors.push(currentHex);
        console.log(colors);
        return colors;
        return spice;
    });

    //----- Mixing all the colors
    var toTapBtn = $("#mix-colors");
    toTapBtn.hammer().on("tap", function (ev) {
        console.log(colors);
        //Mixing colors through Color_mixer https://github.com/AndreasSoiron/Color_mixer
        result_color = Color_mixer.mix(colors);

        mixed_color = result_color.toHexString();

        let id = Math.random().toString(36).substr(2, 9);
        console.log(mixed_color);

        if (mixed_color == '#000000') {
            mixed_color = '#3C3527';
        }

        thread = {
            id: id,
            color: mixed_color,
            spice: spice,
        }

        $("#wrapper-intro").animate({left:'-100%'});
        $("#spice-select").animate({left:'-100%'});
        $("#textile").animate({left:'0%'});


        socket.emit('myTap', thread);

    });

    //----- Applying one of the threads
    $('.textile-hor').on('click', '.thread', function () {

        console.log('thread-tapped');
        $('#user-info').html(`<p class="user-inner">${this.id}<br/>${$(this).data("spice")}<br/>${$(this).data("color")}</p>`);

    });

    //----- Navigating all the screens
    var toTapBtn = $("#textile-a");
    toTapBtn.hammer().on("tap", function (ev) {
        
        $("#wrapper-intro").animate({left:'-100%'});
        $("#textile").animate({left:'0'});

    });

    var toTapBtn = $("#spice-select-a");

    toTapBtn.hammer().on("tap", function (ev) {
        
        $("#wrapper-intro").animate({left:'-100%'});
        $("#spice-select").animate({left:'0'});
        $("#textile").animate({left:'100%'});

    });


    document.body.addEventListener('touchstart', log, false);
    document.body.addEventListener('touchmove', log, false);
    document.body.addEventListener('touchend', log, false);

    //Scroll Magic
    // init controller
    // var controller = new ScrollMagic.Controller({
    //     vertical: false
    // });

    // // create a scene
    // new ScrollMagic.Scene({
    //         duration: 1400, // the scene should last for a scroll distance of 100px
    //         offset: 0 // start this scene after scrolling for 50px
    //     })
    //     .setPin("#wrapper-intro") // pins the element for the the scene's duration
    //     .addTo(controller); // assign the scene to the controller

    // // create a scene
    // new ScrollMagic.Scene({
    //         duration: 1400, // the scene should last for a scroll distance of 100px
    //         offset: 0 // start this scene after scrolling for 50px
    //     })
    //     .setPin("#spice-select") // pins the element for the the scene's duration
    //     .addTo(controller); // assign the scene to the controller
}