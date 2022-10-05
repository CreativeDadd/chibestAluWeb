let menuIcon = document.getElementById("menu-icon");
let navUl = document.getElementById('nav-ul');
let body = document.querySelector("body");
let floatArrowRight = document.querySelector(".fa-arrow-right");
let floatEl = document.querySelector(".cta-side");
let faArrowLeft = document.querySelector(".fa-arrow-left");
let floatCaontact = document.querySelector(".float-contact");

menuIcon.addEventListener('click', function(){
    navUl.classList.toggle('active')
})

window.addEventListener('click', function(e) {
    if(e.target === body) {
        navUl.classList.remove('active');
    }
})


