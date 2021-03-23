nomeParaBusca = prompt("Digite o nome para busca");
nomes = ['Nathan', 'Gabriel', 'Matheus', 'Roberta'];

let indice = nomes.indexOf(nomeParaBusca);
console.log(indice);

if(indice > -1){
    alert("encontrado na posição: " + indice)
} else (
    alert("não encontrado")
)