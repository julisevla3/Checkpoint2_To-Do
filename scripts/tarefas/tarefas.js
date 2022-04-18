
//capturando as tags html
var campoNomeUsuario = document.getElementById('nomeUsuario');
var campoNovaTarefa = document.getElementById('novaTarefa');
var botaoAddTarefa = document.getElementById('botaoAddTarefa');
var botaoFinalizarSessao = document.getElementById('closeApp');

window.onload = function() {
   
    //itens do fetch de localizar dados do usuario
    var endPointInfoUsuarios = "https://ctd-todo-api.herokuapp.com/v1/users/getMe"
    var token = localStorage.getItem("jwt");
    var config = {
        method: "GET",
        headers: {
            "authorization": token
        }
    }

    //Verificando se possui um token no LocalStorage, caso tenha renderiza nome do usuario
    if(!token) {
        location.href = "index.html"
    } else {
        fetch(endPointInfoUsuarios, config)
        .then(function(resultado) {
            return resultado.json()
        }).then(function(resposta) {
            const nomeUsuario = resposta.firstName;
            const sobrenomeUsuario = resposta.lastName;
            campoNomeUsuario.innerText = nomeUsuario +" "+sobrenomeUsuario ;
        })
    }

    //Itens de configuração para listar tarefas
    var endPointListarTarefas = "https://ctd-todo-api.herokuapp.com/v1/tasks";
    var configListarTarefas = {
        method: "GET",
        headers: {
            authorization: token
        }
    };

    //Função para listar tarefas
    function listarTarefas(endPoint, config) {
        fetch(endPoint, config)
        .then((resposta) => resposta.json())
        .then(function(resposta) {

            for (const tarefa of resposta) {
                let arrayListaTarefas = tarefa
                renderizaTarefasPendentes(arrayListaTarefas);
                console.log(arrayListaTarefas);
            }
            
        })
    }

    listarTarefas(endPointListarTarefas, configListarTarefas);

    //Itens de Configuração para criar nova tarefa
    var endPointCriarTarefa = "https://ctd-todo-api.herokuapp.com/v1/tasks";
    var objetoNovaTarefa = {
        description: "",
        completed: false
    };

    //Função para criar tarefas
    function criarNovaTarefa(endpoint, configuracao) {
        fetch(endpoint, configuracao)
            .then((resposta) => resposta.json())
            .then(function(resultado) {
            location.reload();
            console.log(resultado);
    })
    }

    //evento para criar nova tarefa
    botaoAddTarefa.addEventListener('click', function(evento) {

        evento.preventDefault()

        objetoNovaTarefa.description = campoNovaTarefa.value;
        objetoNovaTarefa.completed = false;

        var novaTarefaJson = JSON.stringify(objetoNovaTarefa);

        var configCriarTarefa = {
            method: "POST",
            body: novaTarefaJson,
            headers: {
                "authorization": token,
                "content-type": "application/json",
            },
        }

        criarNovaTarefa(endPointCriarTarefa, configCriarTarefa)
                
    })

    //Função para encerrar sessão
    botaoFinalizarSessao.addEventListener('click', function() {
        localStorage.removeItem('jwt')
        location.reload();
    })

}
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
      let selectorNome = document.getElementById('nomeUsuario');
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
let botaoCadastrar = document.getElementById("botaoAddTarefa");
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

