import { p as productLinkColor, u as updateWatched } from "./product-link-color.js";
import "./data-set-get.js";
function filterProducts() {
  let btnFilter = document.querySelector(".btn-filter:not(.js-running)");
  let columnFilter = document.querySelector(".container-filter-products");
  if (btnFilter) {
    btnFilter.classList.add("js-running");
    btnFilter.addEventListener("click", function() {
      if (columnFilter.classList.contains("active")) {
        columnFilter.removeActive();
      } else {
        columnFilter.addActive();
      }
    });
  }
  let btnTag = document.querySelectorAll(".btn-tag:not(.js-running)");
  btnTag.forEach((element) => {
    element.classList.add("js-running");
    element.addEventListener("click", function() {
      if (this.classList.contains("active")) {
        this.removeActive();
      } else {
        this.addActive();
      }
    });
  });
  function onLoadItems() {
    productLinkColor();
    updateWatched();
  }
  onLoadItems();
}
filterProducts();
document.addEventListener("pjax:complete", filterProducts);
