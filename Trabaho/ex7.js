document.getElementById("btnVerificar").addEventListener("click", function() {
    var numero = parseInt(document.getElementById("numero").value);
    
    if (isNaN(numero)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira um número válido.";
    } else {
        if (numero % 2 === 0) {
            document.getElementById("resultado").innerHTML = "O número é par.";
        } else {
            document.getElementById("resultado").innerHTML = "O número é ímpar.";
        }
    }
});
