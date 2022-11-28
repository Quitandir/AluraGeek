async function listaProdutos() {
    const conexao = await fetch('http://localhost:3000/produtos');
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida;   
};

async function criaProduto(imagem, categoria, nome, preco, descricao) {
    const conexao = await fetch('http://localhost:3000/produtos', {
        method: "POST",
        mode: 'cors',
        headers: {
            'content-type': 'application/json;charset=utf-8'
        },
        
        body: JSON.stringify({
            imagem: imagem,
            categoria: categoria,
            nome: nome,
            preco: preco,
            descricao: descricao
            })
    });

    console.log(conexao);   
    if(!conexao.ok) {
        throw new Error("Não foi possível enviar o vídeo.")
    }

    const conexaoConvertida = await conexao.json();
    console.log(conexaoConvertida);
    return conexaoConvertida;
};

export const conectaAPI = {
    listaProdutos,
    criaProduto
};