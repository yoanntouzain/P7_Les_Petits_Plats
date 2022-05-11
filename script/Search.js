export default class Search {
    constructor(recipes) {
        this.recipes = recipes;
        this.searchRecipeValue = ""
        this.vignetteRecette = document.querySelector(".vignette-recette")
        this.menuItemIngredient = document.querySelector("#menuItemIngredient")
        this.menuItemAppliance = document.querySelector("#menuItemAppliance")
        this.menuItemUstensil = document.querySelector("#menuItemUstensil")
        this.name = new Set()
        this.ingredients = new Set()
        this.description = new Set()
        this.appliance = new Set()
        this.ustensils = new Set()
    }

    compareValue(searchRecipeValue) {
        this.searchRecipeValue = searchRecipeValue
        if (this.searchRecipeValue != undefined) {
            if (this.searchRecipeValue.length > 2) {
                console.log("Condition input recette valide")
                this.compareFiltre(searchRecipeValue)
            }else{
                console.log("Entre min 3 caractères")
                this.vignetteRecette.innerHTML = ""
                window.setTimeout(() => {
                    this.resetSet(this.ingredients)
                    this.resetSet(this.appliance)
                    this.resetSet(this.ustensils)
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
                },300)
            }

        } else {
            console.log("Condition input recette invalide")
            this.vignetteRecette.innerHTML = ""
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
        }

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

    compareFiltre(searchRecipeValue) {
        this.vignetteRecette.innerHTML = ""
        this.resetSet(this.ingredients)
        this.resetSet(this.name)
        this.resetSet(this.description)
        this.recipes.forEach(recipe => {
            recipe.ingredients.forEach(ingredient => {
                if (ingredient.ingredient.toLocaleLowerCase().includes(searchRecipeValue) ||
                recipe.name.toLocaleLowerCase().includes(searchRecipeValue) ||
                recipe.description.toLocaleLowerCase().includes(searchRecipeValue)) {
                    this.ingredients.add(recipe)
                    this.name.add(recipe)
                    this.description.add(recipe)
                }
                return false
            })
        })
        this.name.add(... this.description, ... this.ingredients)
        window.setTimeout(() => {
            this.name.forEach(recipe => {
                console.log(recipe);
                if (recipe != undefined) {
                    this.vignetteRecette.appendChild(recipe.createCard())
                }else {
                    this.vignetteRecette.innerHTML = `<p>Aucune recette ne correspond à votre critère… Vous pouvez chercher « tarte aux pommes », « poisson », etc</p>`
                }
            })
        },300)
    }

    // Permet de vider toute instance contenant l'objet new Set
    resetSet(element){
        if (element.size != 0) {
            element.clear()
            return element
        }
    }
}

