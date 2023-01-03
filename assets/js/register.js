// select the form element
var form = document.querySelector('.form');

// add a submit event listener to the form
form.addEventListener('submit', function(event) {
  // prevent the default form submission behavior
  event.preventDefault();

  // select the input elements
  var username = document.querySelector('#username');
  var password = document.querySelector('#password');
  var passwordConfirm = document.querySelector('#password-confirm');
  var email = document.querySelector('#email');
  var birthdate = document.querySelector('#birthdate');
  var phone = document.querySelector('#phone');

  // remove any existing error messages
  var errorMessages = document.querySelectorAll('.error-message');
  for (var i = 0; i < errorMessages.length; i++) {
    errorMessages[i].remove();
  }

  // remove the error class from the input elements
  username.classList.remove('error');
  password.classList.remove('error');
  passwordConfirm.classList.remove('error');
  email.classList.remove('error');
  birthdate.classList.remove('error');
  phone.classList.remove('error');

  // check if the input values are valid
  if (username.value.length < 6) {
    // show an error message if the username is too short
    showError(username, 'O nome de usuário deve ter pelo menos 6 caracteres');
  } else {
    // show a success message if the username is valid
    showSuccess(username);
  }

  if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/g.test(password.value)) {
    // show an error message if the password is invalid
    showError(password, 'A senha deve ter pelo menos 8 caracteres, incluir pelo menos um caractere especial e pelo menos dois números');
  } else {
    // show a success message if the password is valid
    showSuccess(password);
  }

  if (password.value !== passwordConfirm.value) {
    // show an error message if the password confirmation doesn't match the password
    showError(passwordConfirm, 'A confirmação de senha não corresponde à senha digitada');
  } else {
    // show a success message if the password confirmation is valid
    showSuccess(passwordConfirm);
  }

  if (!isValidEmail(email.value)) {
    // show an error message if the email is invalid
    showError(email, 'O endereço de e-mail é inválido');
  } else {
    // show a success message if the email is valid
    showSuccess(email);
  }
  
  if (!isValidBirthdate(birthdate.value)) {
  // show an error message if the birthdate is invalid
  showError(birthdate, 'A data de nascimento é inválida');
  } else {
  // show a success message if the birthdate is valid
  showSuccess(birthdate);
  }
  
  if (!isValidPhone(phone.value)) {
  // show an error message if the phone number is invalid
  showError(phone, 'O número de celular é inválido');
  } else {
  // show a success message if the phone number is valid
  showSuccess(phone);
  }
  
  // check if all input values are valid
  if (document.querySelectorAll('.error').length === 0) {
  // show a success message if all input values are valid
  showSuccess(form);
  }
  });
  
  // show an error message and add the error class to the input element
  function showError(input, message) {
  // create an error message element
    var errorMessage = document.createElement('div');
    errorMessage.classList.add('error-message');
    errorMessage.innerHTML = message;
    
    // insert the error message element after the input element
    input.parentNode.insertBefore(errorMessage, input.nextSibling);
    
    // add the error class to the input element
    input.classList.add('error');
  }
  
  // show a success message
  function showSuccess(input) {
  // add the success class to the input element
    input.classList.add('success');
    }
  
  // check if the email is valid
  function isValidEmail(email) {
  // return true if the email matches the regular expression
    return /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/.test(email);
    }
  
  // check if the birthdate is valid
  function isValidBirthdate(birthdate) {
  // split the birthdate into its component parts
  var parts = birthdate.split('/');
  
  // extract the day, month, and year from the parts
    var day = parseInt(parts[0]);
    var month = parseInt(parts[1]);
    var year = parseInt(parts[2]);
    
    // check if the day is valid for the month
    if (day < 1 || day > daysInMonth(month, year)) {
    return false;
    }
    
    // check if the month is valid
    if (month < 1 || month > 12) {
    return false;
    }
    
    // check if the year is greater than or equal to 1900
    if (year < 1900) {
    return false;
    }
    
  // return true if the birthdate is valid
  return true;
  }
  
// check if the phone number is valid
function isValidPhone(phone) {
  // return true if the phone number matches the regular expression
  return /^[(]{0,1}[0-9]{2}[)]{0,1}[-\s.]{0,1}[0-9]{4,5}[-\s.]{0,1}[0-9]{4}$/.test(phone);
}

// add an input event listener to all input elements
var inputs = document.querySelectorAll('input');
for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('input', function() {
    // remove any existing error messages
    var errorMessages = document.querySelectorAll('.error-message');
    for (var i = 0; i < errorMessages.length; i++) {
      errorMessages[i].remove();
    }
    // remove the error class from the input element
    this.classList.remove('error');
    
    // check if the input value is valid
    if (this.value.trim().length === 0) {
      // show an error message if the input value is empty
      showError(this, 'Este campo é obrigatório');
    } else if (this.id === 'username') {
      if (this.value.length < 6) {
        // show an error message if the username is too short
        showError(this, 'O nome de usuário deve ter pelo menos 6 caracteres');
      } else {
        // show a success message if the username is valid
        showSuccess(this);
      }
    }
  });
}
