function exibirSpinner() {

    let spinner = document.createElement('div')
    spinner.classList.add('loader');

    let left = document.querySelector('left')
    let right = document.querySelector('right')

    left.classList.add("hidden")
    right.classList.add("hidden")

    let body = document.querySelector("body");
    body.appendChild(spinner);


}

function ocultarSpinner() {
    let body = document.createElement("body")
    let spinner = document.querySelector(".loader")

body.removeChild(spinner)



    left.classList.delete("hidden")
    right.classList.delete("hidden")

}


exibirSpinner();

//sweetalert2

.h