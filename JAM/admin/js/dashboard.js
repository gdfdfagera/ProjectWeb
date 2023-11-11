function createNewUser(id, user, sur, email, pass){
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

    concr1.textContent = id;
    concr2.textContent = user;
    concr3.textContent = sur;
    concr4.textContent = email;
    concr5.textContent = pass;


    document.getElementById("dash").appendChild(dash);
    dash.appendChild(card);
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
}