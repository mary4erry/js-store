// Сделайте генерацию корзины динамической, т.е. вёрстка корзины не должна находиться в HTML структуре. Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS
// a. Пустая корзина должна выводить строку “Корзина пуста”
// b. Наполненная корзина должна выводить “В корзине: n товаров на сумму m рублей”
// 3. * Сделайте так, чтобы товары в каталоге выводились при помощи JS, т.е.
// a. В начале создайте массив товаров (сущность “Product”)
// b. При загрузке страницы на базе данного массива генерируйте вывод из массива.
// HTML-код должен содержать только div id=”catalog” без вложенного кода. Весь вид каталога генерируется JS

const image = 'https://placehold.it/200x150';
const cartImage = 'https://placehold.it/100x80';

// const ITEMS = ['Notebook', 'Display', 'Keyboard', 'Mouse', 'Phones', 'Router', 'USB-camera', 'Gamepad'];
// const PRICES = [1000, 200, 20, 10, 25, 30, 18, 24];
// const IDS = [1, 2, 3, 4, 5, 6, 7, 8];

let goods = [
    { id: 1, title: 'Notebook', price: 9500 },
    { id: 2, title: 'Gamepad', price: 500 },
    { id: 3, title: 'Display', price: 1500 },
    { id: 4, title: 'Keyboard', price: 500 },
  ];

let userCart = [];

function renderCatalog () {
    let htmlStr = '';
    goods.forEach (el => 
        htmlStr += `
            <div class="product-item">
                <img src="${image}" alt="">
                <div class="desc">
                    <h3>${el.title}</h3>
                    <p>${el.price} $</p>
                    <button class="buy-btn" 
                    data-name="${el.title}" 
                    data-price="${el.price}"
                    >Купить</button>
                </div>
            </div>
         `);
    document.querySelector('.products').innerHTML =  htmlStr;
}
renderCatalog()

function addProduct (prod) {
 
    let findCard = userCart.find ( el => {
        return el.name === prod.dataset ['name']
    })    
    if (findCard) {
        findCard.quantity ++
    } else {
        userCart.push ({
            name: prod.dataset ['name'],
            price: +prod.dataset ['price'],
            quantity: 1,
        })
    }
    renderCart()
}

function delProduct (prod) {
       let findCard = userCart.find ( el => {
           return el.name === prod.dataset ['name']
       })
       if (findCard.quantity > 1) {
            findCard.quantity --
       } else {
           userCart.splice (userCart.indexOf(findCard), 1)
       }
       renderCart()
   }

function renderCart () {
    if ( userCart.length == 0) {
        document.querySelector('.cart-block').innerHTML = "Корзина пуста"
    } else {
        let htmlStr = '';
        userCart.forEach (el => 
        htmlStr += `
                <div class="cart-item">
                    <div class="product-bio">
                        <img src="${cartImage}" alt="Some image"> 
                        <div class="product-desc">
                            <p class="product-title">${el.title}</p> 
                            <p class="product-quantity">${el.quantity}</p> 
                            <p class="product-single-price">$ ${el.price}</p>
                        </div>
                    </div> 
                    <div class="right-block">
                        <p class="product-price">${el.price * el.quantity}</p> 
                        <button class="del-btn" data-name="${el.name}">×</button>
                    </div>
                </div>
            `);
    document.querySelector('.cart-block').innerHTML =  htmlStr;
    }  
}
renderCart()

let cartBtn = document.querySelector ('.btn-cart');
cartBtn.addEventListener('click', showCart);

function showCart() {
    document.querySelector('.cart-block').classList.toggle('invisible'); 
}

document.querySelector ('.products').addEventListener ('click', function (event) {
    if(event.target.classList.contains ('buy-btn')) {
        addProduct (event.target);
    }
})

document.querySelector ('.cart-block').addEventListener ('click', function (event) {
    if(event.target.classList.contains ('del-btn')) {
        delProduct (event.target);
    }
})

function sum () {
    
}


//ООП

let store = {
    catalog: [],
    cart: [],

    createDTO: function () {
        for (let i = 0; i < goods.length; i++) {
            this.catalog.push (goods[i])
        }
    }
}