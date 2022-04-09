//Verifica se usuários está logado
window.onload = function () {
    usuarioLogado();
    buscaTask();
}
const storage = localStorage;
function usuarioLogado() {
    const token = storage.getItem('jwt')
    if (!token) return window.location.href = "index.html"

}

//Desloga o Usuário
function closeApp() {
    localStorage.removeItem('jwt')
    usuarioLogado()
}


function criarTarefa() {
    const token = storage.getItem('jwt')
    console.log("deu certo")
    fetch('https://ctd-todo-api.herokuapp.com/v1/tasks', {
        method: 'POST',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
      "description": "Aprender Javascript",
      "completed": false
    })
    });
}
let nomeTask = document.querySelector("div.descricao p.nome");

function buscaTask() {

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzdWFyaW9zMDJAcG9zdG1hbi5jb20iLCJpZCI6MjU0MiwiaWF0IjoxNjQ5NDcxNTA0fQ.6TmsmdjYz6QGnL8B06OC7eKgFrBIzq8fX6W3DDpDK0E");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("https://ctd-todo-api.herokuapp.com/v1/tasks", requestOptions)
      .then(response => response.text())
      .then(result => {
          console.log(result)
        var resultado = JSON.parse(result);
        console.log(resultado[0].description)
        let insertNomeTask = document.createTextNode(resultado[0].description);
        nomeTask.appendChild(insertNomeTask);
        nomeTask.style.color = "red";
        })
      .catch(error => console.log('error', error));
     
}

