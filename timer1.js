
const process = require('process');
  
// Printing process.argv property value
// Printing process.argv property value
let times =  process.argv.splice(2);

for (let time of times) {
  if (time >= 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
      process.stdout.write("It's time to wake up. Current time: " + time + " seconds. \n");
    }, time * 1000); // <= 1s delay to make it noticeable. Can dial it down later.
  } else {
    process.stdout.write("Provided value is invalid\n");
  }
}
return;