export default class Search {
    constructor(recipes) {
        this.recipes = recipes;
        this.searchRecetteValue = ""
        this.vignetteRecette = document.querySelector(".vignette-recette")
        this.menuItemIngredient = document.querySelector("#menuItemIngredient")
        this.menuItemAppliance = document.querySelector("#menuItemAppliance")
        this.menuItemUstensil = document.querySelector("#menuItemUstensil")
        this.ingredients = new Set()
        this.appliance = new Set()
        this.ustensils = new Set()
    }

    compareValue() {

        this.recipes.forEach(recipe => {
            this.vignetteRecette.appendChild(recipe.createCard())

            recipe.ingredients.forEach(ingredient => {
                this.ingredients.add(ingredient.ingredient)
            })

            this.appliance.add(recipe.appliance)

            recipe.ustensils.forEach(ustensils => {
                this.ustensils.add(ustensils)
            })
        })
        this.displayIngredients()
        this.displayAppliance()
        this.displayUstensil()
    }

    displayIngredients() {
        this.ingredients.forEach(ingredient => {
            const list = document.createElement('div')
            list.setAttribute('class', 'col-2 mb-2 ml-5 mr-5')
            list.innerHTML =
            `<p id="${ingredient}" class="ingredient">${ingredient}</p>`
            // let span = document.createElement("span")
            // span.textContent = ingredient
            this.menuItemIngredient.appendChild(list) 
        })
    }

    displayAppliance() {
        this.appliance.forEach(appliance => {
            const list = document.createElement('div')
            list.setAttribute('class', 'col-2 mb-2 ml-5 mr-5')
            list.innerHTML =
            `<p id="${appliance}" class="appliance">${appliance}</p>`
            this.menuItemAppliance.appendChild(list)
        })
    }

    displayUstensil() {
            this.ustensils.forEach(ustensil => {
            const list = document.createElement('div')
            list.setAttribute('class', 'col-2 mb-2 ml-5 mr-5')
            list.innerHTML =
            `<p id="${ustensil}" class="ustensil">${ustensil}</p>`
                this.menuItemUstensil.appendChild(list) 
        })
    }
}