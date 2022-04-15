
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
let tarefasPendentesUl = document.querySelector(".tarefas-pendentes")

function rederizaTarefasPendentes(tarefa) {
    let liTarefaPendente = document.createElement('li')
    liTarefaPendente.classList.add("tarefa")

    liTarefaPendente.innerHTML =
        `
        <div class="not-done" id="${tarefa.id}"></div>
         <div class="descricao">
            <p class="nome">${tarefa.description}</p>
            <p class="timestamp"><i class="far fa-calendar- i> ${tarefa.createdAt}</p>
         </div>
        `             

tarefasPendente.appendChild(liTarefasPendentes)

}


//@@@@@@formatação da data
// so colocar, toLocalString("pt-br") pra deixar formatado

//@@@@@@formatação da data
// so colocar, toLocalString("pt-br") pra deixar formatado

