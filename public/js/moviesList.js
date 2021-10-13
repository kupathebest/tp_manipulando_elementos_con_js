console.log('MoviesList.js vinculado correctamente!!!');

const qs = q => document.querySelector(q)

window.onload = () => {
    let body = qs('body');
    let h1 = qs('h1');

    let dark = confirm('¿Desea modo oscuro?')

    if(dark) {
        body.style.backgroundColor = '#7f7f7f';
        body.classList.add('fondoMoviesList')
    }

    h1.innerText = 'LISTADO DE PELICULAS'
    h1.style.color = 'white'
    h1.style.backgroundColor = 'teal'
    h1.style.padding = '20px';
}