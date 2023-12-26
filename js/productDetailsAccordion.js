const accordionHeaders = document.querySelectorAll(
  ".product__details__accordion__header"
);

accordionHeaders.forEach((accordionHeader) => {
  accordionHeader.addEventListener("click", (event) => {
    event.target.children[0].classList.toggle("fa-minus");
    event.target.children[0].classList.toggle("fa-plus");
    event.target.nextElementSibling.classList.toggle("height__auto");
  });
});
