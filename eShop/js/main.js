
const image = 'https://placehold.it/200x150';
const cartImage = 'https://placehold.it/100x80';
const ITEMS = ['Notebook', 'Display', 'Keyboard', 'Mouse', 'Phones', 'Router', 'USB-camera', 'Gamepad'];
const PRICES = [1000, 200, 20, 10, 25, 30, 18, 24];
const IDS = [1, 2, 3, 4, 5, 6, 7, 8];

let userCart = [];
let list = createDTO ()

class Catalog {
    constructor () {
        this
    }
    render () {

    }
}

class Product {
    сonstructor (prod) {
        this.id = prod.id
        this.title = prod.title
        this.price = prod.price
        this.img = prod.img
    }
    render () {
            return `<div class="product-item">
                        <img src="${this.img}" alt="img">
                        <div class="desc">
                            <h3>${this.title}</h3>
                            <p>${this.price} $</p>
                            <button class="buy-btn" 
                            data-name="${this.title}" 
                            data-price="${this.price}"
                            data-image="${this.img}"
                            data-id="${this.id}"
                            >Купить</button>
                        </div>
                    </div>`
    }
    addProduct () {

    }
}

class Cart {
    render () {

    }
    showCart () {

    }
}

class CartItem {
    constructor () {

    }
    delProduct () {

    }
}

//клик по кнопке добавить в корзину
document.querySelector ('.products').addEventListener ('click', function (event) {
    if(event.target.classList.contains ('buy-btn')) {
        addProduct (event.target);
    }
})
// клик по кнопке удалить из корзины/ уменьшить количество
document.querySelector ('.cart-block').addEventListener ('click', function (event) {
    if(event.target.classList.contains ('del-btn')) {
        delProduct (event.target);
    }
})
// клик по кнопке свернуть/развернуть список корзины 
let cartBtn = document.querySelector ('.btn-cart');
cartBtn.addEventListener('click', showCart);

function showCart() {
    document.querySelector('.cart-block').classList.toggle('invisible'); 
}

// let goods = [
//     { id: 1, title: 'Notebook', price: 9500 },
//     { id: 2, title: 'Gamepad', price: 500 },
//     { id: 3, title: 'Display', price: 1500 },
//     { id: 4, title: 'Keyboard', price: 500 },
//   ];


renderCatalog()

//fetch
function createDTO () {
    let arr = [];
    for (let i = 0; i < ITEMS.length ; i++ ) {
        arr.push (createProduct (i))
    }
    return arr
}

function createProduct (i) {
    return {
        id: IDS[i],
        title: ITEMS[i],
        price: PRICES[i],
        img: image,
    }
}

function renderCatalog () {
    let htmlStr = '';

    list.forEach (el => 
        htmlStr += el.createTemplate ());
    document.querySelector('.products').innerHTML =  htmlStr;
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
                            <p class="product-title">${el.name}</p> 
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

// function sum () {
//     let sum = 0;
//     userCart.forEach ( el => {
//         sum += el.price

//     })
//     console.log(sum);
    
//     return sum
// }


//ООП

// let store = {
//     catalog: [],
//     cart: [],
//     _init: function (){
//         this.createDTO ()
//         this.renderCatalog ()
//     },
//     createDTO: function () {
//         for (let i = 0; i < ITEMS.length; i++) {
//             this.catalog.push (this._createProduct (ITEMS[i], PRICES[i], IDS[i]));
//         }
//     },
//     _createProduct: function (name, price, id) {
//         return {
//             name: name,
//             id: id,
//             price: price,
//             img: image,
//             createTemplate: function () {
//                     return `
//                         <div class="product-item">
//                             <img src="${this.img}" alt="">
//                             <div class="desc">
//                                 <h3>${this.name}</h3>
//                                 <p>${this.price} $</p>
//                                 <button class="buy-btn" 
//                                 data-name="${this.name}" 
//                                 data-price="${this.price}"
//                                 data-id="${this.id}"
//                                 >Купить</button>
//                             </div>
//                         </div>
//                     `
//             }
//         }
//     },
//     renderCatalog: function () {
//         let htmlStr = ''

//         this.catalog.forEach (el => {
//             htmlStr += el.createTemplate ()
//         })
//         document.querySelector('.products').innerHTML =  htmlStr;
//     }
// }

// store._init() //создание товаров + рендер из объекта