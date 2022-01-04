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
