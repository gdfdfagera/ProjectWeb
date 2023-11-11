document.getElementById('price').innerHTML = localStorage.getItem('price');

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("payment-form");
    const errorMessage = document.getElementById("error-message");
    const cardPattern = /^[0-9]{13,17}$/;
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const cardNumber = document.getElementById("card-number").value;
      const expiryDate = document.getElementById("expiry-date").value;
      const cvv = document.getElementById("cvv").value;
      const cardHolderName = document.getElementById("full-name").value;
  
      if (!cardNumber || !expiryDate || !cvv || !cardHolderName) {
        errorMessage.textContent = "Please fill out all fields.";
        return;
      } else if (!cardNumber.match(cardPattern)) {
        errorMessage.textContent = "Invalid card number.";
        return;
      } else if (!isValidExpiryDate(expiryDate)) {
        errorMessage.textContent = "Invalid expiry date.";
        return;
      } else if (!isValidCVV(cvv)) {
        errorMessage.textContent = "Invalid CVV.";
        return;
      } else {
        errorMessage.textContent = "Payment successful!";
      }
    });
  
    // function isValidCardNumber(cardNumber) {
    //   if (!cardNumber.match(cardNumber)) {
    //     return false;
    //   }
  
    //   return true;
    // }
  
    function luhnCheck(val) {
      let checksum = 0;
      let j = 1;
  
      for (let i = val.length - 1; i >= 0; i--) {
        let calc = 0;
  
        calc = Number(val.charAt(i)) * j;
  
        if (calc > 9) {
          checksum = checksum + 1;
          calc = calc - 10;
        }
  
        checksum = checksum + calc;
  
        if (j == 1) {
          j = 2;
        } else {
          j = 1;
        }
      }
  
      return checksum % 10 === 0;
    }
  
    function isValidExpiryDate(expiryDate) {
      return true; 
    }
  
    function isValidCVV(cvv) {
      const regex = new RegExp("^[0-9]+$");
      if (!regex.test(cvv)) {
        return false;
      }
  
      if (cvv.length !== 3) {
        return false;
      }
      return true;
    }
  });
  