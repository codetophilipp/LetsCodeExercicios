let saldo = 0;
let op;

function botao() {
    let op = prompt("Digite sua opção: \n a)saldo b)saque c)deposito d)sair");
}

function saque(valor) {
    valor = prompt("digite o valor");
    if(saldo>0 && saldo>valor){
        saldo = saldo - valor;
        console.log("saldo " + saldo + " valor " + valor);
    } else {
        alert("saldo insuficiente");
    }
}

function deposito(valor) {
    valor = prompt("digite o valor");
    saldo = saldo + valor;
    alert(saldo);
}

switch (op) {
    case 'a':
        alert(saldo);
        break;
    case 'b':
        saque();
        break;
    case 'c':
        deposito();
        break;        
    default:
        break;
}