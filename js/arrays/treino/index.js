/*window.onload  = function(){
var div = document.createElement('div');
div.innerHTML = `<h1 id='h1'>Div criada</h1>`;
document.body.appendChild(div);
var tags = document.getElementsByTagName('div')
if(tags.length>=1){
    alert("kdsfhew")
}
setInterval(window.onload, 1000);*/

var arrayValores = [];
function clic() {
  var valor = document.querySelector("input").value;
  if (valor.length == 0) {
    alert("digite algo");
  } else {
    arrayValores.push(valor);
  }
}
function ver() {
  let div = document.createElement("div");
  let p = document.createElement("p");
  p.innerText = `${arrayValores}`;
  div.appendChild(p);
  div.id = "div1";
  document.body.appendChild(div);
  return (arrayValores = []);
}
/*var div = document.createElement("div");
var p = document.createElement("p");
p.innerText = arrayValores;
div.appendChild(p);
document.body.appendChild(div);
return (arrayValores = []);*/
