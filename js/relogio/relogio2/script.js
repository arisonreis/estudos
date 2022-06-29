
const update = () =>{
const present = new Date();
const hours  = present.getHours();
const minutes = present.getMinutes();
const seconds = present.getSeconds();
 
const cloc = `
<span>${String(hours).length===1?  `0${hours}`    :hours        }</span>:
<span>${String(minutes).length===1? `0${minutes}` :minutes      }</span>:
<span>${String(seconds).length===1 ? `0${seconds}`:seconds      }</span>
`
document.getElementById("relogio").innerHTML = cloc

}
setInterval(update, 1000);


