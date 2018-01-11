//return first non-repeating char - O notation = O(2n) so O(n)
const firstNonRepeat = (string) => {
    let charCount = {};

    if (!string) {
        return "No string input.";
    }

    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    for (let j = 0; j < string.length; j++) {
        let charChecking = string[j];
        if (charCount[charChecking] == 1) {
            return string.charAt(j);
        }
    }

    return "No non-repeating characters."
}

console.log(`Returns first non-repeating character: ${firstNonRepeat("ararta")}`);

/***********************************/
//removes all characters in a specified string from another string 
//O(n*m) - likely O(n) because m<n
const removeChars = (string, remove) => {
    let newString = "";

    for (let i = 0; i < string.length; i++) {
        let deleteMe = false;

        for (let j = 0; j < remove.length; j++) {
            if (remove.charAt(j).toLowerCase() == string.charAt(i).toLowerCase()) {
                deleteMe = true;
            }
        }
        if (!deleteMe) {
            newString = newString.concat(string[i]);
        };
    }

    return newString;
}

console.log(`Removes all characters in a specified string from another string: ${removeChars("yaywowdogewow", "wow")}`);

//more efficient way O(n) This uses a hash table!
const otherRemoveChars = (input, remove) => {
    let r = {};
    let newString = '';

    //r[c] is creating a property c (which is the characters of remove) that holds a boolean.
    remove.split('').forEach(c => r[c] = true);
    //now when you go through input you'll be able to check quickly if r has a property of that character that has a boolean. If it does, then you don't copy it.
    input.split('').forEach((c) => {
        if (typeof r[c] === 'undefined') {
            newString += c;
        }
    });

    return newString;
}

console.log(`Removes all characters in a specified string from another string (more efficient): ${otherRemoveChars("yaywowdogewow", "wow")}`);


//chris' soooooper efficient way
const otherRemoveChars2 = (input, remove) => {
    let r = {};

    remove.split('').forEach(c => r[c] = true);
    return input.split('')
        .filter(c => typeof r[c] === 'undefined')
        .reduce((t, c) => {
            return t += c
        }, '');
}

console.log(`Removes all characters in a specified string from another string (Chris' way): ${otherRemoveChars2("yaywowdogewow", "wow")}`);

/***********************************/
//reverse the words!
const reverseEasy = (string) => {

    let stringArr = string.split(" ");

    let reverseStr = stringArr.reverse().join(" ");
    return reverseStr;
}

console.log(`Reverse dem words (easy way): ${reverseEasy("i am ameiiizing")}`)

const reverseHard = (string) => {
    let reverseArr = [];
    let wordLength = 0;

    for (let i = string.length; i >= 0; --i) {
        if (string[i] == " ") {
            reverseArr.push(string.substr(i + 1, wordLength));
            wordLength = 0;
        } else if (i == 0) {
            reverseArr.push(string.substr(i, wordLength + 1));
        } else {
            wordLength++;
        }
    }
    return reverseArr.join(" ");
}

console.log(`Reverse dem words (harder way): ${reverseHard("i am ameiiizing")}`)

/***********************************/
//turn a string of numbers to an int
const stringToInt = (string) => {
    let newInt = 0;
    let digitCount = 0;
    let numberIsNeg = false;

    let i = 0;

    if (string.charAt(i) == "-") {
        numberIsNeg = true;
        i = 1;
    }

    //- "0" is suppose to make the string a number, but in javascript it isn't really necessary
    for (i; i < string.length; i++) {
        let numberInt = (string.charAt(i) - "0") * Math.pow(10, (string.length - i - 1));
        newInt = newInt + numberInt;
    }

    if (numberIsNeg) {
        newInt *= -1;
    }

    return newInt;
}
console.log(`String to int: ${typeof stringToInt("1234")}`)

/***********************************/
//turn an int to a string of numbers

const intToString = (int) => {
    let newStr = "";
    let digitCount = 0;
    let numberIsNeg = false;
    let temp = [];

    let i = 0;
    if (int < 0) {
        numberIsNeg = true;
        int *= -1;
    }

    if (int == 0) {
        return "0";
    }

    while (int != 0) {
        temp[i] = (Math.floor(int % 10));
        int = (Math.floor(int / 10));
        i++
    }

    for (i; i > 0; i--) {
        newStr += temp[i - 1];
    }

    if (numberIsNeg) {
        newStr = "-" + newStr;
    }

    return newStr;
}
console.log(`Int to String: ${typeof intToString("1234")}`)

/***********************************/
// Make a function that duplicates an array:

//One Way:
let duplicate = (nums) => {
    nums.forEach((value) => {
        nums.push(value);
    })

    return nums;
}

console.log(duplicate([1, 2, 3, 4, 5])); // [1,2,3,4,5,1,2,3,4,5]

//Second way:
let duplicate2 = (arr) => {
    return arr.concat(arr);
};

console.log(duplicate2([1, 2, 3, 4, 5])); // [1,2,3,4,5,1,2,3,4,5]

/***********************************/
//Given a sorted array, remove the duplicates in-place such that each element appear only once and return the new length.

let removeDuplicates = (nums) => {
    if (nums.length == 0) { return 0 };
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            nums.splice((i - 1), 1);
            i--;
        };
    };

    return nums.length;
};

let nums = [1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 4, 4, 4, 4, 4, 4];
console.log(`Remove Duplicates and show length: ${removeDuplicates(nums)}`);

/***********************************/
//Rotate an array of n elements to the right by k steps

//Not in place
let rotate = (nums, k) => {
    let rotateNums = [];
    for (let i = k; i < nums.length; i++) {
        rotateNums.push(nums[i]);
    }

    for (let j = 0; j < k; j++) {
        rotateNums.push(nums[j]);
    }

    return rotateNums;
};

//in place
let rotateInPlace = (nums, k) => {
    for (let i = k; i < nums.length; i++) {
        let swaps = 0;

        for (let j = (i - 1); j >= 0; j--) {
            if (swaps >= k) { break };

            swap(nums, j + 1, j);
            swaps++;
        }
    }
    return nums;
}

let swap = (nums, i, j) => {
    let tmpVal = nums[i];
    nums[i] = nums[j];
    nums[j] = tmpVal;
}

let rotArray = [1, 2, 3, 4, 5,6];
console.log(`Rotate Array (not in place): ${rotate(rotArray, 2)}`)
console.log(`Rotate Array (almost in place): ${rotateInPlace(rotArray, 2)}`)
