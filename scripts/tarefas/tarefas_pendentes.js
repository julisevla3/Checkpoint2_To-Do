
//renderizar lista de tarefas pendentes

var itemUlTarefasPendentes = document.querySelector('.tarefas-pendentes')


function renderizaTarefasPendentes(listaTarefas) {

  var novoItemLiTarefa = document.createElement('li')

  novoItemLiTarefa.innerHTML =
    `
    <li class="tarefa">
        <div class="not-done" id="${listaTarefas.id}" onclick="concluirTarefa(${listaTarefas.id}, '${listaTarefas.description}')"></div>
        <div class="descricao">
          <p class="nome">${listaTarefas.description}</p>
          <p class="timestamp">Criada em: ${listaTarefas.createdAt}</p>
          <button onclick=deletarTarefas(${listaTarefas.id})> <img src="./assets/Lixeira.png" height ="25" width="26" /> </button>
        </div>
      </li>
    `

  itemUlTarefasPendentes.appendChild(novoItemLiTarefa);

}


function concluirTarefa(id, descricao) {
  var token = localStorage.getItem("jwt");
  var endPointUpdateTarefa = "https://ctd-todo-api.herokuapp.com/v1/tasks/" + id;

  var objetoTarefa = {
    description: "",
    completed: false
  };

  objetoTarefa.description = descricao;
  objetoTarefa.completed = true;


  var novaTarefaJson = JSON.stringify(objetoTarefa);

  var configCriarTarefa = {
    method: "PUT",
    body: novaTarefaJson,
    headers: {
      "authorization": token,
      "content-type": "application/json",
    },
  }

  tarefaConcluida(endPointUpdateTarefa, configCriarTarefa)
}

function tarefaConcluida(endpoint, configuracao) {
  fetch(endpoint, configuracao)
    .then((resposta) => resposta.json())
    .then(function (resultado) {
      location.reload();
      console.log(resultado);
    })
}


//@@@@@@formatação da data
// so colocar, toLocalString("pt-br") pra deixar formatado

//@@@@@@formatação da data
// so colocar, toLocalString("pt-br") pra deixar formatado

