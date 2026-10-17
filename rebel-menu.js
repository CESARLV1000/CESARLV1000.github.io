(() => {
"use strict";

function closeMenus(){
  const nav=document.querySelector("header.rr-header nav.rr-main-nav");
  const button=document.querySelector("header.rr-header .rr-menu-toggle");
  if(nav) nav.classList.remove("rr-open");
  if(button) button.setAttribute("aria-expanded","false");
}

function init(){
  try{ localStorage.removeItem("rebelradio_lang"); }catch(_){}

  const nav=document.querySelector("header.rr-header nav.rr-main-nav");
  const button=document.querySelector("header.rr-header .rr-menu-toggle");

  if(button && nav){
    button.textContent="☰ MENÚ";
    button.setAttribute("aria-expanded","false");

    button.addEventListener("click",e=>{
      e.stopPropagation();
      const abrir=!nav.classList.contains("rr-open");
      closeMenus();
      if(abrir){
        nav.classList.add("rr-open");
        button.setAttribute("aria-expanded","true");
      }
    });

    nav.addEventListener("click",e=>{
      if(e.target.closest("a")) closeMenus();
    });
  }

  document.addEventListener("click",closeMenus);
  window.addEventListener("resize",()=>{ if(innerWidth>700) closeMenus(); });
}

if(document.readyState==="loading"){
  document.addEventListener("DOMContentLoaded",init,{once:true});
}else{
  init();
}
})();