//Assessment includes
//1. uniqueCharacter funtion



// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.


const perf = require('execution-time')();
//2.What does it is supposed to do
//Answer : This function supposed to excecute n time for each operation. It has linear time complexity. 

function hasUniqueChars(str) {
    str = str.toLowerCase()
    let uniqueWord=[];
    for (let char of str) {
        if (uniqueWord.includes(char)){
                return false;
        }else{
            uniqueWord.push(char);
        }
    }return true;
}

perf.start();
hasUniqueChars("Monday");
let result1 = perf.stop();
perf.start();
hasUniqueChars("Moonday");
let result2 = perf.stop();


//3.Has the correct runtime noted
console.log(result1.preciseWords)//runtime 61.292 µs
console.log(hasUniqueChars("Monday"))
console.log(result2.preciseWords)//runtime 4.042 µs
console.log(hasUniqueChars("Moonday"))