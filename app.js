function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = parseInt(produto.split('R$')[1]);
    let qtd = parseInt(document.getElementById('quantidade').value); 

    let preco = valorProduto * qtd;

    let carrinho = document.getElementById('container__item');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="container__itens__pedido">
    <span class="texto__produto"> ${qtd} </span> ${nomeProduto} <span class="texto__produto">R$${valorProduto}</span>
  </section>`
}
