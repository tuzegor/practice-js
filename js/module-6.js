//TASK 43, 44 ==================================

const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
    isActive: true,
    balance: 3951,
    gender: 'male',
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'],
    isActive: false,
    balance: 1498,
    gender: 'male',
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
  },
];

//TASK 43 ==================================
// Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив уникальных имён друзей (свойство friends) отсортированный по алфавиту

// 1. делаем масив друзей 2. без повторов 3. сортировка
// const getSortedFriends = users => {

//     return users.flatMap(user => user.friends).filter((friend, index, array) => array.indexOf(friend) === index).sort((a, b) => a.localeCompare(b));
// };

// console.log(getSortedFriends(users));

//TASK 44 ==================================
// Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она возвращала общий баланс пользователей (свойство balance), пол которых (свойство gender) совпадает со значением параметра gender.

// const getTotalBalanceByGender = (users, gender) => {

//     return [...users].filter(user => user.gender === gender).reduce((acc, user) => {

//        return acc += user.balance;
//     }, 0)
// };

// console.log(getTotalBalanceByGender(users, 'female'));

// const a = [1, 1, 1, 3, 3, 5, 4, 4, 6, 6, 8, 9, 9,]
// // console.log([...new Set([...a])]);
// console.log(a.filter(y => {
//   let x = a.filter(h => h === y);
//   return x.length === 1;
// }));

// ==================================================

// * Напиши скрипт который просит посетителя ввести число в prompt до тех пор, пока посетитель на нажмет Cancel и каждый раз добавляет введенное значение к общей сумме.
//  * При загрузке страницы пользователю предлагается в prompt ввести число. Ввод добавляется к значению переменной total.
//  * Операция ввода числа продолжается до тех пор, пока пользователь не нажмет кнопку Cancel в prompt.
//  * После того как пользователь прекратил ввод нажав кнопку Cancel, показать alert со строкой 'Общая сумма чисел равна [сумма]'.
//  * Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не обязательно, но рекомендую. Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt плюсовать к общей сумме не нужно, после чего снова пользователю предлагается ввести число в prompt.

// let total = 0;

// while (true) {
//   let num = prompt('Введите число');

//   if (num !== null && !isNaN(num)) {
//     total += Number(num);
//     console.log(total);
//   } else {
//     alert(`Total:${total}`);
//     break;
//   }
// }
