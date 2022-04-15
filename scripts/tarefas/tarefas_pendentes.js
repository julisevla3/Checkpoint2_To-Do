//renderizar lista de tarefas pendentes

var itemUlTarefasPendentes = document.querySelector('.tarefas-pendentes')


function renderizaTarefasPendentes(listaTarefas) {
    
    var novoItemLiTarefa = document.createElement('li')

    novoItemLiTarefa.innerHTML =
    `
    <li class="tarefa">
        <div class="not-done" id="${listaTarefas.id}" ></div>
        <div class="descricao">
          <p class="nome">${listaTarefas.description}</p>
          <p class="timestamp">Criada em: ${listaTarefas.createdAt}</p>
          <button onclick=deletarTarefas(${listaTarefas.id})> <img src="./assets/Lixeira.png" height ="25" width="26" /> </button>
        </div>
      </li>
    `

    itemUlTarefasPendentes.appendChild(novoItemLiTarefa);

}
