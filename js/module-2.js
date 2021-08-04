const clients = ['Mango', 'Ajax', 'Poly'];

for (let i = 0; i < clients.length; i += 1) {
//   console.log('Logging clients: ', clients[i]);
}


// Итерация по массиву

for (const client of clients) {
//   console.log(client);
}

// Итерация по строке
const string = 'javascript';

for (const character of string) {
//   console.log(character);
}

/*
 * Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
 * и управление передаётся на следующую итерацию.
 */
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// Многомерные масивы
/*const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[0][0]); // 1
console.log(matrix[1][2]); // 6
console.log(matrix[2][2]); // 9
*/

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let total = 0;

// for (let i = 0; i < matrix.length; i += 1) {
// //   console.log('Подмассив матрицы matrix[i]: ', matrix[i]);

//   for (let j = 0; j < matrix[i].length; j += 1) {
//     // console.log('Элемент подмассива матрицы matrix[i][j]: ', matrix[i][j]);
//     total += matrix[i][j];
//   }
// }

// const a = ['Mango'];
// Присвоение по ссылке.
// Так как a это массив, в b записывается ссылка на уже существующий
// массив в памяти. Теперь a и b указывают на один и тот же массив.
// const b = a;
// console.log(a); // ['Mango']
// console.log(b); // ['Mango']

// Изменим массив, добавив еще один элемент, используя указатель из a
// a.push('Poly');
// console.log(a); // ['Mango', 'Poly']

// b изменилось тоже, потому что b, как и a,
// просто содержат ссылку на одно и то же место в памяти
// console.log(b); // ['Mango', 'Poly']

// Результат повторяется
// b.push('Ajax');
// console.log(a); // ['Mango', 'Poly', 'Ajax']
// console.log(b); // ['Mango', 'Poly', 'Ajax']


// const oldClients = ['Mango', 'Ajax', 'Poly', 'Alex'];
// const lastOldClients = oldClients.length - 1;

// for (let i = 0; i < oldClients.length; i += 1) {
    // console.log(oldClients[i])
    // oldClients[i] += '-1'
    
// }
// console.table(oldClients)

/*for (let oldClient of oldClients) {
    
    oldClient += '-1';
    console.log(oldClient)
}*/
    


// const meet = 'Hello World!';

// for (let i = 0; i < meet.length; i += 1){

//     console.log(meet[i]);
// }


// const count = [20, 30 ,23, 43, 50, 21, 19, 36, 40, 43, 24];
// let minNum = count[0];

// for (let num of count) {
//   // console.log(num);
//   if (num < minNum) {
//     minNum = num;
//   }
// }
// console.log(minNam);

// for (let counter of count) {
//   if (counter % 2 === 0) {
    // console.log('четные', counter);
  // }
// }


// const add = function (items) {

//   let total = 0;
//   for (const item of items) {
//     total += item;
//   }

//   return total;
// }

// console.log(add([4, 5, 3, 6, 9, 10]));


// NEXT
// const passwords = ["mangohackzor", "polyhax", "jqueryismyjam"];

// const checkPassword = function (allPassword, passwordToFind) {

  // return allPassword.includes(passwordToFind)
    // ? `${passwordToFind} - Найден`
    // : `${passwordToFind} - Не найден`;

// }

// console.log(checkPassword(passwords, "fskjah"));
// console.log(checkPassword(passwords, "fskjah"));
// console.log(checkPassword(passwords, "polyhax"));


//Интересно 

// const filterNumbers = function (array, ...args) {
//   // console.log(array);
//   // console.log(args);
//   const uniqueElements = [];

//   for (const element of array) {
    
//     if (args.includes(element)) {
//       uniqueElements.push(element);
//       // console.log(element);
//     }
//   }
//   return uniqueElements;
// }
// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
// console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15));


//ЗАДАЧИ


// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";

//  if (password === ADMIN_PASSWORD){
//     return "Welcome!"
//   }
//   return "Access denied, wrong password!";
// }
  
// console.log( checkPassword("mangohackzor")); 
// console.log( checkPassword("polyhax")); 
// console.log( checkPassword("jqueryismyjam"));

//NEXT

//Функция checkStorage проверяет возможность оформления заказа и возвращает сообщение о результате. Она принимает два параметра, значения которых будут задаваться во время её вызова.
// available - доступное количество товаров на складе
// ordered - количество единиц товара в заказе
// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат».

//  function checkStorage(available, ordered) {
   
//   if (ordered === 0) {
//     return "Your order is empty!";
//   }

//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }

//   return "The order is accepted, our manager will contact you";
// }

// console.log(checkStorage(100, 50)); 
// console.log(checkStorage(100, 130)); 
// console.log(checkStorage(70, 0)); 
// console.log(checkStorage(200, 20)); 
// console.log(checkStorage(200, 250));  
// console.log(checkStorage(150, 0));  

//NEXT

// const fruits = ["apple", "plum", "pear", "orange"];

// const firstElement = fruits[0] 
// const secondElement = fruits[1]
// const lastElement = fruits[fruits.length-1]

//NEXT

// const fruits = ["apple", "peach", "pear", "banana"];

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];
// console.log(lastElementIndex);
// console.log(lastElement);

//NEXT

// Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины.Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.

// function getExtremeElements(array) {
//   return [array[0], array[array.length - 1]];
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5])) 
// console.log(getExtremeElements(["Earth", "Mars", "Venus"])) 
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"])) 

//NEXT

// Дополни код функции splitMessage(message, delimeter) так, чтобы она возвращала в переменной words результат разделения строки message по разделителю delimeter - массив строк.

