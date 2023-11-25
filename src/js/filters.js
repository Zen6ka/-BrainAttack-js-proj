import axios, { all } from 'axios';

export class RequestToTheServer {
  baseUrl = 'https://food-boutique.b.goit.study/api/';

  constructor(endPoint, filters, page, limit) {
    this.endPoint = endPoint;
    this.filters = filters;
    this.page = page;
    this.limit = limit;
  }

  async fetchBreeds() {
    try {
      const response = await axios.get(
        `${this.baseUrl}${this.endPoint}?${this.filters}&page=${this.page}&limit=${this.limit}`
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const searchForm = document.querySelector('.search-form');
const inputSearch = document.querySelector('.first-input-search');
const filtersResult = document.querySelector('.filters-result');
const firctSelectSearch = document.querySelector(
  '.first-select-search-not-focus'
);
const buttonCategories = document.querySelector('.button-categories');
const spanButtonCategories = document.querySelector('.span-button-categories');

const products = 'products';

let keyword = '';
let category = '';
let page = 1;
let limit = 6;
let productsHomePage = {};
let inputResultSearch = {};
let productsCategories = {};
let fullInputResultSearch = {};

<<<<<<< Updated upstream
function recordsDataForSearch(keyword, category, page, limit) {
  localStorage.setItem(
    'data-for-search',
    JSON.stringify({
      keyword,
      category,
      page,
      limit,
    })
  );
}
=======
let littleMediaQuery = window.matchMedia('(min-width: 768px)').matches;
let bigMediaQuery = window.matchMedia('(min-width: 1280px)').matches;
if(bigMediaQuery){
    limit = 9;
} else if(littleMediaQuery){
    limit = 8;
} else{
    limit = 6;
}

function recordsDataForSearch(keyword, category, page, limit){
    localStorage.setItem('data-for-search', JSON.stringify(
        {
            keyword, 
            category,
            page,
            limit
        }
        ))
};
>>>>>>> Stashed changes

recordsDataForSearch(keyword, category, page, limit);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

<<<<<<< Updated upstream
async function search() {
  const letForSearch = JSON.parse(localStorage.getItem('data-for-search'));
  const filters = `keyword=${letForSearch.keyword}&category=${letForSearch.category}`;
  const classResultProductsWithFilters = new RequestToTheServer(
    products,
    filters,
    page,
    limit
  );
  fullInputResultSearch = await classResultProductsWithFilters.fetchBreeds();
}
=======
async function search () {
    try{
        const letForSearch = JSON.parse(localStorage.getItem('data-for-search'));
    const filters = `keyword=${letForSearch.keyword}&category=${letForSearch.category}`;
        const classResultProductsWithFilters = new RequestToTheServer(products, filters, page, limit);
        fullInputResultSearch = await classResultProductsWithFilters.fetchBreeds();
    } catch (error){
        messageForError();
        console.error("Error:", error.message);
    }
    
};
>>>>>>> Stashed changes

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const messageForError = () => {
  const htmlError = `<div class="error">
    <p class="title-error">
        Nothing was found for the selected <span><a class="a-title-error" href="">filters...</a></span>
    </p>
    <p class="p-error">
        Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.
    </p>
</div>`;
  filtersResult.innerHTML = htmlError;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////// HOME /// PAGE ////////////////////////////////////////////////////////////
async function ifEmptyInput() {
<<<<<<< Updated upstream
  try {
    const storageDataHomePage = localStorage.getItem(
      'products-home-page-filters'
    );
    if (storageDataHomePage) {
      productsHomePage = JSON.parse(storageDataHomePage);
      // localStorage.removeItem('products-home-page-filters');
    } else {
      await search();
      productsHomePage = fullInputResultSearch.results;
      console.log(fullInputResultSearch);
      localStorage.setItem(
        'products-home-page-filters',
        JSON.stringify(productsHomePage)
      );
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
  console.log(productsHomePage);
  renderCards(productsHomePage);
  // localStorage.removeItem('products-home-page-filters');
}
=======
    try {
        const storageDataHomePage = localStorage.getItem('products-home-page-filters');
        if (storageDataHomePage) {
            const preProductsHomePage = JSON.parse(storageDataHomePage);
            if(preProductsHomePage.length >= limit){
                productsHomePage = preProductsHomePage.slice(0, limit)
            } else {
                await search();
            productsHomePage = fullInputResultSearch.results;
            localStorage.setItem('products-home-page-filters', JSON.stringify(productsHomePage));
            }
        } else {
            await search();
            productsHomePage = fullInputResultSearch.results;
            localStorage.setItem('products-home-page-filters', JSON.stringify(productsHomePage));
        }
        renderCards(productsHomePage);
    } catch (error) {
        messageForError();
        console.error("Error:", error.message);
    }
};
>>>>>>> Stashed changes

ifEmptyInput();

//////////////////////////////////////// INPUT ////////////////////////////////////////////////////////////////////

<<<<<<< Updated upstream
searchForm.addEventListener('submit', async event => {
  event.preventDefault();
  keyword = inputSearch.value.trim();
  recordsDataForSearch(keyword, category, page, limit);
  await search();
  inputResultSearch = fullInputResultSearch.results;
  console.log(inputResultSearch);
  if (fullInputResultSearch.totalPages === 0) {
    messageForError();
  }
=======
searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    keyword = inputSearch.value.trim();
    recordsDataForSearch(keyword, category, page, limit);
    await search();
    inputResultSearch = fullInputResultSearch.results;
    renderCards(inputResultSearch);
    if(fullInputResultSearch.totalPages === 0){
        messageForError();
    }
>>>>>>> Stashed changes
});

////////////////////////////////////////// ALL CATEGORIES ////////////////////////////////////////////////////////////////////

async function ifEmptyCategories() {
<<<<<<< Updated upstream
  try {
    const storageDataCategories = localStorage.getItem('categories-filters');
    if (storageDataCategories) {
      productsCategories = JSON.parse(storageDataCategories);
      // localStorage.removeItem('categories-filters');
    } else {
      const filters = '';
      const firstProductsCategoriesFilters = `${products}/categories`;
      const classFirstCategoriesProducts = new RequestToTheServer(
        firstProductsCategoriesFilters,
        filters,
        page,
        limit
      );
      productsCategories = await classFirstCategoriesProducts.fetchBreeds();
      localStorage.setItem(
        'categories-filters',
        JSON.stringify(productsCategories)
      );
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
  renderCategories(productsCategories);
}

ifEmptyCategories();

function renderCategories(productsCategories) {
  const listCategories = [];
  productsCategories.forEach(productsCategorie => {
    const itemCategories = `<li class="li-first-select-search"><button class="button-li-filters">${productsCategorie
      .replace(/_/g, ' ')
      .replace(/&/g, '/')}</button></li>`;
    listCategories.push(itemCategories);
  });
  firctSelectSearch.insertAdjacentHTML('beforeend', listCategories.join(''));
  const buttonsLiFilters = document.querySelectorAll('.button-li-filters');
  addListenerLi(buttonsLiFilters);
=======
    try {
        const storageDataCategories = localStorage.getItem('categories-filters');
        if (storageDataCategories) {
            productsCategories = JSON.parse(storageDataCategories);
        } else {
            const filters = '';
            const firstProductsCategoriesFilters = `${products}/categories`;
            const classFirstCategoriesProducts = new RequestToTheServer(firstProductsCategoriesFilters, filters, page, limit);
            productsCategories = await classFirstCategoriesProducts.fetchBreeds();
            localStorage.setItem('categories-filters', JSON.stringify(productsCategories));
        }
        renderCategories(productsCategories);
    } catch (error) {
        messageForError();
        console.error("Error:", error.message);
    }
};

ifEmptyCategories();

function renderCategories(productsCategories){
    const listCategories = [];
    productsCategories.forEach((productsCategorie) => {
        const itemCategories = `<li class="li-first-select-search"><button class="button-li-filters">${productsCategorie.replace(/_/g, ' ').replace(/&/g, '/')}</button></li>`;
        listCategories.push(itemCategories)
    });
    listCategories.push(`<li class="li-first-select-search"><button class="button-li-filters">Show all</button></li>`);
    firctSelectSearch.insertAdjacentHTML('beforeend', listCategories.join(''));
    const buttonsLiFilters = document.querySelectorAll('.button-li-filters');
    addListenerLi(buttonsLiFilters)
>>>>>>> Stashed changes
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

buttonCategories.addEventListener('click', () =>
  addListenerButton(buttonCategories, firctSelectSearch)
);

function addListenerButton(button, buttonList) {
  buttonList.classList.add('first-select-search');
  document.addEventListener('click', event =>
    workButtonMenu(event, button, buttonList)
  );
}

function workButtonMenu(event, button, listButtonMenu) {
  if (
    !button.contains(event.target) &&
    !listButtonMenu.contains(event.target)
  ) {
    listButtonMenu.classList.remove('first-select-search');
  } else if (listButtonMenu.contains(event.target)) {
    setTimeout(() => {
      listButtonMenu.classList.remove('first-select-search');
    }, 100);
  }
}

function addListenerLi(buttonsLiFilters) {
  buttonsLiFilters.forEach(buttonLiFilters => {
    buttonLiFilters.addEventListener('click', renderEndPoint);
  });
}

<<<<<<< Updated upstream
function renderEndPoint(event) {
  const nameCategoryForSelect = event.currentTarget.textContent;
  category = nameCategoryForSelect.replace(/ /g, '_').replace(/\//g, '&');
  spanButtonCategories.innerHTML = `${nameCategoryForSelect}`;
=======
async function renderEndPoint(event){
    const nameCategoryForSelect = event.currentTarget.textContent;
    category = nameCategoryForSelect.replace(/ /g, '_').replace(/\//g, '&');
    spanButtonCategories.innerHTML = `${nameCategoryForSelect}`;
    if(category === 'Show_all'){
        category = ''
    }
    recordsDataForSearch(keyword, category, page, limit);
    await search();
    inputResultSearch = fullInputResultSearch.results;
    renderCards(inputResultSearch);
    if(fullInputResultSearch.totalPages === 0){
        messageForError();
    }
>>>>>>> Stashed changes
}

///////////////////////////////////////////////////////  RENDER  CARDS  /////////////////////////////////////////////////////////////

function renderCards(products) {
<<<<<<< Updated upstream
  const listResult = [];
  products.forEach(product => {
    const itemResult = `<li class="card-list-item id-for-del" data-id=${product._id}>
                <img src="${product.img}" loading="lazy" class="cardlist-img" alt="${product.name}" onerror="this.onerror=null;this.src='';" width=300>
=======
    const listResult = [];
    products.forEach((product) => {
        if(product.is10PercentOff){
        const itemResult = `<li class="card-list-item id-for-del" data-id=${product._id}>
                <div class = "div-img">
                <img src="${product.img}" loading="lazy" class="cardlist-img" alt="${product.name}" />
                </div>
>>>>>>> Stashed changes
                <h3 class="card-list-product">${product.name}</h3>
                <div class="cardlist-descr">
                <div class="two-items">
                    <p class ="li-p-cards"><span class ="span-p-cards">Category: </span>${product.category.replace(/_/g, ' ').replace(/&/g, '/')}</p>
                    <p class ="li-p-cards"><span class ="span-p-cards">Size: </span>${product.size}</p>
                </div>
                    <p class ="li-p-cards"><span class ="span-p-cards">Popularity: </span>${product.popularity}</p>
                </div>
                <div class="cartlist-btn"><button class="cardlist-add-cart" id=${product._id}>
                <svg class="cardlist-svg" weight="18" height="18">
                <use href="../img/icons.svg#icon-heroicons-solid_shopping-cart"></use>
                </svg>
                </button>
                </div>
                <p class ="price-for-cards">$${product.price}</p>
                <svg  class="discount-for-filter-cards">
                <use href="../img/icons.svg#icon-discount-1"></use>
                </svg>
                </li>`;
<<<<<<< Updated upstream
    listResult.push(itemResult);
  });
  cardList.innerHTML = listResult.join(' ');
}

// localStorage.clear()

// const allValueInputLS = localStorage.getItem('all-value-input');

// async function functionInputSearch(textInputFilters, allValueInputLS, nameCategory){
// let resultSearch = localStorage.getItem('result-search-filters');
// if(!textInputFilters && nameCategory === ''){
//     ifEmptyInput();
//     filtersResult.innerHTML = '';
// } else if(allValueInputLS){
//         const allValueInput = JSON.parse(allValueInputLS);
//         allValueInput.push(textInputFilters)
//         const uniqueAllValueInput = allValueInput.filter(
//             (value, index, array) => array.indexOf(value) === index
//         );
//         localStorage.setItem('all-value-input', JSON.stringify(uniqueAllValueInput));
//         // localStorage.removeItem('all-value-input');
//         console.log(uniqueAllValueInput);
//         if(allValueInput.find(value => value === textInputFilters) && resultSearch){
//             const massOldResult = JSON.parse(resultSearch);
//             inputResultSearch = massOldResult.filter(
//                 obj => obj.name.toLowerCase().includes(textInputFilters.toLowerCase())
//                 ).filter(obj => obj.category === nameCategory);
//             if(Object.keys(inputResultSearch).length === 0){
//                 await searchWithFilters(resultSearch, textInputFilters, nameCategory)
//             }
//             console.log(inputResultSearch);
//         } else {
//             searchWithFilters(resultSearch, textInputFilters, nameCategory)
//         }
//     } else {
//         console.log([textInputFilters]);
//         localStorage.setItem('all-value-input', JSON.stringify([textInputFilters]));
//         searchWithFilters(resultSearch, textInputFilters, nameCategory)
// }
// };

// const productsFromTheLS = JSON.parse(localStorage.getItem('products-home-page-filters')).results;
// resultSearch = localStorage.getItem('result-search-filters');
//             const resultSearchFromTheLS = JSON.parse(resultSearch);
//             resultSearchFromTheLS.forEach((resultObject) => {
//                 if(!productsFromTheLS.find(newResult => newResult._id === resultObject._id)){
//                     productsFromTheLS.push(resultObject);
//                 }
//             });

// async function searchWithFilters(textInputFilters, nameCategory) {

//         if(fullInputResultSearch.totalPages === 0){
//             messageForError();
//         } else {
//             if(resultSearch){
//                 const resultNewResultSearch = JSON.parse(resultSearch);
//                 const resultInputResultSearch = inputResultSearch;
//                 resultInputResultSearch.forEach((resultObject) => {
//                     if(!resultNewResultSearch.find(newResult => newResult._id === resultObject._id)){
//                         resultNewResultSearch.push(resultObject);
//                     }
//                 });
//                 localStorage.setItem('result-search-filters', JSON.stringify(resultNewResultSearch));
//                 // localStorage.removeItem('result-search-filters');
//                 console.log(resultNewResultSearch);
//             } else {
//                 console.log(inputResultSearch);
//                 localStorage.setItem('result-search-filters', JSON.stringify(inputResultSearch));
//             };
//         }
//         console.log(inputResultSearch)
// }
=======
                listResult.push(itemResult)
        } else {
            const itemResult = `<li class="card-list-item id-for-del" data-id=${product._id}>
                <div class = "div-img">
                <img src="${product.img}" loading="lazy" class="cardlist-img" alt="${product.name}" />
                </div>
                <h3 class="card-list-product">${product.name}</h3>
                <div class="cardlist-descr">
                <div class="two-items">
                    <p class ="li-p-cards"><span class ="span-p-cards">Category: </span>${product.category.replace(/_/g, ' ').replace(/&/g, '/')}</p>
                    <p class ="li-p-cards"><span class ="span-p-cards">Size: </span>${product.size}</p>
                </div>    
                    <p class ="li-p-cards"><span class ="span-p-cards">Popularity: </span>${product.popularity}</p>
                </div>
                <div class="cartlist-btn"><button class="cardlist-add-cart" id=${product._id}>
                <svg class="cardlist-svg" weight="18" height="18">
                <use href="../img/icons.svg#icon-heroicons-solid_shopping-cart"></use>
                </svg>
                </button>
                </div>
                <p class ="price-for-cards">$${product.price}</p>
                <svg  class="visually-hidden">
                <use href="../img/icons.svg#icon-discount-1"></use>
                </svg>
                </li>`;
                listResult.push(itemResult)
        }
    });
    filtersResult.innerHTML = `<ul class="card-list">${listResult.join(" ")}</ul>`;
    workShopButton(products);
};

function workShopButton(products) {
    const allShopButton = document.querySelectorAll('.cardlist-add-cart');
    [...allShopButton].forEach((shopButton) => {
        shopButton.addEventListener('click', (event) => {
            const idShopButton = event.currentTarget.getAttribute('id');
            const ourProduct = products.find((odj) => odj._id === idShopButton);
            const cardLS = localStorage.getItem('card');
            if(cardLS){
                const infoInCardLS = JSON.parse(cardLS);
                infoInCardLS.push(ourProduct);
                localStorage.setItem('card', JSON.stringify(infoInCardLS));
            } else{
                localStorage.setItem('card', JSON.stringify([ourProduct]));
            }
            event.currentTarget.innerHTML = `<svg class="cardlist-svg" weight="18" height="18">
            <use href="../img/icons.svg#icon-check"></use>
            </svg>`;
            event.currentTarget.setAttribute('disabled', 'true');
        })
    })
};
>>>>>>> Stashed changes
