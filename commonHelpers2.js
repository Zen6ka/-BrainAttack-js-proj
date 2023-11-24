var _=Object.defineProperty;var z=(t,e,o)=>e in t?_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var L=(t,e,o)=>(z(t,typeof e!="symbol"?e+"":e,o),o);import"./assets/cart-07803058.js";import{a as h}from"./assets/vendor-27c5a77b.js";class S{constructor(e,o,r,s){L(this,"baseUrl","https://food-boutique.b.goit.study/api/");this.endPoint=e,this.filters=o,this.page=r,this.limit=s}async fetchBreeds(){try{const e=await h.get(`${this.baseUrl}${this.endPoint}?${this.filters}&page=${this.page}&limit=${this.limit}`);return console.log(e.data),e.data}catch(e){console.error("Error:",e.message)}}}const A=document.querySelector(".search-form"),R=document.querySelector(".first-input-search"),w=document.querySelector(".filters-result"),x=document.querySelector(".first-select-search-not-focus"),k=document.querySelector(".button-categories"),H=document.querySelector(".span-button-categories"),O="products";let y="",v="",m=1,p=6,l={},g={},u={},d={};function B(t,e,o,r){localStorage.setItem("data-for-search",JSON.stringify({keyword:t,category:e,page:o,limit:r}))}B(y,v,m,p);async function N(){const t=JSON.parse(localStorage.getItem("data-for-search")),e=`keyword=${t.keyword}&category=${t.category}`;d=await new S(O,e,m,p).fetchBreeds()}const U=()=>{const t=`<div class="error">
    <p class="title-error">
        Nothing was found for the selected <span><a class="a-title-error" href="">filters...</a></span>
    </p>
    <p class="p-error">
        Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.
    </p>
</div>`;w.innerHTML=t};async function W(){try{const t=localStorage.getItem("products-home-page-filters");t?l=JSON.parse(t):(await N(),l=d.results,console.log(d),localStorage.setItem("products-home-page-filters",JSON.stringify(l)))}catch(t){console.error("Error:",t.message)}console.log(l),M(l)}W();A.addEventListener("submit",async t=>{t.preventDefault(),y=R.value.trim(),B(y,v,m,p),await N(),g=d.results,console.log(g),M(g),d.totalPages===0&&U()});async function G(){try{const t=localStorage.getItem("categories-filters");if(t)u=JSON.parse(t);else{const e="",o=`${O}/categories`;u=await new S(o,e,m,p).fetchBreeds(),localStorage.setItem("categories-filters",JSON.stringify(u))}}catch(t){console.error("Error:",t.message)}K(u)}G();function K(t){const e=[];t.forEach(r=>{const s=`<li class="li-first-select-search"><button class="button-li-filters">${r.replace(/_/g," ").replace(/&/g,"/")}</button></li>`;e.push(s)}),x.insertAdjacentHTML("beforeend",e.join(""));const o=document.querySelectorAll(".button-li-filters");X(o)}k.addEventListener("click",()=>Q(k,x));function Q(t,e){e.classList.add("first-select-search"),document.addEventListener("click",o=>V(o,t,e))}function V(t,e,o){!e.contains(t.target)&&!o.contains(t.target)?o.classList.remove("first-select-search"):o.contains(t.target)&&setTimeout(()=>{o.classList.remove("first-select-search")},100)}function X(t){t.forEach(e=>{e.addEventListener("click",Y)})}function Y(t){const e=t.currentTarget.textContent;v=e.replace(/ /g,"_").replace(/\//g,"&"),H.innerHTML=`${e}`}function M(t){const e=[];t.forEach(o=>{const r=`<li class="card-list-item id-for-del" data-id=${o._id}>
                <div class = "div-img">
                <img src="${o.img}" loading="lazy" class="cardlist-img" alt="${o.name}" />
                </div>
                <h3 class="card-list-product">${o.name}</h3>
                <ul class="cardlist-descr">
                    <li class ="li-p-cards"><span class ="span-p-cards">Category: </span>${o.category.replace(/_/g," ").replace(/&/g,"/")}</li>
                    <li class ="li-p-cards"><span class ="span-p-cards">Size: </span>${o.size}</li>
                    <li class ="li-p-cards"><span class ="span-p-cards">Popularity: </span>${o.popularity}</li>
                </ul>
                <div class="cartlist-btn"><button class="cardlist-add-cart add-to-cart-product ">
                <svg class="cardlist-svg" weight="18" height="18">
                <use href="../img/icons.svg#icon-ic_baseline-search#icon-heroicons-solid_shopping-cart"></use>
                </svg>
                </button>
                </div>
                </li>`;e.push(r)}),w.innerHTML=`<ul class="card-list">${e.join(" ")}</ul>`}document.addEventListener("DOMContentLoaded",async function(){const t=new S("products/popular?limit=5");try{const e=tt();if(e)T(e);else{const o=await t.fetchBreeds();Z(o),T(o)}C()}catch(e){console.error("Error:",e)}});function Z(t){localStorage.setItem("popularProducts",JSON.stringify(t)),C()}function tt(){const t=localStorage.getItem("popularProducts");return t?JSON.parse(t):null}function T(t){const e=document.querySelectorAll(".product-template");e.forEach(o=>{o.style.display="none",o.querySelector(".product-image").src="",o.querySelector(".product-name").textContent="",o.querySelector(".category-value").textContent="",o.querySelector(".size-value").textContent="",o.querySelector(".popularity-value").textContent=""}),t.slice(0,e.length).forEach((o,r)=>{const s=e[r];s.style.display="flex",s.querySelector(".product-image").src=o.img,s.querySelector(".product-name").textContent=o.name,s.querySelector(".category-value").textContent=o.category.replace("_"," "),s.querySelector(".size-value").textContent=o.size,s.querySelector(".popularity-value").textContent=o.popularity;const a={productId:o._id,productName:o.name,productImg:o.img,productCategory:o.category,productPrice:o.price,productSize:o.size,productIs10PercentOff:o.is10PercentOff,productPopularity:o.popularity},c=s.querySelector(".add-to-cart-btn");c.onclick=function(){et(a)},c.setAttribute("data-product-id",o._id)})}function et(t){const e=JSON.parse(localStorage.getItem("cart"))||{};e[t.productId]?delete e[t.productId]:e[t.productId]=t,localStorage.setItem("cart",JSON.stringify(e)),C()}function C(){const t=JSON.parse(localStorage.getItem("cart"))||{};document.querySelectorAll(".cart-btn").forEach(o=>{const r=o.getAttribute("data-product-id"),s=o.querySelector(".icon-off"),a=o.querySelector(".icon-on");s&&a&&(t[r]?(o.classList.add("added-to-cart"),s.style.display="block",a.style.display="none"):(o.classList.remove("added-to-cart"),s.style.display="none",a.style.display="block"))})}const i={openModalPolicy:document.querySelector(".js-modal-policy-open"),openModalTerms:document.querySelector(".js-modal-terms-open"),closeModalPolicyBtn:document.querySelector(".js-policy-close"),closeModalTermsBtn:document.querySelector(".js-terms-close"),policyLink:document.querySelector(".js-policy"),termsLink:document.querySelector(".js-terms")};i.openModalPolicy.addEventListener("click",()=>{$(),i.closeModalPolicyBtn.addEventListener("click",$)});i.openModalTerms.addEventListener("click",()=>{E(),i.closeModalTermsBtn.addEventListener("click",E)});function $(){i.policyLink.classList.toggle("is-hidden-policy")}function E(){i.termsLink.classList.toggle("is-hidden-policy")}const n={openModalBtn:document.querySelector('[data-action="open-modal"]'),closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop"),addToCart:document.querySelector(".modal-btn-sabmit"),discountProduct:document.querySelector(".modal-discount-svg"),onCart:document.querySelector(".modal-btn-sabmit-span"),modalImg:document.querySelector(".modal-img img"),modalTitle:document.querySelector(".modal-title"),modalCategory:document.querySelector(".modal-list li:nth-child(1) .modal-item-span"),modalSize:document.querySelector(".modal-list li:nth-child(2) .modal-item-span"),modalPopularity:document.querySelector(".modal-list li:nth-child(3) .modal-item-span"),modalDesc:document.querySelector(".modal-info-taxt"),modalPrice:document.querySelector(".modal-price")};n.openModalBtn.addEventListener("click",st);n.closeModalBtn.addEventListener("click",q);n.backdrop.addEventListener("click",it);const ot="https://food-boutique.b.goit.study/api/";async function st(){const t=this.dataset.productId;await ct(t),window.addEventListener("keydown",F),document.body.classList.add("show-modal"),J(t)}async function rt(t){try{return(await h.get(`${ot}products/${t}`)).data}catch(e){return console.error("Error:",e.message),null}}async function ct(t){const e=await rt(t);e&&(n.modalImg.src=e.img,n.modalImg.alt=e.name,n.modalTitle.textContent=e.name,n.modalCategory.textContent=e.category,n.modalSize.textContent=e.size,n.modalPopularity.textContent=e.popularity,n.modalDesc.textContent=e.desc,n.modalPrice.textContent=`$${e.price.toFixed(2)}`,J(t))}function f(t){const e=t?"Remove from":"Add to";n.addToCart.querySelector(".modal-btn-sabmit-span").textContent=e,n.addToCart.disabled=t}function J(t){const o=b().includes(t);f(o),n.addToCart.addEventListener("click",()=>{o?(nt(t),f(!1),n.addToCart.removeEventListener("click",null)):(at(t),f(!0))})}function b(){return JSON.parse(localStorage.getItem("cart"))||[]}function at(t){let e=b();e.includes(t)||(e.push(t),localStorage.setItem("cart",JSON.stringify(e)))}function nt(t){let e=b();const o=e.indexOf(t);o!==-1&&(e.splice(o,1),localStorage.setItem("cart",JSON.stringify(e)))}function q(){window.removeEventListener("keydown",F),document.body.classList.remove("show-modal")}function it(t){t.currentTarget===t.target&&q()}function F(t){t.code==="Escape"&&q()}const lt=document.querySelector(".discount-container");let I=[];const dt=t=>{if(localStorage.getItem("addedProducts")){const e=JSON.parse(localStorage.getItem("addedProducts"));e.includes(t)||(e.push(t),localStorage.setItem("addedProducts",JSON.stringify(e)))}else localStorage.setItem("addedProducts",JSON.stringify([t]))},ut=t=>localStorage.getItem("addedProducts")&&JSON.parse(localStorage.getItem("addedProducts")).includes(t)?"icon-check":"icon-heroicons-solid_shopping-cart";async function mt(){try{let e=function(a){const{_id:c,name:P,img:D,price:j}=a;return`<div class="discount-card">
                  <div class="discount-logo">
                  <svg class="logo">
                      <use href="../img/icons.svg#icon-discount" width="60" height="60"></use>
                  </svg>
                  </div>
                  <div class="discount-card-image">
                  <img src="${D}" alt="${P}" width="114" height="'114" />
                  </div>
                  <div class="discount-card-info">
                  <div class="discount-card-name">
                      <p class="discount-card-text">${P}</p>
                  </div>
  
                  <div class="discount-card-price">
                      <p class="discount-card-text">$${j}</p>
  
                      <button class="discount-card-button" type="button" data-id=${c}>
                      <svg class="">
                          <use href="../img/icons.svg#${ut(c)}"></use>
                      </svg>
                      </button>
                  </div>
                  </div>
              </div>`},o=function(a){return a.slice(0,2).map(e).join("")},r=function(){const a=o(I);lt.innerHTML=a};I=(await h.get("https://food-boutique.b.goit.study/api/products/discount")).data,r();const s=document.querySelectorAll(".discount-card-button");Array.from(s).forEach(a=>{a.addEventListener("click",c=>{dt(c.currentTarget.dataset.id)})})}catch(t){console.error("Error fetching discount products:",t.message)}}mt();const pt=document.querySelector("ul");let gt=8;function ft(t,e){let o="",r,s=e-1,a=e;e>1&&(o+=`<li class="btn prev" onclick="element(totalPages, ${e-1})"><span><i class="left"></i> < </span></li>`);for(let c=s;c<=a;c++)c>t||(c==0&&(c=c+1),e==c?r="active":r="",o+=`<li class="numb ${r}"onclick="element(totalPages, ${c})"><span>${c}</span></li>`);e<t&&e<t&&(o+='<li class="dots"><span>...</span></li>',e<t+1&&(o+=`<li class="numb" onclick="element(totalPages, ${e})"><span>7</span></li>`,e<=t+2&&(o+=`<li class="numb" onclick="element(totalPages, ${e})"><span>8</span></li>`))),e<t&&(o+=`<li class="btn next"onclick="element(totalPages, ${e+1})"><span><i class="right"></i> > </span></li>`),pt.innerHTML=o}ft(gt,1);
//# sourceMappingURL=commonHelpers2.js.map