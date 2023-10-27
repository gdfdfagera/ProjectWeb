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
