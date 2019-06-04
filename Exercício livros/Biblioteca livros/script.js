const listaDeAutores = JSON.stringify (autores)
const listaDeAutoresJS = JSON.parse (listaDeAutores)
const listaDeLivros = autores;
console.log (autores);

const btnAutores = document.getElementById ('btn-autores');
const btnGeneros = document.getElementById ('btn-generos');
const btnLivros = document.getElementById ('btn-livros');
const listaLivros = document.getElementById ('lista');


function criarLista (array, parametro){
    let lista = '';
    array.forEach((item) => {
        lista += 
        `
        <p>${item.parametro}</p>
        `
    });
    return array;
}


btnAutores.addEventListener('click', function(){
    console.log ("autor");
    criarLista (listaDeAutores, "autor")
})

btnGeneros.addEventListener('click', function(){
    console.log ("genero");
})

btnLivros.addEventListener('click', function(){
    console.log ("livro");
})