var email = document.querySelector('#login-email');
var senha = document.querySelector('#login-senha');
var botaoEntrar = document.querySelector('#botao-entrar');
var erroEmail = document.querySelector('.erro-email');
var erroSenha = document.querySelector('.erro-senha');

var emailValido = false;
var senhaValida = false;

botaoEntrar.addEventListener('click', function(event) {
    

    validaEmail();   
    validaSenha();

    if(emailValido == true && senhaValida == true) {
        window.location.href = "./produtos-home.html";
    }
})  

function validaEmail() {
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(emailRegex)){
        emailValido = true;
        erroEmail.innerHTML = '';
    } else {
        erroEmail.innerHTML = 'Email em formato inválido.';
    }
}

function validaSenha () {
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    if(senha.value.match(passwordRegex)){
        senhaValida = true;
        erroSenha.innerHTML = '';
    } else {
        erroSenha.innerHTML = 'Senha em formato inválido.';
    }  
}