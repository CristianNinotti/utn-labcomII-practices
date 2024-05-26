

function calculatePrice() {
    let capacidadTelefono = Number(document.getElementById('capacidad').value);
    let cantidadTelefonos = Number(document.getElementById('cantidad').value);
    let precio;

    if (validador(capacidadTelefono, cantidadTelefonos)) {

        if (capacidadTelefono === 128) {
            precio = 150000;
        } else if (capacidadTelefono == 256) {
            precio = 165000;
        } else {
            precio = 180000;
        }
        let precioFinal = precio * cantidadTelefonos
        document.getElementById('result').innerText = `$${precioFinal}`

    }
}

function validador(capacidadTelefono, cantidadTelefonos) {
    if (capacidadTelefono == '0') {
        alert("Ingrese una capacidad de telefono");
        return false;
    } else {
        if (cantidadTelefonos = '') {
            alert("Ingrese una cantidad de telefonos")
            return false;
        } else {
            return true;
        }
    }

}

//     let color = document.getElementById('color');
//     let capacidad = document.getElementById('capacidad');
//     let cantidad = document.getElementById('cantidad');
//     let txtResultado = document.getElementById('result');

//     let capacidades = {
//         128: 150000,
//         256: 165000,
//         512: 180000,
//     }

//     function calculatePrice() {
//         let capacidadFinal = Number(capacidades[capacidad.value]);
//         let cantidadFinal = Number(cantidad.value);

//         let precioFinal = capacidadFinal * cantidadFinal;

//         txtResultado.innerText = 'El precio final del telefono es: $' + precioFinal;
//     }