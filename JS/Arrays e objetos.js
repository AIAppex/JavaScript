const livros = [];
function encontrarLivro(titulo) {
    return livros.find(livro => livro.titulo === titulo);
}
function adicionarLivro(titulo, autor, quantidade) {
    if (!encontrarLivro(titulo)) {
        livros.push({ titulo, autor, quantidade });
        console.log(`Livro "${titulo}" adicionado ao estoque.`);
    } else {
        console.log(`O livro "${titulo}" já existe no estoque.`);
    }
}
function removerLivro(titulo) {
    const index = livros.findIndex(livro => livro.titulo === titulo);
    if (index !== -1) {
        livros.splice(index, 1);
        console.log(`Livro "${titulo}" removido do estoque.`);
    } else {
        console.log(`O livro "${titulo}" não foi encontrado no estoque.`);
    }
}
function atualizarQuantidade(titulo, novaQuantidade) {
    const livro = encontrarLivro(titulo);
    if (livro) {
        livro.quantidade = novaQuantidade;
        console.log(`Quantidade do livro "${titulo}" atualizada para ${novaQuantidade}.`);
    } else {
        console.log(`O livro "${titulo}" não foi encontrado no estoque.`);
    }
}
function listarLivros() {
    if (livros.length === 0) {
        console.log("O estoque está vazio.");
    } else {
        console.log("Livros no estoque:");
        livros.forEach(livro => {
            console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}, Quantidade: ${livro.quantidade}`);
        });
    }
}

