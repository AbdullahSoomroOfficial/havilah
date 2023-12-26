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

// // ACOORDION
// document.querySelectorAll(".accordion-header").forEach(function (header) {
//   header.addEventListener("click", function () {
//     const item = this.parentNode;
//     item.classList.toggle("active");
//     const icon = this.querySelector("i");
//     icon.classList.toggle("fa-plus");
//     icon.classList.toggle("fa-minus");
//   });
// });
