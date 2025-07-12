fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(cartsObject => {
        const {recipes} = cartsObject;
        console.log(recipes);


        const card_obj = document.getElementById("card_obj");

        for (const recipe of recipes) {
            const cardsContainer = document.createElement("div");
            cardsContainer.classList.add("cardsContainer");


            const recipeDiv = document.createElement("div");
            recipeDiv.classList.add("recipeContainer");
            recipeDiv.innerText = `
            id: ${recipe.id},
            name: ${recipe.name},
            caloriesPerServing: ${recipe.caloriesPerServing},
            cookTimeMinutes: ${recipe.cookTimeMinutes},
            cuisine: ${recipe.cuisine},
            difficulty: ${recipe.difficulty},
            prepTimeMinutes: ${recipe.prepTimeMinutes},
            rating: ${recipe.rating},
            reviewCount: ${recipe.reviewCount},
            servings: ${recipe.servings},
            `


            const img = document.createElement("img");
            img.classList.add("recipeImg");
            img.src = recipe.image;


            const ul = document.createElement('ul')
            for (const ing_obj of recipe.ingredients) {
                const li = document.createElement("li");
                li.classList.add("recipeContainer");
                li.innerText = `${ing_obj}`

                ul.appendChild(li)


            }

            recipeDiv.appendChild(ul);
            cardsContainer.append(img, recipeDiv);
            card_obj.appendChild(cardsContainer);
        }
























    })


