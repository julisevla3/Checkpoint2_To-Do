//Função para deletar tarefas

function deletarTarefas(id) {
    //Configuração do fetch para delete
    const token = localStorage.getItem('jwt');
    var endPointDeletarTarefa = `https://ctd-todo-api.herokuapp.com/v1/tasks/${id}`;
    var configListarTarefas = {
        method: "DELETE",
        headers: {
            authorization: token
        }
    };
    
    //Função
    function DeletarNovaTarefa(endpoint, configuracao) {
        fetch(endpoint, configuracao)
            .then((resposta) => resposta.json())
            .then(function(resultado) {
            location.reload();
            console.log(resultado);
    })
    }

    //Chamada da Função
    DeletarNovaTarefa(endPointDeletarTarefa, configListarTarefas);
}