function enviar(){
 var s = document.getElementById("input").value
if(s==""){
  window.alert("valor negativo")
}else{
window.alert("valor positivo ")
 } 
 var b ="O VALOR É "
 document.getElementById("resultado").innerHTML = b+s  
}

function enviar2(){
var r = document.getElementById("input2").value
if(r==""){
 window.alert("senha negativa")
}else{
 window.alert("senha positiva ")
   }  
 document.getElementById("resultado2").innerHTML = "sua senha é :"+r
}

function apagar(){
 var s = document.getElementById("resultado").value
 s=null
 document.getElementById("resultado").innerHTML = s
}

function apagar2(){
 var k = document.getElementById("resultado2").value
 k=null
 document.getElementById("resultado2").innerHTML = k
}


