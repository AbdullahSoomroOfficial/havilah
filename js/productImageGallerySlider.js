const arrowUp = document.querySelector(".fa-angle-up");
const arrowDown = document.querySelector(".fa-angle-down");
const slides = document.querySelectorAll(".image__gallery__slide");
const mainImage = document.querySelector(".main__image");

let currentIndex = 0;

function showSlide(index) {
  const newTransformValue = -index * 100 + "%";

  slides.forEach((slide, index) => {
    slide.style.transform = `translateY(${newTransformValue})`;
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

arrowUp.addEventListener("click", nextSlide);
arrowDown.addEventListener("click", prevSlide);

// adding event listeners to slides when clicking the appear aa MAIN IMAGE
slides.forEach((slide) => {
  slide.addEventListener("click", (event) => {
    const targetImagePath = event.target.src;
    const mainImagePath = mainImage.src;
    event.target.src = mainImagePath;
    mainImage.src = targetImagePath;
  });
});
