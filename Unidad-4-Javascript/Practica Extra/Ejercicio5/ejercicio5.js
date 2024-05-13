/* 5) El usuario debe ingresar un número en un prompt, el prompt debe volver a abrirse para pedir el valor si no es un numero >0. Cuando el numero sea >0 calcular el factorial y mostrarlo con una alerta. */

function calcularFactorial() {
    let numero;
    let factorial = 1;

    do {
        numero = parseInt(prompt("Por favor, ingresa un número mayor que 0:"));
    } while (numero <= 0);

    // Calcular factorial
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    // Mostrar el factorial en una alerta
    alert(`El factorial de ${numero} es: ${factorial}`);
}

// Llamar a la función para comenzar el proceso
calcularFactorial();