// NAV
window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    document.querySelector(".nav").classList.add("solid");
  } else {
    document.querySelector(".nav").classList.remove("solid");
  }
});

function showSidebar() {
  document.querySelector(".sidebar").classList.add("show");
  document.querySelector(".sidebar").classList.remove("hide");
  //menu-bars
  document.querySelector(".menu-bars").classList.add("hide");
}

function hideSidebar() {
  document.querySelector(".sidebar").classList.add("hide");
  document.querySelector(".sidebar").classList.remove("show");
  //menu-bars
  document.querySelector(".menu-bars").classList.remove("hide");
}

// ACOORDION
document.querySelectorAll(".accordion-header").forEach(function (header) {
  header.addEventListener("click", function () {
    const item = this.parentNode;
    item.classList.toggle("active");
    const icon = this.querySelector("i");
    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-minus");
  });
});

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
