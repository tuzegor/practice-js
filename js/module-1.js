// const a = 3;
// const b = 5;
// const userName = 'yehor';
// console.log(a > b);
// console.log(a < b);
// console.log(a + b);
// console.log('My name is', userName);

console.log(typeof(null)); // object

// приведение к булю
let test = 'Yehor';
console.log(Boolean(test));

test = 80;
console.log(Boolean(test));

test = '8';
console.log(Boolean(test));

test = - 8;
console.log(Boolean(test));

test = true;
console.log(Boolean(test));

// 6 ложных значений
test = 0;
console.log(Boolean(test));

test = undefined;
console.log(Boolean(test));

test = null;
console.log(Boolean(test));

test = NaN;
console.log(Boolean(test));

test = false;
console.log(Boolean(test));

test = '';
console.log(Boolean(test));

//

let counter = 0;

while (counter < 10) {
    console.log('counter: ', counter);
    counter += 1
}

 //

 /*
 * Используем цикл для вывода только нечетных чисел.
 * Для чётных i срабатывает continue, выполнение тела прекращается
 * и управление передаётся на следующую итерацию.
 */
const number = 10;

for (let i = 0; i < number; i += 1) {
  if (i % 2 === 0) {
    continue;
  }

  console.log('Нечетное i: ', i); // 1, 3, 5, 7, 9
}
// другой способ

for (let i = 0; i <= number; i += 1) {
    if (i % 2 !== 0) {
      console.log('Не четное i: ', i);
    }

  // 1, 3, 5, 7, 9
}
for (let i = 0; i <= number; i += 1) {
    if (i % 2 === 0) {
        console.log('Четное i: ', i);
    }
    // 0, 2, 4, 6, 8, 10
}

// Итерация по массиву
const clients = ['Mango', 'Ajax', 'Poly'];

for (const client of clients) {
  console.log(client);
}

// Итерация по строке
const string = 'javascript';

for (const character of string) {
  console.log(character);
}



// Задачки

function checkStorage(available, ordered) {
  let message;
if (ordered > available) {
    message = "Not enough goods in stock!";
} else {
   message = "Order is processed, our manager will contact you.";
}
    
    return message;
    
}

console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 150));
console.log(checkStorage(150, 180));

// Next

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
    let message;
    const totalPrice = pricePerDroid * orderedQuantity;
if(totalPrice > customerCredits){
    message = "Insufficient funds!";
} else {
    message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
}
  return message;
}
console.log(makeTransaction(3000, 5, 23000));
console.log(makeTransaction(1000, 3, 15000));
console.log(makeTransaction(5000, 10, 8000));
console.log(makeTransaction(2000, 8, 10000));
console.log(makeTransaction(500, 10, 5000));

// Next

// Если потрачено от 50000 ( включительно ) или больше кредитов - скидка 10% (золотой партнёр)
// Если потрачено от 20000 (включительно) до 50000 кредитов - скидка 5% (серебрянный партнёр)
// Если потрачено от 5000 (включительно) до 20000 кредитов - скидка 2% (бронзовый партнёр)
// Если потрачено меньше чем 5000 кредитов - скидка 0 (базовый партнёр)
function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
    let discount;
    if (totalSpent >= 50000) {
        discount = GOLD_DISCOUNT;
    } else if (totalSpent >= 20000 && totalSpent < 50000) {
        discount = SILVER_DISCOUNT;
    } else if (totalSpent >= 5000 && totalSpent < 20000) {
        discount = BRONZE_DISCOUNT;
    } else if (totalSpent < 5000) {
        discount = BASE_DISCOUNT;
    } 
    
  return discount;
}

console.log(getDiscount(137000));
console.log(getDiscount(46900));
console.log(getDiscount(8250));
console.log(getDiscount(1300)); 
console.log(getDiscount(5000));
console.log(getDiscount(20000));
console.log(getDiscount(50000));

// Next

function getSubscriptionPrice(type) {
  let price;
 
 switch (type) { 
    case "starter": 
      price = 0; 
      break;

    case "professional": 
      price = 20; 
      break;

    case "organization": 
      price = 50; 
      break;
 }
    
  return price;
}

console.log(getSubscriptionPrice("professional"));
console.log(getSubscriptionPrice("organization"));
console.log(getSubscriptionPrice("starter"));

// Next

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
 
  if (password === null) {
    message = "Canceled by user!";
  } else if (password === ADMIN_PASSWORD) {
    message = "Welcome!";
  } else {
    message = "Access denied, wrong password!";
  }
    switch (password) {
        case null:
            message = "Canceled by user!";
            break;
        
        case ADMIN_PASSWORD:
             message = "Welcome!";
            break;
        
        default:
            message = "Access denied, wrong password!";
    }

  return message;
}

