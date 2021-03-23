let senha = parseInt(prompt("Digite uma senha de 4 números"));
let senhaDoSistema = 9999;

while(senha !== senhaDoSistema) {
    alert("senha inválida, tente novamente!");
    senha = parseInt(prompt("Digite uma senha de 4 números"));
}

alert("senha correta");