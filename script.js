const toggleButton = document.querySelector('.toggle');
const navMenu = document.querySelector('.nav_menu');
const navLinks = document.querySelectorAll('.nav_menu li a');

toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('active');
  navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    toggleButton.classList.remove('active');
    navMenu.classList.remove('active');
  });
});


// const toggleButton = document.querySelector('.toggle');
// const navMenu = document.querySelector('.nav_menu');

// toggleButton.addEventListener('click', () => {
//   toggleButton.classList.toggle('active');
//   navMenu.classList.toggle('active');
// });





// let menuIcon = document.getElementById("menu-icon");
// let navUl = document.getElementById('nav-ul');
// let menuX = document.getElementById('menu_x')
// let body = document.querySelector("body");
// let floatArrowRight = document.querySelector(".fa-arrow-right");
// let floatEl = document.querySelector(".cta-side");
// let faArrowLeft = document.querySelector(".fa-arrow-left");
// let floatCaontact = document.querySelector(".float-contact");

// menuIcon.addEventListener('click', function(){
//     navUl.classList.toggle('active');
//     menuIcon.style.display = 'none'
//     menuX.style.display = 'block'


// })

// navUl.addEventListener('click', function() {
//         navUl.classList.remove('active');
//         menuIcon.style.display = 'flex';
//     menuX.style.display = 'none';
// })

// menuX.addEventListener('click', ()=>{
//     navUl.classList.remove('active');
//     menuIcon.style.display = 'flex'
//     menuX.style.display = 'none'



    
// })




// @media only screen and (max-width: 768px) {
//     /* Hide the menu on mobile */
//     .nav_menu {
//       display: none;
//     }
    
//     /* Show the menu when the toggle button is clicked */
//     .toggle {
//       display: block;
//       cursor: pointer;
//     }
    
//     /* Style the toggle button */
//     .toggle i {
//       color: #fff;
//       font-size: 24px;
//     }
    
//     /* Show the menu when the toggle button is clicked */
//     .toggle.active + .nav_menu {
//       display: block;
//       animation: slide-down .5s ease forwards;
//     }
    
//     /* Style the menu */
//     .nav_menu {
//       position: absolute;
//       top: 100%;
//       left: 0;
//       width: 100%;
//       padding: 20px;
//       background-color: #333;
//       z-index: 99;
//       animation: slide-up .5s ease forwards;
//     }
    
//     .nav_menu li {
//       display: block;
//       margin-bottom: 10px;
//     }
    
//     .nav_menu a {
//       display: block;
//       color: #fff;
//       text-decoration: none;
//       font-size: 18px;
//     }
    
//     /* Animation keyframes */
//     @keyframes slide-down {
//       0% {
//         opacity: 0;
//         transform: translateY(-10px);
//       }
//       100% {
       
  