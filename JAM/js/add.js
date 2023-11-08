function createNewUser(){
    var dash = document.createElement("div");
    var card = document.createElement("div");
    var part1 = document.createElement("div");
    var part2 = document.createElement("div");
    var part3 = document.createElement("div");
    var part4 = document.createElement("div");
    var part5 = document.createElement("div");
    var concr1 = document.createElement("div");
    var p1 = document.createElement("p");
    var concr2 = document.createElement("div");
    var p2 = document.createElement("p");
    var concr3 = document.createElement("div");
    var p3 = document.createElement("p");
    var concr4 = document.createElement("div");
    var p4 = document.createElement("p");
    var concr5 = document.createElement("div");
    var p5 = document.createElement("p");
    var update = document.createElement("div");
    var submit = document.createElement("button");
    var hr = document.createElement("hr");
    var form = document.createElement("form");
    var inp1 = document.createElement("input");
    var inp2 = document.createElement("input");
    var inp3 = document.createElement("input");
    var inp4 = document.createElement("input");
    var inp5 = document.createElement("input");

    inp1.name = "id";
    inp2.name = "name";
    inp3.name = "surname";
    inp4.name = "email";
    inp5.name = "password";

    form.action = "php/adding_form.php";
    form.method = "post";
    submit.type = "submit";
    
    concr1.id = "concrt";
    update.className = "update";
    submit.textContent = "Create";

    dash.className = "dashboard__item dashboard__item--full";
    card.className = "card";
    part1.className = "part";
    part2.className = "part";
    part3.className = "part";
    part4.className = "part";
    part5.className = "part";
    concr1.className = "concr";
    concr2.className = "concr";
    concr3.className = "concr";
    concr4.className = "concr";
    concr5.className = "concr";

    p1.textContent = "Id";
    p2.textContent = "Username";
    p3.textContent = "Surname";
    p4.textContent = "Email";
    p5.textContent = "Password";



    document.getElementById("dash").appendChild(dash);
    dash.appendChild(form);
    form.appendChild(card);
    form.appendChild(update);
    form.appendChild(hr);

    update.appendChild(submit);
    card.appendChild(part1);
    card.appendChild(part2);
    card.appendChild(part3);
    card.appendChild(part4);
    card.appendChild(part5);

    part1.appendChild(p1);
    part1.appendChild(concr1);

    part2.appendChild(p2);
    part2.appendChild(concr2);

    part3.appendChild(p3);
    part3.appendChild(concr3);

    part4.appendChild(p4);
    part4.appendChild(concr4);

    part5.appendChild(p5);
    part5.appendChild(concr5);


    concr2.appendChild(inp1);
    concr2.appendChild(inp2);
    concr3.appendChild(inp3);
    concr4.appendChild(inp4);
    concr5.appendChild(inp5);

    inp1.style.display = "none";
}

function success(){
    alert("Data updated successfully");
}