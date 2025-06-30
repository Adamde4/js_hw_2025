// #iz6emEsP2BA
// – є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// за допомогою map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомогою інлайн конструкції


// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// console.log(coursesAndDurationArray.map((course, index) => ({id: index + 1, ...course,})));



// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об’єкта.
//     Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об’єкт буде мати функції, які в нього були до цього моменту.


function cloner(obj) {
    if (obj) {
        let functions = []
        for (const objElement of obj) {
            console.log(typeof obj[objElement] === "function"); {
                const functionClone = obj[objElement].bind({})
                functions.push(functionClone, key)
            }
        }
        const cloneObj = JSON.parse(JSON.stringify(obj))
        for (const func of functions) {
            cloneObj[func.key] = func.functionClone;
        }
    }
    throw new Error(`${obj} is not an object`)
}
