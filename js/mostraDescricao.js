import { conectaAPI } from "./conectaAPI.js";

async function mostraDescricao () {

    const produtos = await conectaAPI.listaProdutos();
    const botoesVerMais = document.querySelectorAll('[data-botao-verMais]');
    var botoesVerMaisArray = Array.from(botoesVerMais); //tranforma object-like em arrays.

    for (let i = 0; i < botoesVerMaisArray.length; i++) {
        const botao = botoesVerMais[i];  
        botao.addEventListener('click', evento => {
            const produto = evento.target.parentNode.childNodes[3].textContent;
            
            
            //console.log(produtos.find(element => element == produto));
        })      
        
        
        //console.log(produtos.indexOf(produtos[i]));
        
    }
    
    

    //console.log(Object.values(produtos[i])[5]);
       
}   

mostraDescricao();
