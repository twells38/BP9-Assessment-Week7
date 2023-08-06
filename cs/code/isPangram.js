//2.What does it is supposed to do
//3.Has the correct runtime noted



// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”


const perf = require('execution-time')();

//2.What does it is supposed to do?
//Answer : this function to check a string to see if it is a pangram or not.Its has linear time complexity means that it takes longer time to complete as the in put grows.
function isPangram(str) {
    let aphabet = 'abcdefghijklmnopqqrstuvwxyz'.split('')
    let splitedStr = str.toLowerCase()
    return aphabet.every( x => splitedStr.includes(x))


}
perf.start();
isPangram('"The quick brown fox jumps over the lazy dog!"');
let result1 = perf.stop();

perf.start();
isPangram('"The quick brown fox jumps over the lazy dog!"');
let result2 = perf.stop();

// 3.Has the correct runtime noted
console.log(result1.preciseWords)//runtime: 42.959 µs
console.log(result2.preciseWords)//runtime: 4.33 µs