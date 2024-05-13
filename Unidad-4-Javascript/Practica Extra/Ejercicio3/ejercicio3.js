/* 3) De un postulante a un empleo, que realizó un test de capacitación, se obtuvo la siguiente información: nombre del postulante, cantidad total de preguntas que se le realizaron y cantidad de preguntas que contestó correctamente. Se pide confeccionar un programa que lea los datos del postulante e informe el nivel del mismo según el porcentaje de respuestas correctas que ha obtenido, y sabiendo que:
Nivel superior: Porcentaje>=90%.
Nivel medio: Porcentaje>=75% y <90%.
Nivel regular: Porcentaje>=50% y <75%.
Fuera de nivel: Porcentaje<50%. */


function porcentaje(){
    let nombre = document.getElementById('nombre').value
    let preguntas = parseInt(document.getElementById('preguntas').value)
    let preguntasCorrectas = parseInt(document.getElementById('preguntasCorrectas').value)
    let resultado = ""
    let calculo = (100 * preguntasCorrectas) / preguntas
    if ( calculo >= 90){
      resultado = "Nivel superior: Porcentaje>=90%.";
    } else if (calculo >= 75 && calculo < 90){
      resultado = "Nivel medio: Porcentaje>=75% y <90%.";
    } else if (calculo >= 50 && calculo < 75 ) {
      resultado = "Nivel regular: Porcentaje>=50% y <75%.";
    } else {
        resultado = "Fuera de nivel: Porcentaje<50%.";
    }

    document.getElementById('resultado').value = nombre + " " + resultado

}
