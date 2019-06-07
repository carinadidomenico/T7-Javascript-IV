fetch ('https://randomuser.me/api')
.then (response => response.json())
.then (objJavascript => console.log (objJavascript))
.catch (erro => console.log (erro))


const criarPainel => (user) {
    return    `
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <div class="panel">
          <div class="title text-center">Bem vindo(a) ${NOME} <span id="username"></span></div>
        </div>
        <div id="profile">
          <div class="panel text-center padding">
            <figure class="image is-128x128 margin-auto padding">
              <img class="is-rounded" src="" alt="">${IMAGEM}
            </figure>
            <div class="content">
              <p>
                <strong>Nome Top</strong>
                <i class="fas fa-mobile-alt"></i>
                <small>cell +55 11 123456789</small>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
    `
}


const testarAPI = () => {
    fetch ('https://lais-api-reprograma.herokuapp.com/resource', {
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
        'Authorization': `Bearer ${localStorage.getItem("token")}`
    }
})
    .then (res => res.json())
    .then (result => console.log (result))
    .catch (err => alert(err))
    
}