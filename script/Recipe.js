export default class Recipe {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.servings = data.servings;
        this.ingredients = data.ingredients;
        this.time = data.time;
        this.description = data.description;
        this.appliance = data.appliance;
        this.ustensils = data.ustensils;
        this.vignetteRecette = document.querySelector(".vignette-recette")
    }

    createCard() {
        const card = document.createElement("div")
        card.setAttribute("class", "card col-3 mb-5 pr-0 pl-0 cellule")
        card.setAttribute("id", this.id)

        let listIngredient = ""
        this.ingredients.forEach(ingredient => {
            //Permet d'afficher chaque ingrédient suivi de sa quantité et de son unité si il en possède une
            if (ingredient.quantity !== undefined) {
                if (ingredient.unit != undefined) {
                    listIngredient +=
                    `<strong>${ingredient.ingredient}:</strong> ${ingredient.quantity} ${ingredient.unit}<br/>`
                }else{
                    listIngredient +=
                    `<strong>${ingredient.ingredient}:</strong> ${ingredient.quantity}<br/>`
                }
            }else {
                listIngredient +=
                `<strong>${ingredient.ingredient}</strong><br/>`
            }
        })

        card.innerHTML =
        `<div class="card-header bg-secondary justify-content-between pt-5 pb-5 imageRecette"></div>
            <div class="card-body pl-2 pr-2 descriptifRecette">
                <div class="row card-title text-left ml-2">
                    <div class="col-8 pl-0">
                        <h6 class="titre-recette">${this.name}</h6>
                    </div>
                    <div class="col-4 pr-0 font-weight-bold align-middle temps text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                        </svg> ${this.time} min
                    </div>
                </div>
                <div class="row card-text ml-2 test">
                    <div class="col-6 pl-0 pr-0">
                        <p class="ingredient-recette text-left">
                            ${listIngredient}
                        </p>
                    </div>
                    <div class="col-6 pl-0 pr-0 description-recette d-flex text-right">
                        <p class="description text-left">
                            ${this.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>`
        return card
    }

    hasName(name) {
        if (this.name != undefined && this.name != "") {
            return this.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
        }
    }

    hasIngredient(ingredient) {
        let result = false
        if (this.ingredients != undefined && this.ingredients != "") {
            this.ingredients.forEach(ing => {
                if (ing.ingredient.toLocaleLowerCase().includes(ingredient.toLocaleLowerCase())) {
                    result = true
                }
            })
        }
        return result
    }

    hasDescription(description) {
        if (this.description != undefined && this.description != "") {
            return this.description.toLocaleLowerCase().includes(description.toLocaleLowerCase())
        }
    }

    hasAppliances(appliances) {
        if (this.appliance != undefined && this.appliance != "") {
            return this.appliance.toLocaleLowerCase().includes(appliances.toLocaleLowerCase())
        }
    }

    hasUstensils(ustensils) {
        let result = false
        if (this.ustensils != undefined && this.ustensils != "") {
            this.ustensils.forEach(ustensil => {
                if (ustensil.toLocaleLowerCase().includes(ustensils.toLocaleLowerCase())) {
                    result = true
                }
            })
        }
        return result
    }




    containIngredients(ingredients) {
        let result = 0
        if (this.ingredients != undefined && this.ingredients != "") {
            this.ingredients.forEach(ing => {
                ingredients.forEach(tag => {
                    if (ing.ingredient.toLocaleLowerCase().includes(tag.toLocaleLowerCase())) {
                        result++
                    }
                })

            })
        }
        return result >= ingredients.length
    }





    containAppliances(appliance) {
        let result = 0
        if (this.appliance != undefined && this.appliance != "" && appliance.length != 0 && appliance != undefined) {
            if (this.appliance.toLocaleLowerCase().includes(appliance)) {
                result++
            }
        }
        return result >= appliance.length
    }







    containUstensils(ustensils) {
        let result = 0
        if (this.ustensils != undefined && this.ustensils != "") {
            this.ustensils.forEach(ustensil => {
                ustensils.forEach(tag => {
                    if (ustensil.toLocaleLowerCase().includes(tag.toLocaleLowerCase())) {
                        result++
                    }
                })

            })
        }
        return result >= ustensils.length
    }
}