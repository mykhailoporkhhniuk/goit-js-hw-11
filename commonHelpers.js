import{S as p,i as m}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function f(s){const o="https://pixabay.com",r="/api/",n=new URLSearchParams({key:"44691348-434c97a8e5e51442929a69f01",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${o}${r}?${n}`;return fetch(e).then(t=>t.json())}const y=new p(".gallery-item a",{captionsData:"alt",captionDelay:250});function g(s){const o=document.querySelector(".gallery");o.innerHTML=s.map(({comments:r,downloads:n,views:e,likes:t,largeImageURL:i,tags:u,webformatURL:d})=>`<li class="gallery-item">
      <a href="${i}" class="gallery-link">
        <img src="${d}" alt="${u}" class="gallery-img">
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
        <p class="value">${r}</p>
      </div>
      <div class="info-container">
        <p class="key">Downloads</p>
        <p class="value">${n}</p>
      </div>
      </div>
    </li>`).join(""),y.refresh()}const a=document.querySelector(".search-form"),h=document.querySelector("#search-input"),l=document.querySelector(".loader"),v=document.querySelector(".gallery");function L(){l.classList.remove("hidden")}function c(){l.classList.add("hidden")}a.addEventListener("submit",s=>{s.preventDefault();const o=h.value.trim();L(),f(o).then(({hits:r})=>{if(r.length===0){m.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:"432px",color:"#ef4040"}),v.innerHTML="",c(),a.reset();return}g(r),console.log(r),c(),a.reset()}).catch(r=>{console.log(r)})});
//# sourceMappingURL=commonHelpers.js.map
