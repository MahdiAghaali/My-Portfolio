function setValid(element) {
  element.parentElement.parentElement.classList.add('valid');
  element.parentElement.parentElement.classList.remove('invalid');
}

function setInvalid(element) {
  element.parentElement.parentElement.classList.add('invalid');
  element.parentElement.parentElement.classList.remove('valid');
}

function isLowerCase(element) {
  const str = element.value;
  if (str !== str.toLowerCase()) {
    return true;
  }
  return false;
}

const isValidEmail = (email) => {
  const eamilPattern = /^(([^<>()[\]\\.,;:\s@"A-Z]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;
  return eamilPattern.test(email);
};

const customerEmail = document.getElementById('customer-email');
function checkEmail() {
  const customerEmailError = customerEmail.parentElement.children[0];
  const str = customerEmail.value;
  if (str !== str.toLowerCase()) {
    customerEmailError.innerHTML = 'E-mail has to be lowercase';
    setInvalid(customerEmail);
  } else {
    customerEmailError.innerHTML = '';
    setValid(customerEmail);
  }
}
customerEmail.addEventListener('input', checkEmail);

function hasInvalidElement() {
  const inputs = document.getElementsByTagName('fieldset');
  const textarea = document.getElementsByTagName('textarea');
  let result = false;
  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].classList.contains('invalid')) {
      result = true;
      break;
    }
  }

  for (let i = 0; i < textarea.length; i += 1) {
    if (textarea[i].classList.contains('invalid')) {
      result = true;
      break;
    }
  }
  return result;
}

function validateInputs() {
  const customerName = document.getElementById('customer-name');
  const customerEmail = document.getElementById('customer-email');
  const customerMessage = document.getElementById('customer-message');

  const customerNameError = customerName.parentElement.children[0];
  const customerEmailError = customerEmail.parentElement.children[0];
  const customerMessageError = customerMessage.previousElementSibling;

  if (customerName.value.trim() === '') {
    customerNameError.innerHTML = 'Please provide your name';
    setInvalid(customerName);
  } else {
    customerNameError.innerHTML = '';
    setValid(customerName);
  }

  if (customerEmail.value.trim() === '') {
    customerEmailError.innerHTML = 'Please provide your E-mail';
    setInvalid(customerEmail);
  } else if (isLowerCase(customerEmail)) {
    customerEmailError.innerHTML = 'E-mail has to be lowercase';
    setInvalid(customerEmail);
  } else if (isValidEmail(customerEmail.value) === false) {
    customerEmailError.innerHTML = 'Plase enter a valid Email';
    setInvalid(customerEmail);
  } else {
    customerEmailError.innerHTML = '';
    setValid(customerEmail);
  }

  if (customerMessage.value.trim() === '') {
    customerMessageError.innerHTML = 'Please fill in the message';
    customerMessage.classList.remove('valid');
    customerMessage.classList.add('invalid');
  } else {
    customerMessageError.innerHTML = '';
    customerMessage.classList.add('valid');
    customerMessage.classList.remove('invalid');
  }
}

function valdiateForm(event) {
  event.preventDefault();
  validateInputs();
  if (hasInvalidElement() === false) {
    document.getElementById('contact-form').submit();
  }
}

const btnSubmit = document.getElementById('btn-submit');
btnSubmit.addEventListener('click', valdiateForm);
