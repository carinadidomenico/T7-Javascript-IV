const nomesNoRole = [
    "Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter"
];

// 1. Pegar o valor do input
// 2. Validar o valor do input
// 3. Procurar nome na lista
// 4. Exibir resultado

let input = document.getElementById ('input');
let btn = document.getElementById ('btn');
let resposta = document.querySelector ('p');


btn.addEventListener ('click', function(event){
    input.value.innerHTML = '';
    event.preventDefault();
    
    const verificacao = nomesNoRole.includes(input.value);
    if (verificacao == true) {
        resposta.innerHTML = `✓ <strong>${input.value}</strong> estava no rolê.`;
        input.setAttribute ('class', 'valido');
        
    } else if (input.value == '' || input.value == 0) {
        resposta.innerHTML = " ";
        input.removeAttribute ('class', 'invalido valido');
    } else {        
        resposta.innerHTML = `X <strong>${input.value}</strong> não estava no rolê.`;
        input.setAttribute ('class', 'invalido');
    }
})

