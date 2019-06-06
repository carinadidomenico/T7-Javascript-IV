const form = document.querySelector('form');
const cepInput = document.getElementById('cep');
const logradouroInput = document.getElementById('logradouro');
const complementoInput = document.getElementById('complemento');
const bairroInput = document.getElementById('bairro');
const localidadeInput = document.getElementById('localidade');
const ufInput = document.getElementById('uf');
const cepError = document.getElementById('cep-error')



const getData = url => {
    return new Promise((resolve, reject)=>{
        const requisicao = new XMLHttpRequest();
        requisicao.open ("GET", url);
    
        requisicao.onload = function() {
            if (requisicao.status === 200){
                const resposta = JSON.parse(requisicao.responseText)
                resolve (resposta)
            }
        }
        requisicao.send()
    })
}

cepInput.addEventListener('blur', () => {
    const valorDoCampo = cepInput.value;
    getData (`https://viacep.com.br/ws/${valorDoCampo}/json/`)
    .then (resultadoAPI => {
        cepInput.value = resultadoAPI.cep
        logradouroInput.value = resultadoAPI.logradouro
        complementoInput.value = resultadoAPI.complemento
        bairroInput.value = resultadoAPI.bairro
        localidadeInput.value = resultadoAPI.bairro
        ufInput.value = resultadoAPI.uf
    })
    .catch (erro => {
        cepError.innerHTML = erro
    })
})
