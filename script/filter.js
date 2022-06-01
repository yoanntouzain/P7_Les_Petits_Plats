import {createTagButton} from "./button.js";

//Event recipes
export function searchBarRecipes(searchRecipe, searchClass) {
    searchRecipe.addEventListener("keyup", function() {
        searchClass.compareValue()
    })
}

export function dropdownListener(type, searchClass, searchRecipe) {

    // Variables
    const dropdown = document.getElementById("dropdown"+type)
    const menu = document.getElementById("menu"+type)
    const spaceUp = document.getElementById("spaceUp"+type)
    const arrowDown = document.getElementById("arrowDown"+type)
    const arrowUp = document.getElementById("arrowUp"+type)
    const sizeBtn = document.getElementById("sizeBtn"+type)
    const escape = " "
    
    
    // Event
    dropdown.addEventListener("click", function() {
        const span = document.getElementById("span"+type)
        const search = document.getElementById("search"+type)
        // Quand tu ouvre le menu
        if (menu.classList.contains("d-none")) {
            menu.classList.remove("d-none")
            menu.style.display = "block"
            span.style.display = "none"
            search.classList.remove("d-none")
            spaceUp.classList.add("d-none")
            arrowDown.classList.add("d-none")
            arrowUp.classList.remove("d-none")
            sizeBtn.classList.remove("col-2")
            sizeBtn.classList.add("col-6")
            search.classList.remove()
            search.style.width = 95 + "%"
            search.focus()
            switch (type) {
                case "Ingredient":
                    console.log(type);
                    search.addEventListener("keyup", function(event) {
                        const searchRecipeValue = searchRecipe.value.toLocaleLowerCase().trim()
                        const searchValue = event.target.value.toLocaleLowerCase().trim()
                        if (event.key === escape){
                            event.preventDefault()
                        }
                        if (searchRecipeValue != undefined && searchRecipeValue.length > 2) {
                            console.log(searchRecipeValue);
                            searchClass.compareFilterIngredient(searchValue)
                            searchClass.displayIngredients()
                        }else {
                            console.log("recette vide");
                            console.log(searchRecipeValue);
                            if (searchValue.length > 2) {
                                searchClass.compareFilterIngredient(searchValue)
                                searchClass.displayIngredients()
                            }
                        }
                    })
                break

                case "Appliance":
                    console.log(type);
                    search.addEventListener("keyup", function(event) {
                        const searchValue = event.target.value.toLocaleLowerCase().trim()
                        if (event.key === escape){
                            event.preventDefault()
                        }
                        if (searchValue.length > 2) {
                            searchClass.compareFilterAppliance(searchValue)
                            searchClass.displayAppliances()
                        }
                    })
                break

                case "Ustensil":
                    console.log(type);
                    search.addEventListener("keyup", function(event) {
                        const searchValue = event.target.value.toLocaleLowerCase().trim()
                        if (event.key === escape){
                            event.preventDefault()
                        }
                        if (searchValue.length > 2) {
                            searchClass.compareFilterUstensil(searchValue)
                            searchClass.displayUstensils()
                        }
                    })
                break
            }
        }
        // Quand tu ferme le menu
        else  {
            menu.classList.add("d-none")
            span.style.display = "block"
            search.classList.add("d-none")
            spaceUp.classList.remove("d-none")
            arrowDown.classList.remove("d-none")
            arrowUp.classList.add("d-none")
            sizeBtn.classList.remove("col-6")
            sizeBtn.classList.add("col-2")
            search.style.width = 90 + "%"
        }
    })
}

export function elementClick(type, searchClass) {
    
    // Variables
    const menuItem = document.getElementById("menuItem"+type)
    
    // Event
    menuItem.addEventListener("click", function(event) {
        const value = event.target.id
        const typeFiltre = type.toLocaleLowerCase()
        let button = createTagButton(value, typeFiltre)
        switch (type) {
            case "Ingredient":
                button.addEventListener("click", () => {
                    console.log("button ingredient");
                    let index = searchClass.allValueTagIngredients.indexOf(value)
                    searchClass.allValueTagIngredients.splice(index, 1)
                    searchClass.compareValue()
                    button.remove()
                })
                searchClass.allValueTagIngredients.push(value)
                searchClass.compareValue()
                
                break;

            case "Appliance":
                button.addEventListener("click", () => {
                    console.log("button appliance");
                    let index = searchClass.allValueTagAppliances.indexOf(value)
                    searchClass.allValueTagAppliances.splice(index, 1)
                    searchClass.compareValue()
                    button.remove()
                })
                searchClass.allValueTagAppliances.push(value)
                searchClass.compareValue()
                
                break;

            case "Ustensil":
                button.addEventListener("click", () => {
                    console.log("button ustensil");
                    let index = searchClass.allValueTagUstensils.indexOf(value)
                    searchClass.allValueTagUstensils.splice(index, 1)
                    searchClass.compareValue()
                    button.remove()
                })
                searchClass.allValueTagUstensils.push(value)
                searchClass.compareValue()
                
                break;
        }
        searchClass.compareValue()
    })
}