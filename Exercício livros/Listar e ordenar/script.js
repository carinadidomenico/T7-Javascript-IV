// JSON.stringify(parametro-em-js) -----------> transforma objeto JS em JSON
// // JSON.parse (parametro-em-json) --------------->
// const listaDeAutoresJS = JSON.parse (listaDeAutores)


const listaDeLivros = autores;
console.log (autores);

const insertRow = listaDeLivros => {
    let table = '';
    listaDeLivros.forEach((lista) => {
        table += 
        `
        <tr>
            <td>${lista.livro}</td>
            <td>${lista.autor}</td>
            <td>${lista.genero}</td>
        </tr>
        `   
    })
    return table;
}

document.getElementById('content-table').innerHTML = insertRow(listaDeLivros.livros);

const ordenarLivro = document.getElementById ('ordenar-livro');
const ordenarAutor = document.getElementById ('ordenar-autor');
const ordenarGenero = document.getElementById ('ordenar-genero');

const orderList = (livroA, livroB, propriedade) => {
    if(livroA[propriedade].toLowerCase() < livroB[propriedade].toLowerCase()){
      return -1
    }
    if(livroA[propriedade].toLowerCase() > livroB[propriedade].toLowerCase()){
      return 1
    }
    return 0
}


ordenarLivro.addEventListener ('click', (e) => {
    const listaOrdenada = listaDeLivros.livros.sort((livroA, livroB) => orderList (livroA, livroB, "livro"))
    document.getElementById ("content-table").innerHTML = insertRow (listaOrdenada)
})

ordenarAutor.addEventListener ('click', (e) => {
    const listaOrdenada = listaDeLivros.livros.sort((livroA, livroB) => orderList (livroA, livroB, "autor"))
    document.getElementById ("content-table").innerHTML = insertRow (listaOrdenada)
})

ordenarGenero.addEventListener ('click', (e) => {
    const listaOrdenada = listaDeLivros.livros.sort((livroA, livroB) => orderList (livroA, livroB, "genero"))
    document.getElementById ("content-table").innerHTML = insertRow (listaOrdenada)
})