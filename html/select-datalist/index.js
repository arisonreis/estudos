const array = [];

function enviar() {
  const dados = document.getElementById("cit").value;
  return (array.push(dados))
}

function ver() {
  const p = document.createElement("p");
  p.innerHTML = `${array}`;
  document.body.appendChild(p);
}
