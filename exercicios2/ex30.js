const listaCompras = [];

function adicionaItem(item) {
    listaCompras.push(item);
    console.log(item)
    document.getElementById('nomeItem').value = ''; //limpa o input do item
    atualizaLista();
}

function atualizaLista() {
    const ulTag = document.getElementById('listaCompras');
    let listaLi = '';

    for (item of listaCompras) {
        listaLi += `<li>${item}</li>`;
    }

    ulTag.innerHTML = listaLi;
}

function ordenarItens() {
    listaCompras.sort();
    atualizaLista();
}

function limparLista() {
    listaCompras.splice(0);
    atualizaLista();
}



//ctrl + d = seleciona 2 itens