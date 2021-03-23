let nota1 = parseFloat(prompt("digite o primeiro nota"));
let nota2 = parseFloat(prompt("digite o segundo nota"));
let nota3 = parseFloat(prompt("digite o terceiro nota"));

let media = (nota1+nota2+nota3)/3;

if(!nota1 || !nota2 || !nota3) {
    window.alert("digite todas as notas!")
    window.location.reload()
}

if (!(nota1 >= 0 && nota1 <= 10) || !(nota2 >= 0 && nota2 <= 10) || !(nota3 >= 0 && nota3 <= 10) ) {
    window.alert("digite notas entre 0 e 10!")
    window.location.reload()
}

if (media >= 5 ) {
    window.alert("aprovado!")
} else {
    window.alert("reprovado!")
}

