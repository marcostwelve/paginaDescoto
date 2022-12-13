let valorInput = document.querySelector("#ivalor");
let tamanho = 5;
let pass = "";
function cuponDesconto() {
    if(valorInput.value == "" || valorInput.value == 0) {
        alert("O valor não pode estar vazio, ou ser igual a 0!");
    }

    else {
        let porcentagem = Math.floor(Math.random() * (100 - 10) + 10);
        if(porcentagem == 100) {
            document.querySelector(".valor").innerHTML = `${porcentagem}%. Tudo grátis!`;
            document.querySelector(".cupon").innerHTML = `Digite o código abaixo na loja para parceira
            para obter o desconto <span>${gerarCodigoDesconto(tamanho)}</span>`;
        }

        document.querySelector(".valor").innerHTML = `Desconto de ${porcentagem}% em suas compras!`;
        document.querySelector(".cupon").innerHTML = `Digite o código na loja parceira para obter o desconto
        <span>${gerarCodigoDesconto(tamanho)}</span>`;
        document.querySelector(".card").style.display = "block";
    }
}

function limparCampos() {
    valorInput.value = "";
    pass = "";
    document.querySelector(".card").style.display = "none";
}

function gerarCodigoDesconto(tamanho) {
    let charset = "abcdefghijklmnopqrstuvwxyz0123456789";
    let stringAleatoria = "";
    for(let i = 0; i < tamanho; i++) {
        stringAleatoria += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    pass = stringAleatoria;
    return stringAleatoria;
}

function copiarCodigo() {

    function afterSucess() {
        alert("Código copiado com sucesso!");
    }

    function afterFailure() {
        alert("A cópia falhou!", error);
    }
    
    navigator.clipboard.writeText(pass)
    .then(afterSucess, afterFailure);
}

