function calcularMedias() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);

    var mediaAritmetica = (num1 + num2 + num3) / 3;
    var mediaPonderada = (num1 + num2 * 2 + num3 * 3) / 6;
    var somaDasMedias = mediaAritmetica + mediaPonderada;
    var mediaDasMedias = somaDasMedias / 2;

    document.getElementById("resultado").innerHTML = `
        <p>Média Aritmética: ${mediaAritmetica.toFixed(2)}</p>
        <p>Média Ponderada: ${mediaPonderada.toFixed(2)}</p>
        <p>Soma das Médias: ${somaDasMedias.toFixed(2)}</p>
        <p>Média das Médias: ${mediaDasMedias.toFixed(2)}</p>
    `;
}
