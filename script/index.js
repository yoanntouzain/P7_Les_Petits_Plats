import {recipes} from '../data/recipes.js'
import Recipe from './Recipe.js'


//Ingrédients
const dropdownIngredient = document.getElementById("dropdownIngredient")
const menuIngredient = document.getElementById("menuIngredient")
const spaceUpIngredient = document.getElementById("spaceUpIngredient")
const arrowDownIngredient = document.getElementById("arrowDownIngredient")
const arrowUpIngredient = document.getElementById("arrowUpIngredient")
const sizeBtnIngredient = document.getElementById("sizeBtnIngredient")


// Evenement
dropdownIngredient.addEventListener("click", function() {
    const spanIngredient = document.getElementById("spanIngredient")
    const searchIngredient = document.getElementById("searchIngredient")
    // Quand tu ouvre le menu
    if (menuIngredient.classList.contains("d-none")) {
        menuIngredient.classList.remove("d-none")
        menuIngredient.style.display = "block"
        spanIngredient.style.display = "none"
        searchIngredient.classList.remove("d-none")
        spaceUpIngredient.classList.add("d-none")
        arrowDownIngredient.classList.add("d-none")
        arrowUpIngredient.classList.remove("d-none")
        sizeBtnIngredient.classList.remove("col-2")
        sizeBtnIngredient.classList.add("col-6")
        searchIngredient.classList.remove()
        searchIngredient.style.width = 95 + "%"
        searchIngredient.focus()
    }
    // Quand tu ferme le menu
    else  {
        menuIngredient.classList.add("d-none")
        spanIngredient.style.display = "block"
        searchIngredient.classList.add("d-none")
        spaceUpIngredient.classList.remove("d-none")
        arrowDownIngredient.classList.remove("d-none")
        arrowUpIngredient.classList.add("d-none")
        sizeBtnIngredient.classList.remove("col-6")
        sizeBtnIngredient.classList.add("col-2")
        searchIngredient.style.width = 90 + "%"
    }
})

// Appareils
const dropdownAppliance = document.getElementById("dropdownAppliance")
const menuAppliance = document.getElementById("menuAppliance")
const spaceUpAppliance = document.getElementById("spaceUpAppliance")
const arrowDownAppliance = document.getElementById("arrowDownAppliance")
const arrowUpAppliance = document.getElementById("arrowUpAppliance")
const sizeBtnAppliance = document.getElementById("sizeBtnAppliance")

// Evenement
dropdownAppliance.addEventListener("click", function() {
    const spanAppliance = document.getElementById("spanAppliance")
    const searchAppliance = document.getElementById("searchAppliance")
    // Quand tu ouvre le menu
    if (menuAppliance.classList.contains("d-none")) {
        menuAppliance.classList.remove("d-none")
        menuAppliance.style.display = "block"
        spanAppliance.style.display = "none"
        searchAppliance.classList.remove("d-none")
        spaceUpAppliance.classList.add("d-none")
        arrowDownAppliance.classList.add("d-none")
        arrowUpAppliance.classList.remove("d-none")
        sizeBtnAppliance.classList.remove("col-2")
        sizeBtnAppliance.classList.add("col-6")
        searchAppliance.classList.remove()
        searchAppliance.style.width = 95 + "%"
        searchAppliance.focus()
    }
    // Quand tu ferme le menu
    else  {
        menuAppliance.classList.add("d-none")
        spanAppliance.style.display = "block"
        searchAppliance.classList.add("d-none")
        spaceUpAppliance.classList.remove("d-none")
        arrowDownAppliance.classList.remove("d-none")
        arrowUpAppliance.classList.add("d-none")
        sizeBtnAppliance.classList.add("col-2")
        sizeBtnAppliance.classList.remove("col-6")
        searchAppliance.style.width = 90 + "%"
    }
})


//Ustensil
const dropdownUstensil = document.getElementById("dropdownUstensil")
const menuUstensil = document.getElementById("menuUstensil")
const spaceUpUstensil = document.getElementById("spaceUpUstensil")
const arrowDownUstensil = document.getElementById("arrowDownUstensil")
const arrowUpUstensil = document.getElementById("arrowUpUstensil")
const sizeBtnUstensil = document.getElementById("sizeBtnUstensil")


