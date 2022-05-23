export default class Search {
    constructor(recipes) {
        this.recipes = recipes;
        this.searchRecipeValue = ""
        this.searchIngredientValue = ""
        this.vignetteRecette = document.querySelector(".vignette-recette")
        this.searchRecipe = document.querySelector("#searchRecipe")
        this.searchIngredient = document.querySelector("#searchIngredient")
        this.menuItemIngredient = document.querySelector("#menuItemIngredient")
        this.searchIngredient = document.querySelector("#searchIngredient")
        this.menuItemAppliance = document.querySelector("#menuItemAppliance")
        this.menuItemUstensil = document.querySelector("#menuItemUstensil")
        this.resultRecipes = new Set()
        this.name = new Set()
        this.ingredients = new Set()
        this.description = new Set()
        this.appliance = new Set()
        this.ustensils = new Set()
    }

    compareValue() {
        this.searchRecipeValue = this.searchRecipe.value.toLocaleLowerCase().trim()
        this.searchIngredientValue = this.searchIngredient.value.toLocaleLowerCase().trim()
        console.log(this.searchIngredient.value);

        ///////// Pour filtrer avec le nom ou la description ou les ingrédients
        if (this.searchRecipeValue != undefined && this.searchRecipeValue.length > 2) {
            console.log("il y a un filtre recipe actif")
                this.compareFilterRecipe(this.searchRecipeValue)
        }else{
            this.resultRecipes = new Set(this.recipes)
        }
        this.compareTag()
        // this.targetValueIngredient()
        this.displayRecipe()
        this.displayIngredients()
        this.displayAppliance()
        this.displayUstensil()
    }

    // Filtre les recettes en comparants la valeur des noms, ou des ingrédients, ou des description des recettes incluant la valeur saisie
    compareFilterRecipe(searchRecipeValue) {
        this.vignetteRecette.innerHTML = ""
        this.clearSet(this.resultRecipes)
        this.recipes.forEach(recipe => {
            if (recipe.hasName(searchRecipeValue) || recipe.hasIngredient(searchRecipeValue) || recipe.hasDescription(searchRecipeValue)) {
                this.resultRecipes.add(recipe)
            }
        })
    }

    compareTag() {
        this.resultRecipes.forEach(recipe => {
            console.log(recipe);
            //comparer les tags
        })
    }


    // Affiche les ingrédients dans le button ingrédient
    displayIngredients() {
        this.menuItemIngredient.innerHTML = ""
        this.ingredients.forEach(ingredient => {
            const list = document.createElement('div')
            list.setAttribute('class', 'col-2 mb-2 ml-5 mr-5')
            list.innerHTML =
            `<button type="button" id="${ingredient}" class="ingredient btn btn-transparant">${ingredient}</button>`
            this.menuItemIngredient.appendChild(list) 
        })
    }

    // Affiche les appareils dans le button appareil
    displayAppliance() {
        this.menuItemAppliance.innerHTML = ""
        this.appliance.forEach(appliance => {
            const list = document.createElement('div')
            list.setAttribute('class', 'col-2 mb-2 ml-5 mr-5')
            list.innerHTML =
            `<p id="${appliance}" class="appliance">${appliance}</p>`
            this.menuItemAppliance.appendChild(list)
        })
    }

    // Affiche les ustensils dans le button ustensil
    displayUstensil() {
        this.menuItemUstensil.innerHTML = ""
        this.ustensils.forEach(ustensil => {
            const list = document.createElement('div')
            list.setAttribute('class', 'col-2 mb-2 ml-5 mr-5')
            list.innerHTML =
            `<p id="${ustensil}" class="ustensil">${ustensil}</p>`
                this.menuItemUstensil.appendChild(list) 
        })
    }

    // Regarde si le filtre de la barre de recherche principale est appliqué ou non et filtre les ingredients selon les critères appliqués
    targetValueIngredient() {
        if (this.searchRecipeValue === undefined || this.searchRecipeValue.length < 3) {
            console.log("Il y a aucune recette rechercher")
            if (this.searchIngredientValue != undefined) {
                console.log(this.searchIngredientValue);
                if(this.searchIngredientValue.length > 2) {
                    console.log("Condition input ingredient valide")
                    this.compareFilterIngredient(this.searchIngredientValue)
                }else {
                    this.menuItemIngredient.innerHTML = `<p>Minimum 3 caractères</p>`
                }
            } return false
        }else{
            console.log("La barre de recherche principale à deja appliquer un filtre")
            console.log(this.ingredients);
            console.log(this.searchIngredientValue);
            // filtrer les ingredients par rapport au recette afficher
        }
    }

    // Filtre les recettes par rapport au ingredients
    compareFilterIngredient(searchIngredientValue) {
        console.log(this.resultRecipes)
        this.menuItemIngredient.innerHTML = ""
        this.vignetteRecette.innerHTML = ""
        this.clearSet(this.ingredients)
        this.recipes.forEach(recipe => {
            recipe.ingredients.forEach(ingredient => {
                if (ingredient.ingredient.toLocaleLowerCase().includes(searchIngredientValue)) {
                    this.ingredients.add(ingredient.ingredient.toLocaleLowerCase())
                    this.resultRecipes.add(recipe)
                    // this.vignetteRecette.appendChild(recipe.createCard())
                }return false
            })
        })
        window.setTimeout(() => {
            if (this.ingredients.size != 0) {
                console.log(this.ingredients);
                this.displayIngredients()
            }else {
                this.menuItemIngredient.innerHTML = `<p>Aucun ingrédient ne correspond à votre critère… Vous pouvez chercher « coco », « poisson », etc</p>`
            }
            this.displayRecipe()
        },300)
    }

    // Regarde si le filtre de la barre de recherche principale est appliqué ou non et filtre les appareils selon les critères appliqués
    targetValueAppliance(searchApplianceValue) {
        if (this.searchRecipeValue === undefined || this.searchRecipeValue < 2) {
            console.log("Il y a aucune recette rechercher")
            if (searchApplianceValue != undefined) {
                this.searchApplianceValue = searchApplianceValue
                console.log(this.searchApplianceValue);
                if(this.searchApplianceValue.length > 2) {
                    console.log("Condition input appareil valide")
                    this.compareFilterAppliance(this.searchApplianceValue)
                }else {
                    this.menuItemAppliance.innerHTML = `<p>Minimum 3 caractères</p>`
                }
            } return false
        }else{
            console.log("La barre de recherche principale à deja appliquer un filtre")
            // filtrer les appareils par rapport au recette afficher
        }
    }

    // Filtre les recettes par rapport au appliance
    compareFilterAppliance(searchApplianceValue) {
        this.menuItemAppliance.innerHTML = ""
        this.clearSet(this.appliance)
        this.recipes.forEach(recipe => {
            if (recipe.appliance.toLocaleLowerCase().includes(searchApplianceValue)) {
                this.appliance.add(recipe.appliance.toLocaleLowerCase())
            }return false
        })
        window.setTimeout(() => {
            if (this.appliance.size != 0) {
                this.displayAppliance()
            }else {
                this.menuItemAppliance.innerHTML = `<p>Aucun appareil ne correspond à votre critère… Vous pouvez chercher « four », « blender », etc</p>`
            }
        },300)
    }

    // Regarde si le filtre de la barre de recherche principale est appliqué ou non et filtre les ustensil selon les critères appliqués
    targetValueUstensil(searchUstensilValue) {
        if (this.searchRecipeValue === undefined || this.searchRecipeValue < 2) {
            console.log("Il y a aucune recette rechercher")
            if (searchUstensilValue != undefined) {
                this.searchUstensilValue = searchUstensilValue
                console.log(this.searchUstensilValue);
                if(this.searchUstensilValue.length > 2) {
                    console.log("Condition input ustensil valide")
                    this.compareFilterUstensil(this.searchUstensilValue)
                }else {
                    this.menuItemUstensil.innerHTML = `<p>Minimum 3 caractères</p>`
                }
            } return false
        }else{
            console.log("La barre de recherche principale à deja appliquer un filtre")
            // filtrer les ustensil par rapport au recette afficher
        }
    }

    // Filtre les recettes par rapport au ustensil
    compareFilterUstensil(searchUstensilValue) {
        this.menuItemUstensil.innerHTML = ""
        this.clearSet(this.ustensils)
        this.recipes.forEach(recipe => {
            recipe.ustensils.forEach(ustensil => {
                if (ustensil.toLocaleLowerCase().includes(searchUstensilValue)) {
                    this.ustensils.add(ustensil.toLocaleLowerCase())
                }return false
            })
        })
        window.setTimeout(() => {
            if (this.ustensils.size != 0) {
                this.displayUstensil()
            }else {
                this.menuItemUstensil.innerHTML = `<p>Aucun ustensil ne correspond à votre critère… Vous pouvez chercher « fouet », « verre », etc</p>`
            }
        },300)
    }

    displayRecipe() {
        if (this.resultRecipes.size != 0) {
            this.resultRecipes.forEach(recipe => {
                this.vignetteRecette.appendChild(recipe.createCard())
            })
        } else {
            console.log("Il n'y a aucune recette");
        }
    }


    // Permet de vider toute instance contenant l'objet new Set
    addSet(element) {
        if (element.size != 0) {
            this.name.add(...element)
        }
    }

    // Permet de vider toute instance contenant l'objet new Set
    clearSet(element){
        if (element.size != 0) {
            element.clear()
            return element
        }
    }
}