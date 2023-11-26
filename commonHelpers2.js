var W=Object.defineProperty;var G=(e,t,s)=>t in e?W(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var N=(e,t,s)=>(G(e,typeof t!="symbol"?t+"":t,s),s);import"./assets/cart-7221acb4.js";import{a as y}from"./assets/vendor-27c5a77b.js";class w{constructor(t,s,o,r){N(this,"baseUrl","https://food-boutique.b.goit.study/api/");this.endPoint=t,this.filters=s,this.page=o,this.limit=r}async fetchBreeds(){try{return(await y.get(`${this.baseUrl}${this.endPoint}?${this.filters}&page=${this.page}&limit=${this.limit}`)).data}catch(t){console.error("Error:",t.message)}}}const K=document.querySelector(".search-form"),V=document.querySelector(".first-input-search"),F=document.querySelector(".filters-result"),z=document.querySelector(".first-select-search-not-focus"),J=document.querySelector(".button-categories"),X=document.querySelector(".span-button-categories"),D="products";let b="",g="",h=1,d=6,m={},C={},v={},u={},Y=window.matchMedia("(min-width: 768px)").matches,Z=window.matchMedia("(min-width: 1280px)").matches;Z?d=9:Y?d=8:d=6;function T(e,t,s,o){localStorage.setItem("data-for-search",JSON.stringify({keyword:e,category:t,page:s,limit:o}))}T(b,g,h,d);async function L(){try{const e=JSON.parse(localStorage.getItem("data-for-search")),t=`keyword=${e.keyword}&category=${e.category}`;u=await new w(D,t,h,d).fetchBreeds()}catch(e){S(),console.error("Error:",e.message)}}const S=()=>{const e=`<div class="error">
    <p class="title-error">
        Nothing was found for the selected <span><a class="a-title-error" href="">filters...</a></span>
    </p>
    <p class="p-error">
        Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.
    </p>
</div>`;F.innerHTML=e};async function ee(){try{const e=localStorage.getItem("products-home-page-filters");if(e){const t=JSON.parse(e);t.length>=d?m=t.slice(0,d):(await L(),m=u.results,localStorage.setItem("products-home-page-filters",JSON.stringify(m)))}else await L(),m=u.results,localStorage.setItem("products-home-page-filters",JSON.stringify(m));x(m)}catch(e){S(),console.error("Error:",e.message)}}ee();K.addEventListener("submit",async e=>{e.preventDefault(),b=V.value.trim(),T(b,g,h,d),await L(),C=u.results,x(C),u.totalPages===0&&S()});async function te(){try{const e=localStorage.getItem("categories-filters");if(e)v=JSON.parse(e);else{const t="",s=`${D}/categories`;v=await new w(s,t,h,d).fetchBreeds(),localStorage.setItem("categories-filters",JSON.stringify(v))}se(v)}catch(e){S(),console.error("Error:",e.message)}}te();function se(e){const t=[];e.forEach(o=>{const r=`<li class="li-first-select-search"><button class="button-li-filters">${o.replace(/_/g," ").replace(/&/g,"/")}</button></li>`;t.push(r)}),t.push('<li class="li-first-select-search"><button class="button-li-filters">Show all</button></li>'),z.insertAdjacentHTML("beforeend",t.join(""));const s=document.querySelectorAll(".button-li-filters");ce(s)}J.addEventListener("click",()=>oe(J,z));function oe(e,t){t.classList.add("first-select-search"),document.addEventListener("click",s=>re(s,e,t))}function re(e,t,s){!t.contains(e.target)&&!s.contains(e.target)?s.classList.remove("first-select-search"):s.contains(e.target)&&setTimeout(()=>{s.classList.remove("first-select-search")},100)}function ce(e){e.forEach(t=>{t.addEventListener("click",ae)})}async function ae(e){const t=e.currentTarget.textContent;g=t.replace(/ /g,"_").replace(/\//g,"&"),X.innerHTML=`${t}`,g==="Show_all"&&(g=""),T(b,g,h,d),await L(),C=u.results,x(C),u.totalPages===0&&S()}function x(e){const t=[],s=JSON.parse(localStorage.getItem("cart"));e.forEach(o=>{let r="",c="icon-heroicons-solid_shopping-cart";s&&(s.some(i=>i._id===o._id)?c="icon-check":c="icon-heroicons-solid_shopping-cart"),o.is10PercentOff?r=`<li class="card-list-item id-for-del" data-id=${o._id}>
                <div class = "div-img">
                <img src="${o.img}" loading="lazy" class="cardlist-img" alt="${o.name}" />
                </div>
                <h3 class="card-list-product">${o.name}</h3>
                <div class="cardlist-descr">
                <div class="two-items">
                    <p class ="li-p-cards"><span class ="span-p-cards">Category: </span>${o.category.replace(/_/g," ").replace(/&/g,"/")}</p>
                    <p class ="li-p-cards"><span class ="span-p-cards">Size: </span>${o.size}</p>
                </div>
                    <p class ="li-p-cards"><span class ="span-p-cards">Popularity: </span>${o.popularity}</p>
                </div>
                <div class="cartlist-btn"><button class="cardlist-add-cart" id=${o._id}>
                <svg class="cardlist-svg" weight="18" height="18">
                <use href="../img/icons.svg#${c}"></use>
                </svg>
                </button>
                </div>
                <p class ="price-for-cards">$${o.price}</p>
                <svg  class="discount-for-filter-cards">
                <use href="../img/icons.svg#icon-discount-1"></use>
                </svg>
                </li>`:r=`<li class="card-list-item id-for-del" data-id=${o._id}>
                <div class = "div-img">
                <img src="${o.img}" loading="lazy" class="cardlist-img" alt="${o.name}" />
                </div>
                <h3 class="card-list-product">${o.name}</h3>
                <div class="cardlist-descr">
                <div class="two-items">
                    <p class ="li-p-cards"><span class ="span-p-cards">Category: </span>${o.category.replace(/_/g," ").replace(/&/g,"/")}</p>
                    <p class ="li-p-cards"><span class ="span-p-cards">Size: </span>${o.size}</p>
                </div>    
                    <p class ="li-p-cards"><span class ="span-p-cards">Popularity: </span>${o.popularity}</p>
                </div>
                <div class="cartlist-btn"><button class="cardlist-add-cart" id=${o._id}>
                <svg class="cardlist-svg" weight="18" height="18">
                <use href="../img/icons.svg#${c}"></use>
                </svg>
                </button>
                </div>
                <p class ="price-for-cards">$${o.price}</p>
                <svg  class="visually-hidden">
                <use href="../img/icons.svg#icon-discount-1"></use>
                </svg>
                </li>`,t.push(r)}),F.innerHTML=`<ul class="card-list">${t.join(" ")}</ul>`,ie(e)}function ie(e){[...document.querySelectorAll(".cardlist-add-cart")].forEach(s=>{s.addEventListener("click",o=>{const r=o.currentTarget.getAttribute("id"),c=e.find(i=>i._id===r),a=localStorage.getItem("cart");if(a){const i=JSON.parse(a);i.push(c),localStorage.setItem("cart",JSON.stringify(i))}else localStorage.setItem("cart",JSON.stringify([c]));o.currentTarget.innerHTML=`<svg class="cardlist-svg" weight="18" height="18">
            <use href="../img/icons.svg#icon-check"></use>
            </svg>`,o.currentTarget.setAttribute("disabled","true")})})}const n={closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop"),addToCart:document.querySelector(".modal-btn-sabmit"),discountProduct:document.querySelector(".modal-discount-svg"),onCart:document.querySelector(".modal-btn-sabmit-span"),modalImg:document.querySelector(".modal-img img"),modalTitle:document.querySelector(".modal-title"),modalCategory:document.querySelector(".modal-list li:nth-child(1) .modal-item-span"),modalSize:document.querySelector(".modal-list li:nth-child(2) .modal-item-span"),modalPopularity:document.querySelector(".modal-list li:nth-child(3) .modal-item-span"),modalDesc:document.querySelector(".modal-info-taxt"),modalPrice:document.querySelector(".modal-price")};n.closeModalBtn.addEventListener("click",B);n.backdrop.addEventListener("click",fe);const ne=document.querySelectorAll(".cardlist-img");ne.forEach(e=>{e.addEventListener("click",t=>le(t))});function le(e){const t=e.currentTarget.closest(".card-list-item").dataset.id;j(t)}const de="https://food-boutique.b.goit.study/api/";async function j(e){window.addEventListener("keydown",H),document.body.classList.add("show-modal"),await me(e),R(e),U()}async function ue(e){try{return(await y.get(`${de}products/${e}`)).data}catch(t){return console.error("Error:",t.message),null}}async function me(e){const t=await ue(e);if(t){n.modalImg.src=t.img,n.modalImg.alt=t.name,n.modalTitle.textContent=t.name,n.modalCategory.textContent=t.category,n.modalSize.textContent=t.size,n.modalPopularity.textContent=t.popularity,n.modalDesc.textContent=t.desc,n.modalPrice.textContent=`$${t.price.toFixed(2)}`;const s=R(e),o=P().includes(e);I(s,o)}}function I(e,t){const s=e?"Remove from":t?"Added to":"Add to";n.addToCart.querySelector(".modal-btn-sabmit-span").textContent=s,n.addToCart.disabled=e}function R(e){const s=P().includes(e);return n.addToCart.addEventListener("click",()=>{s?(pe(e),I(!1,!1)):(ge(e),I(!0,!0))}),s}function P(){return JSON.parse(localStorage.getItem("cart"))||[]}function ge(e){let t=P();t.some(s=>s.id===e.id)||(t.push(e),localStorage.setItem("cart",JSON.stringify(t)))}function pe(e){let t=P();const s=t.findIndex(o=>o.id===e);s!==-1&&(t.splice(s,1),localStorage.setItem("cart",JSON.stringify(t)))}function B(){window.removeEventListener("keydown",H),document.body.classList.remove("show-modal"),U()}function fe(e){e.currentTarget===e.target&&B()}function H(e){e.code==="Escape"&&B()}function ye(){return document.body.classList.contains("show-modal")}function U(){document.body.style.overflow=ye()?"hidden":""}document.addEventListener("DOMContentLoaded",async function(){const e=new w("products/popular?limit=5");try{const t=Se();if(t)A(t);else{const s=await e.fetchBreeds();he(s),A(s)}_()}catch(t){console.error("Error:",t)}});function he(e){localStorage.setItem("popularProducts",JSON.stringify(e)),_()}function Se(){const e=localStorage.getItem("popularProducts");return e?JSON.parse(e):null}function A(e){const t=document.querySelectorAll(".product-template");t.forEach(s=>{s.querySelector(".product-image").src="",s.querySelector(".product-name").textContent="",s.querySelector(".category-value").textContent="",s.querySelector(".size-value").textContent="",s.querySelector(".popularity-value").textContent=""}),e.slice(0,t.length).forEach((s,o)=>{const r=t[o];r.style.display="flex",r.querySelector(".product-image").src=s.img,r.querySelector(".product-name").textContent=s.name,r.querySelector(".category-value").textContent=s.category.replace("_"," "),r.querySelector(".size-value").textContent=s.size,r.querySelector(".popularity-value").textContent=s.popularity;const c={_Id:s._id,name:s.name,img:s.img,category:s.category,price:s.price,size:s.size,is10PercentOff:s.is10PercentOff,popularity:s.popularity};r.querySelector(".product-image-container").addEventListener("click",function(){let p=[c];localStorage.setItem("popul",JSON.stringify(p)),j(c._Id)});const i=r.querySelector(".add-to-cart-btn");i.onclick=function(){ve(c),updateCart()},i.setAttribute("data-product-id",s._id)})}function ve(e){let t=JSON.parse(localStorage.getItem("cart"))||[];const s=t.findIndex(o=>o._Id===e._Id);s!==-1?t.splice(s,1):t.push(e),localStorage.setItem("cart",JSON.stringify(t)),_()}function _(){const e=JSON.parse(localStorage.getItem("cart"))||[];document.querySelectorAll(".cart-btn").forEach(s=>{const o=s.getAttribute("data-product-id"),r=s.querySelector(".icon-off"),c=s.querySelector(".icon-on"),a=e.some(i=>i._Id===o);r&&c&&(a?(s.classList.add("added-to-cart"),r.style.display="block",c.style.display="none"):(s.classList.remove("added-to-cart"),r.style.display="none",c.style.display="block"))})}const l={formSubscription:document.querySelector(".footer-form"),openModalPolicy:document.querySelector(".js-modal-policy-open"),openModalTerms:document.querySelector(".js-modal-terms-open"),closeModalPolicyBtn:document.querySelector(".js-policy-close"),closeModalTermsBtn:document.querySelector(".js-terms-close"),policyLink:document.querySelector(".js-policy"),termsLink:document.querySelector(".js-terms")};l.formSubscription.addEventListener("submit",be);const E=new w;E.endPoint="subscription";function be(e){e.preventDefault();const t=e.currentTarget.elements.email.value;Ce(t),e.currentTarget.reset()}async function Ce(e){y.defaults.baseURL=E.baseUrl;const t={method:"post",url:E.endPoint,headers:{"Content-Type":"application/json"},data:{email:e}};try{const s=await y.request(t);alert(s.data.message)}catch(s){alert(s.response.data.message),console.log(s)}}l.openModalPolicy.addEventListener("click",()=>{Q(l.policyLink),Le(),window.addEventListener("keydown",q)});l.openModalTerms.addEventListener("click",()=>{Q(l.termsLink),Pe(),window.addEventListener("keydown",q)});function Q(e){e.classList.remove("is-hidden-policy"),document.body.classList.add(".no-scroll")}function Le(){l.closeModalPolicyBtn.addEventListener("click",O)}function O(){l.policyLink.classList.add("is-hidden-policy"),document.body.classList.remove(".no-scroll"),we()}function we(){l.closeModalPolicyBtn.removeEventListener("click",O),window.removeEventListener("keydown",q)}function Pe(){l.closeModalTermsBtn.addEventListener("click",M)}function M(){l.termsLink.classList.add("is-hidden-policy"),document.body.classList.remove(".no-scroll"),qe()}function qe(){l.closeModalTermsBtn.removeEventListener("click",M),window.removeEventListener("keydown",q)}function q({code:e}){e==="Escape"&&(O(),M())}const $e=document.querySelector(".discount-container");let k=[],f=[];const ke=e=>{f.find(s=>s._id===e._id)||(f.push(e),localStorage.setItem("addedProducts",JSON.stringify(f)))},Ie=e=>f.some(t=>t._id===e);async function Ee(){try{let t=function(c){const{_id:a,name:i,img:p,price:$}=c;return`<div class="discount-card">
                  <div class="discount-logo">
                  <svg class="logo">
                      <use href="../img/icons.svg#icon-discount-1" width="60" height="60"></use>
                  </svg>
                  </div>
                  <div class="discount-card-image">
                  <img src="${p}" alt="${i}" width="114" height="'114" />
                  </div>
                  <div class="discount-card-info">
                  <div class="discount-card-name">
                      <p class="discount-card-text">${i}</p>
                  </div>
  
                  <div class="discount-card-price">
                      <p class="discount-card-text">$${$}</p>
  
                      <button class="discount-card-button" type="button" data-id=${a}>
                      <svg class="">
                          <use href="../img/icons.svg#${Ie(a)?"icon-check":"icon-heroicons-solid_shopping-cart"}"></use>
                      </svg>
                      </button>
                  </div>
                  </div>
              </div>`},s=function(c){return c.slice(0,2).map(t).join("")},o=function(){const c=s(k);$e.innerHTML=c};k=(await y.get("https://food-boutique.b.goit.study/api/products/discount")).data,f=JSON.parse(localStorage.getItem("addedProducts"))||[],o();const r=document.querySelectorAll(".discount-card-button");Array.from(r).forEach(c=>{c.addEventListener("click",a=>{const i=a.currentTarget.dataset.id,p=k.find($=>$._id===i);ke(p),o()})})}catch(e){console.error("Error fetching discount products:",e.message)}}Ee();const Te=document.querySelector("ul");let xe=8;function Be(e,t){let s="",o,r=t-1,c=t;t>1&&(s+=`<li class="btn prev" onclick="element(totalPages, ${t-1})"><span><i class="left"></i> < </span></li>`);for(let a=r;a<=c;a++)a>e||(a==0&&(a=a+1),t==a?o="active":o="",s+=`<li class="numb ${o}"onclick="element(totalPages, ${a})"><span>${a}</span></li>`);t<e&&t<e&&(s+='<li class="dots"><span>...</span></li>',t<e+1&&(s+=`<li class="numb" onclick="element(totalPages, ${t})"><span>7</span></li>`,t<=e+2&&(s+=`<li class="numb" onclick="element(totalPages, ${t})"><span>8</span></li>`))),t<e&&(s+=`<li class="btn next"onclick="element(totalPages, ${t+1})"><span><i class="right"></i> > </span></li>`),Te.innerHTML=s}Be(xe,2);
//# sourceMappingURL=commonHelpers2.js.map
