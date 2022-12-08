import { conectaAPI } from "./conectaAPI.js";
import constroiProduto from "./mostraProdutos.js";

async function buscarProduto (evento) {

    evento.preventDefault();

    const dadosPesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaAPI.buscaProduto(dadosPesquisa);
    console.log(busca);

    const listaDeBusca = document.querySelector("[data-lista=busca]");
    const listas = document.querySelectorAll("[data-lista]");
    const mensagemDeErro = document.querySelector("[data-mensagem-erro]")
    
    document.querySelector('[data-categorias]').classList.add('hidden');
    
    //apaga as listas de categorias
    listas.forEach(e => {
        while (e.firstChild) {
            e.removeChild(e.firstChild);
        }   
    })
     
      
    busca.forEach(element => {
        listaDeBusca.appendChild(constroiProduto(element.imagem, element.nome, element.preco))        
    });

    if(busca.length != 0 ) {    
        mensagemDeErro.innerHTML = `<h2>Itens encontrados.</h2>`
    } else {
        mensagemDeErro.innerHTML = `<h2>Não existem produtos com esse termo.</h2>`
    }

}

const botaoPesquisa = document.querySelector("[data-botao-pesquisa]");

botaoPesquisa.addEventListener("click", evento => buscarProduto(evento))