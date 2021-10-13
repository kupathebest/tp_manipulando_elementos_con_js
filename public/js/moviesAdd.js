console.log('MoviesAdd.js vinculado correctamente!!!');

const qs = q => document.querySelector(q)

window.onload = () => {
    let h1 = qs('h1');
    let section = qs('section');
    let article = qs('article');

    h1.innerText += 'AGREGAR PELICULAS'
    h1.classList.add('titulo')
    article.classList.add('fondoTransparente')
    section.classList.add('fondoCRUD')
    
}