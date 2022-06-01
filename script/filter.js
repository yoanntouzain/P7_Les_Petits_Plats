export function dropdownListener(type, searchClass) {
    // Variables
    const dropdown = document.getElementById("dropdown"+type)
    const menu = document.getElementById("menu"+type)
    const spaceUp = document.getElementById("spaceUp"+type)
    const arrowDown = document.getElementById("arrowDown"+type)
    const arrowUp = document.getElementById("arrowUp"+type)
    const sizeBtn = document.getElementById("sizeBtn"+type)
    
    
    // Evenement
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
            search.addEventListener("keyup", function() {
                // a remplacer le compareValue par la méthode qui filtera les ingrédent en fonction des recettes afficher
                searchClass.compareValue()
                //////////////////////
            })
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