function handle() {
    const n = validateFullName()
    const l = validateSurName()
    const e = validateEmail()
    const p = validatePassword()

    if (!e && !n && !l && !p) {
        alert('incorrect fields, check errors')
    }
}

function validateFullName() {
    const fullName = document.getElementById('name').value;
    const fullNameError = document.getElementById('name_error');
    
    if (fullName.length < 4) {
      fullNameError.textContent = 'min len of name is 4';
      return false;
    } else {
      fullNameError.textContent = '';
      return true;
    }
  }

  function validateSurName() {
    const fullName = document.getElementById('lname').value;
    const fullNameError = document.getElementById('surname_error');
    
    if (fullName.length < 4) {
      fullNameError.textContent = 'min len of surname is 4';
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

document.getElementById('pass').addEventListener('blur', validateEmail)

document.getElementById('email').addEventListener('blur', validatePassword)

document.getElementById('name').addEventListener('blur', validateFullName)

document.getElementById('lname').addEventListener('blur', validateSurName)



