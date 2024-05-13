/* Funciones */

/* Alertas */

function MsgAlerta(nombre){
    alert('Hola ' + nombre);
}

/* Confirmacion */

function MsgConfirmacion(){
    var resultado = confirm('¿Acepta conitnuar?');
    if(resultado){
        MsgAlerta('Hola');
    } else {
        alert('No quiere continuar');
    }
}


/* Prompts */

function MsgPrompt(){
    var nombre = prompt('Como es su nombre?');
    if(nombre.length > 0 && nombre != null){
        MsgAlerta('Hola ' + nombre);
    } else {
        alert('Error! El nombre debe tener mas caracteres o distinto de nulo')
    }

}

/* Suma */


function MsgPrompt2(){
    var numero1 = prompt('Ingrese un numero ');
    return numero1
}

function fSumar(v1, v2){

    MsgAlerta(typeof v1);

    let suma = parseInt(v1) + parseInt(v2);  /* Siempre y cuando sean numeros */
    MsgAlerta(suma)
}


/* Operadores aritmeticos */

// + - * / % //
// String + String = Concatenacion /  variable pepe +=  String = Concatenacion /
// var pepe(num) += num  / Suma //
/*
    Pepe = pepe + num <> Pepe += num
    
    var Mval = 1;
    var v2 = 2;

    Mval = Mval + v2; --> 3

    Mval += v2; --> 3

    // El lugar del signo determina si aumenta o disminuye //

    ++X

    paso 0) Declara variable X = 0
    paso 1) Ingresa al proceso (bucle) ---> x
    paso 2) a ese valor le suma 1 a X 
    paso 3) muestra X vale 1

*/
/* For */

function forX(){
    for(var i =0; i < 4; i++){  // Se incrementa dsp de la primer vuelta
        alert(i)
    }
}

function arrayX(){
    var frutas = ['Manzana','Banana','Pera']

    for(var i =0; i < frutas.length; i++){
        alert(frutas[i]);
    }
}

/*
&& = And
|| = Or 
!x = Not
!= = Distinto
!== = Que no sean el mismo tipo 
=== = Mismo tipo

If:
if (val1)
else if
else   
*/


/*
switch(){
    case opcion == 1:
        Codigo
        break
    case opcion == 2:
        Codigo
        break
    case opcioon ==3:
    Codigo
    break
    default:    
        "Valor invalido"
        break
}
*/

false, Nan, 0, undefined 

var i=0
while(i<10){
    if(i<=5){ // Seis vuelta y corta
        break
    }
    i++;
}

function fcSumar(){
    var val1= document.getElementById('numero1');
    var val2= document.getElementById('numero2');
    alert(parseInt(val1.value) + parseInt(val2.value))
}