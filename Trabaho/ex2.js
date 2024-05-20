function calcularReajuste() {
    var saldo = parseFloat(document.getElementById('saldo').value);

    var novoSaldo = saldo * 1.01; // Reajuste de 1%

    document.getElementById('resultado').innerHTML = "Novo saldo com reajuste: R$" + novoSaldo.toFixed(2);
}