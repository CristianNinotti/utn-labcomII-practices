alert(document.getElementById('pesos'));

let inputPesos = document.getElementById('pesos');
let selectMoneda = document.getElementById('moneda');
let txResultado = document.getElementById('resultado');
let botonCalcular = document.getElementById('calcular');

//function pepe(){
// [val1,val2, ...n]    
//}

let cotizaciones = {
    dolares: 1250,
    euros: 1300,
}



//Validacion

// 1 Manera
function Validar() {
    if (!Number(inputPesos.value)) {
        alert('Ingrese un numero');
        return false;
    } else {

        // 2 Manera
        if (selectMoneda.value == '') {
            alert('Seleccione una moneda');
            return false;
        } else {
            return true;
        }
    }
}


//Handler//
botonCalcular.onclick = function () {
    /* estan los campos completos? */
    if (Validar()) {
        /*Tengo valor y no tengo la moneda */
        let valPesos = Number(inputPesos.value); //En vez de Parseint o parseFloat (Number asi incluye todo con coma o sin coma.)
        let valMoneda = cotizaciones[selectMoneda.value];
        let precioFinal = valPesos / valMoneda;
        txResultado.innerText = 'El calculo a pesos es: ' + precioFinal;
    } else {
        alert('Los campos no estan completos');
    }
}



/*
//Listener//

function pepe(){}
function juan(){}
function tito(){} //Funcion

botonCalcular.addEventListener(click, pepe());
botonCalcular.addEventListener(click, juan());
botonCalcular.addEventListener(click, tito());  //Toma a cualquier funcion
*/

// AGREGAR NUEVA MONEDA //

let inputNombre = document.getElementById('nombre');
let inputValor = document.getElementById('valor');
//Lo pone con query selector para practicar otra forma de obtenerlo Primero el Tipo y Luego el selector de clase en este caso
let botonNuevo = document.querySelector('button#nuevaMoneda');




botonNuevo.onclick = function () {

    let nombreMoneda = inputNombre.value;
    let valorMoneda = Number(inputValor.value);
    
    if (ValidarNuevaMoneda(nombreMoneda,valorMoneda)) {
        // Agregar en el objeto "Cotizaciones" //
        cotizaciones[nombreMoneda] = valorMoneda;

        selectMoneda.options.add(new Option(nombreMoneda, nombreMoneda)) //Como nosotros le metimos el combo en linea 83 se póne asi sino nombre y valor
        inputNombre.value = '';
        inputValor.value = '';

    }
}
function ValidarNuevaMoneda(nombreMoneda,valorMoneda) {
    if (nombreMoneda === "") {
        alert("Ingrese la nueva moneda");
        return false;
    } else {
        if (valorMoneda === "") {
            alert("El valor no puede ser 0")
            return false;
        } else {
            return true;
        }

    }
}