var arDrone = require('ar-drone');
var client = arDrone.createClient();

client.on('navdata', function (e) {
	if(e.demo) {
		console.log(e.demo.batteryPercentage)
		console.log(e.demo.altitude)
	}
});
