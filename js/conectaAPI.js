async function listaProdutos() {
    const conexao = await fetch('http://localhost:3000/produtos');
    console.log(conexao);
    const conexaoConvertida = await conexao.json();
    console.log(conexaoConvertida);
    return conexaoConvertida;   
};

async function criaProduto(imagem, categoria, nome, preco, descricao) {
    const conexao = await fetch('http://localhost:3000/produtos', {
        method: "POST",
        mode: 'cors',
        headers: {
            'content-type': 'application/json'
        },        
        body: JSON.stringify({
            imagem: imagem,
            categoria: categoria,
            nome: nome,
            preco: preco,
            descricao: descricao
        })
    });    

    if(!conexao.ok) {        
        throw new Error("Não foi possível cadastrar o produto.");
    }

    const conexaoConvertida = conexao.json();
    return conexaoConvertida;
};

async function buscaProduto (termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/produtos?q=${termoDeBusca}`);
    const conexaoConvertida = conexao.json();
    console.log(conexaoConvertida);
    return conexaoConvertida;
}

export const conectaAPI = {
    listaProdutos,
    criaProduto,
    buscaProduto
};