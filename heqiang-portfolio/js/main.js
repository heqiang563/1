let currentSlide=0;
const slides=document.querySelectorAll(".banner-slide"),dots=document.querySelectorAll(".banner-dot");
function showSlide(e){slides.forEach((o,i)=>o.classList.toggle("active",i===e)),dots.forEach((o,i)=>o.classList.toggle("active",i===e))}
function nextSlide(){currentSlide=(currentSlide+1)%slides.length,showSlide(currentSlide)}
function prevSlide(){currentSlide=(currentSlide-1+slides.length)%slides.length,showSlide(currentSlide)}
function goToSlide(e){currentSlide=e,showSlide(currentSlide)}
setInterval(nextSlide,5e3);
window.addEventListener("scroll",()=>{document.querySelectorAll(".skill-progress").forEach(e=>{const o=e.getBoundingClientRect();o.top<window.innerHeight&&!e.classList.contains("animated")&&(e.classList.add("animated"),e.style.width=e.dataset.level+"%")})});