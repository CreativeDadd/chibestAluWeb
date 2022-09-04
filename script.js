let menuIcon = document.getElementById("menu-icon");
let navUl = document.getElementById('nav-ul');
let body = document.querySelector("body");


menuIcon.addEventListener('click', function(){
    navUl.classList.toggle('active')
})

window.addEventListener('click', function(e) {
    if(e.target == body) {
        navUl.style.display= 'none';
    }
})