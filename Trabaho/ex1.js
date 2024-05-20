function calcularTotal() {
    var precoQuilo = parseFloat(document.getElementById('precoQuilo').value);
    var quantidadeQuilos = parseFloat(document.getElementById('quantidadeQuilos').value);

    var total = precoQuilo * quantidadeQuilos;

    document.getElementById('resultado').innerHTML = "Valor a ser pago: R$" + total.toFixed(2);
}