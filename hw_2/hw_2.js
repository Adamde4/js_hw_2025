// Масиви та об'єкти
// #67kfznmiMl
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let array = [1, 2, 3, 4, 5, 'asd', 'qwe', true, false, 'hello'];
console.log(array);


// #LARqoUj5I
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'Kobzar',
    pageCount: 100,
    genre: "drama"
}
console.log(book1);



//     #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book2 = {
    title: 'lorem ipsum',
    pageCount: 100,
    genre: "lorem ipsum'",
    autor: ['lorem ipsum', 31]
}

let book3 = {
    title: 'lorem ipsum',
    pageCount: 100,
    genre: "lorem ipsum'",
    autor: ['lorem ipsum', 31]
}

let book4 = {
    title: 'lorem ipsum',
    pageCount: 100,
    genre: "lorem ipsum'",
    autor: ['lorem ipsum', 31]
}

console.log(book2);
console.log(book3);
console.log(book4);



//     #jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача


let users = [
    {id: 1, name: "qwe", age: 16, status: false},
    {id: 2, name: "asd", age: 17, status: true},
    {id: 3, name: "zxc", age: 18, status: true},
    {id: 4, name: "qaz", age: 19, status: true},
    {id: 5, name: "xcv", age: 20, status: false},
    {id: 6, name: "nbv", age: 21, status: false},
    {id: 7, name: "poi", age: 22, status: true},
    {id: 8, name: "kjh", age: 23, status: true},
    {id: 9, name: "poi", age: 22, status: false},
    {id: 10, name: "ytr", age: 50, status: false},

]

console.log(users);
console.log(users[0]);
console.log(users[0].age);



// #coYydZuaeEB
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу


temperatures = [
    {day: 1, morning: 10, daytime: 20, night: 15},
    {day: 2, morning: 10, daytime: 20, night: 15},
    {day: 3, morning: 10, daytime: 20, night: 15},
    {day: 4, morning: 10, daytime: 20, night: 15},
    {day: 5, morning: 10, daytime: 20, night: 15},
    {day: 6, morning: 10, daytime: 20, night: 15},
    {day: 7, morning: 10, daytime: 20, night: 15},
]

temperatures2 = [
    [1, 10, 20, 15],
    [2, 10, 20, 15],
    [3, 10, 20, 15],
    [4, 10, 20, 15],
    [5, 10, 20, 15],
    [6, 10, 20, 15],
    [7, 10, 20, 15]
]





//     #bAUsaq6LI
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// x = +prompt('enter number')
//
// if(x !== 0){
//     console.log("Вірно")
// } else {
//     console.log("Не вірно")
// }



// #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// time =  +prompt('enter number 0 - 59')
//
// if(time => 0 && time <= 15){
//     console.log("part 1")
// }else if (time > 15 && time <= 30){
//     console.log("part 2")
// }else if (time > 30 && time <= 45){
//     console.log("part 3")
// } else if (time > 45 && time <= 59){
//     console.log("part 4")
// }




// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).


// day =  +prompt('enter number 1 - 31')
//
// if(day => 1 && day <= 10){
//     console.log("part 1")
// }else if (day > 10 && day <= 20){
//     console.log("part 2")
// }else if (day > 20 && day <= 31) {
//     console.log("part 3")
// }



// #KzrtqyQ
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// day = prompt('day of week?')
//
// switch (day){
//     case 'monday':
//         console.log(day);
//         break
//     case 'tuesday':
//         console.log(day);
//         break
//     case 'wednesday':
//         console.log(day);
//         break
//     case 'thursday':
//         console.log(day);
//         break
//     case 'friday':
//         console.log(day);
//         break
//     case 'saturday':
//         console.log(day);
//         break
//     case 'sunday':
//         console.log(day);
//         break
// }


//     #uwsz1RnTQJ1
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// let num1 = +prompt("enter first number")
// let num2 = +prompt("enter second number")
//
// if(num1 > num2){
//     console.log(`number ${num1} is bigger`);
// } else if (num1 < num2){
//     console.log(`number ${num2} is bigger`)
// } else {
//     console.log("number 1 == nuber 2")
// }


//         #iBvqtjEm
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

// let x = 0;
//
// if (x === 0 || x === null || x === undefined || x === NaN || x === ""){
//     x = "default"
// }
//
// if (!x){
//     x = "default"
// }

//     #awLXL6TBzg
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if(coursesAndDurationArray[0].monthDuration > 5){
    console.log(coursesAndDurationArray[0])
    console.log("Cool")
}

if(coursesAndDurationArray[1].monthDuration > 5){
    console.log(coursesAndDurationArray[1])
    console.log("Cool")
}

if(coursesAndDurationArray[2].monthDuration > 5){
    console.log(coursesAndDurationArray[2])
    console.log("Cool")
}

if(coursesAndDurationArray[3].monthDuration > 5){
    console.log(coursesAndDurationArray[3])
    console.log("Cool")
}

if(coursesAndDurationArray[4].monthDuration > 5){
    console.log(coursesAndDurationArray[4])
    console.log("Cool")
}

if(coursesAndDurationArray[5].monthDuration > 5){
    console.log(coursesAndDurationArray[5])
    console.log("Cool")
}
