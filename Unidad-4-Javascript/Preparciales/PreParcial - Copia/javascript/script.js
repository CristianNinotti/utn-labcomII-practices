// 1 //

const colores = ["red", "green", "blue"];
var indice = 0;

var cabecera = document.querySelector('.cabecera');
var datosPersonales = document.querySelector('.datos-personales');
var color = colores[indice];

const cambiarColorFondo = () => {

    cabecera.style.backgroundColor = color;
    datosPersonales.style.backgroundColor = color;

    indice = (indice + 1) % colores.length;
};

setInterval(cambiarColorFondo, 1000);


// 3 //

function cambioColorInput() {
    const tipoRelacionPretendida = document.getElementById('tipo-relacion').value;
    const relacionPretendida = document.getElementById('remuneracion-pretendida');

    if (tipoRelacionPretendida == 'autonomo') {
        relacionPretendida.style.backgroundColor = "red";
    }

    if (tipoRelacionPretendida == 'monotributista') {
        relacionPretendida.style.backgroundColor = "yellow";
    }
    if (tipoRelacionPretendida == 'relacion-dependencia') {
        relacionPretendida.style.backgroundColor = "green";
    }

}

// let colorCampoRelacion = function()
// {
//     let relacion = document.getElementById('tipo-relacion');
//     let tipoRelacion = document.getElementById('remuneracion-pretendida').value;

//     switch (tipoRelacion){
//         case "autonomo":
//             tipoRelacion.style.backgroundColor = "red";
//             break;
//         case "monotributista":
//             tipoRelacion.style.backgroundColor = "yellow";
//             break;
//         case "relacion-dependencia":
//             tipoRelacion.style.backgroundColor = "green" ;
//         break;        
//     } 
// }

// 3 //

function contadorCaracteres() {
    const cantidadCaracteres = document.getElementById('campo-texto').value;
    let cantidadPalabras = 1;
    let cantidadTotalCaracteres = 0;
    for (let x = 0; x <= cantidadCaracteres.length; x++) {
        cantidadTotalCaracteres += 1
        if (cantidadCaracteres[x] == " ") {
            cantidadPalabras += 1

        }
        if (x === cantidadCaracteres.length -1) {
            if (cantidadCaracteres[x] === " ") {
                cantidadPalabras -= 1
            }
        }
        if (x === 0){
            if (cantidadCaracteres[x] === " "){
                cantidadPalabras -= 1
            }
        }
    }


    console.log(cantidadTotalCaracteres)
    console.log(cantidadPalabras)
}