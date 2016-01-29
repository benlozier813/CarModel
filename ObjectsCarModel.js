/* Car Models
Toyota - var car1 = carModel("Toyota", "Prius", 2015, 0)
Ford
*/


function carModel(mk, mo, ye)
  {var speed = 0;
    return {
      getValue: function() {return "Your car is a " + this.year +
      " " + this.make + " " + this.model;},
      make: mk,
      model: mo,
      year: ye,
      getSpeed: function() {return speed;},
      increase: function() {
            if (speed < 85) {
            speed += 10;
              }
            if (speed > 85) {
              speed = 85;
              }
            },
      decrease: function() {
            if (speed > 0) {
              speed -= Math.floor((Math.random() * 7) + 1);
            }
            if(speed < 0 ){
              speed = 0;
            }
          },
      accel: function() {
          while(speed < 85){
            car1.increase();
            console.log(speed);
              }
            },
      decre: function() {
        while(speed > 0) {
          car1.decrease();
          console.log(speed);
              }
            },

        }
      }

var car1 = carModel("Toyota", "Prius", 2015)







  //
  // function newCounter()
  // {
  //   var value = 0;
  //   return {
  //     getValue: function() { return value;},
  //     increase: function() { value++; },
  //     decrease: function() { value--; }
  //   }
  // };
