// #dYQNrBV
//
// Створити змінні. Присвоїти кожному з них значення: ‘hello’,’owu’,’com’, ‘ua’, 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//
//     Вивести кожну змінну за допомогою: console.log

console.log('hello');
console.log('owu');
console.log('com');
console.log('ua');
console.log(1);
console.log(10);
console.log(-999);
console.log(123);
console.log(3.14);
console.log(2.7);
console.log(16);
console.log(true);
console.log(false);

// #6Qb97gsv
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)


let firstName = "Bohdan";
let middleName = "Petrovych";
let lastName = "Adamitskyi";

console.log(`${firstName} ${middleName} ${lastName}`)


// #4N0y5tufA
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);


// #ruUtWDUI
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let name = prompt('What is your name?');
let lname = prompt('What is your last name?');
let age = prompt('How old are you?');

console.log(age);
console.log(name);
console.log(lname);
