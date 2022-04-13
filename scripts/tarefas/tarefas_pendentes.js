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

tarefasPendente.append

}


//@@@@@@formatação da data
// so colocar, toLocalString("pt-br") pra deixar formatado
