const subm = document.querySelector('.login-form');
console.dir(subm);

function onSubmit(evnt){
  evnt.preventDefault();
  const{email, password}=evnt.currentTarget.elements;
  if(email.value === '' || password.value === ''){
      alert('Все поля должны біть заполнены');
  }
    subm.reset();
}
subm.addEventListener('submit', onSubmit);