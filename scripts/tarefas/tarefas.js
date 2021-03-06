//capturando as tags html
var campoNomeUsuario = document.getElementById('nomeUsuario');
var campoNovaTarefa = document.getElementById('novaTarefa');
var botaoAddTarefa = document.getElementById('botaoAddTarefa');
var botaoFinalizaTarefa = document.getElementsByClassName('not-done');
var botaoFinalizarSessao = document.getElementById('closeApp')
var campoTarefaConcluida = document.getElementById('concluidaTarefa')

window.onload = function () {

  //itens do fetch de localizar dados do usuario
  var endPointInfoUsuarios = "https://ctd-todo-api.herokuapp.com/v1/users/getMe"
  var token = localStorage.getItem("jwt");
  console.log(token)
  var config = {
    method: "GET",
    headers: {
      "authorization": token
    }
  }

  //Verificando se possui um token no LocalStorage, caso tenha renderiza nome do usuario
  if (!token) {
    location.href = "index.html"
  } else {
    fetch(endPointInfoUsuarios, config)
      .then(function (resultado) {
        return resultado.json()
      }).then(function (resposta) {
        const nomeUsuario = resposta.firstName;
        const sobrenomeUsuario = resposta.lastName;
        campoNomeUsuario.innerText = nomeUsuario + " " + sobrenomeUsuario;
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
      .then(function (resposta) {

        let qtdTarefaPendente = 0;
        for (const tarefa of resposta) {

          if (tarefa.completed == false) {
            qtdTarefaPendente++;
            // removerSkeleton();
            let arrayListaTarefas = tarefa
            renderizaTarefasPendentes(arrayListaTarefas);
            console.log(arrayListaTarefas);
          }
        }

        console.log(qtdTarefaPendente)
        if (qtdTarefaPendente == 0) {
          renderizarSkeleton();
        }

      })
  }

  function renderizarSkeleton() {
    const skeleton = `<div id="skeleton">
    <li class="tarefa">
      
      <div class="not-done"></div>
      <div class="descricao">
        <p class="timestamp">Criada em: 15/07/21</p>
        <p class="timestamp">Criada em: 15/07/21</p>
      </div>
    </li>
    <li class="tarefa">
      <div class="not-done"></div>
      <div class="descricao">
        <p class="timestamp">Criada em: 15/07/21</p>
        <p class="timestamp">Criada em: 15/07/21</p>
      </div>
    </li>

    <li class="tarefa">
      <div class="not-done"></div>
      <div class="descricao">
        <p class="timestamp">Criada em: 15/07/21</p>
        <p class="timestamp">Criada em: 15/07/21</p>
      </div> 
    </li>

  </div>
 </div>`

    var tarefasPendentes = document.getElementById("tarefas-pendentes");
    tarefasPendentes.innerHTML = skeleton;
  }

  function removerSkeleton() {
    var tarefasPendentes = document.getElementById("tarefas-pendentes");
    var skeleton = document.getElementById("skeleton");

    tarefasPendentes.removeChild(skeleton);
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
      .then(function (resultado) {
        location.reload();
        console.log(resultado);

      })
  }

  //evento para criar nova tarefa
  botaoAddTarefa.addEventListener('click', function (evento) {

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
  botaoFinalizarSessao.addEventListener('click', function (evento) {
    localStorage.removeItem('jwt')
    location.reload();
  })

  //Função para listar tarefas
  function listarTarefasConcluidas(endPoint, config) {
    fetch(endPoint, config)
      .then((resposta) => resposta.json())
      .then(function (resposta) {

        for (const tarefa of resposta) {
          if (tarefa.completed == true) {
            let arrayListaTarefas = tarefa
            rederizaTarefasConcluidas(arrayListaTarefas);
            console.log(arrayListaTarefas);
          }
        }

      })
  }

  listarTarefasConcluidas(endPointListarTarefas, configListarTarefas);


  function teste() {
    console.log('TESTE');
  }
}

