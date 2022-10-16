const t=document.querySelectorAll(".team__card-button"),e=document.querySelectorAll("[data-card-active]");t.forEach(((t,a)=>{t.addEventListener("click",(()=>{let t=e[a].getAttribute("data-card-active");t="inactive"===t?"active":"inactive",e[a].setAttribute("data-card-active",t)}))}));
//# sourceMappingURL=about.209f696e.js.map
