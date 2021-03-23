nomeParaDeletar = prompt("Digite o nome para deletar");
let nomes = ['Nathan', 'Gabriel', 'Matheus', 'Roberta'];

indice = nomes.indexOf(nomeParaDeletar);
console.log(indice);
nomes.splice(indice, 1);
alert(nomes);