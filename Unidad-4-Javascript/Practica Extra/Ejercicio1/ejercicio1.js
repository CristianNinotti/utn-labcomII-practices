function numeroMayor() {
    let valor1 = parseInt(document.getElementById('valor1').value)
    let valor2 = parseInt(document.getElementById('valor2').value)
    let valor3 = parseInt(document.getElementById('valor3').value)
    let resultado = 0
    
    if (valor1 > valor2 && valor1 > valor3){
        resultado = valor1
    } else if (valor2 > valor1 && valor2 > valor3) {
        resultado = valor2
    } else if (valor3 > valor1 && valor3 > valor2) {
        resultado = valor3
    } else if (valor1 == valor2 || valor1 == valor3 || valor2 == valor3) {
       alert("Hay numeros que son iguales")
    }
    document.getElementById('resultado').value = resultado
}