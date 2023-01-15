const subm = document.querySelector('.login-form');

function onSubmit(evnt){
  evnt.preventDefault();
  const{email, password}=evnt.currentTarget.elements;
  if(email.value === '' || password.value === ''){
      return alert('Все поля должны быть заполнены');
  }
  console.log({
        email: email.value,
        password:password.value
    });
    subm.reset();
}
subm.addEventListener('submit', onSubmit);