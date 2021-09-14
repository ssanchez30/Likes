
let likesBtn = document.querySelectorAll('.likeBtn');
let spanPuntaje = document.querySelectorAll('.counter');
let nameUser = document.querySelectorAll('.name');


function puntaje(event) {
    let entireElement = event.target.closest('.likesDiv');


    let puntaje_likes = parseInt(entireElement.children[0].children[0].textContent);
    puntaje_likes++;
    entireElement.children[0].children[0].innerHTML = `${puntaje_likes} `
}

for (let i = 0; i < likesBtn.length; i++) {
    likesBtn[i].addEventListener('click', puntaje);
}
