document.getElementById("btnCalcular").addEventListener("click", function() {
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);
    var valor3 = parseFloat(document.getElementById("valor3").value);
    var valor4 = parseFloat(document.getElementById("valor4").value);
    
    if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3) || isNaN(valor4)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira quatro valores válidos.";
    } else {
        var menor = encontrarMenor(valor1, valor2, valor3, valor4);
        document.getElementById("resultado").innerHTML = "O menor valor é: " + menor;
    }
});

function encontrarMenor(valor1, valor2, valor3, valor4) {
    var menor = valor1;
    if (valor2 < menor) {
        menor = valor2;
    }
    if (valor3 < menor) {
        menor = valor3;
    }
    if (valor4 < menor) {
        menor = valor4;
    }
    return menor;
}
