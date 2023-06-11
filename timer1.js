let array = process.argv.slice(2);

let maxValue = Number(array[0]);

// retrieve the maxValue in an array to get the amount of time for the setTimeout's delay(second) argument
for (let i = 1; i < array.length; i++) {
  if (Number(array[i]) > maxValue) {
    maxValue = array[i];
  }
}

for (const item of array) {
  const time = Number(item);

  // Check if the time is a valid positive number
  if (Number.isInteger(time) && time > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time * 1000);
  }
}

// Add an additional setTimeout after the last character to print the newline character
setTimeout(() => {
  console.log(); // Print a newline
}, maxValue * 1000);