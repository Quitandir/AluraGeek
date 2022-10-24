var nomeContato = document.querySelector('#nome-contato');
var mensagemContato = document.querySelector('.contato-mensagem');
var botaoEnviarMensagem = document.querySelector('#enviar-mensagem');
var erroNomeMensagem = document.querySelector('.erro-rodape-nome');
var erroMensagem = document.querySelector('.erro-rodape-mensagem');

var nomeMensagemValido = false;
var mensagemValida = false;

botaoEnviarMensagem.addEventListener('click', function(event) {
    event.preventDefault();
    validaNomeMensagem();   
    validaMensagem();

    if(nomeMensagemValido == true && mensagemValida == true) {
        alert('Mensagem enviada.')
    }
})  

function validaNomeMensagem() {
    let nomeMensagemRegex = /^[a-zA-Zçóôáéí\s]{1,40}$/g;
    if(nomeContato.value.match(nomeMensagemRegex)){
        nomeMensagemValido = true;
        erroNomeMensagem.innerHTML = '';
    } else {
        erroNomeMensagem.innerHTML = 'Nome não pode estar em branco e deve conter no máximo 40 caracteres.';
        nomeMensagemValido = false;
    }
}

function validaMensagem () {
    let mensagemRegex = /^.{1,120}$/g;
    if(mensagemContato.value.match(mensagemRegex)){
        mensagemValida = true;
        erroMensagem.innerHTML = '';
    } else {
        erroMensagem.innerHTML = 'Sua mensagem não pode estar em branco e deve conter no máximo 120 caracteres.';
        mensagemValida = false;
    }  
}