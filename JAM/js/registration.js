document.querySelector('#signup_but').onclick = function fun(){
    var name = document.getElementById("name").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const pass = /^[a-zA-Z0-9]+&/
    
    if (name.length < 3 || name.length > 10){
        alert("Your name must have more than 3 and less than 10 characters");
        return false;
    }
    if (lname.length < 3 || lname.length > 10){
        alert("Your last name must have more than 3 and less than 10 characters");
        return false;
    }
    if (!email.match(emailPattern)){
        alert("Your email is not correct");
        return false;
    }
    if (password.length < 8){
        alert("Your password must have not less than 8 character");
        return false;
    }

    alert("Nice, you have registered");
    return true;
};