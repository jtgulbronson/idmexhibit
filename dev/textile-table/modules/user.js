function User() {
    //Random # if under 10,000
    //https://gist.github.com/gordonbrander/2230317
    this.id = Math.random().toString(36).substr(2, 9);
    
}

User.prototype.generateThreadDir = function (data) {
    var direction;
    console.log("prototype connected");
    var childDiv = document.createElement('div');
    if (direction === "ver") {
        childDiv.className = 'ver';
    } else if (direction === "hor") {
        childDiv.className = 'hor';
    } else {
        childDiv.className = 'hor';
    }

    return childDiv;
}

function generateThread(user) {
    // if (user.mobile) {
    //     $('.display-view').append(`<div class="avatar" id="id-${user.id}" style="background:${user.color}"> ${user.id} logged on at: ${time} </div`);
    // }
}