// Evenement
dropdownUstensil.addEventListener("click", function() {
    const spanUstensil = document.getElementById("spanUstensil")
    const searchUstensil = document.getElementById("searchUstensil")
    // Quand tu ouvre le menu
    if (menuUstensil.classList.contains("d-none")) {
        menuUstensil.classList.remove("d-none")
        menuUstensil.style.display = "block"
        spanUstensil.style.display = "none"
        searchUstensil.classList.remove("d-none")
        spaceUpUstensil.classList.add("d-none")
        arrowDownUstensil.classList.add("d-none")
        arrowUpUstensil.classList.remove("d-none")
        sizeBtnUstensil.classList.remove("col-2")
        sizeBtnUstensil.classList.add("col-6")
        searchUstensil.classList.remove()
        searchUstensil.style.width = 95 + "%"
        searchUstensil.focus()
    }
    // Quand tu ferme le menu
    else  {
        menuUstensil.classList.add("d-none")
        spanUstensil.style.display = "block"
        searchUstensil.classList.add("d-none")
        spaceUpUstensil.classList.remove("d-none")
        arrowDownUstensil.classList.remove("d-none")
        arrowUpUstensil.classList.add("d-none")
        sizeBtnUstensil.classList.add("col-2")
        sizeBtnUstensil.classList.remove("col-6")
        searchUstensil.style.width = 90 + "%"
    }
})

class DetailRecipe {
    constructor() {
        this.vignetteRecette = document.querySelector(".vignette-recette")
        this.menuIngredient = document.querySelector("#menuIngredient")
        this.menuItemIngredient = document.querySelector("#menuItemIngredient")
        this.menuItemAppliance = document.querySelector("#menuItemAppliance")
        this.menuItemUstensil = document.querySelector("#menuItemUstensil")
    }

    displayRecette() {
       recipes
        .map(recipe => new Recipe(recipe))
        .forEach(recipe => {
            let listIngredient = ""
            recipe.ingredients.forEach(ingredient => {
                //condition: si ingredient.quantity à une valeur différente de undefined alors vérifie la condition suivante; sinon affiche uniquement la liste des ingrédients
                if (ingredient.quantity !== undefined) {
                    if (ingredient.unit != undefined) {
                        listIngredient +=
                        `<strong>${ingredient.ingredient}:</strong> ${ingredient.quantity} ${ingredient.unit}</br>`
                    }else{
                        listIngredient +=
                        `<strong>${ingredient.ingredient}:</strong> ${ingredient.quantity}</br>`
                    }
                }else {
                    listIngredient +=
                    `<strong>${ingredient.ingredient}</strong></br>`
                }
            })
            const Template = new Recipe(recipe)
            this.vignetteRecette.appendChild(Template.createCard(listIngredient))
        })
    }

    displayIngredient() {
        let arrayIngredientDuplicates = []
        recipes
        .map(recipe => new Recipe(recipe))
        .forEach(recipe => {
            recipe.ingredients.forEach(ingredient => {
                arrayIngredientDuplicates.push(ingredient.ingredient.toLocaleLowerCase())
            })
        })
        let arrayIngredients = [ ... new Set(arrayIngredientDuplicates)]
        arrayIngredients.forEach(ingredient => {
            const Template = new Recipe(ingredient)
            this.menuItemIngredient.appendChild(Template.createListIngredient(ingredient)) 
        })
    }

    displayAppliance() {
        let arrayApplianceDuplicates = []
        recipes
        .map(recipe => new Recipe(recipe))
        .forEach(recipe => {
            arrayApplianceDuplicates.push(recipe.appliance.toLocaleLowerCase())
        })
        let arrayAppliances = [ ... new Set(arrayApplianceDuplicates)]
        arrayAppliances.forEach(appliance => {
            const Template = new Recipe(appliance)
            this.menuItemAppliance.appendChild(Template.createListAppliance(appliance)) 
        })
    }

    displayUstensil() {
        let arrayUstensilDuplicates = []
        recipes
        .map(recipe => new Recipe(recipe))
        .forEach(recipe => {
            recipe.ustensils.forEach(ustensil => {
                arrayUstensilDuplicates.push(ustensil.toLocaleLowerCase())
            })
        })
        let arrayUstensils = [ ... new Set(arrayUstensilDuplicates)]
        arrayUstensils.forEach(ustensil => {
            const Template = new Recipe(ustensil)
            this.menuItemUstensil.appendChild(Template.createListUstensil(ustensil)) 
        })
    }
}

// Permet d'afficher toutes les recettes
const listRecipe = new DetailRecipe()
listRecipe.displayRecette()


// Permet d'afficher tous les ingrédients dans le bouton filtre ingrédient
const listIngredient = new DetailRecipe()
listIngredient.displayIngredient()

// Permet d'afficher tous les ingrédients dans le bouton filtre ingrédient
const listAppliance = new DetailRecipe()
listAppliance.displayAppliance()

// Permet d'afficher tous les ingrédients dans le bouton filtre ingrédient
const listUstensil = new DetailRecipe()
listUstensil.displayUstensil()