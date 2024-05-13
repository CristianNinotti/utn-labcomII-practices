function validar(){
    let valor1 = document.getElementById('valor1').value;
    if(valor1 > 0){
        alert("El numero es positivo")
    }
    else if(valor1 == 0) {
        alert('El numero es 0')
    }
    else {
        alert('El numero es negativo')
    }
}