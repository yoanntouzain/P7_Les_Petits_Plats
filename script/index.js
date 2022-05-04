import {recipes} from './recipes'
import Recipe from './Recipe'
const searchUstensil = document.getElementById("search-ustensils")
const dropdownUstensils = document.getElementById("dropdownUstensil")
const dropdownAppareil = document.getElementById("dropdownAppareil")
const menu = document.getElementById("menu")


dropdownAppareil.addEventListener("click", function() {
    const display = menu.style.display
    const spanAppareil = document.getElementById("spanAppareil")
    const searchAppareil = document.getElementById("searchAppareil")
    if (menu.classList.contains("d-none")) {
        menu.classList.remove("d-none")
        menu.style.display ="block"
        spanAppareil.style.display = "none"
        searchAppareil.classList.remove("d-none")
    }else {
        menu.classList.add("d-none")
        spanAppareil.style.display = "block"
        searchAppareil.classList.add("d-none")
    }
})



searchUstensil.addEventListener("click", function(){
    console.log("oui")
    dropdownUstensils.style.display = "block"
})