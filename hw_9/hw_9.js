// #8Nmt60ZT
// – створити блок,
// – додати йому класи wrap, collapse, alpha, beta
// – додати стилі (довільні значення) : колір фону, колір тексту, розмір тексту
// – додати цей блок в body.
// – клонувати його повністю, та додати клон в body.


// const div = document.createElement('div');
// div.classList.add('wrap');
// div.classList.add('collapse');
// div.classList.add('alpha');
// div.classList.add('beta');
//
// document.body.appendChild(div);
//
// const cloneNode = div.cloneNode(true)
// document.body.appendChild(cloneNode);


// #OPLI89c9G
// – Є масив:
//     [‘Main’,’Products’,’About us’,’Contacts’]
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)


// let arr = ['Main', 'Products', 'About us', 'Contacts']
//
// const menu = document.createElement('ul')
// menu.classList.add('menu')
//
// for (const item of arr) {
//     const li = document.createElement('li')
//     li.innerText = item
//     menu.appendChild(li)
// }
//
// document.body.appendChild(menu)


// #jeBqHV525U5
// – Є масив
// let coursesAndDurationArray = [
//     {title: ‘JavaScript Complex’, monthDuration: 5},
// {title: ‘Java Complex’, monthDuration: 6},
// {title: ‘Python Complex’, monthDuration: 6},
// {title: ‘QA Complex’, monthDuration: 4},
// {title: ‘FullStack’, monthDuration: 7},
// {title: ‘Frontend’, monthDuration: 4}
// ];
//
// Для кожного елементу масиву зробити блок, в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.


// let coursesAndDurationArray = [
//     { title: "JavaScript Complex", monthDuration: 5 },
//     { title: "Java Complex", monthDuration: 6 },
//     { title: "Python Complex", monthDuration: 6 },
//     { title: "QA Complex", monthDuration: 4 },
//     { title: "FullStack", monthDuration: 7 },
//     { title: "Frontend", monthDuration: 4 }
// ];
//
// const arr_list = document.createElement('div')
// arr_list.classList.add('course-list');
//
// for (const arrListElement of coursesAndDurationArray) {
//     let list = document.createElement('div')
//     list.innerText = `${arrListElement.title} ${arrListElement.monthDuration}`;
//     arr_list.appendChild(list)
//
// }
// document.body.appendChild(arr_list);


// – Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
//
// Приклад структури знаходиться у файлі example.png, який лежить в папці з поточним файлом


let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


const coursesContainer = document.createElement('div');
coursesContainer.classList.add('courses-container');

for (const course of coursesArray) {

    const courseBlock = document.createElement('div');
    courseBlock.classList.add('course');


    const titleBlock = document.createElement('div');
    titleBlock.innerText = course.title;


    const durationsBlock = document.createElement('div');
    durationsBlock.innerText = `Month: ${course.monthDuration}, Hours: ${course.hourDuration}`;


    const ul = document.createElement('ul');
    for (const module of course.modules) {
        const li = document.createElement('li');
        li.innerText = module;
        ul.appendChild(li);
    }

    courseBlock.appendChild(titleBlock);
    courseBlock.appendChild(durationsBlock);
    courseBlock.appendChild(ul);

    coursesContainer.appendChild(courseBlock);
}

document.body.appendChild(coursesContainer);