console.log(checkPassword("mangohackzor"));
console.log(checkPassword(null)); 
console.log(checkPassword("polyhax"));
console.log(checkPassword("jqueryismyjam"));

// Next

// Список стран и стоимость доставки:
// China - 100 кредитов
// Chile - 250 кредитов
// Australia - 170 кредитов
// Jamaica - 120 кредитов
// Из списка видно, что доставка есть не везде. Если указанной страны нет в списке, то функция должна вернуть строку "Sorry, there is no delivery to your country"

function getShippingCost(country) {
  let message;
    switch(country) {
        case "China":
            price = 100;
            message = `Shipping to ${country} will cost ${price} credits`;
            break;
    
        case "Chile":
            price = 250;
            message = `Shipping to ${country} will cost ${price} credits`;
            break;
        
        case "Australia":
            price = 170;
            message = `Shipping to ${country} will cost ${price} credits`;
            break;
        
        case "Jamaica":
            price = 120;
            message = `Shipping to ${country} will cost ${price} credits`;
            break;
        
        default:
            message = "Sorry, there is no delivery to your country";
}
  return message;
}

console.log(getShippingCost("Australia"));
console.log(getShippingCost("Germany")); 
console.log(getShippingCost("China")); 
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Jamaica")); 
console.log(getShippingCost("Sweden"));

// Next

function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`;

  return message;
}

console.log(getNameLength("Poly"));
console.log(getNameLength("Harambe"));
console.log(getNameLength("Billy"));
console.log(getNameLength("Joe"));

// Next

function getSubstring(string, length) {
  const substring = string.slice(string, length);

  return substring;
}

console.log(getSubstring("Hello world", 3)); 
console.log(getSubstring("Hello world", 6));  
console.log(getSubstring("Hello world", 8));  
console.log(getSubstring("Hello world", 11));  
console.log(getSubstring("Hello world", 0));

// Next

// Функция formatMessage(message, maxLength) принимает строку (параметр message) и форматирует её, если длина превышает значение в параметре maxLength.

// Дополни код функции так, что если длина строки:

// не превышает maxLength, функция возвращает её в исходном виде.
// больше maxLength, то функция обрезает строку до maxLength символов и добавляет в конец троеточие "...", после чего возвращает укороченную версию.

function formatMessage(message, maxLength) {
  let result;
 result = message.length <= maxLength ? message : (message.slice(message, maxLength) + "...")
  return result;
}

console.log(formatMessage("Curabitur ligula sapien", 16));
console.log(formatMessage("Curabitur ligula sapien", 23));
console.log(formatMessage("Vestibulum facilisis purus nec", 20));
console.log(formatMessage("Vestibulum facilisis purus nec", 30));
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));

// Next

// Функция normalizeInput(input) принимает строку (параметр input) и возвращает такую же строку, но в нижнем регистре. Присвой переменной normalizedInput выражение создания строки в нижнем регистре из параметра input.

function normalizeInput(input) {
  const normalizedInput = input.toLowerCase();  

  return normalizedInput;
}
console.log(normalizeInput("Hello world")); 
console.log(normalizeInput("This ISN'T SpaM")); 
console.log(normalizeInput("Big SALE"));

// Next

// Функция checkName(fullname, name) принимает два параметра и возвращает буль true или false - результат проверки вхождения подстроки name в строку fullname.

// fullname - полное имя состоящее из двух слов (имени и фамилии) разделённых пробелом.
// name - имя для проверки вхождения в полное имя.
// Присвой переменной result выражение проверки вхождения имени (параметр name), в полное имя (параметр fullname). Пусть функция строго относится к регистру букв, то есть «Петя» и «петя» для неё разные имена.

function checkForName(fullName, name) {
 const result = fullName.includes(name); // Change this line
  return result;
}
console.log(checkForName("Egor Kolbasov", "Egor"));
console.log(checkForName("Egor Kolbasov", "egor")); 
console.log(checkForName("Egor Kolbasov", "egOr")); 
console.log(checkForName("Egor Kolbasov", "Zhenya")); 
console.log(checkForName("Vadim Nekrasov", "Vadim"));
console.log(checkForName("Vadim Nekrasov", "vadim")); 
console.log(checkForName("Vadim Nekrasov", "Dima"));

// Next

// Функция checkForSpam(message) принимает строку (параметр message), проверяет её на содержание запрещенных слов spam и sale, и возвращает результат проверки. Слова в строке параметра message могут быть в произвольном регистре, например SPAM или sAlE.

// Если нашли запрещенное слово (spam или sale) то функция возвращает буль true.
// Если в строке нет запрещенных слов, функция возвращает буль false.

function checkForSpam(message) {
    let result;
    result = (message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale')) ? true : false;
  return result;
}

console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("Amazing SalE, only tonight!"));
console.log(checkForSpam("Trust me, this is not a spam message"));
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
