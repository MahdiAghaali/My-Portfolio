function valdiateForm(event) {
    event.preventDefault();
    const isValid = validateInputs()
    if(isValid){
        // save in local Storage
        document.getElementById("contact-form").submit(); 
    }
}

const btnSubmit = document.getElementById('btn-submit');
btnSubmit.addEventListener('click', valdiateForm);

function validateInputs(){
    const customerName = document.getElementById("customer-name"); 
    const customerEmail = document.getElementById("customer-email"); 
    const customerMessage = document.getElementById("customer-message");
    
    const customerNameError = customerName.parentElement.children[0];
    const customerEmailError = customerEmail.parentElement.children[0];
    const customerMessageError = customerMessage.previousElementSibling;

    if(customerName.value.trim()==''){
        customerNameError.innerHTML = 'Please provide your name'
        setInvalid(customerName);
    }else{
        customerNameError.innerHTML = ''
        setValid(customerName);
    }

    if(customerEmail.value.trim()==''){
        customerEmailError.innerHTML = 'Please provide your E-mail'
        setInvalid(customerEmail);
    } else if (isLowerCase(customerEmail)){
        customerEmailError.innerHTML = 'E-mail has to be lowercase'
        setInvalid(customerEmail);
    } else {
        customerEmailError.innerHTML = ''
        setValid(customerEmail);
    }
    if(customerMessage.value.trim()==''){
        customerMessageError.innerHTML = 'Please fill in the message'
        setInvalid(customerMessage);
    }else{
        customerMessageError.innerHTML = ''
        setValid(customerMessage);
    }
    return true
}

function setValid(element){
    element.parentElement.parentElement.classList.add('valid')
    element.parentElement.parentElement.classList.remove('invalid')
}

function setInvalid(element){
    element.parentElement.parentElement.classList.add('invalid')
    element.parentElement.parentElement.classList.remove('valid')
}

function isLowerCase(element){
    let str = element.value;
    if(str!==str.toLowerCase()){ 
        return true;
    } else {
        return false;
    }
}