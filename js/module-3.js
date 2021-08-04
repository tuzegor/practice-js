// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// console.log(hotel.name); // Resort Hotel
// console.log(hotel['name']); // Resort Hotel

// hotel.name = 'Coastline Resort';
// console.log(hotel.name); // Coastline Resort
// console.log(hotel['name']); // Coastline Resort

// hotel['name'] = 'Stardust Hotel';
// console.log(hotel.name); // Stardust Hotel
// console.log(hotel['name']); // Stardust Hotel


// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// hotel.address = '1, Beach ave.';
// hotel['manager'] = 'Chuck Norris';

// console.log(hotel.address); // 1, Beach ave.
// console.log(hotel.manager); // Chuck Norris
// console.log(hotel);


//NEXT


// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];
// // Change code above this line

// console.log(apartment); 


//NEXT


// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// for (const key in apartment) {
//     keys.push(key)
// values.push(apartment[key])

// }
// console.log(keys);
// console.log(values);


//NEXT


// Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object. Используй переменную propCount для хранения количества свойств объекта.
// function countProps(object) {
//   let propCount = 0;
//  // Change code below this line
// for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//         propCount += 1;
        
//     }
// }
//   // Change code above this line
//   return propCount;
// }


// console.log(countProps({})); // 0
// console.log(countProps({ name: "Mango", age: 2 })); // 2
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3


//NEXT


// Перебери объект apartment используя метод Object.keys() и цикл for...of. Запиши в переменную keys массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = Object.keys(apartment);
// const values = [];

// for (const key of keys) {
 
//   values.push(apartment[key])
// }

// console.log(values);


//NEXT 14


// Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, цикл for...of.
// function countProps(object) {
//   let propCount = 0;
// const keys = Object.keys(object)
//   for (const key of keys) {
//       propCount += 1;
//   }

//   return propCount;
// }

// console.log(countProps({})); // 0
// console.log(countProps({ name: "Mango", age: 2 })); // 2
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3


//NEXT 16


// Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника, а значение свойства это зарплата. Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. Используй переменную totalSalary для хранения общей суммы зарплаты.
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//     const values = Object.values(salaries)
//     for (const value of values) {
//         totalSalary += value;
//     }
//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); // 330
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); // 400


//NEXT 17


// Перебери массив объектов colors используя цикл for...of. Добавь в массив hexColors значения свойств hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors.

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//     hexColors.push(color.hex)
//     rgbColors.push(color.rgb)
// }

// console.log(hexColors);
// console.log(rgbColors);


//NEXT 18


// Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта. Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену (свойство price). Если продукт с таким названием не найден, функция должна возвращать null.

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//     for (const product of products) {
        
//         if (product.name.includes(productName)) {
//             return product.price;
//         }    
//     }
//     return null;
// }

// console.log(getProductPrice("Radar"));// 1300.
// console.log(getProductPrice("Grip"));// 1200.
// console.log(getProductPrice("Scanner"));// 2700.
// console.log(getProductPrice("Droid"));// 400.
// console.log(getProductPrice("Engine"));// null.


//NEXT 19


// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
// let array = [];
//     for (const product of products) {

//         // const prodKeys = Object.keys(product)
    
//         // if (prodKeys.includes(propName) ) {
//         //     array.push(product[propName])
//         // }

//         if (Object.keys(product).includes(propName)) {
//             array.push(product[propName])
//         }
      
//     }
//     return array;
// }

// console.log(getAllPropValues("name")); //["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues("quantity")); //[4, 3, 7, 9]
// console.log(getAllPropValues("price")); //[1300, 2700, 400, 1200]
// console.log(getAllPropValues("category")); //[]


//NEXT 20


// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//     for (const product of products) {
        
//         if (product.name.includes(productName)) {
//             return product.price * product.quantity
//         }
//     }
//     return 0;
// }

// console.log(calculateTotalPrice("Blaster"));// 0
// console.log(calculateTotalPrice("Radar"));// 5200
// console.log(calculateTotalPrice("Droid"));// 2800
// console.log(calculateTotalPrice("Grip"));// 10800
// console.log(calculateTotalPrice("Scanner"));// 8100


//NEXT 

// Деструктуризация объектов

// const book = {
//   title: "Последнее королевство",
//   author: "Бернард Корнуэлл",
//   genres: ["историческая проза", "приключения"],
//   public: true,
//   rating: 8.38,
// };

// // Деструктуризируем
// const { title, author, public, rating, coverImage } = book;
// console.log(coverImage); // undefined

// const accessType = public ? "публичном" : "закрытом";
// const message = `Книга ${title} автора ${author} с рейтингом ${rating} находится в ${accessType} доступе.`;


//NEXT 


// const book = {
//   title: "Последнее королевство",
//   author: "Бернард Корнуэлл",
// };

// // Добавим картинку обложки если её нет в объекте книги
// const {
//   title,
//   coverImage = "https://via.placeholder.com/640/480",
//   author,
// } = book;



// console.log(title); // Последнее королевство
// console.log(author); // Бернард Корнуэлл
// console.log(coverImage); // https://via.placeholder.com/640/480


