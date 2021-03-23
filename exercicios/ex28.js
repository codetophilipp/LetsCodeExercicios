arrayDados = [
    {
        nome: 'Nathan',
        nota1: 5,
        nota2: 7,
        nota3: 10
    },
    {
        nome: 'Rodrigo',
        nota1: 7,
        nota2: 9,
        nota3: 8
    },
    {
        nome: 'Jeferson',
        nota1: 6,
        nota2: 7,
        nota3: 9
    },
    {
        nome: 'Alan',
        nota1: 10,
        nota2: 7,
        nota3: 10
    },
    {
        nome: 'Jorge',
        nota1: 3,
        nota2: 10,
        nota3: 10
    },
    {
        nome: 'Otávio',
        nota1: 5,
        nota2: 4,
        nota3: 4
    }
]

let alunosAprovados = [];
let alunosReprovados = [];
let media = 0;

for (aluno of arrayDados) {
    media = (aluno.nota1 + aluno.nota2 + aluno.nota3) / 3;
    if(media > 5) {
        alunosAprovados.push(aluno);
    } else {
        alunosReprovados.push(aluno);
    }
}

console.log(alunosAprovados);
console.log(alunosReprovados);