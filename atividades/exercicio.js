function classificar(){
  let numero = document.getElementById("n").value;
  let texto;

  if(numero== ""){      
   texto = "DIGITE UM VALOR VÁLIDO";
   document.getElementById("resultado").innerHTML=texto;
   document.getElementById("resultado").style.color='black';

  }else if(numero >=0 && numero<=9){
      texto=("O NÚMERO É MENOR QUE 10");
      document.getElementById("resultado").innerHTML = texto;
      document.getElementById("resultado").style.color='purple';
  }else if(numero==10){
      texto="O NÚMERO É IGUAL A 10";
 document.getElementById("resultado").innerHTML= texto;
 document.getElementById("resultado").style.color='red';

  }else{
      texto="O NÚMERO É MAIOR QUE 10"
      document.getElementById("resultado").innerHTML=texto;
      document.getElementById("resultado").style.color='blue';
}}


resultado.addEventListener("click", apagar);   function apagar () {
 let a 
 resultado=a;
 a=null;
 document.getElementById("resultado").innerHTML = a
}

rs.addEventListener("click", mostrar); function mostrar(){
let texto1;
let texto2;

texto1 = "SEU USUÁRIO É :"
texto2 = "SUA SENHA É :"
let a = document.getElementById("input1").value;
let b = document.getElementById("input2").value;
document.getElementById("rs1").innerHTML = texto1 +a+ texto2 +b
}





