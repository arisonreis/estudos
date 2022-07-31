function active(){
   const nav = document.getElementById('nav');
   nav.classList.toggle('active')
}
var btn = document.getElementById('btn1');
btn.addEventListener("touchstart", active);