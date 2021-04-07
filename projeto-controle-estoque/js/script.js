const produtos = [];
const descricaoProduto = document.getElementById('descricaoProduto');
const quantidadeProduto = document.getElementById('quantidadeProduto');
const categoriaProduto = document.getElementById('categoriaProduto');
const linkImagemProduto = document.getElementById('linkImagemProduto');
const inputBusca = document.getElementById('inputBusca');
let idProduto = 1;

// inputBusca.addEventListener('keyup', (event) => {
//   const descricao = event.target.value;
//   const listaProdutos = buscaProdutosPorDescricao(descricao);
//   imprimeProdutos(listaProdutos);
// });

inputBusca.addEventListener('keyup', (event) => {
  const valor = event.target.value;
  const listaProdutos = buscaProdutosPorFiltro(filtroBusca.value, valor);
  imprimeProdutos(listaProdutos); 
});


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
    limpaCampos();
}

const limpaCampos = () => {
  descricaoProduto.value = '';
  quantidadeProduto.value = '';
  categoriaProduto.value = '';
  linkImagemProduto.value = '';
}

// const buscaProdutosPorDescricao = (descricao) => {
//   const descricaoUpperCase = descricao.toUpperCase();
//   const listaProdutosEncontrandos = produtos.filter((produto) => produto.descricao.toUpperCase().search(descricaoUpperCase) > -1);
//   return listaProdutosEncontrandos;
// }

// Funções de alta ordem podem retornar/receber funções;
const buscaPorDescricao = (descricao) => {
  return (produto) => produto.descricao.toUpperCase().search(descricao) > -1;
};

// Função de alta ordem que retorna outra função
const buscaPorId = (id) => {
  return (produto) => produto.id === id;
}

const buscaProdutosPorFiltro = (tipoFiltro, valor) => {
  // let listaProdutosNovos = [];
  // if(tipoFiltro === 'id') {
  //     listaProdutosNovos = produtos.filter((produto) => produto.id === id);
  // } else {
  //     listaProdutosNovos = produtos.filter(produto.descricao.toUpperCase().search(descricao) > -1);
  // }
  // return listaProdutosNovos;
  const listaProdutosEncontrandos = produtos.filter(
  tipoFiltro === 'id' ?
  buscaPorId(parseInt(valor)) :
  buscaPorDescricao(valor.toUpperCase()));
  return listaProdutosEncontrandos;
}


const imprimeProdutos = (listaProdutos) => {
    let visualizacaoProdutos = '';
    const produtosAListar = listaProdutos ? listaProdutos : produtos;
    const listaCards = document.getElementById('visualizacaoProdutos');
    for(produto of produtosAListar) {
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
