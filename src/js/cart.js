// import { onOpenModal, onCloseModal,  } from "./modal.js";


const cartItemsQuantity = document.querySelector(".js-cart-items-quantity"); // Місце де буде оновлюватись кількість товарів в кошику
const cartEmpty = document.querySelector(".js-cart-empty");
const cartContainer = document.querySelector(".js-cart-container");
const deleteAllBtn = document.querySelector('.js-delete-all-btn');
const cartSelectedProducts = document.querySelector(".js-cart-selected-products");
const cartOrderDetails = document.querySelector(".js-cart-order-details");
const totalOrderedPrice = document.querySelector(".js-total-ordered-price");
const form = document.querySelector(".js-email-form");
const btnCheckout = document.querySelector(".js-email-checkout");
const input = document.querySelector(".input")

// const cartAmount = document.querySelector('.cart-amount')


console.log("Test start");
// За замовчуванням сторінка кошика буде пустою.
cartEmptyHidden();
cartContainerHidden();


// ФУНКЦІЯ ПЕРЕВІРКИ ЛОКАЛЬНОГО СХОВИЩА НА ВМІСТ ДАНИХ
function localStorageCheck() { // ****** пізніше підшаманити, щоб просто повертати результат сховище, а логіку відпрацьовувати далі поза функцією.
  const savedProducts = localStorage.getItem("cart");
  return   JSON.parse(savedProducts); //повертаю розпарсені дані з ЛС або null якщо там нічого не має
}
// savedProducts ?   : null

const parsedSavedProducts = localStorageCheck(); // результат повернення передаю змінній Розпарсених даних
console.log(parsedSavedProducts) // Масив всіх об`єктів з ЛС за ключем cart


// // Функція перевірки об`єктів в масиві отриманого зі сховища і повернення лише унікальних значень. 
// const seen = new Set(); // Створюємо пустий Set для відстеження унікальних значень
// const parsedSavedProducts = parsedSavedProducts.filter(obj => {
//   const value = obj._id; // В нашому прикладі вибираємо значення "id" для порівняння унікальності
//   if (seen.has(value)) {
//     return false; // Значення вже було, це не унікальний об'єкт
//   }
//   seen.add(value); // Додаємо значення до Set, оскільки це унікальне
//   return true; // Об'єкт є унікальним і буде включений до результату
// });

// console.log(uniqueProductsArray); //  Масив унікальних об`єктів з ЛС за ключем cart
// // Якщо треба буде перевіряти масив зі сховища, щоб дані не повторювались, тоді використаю цю функцію, 
// //а далі для роблти в решті коду буду передавати отриманий масив унікальних об`єктів (типу цей uniqueProductsArray).





// Основна логіка запиту
// Всюди замість exampleLS треба використвувати оригінал, тобто parsedSavedProducts
if (parsedSavedProducts === null || parsedSavedProducts.length < 1) {
  cartItemsQuantity.innerHTML = '0';
  cartEmptyShow();
cartContainerHidden();
 } else {

cartItemsQuantity.innerHTML = parsedSavedProducts.length;

  cartEmptyHidden();
  cartContainerShow();

  //-------Тут треба буде глянути що саме повертається і в якому вигляді.
  const { _id, name, img, category, size, price } = parsedSavedProducts; // повинен повертатись об`єкт за запитом до сховища. Тому одразу роблю його деструктуризацію, щоб потім відмальовувати розмітку.
//   const { ProductId, ProductName, ProductImg, ProductCategory, ProductSize, ProductPrice } = parsedSavedProducts; - або в такому вигляді буде повертатись.
  
// Повернення масиву об`єктів і відмальовування їх
  const productsArrayMarkup = parsedSavedProducts.map(el => {
    return selectedProductsMarkup(el._id, el.name, el.img, el.category, el.size, el.price) 
    // return selectedProductsMarkup(el._id, el.Productame, el.ProductImg, el.ProductCategory, el.ProductSize, el.ProductPrice) -або так
  }).join('');
  
  // console.log(productsArrayMarkup.length); // там 4435 цифра, але це всього лиш кількість символів які нам повернулись.


  cartSelectedProducts.innerHTML = productsArrayMarkup;
  cartItemsQuantity.innerHTML = parsedSavedProducts.length;

  totalSumMarkup(parsedSavedProducts);


/// слухач на форму форму продуктів які ми отримали з ЛС
  cartSelectedProducts.addEventListener('click', deleterProduct);
}




    // ФУНКЦІЯ ВИДАЛЕННЯ ПРОДУКТУ З НАШОГО ПЕРЕЛІКУ 
    function deleterProduct (event) {
      const currentElementId = event.target.closest('[id]');
      const actualId = currentElementId ? currentElementId.id : null;
      
console.log(actualId)

            if (event.target.closest('.cart-remove-product-btn')) {
              let cart = localStorageCheck();

              const refreshedArray = cart.filter(product => product._id !== actualId);
 console.log(refreshedArray)

              if (refreshedArray.length > 0) {
                           localStorage.setItem('cart', JSON.stringify(refreshedArray));

                const refreshedMarkup = localStorageCheck().map(el => {
                  return selectedProductsMarkup(el._id, el.name, el.img, el.category, el.size, el.price) 
                  // return selectedProductsMarkup(el._id, el.Productame, el.ProductImg, el.ProductCategory, el.ProductSize, el.ProductPrice) -або так
                }).join('');
                  
                 cartSelectedProducts.innerHTML = refreshedMarkup;
                 totalSumMarkup(refreshedArray);
                 cartItemsQuantity.innerHTML = refreshedArray.length;

              } else {
              localStorage.removeItem('cart');

              cartItemsQuantity.innerHTML = '0';
              cartSelectedProducts.innerHTML = "";
              cartEmptyShow();
              cartContainerHidden();
            }
             } 
            return
           
      }








    // Слухач на форму по сабміту а ще треба буде по кліку на кнопку
