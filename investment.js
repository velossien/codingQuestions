/* 
Write a recursive method that takes as parameters an initial investment amount, an annual interest rate, and a number of years. The method should return the value of the investment after the given number of years, assuming that the interest is compounded annually. (For example, if the initial investment is 1000 and the interest rate is 10 percent, then after one year the investment will be worth 1100, after two years 1210, after three years 1331, etc.)
http://www.cs.wustl.edu/~kjg/cse131/modules/recursion/lab.html

https://github.com/WomenWhoCodeNYC/Algorithms/blob/master/challenges/investment/investment.md
*/


//assumes inputs are ints and the interest is given as a integer percentage (e.g. 10, 39)

let invest = (value, interest, yrs) => {

    if (yrs <= 0) {
        return value;
    }

    value += (value * (interest / 100));
    yrs--;

    return invest(value, interest, yrs);
}

console.log(invest(1000, 10, 2)); 
