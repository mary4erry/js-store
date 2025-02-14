const image = 'https://placehold.it/200x150';
const cartImage = 'https://placehold.it/100x80';
const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
let url = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json'

class GoodsItem {
    constructor (product_name, price) {
        this.product_name = product_name,
        this.price = price,
        this.img = image;
    }
    render() {
        return `<div class="goods-item">
                    <img src="${this.img}" alt="img">
                    <div class="desc">
                        <h3>${this.product_name}</h3>
                        <p>${this.price} $</p>
                        <button class="buy-btn" 
                        data-name="${this.product_name}" 
                        data-price="${this.price}"
                        data-image="${this.img}"
                        >Купить</button>
                    </div>
                </div>`
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
        this.fetchGoods()
            .then(() => this.render())
        this.filteredGoods = []
    }
    filterGoods(value) {
        // console.log('filterGoods', value)
        const regexp = new RegExp(value, 'i')
            this.filteredGoods = this.goods.filter(good => 
                regexp.test(good.product_name))              
            this.render()
    }
    fetchGoods() {
        return fetch(url)
            .then(dataJSON => dataJSON.json())
            // .then (data => {console.log(data)})
            .then(data => {
                data.forEach( el => {
                    this.goods.push(el)  
                    this.filteredGoods.push(el) 
                })
            })
            .catch(err => {
                console.log(err)  
            })      
    }      
    render() {
        let listHtml = '';
        this.filteredGoods.forEach( good => {
            const goodItem = new GoodsItem (good.product_name, good.price);
            listHtml += goodItem.render();
        })
        document.querySelector('.goods-list').innerHTML = listHtml
    }
}

const list = new GoodsList();

let searchButton = document.querySelector('.btn-search');
let searchInput = document.querySelector('.search-field');

searchButton.addEventListener('click', (e) => {
    const value = searchInput.value;
    // console.log(value); 
    list.filterGoods(value)  
})

class Cart {
    constructor() {
        this.cartList = [];
    addProduct() {

    }
    delProduct() {

    }
    render() {

    }
}

class CartItem {
    render() {

    }
}



function makeGETRequest(url){
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve (xhr.responseText)
                } else {
                    reject (xhr.status)
                }
            }
        }
        console.log(xhr);
        xhr.open('GET', url, true);
        xhr.send();
    }
    )
}


// makeGETRequest(url) 
//     .then ((data) => {
//         console.log(JSON.parse (data))
//     })
//     .catch ((errStat) => {
//         console.log (`Ошибка ${errStat}`)
//     })

//   const renderGoodsItem = (title, price) => {
//     return `<div class="goods-item">
//                 <img src="${image}" alt="img">
//                 <div class="desc">
//                     <h3>${title}</h3>
//                     <p>${price} $</p>
//                     <button class="buy-btn" 
//                     data-name="${title}" 
//                     data-price="${price}"
//                     data-image="${image}"
//                     >Купить</button>
//                 </div>
//             </div>`;
//   };
//   const renderGoodsList = (list) => {
//     let goodsList = list.map( item => renderGoodsItem( item.title, item.price)).join('');
//     document.querySelector('.goods-list').innerHTML = goodsList;
//   }
//   renderGoodsList(goods);
// const ITEMS = ['Notebook', 'Display', 'Keyboard', 'Mouse', 'Phones', 'Router', 'USB-camera', 'Gamepad'];
// const PRICES = [1000, 200, 20, 10, 25, 30, 18, 24];
// const IDS = [1, 2, 3, 4, 5, 6, 7, 8];

// let userCart = [];
// let list = createDTO ()

// class Catalog {
//     constructor () {
//         this
//     }
//     render () {

//     }
// }

