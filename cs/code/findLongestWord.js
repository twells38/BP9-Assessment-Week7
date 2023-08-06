//Assessment includes
//1. findLongestWorrds funtion



// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

//2.What does it is supposed to do
//Answer : the scale of this function is o(n) because the time of iterations is varying with the size of array

const perf = require('execution-time')();
function findLongestword(arr) {
    let longestWord = ''
    for (let i = 0; i < arr.length; i++){
        if (arr[i].length > longestWord.length) {
            longestWord = arr[i]
        }
    }
    return longestWord.length
    
}

//3.Has the correct runtime noted
 perf.start();
 findLongestword(["he", "hello"])
 let result1 = perf.stop();

console.log(result1.preciseWords) //runtime : 31.333 µs
console.log(findLongestword(["he", "hello"]))