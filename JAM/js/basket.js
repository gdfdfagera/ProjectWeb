let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Drum lessons per 1 month',
        image: 'David.webp',
        price: 12000
    },
    {
        id: 2,
        name: 'Drum lessons per 3 month',
        image: 'David.webp',
        price: 30000
    },
    {
        id: 3,
        name: 'Drum lessons per 6 month',
        image: 'David.webp',
        price: 62000
    },
    {
        id: 4,
        name: 'Piano lessons per 1 month',
        image: 'Michael.jpg',
        price: 15000
    },
    {
        id: 5,
        name: 'Piano lessons per 3 month',
        image: 'Michael.jpg',
        price: 42000
    },
    {
        id: 6,
        name: 'Piano lessons per 6 month',
        image: 'Michael.jpg',
        price: 81000
    },
    {
        id: 7,
        name: 'Vocal lessons per 1 month',
        image: 'Emily.jpg',
        price: 10000
    },
    {
        id: 8,
        name: 'Vocal lessons per 3 month',
        image: 'Emily.jpg',
        price: 25000
    },
    {
        id: 9,
        name: 'Vocal lessons per 6 month',
        image: 'Emily.jpg',
        price: 50000
    },
    {
        id: 10,
        name: 'Drum lessons per 1 month',
        image: 'David.webp',
        price: 11000
    },
    {
        id: 11,
        name: 'Drum lessons per 3 month',
        image: 'David.webp',
        price: 30000
    },
    {
        id: 12,
        name: 'Drum lessons per 6 month',
        image: 'David.webp',
        price: 60000
    }
];
let listCards  = [];

function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="img/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}

initApp();

function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}

var fullPrice;

function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="img/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    fullPrice = totalPrice.toLocaleString();
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
    localStorage.setItem('price', fullPrice);
}

function changeQuantity(key, newQuantity) {
    if (newQuantity === 0) {
      delete listCards[key];
    } else {
      listCards[key].quantity = newQuantity;
      listCards[key].price = newQuantity * products[key].price;
    }
    reloadCard();
  }
  
