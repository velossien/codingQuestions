/* Reverse a string. The recursive function call should return the reversed result of the passed in string. 
E.g. reverseStr("cowbell") --> "llebwoc" */

let reverseStr = (str) => {
    //base case
    if (str.length <= 1) { return str };

    return reverseStr(str.substr(1)) + str.charAt(0);
}

console.log(`Reverse String (recursive): ${reverseStr("tara")}`); //arat

/**********************************/
/*Fibonacci number. Get the nth Fibonacci number as the return value. E.g.
fibonacci(5) --> 5
fibonacci(10) --> 55
fibonacci(15) --> 610

1 1 2 3 5 8 13 21 34 55

xn = xn-1 + xn-2
*/

let fibonnaci = (num) => {
    //base case - if num is 0 return 0, if its 2 or 1 -return 1, if it's anyhting else below 2 - error.
    if (num < 2) {
        return num
    }

    return (fibonnaci(num - 1) + fibonnaci(num - 2));
}

console.log(`Fibonnaci number (recursive): ${fibonnaci(7)}`);

/**********************************/
//factorial 4! = 4*3*2*1  0! = 1
let fact = (num) => {

    if (num <= 0) { return 1 }
    else {
        let result = fact(num - 1)
        return result * num;
    }
}

console.log(`Factorial # (recursive): ${fact(3)}`);

/**********************************/
/* Count the number of reoccurring instances of a digit in a number (E.g. 79092342 has two 9s). 
For bonus points, create a generator function using closures to create a recursive function using the value passed.
E.g. Function can generate instances such as count7, count8 which counts for the digits 7 and 8 respectively.
*/

let reoccurNum = (number, digit) => {
    let digitCount = 0;

    //turn number into a string
    let stringNum = number.toString();
    let stringDigit = digit.toString();

    let recurDigitCt = (stringNum, stringDigit) => {
        //base case
        if (stringNum.length <= 0) { return };

        let currentChar = stringNum.charAt(0);
        if (currentChar === stringDigit) { digitCount++ }

        let result = recurDigitCt(stringNum.substr(1, stringNum.length), stringDigit);
    }

    recurDigitCt(stringNum, stringDigit);
    return digitCount;
}

//iterative
let itReoccurNum = (number, digit) => {
    let stringNum = number.toString();
    let stringDigit = digit.toString();
    let charCount = 0;

    for (let i = 0; i < stringNum.length; i++) {
        if (stringNum.charAt(i) == stringDigit) { charCount++; }
    }

    return charCount;
}

console.log(`Reoccurring # (recursive): ${reoccurNum(3949249249444, 4)}`);
console.log(`Reoccurring # (iterative): ${reoccurNum(3949249249444, 4)}`);


/**********************************/
/* Using recursion, go through a string and remove characters that occur more than once. E.g. passing in "Troll" should return "trol". Passing in "abracadabra" should return "abrcd" */

//recursion
let recRmvChar = (word) => {
    let charMap = {};
    let final = [];

    let recurringLet = (word) => {
        //base case
        if (word.length == 0) { return }

        let currChar = word.charAt(0);

        if (!charMap[currChar]) {
            charMap[currChar] = true;
            final.push(currChar);
        }


        recurringLet(word.substr(1, word.length));

    }
    recurringLet(word);

    return final.toString();
}


//iteration
let rmvChar = (word) => {
    let charMap = {};
    let final = [];

    for (let i = 0; i < word.length; i++) {
        let currChar = word.charAt(i);

        //if the current character hasn't been see before add it to result
        if (!charMap[currChar]) {
            charMap[currChar] = true;
            final.push(currChar);
        }
    }
    return final.toString();
}

console.log(`Remove duplicate characters (recursive): ${recRmvChar("ttarbaaddf")}`);
console.log(`Remove duplicate characters (iterative): ${recRmvChar("ttarbaaddf")}`);