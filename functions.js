var drone = require('ar-drone');
var client = drone.createClient();

module.exports = {
    takeoff: function (callback) {
        client.takeoff(callback);
    },

    land: function (callback) {
        client.land(callback);
    },

    fly: function (params, callback) {
        if (params.time == undefined)
            throw "time is a required parameter";
        if (params.speed == undefined)
            throw "speed is a required parameter";
        if (params.direction == undefined)
            throw "direction is a required parameter";

        switch (params.direction) {
            case "front":
                client.front(params.time).after(params.time, function () {
                    client.stop();
                    callback();
                });
                break;
            case "back":
                client.back(params.time).after(params.time, function () {
                    client.stop();
                    callback();
                });
                break;
            case "left":
                client.left(params.time).after(params.time, function () {
                    client.stop();
                    callback();
                });
                break;
            case "right":
                client.right(params.time).after(params.time, function () {
                    client.stop();
                    callback();
                });
                break;
            case "up":
                client.up(params.time).after(params.time, function () {
                    client.stop();
                    callback();
                });
                break;
            case "down":
                client.down(params.time).after(params.time, function () {
                    client.stop();
                    callback();
                });
                break;
        }
    },

    rotate: function (params, callback) {
        if (params.time == undefined)
            throw "time is a required parameter";
        if (params.speed == undefined)
            throw "speed is a required parameter";
        if (params.direction == undefined)
            throw "direction is a required parameter";

        switch (params.direction) {
            case "cw":
                client.clockwise(params.time).after(params.time, function () {
                    client.stop();
                    callback();
                });
                break;
            case "ccw":
                client.counterClockwise(params.time).after(params.time, function () {
                    client.stop();
                    callback();
                });
                break;
        }
    }
};

// function distanceToTime(var speed, var distance){
//   switch (speed) {
//     case 1: return 890.89735313 * distance + 2362.49193028;
//     break;
//     case 2: return 498.82927822 * distance + 1532.83111066;
//     break;
//     default:
//   }
// }
