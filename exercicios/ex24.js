let n1 = parseFloat(prompt("Digite o primeiro número"));
let n2 = parseFloat(prompt("Digite o segundo número"));
let i = n1;

if(n1<n2){
    do {
        i = i + 1;
        if(i%2 == 0){
        alert("par " + i);
        } else {
            alert("ímpar " + i);
        }
    } while (i<n2 - 1);
} else {
    do {
        i = i - 1;
        if(i%2 == 0){
            alert("par " + i);
            } else {
                alert("ímpar " + i);
            }
    } while (i>n2 + 1);
}