import {recipes} from '../data/recipes.js'
import Recipe from './Recipe.js'
import Search from './Search.js'
import {dropdownListener} from './filter.js'
import {elementClick} from "./filter.js"
import {searchBarRecipes} from './filter.js'

// Variables
let arrayRecipes = []
const search = new Search(arrayRecipes)
const searchRecipe = document.getElementById("searchRecipe")
const formControls = document.querySelectorAll(".form-control")


for (const recipe of recipes) {
    arrayRecipes.push(new Recipe(recipe))
}

for (const formControl of formControls) {
    search.deleteSuggestion(formControl)
}


// Functions
search.compareValue()

searchBarRecipes(searchRecipe, search)

dropdownListener("Ingredient", search, searchRecipe)

dropdownListener("Appliance", search, searchRecipe)

dropdownListener("Ustensil", search, searchRecipe)

elementClick("Ingredient", search)

elementClick("Appliance", search)

elementClick("Ustensil", search)