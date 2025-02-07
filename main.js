    //Função de adicionar contato
function AdicionarContato(){

        //buscando o DOM - Numero e pegando o valor.
    const inputNomePessoa = document.getElementById('inputNome');
    let userName = inputNome.value

        //buscando o DOM - Numero e pegando o valor.
    const inputTelefonePessoa = document.getElementById('inputNumero');
    let userTel = inputNumero.value

        //Fazendo o IF para aparecer mensagem de erro
    if (userName,userTel == "") {
            //mensagem erro
        let mensagemErro = "Por favor, insira os dados acima!"
        document.getElementById("mensagem").textContent = mensagemErro

        } else {
                // Adicionando Linha e contato
            const listaContato = document.getElementById('listaContato');
            let novoContato = document.createElement('li')
            novoContato.textContent = userName + userTel
            listaContato.appendChild(novoContato)

                //mensagem sucesso
            let mensagemSucesso = "Contato adicionado:"
            document.getElementById('mensagem').textContent = mensagemSucesso 

        }
        //Atualiza os forms e zera conteudo;
        inputNomePessoa.value = "";
        inputTelefonePessoa.value = "";
}


    