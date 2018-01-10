//Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5

let fizzbuzz = () => {
    for (let i = 0; i <= 100; i++) {

        let output = "";

        if (i % 3 === 0) {
            output = "fizz";
        }

        if (i % 5 === 0) {
            output += "buzz";
        }

        (output) ? console.log(output) : console.log(i);
    }
}

fizzbuzz();