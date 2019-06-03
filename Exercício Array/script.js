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
    event.preventDefault();
    input.value.innerHTML = '';
    
    const verificacao = nomesNoRole.toLowerCase().find(input.value.toLowerCase());
    if (verificacao == true) {
        resposta.innerHTML = `✓ <strong>${input.value}</strong> estava no rolê.`;
        
    } else if (input.value == '' || input.value == 0) {
        resposta.innerHTML = " ";
    } else {        
        resposta.innerHTML = `X <strong>${input.value}</strong> não estava no rolê.`;
    }
})

