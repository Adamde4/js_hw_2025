// #sH8c4er
// – Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.

// let h2 = document.createElement("h2")
// h2.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, sapiente!"
// h2.classList.add("text_center")
// document.body.appendChild(h2)
//
//
// let button_exit = document.createElement("button")
// button_exit.innerText = "Exit"
// button_exit.classList.add("button_exit")
// button_exit.addEventListener("click", () => {h2.innerText = ""})
// document.body.appendChild(button_exit)


// #ymAmN2xJ
// Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ. Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом

// const someForm = document.forms.someForm;
//
// const sendButton = someForm.sendButton
// sendButton.addEventListener('click', (e) => {
//     const nameValue = someForm.name.value
//     const surnameValue = someForm.surname.value
//     const ageValue = someForm.age.value
//     let obj = {nameValue, surnameValue, ageValue}
//     console.log(obj);
// })


// #2VaLt4vDczH
// є сторінка, на якій є блок, в кому знаходиться цифра. Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

// let  curentNumber= +localStorage.getItem('number') || 0
// curentNumber +=1
// localStorage.setItem('number', curentNumber)
//
// document.getElementById('target').innerText = curentNumber



// #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM

// let sessionsList = JSON.parse(localStorage.getItem("sessionsList")) || [];
//
// sessionsList.push(new Date())
// localStorage.setItem("sessionsList", JSON.stringify(sessionsList));


// #Jg0gPO00
// створити конвертор ваги з кг в фунти. дані заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
//
// const input = document.getElementById("convert");
// const resultDiv = document.getElementById("result");
//
// input.oninput = function () {
//     resultDiv.innerText = +this.value * 2.2
// }



// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об’єкт
// сигнатура функції –
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

// function addToLocalStorage(arrayName,objToAdd){
//     const lsItem = localStorage.getItem(arrayName);
//     if (!lsItem) {
//         throw new Error('there s no such array')
//     }
//
//     const arr = JSON.parse(lsItem);
//     if (typeof objToAdd === 'object') {
//         array.push(objToAdd);
//     }
//
//     localStorage.setItem(arrayName, JSON.stringify(arr));
//
// }


