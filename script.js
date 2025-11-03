/* Programa - Modelo 1 */
window.document.addEventListener("DOMContentLoaded", function(){
    window.document.querySelector("#btnMaiuscula").addEventListener("click", function(){
        let inputText = document.querySelector("#input-text").value 
        document.querySelector("#result").innerHTML = inputText.toUpperCase()
    })

    window.document.querySelector("#btnMinuscula").addEventListener("click", function(){
        let inputText = document.querySelector("#input-text").value 
        document.querySelector("#result").innerHTML = inputText.toLowerCase()
    })

    window.document.getElementById("btnPrimeiraLetraMaiuscula").addEventListener("click", function(le) {
    let inputText = document.querySelector("#input-text").value;
    let resultado = inputText.charAt(0).toUpperCase() + inputText.slice(1).toLowerCase();
    document.querySelector("#result").innerHTML = resultado;
    })

    window.document.querySelector("#btnlimpar").addEventListener("click", function() {
        document.querySelector("#input-text").value = '';
        document.querySelector("#result").innerHTML = '';
    });

    window.document.querySelector("#btnContar").addEventListener("click", function() {
    const texto = document.querySelector("#input-text").value;
    const quantidade = texto.length;
    document.querySelector("#result").innerHTML = `Total de caracteres: ${quantidade}`;
});

})

