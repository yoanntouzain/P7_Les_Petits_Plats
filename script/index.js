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
        sizeBtnIngredient.classList.add("col-4")
        searchIngredient.classList.remove()
        searchIngredient.style.width = 92 + "%"
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
        sizeBtnIngredient.classList.remove("col-4")
        sizeBtnIngredient.classList.add("col-2")
        searchIngredient.style.width = 90 + "%"
    }
})

// Appareils
const dropdownAppareil = document.getElementById("dropdownAppareil")
const searchAppareil = document.getElementById("searchAppareil")
const menuAppareil = document.getElementById("menuAppareil")
const spaceUpAppareil = document.getElementById("spaceUpAppareil")
const arrowDownAppareil = document.getElementById("arrowDownAppareil")
const arrowUpAppareil = document.getElementById("arrowUpAppareil")

// Evenement
dropdownAppareil.addEventListener("click", function() {
    const spanAppareil = document.getElementById("spanAppareil")
    const searchAppareil = document.getElementById("searchAppareil")
    // Quand tu ouvre le menu
    if (menuAppareil.classList.contains("d-none")) {
        menuAppareil.classList.remove("d-none")
        menuAppareil.style.display = "block"
        spanAppareil.style.display = "none"
        searchAppareil.classList.remove("d-none")
        spaceUpAppareil.classList.add("d-none")
        arrowDownAppareil.classList.add("d-none")
        arrowUpAppareil.classList.remove("d-none")
        searchAppareil.focus()
    }
    // Quand tu ferme le menu
    else  {
        menuAppareil.classList.add("d-none")
        spanAppareil.style.display = "block"
        searchAppareil.classList.add("d-none")
        spaceUpAppareil.classList.remove("d-none")
        arrowDownAppareil.classList.remove("d-none")
        arrowUpAppareil.classList.add("d-none")
    }
})


//Ustensil
const dropdownUstensil = document.getElementById("dropdownUstensil")
const searchUstensil = document.getElementById("searchUstensil")
const menuUstensil = document.getElementById("menuUstensil")
const spaceUpUstensil = document.getElementById("spaceUpUstensil")
const arrowDownUstensil = document.getElementById("arrowDownUstensil")
const arrowUpUstensil = document.getElementById("arrowUpUstensil")


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
    }
})

class DetailRecipe {
    constructor() {
        this.vignetteRecette = document.querySelector(".vignette-recette")
        this.menuItemIngredient = document.querySelector("#menuItemIngredient")
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
        recipes
        .map(recipe => new Recipe(recipe))
        .forEach(recipe => {
            let listIngredient = ""
            recipe.ingredients.forEach(ingredient => {
                listIngredient += `${ingredient.ingredient}, `
            })
            const Template = new Recipe(recipe)
            this.menuItemIngredient.appendChild(Template.createListIngredient(listIngredient))
        })
    }
}

// Permet d'afficher toutes les recettes
const listRecipe = new DetailRecipe()
listRecipe.displayRecette()


// Permet d'afficher tous les ingrédients dans le bouton filtre ingrédient
const listIngredient = new DetailRecipe()
listIngredient.displayIngredient()