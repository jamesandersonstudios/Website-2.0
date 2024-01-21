// Lazy loading

// lazyload.js

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

  // Lazy load iframes
  var lazyIframes = document.querySelectorAll('iframe[loading="lazy"]');
  lazyIframes.forEach(function (iframe) {
    iframe.addEventListener("load", function () {
      // Optional: Add a class or perform additional actions once the iframe is loaded
      iframe.classList.add("loaded");
    });
    iframe.addEventListener("error", function () {
      console.error("Error loading iframe:", iframe.src);
    });
    // Set the "src" attribute to the actual iframe source to trigger lazy loading
    iframe.src = iframe.dataset.src;
  });
});
