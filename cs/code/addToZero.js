// Work through the following problems in Javascript (you have seen these problems before). Create a new file for your code. When you have finished with each function, leave a code comment with what you believe the runtime of your code to be.
//Assessment includes
//1. addToZero funtion


//2.What does it is supposed to do?
//Answer : this function takes an array of number. Use nested for loop to compare the current element with next element in inner for loop if their sum equal to zero then return true if else return false. The time complexity o(n^2) because the outer for loop will run n times and for each iteration, the inner for loop will also run for n times.
const perf = require('execution-time')();
function addToZero(arr) {
   for (let i = 0; i < arr.length - 1; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] + arr[j] === 0) {
                    return true;
                }
            }
        }
        return false
    }

perf.start();
addToZero([]);
let result1 = perf.stop();


perf.start();
addToZero([1]);
let result2 = perf.stop();

perf.start();
addToZero([1, 2, 3]);
let result3 = perf.stop();

perf.start();
addToZero([1, 2, 3,-2]);
let result4 = perf.stop();

//3.Has the correct runtime noted
console.log(result1.preciseWords)//runtime 39.625 µs
console.log(addToZero([]))
console.log(result2.preciseWords)//runtime 2.1125 µs
console.log(addToZero([1]))
console.log(result3.preciseWords)// runtime 1.791 µs
console.log(addToZero([1, 2, 3]))
console.log(result4.preciseWords)// runtime 1.583 µs
console.log(addToZero([1, 2, 3, -2]))