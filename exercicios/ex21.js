let lista = [
    {
        nome: 'pipoca',
        quantidade: 1
    },
    {
        nome: 'sal',
        quantidade: 2
    },
    {
        nome: 'pimenta',
        quantidade: 1
    }
]

let nome = prompt("Digite o nome do produto: ");
let produtoBuscado = lista.findIndex(item => item.nome === nome);
if(produtoBuscado > -1) alert(nome);
else alert("não encontrado")