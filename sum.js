/*How would you make this work?
	add(2, 5); // 7
    add(2)(5); // 7
*/

let add = (a, b) =>{
    if (a & b){
        return a+b;
    } else {
        return function (c){
            return a + c;
        }
    }
}

console.log(`add(2,3): ${add(2,3)}`);
console.log(`add(2)(3213): ${add(2)(3213)}`);
