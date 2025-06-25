// #dFeorS3m7u
// – Знайти та вивести довжину наступних стрінгових значень
//  ‘hello world’
// ‘lorem ipsum’
// ‘javascript is cool’
//
//
// let w1 = 'hello world';
// let w2 = 'hlorem ipsum';
// let w3 = 'javascript is cool';
//
// console.log(w1.length);
// console.log(w2.length);
// console.log(w3.length);
//
//
//
// const strings = [w1, w2, w3]
// for (const string of strings) {
//  console.log(string.length);
// }

// #8lld9HMxXWB
// – Перевести до великого регістру наступні стрінгові значення
//       ‘hello world’, ‘lorem ipsum’, ‘javascript is cool’
// let w1 = 'hello world';
// let w2 = 'hlorem ipsum';
// let w3 = 'javascript is cool';
//
// console.log(w1.toUpperCase());
// console.log(w2.toUpperCase());
// console.log(w3.toUpperCase());

// #ClDsAm7xba7
// – Перевести до нижнього регістру наступні стрінгові значення
//       ‘HELLO WORLD’, ‘LOREM IPSUM’, ‘JAVASCRIPT IS COOL’
//
// let w1 = 'HELLO WORLD';
// let w2 = 'LOREM IPSUM';
// let w3 = 'JAVASCRIPT IS COOL';
//
// console.log(w1.toLowerCase());
// console.log(w2.toLowerCase());
// console.log(w3.toLowerCase());

// #0b89BkYZwu
// – Є “брудна” стрінга let str = ‘ dirty string   ‘ . Почистити її від зайвих пробілів.
//
// let str = ' dirty string   '
// console.log(str.trim())


// #bfoJuse4ZzP
// – Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = ‘Ревуть воли як ясла повні’;
// let arr = stringToarray(str); [‘Ревуть’, ‘воли’, ‘як’, ‘ясла’, ‘повні’]
//
// let str = 'Ревуть воли як ясла повні';
//
// function stringToArray(str) {
//      if (str){
//           return str.split(' ')
//      }
// return [''];}
//
// console.log(stringToArray(str));


// #Rbr5kEQ
// – є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об’єкти в масиві на стрінгові.
//
// let arr = [10,8,-7,55,987,-1011,0,1050,0]
//
// new_arr = arr.map(item => item + '')
//
// console.log(arr)
// console.log(new_arr)


// // #5hqyKTfmc
// // – створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки  – залежно від значення аргументу direction.
// //
// //     let nums = [11,21,3];
// //
// // sortNums(nums,’ascending’) // [3,11,21]
// //
// // sortNums(nums,’descending’) // [21,11,3]
//
//
// let nums = [11,21,3];
//
// function sortNums(arrayOfNums, direction) {
//     if (direction === 'ascending') return arrayOfNums.sort((a, b) => a - b);
//     if (direction === 'descending') return arrayOfNums.sort((a, b) => b - a);
// }
//
//
// console.log(sortNums(nums, 'ascending')); // [3,11,21]
//
// console.log(sortNums(nums, 'descending')); // [21,11,3]


// #yo06d74c1C
// – є масив
//
// let coursesAndDurationArray = [
//     {title: ‘JavaScript Complex’, monthDuration: 5},
// {title: ‘Java Complex’, monthDuration: 6},
// {title: ‘Python Complex’, monthDuration: 6},
// {title: ‘QA Complex’, monthDuration: 4},
// {title: ‘FullStack’, monthDuration: 7},
// {title: ‘Frontend’, monthDuration: 4}
// ];
//
//  — відсортувати його за спаданням за monthDuration
//  — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
//  — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

const sort = coursesAndDurationArray
.sort((a, b) => b.monthDuration - a.monthDuration)
.filter(value => value.monthDuration > 5)
.map((value, index) =>{
    value.id = index + 1
    return value;
});

