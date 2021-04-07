const listaAlunos = []
let idAluno = 1 

const nomeAluno = document.getElementById('nomeAluno')
const idade = document.getElementById('idade')
const valorMensalidade = document.getElementById('valorMensalidade')

const cadastroAlunos = (nomeAluno, idade, valorMensalidade, professorResponsavel, temAcesso) => {
    const aluno = {
        idAluno,
        nomeAluno, 
        idade : parseInt(idade),
        valorMensalidade : parseFloat(valorMensalidade),
        professorResponsavel, 
        exerciciosAdaptados : idade > 60 ? true : false,
        temAcesso : parseInt(temAcesso)
    }
    listaAlunos.push(aluno)
    idAluno++
    exibeAlunos()
    limpaDadosFormulario()
}

const limpaDadosFormulario = () => {
    nomeAluno.value = ''
    idade.value = ''
    valorMensalidade.value = ''
}

const exibeAlunos = () => {
    const divCard = document.getElementById('visualizacao')
    let cardAlunos = ''
    for(aluno of listaAlunos) {
        cardAlunos += `
        <div class="card">
        <div class="descricao-card">
          <p>Nome: <b>${aluno.nomeAluno}</b></p>
          <p>Idade: <b>${aluno.idade}</b></p>
          <p>Exercícios Adaptados: <b>${aluno.exerciciosAdaptados ? 'Sim' : 'Não'}</b></p>
          <p>Professor Responsável: <b>${aluno.professorResponsavel}</b></p>
          <p>Tem acesso: <span class="${aluno.temAcesso ? 'sim' : 'nao'}" style="cursor:pointer" onclick="atualizaStatusAcesso(${aluno.idAluno})"><b>${aluno.temAcesso ? 'Sim' : 'Não'}</b></span></p>
          <p>Valor mensalidade: <b>${aluno.valorMensalidade}</b></p>
        </div>
        <div class="acoes">
          <span class="material-icons acao" onclick="deletarAluno(${aluno.idAluno})"> delete </span>
        </div>
      </div>
        `
    }
    divCard.innerHTML = cardAlunos
    exibeIndicadores()
}

const exibeIndicadores = () => {
    const divIndicadores = document.getElementById('indicadores')
    let h3Indicadores = ''
    let somaIdades = 0
    let somaMensalidades = 0

    const retornaH3Formatado = (titulo, valor) => {
      return `<h3> ${titulo}: ${valor}</h3>`
    }

    for (aluno of listaAlunos) {
      somaIdades += aluno.idade
      somaMensalidades += aluno.valorMensalidade
    }

    h3Indicadores += retornaH3Formatado('Total de Alunos', listaAlunos.length)
    h3Indicadores += retornaH3Formatado('Média idades', 
    calcular(dividir, somaIdades, listaAlunos.length))
    h3Indicadores += retornaH3Formatado('Total Mensalidades', somaMensalidades)
    h3Indicadores += retornaH3Formatado('Média Mensalidades',
    calcular(dividir, somaMensalidades, listaAlunos.length))
    
    divIndicadores.innerHTML = h3Indicadores
        
}

const buscaPorId = id => aluno => aluno.idAluno === id

deletarAluno = (id) => {
    indiceAluno = listaAlunos.findIndex(buscaPorId)
    console.log(indiceAluno)
    listaAlunos.splice(indiceAluno, 1)
    exibeAlunos()
}

const atualizaStatusAcesso = (id) => {
  const alunoIndice = listaAlunos.findIndex(buscaPorId(id))
  if(alunoIndice > -1) {
    const temAcesso = listaAlunos[alunoIndice].temAcesso
    console.log(temAcesso)
    listaAlunos[alunoIndice].temAcesso = !temAcesso
  }
  exibeAlunos()
}
