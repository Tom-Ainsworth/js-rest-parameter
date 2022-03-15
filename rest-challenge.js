let mixedLetters = ['b', 'd', 'a', 'c', 'f', 'e'];

let moreMixedLetters = [...mixedLetters, 'h', 'k', 'g', 'j', 'i', 'l'];
console.log(moreMixedLetters);

// First attempt that passed
const updateSortReverse = (arr, ...letters) => {
    let finalArray = [...arr, ...letters]
    finalArray.sort()
    finalArray.reverse()
    return finalArray
}

let reverseSort = updateSortReverse(moreMixedLetters, 'n', 'm', 'o')
console.log(reverseSort)
console.log(mixedLetters)

// This does the job, but doesn't fully utilise the arrow function. Here is the model solution:

// const updateSortReverse = (arr, ...letters) => [...arr, ...letters].sort().reverse()

// By properly using the arrow function, I can save several lines of code, and disregard the 
// new variable finalArray, as everything that needs to be done for this can be done within the
// function.