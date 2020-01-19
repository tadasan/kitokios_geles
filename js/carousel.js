
const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide div");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let counter = 0;
let autoOn = true;
let size;

window.onload = () => {
    size = carouselImages[1].clientWidth;
}

window.onresize = () => {
    size = carouselImages[1].clientWidth;
};

const transitionParams = "transform 1s ease-in-out";


nextBtn.addEventListener("click", () => {
  autoOn = false;
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.classList.add('slidingTransition');
  counter++;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

prevBtn.addEventListener("click", () => {
  autoOn = false;
  if (counter <= 0) return;
  carouselSlide.classList.add('slidingTransition');
  counter--;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

carouselSlide.addEventListener("transitionend", () => {
  if (carouselImages.length - 1 == counter) {
    carouselSlide.classList.remove('slidingTransition');
    counter = 1;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }

  if (counter == 0) {
    carouselSlide.classList.remove('slidingTransition');
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});

setInterval(() => {
  if (autoOn) {
    if (carouselImages.length - 1 == counter) {
    carouselSlide.classList.remove('slidingTransition');
      counter = 1;
      carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
    }

    counter++;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
    carouselSlide.classList.add('slidingTransition');
  }
}, 4000);

window.onresize = () => {
  size = carouselImages[0].clientWidth;
  carouselSlide.classList.remove('slidingTransition');
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
};
