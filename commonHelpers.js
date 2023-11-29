import{s as f,l as C}from"./assets/icons-7424da9d.js";import"./assets/vendor-27c5a77b.js";console.log(f);const s=document.querySelector(".js-cart-items-quantity"),v=document.querySelector(".js-cart-empty"),S=document.querySelector(".js-cart-container"),T=document.querySelector(".js-delete-all-btn"),a=document.querySelector(".js-cart-selected-products");document.querySelector(".js-cart-order-details");const H=document.querySelector(".js-total-ordered-price"),g=document.querySelector(".js-email-form"),b=document.querySelector(".cart-input");console.log("Test start");k();i();function u(){const e=localStorage.getItem("cart");return JSON.parse(e)}const m=u();console.log(m);const p=P(m);s.innerHTML=p.length;C();const w=p.map(e=>j(e._id,e.name,e.img,e.category,e.size,e.price)).join("");a.innerHTML=w;L(p);a.addEventListener("click",$);function P(e){if(e===null||e.length<1)return s.innerHTML="0",l(),i(),console.log("Error array"),[];k(),O();const t=new Set,r=m.filter(n=>{const o=n._id;return t.has(o)?!1:(t.add(o),!0)});return console.log(r),r}function $(e){const t=e.target.closest("[id]"),r=t?t.id:null;if(console.log(r),e.target.closest(".cart-remove-product-btn")){const o=u().filter(d=>d._id!==r);if(console.log(o),o.length>0){localStorage.setItem("cart",JSON.stringify(o));const d=u().map(c=>j(c._id,c.name,c.img,c.category,c.size,c.price)).join("");a.innerHTML=d,L(o),s.innerHTML=o.length}else localStorage.removeItem("cart"),s.innerHTML="0",a.innerHTML="",l(),i()}}g.addEventListener("submit",e=>{e.preventDefault();const t=b.value;console.log(`Ordered by: ${t}`),console.log("Submit successful"),B(),localStorage.removeItem("cart"),g.reset()});T.addEventListener("click",I);function I(e){e.preventDefault(),localStorage.removeItem("cart"),a.innerHTML="",i(),l(),s.innerHTML="0"}function L(e){const t=e.reduce((r,n)=>r+n.price,0).toFixed(2);H.innerHTML=`$${t}`}function j(e,t,r,n,o,d){return`
<div class="selected-item" id="${e}">
    <button class="cart-remove-product-btn"><svg class="js-delete-product-icon"><use href='${f}#icon-ion_close-sharp'></use></svg></button>
    <div class="js-selected-item-img"><img class='js-product-item-img' src="${r}" alt="Product"></div>
    <div class="js-selected-item-descroption">
        <p class="js-item-product-name">${t}</p>
        <p class="js-item-product-properties">Category: <span class="js-item-product-descr">${n}</span> Size: <span class="js-item-product-descr">${o}</span></p>
        <p class="js-item-product-price">$${d}</p>
    </div>
</div>
<p class="underline"></p>
`}function l(){v.style.display="flex"}function k(){v.style.display="none"}function O(){S.style.display="flex"}function i(){S.style.display="none"}console.log("Test end");function B(){_()}async function _(){window.addEventListener("keydown",M),document.body.classList.add("show-ordered-modal"),E(),document.querySelector(".js-backdrop-ordered").addEventListener("click",q),document.querySelector('[data-action="close-modal-cart"]').addEventListener("click",h)}function M(e){e.code==="Escape"&&y()}function h(){y()}function y(){window.removeEventListener("keydown",M),document.body.classList.remove("show-ordered-modal"),document.querySelector(".js-backdrop-ordered").removeEventListener("click",q),document.querySelector('[data-action="close-modal-cart"]').removeEventListener("click",h),E(),l(),i(),s.innerHTML="0",a.innerHTML="",console.log("closed")}function q(e){e.currentTarget===e.target&&y()}function A(){return document.body.classList.contains("show-modal")}function E(){document.body.style.overflow=A()?"hidden":""}
//# sourceMappingURL=commonHelpers.js.map
