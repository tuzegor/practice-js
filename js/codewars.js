// TASK:
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// function isIsogram(str) {
//   if (str.isEmpty) {
//     return true;
//   } else {
//     // All lower case.
//     str = str.toLowerCase();
//   }
//   const arrayLowerStr = str.split('');

//   const sortedArr = arrayLowerStr.slice().sort();

//   for (let i = 0; i < arrayLowerStr.length; i++) {
//     //if duplicate is found return false.
//     if (sortedArr[i + 1] == sortedArr[i]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isIsogram('isIsogram'));
// console.log(isIsogram('fdsggdgdd'));
// console.log(isIsogram('Isogram'));

// TASK:
// Simple, remove the spaces from the string, then return the resultant string.

// function noSpace(x) {
//   return x.split(' ').join('');
// }

// noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'); //'8j8mBliB8gimjB8B8jlB';
// noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'); //'88Bifk8hB8BB8BBBB888chl8BhBfd';
// noSpace('8aaaaa dddd r     '); //'8aaaaaddddr';

// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// function oddOrEven(array) {
//   const sum = array.reduce((acc, el) => acc + el, 0);

//   return sum % 2 === 0 ? 'even' : 'odd';
// }
// console.log(oddOrEven([0, 2, 4, 3]));

// Task:
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

// function invert(array) {
//   console.log(array);
//   return array.map(elem => {
//     const absEl = Math.abs(elem);
//     return elem < 0 ? +absEl : -absEl;
//   });
// }
// альтернативный вариант
// function invert(array) {
//   return array.map(x => (x === 0 ? x : -x));
// }

// console.log(invert([1, -2, 3, -3, 4, -5, 0]));
// console.log(invert([]));
