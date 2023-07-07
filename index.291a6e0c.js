function e(e,t,o,a){Object.defineProperty(e,t,{get:o,set:a,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},i={},l=o.parcelRequired7c6;null==l&&((l=function(e){if(e in a)return a[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return a[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){i[e]=t},o.parcelRequired7c6=l),l.register("kyEFX",function(t,o){"use strict";e(t.exports,"register",function(){return a},function(e){return a=e}),e(t.exports,"resolve",function(){return i},function(e){return i=e});var a,i,l={};a=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)l[t[o]]=e[t[o]]},i=function(e){var t=l[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),l("kyEFX").register(JSON.parse('{"5ZPII":"index.291a6e0c.js","9Vlth":"image 1@1x.9461e158.png","87hKM":"image 1@2x.7de16bfc.png","fhkTg":"image 2@1x.57ecc8dc.png","fNImK":"image 2@2x.061446c7.png","aaO8l":"image 3@1x.5b660ef4.png","d3lds":"image 3@2x.a9e70fc5.png","bPvuU":"def-img-116.85979e77.jpg","40M39":"def-img-180.caa79729.jpg","biVyF":"def-img-218.54c35d94.jpg","42GaS":"def-img-335.a5aaa25d.jpg","ktI2g":"shopping-list.6c7c24f7.js","5M4Vw":"shopping-list.fcc79d51.js"}')),l("bUb57"),l("dTazW"),l("31TCt"),l("2CRXV"),l("jJ57b");const s=document.querySelector(".go-top");window.addEventListener("scroll",function(){let e=window.pageYOffset,t=document.documentElement.clientHeight;e>t?s.classList.add("go-top-show"):s.classList.remove("go-top-show")}),s.addEventListener("click",function e(){window.pageYOffset>0&&(window.scrollBy(0,-25),setTimeout(e,0))}),l("epHO8"),l("7rYDH");var r=l("7rYDH"),n=l("jJ57b"),c={};c=new URL(l("kyEFX").resolve("9Vlth"),import.meta.url).toString();var d={};d=new URL(l("kyEFX").resolve("87hKM"),import.meta.url).toString();var m={};m=new URL(l("kyEFX").resolve("fhkTg"),import.meta.url).toString();var h={};h=new URL(l("kyEFX").resolve("fNImK"),import.meta.url).toString();var u={};u=new URL(l("kyEFX").resolve("aaO8l"),import.meta.url).toString();var g={};g=new URL(l("kyEFX").resolve("d3lds"),import.meta.url).toString();var p={};p=new URL(l("kyEFX").resolve("bPvuU"),import.meta.url).toString();var b={};b=new URL(l("kyEFX").resolve("40M39"),import.meta.url).toString();var v={};v=new URL(l("kyEFX").resolve("biVyF"),import.meta.url).toString();var k={};k=new URL(l("kyEFX").resolve("42GaS"),import.meta.url).toString();const f=document.querySelector(".book-list"),y=document.querySelector(".loader");if(f){S(f);let e=document.querySelector("[data-modal-cls]"),o=document.querySelector("[data-modal-El]");document.querySelector(".main-img"),document.querySelector(".modal-title"),document.querySelector(".modal-author"),document.querySelector(".modal-description"),document.querySelector(".modal-btn");let a=document.querySelector(".book-list"),i=document.querySelector(".modal-pop-up");a.addEventListener("click",a=>{let l=a.target.closest('[data-action="open-modal"]');if(l){let e=l.dataset.id;(0,r.searchById)(e).then(a=>{let l=!1,s=JSON.parse(localStorage.getItem("shoppingData"))||[];l=!!s.find(({_id:t})=>e===t);let r=`<div class="modal-content-block">
  <img
    class="main-img"
    src='${a.book_image}'
    alt="${a.title}"
    width="287"
    height="408"
  />
  <div class="modal-text-block">
    <h2 class="modal-title">${a.title}</h2>
    <p class="modal-author">${a.author}</p>
    <p class="modal-description">
      ${a.description}
    </p>

    <ul class="modal-list list">
            <li class="modal-item">
              <div class="modal-icon black_v">
                <a href="${a.amazon_product_url}" target="_blank">
                  <img class="modal-icon-img"
                    src="${t(c)}" srcset="${t(c)} 1x, ${t(d)} 2x"
                    alt="amazon"
                    width="62"
                    height="19"
                  />
                </a>
              </div>
            </li>
            <li class="modal-item">
              <div class="modal-icon">
                <a href="${a.buy_links[1].url}" target="_blank">
                  <img class="modal-icon-img"
                    src="${t(m)}" srcset="${t(m)} 1x, ${t(h)} 2x"
                    alt="apple books"
                    width="33"
                    height="32"
                  />
                </a>
              </div>
            </li>

            <li class="modal-item">
              <div class="modal-icon">
                <a href="${a.buy_links[4].url}" target="_blank">
                  <img class="modal-icon-img"
                    src="${t(u)}" srcset="${t(u)} 1x, ${t(g)} 2x"
                    alt="book shop"
                    width="38"
                    height="36"
                  />
                </a>
              </div>
            </li>
          </ul>
  </div>
</div>

<button type="submit" class="modal-btn" data-id='${e}'>${l?"REMOVE FROM SHOPPING LIST":"ADD TO SHOPPING LIST"}</button>
<p class="modal-submit-text is-hidden">
  Сongratulations! You have added the book to the shopping list. To
  delete, press the button “Remove from the shopping list”.
</p>`;i.innerHTML=r;let p=i.querySelector(".modal-btn");p.addEventListener("click",n.addToShoppingListEl),o.classList.remove("is-hidden"),document.body.classList.add("no-scroll")})}e.addEventListener("click",()=>{o.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),i.innerHTML=""})})}function S(){(0,r.searchTopBooks)().then(e=>{!function(e){y.style.display="block";let o=e.map(({list_name:e,books:o})=>`<div class="home-bestseller-list">
        <h2 class="home-category-heading">${e}</h2>
        <div class="home-category-block">
          ${o.map(({author:e,book_image:o,title:a,_id:i})=>o?`
              <div class="home-book-card" data-id="${i}" data-action="open-modal"> 
                <div class="home-book-image-container">
                  <img src="${o}" alt="${a}" class="home-book-image">
                      <div class="home-book-overlay">
                        <div class="home-book-content">Quick view</div>
                      </div>
                </div>
                <h2 class="home-book-title">${a}</h2>
                <h3 class="home-book-author">${e}</h3>
              </div>`:`<li class="home-book-card" data-id="${i}" data-action="open-modal"> 
          <img srcset="
          ${t(p)} 116w,
          ${t(b)} 180w,
          ${t(v)} 218w,
          ${t(k)} 335w
              "
          sizes="
          (max-width: 375px) 116px,
          (max-width: 768px) 335px,
          (max-width: 1440px) 218px,
          180px
          "  alt="${a}" class="home-book-image">
          <h2 class="home-book-title">${a}</h2>
          <h3 class="home-book-author">${e}</h3>
        </li>`).join("")}
          <button class="see-more" data-category="${e}">See more</button>
        </div>
      </div>`).join("");y.style.display="none";let a=`<h2 class="home-bestsellers-heading" id="home-bestsellers-heading">
  Best Sellers<span class="books-design"> Books</span>
  </h2>${o}`;f.innerHTML=a;let i=document.querySelectorAll(".see-more");i.forEach(e=>{e.addEventListener("click",e=>{let t=e.currentTarget,o=t.dataset.category;(0,r.searchCategory)(o).then(e=>$(e,f,o))})})}(e)}).catch(e=>{console.log(e)})}function $(e,o,a){y.style.display="block";let i=`<h2 class="category-name-heading" id="category-heading">${a}</h2><div class="test">`+e.map(({author:e,image:o,title:a,id:i})=>o?`<div class="home-card" data-id="${i}"  data-action="open-modal">
                    <div class="home-book-image-container">
                      <img src="${o}" alt="${a}" class="home-book-image">
                        <div class="home-book-overlay">
                          <div class="home-book-content">Quick view</div>
                        </div>
                    </div>  
                    <h2 class="home-book-title">${a}</h2>
                    <h3 class="home-book-author">${e}</h3>
              </div>`:`<li class="home-card" data-id="${i}"  data-action="open-modal">
            <img  srcset="
            ${t(p)} 116w,
            ${t(b)} 180w,
            ${t(v)} 218w,
            ${t(k)} 335w
                "
            sizes="
            (max-width: 375px) 116px,
            (max-width: 768px) 335px,
            (max-width: 1440px) 218px,
            180px
            "
            src="${t(k)}"
            alt="${a}" class="home-book-image">
            <div class="home-book-overlay">
                        <div class="home-book-content">Quick view</div>
                      </div>
            <h2 class="home-book-title">${a}</h2>
            <h3 class="home-book-author">${e}</h3>
            </li>`).join("");o.innerHTML=i;let l=document.getElementById("category-heading"),s=l.textContent.split(" "),r=s.pop(),n=s.join(" ")+' <span class="books-design">'+r+"</span>";l.innerHTML=n}var r=l("7rYDH");const w=document.querySelector(".categories-list"),E=document.querySelector(".book-list");function x(e){let t=document.querySelector(".categories-el.active");t&&t.classList.remove("active"),e.classList.add("active")}fetch("https://books-backend.p.goit.global/books/category-list").then(e=>{if(e.ok)return e.json();throw Error("Ошибка при выполнении запроса: "+e.status)}).then(e=>{if(Array.isArray(e)){let t=e.map(e=>e.list_name),o=document.querySelector(".categories-title");x(o),S(),o.addEventListener("click",()=>{x(o),S()}),t.forEach((e,t)=>{let o=document.createElement("li");o.textContent=e,o.classList.add("categories-el"),w.appendChild(o),o.addEventListener("click",e=>{let t=e.target;x(t);let o=t.textContent;(0,r.searchCategory)(o).then(e=>$(e,E,o))})})}});
//# sourceMappingURL=index.291a6e0c.js.map
