/* 2) Se ingresa por teclado un valor entero, mostrar una leyenda que indique si el número es positivo, cero o negativo. */

function numero(){
    let valor1 = parseInt(document.getElementById('valor1').value)
    if (valor1 % 2 == 0 && valor1 !== 0 ){
        resultado = "Es Par"
    } else if (valor1 % 2 == 1){
        resultado = "Es Impar"
    }else if (valor1 == 0){
            resultado = "Es cero"
        }
   

    document.getElementById('resultado').value = resultado;
}