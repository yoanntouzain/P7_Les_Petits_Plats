export default class Search {
    constructor(recipes) {
        this.recipes = recipes;
        this.searchRecipeValue = ""
        this.searchIngredientValue = ""
        this.vignetteRecette = document.querySelector(".vignette-recette")
        this.menuItemIngredient = document.querySelector("#menuItemIngredient")
        this.searchIngredient = document.querySelector("#searchIngredient")
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
                console.log(this.searchRecipeValue);
                this.compareFilterRecipe(searchRecipeValue)
                // fonction pour les tags
            }else{
                console.log("Entre min 3 caractères")
                this.vignetteRecette.innerHTML = ""
                window.setTimeout(() => {
                    this.clearSet(this.ingredients)
                    this.clearSet(this.appliance)
                    this.clearSet(this.ustensils)
                    this.recipes.forEach(recipe => {
                        this.vignetteRecette.appendChild(recipe.createCard())
        
                        recipe.ingredients.forEach(ingredient => {
                            this.ingredients.add(ingredient.ingredient.toLocaleLowerCase())
                        })
        
                        this.appliance.add(recipe.appliance.toLocaleLowerCase())
        
                        recipe.ustensils.forEach(ustensils => {
                            this.ustensils.add(ustensils.toLocaleLowerCase())
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
                    this.ingredients.add(ingredient.ingredient.toLocaleLowerCase())
                })

                this.appliance.add(recipe.appliance.toLocaleLowerCase())

                recipe.ustensils.forEach(ustensils => {
                    this.ustensils.add(ustensils.toLocaleLowerCase())
                })
            })
        }

        this.displayIngredients()
        this.displayAppliance()
        this.displayUstensil()
    }

    // Affiche les ingrédients dans le button ingrédient
    displayIngredients() {
        this.menuItemIngredient.innerHTML = ""
        this.ingredients.forEach(ingredient => {
            const list = document.createElement('div')
            list.setAttribute('class', 'col-2 mb-2 ml-5 mr-5')
            list.innerHTML =
            `<p id="${ingredient}" class="ingredient">${ingredient}</p>`
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

    // Filtre les recettes en comparants la valeur des noms, ou des ingrédients, ou des description des recettes incluant la valeur saisie
    compareFilterRecipe(searchRecipeValue) {
        this.vignetteRecette.innerHTML = ""
        this.clearSet(this.ingredients)
        this.clearSet(this.name)
        this.clearSet(this.description)
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

    // Regarde si le filtre de la barre de recherche principale est appliqué ou non et filtre les ingredients selon les critères appliqués
    targetValueIngredient(searchIngredientValue) {
        if (this.searchRecipeValue === undefined || this.searchRecipeValue < 2) {
            console.log("Il y a aucune recette rechercher")
            if (searchIngredientValue != undefined) {
                this.searchIngredientValue = searchIngredientValue
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
            // filtrer les ingredients par rapport au recette afficher
        }
    }

    // Filtre les recettes par rapport au ingredients
    compareFilterIngredient(searchIngredientValue) {
        this.menuItemIngredient.innerHTML = ""
        this.clearSet(this.ingredients)
        this.recipes.forEach(recipe => {
            recipe.ingredients.forEach(ingredient => {
                if (ingredient.ingredient.toLocaleLowerCase().includes(searchIngredientValue)) {
                    this.ingredients.add(ingredient.ingredient.toLocaleLowerCase())
                }return false
            })
        })
        window.setTimeout(() => {
            if (this.ingredients.size != 0) {
                this.displayIngredients()
            }else {
                this.menuItemIngredient.innerHTML = `<p>Aucun ingrédient ne correspond à votre critère… Vous pouvez chercher « coco », « poisson », etc</p>`
            }
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

