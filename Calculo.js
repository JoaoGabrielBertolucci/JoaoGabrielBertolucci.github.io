// Define as funções para cada operação de imc   
function IMC_H(peso, altura) {      
    
    peso = parseFloat(document.getElementById("peso").value);
    altura = parseFloat(document.getElementById("altura").value);  
    
    return peso / (altura * altura);
}

function IMC_F(peso, altura) {
    
    peso = parseFloat(document.getElementById("peso").value);
    altura = parseFloat(document.getElementById("altura").value);

    return peso / (altura * altura);
}


function calcularIMC(peso, altura, resultado){ 
    //declaração das variaveis

        resultado;      
        
        peso = parseFloat(document.getElementById("peso").value);
        altura = parseFloat(document.getElementById("altura").value);

        var Genero = document.getElementById("genero").value;
        
        
        // Verifica se os campos de peso e altura foram preenchidos corretamente
        if(isNaN(peso) || isNaN(altura)){
            alert("Preencha corretamente os campos de peso e altura."); // retorna 0 para indicar que a função não funcionou corretamente
            return 0; 
        }   
        
        if(isNaN(peso) || isNaN(altura)){
            alert("Preencha corretamente os campos de peso e altura.");
            return 0; 
        }   
    
        if (Genero === "Masculino") {
            resultado = IMC_H(peso, alura);
            
            if (resultado <= 18.5) {
                document.getElementById("resulIMC").value = resultado.toFixed(2) + "Magreza";
            }
    
            else if (resultado > 18.5 || resultado <= 24.9) {
                document.getElementById("resulIMC").value = resultado.toFixed(2) + " Normal";
            }
    
            else if (resultado > 24.9 && resultado <= 29.9) {
                document.getElementById("resulIMC").value = resultado.toFixed(2) + " Sobrepeso";
            }
    
            else if (resultado > 29.9 && resultado <= 34.9) {
                document.getElementById("resulIMC").value = resultado.toFixed(2) + " Obesidade grau I";
            }
    
            else if (resultado > 34.9 && resultado <= 39.9) {
                document.getElementById("resulIMC").value = resultado.toFixed(2) + " Obesidade grau II";
            }
    
            else if (resultado > 39.9) {
                document.getElementById("resulIMC").value = resultado.toFixed(2) + " Obesidade grau III";
            }
        
        } 
        else if (Genero === "Feminino") {
            resultado = IMC_F();
            // Restante do código
        } 
        else {
            alert("Houve um erro ao calcular o IMC.");
            alert("Por favor, selecione o gênero.");
        }
    
        if(isNaN(resultado)){
            return 0;
        }
    
        document.getElementById("resulIMC").value = resultado;
        return 1;

} 