let dados = [
    {
      nome: 'Nathan',
      permissaoAcesso: false,
      usuario: 'NT1'
    },
    {
      nome: 'Felipe',
      permissaoAcesso: true,
      usuario: 'FLP'
    },
    {
      nome: 'Arthur',
      permissaoAcesso: true,
      usuario: 'ATR'
    }
]

let novoUsuario = prompt("Digite seu nome de usuário: ");

let x = dados.find((x) => x.nome === novoUsuario);


if(x == undefined) {
  alert("Usuário não encontrado!")
} else if(x.permissaoAcesso) {
  alert("Logado com sucesso!")
} else {
  alert("Usuário sem permissão de acesso!")
}