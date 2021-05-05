const gap = 20;

const carousel = document.getElementById("carouselPets"),
      content = document.getElementById("contentPets"),
      itemWidth = document.querySelector(".pets__card").offsetWidth,
      next = document.getElementById("petsNext"),
      prev = document.getElementById("petsPrev");



next.addEventListener("click", e => {
  carousel.scrollBy(itemWidth + gap, 0);    
  if (carousel.scrollLeft === carousel.scrollWidth - 1480) {
    carousel.scrollBy(-(itemWidth + gap) * 7, 0);
  }
});

prev.addEventListener("click", e => {
  carousel.scrollBy(-(itemWidth + gap), 0);
  if (carousel.scrollLeft === 0) {
    carousel.scrollBy((itemWidth + gap) * 7, 0);
  }
});



const testCarousel = document.getElementById("testCarousel"),
      testContent = document.getElementById("testContent"),
      itemTest = document.querySelector(".testimonials__feedback").offsetWidth,
      testCards = document.querySelectorAll(".testimonials__feedback"); 
  
  
const slideFunc = () => {

  testCarousel.scrollBy(itemTest + gap, 0);
  if (testCarousel.scrollLeft >= 1488) {
    testCarousel.scrollTo(0, 0);
  }

};


let autoSlideInterval = setInterval(slideFunc, 3000);
let autoSlideTimeout = null;

const delayAutoSlide = () => {

  clearTimeout(autoSlideTimeout);
  clearInterval(autoSlideInterval);

  autoSlideInterval = null;

  autoSlideTimeout = setTimeout(() => {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(slideFunc, 3000);
  }, 30000);
};

testCarousel.addEventListener('click', delayAutoSlide);