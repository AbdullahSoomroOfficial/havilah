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

// Listen for the resize event
window.addEventListener("resize", handleViewportResize);
