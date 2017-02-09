$(document).ready(function(){
    $("#btn").click(function()
    {
        $('#welcome').hide();
        $('#player').show();
    });
    $(".s").click(jugada);
    $('#boton').click(reiniciar);

// validar al ganador
function jugar(valor){
    var btn1=$("#num1").text()
    var btn2=$("#num2").text()
    var btn3=$("#num3").text()
    var btn4=$("#num4").text()
    var btn5=$("#num5").text()
    var btn6=$("#num6").text()
    var btn7=$("#num7").text()
    var btn8=$("#num8").text()
    var btn9=$("#num9").text()
    var ganador = true;
    if(btn1==btn2 && btn1==btn3 && btn1 == valor){
        alert("YOU WIN!")
    }else if(btn1==btn4 && btn1==btn7 && btn1 == valor){
        alert("YOU WIN!")
    }else if(btn1==btn5 && btn1==btn9 && btn1 == valor){
        alert("YOU WIN!")
    }else if(btn2==btn5 && btn2==btn8 && btn2 == valor){
        alert("YOU WIN!")
    }else if(btn3==btn6 && btn3==btn9 && btn3 == valor){
        alert("YOU WIN!")
    }else if(btn7==btn8 && btn7==btn9 && btn7 == valor){
        alert("YOU WIN!")
    }else if(btn3==btn5 && btn3==btn7 && btn3 == valor){
        alert("YOU WIN!")
    }else if(btn4==btn5 && btn4==btn6 && btn4 == valor){
        alert("YOU WIN!")
    }else{
        ganador = false;
    }
    return ganador;
}
// funcion del evento click para jugar
var numero=0;
var resultado;

function jugada() {
    numero+=1
    if(numero%2){
        $(this).text("X");
        resultado = jugar("X");
    }else{
        $(this).text("O");
        resultado = jugar("O");
    }
    $(this).off("click");
    if(numero==9){
        if(resultado==false) {
            alert("Again!");
        }
    } 
}
});