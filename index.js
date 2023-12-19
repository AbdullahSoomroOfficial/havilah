function showSidebar() {
  document.querySelector(".menu-bars").style.display = "none";
  document.querySelector(".sidebar").style.display = "block";
}

function hideSidebar() {
  if (window.innerWidth <= 920) {
    document.querySelector(".menu-bars").style.display = "block";
  }
  document.querySelector(".sidebar").style.display = "none";
}

function handleViewportResize() {
  const viewportWidth = window.innerWidth;
  if (viewportWidth > 920) {
    document.querySelector(".menu-bars").style.display = "none";
  } else {
    document.querySelector(".menu-bars").style.display = "block";
  }
}

window.addEventListener("resize", handleViewportResize);

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
