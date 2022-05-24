import {recipes} from '../data/recipes.js'
import Recipe from './Recipe.js'
import Search from './Search.js'
import {createTagButton} from "./button.js";
import {closeTagButton} from "./button.js";


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
        searchIngredient.addEventListener("keyup", function() {
            search.compareValue()
        })
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
        searchAppliance.addEventListener("keyup", function() {
            search.compareValue()
        })
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
        searchUstensil.addEventListener("keyup", function() {
            search.compareValue()
        })
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

let arrayRecipes = []
recipes.forEach(recipe => {
    arrayRecipes.push(new Recipe(recipe))
})

const search = new Search(arrayRecipes)
search.compareValue()



const searchRecipe = document.getElementById("searchRecipe")

searchRecipe.addEventListener("keyup", function() {
    search.compareValue()
})


const menuItemIngredient = document.getElementById("menuItemIngredient")

menuItemIngredient.addEventListener("click", function(event) {
    search.deleteSuggestion(searchIngredient)
    const valueIngredient = event.target.id
    const typeFiltre = "ingredient"
    createTagButton(valueIngredient, typeFiltre)
    search.compareValue()
    closeTagButton(search)
})

const menuItemAppliance = document.getElementById("menuItemAppliance")

menuItemAppliance.addEventListener("click", function(event) {
    search.deleteSuggestion(searchAppliance)
    const valueAppliance = event.target.id
    const typeFiltre = "appliance"
    createTagButton(valueAppliance, typeFiltre)
    search.compareValue()
    closeTagButton(search)
})

const menuItemUstensil = document.getElementById("menuItemUstensil")

menuItemUstensil.addEventListener("click", function(event) {
    search.deleteSuggestion(searchUstensil)
    const valueUstensil = event.target.id
    const typeFiltre = "ustensil"
    createTagButton(valueUstensil, typeFiltre)
    search.compareValue()
    closeTagButton(search)
})
