const listaColaboradores = []
let idColaborador = 1;

const nomeColaborador = document.getElementById('nomeColaborador')
const idadeColaborador = document.getElementById('idadeColaborador')
const cargoColaborador = document.getElementById('cargoColaborador')
const salarioColaborador = document.getElementById('salarioColaborador')
const dataAdmissaoColaborador = document.getElementById('dataAdmissaoColaborador')
const tabelaColaboradores = document.getElementById('imprimeListaColaboradores')
const inputBusca = document.getElementById('inputBusca');

inputBusca.addEventListener('keyup', (event) => {
    const valor = event.target.value;
    const relacaoColaboradores = buscaColaboradoresPorFiltro(filtroBusca.value, valor)
    exibeListaColaboradores(relacaoColaboradores)
})

const addColaborador = (nome, idade, cargo, salario, dataAdmissao) => {
    colaborador = {
        id : idColaborador,
        nome,
        idade : parseInt(idade),
        cargo,
        salario: parseFloat(salario),
        dataAdmissao
    }
    listaColaboradores.push(colaborador)
    idColaborador++
    exibeListaColaboradores()
    console.log(listaColaboradores)
    limpaInputsForm()
}

const limpaInputsForm = () => {
    nomeColaborador.value = ''
    idadeColaborador.value = ''
    cargoColaborador.value = ''
    salarioColaborador.value = ''
    dataAdmissaoColaborador.value = ''
}

const buscaPorCargo = (cargo) => {
    return (colaborador) => colaborador.cargo.toUpperCase().search(cargo) > -1 
}

const buscaPorId = (id) => {
    return (colaborador) => colaborador.id === id 
}

const buscaPorNome = (nome) => {
    return (colaborador) => colaborador.nome.toUpperCase().search(nome) > -1
}

const buscaColaboradoresPorFiltro = (tipoFiltro, valor) => {
    const listaColaboradoresEncontrados = listaColaboradores.filter(
        tipoFiltro === 'id' ? 
        buscaPorId(parseInt(valor)) : 
        tipoFiltro === 'nome'? 
        buscaPorNome(valor.toUpperCase()) :
        buscaPorCargo(valor.toUpperCase()) 
    )
        return listaColaboradoresEncontrados
}

const exibeListaColaboradores = (relacaoColaboradores) => {
    let visualizaColaboradores = ''
    const relacaoAListar = relacaoColaboradores ? relacaoColaboradores : listaColaboradores
    for(colaborador of relacaoAListar){
        visualizaColaboradores += `
    <table>
      <tr>
        <td>${colaborador.id}</td>
        <td>${colaborador.nome}</td>
        <td>${colaborador.idade}</td>
        <td>${colaborador.cargo}</td>
        <td>${colaborador.salario}</td>
        <td>${colaborador.dataAdmissao}</td>
        <td class="material-icons acao" onclick="removeColaborador(${colaborador.id})"> delete </td>
      
      </tr>
    </table>
        `
    }
    tabelaColaboradores.innerHTML = visualizaColaboradores
}

const removeColaborador = (id) => {
    indiceColaborador = listaColaboradores.findIndex((colaborador) => colaborador.id === parseInt(id))
    listaColaboradores.splice(indiceColaborador, 1)
    exibeListaColaboradores()
}
