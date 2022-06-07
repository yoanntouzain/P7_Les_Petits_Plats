export default class Search {
    constructor(recipes) {
        this.recipes = recipes;
        this.searchRecipeValue = ""
        this.searchIngredientValue = ""
        this.searchApplianceValue = ""
        this.searchUstensilValue = ""
        this.vignetteRecette = document.querySelector(".vignette-recette")
        this.searchRecipe = document.querySelector("#searchRecipe")
        this.searchIngredient = document.querySelector("#searchIngredient")
        this.searchAppliance = document.querySelector("#searchAppliance")
        this.searchUstensil = document.querySelector("#searchUstensil")
        this.menuItemIngredient = document.querySelector("#menuItemIngredient")
        this.menuItemAppliance = document.querySelector("#menuItemAppliance")
        this.menuItemUstensil = document.querySelector("#menuItemUstensil")
        this.resultRecipes = new Set()
        this.name = new Set()
        this.ingredients = new Set()
        this.description = new Set()
        this.appliance = new Set()
        this.ustensils = new Set()
        this.storageRecipes = []
        this.allValueTagIngredients = []
        this.allValueTagAppliances = []
        this.allValueTagUstensils = []
    }

    compareValue() {
        this.searchRecipeValue = this.searchRecipe.value.toLocaleLowerCase().trim()
        this.searchIngredientValue = this.searchIngredient.value.toLocaleLowerCase().trim()
        this.searchApplianceValue = this.searchAppliance.value.toLocaleLowerCase().trim()
        this.searchUstensilValue = this.searchUstensil.value.toLocaleLowerCase().trim()

        //Condition concernant la barre de recherche des recettes
        if (this.searchRecipeValue != undefined && this.searchRecipeValue.length > 2) {
            console.log("il y a un filtre recipe actif")
            this.compareFilterRecipe(this.searchRecipeValue)
        }else{
            this.resultRecipes = new Set(this.recipes)

            if (this.searchIngredientValue != undefined && this.searchIngredientValue.length > 2) {
                console.log("Condition input ingrédient valide")
                this.compareFilterIngredient(this.searchIngredientValue)
            }

            if(this.searchApplianceValue != undefined && this.searchApplianceValue.length > 2) {
                console.log("Condition input appareil valide")
                this.compareFilterAppliance(this.searchApplianceValue)
            }

            if(this.searchUstensilValue != undefined && this.searchUstensilValue.length > 2) {
                console.log("Condition input ustensil valide")
                this.compareFilterUstensil(this.searchUstensilValue)
            }
        }

        this.compareTag()

        this.resultRecipes.forEach(recipe => {

            this.appliance.add(recipe.appliance.toLocaleLowerCase())

            recipe.ingredients.forEach(ing => {
                this.ingredients.add(ing.ingredient.toLocaleLowerCase())
            })

            recipe.ustensils.forEach(ustensil => {
                this.ustensils.add(ustensil.toLocaleLowerCase())
            })
        })

        this.displayIngredients()
        this.displayAppliances()
        this.displayUstensils()
        this.displayRecipes()
        this.clearSet(this.ingredients)
        this.clearSet(this.appliance)
        this.clearSet(this.ustensils)
    }

    // Filtre les recettes en comparants la valeur des noms, ou des ingrédients, ou des description des recettes incluant la valeur saisie
    compareFilterRecipe(searchRecipeValue) {
        this.clearSet(this.resultRecipes)
        this.recipes.forEach(recipe => {
            if (recipe.hasName(searchRecipeValue) || recipe.hasIngredient(searchRecipeValue) || recipe.hasDescription(searchRecipeValue)) {
                this.resultRecipes.add(recipe)
            }
        })
        console.log(this.resultRecipes);
    }

    // Compare les tags afficher
    compareTag() {
        const tags = document.querySelectorAll(".tag")
        this.storageRecipes = [...this.resultRecipes];
        this.searchIngredientValue = ""
        this.searchApplianceValue = ""
        this.searchApplianceValue = ""
        if (tags.length != 0) {
            this.clearSet(this.resultRecipes)
            
            this.storageRecipes.forEach(recipe => {
                if (recipe.containIngredients(this.allValueTagIngredients) &&
                    recipe.containAppliances(this.allValueTagAppliances) &&
                    recipe.containUstensils(this.allValueTagUstensils)) {
                    this.resultRecipes.add(recipe)
                }
            })
        } else {
            console.log("aucune tag");
        }
    }

    // Filtre les recettes par rapport au ingredients
    compareFilterIngredient(searchIngredientValue) {
        this.clearSet(this.ingredients)
        this.storageRecipes = [...this.resultRecipes]
        this.clearSet(this.resultRecipes)

        this.storageRecipes.forEach(recipe => {
            recipe.ingredients.forEach(ing => {
                if (ing.ingredient.toLocaleLowerCase().includes(searchIngredientValue)) {
                    this.ingredients.add(ing.ingredient.toLocaleLowerCase())
                    this.resultRecipes.add(recipe)
                }
            })
        })
        console.log(this.ingredients)
        this.storageRecipes.splice()
    }

    // Filtre les recettes par rapport au appliance
    compareFilterAppliance(searchApplianceValue) {
        this.clearSet(this.appliance)
        this.storageRecipes = [...this.resultRecipes]
        this.clearSet(this.resultRecipes)

        this.storageRecipes.forEach(recipe => {
            if (recipe.appliance.toLocaleLowerCase().includes(searchApplianceValue)) {
                this.appliance.add(recipe.appliance.toLocaleLowerCase())
                this.resultRecipes.add(recipe)
            }
        })
        console.log(this.appliance)
        this.storageRecipes.splice()
    }

    // Filtre les recettes par rapport au ustensil
    compareFilterUstensil(searchUstensilValue) {
        this.clearSet(this.ustensils)
        this.storageRecipes = [...this.resultRecipes]
        this.clearSet(this.resultRecipes)

        this.storageRecipes.forEach(recipe => {
            recipe.ustensils.forEach(ustensil => {
                if (ustensil.toLocaleLowerCase().includes(searchUstensilValue)) {
                    this.ustensils.add(ustensil)
                    this.resultRecipes.add(recipe)
                }
            })
        })
        console.log(this.ustensils)
        this.storageRecipes.splice()
    }

    // Affiche les recettes
    displayRecipes() {
        this.vignetteRecette.innerHTML = ""
        if (this.resultRecipes.size != 0) {
            this.resultRecipes.forEach(recipe => {
                this.vignetteRecette.appendChild(recipe.createCard())
            })
        } else {
            this.vignetteRecette.innerHTML = `« Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc.`
        }
    }


    // Affiche les ingrédients dans le menu déroulant ingrédient
    displayIngredients() {
        this.menuItemIngredient.innerHTML = ""
        if (this.ingredients.size != 0) {
            this.ingredients.forEach(ing => {
            const list = document.createElement('div')
            list.setAttribute('class', 'col-2 mb-2 ml-5 mr-5')
            list.innerHTML =
            `<button type="button" id="${ing.toLocaleLowerCase()}" class="ingredient btn btn-transparant text-white">${ing.toLocaleLowerCase()}</button>`
            this.menuItemIngredient.appendChild(list)
            })
        }else {
            this.menuItemIngredient.innerHTML = `<p class="ml-3 mr-3 mt-3">Aucun ingrédient ne correspond à votre critère… Vous pouvez chercher « coco », « poisson », etc</p>`
        }
    }

    // Affiche les appareils dans le menu déroulant appareil
    displayAppliances() {
        this.menuItemAppliance.innerHTML = ""
        if (this.appliance.size != 0) {
            this.appliance.forEach(appliance => {
                const list = document.createElement('div')
                list.setAttribute('class', 'col-2 mb-2 ml-5 mr-5')
                list.innerHTML =
                `<button type="button" id="${appliance.toLocaleLowerCase()}" class="appliance btn btn-transparant text-white">${appliance.toLocaleLowerCase()}</bouton>`
                this.menuItemAppliance.appendChild(list)
            })
        } else {
                this.menuItemAppliance.innerHTML = `<p class="ml-3 mr-3 mt-3">Aucun appareil ne correspond à votre critère… Vous pouvez chercher « four », « mixer », etc</p>`
        }
    }

    // Affiche les ustensils dans le menu déroulant ustensil
    displayUstensils() {
        this.menuItemUstensil.innerHTML = ""
        if (this.ustensils.size != 0) {
            this.ustensils.forEach(ustensil => {
                    const list = document.createElement('div')
                    list.setAttribute('class', 'col-2 mb-2 ml-5 mr-5')
                    list.innerHTML =
                    `<button type="button" id="${ustensil.toLocaleLowerCase()}" class="ustensil btn btn-transparant text-white">${ustensil.toLocaleLowerCase()}</bouton>`
                        this.menuItemUstensil.appendChild(list)
                })
        } else {
            this.menuItemUstensil.innerHTML = `<p class="ml-3 mr-3 mt-3">Aucun ingrédient ne correspond à votre critère… Vous pouvez chercher « fouet », « louche », etc</p>`
        }
    }

    // Permet de vider toute instance contenant l'objet new Set
    clearSet(element){
        if (element.size != 0) {
            element.clear()
            return element
        }
    }

    //Permet de désactiver les suggestions
    deleteSuggestion(element) {
        if (element != null) {
            element.setAttribute("autocomplete", "off")
            return true
        }
        return false
    }
}