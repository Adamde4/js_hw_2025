// #HmvAfRQM
// – взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
//
// const cartsDiv = document.getElementById('carts');
// fetch('https://dummyjson.com/carts')
//     .then(res => res.json())
//     .then(cartsObject => {
//         const {carts} = cartsObject;
//         console.log(carts);
//
//
//         for (const cart of carts) {
//             div = document.createElement("div")
//             div.classList.add('cart-container');
//             divWithInfo = document.createElement("div")
//             divWithInfo.innerText = `
//             "total": ${cart.total},
//             "discountedTotal": ${cart.discountedTotal},
//             "userId": ${cart.userId},
//             "totalProducts": ${cart.totalProducts},
//             "totalQuantity" ${cart.totalQuantity}
//             `
//
//             const ol = document.createElement("ol")
//             for (const product of cart.products) {
//                 const li = document.createElement("li")
//                 const info = document.createElement("p")
//                 info.innerText = `
//                     "id": ${product.id},
//                     "price": ${product.price},
//                     "quantity": ${product.quantity},
//                     "total": ${product.total},
//                     "discountedPercentage": ${product.discountedPercentage},
//                     "discountedTotal": ${product.discountedTotal},
//                     `
//                 const img = document.createElement('img');
//                 img.src = product.thumbnail
//                 li.append(img, info)
//                 ol.appendChild(li)
//             }
//
//             div.append(divWithInfo, ol)
//             cartsDiv.appendChild(div)
//         }
//
//
//
//     })
