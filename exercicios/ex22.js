lista = [
    {
        nome: 'pipoca',
        quantidade: 1
    },
    {
        nome: 'sal',
        quantidade: 2
    },
    {
        nome: 'pipoca',
        quantidade: 1
    },
    {
        nome: 'pimenta',
        quantidade: 1
    }
   ]

   let nome = prompt("Digite o nome do produto: ");
   let buscaProduto = lista.filter(itemBuscado => itemBuscado.nome === nome);
   if(buscaProduto.length > 0) console.log(buscaProduto);
   else console.log("Não encontrado");
   