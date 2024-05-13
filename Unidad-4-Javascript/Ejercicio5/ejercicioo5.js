function mayor(){
    let valor1 = parseFloat(document.getElementById('valor1').value);
    let valor2= parseFloat(document.getElementById('valor2').value);
    if (valor1 > valor2){
        alert(valor1)
    }
    else{
        alert(valor2)
    }
}