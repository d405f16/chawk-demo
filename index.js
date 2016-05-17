var drone = require('./functions');

drone.takeoff(function () {
    drone.fly({speed: 0.5, time: 10, direction: 'front'}, function () {
        drone.rotate({speed: .5, time: 5, direction: 'cw'}, function () {

        })
    });
});