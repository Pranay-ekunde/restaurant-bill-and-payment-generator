import{v4 as u}from"https://jspm.dev/uuid";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=r(e);fetch(e.href,i)}})();const p=[{name:"Pizza",ingredients:["pepperoni","mushrom","mozarella"],id:0,price:14,emoji:"🍕",uuid:u()},{name:"Hamburger",ingredients:["beef","cheese","lettuce"],price:12,emoji:"🍔",id:1,uuid:u()},{name:"Beer",ingredients:["grain, hops, yeast, water"],price:12,emoji:"🍺",id:2,uuid:u()}],s=[],f=document.getElementById("submitform-btn"),m=document.getElementById("totalPrice"),d=document.getElementById("paymentModal");f.addEventListener("click",v);document.addEventListener("click",g);document.addEventListener("DOMContentLoaded",a);function v(t){t.preventDefault();const n=document.getElementById("paymentForm");if(n.checkValidity()){const r=n.elements.creditcard,o=n.elements.cvv,e=r.value.trim(),i=o.value.trim();if(e.length!==16||/\D/.test(e)){r.setCustomValidity("Credit card number must be exactly 16 digits"),n.reportValidity();return}if(i.length!==3||!/^\d{3}$/.test(i)){o.setCustomValidity("CVV must be 3 digits"),n.reportValidity();return}const c=n.elements.name.value;y(c),r.removeEventListener("input",l),o.removeEventListener("input",l)}else{const r=n.elements.creditcard,o=n.elements.cvv;r.setCustomValidity(""),o.setCustomValidity(""),n.reportValidity()}}function l(){this.setCustomValidity("")}creditCardInput.addEventListener("input",l);cvvInput.addEventListener("input",l);function y(t){d.style.display="none",s.length=0,a(),m.innerHTML=`
    <div class="confirmMsg">
      <p>Thanks ${t}, your order is on its way!</p>
    </div>
  `}function g(t){const n=t.target.dataset.menubtn,r=t.target.dataset.removebtn,o=t.target.dataset.completebtn;if(n){const e=p.find(i=>i.uuid===n);e&&(s.push(e),a())}else if(r){const e=s.findIndex(i=>i.uuid===r);e!==-1&&(s.splice(e,1),a())}else o&&(d.style.display="block")}function b(t){return`
    <div class="poop">
      <p class="emoji">${t.emoji}</p>
      <div class="menu-details">
        <p class="name"><b>${t.name}</b></p>
        <p class="ingredients">${t.ingredients}</p>
        <p class="price"> <b> $${t.price} </b></p>
      </div>
      <button class="menu-btn" data-menubtn=${t.uuid}>+</button>
    </div>
    <div class="line"></div>
  `}function h(t){return`
    <div class="order-item">
      <p class="order-name">${t.name}</p>
      <button class="remove-btn" data-removebtn=${t.uuid}>Remove</button>
      <p class="order-price">$${t.price}</p>
    </div>
  `}function E(){let t=0,n="";return s.forEach(r=>{t+=r.price,n+=h(r)}),`
    <div>
      <p class="yourorder1">Your Order</p>
    </div>
    <div class="yourorderlist">
      ${n}
      <div class="order-line"></div>
      <div class="order-item total-price-item">
        <p class="order-font">Total Price:</p>
        <p class="order-price total-price">$${t}</p>
      </div>
    </div>
    <button class="confirm-btn" data-completebtn="">Complete order</button>
  `}function a(){const t=document.getElementById("feed");if(t.innerHTML=p.map(b).join(""),s.length>0){m.innerHTML=E();const n=document.querySelector("[data-completebtn]"),r=document.getElementById("close-icon");n.addEventListener("click",()=>{d.style.display="block"}),r.addEventListener("click",()=>{d.style.display="none"})}else m.innerHTML=""}
