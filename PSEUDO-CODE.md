-   Dans Search.js
    methode compareValue()
    *   Condition:
        Si (this.searchRecipeValue.length >2)
        *   2ème Condition:
            pour chacune de mes recettes 
            Si( -   soit le titre
                -   soit les ingredients
                -   soit la description
            qui contient la value de searchRecipeValue) {
                j'affiche mes recettes
            }
            &&
        Si (mes recette contiennent tous les ingredients dans les tags && 
            les ustensils dans les tags && 
            les appareils dans les tags) {
                j'affiche les recettes
            }