// class Product {
//     сonstructor (prod) {
//         this.id = prod.id
//         this.title = prod.title
//         this.price = prod.price
//         this.img = prod.img
//     }
//     render () {
//             return `<div class="product-item">
//                         <img src="${this.img}" alt="img">
//                         <div class="desc">
//                             <h3>${this.title}</h3>
//                             <p>${this.price} $</p>
//                             <button class="buy-btn" 
//                             data-name="${this.title}" 
//                             data-price="${this.price}"
//                             data-image="${this.img}"
//                             data-id="${this.id}"
//                             >Купить</button>
//                         </div>
//                     </div>`
//     }
//     addProduct () {
//     }
// }
// class Cart {
//     render () {
//     }
//     showCart () {
//     }
// }
// class CartItem {
//     constructor () {
//     }
//     delProduct () {
//     }
// }
// //клик по кнопке добавить в корзину
// document.querySelector ('.products').addEventListener ('click', function (event) {
//     if(event.target.classList.contains ('buy-btn')) {
//         addProduct (event.target);
//     }
// })
// // клик по кнопке удалить из корзины/ уменьшить количество
// document.querySelector ('.cart-block').addEventListener ('click', function (event) {
//     if(event.target.classList.contains ('del-btn')) {
//         delProduct (event.target);
//     }
// })
// // клик по кнопке свернуть/развернуть список корзины 
// let cartBtn = document.querySelector ('.btn-cart');
// cartBtn.addEventListener('click', showCart);

// function showCart() {
//     document.querySelector('.cart-block').classList.toggle('invisible'); 
// }

// // let goods = [
// //     { id: 1, title: 'Notebook', price: 9500 },
// //     { id: 2, title: 'Gamepad', price: 500 },
// //     { id: 3, title: 'Display', price: 1500 },
// //     { id: 4, title: 'Keyboard', price: 500 },
// //   ];
// renderCatalog()
// //fetch
// function createDTO () {
//     let arr = [];
//     for (let i = 0; i < ITEMS.length ; i++ ) {
//         arr.push (createProduct (i))
//     }
//     return arr
// }
// function createProduct (i) {
//     return {
//         id: IDS[i],
//         title: ITEMS[i],
//         price: PRICES[i],
//         img: image,
//     }
// }
// function renderCatalog () {
//     let htmlStr = '';

//     list.forEach (el => 
//         htmlStr += el.createTemplate ());
//     document.querySelector('.products').innerHTML =  htmlStr;
// }
// function renderCart () {
//     if ( userCart.length == 0) {
//         document.querySelector('.cart-block').innerHTML = "Корзина пуста"
//     } else {
//         let htmlStr = '';
//         userCart.forEach (el => 
//         htmlStr += `
//                 <div class="cart-item">
//                     <div class="product-bio">
//                         <img src="${cartImage}" alt="Some image"> 
//                         <div class="product-desc">
//                             <p class="product-title">${el.name}</p> 
//                             <p class="product-quantity">${el.quantity}</p> 
//                             <p class="product-single-price">$ ${el.price}</p>
//                         </div>
//                     </div> 
//                     <div class="right-block">
//                         <p class="product-price">${el.price * el.quantity}</p> 
//                         <button class="del-btn" data-name="${el.name}">×</button>
//                     </div>
//                 </div>
//             `);
//     document.querySelector('.cart-block').innerHTML =  htmlStr;
//     }  
// }
// renderCart()

// function addProduct (prod) {

//     let findCard = userCart.find ( el => {
//         return el.name === prod.dataset ['name']
//     })    
//     if (findCard) {
//         findCard.quantity ++
//     } else {
//         userCart.push ({
//             name: prod.dataset ['name'],
//             price: +prod.dataset ['price'],
//             quantity: 1,
//         })
//     }
//     renderCart()
// }
// function delProduct (prod) {
//        let findCard = userCart.find ( el => {
//            return el.name === prod.dataset ['name']
//        })
//        if (findCard.quantity > 1) {
//             findCard.quantity --
//        } else {
//            userCart.splice (userCart.indexOf(findCard), 1)
//        }
//        renderCart()
// }

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