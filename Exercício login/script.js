const userInput = document.getElementById ("username");
const passInput = document.getElementById ("password");
const form = document.getElementById ("login-form")

form.addEventListener('submit', event => {
    event.preventDefault();
    const enviar = JSON.stringify ({
        user: userInput.value,
        pass: passInput.value
    })
    fetch ('https://lais-api-reprograma.herokuapp.com/login', {
        method: 'POST',
        body: enviar,
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        }
    })
    .then (resposta => resposta.json())
    .then (objetoJavascript => {
        console.log (objetoJavascript)
        localStorage.setItem('token', objetoJavascript.token)
        window.location.href="home.html"
    })

    .catch (error => console.log(error))
})