form.addEventListener('change', (event) => {
    event.preventDefault();
    console.log(input.value) 
    input.value = "";
})


//Слухач на кнопку Сабміту
btnCheckout.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('Submit successful')

  // після сабміту замовлення можемо видалити дані зі сховища та приховати
  cartEmptyShow();
  cartContainerHidden();
  cartItemsQuantity.innerHTML = '0';
  cartSelectedProducts.innerHTML = "";
localStorage.removeItem('cart')

// потім тут прописати відкриття модалки про успішні закупи.

})





// Слухач на кнопку видалення всього
deleteAllBtn.addEventListener('click', removeLocalStorage);
// ФУНКЦІЯ ОЧИЩЕННЯ СХОВИЩА ВІД ВСІХ ПРОДУКТІВ
function removeLocalStorage(event){
    event.preventDefault();
    localStorage.removeItem('cart'); // очищую сховище (за моїм ключем)
    // localStorage.clear(); - або все очистити 
    cartSelectedProducts.innerHTML = "";
    cartContainerHidden(); // приховую контейнер кошика
    cartEmptyShow();             // показую пустий кошик
// cartEmptyHidden();
// cartContainerHidden();
cartItemsQuantity.innerHTML = '0';
}



//ФУНКЦІЯ ПІДРАХУНКУ СУМИ i РЕНДЕРУ ЇЇ В HTML
function totalSumMarkup (array) {
  // метод редюс буде рахувати мені суму цін за всі продукти. Потім цей результат я буду передавати в Тотал під час перевірки.
  const sumPrice = array.reduce((acc, currentProduct)=>{
    return acc + currentProduct.price;
      }, 0).toFixed(2);

    totalOrderedPrice.innerHTML = `$${sumPrice}`;
}


// ФУНКЦІЯ ВІДМАЛЬОВУВАННЯ ОБРАНИХ ТОВАРІВ
function selectedProductsMarkup(
  productId,
  productName,
  productImg,
  productCategory,
  productSize,
  productPrice
) {
  return `
<div class="selected-item" id="${productId}">
    <button class="cart-remove-product-btn"><svg class="js-delete-product-icon"><use href="./img/icons.svg#icon-ion_close-sharp"></use></svg></button>
    <div class="js-selected-item-img"><img class='js-product-item-img' src="${productImg}" alt="Product"></div>
    <div class="js-selected-item-descroption">
        <p class="js-item-product-name">${productName}</p>
        <p class="js-item-product-properties">Category: <span class="js-item-product-descr">${productCategory}</span> Size: <span class="js-item-product-descr">${productSize}</span></p>
        <p class="js-item-product-price">$${productPrice}</p>
    </div>
</div>
<p class="underline"></p>
`
}





// функції помічники які будуть викликатись навзаєм в залежності від того чи в локальному сховищі щось є

// ФУНКЦІЯ ПОКАЗУ ПОРОЖНЬОГО КОШИКА - EMPTY
function cartEmptyShow () {
    cartEmpty.style.display = 'flex';
}
// ФУНКЦІЯ ПРИХОВУВАННЯ ПОРОЖНЬОГО КОШИКА - EMPTY
function cartEmptyHidden () {
    cartEmpty.style.display = 'none';
}


// ФУНКЦІЯ ПОКАЗУ ПОРОЖНЬОГО КОНТЕЙНЕРУ
function cartContainerShow () {
    cartContainer.style.display = 'flex';
}
// ФУНКЦІЯ Приховування ПОРОЖНЬОГО КОНТЕЙНЕРУ
// --------- буду викликати функцію яка приховує вміст коли отриманий результат запиту буде не порожнім
function cartContainerHidden () {
    cartContainer.style.display = 'none';
}


console.log("Test end");
