//Capturando as informações
let campoNome = document.getElementById("inputName");
let campoApelido = document.getElementById("inputApelido");
let campoEmail = document.getElementById("inputEmail");
let campoSenha = document.getElementById("inputSenha");
let campoRepetirSenha = document.getElementById("inputRepetirSenha");

let botaoCriarConta = document.getElementById("botaoCriarConta");

//Criação das tags para validação de cada campo
let nomeValido = false;
let apelidoValido = false;
let emailValido = false;
let senhaValida = false;
let repetirSenhaValida = false;

//Definindo o objeto de um novo usuario
const novoUsuarioObjeto = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
}

// Validação Campo Nome
campoNome.addEventListener('blur', function(){

    let campoNomeValidacao = document.getElementById('campoNomeValidacao');

    if (campoNome.value != "") {
        campoNomeValidacao.innerText = "";
        campoNome.style.border = "";
        nomeValido = true;
    } else {
        campoNomeValidacao.innerText = "Entre com um nome";
        campoNomeValidacao.style.fontSize = "8pt";
        campoNomeValidacao.style.color = "red";
        campoNomeValidacao.style.fontWeight = "bold";
        campoNome.style.border = "solid 1px red";
        nomeValido = false;
    }
    camposValidados(nomeValido); 
    camposValidados(apelidoValido); 
    camposValidados(emailValido); 
    camposValidados(senhaValida);
});

//Validação campo Apelido
campoApelido.addEventListener('blur', function(){

    let campoApelidoValidacao = document.getElementById('campoApelidoValidacao');

    if (campoApelido.value != "") {
        campoApelidoValidacao.innerText = "";
        campoApelido.style.border = "";
        apelidoValido = true;

    } else {
        campoApelidoValidacao.innerText = "Entre com o apelido";
        campoApelidoValidacao.style.color = "red";
        campoApelidoValidacao.style.fontSize = "8pt"
        campoApelidoValidacao.style.fontWeight = "bold";
        campoApelido.style.border = "solid 1px red"
        apelidoValido = false;
    }
    camposValidados(nomeValido); 
    camposValidados(apelidoValido); 
    camposValidados(emailValido); 
    camposValidados(senhaValida);
    })

//Validação campo Email
campoEmail.addEventListener('blur', function() {

    let campoEmailValidacao = document.getElementById('campoEmailValidacao');

    function validarEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
      }

    let testeEmail = validarEmail(campoEmail.value);

    if (testeEmail) {
        campoEmailValidacao.innerText = "";
        campoEmail.style.border = "";
        emailValido = true;

    } else {
        campoEmailValidacao.innerText = "Entre com um email válido";
        campoEmailValidacao.style.color = "red";
        campoEmailValidacao.style.fontSize = "8pt"; 
        campoEmailValidacao.style.fontWeight = "bold";
        campoEmail.style.border = "solid 1px red"
        emailValido = false;
    }
    camposValidados(nomeValido); 
    camposValidados(apelidoValido); 
    camposValidados(emailValido); 
    camposValidados(senhaValida);
    

});

//Validação campo SENHA - Deve ter pelo menos 1 número / Deve ter ao menos 1 maiusculo / Deve ter ao menos 1 minusculo / no mínimo 6 caracteres

campoSenha.addEventListener('blur', function(){

    let campoSenhaValidacao = document.getElementById('campoSenhaValidacao');

    function validarSenha(senha) {
        var regra = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{6,})$/;
        return regra.test(senha);
    }

    let testeSenha = validarSenha(campoSenha.value);

    if (testeSenha) {
        campoSenhaValidacao.innerText = "";
        campoSenha.style.border = "";
        senhaValida = true;

    } else {
        campoSenhaValidacao.innerText = "Entre com uma Senha válida, ela deve conter pelo menos:\n *Um número\n *Uma letra maiúscula\n *Uma letra minúscula \n *No mínimo 6 caracteres";
        campoSenhaValidacao.style.color = "red";
        campoSenhaValidacao.style.fontSize = "8pt"
        campoSenhaValidacao.style.fontWeight = "bold"
        campoSenha.style.border = "solid 1px red" 
        senhaValida = false;
    }

    camposValidados(nomeValido); 
    camposValidados(apelidoValido); 
    camposValidados(emailValido); 
    camposValidados(senhaValida);
})

//Validação campo REPETIR SENHA - Deve ter pelo menos 1 número / Deve ter ao menos 1 maiusculo / Deve ter ao menos 1 minusculo / no mínimo 6 caracteres

campoRepetirSenha.addEventListener('blur', function(){

    let campoRepetirSenhaValidacao = document.getElementById('campoRepetirSenhaValidacao');

    if (campoRepetirSenha.value == campoSenha.value) {
        campoRepetirSenhaValidacao.innerText = "";
        campoRepetirSenha.style.border = "";
        repetirSenhaValida = true;
    } else {
        campoRepetirSenhaValidacao.innerText = "A senha está diferente";
        campoRepetirSenhaValidacao.style.color = "red";
        campoRepetirSenhaValidacao.style.fontSize = "8pt";
        campoRepetirSenhaValidacao.style.fontWeight = "bold";
        campoRepetirSenha.style.border = "solid 1px red";
        repetirSenhaValida = false;

    }

})

//Função para alterar visualização do botão caso esteje ou não validado

function camposValidados(campo) {
    if (campo == true) {
        botaoCriarConta.removeAttribute('disabled');
        
    } else {
        botaoCriarConta.setAttribute('disabled', true);
        evento.preventDefault();
        
    }
}




