let n1 = parseFloat(prompt("digite o primeiro número"));
let op = prompt("digite a operação ( + | - | * | / )");
let n2 = parseFloat(prompt("digite o segundo número"));

switch (op) {
    case '+':
        window.alert(n1+n2)
        break;
    case '-':
        window.alert(n1-n2)
        break;
    case '*':
        window.alert(n1*n2)
        break;
    case '/':
        window.alert(n1/n2)
        break;
    default:
        window.alert("opção inválida")
        window.location.reload()
        break;
}