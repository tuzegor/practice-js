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
const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 15;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < threshold) {
    continue;
  }

//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
}

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

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let total = 0;

for (let i = 0; i < matrix.length; i += 1) {
//   console.log('Подмассив матрицы matrix[i]: ', matrix[i]);

  for (let j = 0; j < matrix[i].length; j += 1) {
    // console.log('Элемент подмассива матрицы matrix[i][j]: ', matrix[i][j]);
    total += matrix[i][j];
  }
}

const a = ['Mango'];
// Присвоение по ссылке.
// Так как a это массив, в b записывается ссылка на уже существующий
// массив в памяти. Теперь a и b указывают на один и тот же массив.
const b = a;
// console.log(a); // ['Mango']
// console.log(b); // ['Mango']

// Изменим массив, добавив еще один элемент, используя указатель из a
a.push('Poly');
// console.log(a); // ['Mango', 'Poly']

// b изменилось тоже, потому что b, как и a,
// просто содержат ссылку на одно и то же место в памяти
// console.log(b); // ['Mango', 'Poly']

// Результат повторяется
b.push('Ajax');
// console.log(a); // ['Mango', 'Poly', 'Ajax']
// console.log(b); // ['Mango', 'Poly', 'Ajax']


const oldClients = ['Mango', 'Ajax', 'Poly', 'Alex'];
// const lastOldClients = oldClients.length - 1;

for (let i = 0; i < oldClients.length; i += 1) {
    // console.log(oldClients[i])
    oldClients[i] += '-1'
    
}
// console.table(oldClients)

/*for (let oldClient of oldClients) {
    
    oldClient += '-1';
    console.log(oldClient)
}*/
    


// const meet = 'Hello World!';

// for (let i = 0; i < meet.length; i += 1){

//     console.log(meet[i]);
// }


const count = [20, 30 ,23, 43, 50, 21, 19, 36, 40, 43, 24];
// let minNum = count[0];

// for (let num of count) {
//   // console.log(num);
//   if (num < minNum) {
//     minNum = num;
//   }
// }
// console.log(minNam);

for (let counter of count) {
  if (counter % 2 === 0) {
    // console.log('четные', counter);
  }
}


const add = function (items) {

  let total = 0;
  for (const item of items) {
    total += item;
  }

  return total;
}

// console.log(add([4, 5, 3, 6, 9, 10]));


// next
const passwords = ["mangohackzor", "polyhax", "jqueryismyjam"];

const checkPassword = function (allPassword, passwordToFind) {

  return allPassword.includes(passwordToFind)
    ? `${passwordToFind} - Найден`
    : `${passwordToFind} - Не найден`;

}

// console.log(checkPassword(passwords, "fskjah"));
// console.log(checkPassword(passwords, "fskjah"));
// console.log(checkPassword(passwords, "polyhax"));


//Интересно 

const filterNumbers = function (array, ...args) {
  // console.log(array);
  // console.log(args);
  const uniqueElements = [];

  for (const element of array) {
    
    if (args.includes(element)) {
      uniqueElements.push(element);
      // console.log(element);
    }
  }
  return uniqueElements;
}
console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15));

