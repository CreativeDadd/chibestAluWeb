// set the current slide index to 0
var slideIndex = 0;

// call the showSlides function to display the first slide
showSlides();

// define the showSlides function
function showSlides() {
  // get an array of all slide elements
  var slides = document.getElementsByClassName("img-wrap");
  // hide all slides
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // increment the slide index and reset it to 0 if it exceeds the number of slides
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  // display the current slide
  slides[slideIndex-1].style.display = "flex";
  // call the showSlides function again after 5 seconds
  setTimeout(showSlides, 9000);
}

// define the plusSlides function to move to the previous or next slide
function plusSlides(n) {
  // increment the slide index by n
  slideIndex += n;
  // get an array of all slide elements
  var slides = document.getElementsByClassName("img-wrap");
  // reset the slide index to the last slide if it exceeds the number of slides
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  // reset the slide index to the first slide if it is less than 1
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  // hide all slides
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // display the current slide
  slides[slideIndex-1].style.display = "flex";
}

// add event listeners to the prev and next buttons
document.querySelector(".prev").addEventListener("click", function() {
  plusSlides(-1);
});

document.querySelector(".next").addEventListener("click", function() {
  plusSlides(1);
});

// // Set the slide index to 1
// var slideIndex = 1;

// // Call the showSlides function to display the first slide
// showSlides(slideIndex);

// // Function to advance to the next slide
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Function to show the slide corresponding to the given index
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// // Function to display the slide at the given index
// function showSlides(n) {
//   // Get all the slides and dots
//   var slides = document.getElementsByClassName("img-wrap");
//   var dots = document.getElementsByClassName("dot");

//   // Reset the index if it goes out of bounds
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }

//   // Hide all the slides and remove the "active" class from the dots
//   for (var i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (var i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }

//   // Display the slide corresponding to the current index and add the "active" class to the corresponding dot
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }

// // Set an interval to automatically advance to the next slide every 5 seconds
// setInterval(function() {
//   plusSlides(1);
// }, 5000);

// // Attach event listeners to the previous and next buttons
// document.querySelector(".prev").addEventListener("click", function() {
//   plusSlides(-1);
// });

// document.querySelector(".next").addEventListener("click", () => {
//        plusSlides(1);
//      });






// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   const slides = document.getElementsByClassName("img-wrap");
//   const dots = document.getElementsByClassName("dot");

//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }

//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }

// //   for (i = 0; i < dots.length; i++) {
// //     dots[i].className = dots[i].className.replace(" active", "");
// //   }

//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
//   setTimeout(showSlides, 1000); // Change image every 5 seconds
// }

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// const prev = document.querySelector(".prev");
// const next = document.querySelector(".next");

// prev.addEventListener("click", () => {
//   plusSlides(-1);
// });

// next.addEventListener("click", () => {
//   plusSlides(1);
// });





// // Get the container element
// const container = document.querySelector('.cont');

// // Get all the image wrapper elements
// const slides = Array.from(container.querySelectorAll('.img-wrap'));

// // Get the previous and next button elements
// const prevBtn = container.querySelector('.prev');
// const nextBtn = container.querySelector('.next');

// // Set the index of the currently active slide
// let activeSlideIndex = 0;

// // Set the interval time for automatic sliding
// const intervalTime = 5000;

// // Function to toggle the active class on a slide
// function toggleActiveSlide(index) {
//   // Remove the active class from all slides
//   slides.forEach(slide => slide.classList.remove('active'));

//   // Add the active class to the specified slide
//   slides[index].classList.add('active');

//   // Update the activeSlideIndex variable
//   activeSlideIndex = index;
// }

// // Function to show the previous slide
// function showPrevSlide() {
//   // Calculate the index of the previous slide
//   const prevSlideIndex = activeSlideIndex === 0 ? slides.length - 1 : activeSlideIndex - 1;

//   // Toggle the active class on the previous slide
//   toggleActiveSlide(prevSlideIndex);
// }

// // Function to show the next slide
// function showNextSlide() {
//   // Calculate the index of the next slide
//   const nextSlideIndex = activeSlideIndex === slides.length - 1 ? 0 : activeSlideIndex + 1;

//   // Toggle the active class on the next slide
//   toggleActiveSlide(nextSlideIndex);
// }

// // Set an interval to automatically show the next slide
// const intervalId = setInterval(showNextSlide, intervalTime);

// // Add event listeners to the previous and next buttons
// prevBtn.addEventListener('click', () => {
//   // Clear the interval to prevent automatic sliding
//   clearInterval(intervalId);

//   // Show the previous slide
//   showPrevSlide();

//   // Set a new interval to resume automatic sliding
//   intervalId = setInterval(showNext
