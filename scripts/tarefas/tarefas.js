//Verifica se usuários está logado
window.onload = function () {
  usuarioLogado();
  //buscaTask();
}
const storage = localStorage;
function usuarioLogado() {
  const token = storage.getItem('jwt')
  if (!token) return window.location.href = "index.html"
  else {
    fetch('https://ctd-todo-api.herokuapp.com/v1/users/getMe', {
      method: 'GET',
      headers: {
        'Authorization': token,
      },

    }).then(function (response) {
      return response.json();
    }).then(function (response) {
      console.log(response);
      var usuarioName = response.firstName;
      console.log(usuarioName);
      var usuarioSobrenome = response.lastName;
      console.log(usuarioSobrenome);
      let selectorNome = document.getElementById('nomezinho');
      console.log(selectorNome);
      selectorNome.innerText = usuarioName + ' ' + usuarioSobrenome;
      selectorNome.style.color = "pink";
    }).catch((error) => console.log(error));
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
}




/////@@@@@ Cadastrando uma nova tarefa para o usuario logado
let botaoCadastrar = document.getElementById("botaoTarefas");
botaoCadastrar.addEventListener('click', evento => {
  evento.preventDefault();

  let descricaoTarefas = document.getElementById('novaTarefa');
  let radioGrupo = document.getElementsByName('grupoRadio')
  let radioSelecionado;
  if (descricaoTarefas.value != "") {

    //Verifica qual foi o radio selecionado e armazena em uma variável
    radioGrupo.forEach(radio => radioSelecionado = radio.checked);

    //Cria objeto JS que será convertido para Json

    const objetoTarefa = {
      description: descricaoTarefas.value,
      completed: radioSelecionado
    }

    let objetoTarefaJson = JSON.stringify(objetoTarefa);


    //@@@ Comunicando com a API
    let endPoinCriarNovaTarefa = "https://ctd-todo-api.herokuapp.com/v1/tasks";

    let configuraçoesRequisicoes = {
      method: 'POST',
      body: objetoTarefaJson,

      headers: {
        'Content-type': 'aplication/json',

        'Authorization': `${cookieJwt}`
      }
    }



//@@@@ chamando API
fetch(endPoinCriarNovaTarefa, configuraçoesRequisicoes)
  .then((response) => {
    if (response.status == 201) {
      return response.json
    }
    // Se o código for diferente do sucesso (201), lança um throw para que a execução caiua no Catch()
    throw response;

  }).then(resposta => {
    console.log(resposta);

    window.location.reload()
  })
  .catch(error => {
    console.log(error)

  })


function manipulandoTarefasusuario(listaDeTarefas) {
  console.log(listaDeTarefas);

  for (let tarefa of listaDeTarefas) {
    console.log(tarefa.id); //description
  }
}

      if (tarefa.completed) {
        //tarefas terminadas
        console.log(tarefa);
      } else {
        //tarefas pendentes
        console.log(tarefa.completed);
      }

      
  }

})

