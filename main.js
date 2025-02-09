
$(document).ready(function() {
    $('header').click(function() {
        $('form').slideDown(); // ANIMACAO BARRA DESCENDO
    });

    $('header').on('dblclick', function() {
        $('form').slideUp(); // ANIMACAO BARRA SUBINDO
    });

    // Evento de duplo clique para remover contatos
    $(document).on('dblclick', 'li', function() {
        $(this).remove();
    });
});

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
            let mensagemSucesso = "TOQUE DUAS VEZES PARA APAGAR"
            document.getElementById('mensagem').textContent = mensagemSucesso 
            document.getElementById('mensagem').className = "mensagem-sucesso";

        }
        //Atualiza os forms e zera conteudo;
        inputNomePessoa.value = "";
        inputTelefonePessoa.value = "";

            // IMPLEMENTACAO JQUERRY PARA CLICAR DUAS VEZES E REMOVER CONTATO;
        $(document).on('dblclick', 'li', function () {
            $(this).remove();
        });
}


    