let valorfinal = 0;

function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = parseInt(produto.split('R$')[1]);
    let qtd = document.getElementById('quantidade').value; 

    if (qtd == '') {
      alert('Coloque uma quantidade.');
      return;
    }

    let preco = valorProduto * qtd;
    
    let carrinho = document.getElementById('container__item');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="container__itens__pedido">
    <span class="texto__produto"> ${qtd} </span> ${nomeProduto} <span class="texto__produto">R$${valorProduto}</span>
  </section>`
    
    valorfinal = valorfinal + preco;
    compra = document.getElementById('valor__compra')
    compra.textContent = `R$ ${valorfinal}`
    document.getElementById('valor__compra').value = 0;
}

function limpar(){
    let campoPedidos = document.getElementById('produto').innerHTML = '';
    let campoQt = parseInt(document.getElementById('quantidade').innerHTML = ''); 
}
