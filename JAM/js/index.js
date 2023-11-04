// let s = prompt("Verify that you are not a robot: My name is...");
// while (true){
//     if (s == "My name is..."){
//         break;
//     }
//     s = prompt("Verify that you are not a robot: My name is...");
// }


document.querySelector("#why_but").onclick = function fun(){
    var content = document.getElementById("causess");
    var display = window.getComputedStyle(content).getPropertyValue("display");

    if (display == 'none'){
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}


const arr = ["Features", "Pricing", "FAQs"];
let d = "type1";

for (let i = 0; i < 3; i++){
    document.getElementById(d).innerHTML = arr[i];
    d = d.substring(0, 4) + (i+2).toString();
    console.log(d);
}

document.addEventListener('keydown', function(e) {
    if (e.keyCode == 65) {
      document.getElementById('audio').play();
    }
  });