import{i as j,l as u}from"./assets/icons-760ac4bf.js";import"./assets/vendor-27c5a77b.js";console.log(j);const l=document.querySelector(".js-cart-items-quantity"),L=document.querySelector(".js-cart-empty"),b=document.querySelector(".js-cart-container"),w=document.querySelector(".js-delete-all-btn"),a=document.querySelector(".js-cart-selected-products");document.querySelector(".js-cart-order-details");const S=document.querySelector(".js-total-ordered-price"),P=document.querySelector(".js-email-form"),I=document.querySelector(".cart-input");let r=1;M();d();function g(){const e=localStorage.getItem("cart");return JSON.parse(e)}const k=g(),f=x(k);l.innerHTML=f.length;u();const A=f.map(e=>q(e._id,e.name,e.img,e.category,e.size,e.price)).join("");a.innerHTML=A;p(f);a.addEventListener("click",O);function x(e){if(e===null||e.length<1)return l.innerHTML="0",y(),d(),console.log("Error array"),[];M(),_();const o=new Set,t=k.filter(n=>{const c=n._id;return o.has(c)?!1:(o.add(c),!0)});return console.log(t),t}function O(e){const o=e.target.closest("[id]"),t=o?o.id:null;if(console.log(t),e.target.closest(".cart-remove-product-btn")){const c=g().filter(s=>s._id!==t);if(console.log(c),c.length>0){localStorage.setItem("cart",JSON.stringify(c));const s=g().map(i=>q(i._id,i.name,i.img,i.category,i.size,i.price)).join("");a.innerHTML=s,u(),p(c),l.innerHTML=c.length}else localStorage.removeItem("cart"),l.innerHTML="0",a.innerHTML="",y(),d(),u()}}P.addEventListener("submit",e=>{e.preventDefault();const o=I.value;console.log(`Ordered by: ${o}`),console.log("Submit successful"),V(),localStorage.removeItem("cart"),P.reset()});w.addEventListener("click",B);function B(e){e.preventDefault(),localStorage.removeItem("cart"),a.innerHTML="",d(),y(),u(),l.innerHTML="0"}function p(e){if(e.every(t=>typeof t=="number")){const t=e.reduce((n,c)=>n+c,0).toFixed(2);S.innerHTML=`$${t}`}else{const t=e.reduce((n,c)=>n+c.price,0).toFixed(2);S.innerHTML=`$${t}`}}function q(e,o,t,n,c,s){return`
<div class="selected-item" id="${e}">
    <button class="cart-remove-product-btn"><svg class="js-delete-product-icon"><use href='${j}#icon-ion_close-sharp'></use></svg></button>
    <div class="js-selected-item-img"><img class='js-product-item-img' src="${t}" alt="Product"></div>
    <div class="js-selected-item-description">
        <p class="js-item-product-name">${o}</p>
<div class="js-item-description-section">
        <p class="js-item-product-properties">Category: <span class="js-item-product-descr">${n}</span> </p> <p class="js-item-product-properties">Size: <span class="js-item-product-descr">${c}</span></p>
        </div>
        <div class="js-price-count-section"><p data-price="${s}" class="js-item-product-price">$<span class="js-price-value">${s}</span></p>
        <div class="js-counter-section">
        <button type="button" class="btn-count-minus">-</button>
        <p class="count-product">${r}</p>
       
        <button type="button" class="btn-count-plus">+</button>
        </div>
        </div>
    </div>
</div>
<div class="underline-container">
<p class="underline"></p>
</div>
`}function y(){L.style.display="flex"}function M(){L.style.display="none"}function _(){b.style.display="flex"}function d(){b.style.display="none"}console.log("Test end");function V(){z()}async function z(){window.addEventListener("keydown",h),document.body.classList.add("show-ordered-modal"),H(),document.querySelector(".js-backdrop-ordered").addEventListener("click",E),document.querySelector('[data-action="close-modal-cart"]').addEventListener("click",C)}function h(e){e.code==="Escape"&&v()}function C(){v()}function v(){window.removeEventListener("keydown",h),document.body.classList.remove("show-ordered-modal"),document.querySelector(".js-backdrop-ordered").removeEventListener("click",E),document.querySelector('[data-action="close-modal-cart"]').removeEventListener("click",C),H(),y(),d(),u(),l.innerHTML="0",a.innerHTML="",console.log("closed")}function E(e){e.currentTarget===e.target&&v()}function D(){return document.body.classList.contains("show-modal")}function H(){document.body.style.overflow=D()?"hidden":""}const N=document.querySelector(".btn-count-minus"),F=document.querySelector(".btn-count-plus"),T=document.querySelector(".count-product"),J=document.querySelector(".js-price-value"),Q=document.querySelectorAll(".js-price-value");F.addEventListener("click",R);function R(e){r=r+=1,T.textContent=r;const t=document.querySelector("[data-price]").dataset.price*r;console.log(t),m(t);const n=$();p(n),m(t);const c=e.target.closest("[id]");c&&c.id,console.log(e.target);const s=e.target.closest(".js-price-value");s&&s.value}N.addEventListener("click",G);function G(){console.log(r);const e=document.querySelector("[data-price]");let o=e.dataset.price*r;if(console.log(o),!(r<=1)){r=r-=1,T.textContent=r,o=e.dataset.price*r,console.log(o),m(o);const t=$();console.log(t),p(t),m(o)}}function m(e){J.innerHTML=`${e}`}function $(){const e=Array.from(Q).map(o=>Number(o.textContent));return console.log(e),e}
//# sourceMappingURL=commonHelpers.js.map
