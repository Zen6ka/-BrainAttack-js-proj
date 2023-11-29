import{s as P,l as $}from"./assets/icons-2836b34a.js";import"./assets/vendor-27c5a77b.js";console.log(P);const l=document.querySelector(".js-cart-items-quantity"),j=document.querySelector(".js-cart-empty"),b=document.querySelector(".js-cart-container"),w=document.querySelector(".js-delete-all-btn"),u=document.querySelector(".js-cart-selected-products");document.querySelector(".js-cart-order-details");const S=document.querySelector(".js-total-ordered-price"),L=document.querySelector(".js-email-form"),A=document.querySelector(".cart-input");let r=1;console.log("Test start");q();a();function y(){const e=localStorage.getItem("cart");return JSON.parse(e)}const g=y();console.log(g);const f=x(g);l.innerHTML=f.length;$();const I=f.map(e=>k(e._id,e.name,e.img,e.category,e.size,e.price)).join("");u.innerHTML=I;m(f);u.addEventListener("click",O);function x(e){if(e===null||e.length<1)return l.innerHTML="0",p(),a(),console.log("Error array"),[];q(),_();const t=new Set,o=g.filter(n=>{const c=n._id;return t.has(c)?!1:(t.add(c),!0)});return console.log(o),o}function O(e){const t=e.target.closest("[id]"),o=t?t.id:null;if(console.log(o),e.target.closest(".cart-remove-product-btn")){const c=y().filter(s=>s._id!==o);if(console.log(c),c.length>0){localStorage.setItem("cart",JSON.stringify(c));const s=y().map(i=>k(i._id,i.name,i.img,i.category,i.size,i.price)).join("");u.innerHTML=s,m(c),l.innerHTML=c.length}else localStorage.removeItem("cart"),l.innerHTML="0",u.innerHTML="",p(),a()}}L.addEventListener("submit",e=>{e.preventDefault();const t=A.value;console.log(`Ordered by: ${t}`),console.log("Submit successful"),V(),localStorage.removeItem("cart"),L.reset()});w.addEventListener("click",B);function B(e){e.preventDefault(),localStorage.removeItem("cart"),u.innerHTML="",a(),p(),l.innerHTML="0"}function m(e){const t=e.every(o=>typeof o=="number");if(console.log(t),t){console.log(t);const o=e.reduce((n,c)=>n+c,0).toFixed(2);S.innerHTML=`$${o}`}else{const o=e.reduce((n,c)=>n+c.price,0).toFixed(2);S.innerHTML=`$${o}`}}function k(e,t,o,n,c,s){return`
<div class="selected-item" id="${e}">
    <button class="cart-remove-product-btn"><svg class="js-delete-product-icon"><use href='${P}#icon-ion_close-sharp'></use></svg></button>
    <div class="js-selected-item-img"><img class='js-product-item-img' src="${o}" alt="Product"></div>
    <div class="js-selected-item-description">
        <p class="js-item-product-name">${t}</p>
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
<p class="underline"></p>
`}function p(){j.style.display="flex"}function q(){j.style.display="none"}function _(){b.style.display="flex"}function a(){b.style.display="none"}console.log("Test end");function V(){z()}async function z(){window.addEventListener("keydown",M),document.body.classList.add("show-ordered-modal"),E(),document.querySelector(".js-backdrop-ordered").addEventListener("click",C),document.querySelector('[data-action="close-modal-cart"]').addEventListener("click",h)}function M(e){e.code==="Escape"&&v()}function h(){v()}function v(){window.removeEventListener("keydown",M),document.body.classList.remove("show-ordered-modal"),document.querySelector(".js-backdrop-ordered").removeEventListener("click",C),document.querySelector('[data-action="close-modal-cart"]').removeEventListener("click",h),E(),p(),a(),l.innerHTML="0",u.innerHTML="",console.log("closed")}function C(e){e.currentTarget===e.target&&v()}function D(){return document.body.classList.contains("show-modal")}function E(){document.body.style.overflow=D()?"hidden":""}const N=document.querySelector(".btn-count-minus"),F=document.querySelector(".btn-count-plus"),T=document.querySelector(".count-product"),J=document.querySelector(".js-price-value"),Q=document.querySelectorAll(".js-price-value");F.addEventListener("click",R);function R(){r=r+=1,T.textContent=r;const t=document.querySelector("[data-price]").dataset.price*r;console.log(t),d(t);const o=H();m(o),d(t)}N.addEventListener("click",G);function G(){console.log(r);const e=document.querySelector("[data-price]");let t=e.dataset.price*r;if(console.log(t),!(r<=1)){r=r-=1,T.textContent=r,t=e.dataset.price*r,console.log(t),d(t);const o=H();console.log(o),m(o),d(t)}}function d(e){J.innerHTML=`${e}`}function H(){const e=Array.from(Q).map(t=>Number(t.textContent));return console.log(e),e}
//# sourceMappingURL=commonHelpers.js.map
