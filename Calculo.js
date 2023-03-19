// Define as funções para cada operação de imc   
function IMC_H(peso, altura, calculo) {      
    
    peso = parseFloat(document.getElementById("peso").value.replace(",", "."));
    altura = parseFloat(document.getElementById("altura").value.replace(",", "."));
    
    calculo = peso / (altura * altura);

    return calculo;
}

function IMC_F(peso, altura, calculo) {
    
    peso = parseFloat(document.getElementById("peso").value.replace(",", "."));
    altura = parseFloat(document.getElementById("altura").value.replace(",", "."));
    calculo = peso / (altura * altura).toFixed(2);

    return calculo;
}


function calcularIMC(peso, altura, resultado){ 
    //declaração das variaveis

        resultado;      
        
        peso = parseFloat(document.getElementById("peso").value);
        altura = parseFloat(document.getElementById("altura").value);

        var Genero = document.getElementById("genero").value;
        
        var teste = "erro";
        
        // Verifica se os campos de peso e altura foram preenchidos corretamente
        if(isNaN(peso) || isNaN(altura)){
            alert(erro);
            alert("Preencha corretamente os campos de peso e altura."); // retorna 0 para indicar que a função não funcionou corretamente
            return 0; 
        }   
    
        if (Genero === "Masculino") {
            resultado = IMC_H(peso, altura);
            
            if (resultado = 18,5) {
                document.getElementById("resulIMC").value = resultado + "Magreza";
            }

            else if (resultado > 18,5 || resultado < 24,9) {
                document.getElementById("resulIMC").value = resultado + "Normal";
            }

            else if (resultado > 25 || resultado < 29,9) {
                document.getElementById("resulIMC").value = resultado + "Sobrepeso";
            }

            else if (resultado > 30  || resultado < 34,9) {
                document.getElementById("resulIMC").value = resultado + "Obesidade grau I";
            }

            else if (resultado > 35   || resultado < 39,9) {
                document.getElementById("resulIMC").value = resultado + "Obesidade grau II";
            }

            else if (resultado > 40) {
                document.getElementById("resulIMC").value = resultado + "Obesidade grau III";
            }
            
        }
        
        else if (Genero === "Feminino") {
            resultado = IMC_F();
            // Restante do código
        } 
        else {
            
            alert("Por favor, selecione o gênero.");
        }
    
        if(isNaN(resultado)){
            alert("Houve um erro ao calcular o IMC.");
            return 0;
        }
    
        document.getElementById("resulIMC").value = resultado;
        return 1;

} 