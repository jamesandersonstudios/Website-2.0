function showabout() {
  // Display the loading animation with fade-in effect
  $("#loading").css("display", "flex").addClass("animated fadeIn");

  // Simulate loading time (adjust the timeout duration as needed)
  setTimeout(function () {
    // Remove the fade-in class to hide the loading animation
    $("#loading").removeClass("animated fadeIn");

    // Show the about container without a fade-in effect
    $("#about_container").css("display", "inherit");

    // Optionally, you can add other animations or effects here if needed

    // Add the fadeOut class to the loading animation
    $("#loading").addClass("animated fadeOut");

    // Remove the fadeOut class and hide the loading animation after the animation completes
    setTimeout(function () {
      $("#loading").removeClass("animated fadeOut").css("display", "none");
    }, 1000);
  }, 1000);
}

function closeabout() {
  // Add the fadeOut animation to the about container
  $("#about_container").addClass("animated fadeOut");

  // Remove the fadeOut class and hide the about container after the animation completes
  setTimeout(function () {
    $("#about_container").removeClass("animated fadeOut");
    $("#about_container").css("display", "none");
  }, 1000);
}

function showcontact() {
  $("#contact_container").css("display", "inherit");
  $("#contact_container").addClass("animated slideInUp");
  setTimeout(function () {
    $("#contact_container").removeClass("animated slideInUp");
  }, 1000);
}
function closecontact() {
  $("#contact_container").addClass("animated slideOutDown");
  setTimeout(function () {
    $("#contact_container").removeClass("animated slideOutDown");
    $("#contact_container").css("display", "none");
  }, 1000);
}
setTimeout(function () {
  $("#loading").addClass("animated fadeOut");
  setTimeout(function () {
    $("#loading").removeClass("animated fadeOut");
    $("#loading").css("display", "none");
    $("#box").css("display", "none");
    $("#about").removeClass("animated fadeIn");
  }, 1000);
}, 1000);
