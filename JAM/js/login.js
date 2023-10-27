var users = new Map([
    ["test@mail.ru", "12345678"],
    ["email@gmail.com", "123456789"]
]);

var totalInputs = 3;



function fun(){
    var userInputEmail = document.getElementById('email').value;
    var userInputPass = document.getElementById('pass').value;
    

    if (users.get(userInputEmail) == userInputPass) {
        alert("You have signed in");
        return true;
    } else {
        totalInputs -= 1;
        if (totalInputs == 0) {
            alert("You have blocked, try later");
            document.getElementById('email').disabled = true;
            document.getElementById('pass').disabled = true;
            return false;
        }
        alert("Check your email or password");
        document.getElementById('email').value = "";
        document.getElementById('pass').value = "";
    }
}