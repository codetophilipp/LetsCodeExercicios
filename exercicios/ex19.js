nomeParaBusca = prompt("Digite o nome para busca");
nomes = ['Nathan', 'Gabriel', 'Nathan', 'Matheus', 'Roberta'];

let primeiro = nomes.indexOf(nomeParaBusca);
let ultimo = nomes.lastIndexOf(nomeParaBusca);
alert("Primeira posição: " + primeiro + " última posição: " + ultimo);