import{S as f,i as l}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function y(s){const r="https://pixabay.com",o="/api/",i=new URLSearchParams({key:"44691348-434c97a8e5e51442929a69f01",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}${o}?${i}`;return fetch(e).then(t=>t.json())}const g=new f(".gallery-item a",{captionsData:"alt",captionDelay:250});function h(s){const r=document.querySelector(".gallery");r.innerHTML=s.map(({comments:o,downloads:i,views:e,likes:t,largeImageURL:n,tags:p,webformatURL:m})=>`<li class="gallery-item">
      <a href="${n}" class="gallery-link">
        <img src="${m}" alt="${p}" class="gallery-img">
      </a>
      <div class="info">
      <div class="info-container">
        <p class="key">Likes</p>
        <p class="value">${t}</p>
      <div class="info-container">
        <p class="key">Views</p>
        <p class="value">${e}</p>
      </div>
      <div class="info-container">
        <p class="key">Comments</p>
        <p class="value">${o}</p>
      </div>
      <div class="info-container">
        <p class="key">Downloads</p>
        <p class="value">${i}</p>
      </div>
      </div>
    </li>`).join(""),g.refresh()}const a=document.querySelector(".search-form"),v=document.querySelector("#search-input"),d=document.querySelector(".loader"),u=document.querySelector(".gallery");function L(){d.classList.remove("hidden")}function c(){d.classList.add("hidden")}a.addEventListener("submit",s=>{s.preventDefault();const r=v.value.trim();if(L(),r===""){u.innerHTML="",l.error({title:"",message:"Enter query to see rezults!",position:"topRight"}),c();return}y(r).then(({hits:o})=>{if(o.length===0){l.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:"432px",color:"#ef4040"}),u.innerHTML="",c(),a.reset();return}h(o),c(),a.reset()}).catch(o=>{console.log(o)})});
//# sourceMappingURL=commonHelpers.js.map