//NEXT Спросить за переменные, и деструктуризацию.

// const firstBook = {
//   title: "Последнее королевство",
//   coverImage:
//     "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
// };

// const {
//     title: firstTitle,
//     coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
// } = firstBook;
// // Такая запись читается как «Создать переменную firstTitle, в которую поместить значение свойства title из объекта firstBook» и т. д.
// console.log(firstTitle); // Последнее королевство
// console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

// console.log(firstBook);

// const secondBook = {
//   title: "Сон смешного человека",
// };

// const {
//   title: secondTitle,
//   coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
// } = secondBook;

// console.log(secondTitle); // Сон смешного человека
// console.log(secondCoverImage); // https://via.placeholder.com/640/480


//NEXT 23


// Замени объявления переменных highYesterday, highToday, highTomorrow и highIcon одной операцией деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для highIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const {  
//  yesterday: highYesterday,
//  today: highToday,
//  tomorrow: highTomorrow,
//  icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;


// NEXT 24 Деструктуризация в циклах


// Выполни рефакторинг цикла for...of так, чтобы в нём использовалась деструктуризация объекта..

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];


// for (const {hex, rgb} of colors) {
  
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }


// NEXT 25 Глубокая деструктуризация

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views: userViews, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// const { 
//     today: {high: highToday, low: lowToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"},
  
//     tomorrow: {high: highTomorrow, low: lowTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"},
  
// } = forecast;


// NEXT 26 Паттерн «Объект настроек»


// Функция calculateMeanTemperature(forecast) принимает один параметр forecast - объект температур на два дня следующего формата.

// function calculateMeanTemperature(forecast) {
  
//     const {
//         today: { low: todayLow, high: todayHigh },
//         tomorrow: { low: tomorrowLow, high: tomorrowHigh }
//     } = forecast;

// //   const todayLow = forecast.today.low;
// //   const todayHigh = forecast.today.high;
// //   const tomorrowLow = forecast.tomorrow.low;
// //   const tomorrowHigh = forecast.tomorrow.high;

//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} })); // 28.5
// console.log(calculateMeanTemperature({ today: { low: 37, high: 40 }, tomorrow: { low: 33, high: 38 } })); // 37


// NEXT 27 Операция spread


// В переменной scores хранится массив результатов тестирования. Используя распыление и методы Math.max() и Math.min() дополни код так, чтобы в переменной bestScore был самый высокий балл, а в worstScore самый низкий.

// const scores = [89, 64, 42, 17, 93, 51, 26];

// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);
// console.log(worstScore);


// NEXT 28 Операция spread


// В переменных firstGroupScores, secondGroupScores и thirdGroupScores хранятся результаты тестирования отдельных групп. Используя распыление дополни код так, чтобы:
// В переменной allScores хранился массив всех результатов от первой до третьей группы.
// В переменной bestScore был самый высокий общий балл.
// В переменной worstScore был самый низкий общий балл.

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore); 
// console.log(worstScore);


// NEXT 29 Операция spread


// В конструкторе можно создавать новые тесты, для которых есть настройки по умолчанию которые хранятся в переменной defaultSettings. Во время создания теста, все или часть настроек можно переопределить, они хранятся в переменной overrideSettings.
// Для того чтобы получить финальные настройки теста, необходимо взять настройки по умолчанию и поверх них применить переопределённые настройки. Дополни код так, чтобы в переменной finalSettings получился объект финальных настроек теста.

// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };

// const finalSettings = { ...defaultSettings, ...overrideSettings };


// NEXT 30


// Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.
// text - текст задачи.
// category - категория задачи.
// priority - приоритет задачи.
// Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data. В новом объекте должно быть свойство completed, значение которого хранится в одноимённой локальной переменной.
// В параметре data гарантированно будет только свойство text, а остальные два, category и priority, могут отсутствовать. Тогда, в новом объекте задачи, в свойствах category и priority должны быть значения по умолчанию, хранящиеся в одноимённых локальных переменных.

// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
  
//     return { category, priority, ...data, completed };
// }

// console.log(makeTask({})); // { category: "General", priority: "Normal", completed: false }
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" })); // { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
// console.log(makeTask({ category: "Finance", text: "Take interest" })); // { category: "Finance", priority: "Normal", text: "Take interest", completed: false }
// console.log(makeTask({ priority: "Low", text: "Choose shampoo" })); // { category: "General", priority: "Low", text: "Choose shampoo", completed: false }
// console.log(makeTask({ text: "Buy bread" })); // { category: "General", priority: "Normal", text: "Buy bread", completed: false }


// NEXT 31 Операция rest

// Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество аргументов, считала и возвращала их сумму.
// function add(...args) {

//     let total = 0;
//     for (const element of args) {
//         total += element;
//     }
//     return total;
// }

// console.log(add(74, 11, 62, 46, 12, 36)); //241


// NEXT 32 Операция rest


// Функция addOverNum() считает сумму всех аргументов. Измени параметры и тело функции addOverNum() так, чтобы она считала сумму только тех аргументов, которые больше чем заданное число. Это число должно быть первым параметром функции.

