// EXEMPLO 1

const alguemVaiRetornar = pessoa => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(pessoa + ' voltei')
        }, 2000)
    })
}

alguemVaiRetornar ("Eu")
.then ((alguemVoltou) => console.log (alguemVoltou))
.catch ((erro) => console.log ("Erro"))






// EXERCÍCIO 1

const retornaPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve ("Hello world")
            reject ("errrrrrrou")
        }, 3000)
    })
}

function job(){
    retornaPromise() 
    .then ((resolve) => console.log (resolve))
    .catch ((reject) => console.log (reject))
}




// EXERCÍCIO 2

// Se data não for um número, devolva uma promessa rejeitada instantaneamente e forneça a mensagem "deu ruim" (em uma string)
// Se data for um número ímpar, retorne uma promessa resolvida 1 segundo depois e forneça os dados "ímpar" (em uma string)
// Se data for um número par, retorne uma promessa rejeitada 2 segundos depois e forneça os dados "par" (em uma string)
// Dica: quando você codifica uma função que retorna uma promessa, certifique-se de sempre retornar uma promessa. Mesmo se você quiser lidar com um erro, basta retornar uma promessa e rejeitá-la.
// Dica: use isNaN(data) para verificar se os dados não são um número.

// function job(data) {
//     return something;
// }

const mostrarNumero = (numero) => {
    return new Promise ((resolve, reject) => {
        if (isNaN(numero)) {
            reject ("Deu ruim");
        }
        else if (numero % 2 == 0) { 
            setTimeout(() => {                
                reject ( `${numero} é par`)
            }, 2000);           
        }
        else {
            setTimeout(() => {                
                resolve ( `${numero} é ímpar`)
            }, 1000);
        }
    })
}

function job(numero){
    mostrarNumero(numero) 
    .then (impar => (console.log (impar)))
    .catch (par => (console.log (par)))
    .catch (reject => (console.log (reject)))
}