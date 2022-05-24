
//Permet de crée un bouton tag
export function createTagButton(element, typeFiltre) {
    const button = document.createElement("button")
    button.setAttribute("type", "button")
    button.setAttribute('class', 'btn mb-2 mr-2 tag')
    button.setAttribute('id', element)
    button.innerHTML = element + " " + '<span class="croix border border-white rounded-circle ml-2">&times;</span>'
    button.value = typeFiltre
    barrePrincipale.insertAdjacentElement('afterend', button)
    switch (button.value) {
        case "ingredient":
            button.classList.add("btn-primary")
            return button
        case "appliance":
            button.classList.add("btn-success")
            return button
        case "ustensil":
            button.classList.add("btn-danger")
            return button
    }
}

//Permet de fermer le bouton tag
export function closeTagButton(search) {
    const theTags = document.querySelectorAll(".tag")
    console.log(theTags);
    theTags.forEach(tag => {
        tag.addEventListener('click', function(){
            tag.remove()
            search.compareValue()
        })
    })
}