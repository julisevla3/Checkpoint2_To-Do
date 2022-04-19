//@@@ Renderiza lista de tarefas concluidas

var itemUlTarefasConcluidas = document.querySelector('.tarefas-terminadas')


function rederizaTarefasConcluidas(listaTarefas) {

  const addData = new Date(listaTarefas.createdAt);
    var novoItemLiTarefaConcluida = document.createElement('li')

    novoItemLiTarefaConcluida.innerHTML =
        `
    <li class="tarefa">
        <div class="not-done" id="${listaTarefas.id}"></div>
        <div class="descricao">

          <p class="nome">${listaTarefas.description}</p>          
          <p class="timestamp"  >
          Tarefa ${listaTarefas.description} criada em 
          ${addData.toLocaleDateString()} às
          ${addData.getHours()}:${addData.getMinutes()}
          </p>
          <button onclick=deletarTarefas(${listaTarefas.id})> <img class="lixeiraDel" src="./assets/Lixeira.png" height ="25" width="26" /> </button>
        </div>
      </li>
      
    `

    itemUlTarefasConcluidas.appendChild(novoItemLiTarefaConcluida);

}
