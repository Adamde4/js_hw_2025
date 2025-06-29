// #XjJuucOMR0
// – Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об’єктами new User(….)


function User(id, name, surname, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.phone = phone;
}

let users = [
    new User('1', 'Oleg', "Qwe", '+380999999999'),
    new User('2', 'Alex', "Qwe", '+380999999999'),
    new User('3', 'Misha', "Qwe", '+380999999999'),
    new User('4', 'Ola', "Qwe", '+380999999999'),
    new User('5', 'Dasha', "Qwe", '+380999999999'),
    new User('6', 'Oleg', "Qwe", '+380999999999'),
    new User('7', 'Oleg', "Qwe", '+380999999999'),
    new User('8', 'Katya', "Qwe", '+380999999999'),
    new User('9', 'Oleg', "Qwe", '+380999999999'),
    new User('10', 'Oleg', "Qwe", '+380999999999')
];
console.log(users);



// #2ikXsE2WiKZ
// – Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)

console.log(users.filter((user) => user.id % 2 === 0));


// #pOeHKct
// – Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log(users.sort((a, b) => a.id - b.id));


// #nkMXISv
// – створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об’єктами Client

function Client(id, name, surname , email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}




let clients = [
    new Client('1', 'Oleg', "Qwe", 'oleg@gmail.com', '+380999999999', [
        {title: 'TV', price: 1000},
        {title: 'Phone', price: 500}
    ]),
    new Client('2', 'Anna', "Asd", 'anna@gmail.com', '+380666666666', [
        {title: 'Laptop', price: 1500}
    ]),
    new Client('3', 'Petro', "Zxc", 'petro@gmail.com', '+380931111111', [
        {title: 'Fridge', price: 3000},
        {title: 'Microwave', price: 700}
    ]),
    new Client('4', 'Sveta', "Poi", 'sveta@gmail.com', '+380971234567', [
        {title: 'TV', price: 1000}
    ]),
    new Client('5', 'Ola', "Lkj", 'ola@gmail.com', '+380992222222', [
        {title: 'Phone', price: 600},
        {title: 'Headphones', price: 200},
        {title: 'Charger', price: 50}
    ]),
    new Client('6', 'Vasya', "Mnb", 'vasya@gmail.com', '+380953333333', [
        {title: 'Tablet', price: 800},
        {title: 'Case', price: 100}
    ]),
    new Client('7', 'Ihor', "Tyu", 'ihor@gmail.com', '+380674444444', [
        {title: 'Smartwatch', price: 400},
        {title: 'Earbuds', price: 150}
    ]),
    new Client('8', 'Marta', "Bnm", 'marta@gmail.com', '+380675555555', [
        {title: 'Camera', price: 2000}
    ]),
    new Client('9', 'Serhiy', "Vcx", 'serhiy@gmail.com', '+380677777777', [
        {title: 'Monitor', price: 1200},
        {title: 'Keyboard', price: 300},
        {title: 'Mouse', price: 100}
    ]),
    new Client('10', 'Olena', "Fgh", 'olena@gmail.com', '+380679999999', [
        {title: 'Printer', price: 900}
    ])
];

console.log(clients);


// #8abtVjRv
// – Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі order по зростанню. (sort)

console.log(clients.sort((a, b) => a.order.length - b.order.length));

// #vV9a6584I5
// – Створити функцію конструктор, яка дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//     — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car



// function Car(mode, producer, year, maxSpeed, engineVolume) {
//     this.mode = mode;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//
//     this.drive = function () {
//         console.log(`Їдемо з максимальною швидкістю ${this.maxSpeed} км/год`);
//     }
//
//     this.info = function () {
//         for (const key in this) {
//             if (typeof this[key] !== 'function') {
//                 console.log(`${key}: ${this[key]}`);
//             }
//         }
//     }
//
//     this.changeMaxSpeed = function (newSpeed) {
//         this.maxSpeed = newSpeed;
//     }
//
//     this.changeYear = function (newYear) {
//         this.year = newYear;
//     }
//
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
//
// ;
//
// let car = new Car('ASD', 'Skoda', 2009, 200, 4);
// console.log(car);
//
// car.info();
// car.addDriver({name: 'Anton', surname: 'Qwe'});
// car.changeYear(2012);
// car.changeMaxSpeed(250);
//
// console.log(car);
// car.drive();



// #5kla3yMpgp
// – (Те саме, тільки через клас)
// – Створити клас, який дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//     — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car


// class Car {
//     constructor(mode, producer, year, maxSpeed, engineVolume) {
//         this.mode = mode;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineVolume = engineVolume;
//     }
//
//
//     drive() {
//         console.log(`Їдемо з максимальною швидкістю ${this.maxSpeed} км/год`);
//     };
//
//     info() {
//         for (const key in this) {
//             if (typeof this[key] !== 'function') {
//                 console.log(`${key}: ${this[key]}`);
//             }
//         }
//     };
//
//     changeMaxSpeed(newSpeed) {
//         this.maxSpeed = newSpeed;
//     };
//
//     changeYear(newYear) {
//         this.year = newYear;
//     };
//
//     addDriver(driver) {
//         this.driver = driver;
//     }
// }
//
//
// let car = new Car('ASD', 'Skoda', 2009, 200, 4);
// console.log(car);
//
// car.info();
// car.addDriver({name: 'Anton', surname: 'Qwe'});
// car.changeYear(2012);
// car.changeMaxSpeed(250);
//
// console.log(car);
// car.drive();
//



// #zg6Fifnqig
// – створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
//     Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку


class Popelushka {
    constructor(name, age, foot_size) {
        this.name = name;
        this.age = age;
        this.foot_size = foot_size;
    }

}

class Prince {
    constructor(name, age, snikers) {
        this.name = name;
        this.age = age;
        this.snikers = snikers;
    }
}

const prince = new Prince('Vasya', 30, 29)

const popelusha_array = [
    new Popelushka('Ola', 16, 26),
    new Popelushka('Galya', 17, 27),
    new Popelushka('Oleg', 18, 28),
    new Popelushka('Sveta', 19, 29),
    new Popelushka('Dasha', 20, 30),
    new Popelushka('Rapynchel', 21, 31),
    new Popelushka('Tamara', 22, 32),
    new Popelushka('Zhana', 23, 33)
]


// for (const popelushka of popelusha_array) {
//     if (popelushka.foot_size === prince.snikers) {
//         prince.wife = popelushka
//     }
// }
// console.log(prince)

// const find_wife = popelusha_array.find(popelushka => popelushka.foot_size === prince.snikers);
// prince.wife = find_wife
// console.log(prince)


// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter

Array.prototype.MyForeach = function (callback) {
    for (let i = 0, len = callback.length; i < len; i++) {
        callback(this[i], i, this);
    }
}


Array.prototype.myFilter = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};
