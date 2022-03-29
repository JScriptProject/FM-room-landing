const toggleClose=document.querySelector(".toggle-btn-close");
const nav=document.querySelector("nav");
const toggleBtn = document.querySelector(".toggle-btn");


toggleClose.addEventListener("click", function(){
    nav.style.transform="translateX(-100%)";
})

toggleBtn.addEventListener("click", function(){
    nav.style.transform="translateX(0)";
})