"use strict";function asyncGeneratorStep(e,t,r,n,i,o,a){try{var c=e[o](a),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,i)}function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function a(e){asyncGeneratorStep(o,n,i,a,c,"next",e)}function c(e){asyncGeneratorStep(o,n,i,a,c,"throw",e)}a(void 0)}))}}var swiper=document.querySelector(".slider"),header=document.querySelector(".js-header"),links=document.querySelectorAll(".js-links"),headerHeight=header.clientHeight,vh=window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(vh,"px"));var slider=new Swiper(swiper,{slidesPerView:1,loop:!1,effect:"fade",fadeEffect:{crossFade:!0},navigation:{nextEl:".btn-right",prevEl:".btn-left"}});function validateForms(e){new window.JustValidate(e,{rules:{name:{required:!0},email:{required:!0,email:!0},text:{required:!0}},messages:{name:{required:"Введите имя"},email:{required:"Введите почту",email:"Неверный формат почты"},text:{required:"Введите сообщение"}},submitHandler:function(e){new FormData(e);e.reset(),console.log("Отправка успешна!")}})}links.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var t=e.currentTarget.getAttribute("href"),r=document.querySelector(t).getBoundingClientRect().top-headerHeight;window.scrollBy({top:r,behavior:"smooth"})}))})),validateForms(".js-form");
//# sourceMappingURL=main.js.map
