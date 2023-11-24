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

  function validateEmail() {
    const fullName = document.getElementById('email').value;
    const fullNameError = document.getElementById('email_error');
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailRegex.test(fullName)) {
      fullNameError.textContent = 'Incorrect email';
      return false;
    } else {
      fullNameError.textContent = '';
      return true;
    }
  }

  function validatePassword() {
    const fullName = document.getElementById('pass');
    const fullNameError = document.getElementById('password_error');
      
    if (fullName.value.length < 8) {
      fullNameError.textContent = 'minimum 8 symbols';
      return false;
    } else {
      fullNameError.textContent = '';
      return true;
    }
  }

  function handle() {

    const em = validateEmail();
    const pass = validatePassword();

    if (!em && !pass) {
        alert('incorrect data')
    }
  }
  
document.getElementById('pass').addEventListener('blur', validateEmail)

document.getElementById('email').addEventListener('blur', validatePassword)

