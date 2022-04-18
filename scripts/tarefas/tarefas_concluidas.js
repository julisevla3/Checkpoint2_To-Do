var itemUlTarefasConcluidas = document.querySelector('.tarefas-terminadas')


function rederizaTarefasConcluidas(listaTarefas) {

    var novoItemLiTarefaConcluida = document.createElement('li')

    novoItemLiTarefaConcluida.innerHTML =
        `
    <li class="tarefa">
        <div class="done" id="${listaTarefas.id}"></div>
        <div class="descricao">
          <p class="nome">${listaTarefas.description}</p>
          <p class="timestamp">Criada em: ${listaTarefas.createdAt}</p>
          <button onclick=deletarTarefas(${listaTarefas.id})> <img src="./assets/Lixeira.png" height ="25" width="26" /> </button>
        </div>
      </li>
    `

    itemUlTarefasConcluidas.appendChild(novoItemLiTarefaConcluida);

}
