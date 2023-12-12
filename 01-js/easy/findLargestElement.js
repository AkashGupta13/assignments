/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    if(numbers.length == 0)
        return undefined;
    var max = Number.MIN_SAFE_INTEGER;
    for(let key in numbers) {
        // console.log(key);
        max = Math.max(max, numbers[key]);
        // console.log(max);
    }
    return max;
}

module.exports = findLargestElement;