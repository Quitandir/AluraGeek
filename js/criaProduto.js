import { conectaAPI } from "./conectaAPI.js";

const botaoAddProduto = document.querySelector('[data-botao="botaoAddProduto"]');
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

async function criarProduto(e) {

    e.preventDefault();

    const imagem = document.querySelector('[data-formulario="imagem"]').value; 
    const categoria = document.querySelector('[data-formulario="categoria"]').value; 
    const nome = document.querySelector('[data-formulario="nome"]').value; 
    const preco = document.querySelector('[data-formulario="preco"]').value; 
    const descricao = document.querySelector('[data-formulario="descricao"]').value; 
  
    
    try {
    await conectaAPI.criaProduto(imagem, categoria, nome, preco, descricao);
    cadastroConcluido.value = "Cadastro concluído com sucesso."    
    
    } catch (e) {
        alert(e);
    }
}

botaoAddProduto.addEventListener("click", e => criarProduto(e));