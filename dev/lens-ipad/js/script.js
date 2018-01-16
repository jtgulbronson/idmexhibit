window.onload = function () {

    Hammer.Swipe.prototype.defaults.velocity = 0.1;

    var topAmount = 0;

    var toTapBtn = $("#wrapper");

    toTapBtn.hammer()
        .data('hammer')
        .get('swipe')
        .set({ direction: Hammer.DIRECTION_ALL });

    toTapBtn.hammer().on("swipeup", function (ev) {

        if (topAmount <= 0 && topAmount > -200) {
            topAmount -= 100;
        }

        console.log("swiped up");

        $("#wrapper").animate({
            top: topAmount + '%'
        });

        console.log(topAmount);

        return topAmount;
    });

    toTapBtn.hammer().on("swipedown", function (ev) {

        if (topAmount < 0) {
            topAmount += 100;
        }

        console.log("swiped down");

        $("#wrapper").animate({
            top: topAmount + "%"
        });

        return topAmount;
    });

}