const produtos = [];
let idProduto = 1;

const atualizaProdutos = (descricao, quantidade, categoria, link) => {
    produto = {
        id : idProduto,
        descricao,
        quantidade : parseFloat(quantidade),
        categoria,
        link
    }
    produtos.push(produto);
    console.log(produtos);
    imprimeProdutos();
    idProduto++;
}

const imprimeProdutos = () => {
    let visualizacaoProdutos = '';
    const listaCards = document.getElementById('visualizacaoProdutos');
    for(produto of produtos) {
        visualizacaoProdutos += `
        <div class="card">
        <img
          width="250px"
          height="250px"
          src="${produto.link}"
        />
        <div class="descricao-card">
          <p><b>${produto.descricao}</b></p>
          <p>Quantidade em estoque: <b>${produto.quantidade}</b></p>
          <p>Categoria: <b>${produto.categoria}</b></p>
        </div>
        <div class="acoes">
        <span class="material-icons acao" onclick="removeProduto(${produto.id})"> delete </span>
        <span onclick="editaProduto(${produto.id})"> Editar </span>
        </div>
      </div>
        `
    }
    listaCards.innerHTML = visualizacaoProdutos;
}

const removeProduto = (id) => {
    indiceProduto = produtos.findIndex((produto) => produto.id === parseInt(id));
    produtos.splice(indiceProduto, 1);
    imprimeProdutos();
}

const editaProduto = (id) => {
  indiceProduto = produtos.findIndex((produto) => produto.id === parseInt(id));
  const edita = document.getElementById('edicaoProdutos');
let edicaoProdutos = '';
  for (produto of produtos) {
    edicaoProdutos += `<div>
    <label for="editaQtddProduto">Digite a nova qtdd</label>
    <input type="number" id="editaQtddProduto"/>
    <button onclick="confirmaEditar("quantidadeProduto.value")>Editar</button>
    </div>`;
    
  }
  edita.innerHTML = edicaoProdutos;
}

const confirmEditar = () => {

}