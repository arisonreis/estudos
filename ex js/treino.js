
btn1.addEventListener("click",transformar);  setTimeout(2000); function transformar(){
    var valor = document.getElementById("input").value;

if(valor>="05:00" && valor<="12:59"){
    document.body.style.background ="#29B6F6"; 
    letra.style.color = "yellow";
    }

else if(valor>="13:00" && valor<="17:59"){
   document.body.style.background="yellow";
   letra.style.color = "black";
    }

else if(valor>="18:00" && valor<="23:59"){
    document.body.style.background="white";
    document.getElementById("principal").style.background='black';
    document.getElementById("h2").style.color='white';
    document.getElementById("h3").style.color='white';
    document.getElementById("h1").style.color='black';
    document.getElementById("p-footer").style.color='#8F3A84';
    document.getElementById("btn2").style.background = '#8F3A84';
    document.getElementById("cor").style.backgroundImage ="url('lua.webp')";
    document.getElementById("div_sol").style.background = 'white';
    document.getElementById("div_sol").style.border = '#880E4F';
    document.getElementById("btn1").style.background = '#8F3A84';
    document.getElementById("btn1").style.color = 'white';
    document.getElementById("github").style.color = '#8F3A84';
    document.getElementById("perfil").style.backgroundImage = "url('noite.jpg')"
    document.getElementById("img-nav").src="instagram.webp"
    document.getElementById("perfil").style.border.hover = "red"
    

                     

}else if(valor>="00:00" && valor<="04:59") {
    document.body.style.background ="#29B6F6"; 
    letra.style.color = "yellow"; 
}



}          


