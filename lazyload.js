// Lazy loading

// lazyload.js

document.addEventListener("DOMContentLoaded", function () {
  var lazyImages = document.querySelectorAll('img[loading="lazy"]');

  lazyImages.forEach(function (img) {
    img.addEventListener("load", function () {
      // Optional: Add a class or perform additional actions once the image is loaded
      img.classList.add("loaded");
    });

    img.addEventListener("error", function () {
      // Handle error if the image fails to load
      console.error("Error loading image:", img.src);
    });

    // Set the "src" attribute to the actual image source to trigger lazy loading
    img.src = img.dataset.src;
  });
});
