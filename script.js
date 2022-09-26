let menuIcon = document.getElementById("menu-icon");
let navUl = document.getElementById('nav-ul');
let body = document.querySelector("body");
let floatArrowRight = document.querySelector(".fa-arrow-right");
let floatEl = document.querySelector(".cta-side");
let faArrowLeft = document.querySelector(".fa-arrow-left");

menuIcon.addEventListener('click', function(){
    navUl.classList.toggle('active')
})

window.addEventListener('click', function(e) {
    if(e.target === body) {
        navUl.classList.remove('active');
    }
})

floatArrowRight.addEventListener('click', ()=>{
    // console.log("success");
    floatEl.style.position = ''
    faArrowLeft.style.display = 'block
})