// function splitMessage(message, delimeter) {
//   let words;
//   words = message.split(delimeter)
//   return words;
// }
// console.log(splitMessage("Mango hurries to the train", " ")); 
// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));

//NEXT

// Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.
// Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку, состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord).
// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.

// function calculateEngravingPrice(message, pricePerWord) {
  // return message.split(" ").length * pricePerWord;
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));

//NEXT

// Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.
// Значением параметра title будут строки, слова которых разделены только пробелами
// Все символы slug должны быть в нижнем регистре
// Все слова slug должна быть разделены тире

// function slugify(title) {

//   const slug = title.toLowerCase().split(" ").join("-");

//   return slug
// }
// console.log(slugify("Arrays for begginers"));

//NEXT

// Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const noNEXTremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(-3);
// console.log(noNEXTremeEls);
// console.log(lastThreeEls);

//NEXT

// Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.
// Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов. В противном случае функция должна вернуть новый массив целиком.

// function makeArray(firstArray, secondArray, maxLength) {
//   return firstArray.concat(secondArray).slice (0, maxLength)
  
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)) 
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4))
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)) 
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)) 
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)) 
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)) 

// Вызов функции makeArray() со случайными массивами и случайным числом возвращает правильный массив

//NEXT

// Напиши функцию calculateTotal(number), которая принимает целое число (параметр number) и возвращает сумму всех целых чисел от единицы и до этого числа. Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.

//Счетчик суммы до нужного числа
// function calculateTotal(number) {
//   let total = 0;
//   for (let i = 0; i <= number; i += 1){
//     total += i
//   }
//   return total
// }

// console.log(calculateTotal(1)); //1
// console.log(calculateTotal(3)); //6
// console.log(calculateTotal(7)); //28
// console.log(calculateTotal(18)); //171
// console.log(calculateTotal(24)); //300

//NEXT

// Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов.Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.

// function calculateTotalPrice(order) {
//   let total = 0;

//   for (let i = 0; i < order.length; i += 1){
//     total += order[i];
    
//   }

//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138


//NEXT
 

// Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

// function findLongestWord(string) {
//   const globalArray = string.split(" ")
//   let longWord = " ";

//   for (let i = 0; i < globalArray.length; i += 1){
//     for (let j = 0; j < globalArray[i].length; j += 1) {
//       if (globalArray[i].length > longWord.length) {
//         longWord = globalArray[i]; 
//       } else {
//         continue
//      }
//     }
//   }
//   return longWord 
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // jumped
// console.log(findLongestWord("Google do a roll")); // Google
// console.log(findLongestWord("May the force be with you")); // force


//NEXT 


// Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых чисел от значения min до max.

// function createArrayOfNumbers(min, max) {
//   const numbers = [min];
// for (let i = min; i < max; i += 1) {
//   numbers.push(min+=1)
  
// }
//   return numbers;
// }
// console.log(createArrayOfNumbers(29, 34));


//NEXT


// Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).

// function filterArray(numbers, value) {
//  let newNambers = []
//   for (let i = 0; i < numbers.length; i += 1) {
    
//     if (numbers[i] > value) {
//       newNambers.push(numbers[i])
//     } 
    
//   }
// return newNambers
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));



//NEXT


// Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.
// Дополни код функции так, что если:
// фрукт есть в массиве, то функция возвращает true;
// фрукта нет в массиве, то функция возвращает false.

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   for (let i = 0; i < fruits.length; i += 1) {
  
//   return fruits.includes(fruit)
//   } 
// }

// console.log(checkFruit("pear"));
// console.log(checkFruit("Pear"));
// console.log(checkFruit("apple"));


//NEXT 


// Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.
// Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они присутствуют в обоих исходных массивах. А числа 0, 1 и 8 присутствуют только в одном из массивов.
// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.

// function getCommonElements(array1, array2) {
//   let newArray = [];
// for (let i = 0; i < array1.length; i +=1 ) {
//   const element = array1[i];
//   if (array2.includes(element)) {
//     newArray.push(element);
//   } else {
//     continue;
//   }
// }
//   return newArray;
// }

// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // [12, 27, 3];



//NEXT 


// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка (10 % 2 === 0).

// function getEvenNumbers(start, end) {
//   let newArray = [];

//   for (let i = start; i <= end; i += 1) {
//     const element = i;
//     // console.log(element);
//     if (element % 2 === 0) {
//       newArray.push(element)
//     }
//   }

//   return newArray;
// }
  
// console.log(getEvenNumbers(6, 12)); // [6, 8, 10, 12];


//NEXT


// Сделай так, чтобы в переменную number записывалось первое число от start до end, которое делится на 5 без остатка.

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// console.log(number);


//NEXT


// Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:
// возвращала первое число от start до end, которое делится на divisor без остатка
// не использовала оператор break
// не использовала переменную number

// function findNumber(start, end, divisor) {
  
//  for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
// }

// console.log(findNumber(8, 17, 3));


//NEXT


// Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.
// При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).

// function includes(array, value) {
//   let total;
//   for (let i = 0; i < array.length; i += 1) {
//     // console.log(array[i]);
//     // console.log(value);

//     if (array[i] === value) {
//       total = true;
//       break;
//     } else {
//       total = false;
//     }
    
//   }
//   return total;
// }

// console.log(includes([1, 2, 3, 4, 5], 3)); // true
// console.log(includes([1, 2, 3, 4, 5], 17)); // false
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")); // true
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus")); // false
// console.log(includes(["apple", "plum", "pear", "orange"], "plum")); // true




