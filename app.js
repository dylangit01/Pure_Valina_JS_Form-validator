const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

  const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.classList.add('error');
  const small = formControl.querySelector('small');
  small.textContent = message;
};

  const showSuccess = (input) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
  };

  const checkRequired = (inputArr) => {
    inputArr.forEach(input => {
      if(input.value.trim() === ''){
        // console.log(input.id);
        showError(input, upFirstChar(`${input.id} is required`) )
      } else {
        showSuccess(input)
      }
    })
  };

  // const isValidEmail = email => {
  //   const re = /^([a-z0-9_\-\.]+)@([a-z0-9_\-\.]+)\.([a-z]{2,5})$/i;
  //   return re.test(email);
  // };

  const checkEmail = input => {
    const re = /^([a-z0-9_\-\.]+)@([a-z0-9_\-\.]+)\.([a-z]{2,5})$/i;
    if(!re.test(input.value)){
      showError(input, 'Email is not valid')
    } else showSuccess(input)
  };

  const upFirstChar = str => {
   return str.charAt(0).toUpperCase() + str.slice(1)
  };


  const checkLength = (input, min, max) => {
    if(input.value.length < min){
      showError(input, upFirstChar(`${input.id} must be at least ${min} characters`))
    } else if (input.value.length > max) {
      showError(input, upFirstChar(`${input.id} must not be less than ${max} characters`))
    } else {
      showSuccess(input)
    }
  };

  const checkPasswordsMatch = (input1, input2) => {
    if (input1.value !== input2.value) showError(input2, 'Passwords do not match ')
};

form.addEventListener('submit', e => {
  e.preventDefault();

  checkRequired([username, email, password, password2]);

  checkLength(username, 3, 15);

  checkLength(password, 6, 25);

  checkEmail(email);

  checkPasswordsMatch(password, password2)

  // if(username.value === ''){
  //   showError(username, 'Username is required')
  // } else showSuccess(username);
  //
  // if(email.value === ''){
  //   showError(email, 'Email is required')
  // } else if(!isValidEmail(email.value)){
  //   showError(email, 'Email is not valid')
  // } else showSuccess(email);
  //
  //
  // if(password.value === ''){
  //   showError(password, 'Password is required')
  // } else showSuccess(password);
  //
  // if(password2.value === ''){
  //   showError(password2, 'Password is not matched')
  // } else showSuccess(password2);
});


