document.addEventListener("DOMContentLoaded", function () {
  // Lazy load images
  var lazyImages = document.querySelectorAll('img[loading="lazy"]');
  lazyImages.forEach(function (img) {
    img.addEventListener("load", function () {
      img.classList.add("loaded");
    });
    img.addEventListener("error", function () {
      console.error("Error loading image:", img.src);
    });
    img.src = img.dataset.src;
  });
});
