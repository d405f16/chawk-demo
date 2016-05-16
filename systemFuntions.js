function drone_land(){
  client.after(2000, function(){
    this.stop();
    this.land();
  });
}

function drone_takeoff(){
  client.takeoff();
}
function drone_fly(var param){
  switch (param.speed) {
    case 1: client.after(1000, function{
      this.front(0,1);
    })
    .after(distanceToTime(1,param.distance),function(){
      this.stop();
    });
    break;

    case 2: client.after(1000, function(){
      this.front(0,2);
    })
    .after(distancetoTime(2,param.distance),function(){
      this.stop();
    });
    break;

    case 3: client.after(1000, function(){
      this.front(0,3);
    })
    .after(distancetoTime(3,param.distance),function(){
      this.stop();
    });
    break;

    case 4: client.after(1000, function(){
      this.front(0,2);
    })
    .after(distancetoTime(2,param.distance),function(){
      this.stop();
    });
    break;

    default:
    throw "Speed for drone.front should be 1-4";
  }
}
function distanceToTime(var speed, var distance){
  switch (speed) {
    case 1: return 890.89735313 * distance + 2362.49193028;
    break;
    case 2: return 498.82927822 * distance + 1532.83111066;
    break;
    case 3:
    break;
    case 4:
    break;
    default:
  }
}
