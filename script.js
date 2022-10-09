let menuIcon = document.getElementById("menu-icon");
let navUl = document.getElementById('nav-ul');
let menuX = document.getElementById('menu_x')
let body = document.querySelector("body");
let floatArrowRight = document.querySelector(".fa-arrow-right");
let floatEl = document.querySelector(".cta-side");
let faArrowLeft = document.querySelector(".fa-arrow-left");
let floatCaontact = document.querySelector(".float-contact");

menuIcon.addEventListener('click', function(){
    navUl.classList.toggle('active');
    menuIcon.style.display = 'none'
    menuX.style.display = 'block'


})

navUl.addEventListener('click', function() {
        navUl.classList.remove('active');
        menuIcon.style.display = 'flex';
    menuX.style.display = 'none';
})

menuX.addEventListener('click', ()=>{
    navUl.classList.remove('active');
    menuIcon.style.display = 'flex'
    menuX.style.display = 'none'



    
})
