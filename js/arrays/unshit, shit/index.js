//MÉTODO UNSHIFT ADICIONA UM ELEMENTO NO INÍCIO DO ARRAY//
//MÉTODO PUSH ADICIONA UM ELEMENTO NO INÍCIO DO ARRAY//
//MÉTODO POP REMOVE UM ELEMENTO DO FINAL DO ARRAY//
//MÉTODO SHIFT REMOVE UM ELEMENTO DO INÍCIO DO ARRAY//
var array = [];
function enviar() {
  let valor = document.querySelector("input").value;
  if (array === undefined) {
    array = [];
  }
  array.push(valor);
  if (valor.length <= 0) {
    alert("digite algo");
  } else {
    confirm("dados enviados");
  }
}
function ver() {
  if (array === undefined || array[0] == undefined) {
    alert("sem dados enviados");
  } else {
    document.querySelector("p").innerHTML = `dados enviados : ${array} `;
    document.querySelector("p").style.display = "block";
    document.querySelector("#fecha").style.display = "inline";
  }
}
function apagar() {
  array = undefined;
  document.querySelector("p").style.display = "none";
  document.querySelector("#fecha").style.display = "none";
  return (array = undefined);
}
function inicio() {
  if (array.length >= 1) {
    array.shift();
    confirm("dado removido com sucesso!");
    document.querySelector("p").innerHTML = `dados : ${array} `;
  }
  if (array[0] === undefined) {
    alert("você não tem dados cadastrado ou removeu todos");
    document.querySelector("p").style.display = "none";
  }
}
function fechar() {
  document.querySelector("#fecha").style.display = "none";
  document.querySelector("p").style.display = "none";
}
function fim() {
  if (array.length >= 1) {
    array.pop();
    confirm("dado removido com sucesso!");
    document.querySelector("p").innerHTML = `dados : ${array} `;
  }
  if (array[0] === undefined) {
    alert("você não tem dados cadastrado ou removeu todos");
    document.querySelector("p").style.display = "none";
  }
}

function elementStart() {
  let valor = document.querySelector("input").value;
  if (array === undefined) {
    array = [];
  }
  array.unshift(valor);
  if (valor.length <= 0) {
    alert("digite algo");
  } else {
    confirm("dados enviados");
  }
}
