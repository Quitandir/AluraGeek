//seletores dos campos de input
var categoriaProdutoCadastro = document.querySelector('#categoria');
var nomeProdutoCadastro = document.querySelector('#nome-produto');
var precoProdutoCadastro = document.querySelector('#preco-produto');
var descricaoProdutoCadastro = document.querySelector('#descricao-produto');
//seletores dos spans para erros
var erroImagem = document.querySelector('.erro-imagem-cadastro');
var erroCategoria = document.querySelector('.erro-categoria-cadastro');
var erroNome = document.querySelector('.erro-nome-cadastro');
var erroPreco = document.querySelector('.erro-preco-cadastro');
var erroDescricao = document.querySelector('.erro-descricao-cadastro');
//seletor do botão
var botaoAddProduto = document.querySelector('#botao-add-produto')

var categoriaValida = false;
var nomeValido = false;
var descricaoValida = false;

botaoAddProduto.addEventListener('click', function(event) {
    
    event.preventDefault();

    validaCategoria();
    validaNome();
    validaDescricao();

})  

function validaCategoria() {
    let categoriaRegex = /^[a-zA-Z0-9çóôáéí\s]{1,20}$/g;
    if(categoriaProdutoCadastro.value.match(categoriaRegex)){
        categoriaValida = true;
        erroCategoria.innerHTML = '';
    } else {
        erroCategoria.innerHTML = 'A categoria não pode estar em branco e deve ter no máximo 20 caracteres.';
    }
}

function validaNome () {
    let nomeRegex = /^[a-zA-Z0-9çóôáéí\s]{1,20}$/g;
    if(nomeProdutoCadastro.value.match(nomeRegex)){
        nomeValido = true;
        erroNome.innerHTML = '';
    } else {
        erroNome.innerHTML = 'O nome do produto não pode estar em branco e deve conter no máximo 20 caracteres.';
    }  
}

function validaDescricao() {
    let descricaoRegex = /^.{1,120}$/g;
    if(descricaoProdutoCadastro.value.match(descricaoRegex)){
        descricaoValida = true;
        erroDescricao.innerHTML = '';
    } else {
        erroDescricao.innerHTML = 'A descrição do produto não pode estar em branco e deve conter no máximo 120 caracteres. ';
    }
}


