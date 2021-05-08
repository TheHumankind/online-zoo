const animalsIframes = document.querySelectorAll('.cam-cover');
const mainIframe = document.getElementById('mainIframe');
let bufSrc = '';
animalsIframes.forEach(element => {
    element.addEventListener('click',(e) => {
        e.preventDefault();
        bufSrc = mainIframe.src;
        mainIframe.src = e.target.href;
        e.target.href = bufSrc;
        e.target.closest('.animal__cam-card').querySelector('iframe').src = bufSrc;
    });
});

const gap = 20;

const carousel = document.getElementById("animalsCarousel"),
      content = document.getElementById("animalsContent"),
      itemWidth = document.querySelector(".animal__cam-card").offsetWidth,
      nextCam = document.getElementById("animalCamNext"),
      prevCam = document.getElementById("animalCamPrev");



nextCam.addEventListener("click", e => {
    console.log('click');
  carousel.scrollBy(itemWidth + gap, 0);    
  if (carousel.scrollLeft === carousel.scrollWidth - 1200) {
    carousel.scrollBy(-(itemWidth + gap) * 7, 0);
  }
});

prevCam.addEventListener("click", e => {
    console.log('click');
  carousel.scrollBy(-(itemWidth + gap), 0);
  if (carousel.scrollLeft === 0) {
    carousel.scrollBy((itemWidth + gap) * 7, 0);
  }
});