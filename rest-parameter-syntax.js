/**
 * To run this file in Gitpod, use the 
 * command node rest-parameter-syntax.js in the terminal
 */

// Regular function call 
const sumAll = (a, b, c) => a + b + c;
let sum = sumAll(1, 2, 3);
console.log("Sum:", sum);

// Extra arguments are ignored
let sum2 = sumAll(1, 2, 3, 4, 5, 6);
console.log("Sum2:", sum2);


// Which is why we use rest. Function using ...rest
const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for (let i of rest) {
        sum += i;
    }
    return sum;
};

// Here "...rest" is being used to add any extra parameters entered in. The word
// rest could be anything at all. It just needs to be after the ..."anyWordYouLike"
// The above could also be written as this, if any amount of parameters could be used:
// const sumRest = (...extras) => {
//     let sum = 0;
//     for (let i of extras) {
//         sum += i;
//     }
//     return sum;
// };
// Here, sum is set to 0, but then all of the extras are being iterated through
// then added to sum, making it still result in 21.

let sum3 = sumRest(1,2,3,4,5,6)
console.log("Sum3:", sum3)
