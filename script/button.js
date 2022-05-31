
//Permet de crée un bouton tag
export function createTagButton(element, typeFiltre) {
    const button = document.createElement("button")
    button.setAttribute("type", "button")
    button.setAttribute('class', 'btn mb-2 mr-2 tag')
    button.setAttribute('id', element)
    button.innerHTML = element + " " + '<span class="croix border border-white rounded-circle ml-2">&times;</span>'
    button.value = typeFiltre
    barrePrincipale.insertAdjacentElement('afterend', button)
    console.log(button.value);
    switch (button.value) {
        case "ingredient":
            button.classList.add("btn-primary")
        break;

        case "appliance":
            button.classList.add("btn-success")
        break;

        case "ustensil":
            button.classList.add("btn-danger")
        break;
    }
    return button
}