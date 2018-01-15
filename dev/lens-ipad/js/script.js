window.onload = function () {

    Hammer.Swipe.prototype.defaults.velocity = 0.1;

    var leftAmount = 0;
    var topAmount = 0;

    var toTapBtn = $("#wrapper");

    toTapBtn.hammer()
        .data('hammer')
        .get('swipe')
        .set({ direction: Hammer.DIRECTION_ALL });

    toTapBtn.hammer().on("swipeleft", function (ev) {

        if (leftAmount > -3075) {
            leftAmount -= 1024;
        }

        console.log("swiped left");

        $("#wrapper").animate({
            left: leftAmount + 'px'
        });

        return leftAmount;
    });

    toTapBtn.hammer().on("swipeup", function (ev) {

        if (topAmount > -1535) {
            topAmount -= 768;
        }

        console.log("swiped up");

        $("#wrapper").animate({
            top: topAmount + 'px',
            left: '-1024px'
        });

        leftAmount = 1024;

        return topAmount;
        return leftAmount
    });

}