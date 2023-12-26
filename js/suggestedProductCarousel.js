const cards = document.querySelectorAll(".card");

// CAROUSEL
const previousBtn = document.querySelector(".fa-angle-left");
const nextBtn = document.querySelector(".fa-angle-right");
let counter = 0;

const slideCards = () => {
  cards.forEach((carouselItem) => {
    carouselItem.style.transform = `translateX(-${counter * 100}%)`;
  });
};

const hideAndShowNextBtn = () => {
  if (counter === cards.length - 1) {
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

const showNextCard = () => {
  if (!(counter + 1 > cards.length - 1)) {
    counter++;
    slideCards();
    hideAndShowNextBtn();
    hideAndShowPreviousBtn();
  }
};

const showPreviousCard = () => {
  if (!(counter - 1 < 0)) {
    counter--;
    slideCards();
    hideAndShowPreviousBtn();
    hideAndShowNextBtn();
  }
};

// hiding previous button on page load
hideAndShowPreviousBtn();
cards.forEach((carouselItem, index) => {
  carouselItem.style.left = `${index * 100}%`;
});

cards.forEach((card, index) => {
  card.style.transform = `translateX(${index * 100}%)`;
});
