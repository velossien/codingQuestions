//selection sort
let selectionSort = (nums) => {

    for (let i = 0; i < nums.length; i++) {

        let lowestNum = nums[i];
        let lowestNumIndex = i;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < lowestNum) {
                lowestNum = nums[j];
                lowestNumIndex = j;
            }
        }

        if (lowestNum != nums[i]) {
            nums[lowestNumIndex] = nums[i];
            nums[i] = lowestNum;
        }
    }

    return nums;
}

//a stable selection sort
let stableSelectionSort = (nums) => {

    for (let i = 0; i < nums.length; i++) {
        let lowestNum = nums[i].val;
        let lowestNumIndex = i;
        for (let j = i + 1; j < nums.length; j++) {

            if (nums[j].val < lowestNum) {
                lowestNum = nums[j].val;
                lowestNumIndex = j;
            }
        }

        if (lowestNum != nums[i].val) {
            //splice(position to add things, how many to delete, what to add)
            nums.splice(i, 0, nums[lowestNumIndex]);
            nums.splice((lowestNumIndex + 1), 1);
        }
    }
    return nums;
}

//An insertion sort
let insertionSort = (nums) => {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            for (let j = i - 1; j >= 0; j--) {
                if (nums[j + 1] < nums[j]) {
                    swap(nums, i, j);
                }
                else { break }
            }
        }
    }

    return nums;
}

/******* A few useful functions for above functions *******/
//a swapping function
function swap(nums, i, j) {
    let tmpVal = nums[i];
    nums[i] = nums[j];
    nums[j] = tmpVal;
}

//a random pivot for a sorting method
let randomPivot = (nums) => {
    return Math.floor(Math.random() * Math.floor(nums.length));
}


let sortMe = [2, 1, 4, 6, 9, 8, 3];
let sortMeObj = [
    {
        val: 2,
        val2: "yay1"
    },
    {
        val: 1,
        val2: "yay"
    },
    {
        val: 2,
        val2: "yay2"
    },
    {
        val: 4,
        val2: "yay"
    },
    {
        val: 6,
        val2: "yay"
    },
    {
        val: 9,
        val2: "yay"
    },
    {
        val: 8,
        val2: "yay"
    },
    {
        val: 3,
        val2: "yay"
    },
]

console.log(`selection sort: ${selectionSort(sortMe)}`);
console.log("");
console.log("stable selection sort with obj:");
console.log(stableSelectionSort(sortMeObj));
console.log("");
console.log(`insertion sort: ${insertionSort(sortMe)}`);
console.log("");
console.log("insertion sort with objects:");
console.log(insertionSort(sortMeObj));