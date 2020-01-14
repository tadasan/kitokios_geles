const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide div");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let counter = 0;
let autoOn = true;
let size = carouselImages[0].clientWidth;
const transitionParams = "transform 1s ease-in-out";

carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
carouselSlide.style.transition = transitionParams;

nextBtn.addEventListener("click", () => {
  autoOn = false;
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = transitionParams;
  counter++;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

prevBtn.addEventListener("click", () => {
  autoOn = false;
  if (counter <= 0) return;
  carouselSlide.style.transition = transitionParams;
  counter--;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

carouselSlide.addEventListener("transitionend", () => {
  if (carouselImages.length - 1 == counter) {
    carouselSlide.style.transition = "none";
    counter = 1;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }

  if (counter == 0) {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});

setInterval(() => {
  if (autoOn) {
    if (carouselImages.length - 1 == counter) {
      carouselSlide.style.transition = "none";
      counter = 1;
      carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
    }

    counter++;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
    carouselSlide.style.transition = transitionParams;
  }
}, 4000);

window.onresize = () => {
  size = carouselImages[0].clientWidth;
  carouselSlide.style.transition = "none";
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
};
