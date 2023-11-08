// var users = new Map([
//     ["test@mail.ru", "12345678"],
//     ["email@gmail.com", "123456789"]
// ]);

// var totalInputs = 3;



// function fun(){
//     var userInputEmail = document.getElementById('email').value;
//     var userInputPass = document.getElementById('pass').value;
    

//     if (users.get(userInputEmail) == userInputPass) {
//         alert("You have signed in");
//         return true;
//     } else {
//         totalInputs -= 1;
//         if (totalInputs == 0) {
//             alert("You have blocked, try later");
//             document.getElementById('email').disabled = true;
//             document.getElementById('pass').disabled = true;
//             return false;
//         }
//         alert("Check your email or password");
//         document.getElementById('email').value = "";
//         document.getElementById('pass').value = "";
//     }
// }

// function deleteData() {
//     document.getElementById("wrong").style.display = "none";
// }

// function wrongData(){
//     var div = document.createElement("div");
//     var p = document.createElement("p");
//     div.id = "wrong";
//     div.style.width = "90%";
//     div.style.border = "solid red 2px";
//     div.style.borderRadius = "30px";
//     div.style.display = "flex";
//     div.style.justifyContent = "center";
//     div.style.alignItems = "center";
//     div.style.textAlign = "center";
//     div.style.marginTop = "10px";
//     p.textContent = "You enter wrong password or email";
//     p.style.paddingTop = "0";
//     p.style.margin = "0";



//     document.getElementById("passw").appendChild(div);
//     div.appendChild(p);
// }