const slider = document.querySelector('.slider');


function fun1(){
  slider.style.transform = 'translateX(25%)';
}

function fun2(){
  slider.style.transform = 'translateX(-25%)';
}

function fun3(){
  slider.style.transform = 'translateX(-75%)';
}



function fullscreenDiv(){
  const place = document.getElementById('place');
  place.style.display = "none";

  const fullscreenDiv = document.getElementById('fullscreenDiv');
  fullscreenDiv.style.display = "flex";
}

function exit(){
  const place = document.getElementById('place');
  place.style.display = "block";

  const fullscreenDiv = document.getElementById('fullscreenDiv');
  fullscreenDiv.style.display = "none";
}

function fullscreenDiv2(){
  const place = document.getElementById('place');
  place.style.display = "none";

  const fullscreenDiv = document.getElementById('fullscreenDiv2');
  fullscreenDiv.style.display = "flex";
}

function exit2(){
  const place = document.getElementById('place');
  place.style.display = "block";

  const fullscreenDiv = document.getElementById('fullscreenDiv2');
  fullscreenDiv.style.display = "none";
}

function fullscreenDiv3(){
  const place = document.getElementById('place');
  place.style.display = "none";

  const fullscreenDiv = document.getElementById('fullscreenDiv3');
  fullscreenDiv.style.display = "flex";
}

function exit3(){
  const place = document.getElementById('place');
  place.style.display = "block";

  const fullscreenDiv = document.getElementById('fullscreenDiv3');
  fullscreenDiv.style.display = "none";
}

function fullscreenDiv4(){
  const place = document.getElementById('place');
  place.style.display = "none";

  const fullscreenDiv = document.getElementById('fullscreenDiv4');
  fullscreenDiv.style.display = "flex";
}

function exit4(){
  const place = document.getElementById('place');
  place.style.display = "block";

  const fullscreenDiv = document.getElementById('fullscreenDiv4');
  fullscreenDiv.style.display = "none";
}

// function fullscreen(){
//   const fullscreenDiv = document.createElement("div");

//   fullscreenDiv.style.position = "fixed";
//   fullscreenDiv.style.top = "0";
//   fullscreenDiv.style.left = "0";
//   fullscreenDiv.style.width = "100%";
//   fullscreenDiv.style.height = "100%";
//   fullscreenDiv.style.backgroundColor = "white"; 
//   fullscreenDiv.style.display = "flex";
//   fullscreenDiv.style.justifyContent = "center";


//   document.body.appendChild(fullscreenDiv);
  
//   const block = document.createElement("div");
//   block.style.height = "100%";
//   block.style.width = "60%";
//   block.style.backgroundColor = "green";


//   fullscreenDiv.appendChild(block);


//   const advise = document.createElement("div");
// }