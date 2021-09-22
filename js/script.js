// function greet(name) {
//   return `Добро пожаловать ${name}.`;
// }

// // Вызываем функцию greet и выводим результат в консоль
// console.log(greet("Манго")); // Добро пожаловать Манго.

// // Выводим функцию greet в консоль не вызывая её
// console.log(greet); // ƒ greet() { return `Добро пожаловать ${name}.`; }
// Как рабобает функция колбэка

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Имитируем доступеность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`Соединяем с ${name}, ожидайте...`);
//   // Логика принятия звонка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
//   // Логика активации автоответчика
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступен, записываем голограмму.`);
//   // Логика записи голограммы
// }

// processCall("Манго", takeCall, activateAnsweringMachine);
// processCall("Поли", takeCall, leaveHoloMessage);

// Второй пример колбэк функции

// function printValue(value) {
//   console.log(value);
// }

// function prettyPrint(value) {
//   console.log("Logging value: ", value);
// }

// function repeat(n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// }

// // Передаем printValue как callback-функцию
// repeat(3, printValue);
// // 0
// // 1
// // 2

// // Передаем prettyPrint как callback-функцию
// repeat(3, prettyPrint);
// // Logging value: 0
// // Logging value: 1
// // Logging value: 2

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// const result = makePizza();
// const pointer = makePizza;
// console.log(result);
// console.log(pointer);

//  Создание инлайн коллбек функции

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}.`);
// });

// Задачка про магазин пиццы - Выводит в консоль №1

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     for (const pizza of this.pizzas) {
//       if (pizza === pizzaName) {
//         console.log(onSuccess(pizzaName));
//         return;
//       }
//     }
//     console.log(
//       onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
//     );
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// Задачка про магазин пиццы решение №2 Где используем return

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     for (const pizza of this.pizzas) {
//       if (pizza === pizzaName) {
//         return onSuccess(pizzaName);
//       }
//     }
//     return onError(
//       `There is no pizza with a name ${pizzaName} in the assortment.`
//     );
//   },
// };

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// Используем замену циклу for или for...of метод array.forEach(element => { });

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   // for (let i = 0; i < orderedItems.length; i += 1) {
//   // totalPrice += orderedItems[i];
//   // }

//   orderedItems.forEach(function (number) {
//     totalPrice += number;
//   });
//   console.log(totalPrice);
//   return totalPrice;
// }
// calculateTotalPrice([412, 371, 94, 63, 176]);

// Перебор значений массива с помощью метода forEach

// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   console.log(filteredNumbers);
//   return filteredNumbers;
// }
// filterArray([12, 24, 8, 41, 76], 20);

// Перебор массива методом forEach

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   firstArray.forEach(function (number) {
//     if (secondArray.includes(number)) {
//       commonElements.push(number);
//     }
//   });

//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }
//   console.log(commonElements);
//   return commonElements;
// }
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);

// Объявление стрелочной функции

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   console.log(quantity * pricePerItem);
//   return quantity * pricePerItem;
// };
// calculateTotalPrice(8, 60);

// Рефакторинг кода (стрелочной функции) запись через implicit return - неявный возврат

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// стрелочная функция как коллбек

// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });
//   console.log(totalPrice);
//   return totalPrice;
// };
// calculateTotalPrice([164, 48, 291]);

// Рефакторинг стрелочной функции

// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// };

// Рефакторинг стрелочной функции

// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// };

// Рефакторинг стрелочной функции 3

// const changeEven = (numbers, value) => {
//   // Change code below this line
//   const newArray = [];
//   numbers.forEach((number) => {
//     if (number % 2 === 0) {
//       number += value;
//     }
//     newArray.push(number);
//   });
//   console.log(newArray);
//   return newArray;
//   // Change code above this line
// };
// changeEven([44, 13, 81, 92, 36, 54], 100);

// Используем метод массива map

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsLengths = planets.map((planet) => planet.length);
// console.log(planetsLengths);

// Метод reduce продвинутый

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// // Пройдем по всем элементам коллекции и добавим значения свойства tags
// // к аккумулятору, начальное значение которого укажем пустым массивом [].
// // На каждой итерации пушим в аккумулятор все элементы tweet.tags и возвращаем его.
// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);

//   return allTags;
// }, []);

// console.log(tags);

// // Наверное сбор тегов не одиночная операция, поэтому напишем функцию
// // для сбора тегов из коллекции
// const getTags = (tweets) =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// console.log(getTags(tweets));

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const getTags = (tweets) =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// const tags = getTags(tweets);

// // Вынесем callback-функцию отдельно, а в reducе передадим ссылку на нее.
// // Это стандартная практика если callback-функция довольно большая.

// // Если в объекте-аккумуляторе acc нету своего свойства с ключем tag,
// // то создаем его и записывает ему значение 0.
// // В противном случае увеличиваем значение на 1.
// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {

//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// // Начальное значение аккумулятора это пустой объект {}
// const countTags = (tags) => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);

// const students = ["Вика", "Андрей", "Олег", "Юля", "Борис", "Катя"];

// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // ['Андрей', 'Борис', 'Вика', 'Катя', 'Олег', 'Юля']

// const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
// console.table(inReversedOrder); // ['Юля', 'Олег', 'Катя', 'Вика', 'Борис', 'Андрей']

// console.dir(_);

// Get Value of a brower Cookie
// const cookie = (name) =>
//   `; ${document.cookie}`.split(`; ${name}=`).pop().split(";").shift();

// cookie("_ga");
// Програмка для перевода rgb в hex c использованием рператора побитового сдвика влево
// const rgbToHex = (r, g, b) =>
//   "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

// console.log(rgbToHex(0, 51, 255));

// Интересный пример как функции можно добавить свойство и вывести его в консоль
// function greeting() {
//   console.log("Hello World");
// }
// greeting.lang = "English";
// // Выводит 'English'
// console.log(greeting.lang);

// const arr1 = [1, 2, 3];
// const arr2 = arr1.map((item) => item * 2);
// console.log(arr2);

// const strArray = ["JavaScript", "Python", "PHP", "Java", "C"];

// function mapForEach(arr, fn) {
//   const newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArray.push(fn(arr[i]));
//   }
//   return newArray;
// }
// const lenArray = mapForEach(strArray, function (item) {
//   return item.length;
// });
// // выводит [ 10, 6, 3, 4, 1 ]
// console.log(lenArray);
