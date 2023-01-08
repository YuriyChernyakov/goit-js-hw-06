const inp = document.querySelector('#font-size-control');
const outp = document.querySelector('#text');

inp.addEventListener('input', event=>{
  outp.style.fontSize = event.target.value+'px'});