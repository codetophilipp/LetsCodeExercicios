var num = parseFloat(prompt("Digite um número"));
var array = [1,2,3,10,20,30,50,110];

posNum = array.indexOf(num);

if(posNum == -1) {
    alert("Número não encontrado, tente novamente!")
    window.location.reload();
} else {
    alert("o número digitado encontra-se no índice: " + array.indexOf(num));

}