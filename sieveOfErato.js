// count the number of prime numbers to the limit n (does not include n)
// will not be given negative numbers
// number given as an int

let countPrimes = (n) => {
  let count = 0, nums=[];

  if (n <= 1) { return 0 };

  for (let i = 2; i < n; i++) {
    if (nums[i] == undefined) { 

      nums[i] = true;
      count++;

      for (let j = 2; j*i < n; j++) {
        nums[i*j] = false;
      };
    };
  };
  return count;
};

console.log(`Number of primes: ${countPrimes(100000000)}`);