var arDrone = require('ar-drone');
var client = arDrone.createClient();

client.takeoff();

client.after(5000, function() {
    client.front(0.1)
}).after(5000, function() {
    client.stop();
    client.clockwiseDegrees(180);
}).after(1000, function() {
    client.up(0.1)
}).after(2000, function() {
    client.stop();
    client.front(0.1)
}).after(5000, function() {
    client.stop();
    client.land();
});