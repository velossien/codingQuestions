// count the number of prime numbers to the limit n (does not include n)
// will not be given negative numbers
// number given as an int

let countPrimes = (n) => {
    let count=0;  
    let nums = new Array(n);
    nums[0] = true;
    nums[1] = true;
    
    for(let i=2; i<n; i++){
      if(nums[i]!=true){count++};
      
      let num = 0;
      for(let j = 2; num<n; j++){
        num = i * j;
        nums[num] = true;
      }
    }
    
    return count;
  };

  console.log(`Number of primes: ${countPrimes(10000000)}`);