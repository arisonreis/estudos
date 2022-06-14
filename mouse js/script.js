function entrar(){
    let a  = document.getElementById("area");
    a.innerText="entrou"
    a.style.color="black"
}

function sair(){
    let a  = document.getElementById("area");   
    a.innerText="saiu"
    a.style.color="red"
}

function clicar(){
    let a  = document.getElementById("area");   
    a.innerText="clicou"
    a.style.color="white"
}

   

function somar(){
    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    var valorp = document.getElementById("resultado");
    var numero1 = Number(input1.value);
    var numero2  = Number(input2.value);
    var resultados = numero1+numero2
        valorp.innerHTML = ' o resultado entre '+numero1+' e '+numero2+' é '+resultados
       valorp.innerHTML = 'o resultado entre ${n1} e ${n2}'
}  