// function addOverNum(firstNumber, ...otherArgs) {
//   let total = 0;

//     for (const arg of otherArgs) {
//         if (arg > firstNumber) {
          

//             total += arg;
//         }
//   }

//   return total;
 
// }
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); //218;


// NEXT 33


// Функция findMatches() принимает произвольное количество аргументов. Первым аргументом всегда будет массив чисел, а остальные аргументы будут просто числами.
// Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только те аргументы, начиная со второго, которые есть в массиве первого аргумента.
// Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив [1, 2], потому что только они есть в массиве первого аргумента.

// function findMatches(firstArg, ...otherArgs) {
//     const matches = []; // Don't change this line
    
//     for (const number of otherArgs) {
            
//        if (firstArg.includes(number)) {
//             matches.push(number);
//        }
//     }
//   return matches;
// }

// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41)); // [24, 9, 41];


// NEXT 34 Методы объекта


// Добавь объекту bookShelf ещё два метода, которые пока что будут возвращать просто строки по аналогии с getBooks() и addBook(bookName).
// Метод removeBook(bookName) будет удалять книгу по имени. Возвращает строку "Deleting book <имя книги>", где <имя книги> это значение параметра bookName.
// Метод updateBook(oldName, newName) будет обновлять название книги на новое. Возвращает строку "Updating book <старое имя> to <новое имя>", где <старое имя> и <новое имя>это значения параметров oldName и newName соотвественно.

// const bookShelf = {
  
//   books: ['The last kingdom', 'The guardian of dreams'],
//     getBooks() {
//         return 'Returning all books';
//     },
//     addBook(bookName) {
//         return `Adding book ${bookName}`;
//     },
//     removeBook(bookName) {
//         return `Deleting book ${bookName}`;
//     },
//     updateBook(oldName, newName) {
//         return `Updating book ${oldName} to ${newName}`;
//     },
  
// };


// NEXT 35


// Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books. Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
    
//       this.books.splice((this.books.indexOf(oldName)), 1, newName);
      
//       return this.books
//   },
// };
// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));//["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]


// NEXT 36-37-38-39-40

// 36 К нам обратилась владелица лавки зелий «У старой жабы» и заказала программу для ведения инвентаря - добавления, удаления, поиска и обновления зелий. Добавь объекту atTheOldToad свойство potions, значением которого сделай пустой массив.
// 37 Добавь объекту atTheOldToad метод getPotions(), который просто возвращает значение свойства potions.
// 38 Дополни метод addPotion(potionName) так, чтобы он добавлял зелье potionName в конец массива зелий в свойстве potions.
// 39 Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potions.
// 40 Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName на newName, в массиве зелий в свойстве potions.


// const atTheOldToad = {
//     potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//     // getPositions() {
//     //     return this.potions
//     // },

//     // addPotion(potionName) {
//     //     return this.potions.push(potionName)
//     // },

//     // removePotion(potionName) {
//     //     this.potions.splice((this.potions.indexOf(potionName)), 1);
//     //     return this.potions
//     // },

//     updatePotionName(oldName, newName) {
//         this.potions.splice(this.potions.indexOf(oldName), 1, newName);
      
//       return this.potions
    
//     },
// };

// console.log(atTheOldToad.removePotion("Dragon breath")); // ["Speed potion", Stone skin"]
// console.log(atTheOldToad.removePotion("Speed potion")); //["Stone skin"]

// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));// ["Speed potion", "Polymorth", "Stone skin"]
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility"));// ["Speed potion", "Polymorth", "Invisibility"]


// NEXT 41


// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.
// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions.
// removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
// updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.


// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
  
//     getPotions() {
//         return this.potions;
//     },
  
//     addPotion(potionName) {
//         if (this.potions.includes(potionName)) {
//         return `Potion ${potionName} is already equipped!`;
//         }

//         this.potions.push(potionName);
//     },
    
//     removePotion(potionName) {
//         const { potions } = this;
        
//         for (let i = 0; i < potions.length; i += 1) {
          
//             if (potionName === potions[i].name) {
//                 potions.splice(i, 1);
//                 return potions;
//             }
//         }

//       return `Potion ${potionName} is not in inventory!`; 
//     },
  
//     updatePotionName(oldName, newName) {
//         const { potions } = this;

//         for (let i = 0; i < potions.length; i += 1) {
            
//             if (oldName === potions[i].name) {

//                 potions[i].name = newName;

//                 return potions;
//             }
//         }

//         return `Potion ${oldName} is not in inventory!`;
//     },
 
// };

// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log( atTheOldToad.getPotions());

// console.log(atTheOldToad.removePotion("Dragon breath")); //[ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth")); // [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]



// Добавление товара


// const cart = {

//     items: [],

//     add(product) {
//         for (const item of this.items) {
//             if (item.name === product.name) {
//                 item.quantity += 1;
//                 return;
//             }
//         }

//         const newProduct = {
//             ...product,
//             quantity: 1,
//         };

//         this.items.push(newProduct);
//     },
// }


// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍇', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });

// console.table(cart.items);
