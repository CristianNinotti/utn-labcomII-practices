function concatenar(){
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let domicilio = document.getElementById('domicilio').value;
    let curso = document.getElementById('curso').value;
    let carrera = document.getElementById('carrera').value;
    let materia = document.getElementById('materia').value;
    let nota = parseInt(document.getElementById('nota').value);

    let resultado = `${nombre}\n${apellido}\n${domicilio}\n${curso}\n${carrera}\n${materia}\n${nota}`;


    document.getElementById('resultado').textContent = resultado
}