let array = [];
function enviar(){
    let valor  = document.querySelector('input');
    let texto = valor.value;
    array.push(texto);
}
function ver(){
    alert(array)
}

//O MÉTODO PUSH INSERE O ELEMENTO SEMPRE NO FINAL DO ARRAY