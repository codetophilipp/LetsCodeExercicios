const pessoas = [];
const siglaMasculino = 'M';
const siglaFeminino = 'F';

const adicionaPessoas = (idade, peso, sexo) => {
    const pessoa = {
        idade: parseInt(idade),
        peso: parseFloat(peso),
        sexo
    };
    pessoas.push(pessoa);
    atualizaLista();
}

const atualizaContadores = () => {
    const totalHomens = document.getElementById('totalHomens');
    const totalMulheres = document.getElementById('totalMulheres');
    const mediaIdadeHomens = document.getElementById('mediaIdadeHomens');
    const mediaIdadeMulheres = document.getElementById('mediaIdadeMulheres');

    totalHomens.innerText = `Total de homens: ${totalPessoasSexo(siglaMasculino)}`;
    totalMulheres.innerText = `Total de mulheres: ${totalPessoasSexo(siglaFeminino)}`;
    mediaIdadeHomens.innerText = `Média de idade dos homens: ${mediaIdadePorSexo(siglaMasculino)}`;
    mediaIdadeMulheres.innerText = `Média de idade das mulheres: ${mediaIdadePorSexo(siglaFeminino)}`;
    mediaPesoHomens.innerText = `Média de peso dos homens: ${mediaPesoPorSexo(siglaMasculino)}`;
    mediaPesoMulheres.innerText = `Média de peso das Mulheres: ${mediaPesoPorSexo(siglaFeminino)}`;
}

const totalPessoasSexo = (sexo) => {
    const pessoasSexo = pessoas.filter((pessoa) => pessoa.sexo === sexo);
    return pessoasSexo.length;
}

const mediaIdadePorSexo = (sexo) => {
    let somaIdades = 0;
    const pessoasPorSexo = pessoas.filter((pessoa) => pessoa.sexo === sexo);
    for (pessoa of pessoasPorSexo) {
        somaIdades += pessoa.idade;
    }
    if (pessoasPorSexo.length > 0) {
        return somaIdades / pessoasPorSexo.length;
    }
    return 0;
}

const mediaPesoPorSexo = (sexo) => {
    let somaPesos = 0;
    const pessoasPorPeso = pessoas.filter((pessoa) => pessoa.sexo === sexo);
    for (pessoa of pessoasPorPeso) {
        somaPesos += pessoa.peso;
    }
    if(pessoasPorPeso.length > 0){
    return somaPesos / pessoasPorPeso.length;
    } 
    return 0;
}

const atualizaLista = () => {
    const listaUl = document.getElementById('listaPessoas');
    let pessoasLi = '';

    for (pessoa of pessoas){
        pessoasLi += `<li>
        Idade: ${pessoa.idade},
        Sexo: ${pessoa.sexo === 'M' ? 'Masculino' : 'Feminino'},
        Peso: ${pessoa.peso}</li>`;
    }

    listaUl.innerHTML = pessoasLi;
    atualizaContadores();
}