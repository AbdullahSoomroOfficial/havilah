// CAROUSEL
const carouselItems = document.querySelectorAll(".carousel-item");
const previousBtn = document.querySelector(".previous-btn");
const nextBtn = document.querySelector(".next-btn");
let counter = 0;

const slideCarouselItem = () => {
  carouselItems.forEach((carouselItem) => {
    carouselItem.style.transform = `translateX(-${counter * 100}%)`;
  });
};

const hideAndShowNextBtn = () => {
  if (counter === carouselItems.length - 1) {
    nextBtn.style.visibility = "hidden";
  } else {
    nextBtn.style.visibility = "visible";
  }
};

const hideAndShowPreviousBtn = () => {
  if (counter === 0) {
    previousBtn.style.visibility = "hidden";
  } else {
    previousBtn.style.visibility = "visible";
  }
};

const showNextCarouselItem = () => {
  if (!(counter + 1 > carouselItems.length - 1)) {
    counter++;
    slideCarouselItem();
    hideAndShowNextBtn();
    hideAndShowPreviousBtn();
  }
};

const showPreviousCarouselItem = () => {
  if (!(counter - 1 < 0)) {
    counter--;
    slideCarouselItem();
    hideAndShowPreviousBtn();
    hideAndShowNextBtn();
  }
};

// hiding previous button on page load
hideAndShowPreviousBtn();
carouselItems.forEach((carouselItem, index) => {
  carouselItem.style.left = `${index * 100}%`;
});
