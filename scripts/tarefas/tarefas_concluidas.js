//@@@ Renderiza lista de tarefas concluidas

var itemUlTarefasConcluidas = document.querySelector('.tarefas-terminadas')


function rederizaTarefasConcluidas(listaTarefas) {

  const addData = new Date(listaTarefas.createdAt);
    var novoItemLiTarefaConcluida = document.createElement('li')

    novoItemLiTarefaConcluida.innerHTML =

    `
    <li class="tarefa">
    <div class="divAction">
  
    <button onclick=deletarTarefas(${listaTarefas.id})> <img class="lixeiraDel" src="./assets/Lixeira.png" height ="25" width="26" /> </button>
    <button onclick="devolverTarefa(${listaTarefas.id}, '${listaTarefas.description}')"> <img src="./assets/arrow-up.png" height ="25" width="26" /> </button>
   
    
    </div>
      
        <div class="descricao">

        <p class="nome">${listaTarefas.description}</p>   
        <p class="timestamp"  >
          Pedido criado em 
          ${addData.toLocaleDateString()} às
          ${addData.getHours()}:${addData.getMinutes()}
          </p>

          
        </div>
      </li>
    `






    //     `
        
    // <li class="tarefa">
    //     <div class="not-done" id="${listaTarefas.id}" ></div>
    //     <div class="descricao">

    //       <p class="nome">${listaTarefas.description}</p>          
    //       <p class="timestamp"  >
    //       Tarefa ${listaTarefas.description} criada em 
    //       ${addData.toLocaleDateString()} às
    //       ${addData.getHours()}:${addData.getMinutes()}
    //       </p>
    //       <button onclick="devolverTarefa(${listaTarefas.id}, '${listaTarefas.description}')"> <img src="./assets/arrow-up.png" height ="25" width="26" /> </button>
    //       <button onclick=deletarTarefas(${listaTarefas.id})> <img src="./assets/Lixeira.png" height ="25" width="26" /> </button>
    //     </div>
    //   </li>
      
    // `

    itemUlTarefasConcluidas.appendChild(novoItemLiTarefaConcluida);

}

function devolverTarefa(id, descricao) {
  var token = localStorage.getItem("jwt");
  var endPointUpdateTarefa = "https://ctd-todo-api.herokuapp.com/v1/tasks/" + id;

  var objetoTarefa = {
    description: "",
    completed: false
  };

  objetoTarefa.description = descricao;
  objetoTarefa.completed = false;


  var novaTarefaJson = JSON.stringify(objetoTarefa);

  var configCriarTarefa = {
    method: "PUT",
    body: novaTarefaJson,
    headers: {
      "authorization": token,
      "content-type": "application/json",
    },
  }

  tarefaDevolvida(endPointUpdateTarefa, configCriarTarefa)
}

function tarefaDevolvida(endpoint, configuracao) {
  fetch(endpoint, configuracao)
    .then((resposta) => resposta.json())
    .then(function (resultado) {
      location.reload();
      console.log(resultado);
    })
}

