/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var importe;
    var RESULTADO;

    importe = parseInt(document.getElementById("importe").value);

    RESULTADO = importe * 0.75;

    document.getElementById("resultado").value = RESULTADO;
}
