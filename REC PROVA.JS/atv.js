let produtos = [];

function adicionarProduto(nome, preco) {
   
    if (!nome || nome.trim() == '') {
        console.log('Nome inválido.');
        return;
    }

    if (isNaN(preco) || preco <= 0) {
        console.log('Preço inválido.');
        return;
    }

    const produto = {
        id: produtos.length + 1,
        nome: nome.trim(),
        preco: preco
    };

    produtos.push(produto);
    console.log(`Produto ${nome} adicionado com sucesso!`);
}

function removerProduto(id) {
    const index = produtos.findIndex(produto => produto.id == id);

    if (index !== -1) {
        const produtoRemovido = produtos.splice(index, 1);
        console.log(`Produto ${produtoRemovido[0].nome} removido com sucesso!`);
    } else {
        console.log('Produto não encontrado.');
    }
}

function listarProdutos() {
    if (produtos.length == 0) {
        console.log('Nenhum produto cadastrado.');
    } else {
        console.log('Produtos cadastrados:');
        produtos.forEach(produto => {
            console.log(`ID: ${produto.id}, Nome: ${produto.nome}, Preço: R$${produto.preco.toFixed(2)}`);
        });
    }
}

function buscarProduto(id) {
    var produto = null;
    
    for (var i = 0; i < produtos.length; i++) {
        if (produtos[i].id == id) {
            produto = produtos[i];
            break;
        }
    }

    if (produto !== null) {
        console.log('Produto encontrado: ID: ' + produto.id + ', Nome: ' + produto.nome + ', Preço: R$' + produto.preco.toFixed(2));
    } else {
        console.log('Produto não encontrado.');
    }
}

adicionarProduto('Caderno', 15.99);
adicionarProduto('Caneta', 3.50);
adicionarProduto('Mochila', 120.00);

listarProdutos();
buscarProduto(2);
removerProduto(1);
listarProdutos();