var arDrone = require('ar-drone');
var client = arDrone.createClient();

client.takeoff();

client.on('navdata', console.log);
