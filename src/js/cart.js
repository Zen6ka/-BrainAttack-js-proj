const cartItemsQuantitu = document.querySelector(".js-cart-items-quantity"); // Місце де буде оновлюватись кількість товарів в кошику
const cartEmpty = document.querySelector(".js-cart-empty");
const cartContainer = document.querySelector(".js-cart-container");
const deleteAllBtn = document.querySelector('.js-delete-all-btn');
const cartSelectedProducts = document.querySelector(".js-cart-selected-products");
const cartOrderDetails = document.querySelector(".js-cart-order-details");
const totalOrderedPrice = document.querySelector(".js-total-ordered-price");
const form = document.querySelector(".js-email-form");
const btnCheckout = document.querySelector(".js-email-checkout");





console.log("sdsd");
// За замовчуванням сторінка кошика буде пустою.
// cartEmptyHidden();
// cartContainerHidden();



// ФУНКЦІЯ ПЕРЕВІРКИ ЛОКАЛЬНОГО СХОВИЩА НА ВМІСТ ДАНИХ
function localStorageCheck() { // ****** ізніше підшаманити, щоб просто повертати результат сховище, а логіку відпрацьовувати далі поза функцією.
  const savedProducts = localStorage.getItem("cart-products");
  const parsedSavedProducts = JSON.parse(savedProducts);

  cartItemsQuantitu.innerHTML = parsedSavedProducts.length;

  const { name, img, category, size, price } = parsedSavedProducts; // повинен повертатись об`єкт за запитом до сховища. Тому одразу роблю його деструктуризацію, щоб потім відмальовувати розмітку.

  // метод редюс буде рахувати мені суму цін за всі продукти. Потім цей результат я буду передавати в Тотал під час перевірки.
//   const sumPrice = parsedSavedProducts.reduce((acc, currentProduct)=>{
// return acc + currentPrice.price;
//   }  , 0) 


  if (savedProducts.length === 0) {
    // або пустий масив/об`єкт null/undefined (потім подивитись що повертається і підкорегувати логіку)
    // ТОДІ виклик функції яка покаже нашу порожню розмітку і приховає розмітку товарів.
// cartEmptyShow();
// cartContainerHidden();
  } else {
    // Якщо масив не порожній, тоді приховуємо розмітку порожнього масиву і показужмо розмітку товарів.
//     cartEmptyHidden();
// cartContainerShow();

    //     // виклик функції з відмалюванням даних продукту i передача її результату в дівчик
    //     const productMarkup = cartSelectedProducts();
    //     cartSelectedProducts.innerHTML = productMarkup;
    //Реалізую переший варіант і просто буду показувати або приховувати цей блок в залежності від результату ( і буду викликати функцію показу (треба її ще написати))
    // // виклик функції з відмальовуванням даних замовлення і передача її результату в дівчик
    // const detailsMarkup = orderDetailsMarkup ();
    // cartOrderDetails.innerHTML = detailsMarkup;


// передаємо суму цін в Тотал
    // totalOrderedPrice.innerHTML = `$${sumPrice}`;

    // Слухач на форму по сабміту а ще треба буде по кліку на кнопку
form.addEventListener('submit', (event) => {
    event.preventDefault();
})
  }
}



deleteAllBtn.addEventListener('click', removeLocalStorage);
// ФУНКЦІЯ ОЧИЩЕННЯ СХОВИЩА ВІД ВСІХ ПРОДУКТІВ
function removeLocalStorage(event){
    event.preventDefault();
    localStorage.removeItem('cart-products'); // очищую сховище
    cartSelectedProducts.innerHTML = "";
    cartContainerHidden(); // приховую контейнер кошика
                           // показую пустий кошик

}


// ФУНКЦІЯ ВІДМАЛЬОВУВАННЯ ОБРАНИХ ТОВАРІВ
function selectedProductsMarkup(
  productName,
  productImg,
  productCategory,
  productSize,
  productPrice
) {
  return `
<div class="selected-item">
    <button>X</button>
    <div class="js-selected-item-img"><img src="${productImg}" alt=""></div>
    <div class="js-selected-item-descroption">
        <h3>${productName}</h3>
        <p>Category: ${productCategory} Size: ${productSize}</p>
        <h3>$${productPrice}</h3>
    </div>
</div>
`
}

// На разі закую її просто в розмітку і буду приховувати або показувати в залежності від результату
// // ФУНКЦІЯ ВІДМАЛЬОВУВАННЯ ДЕТАЛЕЙ ЗАМОВЛЕННЯ
// function orderDetailsMarkup (totalPrice) { // в totalPrice буде передватись результат редьюсу який я вирахую пізніше.
// return `
// <h2><b>YOUR ORDER</b></h2>
// <div>
// <h3><b>Total</b></h3>
// <p>Sum: <h2>$${totalPrice}</h2></p>
// </div>
// <input type="text" placeholder="Mail: Enter your email" pattern="[a-zA-Z0-9\-.]+">
// <button type="submit">Checkout</button>
// `
// }

// функції помічники які будуть викликатись навзаєм в залежності від того чи в локальному сховищі щось є

// ФУНКЦІЯ ПОКАЗУ ПОРОЖНЬОГО КОШИКА - EMPTY
function cartEmptyShow () {
    cartEmpty.style.display = 'block';
}
// ФУНКЦІЯ ПРИХОВУВАННЯ ПОРОЖНЬОГО КОШИКА - EMPTY
function cartEmptyHidden () {
    cartEmpty.style.display = 'none';
}


// ФУНКЦІЯ ПОКАЗУ ПОРОЖНЬОГО КОНТЕЙНЕРУ
function cartContainerShow () {
    cartContainer.style.display = 'block';
}
// ФУНКЦІЯ Приховування ПОРОЖНЬОГО КОНТЕЙНЕРУ
// --------- буду викликати функцію яка приховує вміст коли отриманий результат запиту буде не порожнім
function cartContainerHidden () {
    cartContainer.style.display = 'none';
}


// НА РАЗІ ЦЕ НЕ ПОТРІБНО БО МИ БУДЕМО ПРИХОВУВАТИ УВЕСЬ КОНТЕЙНЕР
// // ФУНКЦІЯ ПРИХОВУВАННЯ ДЕТАЛЕЙ ЗАМОВЛЕННЯ
// function orderDetailsHidden() {
//   cartOrderDetails.style.display = "none";
// }
// // ФУНКЦІЯ ПОКАЗУ ДЕТАЛЕЙ ЗАМОВЛЕННЯ
// function orderDetailsShow() {
//   cartOrderDetails.style.display = "block";
// }

console.log("qwewqe");
