function relogios(){
    var data  = new Date();
    var horas  = data.getHours();
    var min = data.getMinutes();
    var segundos = data.getSeconds();
    var horaTotal = horas+":"+min + ":"+segundos;
    var tempo  = document.getElementById("relogio");
    tempo.innerHTML = horaTotal;
}setInterval(relogios,500);

function clicar(){
    var valor  = document.getElementById("relogio");
   alert(valor);
}

