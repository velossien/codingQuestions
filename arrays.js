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

    if (k > nums.length) {
        k = k - nums.length;
    }

    for (let i = nums.length - k; i < nums.length; i++) {
        rotateNums.push(nums[i]);
    }

    for (let j = 0; j < nums.length - k; j++) {
        rotateNums.push(nums[j]);
    }

    return rotateNums;
};

//in place
let rotateInPlace = (nums, k) => {
    if (k > nums.length) {
        k = k - nums.length;
    }

    let swaps;
    for (let i = nums.length - k; i < nums.length; i++) {
        swaps = 0;

        for (let j = (i - 1); j >= 0; j--) {
            if (swaps >= nums.length - k) { break };

            swap(nums, j, j + 1);
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

let rotArray = [1, 2, 3];
console.log(`Rotate Array (not in place): ${rotate(rotArray, 3)}`)
console.log(`Rotate Array (almost in place): ${rotateInPlace(rotArray, 3)}`)