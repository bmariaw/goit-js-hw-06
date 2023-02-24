const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const emailInput = event.currentTarget.elements.email.value;
  const passwordInput = event.currentTarget.elements.password.value;

  if (emailInput === '' || passwordInput === '') {
    alert('Усі поля повинні бути заповнені!');
    return;
  } 

    const loginData = {
        email:emailInput,
        password:passwordInput,
    };
    console.log(loginData);
  form.reset();
});