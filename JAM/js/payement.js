document.getElementById('price').innerHTML = localStorage.getItem('price') + "kzt";


const cardPattern = /^[0-9]{13,17}$/;


function handleSubmit(event) {
  event.preventDefault();

  const cardNumber = validateCardNumber()
  const cvv = isValidCVV()
  const expiry_date = isValidExpiryDate()
  const name = validateFullName()
  const phone = validatePhoneNumber()

  if (cardNumber && cvv && expiry_date && name && phone) {
    alert('payement is successfull')
  } else {
    alert('form validation is failed, please check the errors')
  }
}

function validateFullName() {
  const fullName = document.getElementById('full-name');
  const fullNameError = document.getElementById('name_error');

  const nameWords = fullName.value.trim().split(' ');

  if (nameWords.length < 2) {
    fullNameError.textContent = 'Please enter your full name';
    return false;
  } else {
    fullNameError.textContent = '';
    return true;
  }
}
function validatePhoneNumber() {
  const phoneNumber = document.getElementById('phone');
  const phoneNumberError = document.getElementById('phone_error');

  const phoneRegex = /^[0-9]+$/;

  if (!phoneRegex.test(phoneNumber.value.trim()) || phoneNumber.value.trim().length <= 10) {
    phoneNumberError.textContent = 'Please enter a valid 10-digit phone number';
    return false;
  } else {
    phoneNumberError.textContent = '';
    return true;
  }
}

function validateCardNumber() {
  const card = document.getElementById('card-number').value;
  const card_number_error = document.getElementById('card_error');

  if (card.trim() === '') {
    card_number_error.textContent = 'card number is required';
    return false;
  } else if (!card.match(cardPattern)) {
    card_number_error.textContent = 'card number minimum 16 numbers';
    return false;
  } else {
    card_number_error.textContent = '';
    return true;
  }
}

function isValidExpiryDate() {
  const date = document.getElementById('expiry-date').value;
  const dateError = document.getElementById('date_error');
  if (date.trim() === '') {
    dateError.textContent = 'expiry date is required';
    return false;
  } else {
    dateError.textContent = '';
    return true;
  }
}

function isValidCVV() {

  const cvv = document.getElementById('cvv').value
  const cvvError = document.getElementById('cvv_error')

  const regex = new RegExp("^[0-9]+$");

  if (!regex.test(cvv)) {
    cvvError.textContent = 'cvv must be numbers'
    return false;
  } else if(cvv.trim() === '') {
    cvvError.textContent = 'cvv is required'
    return false;
  } else if (cvv.length !== 3) {
    cvvError.textContent = 'cvv`s len is 3'
    return false;
  } else {
    cvvError.textContent = ''
    return true
  }
}


document.getElementById('card-number').addEventListener('blur', validateCardNumber)

document.getElementById('cvv').addEventListener('blur', isValidCVV)

document.getElementById('expiry-date').addEventListener('blur', isValidExpiryDate)

document.getElementById('phone').addEventListener('blur', validatePhoneNumber)

document.getElementById('full-name').addEventListener('blur', validateFullName)


document.getElementById('payment-form').addEventListener('submit', handleSubmit)