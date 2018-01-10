/*Given a string and a non-empty substring, compute the number of times that substring appears in the string, without the sub strings overlapping.
strCount("catcowcat", "cat") → 2 strCount("catcowcat", "cow") → 1 strCount("catcowcat", "dog") → 0
*/

//iterative
let strCount = (string, substr) => {

    let matchCount = 0;
    for (let i = 0; i < string.length - 1; i++) {
        if (string.charAt(i) === substr.charAt(0)) {
            let matchChar = 0;
            let stringChar = i;
            for (let j = 0; j < substr.length; j++) {
                if (string.charAt(stringChar) === substr.charAt(j)) {
                    matchChar++;
                    stringChar++;

                    if (matchChar === substr.length) {
                        matchCount++;
                        stringChar = 0;
                        matchChar = 0;
                        break;
                    }
                } else {
                    matchChar = 0;
                    stringChar=0;
                    break;
                }
            }
        } else {
            continue;
        }
    }

    return matchCount === 0 ? "No match found" : matchCount;
}

//really short way of doing it using split
shortStrCount = (str, subStr) => str.split(subStr).length - 1;

console.log(`# of times substring is in there:" ${strCount("catmoocatcatca","cat")}`);
console.log(`# of times substring is in there (easy way):" ${shortStrCount("catmoocatcatca","cat")}`);

