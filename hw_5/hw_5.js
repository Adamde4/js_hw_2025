// #I2XsG6f
// – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами а і б


// let sum = (a, b) => a + b
//
// console.log(sum(5, 10));


// #ETGAxbEn8l
// – створити функцію, яка обчислює та повертає площу кола з радіусом r


// let square_circle = (radius) => Math.PI * radius * radius;
//
// console.log(square_circle(10));

// #Mbiz5K4yFe7
// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r


// let cylinder = (height, radius) => 2 * 3.14 * radius * (radius + height)
//
// console.log(cylinder(50, 20))


// #SIdMd0hQ
// – створити функцію, яка приймає масив та виводить кожен його елемент

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// let array_print = (array)=> {for(const item of array) {console.log(item);}}
// array_print(users);


// #59g0IsA
// – створити функцію, яка створює параграф з текстом. Текст задати через аргумент


// let creator = (text) =>{document.write(`<p>${text}</p>`)}
//
// creator("qwe qwe qwe")




// #hOL6126
// – створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let creator_li_3ul = (text) => {
//     document.write(`
//                     <ul>
//                         <li> ${text} </li>
//                         <li> ${text} </li>
//                         <li> ${text} </li>
//                         </ul>
//                         `)
// }
// creator_li_3ul('Hello')


// #0Kxco1edSN
// – створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let creator_li = (text, number ) => {
//     document.write('<ul>')
//     for (let i = 1; i < number; i++) {
//         document.write(`<li> ${text} </li>`)
//     }
//     document.write(`<li> ${text} </li>`)
//     document.write('</ul>')
// }
//
// creator_li('Hello', 5)




// #gEFoxMMO
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let foobar = (array) => {
//     document.write(`<ul>`)
//     for (const arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// let array = [123, 'asd', 'qwe', true, false]
// foobar(array)


// #bovDJDTIjt
// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.


// let foobar = (users) => {
//     for (const user of users) {
//         document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
//     }
// }
//
// let users = [
//     {name: 'vasya', age: 31, id: 1},
//     {name: 'petya', age: 30, id: 2},
//     {name: 'kolya', age: 29, id: 3},
//     {name: 'olya', age: 28, id: 4},
//     {name: 'max', age: 30, id: 5},
//     {name: 'anya', age: 31, id: 6},
//     {name: 'oleg', age: 28, sid: 7},
//     {name: 'andrey', age: 29, id: 8},
//     {name: 'masha', age: 30, sid: 9},
//     {name: 'olya', age: 31, id: 10},
//     {name: 'max', age: 31, id: 11}
// ];
// foobar(users)



// #pghbnSB
// – створити функцію яка повертає найменьше число з масиву

// let min_num_array =(array) => {
//     let min = array[0];
//     for (const arrayElement of array) {
//         if (arrayElement < min) {
//             min = arrayElement
//         }
//     }
//     console.log(min)
// }
//
// let array_num = [1, 22, 55, 101, 15]
// min_num_array(array_num)


// #EKRNVPM
// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13


// let sum = (arr) => {
//     let count = 0
//     for (const arrElement of arr) {
//         count += arrElement
//     }
//     return count
// }
//
// let array_number = [1, 2, 3, 5]
// console.log(sum(array_number))





// #kpsbSQCt2Lf
// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]


// let swap = (arr, index1, index2) => {
//     let temp = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = temp;
//     return arr;
// }
//
// console.log(swap([11, 22, 33, 44], 0, 1));


// #mkGDenYnNjn.html
// // Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// // Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400
//
// let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
//     for (const currency of currencyValues) {
//         if (currency.currency === exchangeCurrency) {
//             return sumUAH / currency.value;
//         }
//     }
// }
//
// console.log(exchange(1000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));
