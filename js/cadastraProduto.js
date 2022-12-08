import { conectaAPI } from "./conectaAPI.js";

const botaoAddProduto = document.querySelector('[data-botao]');
const cadastroConcluido = document.querySelector("[data-cadastroConcluido]");

let preco = document.querySelector('[data-formulario="preco"]');
SimpleMaskMoney.setMask(preco, {
            
    prefix: 'R$ ',
    fixed: true,
    fractionDigits: 2,
    decimalSeparator: ',',
    thousandsSeparator: '.',
    cursor: 'end'
});

async function cadastraProduto(e) {

    e.preventDefault();

    const imagem = document.getElementById('imagem-produto').value; 
    const categoria = document.getElementById('categoria-produto').value; 
    const nome = document.getElementById('nome-produto').value; 
    const preco = document.getElementById('preco-produto').value; 
    const descricao = document.getElementById('descricao-produto').value; 
  
    console.log(imagem, categoria, nome, preco, descricao);
    
    try {
    await conectaAPI.criaProduto(imagem, categoria, nome, preco, descricao);
    cadastroConcluido.value = "Cadastro concluído com sucesso."    
    
    } catch (e) {
        alert(e);
    }
}

botaoAddProduto.addEventListener("click", e => cadastraProduto(e));

