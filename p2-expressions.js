/*
    CIT 281 Project 2
    Name: Anthony Hudson
*/

// Returns a random number between min (inclusive) and max (exclusive)


function makeRandomString(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let result = "";

    for (let i = 0; i < getRandomInteger(5, 26); i++) {
        result += alphabet[getRandomInteger(1,alphabet.length-1)];
}

console.log(result);
}

// Returns a random number between min (inclusive) and max (exclusive)
const getRandomInteger = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Will return a single, random, lowercase letter
const getRandomLetter = function() { 
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

    return alphabet[getRandomInteger(1, alphabet.length-1)];

}


//  Returns a random length string using getRandomLetter()
const getRandomString = function(minLength, maxLength) { {
    let result = "";

    for (let i = 0; i < getRandomInteger(minLength, maxLength); i++){
        result += getRandomLetter()
    }
    console.log(result)
}}

// console.log(getRandomString(10, 20))

// Will return a string in ascending order
const getSortedString = function(string) {return string.split("").sort().toString().replace(/,/g, "");  }


// let getSortedString = (string) =>  string.split("").sort().toString().replace(/,/g, ""); 
