const inp = document.querySelector('#validation-input');
inp.addEventListener('blur', event=>{
  if(Number(inp.dataset.length)===inp.value.length){inp.classList.remove('invalid');inp.classList.add('valid');}
else{inp.classList.add('invalid'); inp.classList.remove('valid')}
});