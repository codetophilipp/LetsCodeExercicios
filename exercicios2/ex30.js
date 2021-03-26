const listaCompras = ['arroz', 'massa'];

// function adicionaItem(item) {
//     listaCompras.push(item);
//     console.log(item)
//     document.getElementById('nomeItem').value = ''; //limpa o input do item
//     atualizaLista();
// }

const adicionaItem = ((item) => {
     listaCompras.push(item);
     document.getElementById('nomeItem').value = '';
     atualizaLista();
});

// function atualizaLista() {
//     const ulTag = document.getElementById('listaCompras');
//     let listaLi = '';

//     for (item of listaCompras) {
//         listaLi += `<li>${item}</li>`;
//     }

//     ulTag.innerHTML = listaLi;
// }

const atualizaLista = (() => {
    const ulTag = document.getElementById('listaCompras');
    let listaLi = '';

    for (item of listaCompras) {
        listaLi += `<li>${item}</li>`;
    }
    ulTag.innerHTML = listaLi;
});

// function ordenarItens() {
//     listaCompras.sort();
//     atualizaLista();
// }

const ordenarItens = (() => {
    listaCompras.sort();
    atualizaLista();
});

// function limparLista() {
//     listaCompras.splice(0);
//     atualizaLista();
// }

const limparLista = (() => {
    listaCompras.splice(0)
    atualizaLista();
});

const imprimirLista = () => {
    atualizaLista();
}

const deletarItem = (item) => {
    find = listaCompras.indexOf(item);
    if (find > -1) listaCompras.splice(find, 1);
    else alert("item não consta na lista!")
    atualizaLista();
}

//ctrl + d = seleciona 2 itens