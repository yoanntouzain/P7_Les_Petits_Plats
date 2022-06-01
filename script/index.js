import {recipes} from '../data/recipes.js'
import Recipe from './Recipe.js'
import Search from './Search.js'
import {createTagButton} from "./button.js";
import {dropdownListener} from './filter.js'

let arrayRecipes = []
recipes.forEach(recipe => {
    arrayRecipes.push(new Recipe(recipe))
})

const search = new Search(arrayRecipes)
search.compareValue()


dropdownListener("Ingredient", search)

dropdownListener("Appliance", search)

dropdownListener("Ustensil", search)


const searchRecipe = document.getElementById("searchRecipe")

searchRecipe.addEventListener("keyup", function() {
    search.compareValue()
})


//ingredient
const menuItemIngredient = document.getElementById("menuItemIngredient")

menuItemIngredient.addEventListener("click", function(event) {
    search.deleteSuggestion(searchIngredient)
    const valueIngredient = event.target.id
    const typeFiltre = "ingredient"
    let button = createTagButton(valueIngredient, typeFiltre)
    button.addEventListener("click", () => {
        let index = search.allValueTagIngredients.indexOf(valueIngredient)
        search.allValueTagIngredients.splice(index, 1)
        search.compareValue()
        button.remove()
    })
    search.allValueTagIngredients.push(valueIngredient)
    search.compareValue()
})


//appliance
const menuItemAppliance = document.getElementById("menuItemAppliance")

menuItemAppliance.addEventListener("click", function(event) {
    search.deleteSuggestion(searchAppliance)
    const valueAppliance = event.target.id
    const typeFiltre = "appliance"
    let button = createTagButton(valueAppliance, typeFiltre)
    button.addEventListener("click", () => {
        let index = search.allValueTagAppliances.indexOf(valueAppliance)
        search.allValueTagAppliances.splice(index, 1)
        search.compareValue()
        button.remove()
    })
    search.allValueTagAppliances.push(valueAppliance)
    search.compareValue()
})

//ustensil
const menuItemUstensil = document.getElementById("menuItemUstensil")

menuItemUstensil.addEventListener("click", function(event) {
    search.deleteSuggestion(searchUstensil)
    const valueUstensil = event.target.id
    const typeFiltre = "ustensil"
    let button = createTagButton(valueUstensil, typeFiltre)

    button.addEventListener("click", () => {
        let index = search.allValueTagUstensils.indexOf(valueUstensil)
        search.allValueTagUstensils.splice(index, 1)
        search.compareValue()
        button.remove()
    })
    search.allValueTagUstensils.push(valueUstensil)
    search.compareValue()
})
