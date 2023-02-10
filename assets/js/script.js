function next(t) {
    let elm = t.parentElement.parentElement.children[0];
    let item = elm.getElementsByClassName("item");
    elm.append(item[0]);
     
}

function prev(t) {
    let elm = t.parentElement.parentElement.children[0];
    let item = elm.getElementsByClassName("item");
    elm.prepend(item[item.length - 1]);
}

// -------------------- SLIDER GENERO -------------------- //

const sliderGenero = document.getElementById("width-genero");
const itemGenero = sliderGenero.getElementsByClassName("itens-genero");

function prox() {
    sliderGenero.append(itemGenero[0]);
}

function ant() {
    sliderGenero.prepend(itemGenero[itemGenero.length - 1]);
}


