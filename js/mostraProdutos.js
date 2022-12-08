import { conectaAPI } from "./conectaAPI.js";

const listaStarWars = document.querySelector('[data-lista="starWars"]');
const listaConsoles = document.querySelector('[data-lista="consoles"]');
const listaDiversos = document.querySelector('[data-lista="diversos"]');


export default function constroiProduto(imagem,  nome,  preco) {
    const produto = document.createElement("li");
    produto.className = "produto";

    produto.innerHTML = 
    `  
    <div class="produto">
        <img class="imagem-produto" src="${imagem}" >
        <p class="nome-produto">${nome}</p>
        <p class="preco-produto">${preco}</p>
        <button class="link-produto" data-botao-verMais>Ver produto</button >
    </div>
    `
        
return produto;
}

async function listaProdutos () {

    try{
        const listaAPI = await conectaAPI.listaProdutos ();
               
        listaAPI.forEach( (element) => {
            if (element.categoria == "Star Wars") {
                listaStarWars.appendChild(constroiProduto(element.imagem, element.nome, element.preco))
            };
            if (element.categoria == "Consoles") {
                listaConsoles.appendChild(constroiProduto(element.imagem, element.nome, element.preco))
            };
            if (element.categoria == "Diversos") {
                listaDiversos.appendChild(constroiProduto(element.imagem, element.nome, element.preco))
            }
        });
        
    } catch {
        listaStarWars.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de produtos</h2>`;
    }
    
}

listaProdutos();




