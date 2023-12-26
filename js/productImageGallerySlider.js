const arrowUp = document.querySelector(".fa-angle-up");
const arrowDown = document.querySelector(".fa-angle-down");
const slides = document.querySelectorAll(".image__gallery__slide");

let currentIndex = 0;

function showSlide(index) {
  const newTransformValue = -index * 100 + "%";

  slides.forEach((slide) => {
    slide.style.transform = "translateY(" + newTransformValue + ")";
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % (slides.length - 1);
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + (slides.length - 1)) % slides.length;
  showSlide(currentIndex);
}

arrowUp.addEventListener("click", nextSlide);
arrowDown.addEventListener("click", prevSlide);
