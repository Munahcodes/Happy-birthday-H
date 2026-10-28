const bar=document.getElementById("progressBar"),menu=document.getElementById("menuToggle"),nav=document.getElementById("siteNav");
function progress(){const max=document.documentElement.scrollHeight-innerHeight;bar.style.width=(max>0?scrollY/max*100:0)+"%"}
addEventListener("scroll",progress,{passive:true});progress();
menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open));menu.textContent=open?"×":"☰"});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menu.setAttribute("aria-expanded","false");menu.textContent="☰"}));
const items=document.querySelectorAll(".section-index,.story-copy,.story-photos,.reveal-copy,.gallery-card,.letter,.letter-photo,.timeline-layout,.memories-heading");
if("IntersectionObserver"in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target)}}),{threshold:.08});items.forEach(x=>{x.classList.add("reveal");io.observe(x)})}else items.forEach(x=>x.classList.add("visible"));
document.querySelectorAll(".video-card").forEach(card=>{const v=card.querySelector("video"),fallback=card.querySelector(".video-fallback");if(v&&fallback){v.addEventListener("loadeddata",()=>fallback.style.display="none",{once:true});v.addEventListener("play",()=>fallback.style.display="none");v.addEventListener("error",()=>fallback.style.display="grid")}});
