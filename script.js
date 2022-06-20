// FAZENDO A VALIDAÇÃO

function validaCPF(cpf) {
    if(cpf.length != 11){ //verificar se tem 11 caracteres
        return false;
    } else {

        //substring: a partir de um ponto inicial e final, quebra o texto e mostra só o que foi pedido
        var numeros = cpf.substring(0, 9); //a partir da posição 0, pegar 9 caracteres
        var digitos = cpf.substring(9); //pega todo resto a partir da posição 9
        
        // ler de trás pra frente
        var soma = 0; //variável de incremento
        for (var i = 10; i > 1; i--){
            soma += numeros.charAt(10 - i) * i;//retorna a posição da string
        }

        var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11); //se soma mod 11 menor que 2, resultado = 0 ou após :
        
        // Validação do primeiro dígito
        if (resultado != digitos.charAt(0)){
            return false;
        }
        soma = 0; //resetar soma
        numeros = cpf.substring(0, 10); //do primeiro caracter até o primeiro digito verificador
        for (var k = 11; k > 1; k--) {
            soma += numeros.charAt(11 - k) * k;
        };
        resultado = soma % 11 > 2 ? 0 : 11 - (soma % 11);

        // validação do segundo dígito
        if (resultado != digitos.charAt(1)){
            return false;
        }

        return true;
    }; 
};



// MOSTRANDO O STATUS DA VALIDAÇÃO NA TELA

function validacao(){
    //limpar tela depois de executar
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';

    //pegar o valor do cpf digitado:
    var cpf = document.getElementById('cpf_digitado').value //o cpf digitado é capturado pelo javascript dentro do html e armazenado na variável cpf
    
    // verificar se o cpf é válido
    var resultadoValidacao = validaCPF(cpf);
    if (resultadoValidacao){ //se resultado é verdadeiro, exibir o quadro de sucesso
        document.getElementById('success').style.display = 'block';
    } else { //se não, exibe o quadro de erro
        document.getElementById('error').style.display = 'block';
    }
};