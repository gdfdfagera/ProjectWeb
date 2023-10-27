document.querySelector("#why_but").onclick = function fun(){
    var content = document.getElementById("causess");
    var display = window.getComputedStyle(content).getPropertyValue("display");

    if (display == 'none'){
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}