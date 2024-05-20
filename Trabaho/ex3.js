function calcularTroco() {
    var valorPago = parseFloat(document.getElementById("valorPago").value);
    var precoProduto = parseFloat(document.getElementById("precoProduto").value);

    var troco = valorPago - precoProduto;

    if (troco >= 0) {
        document.getElementById("resultado").innerHTML = "Troco a ser dado: R$ " + troco.toFixed(2);
    } else {
        document.getElementById("resultado").innerHTML = "Valor pago insuficiente.";
    }
}
