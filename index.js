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

function closetos() {
  // Add the fadeOut animation to the tos container
  $("#tos_container").addClass("animated fadeOut");

  // Remove the fadeOut class and hide the tos container after the animation completes
  setTimeout(function () {
    $("#tos_container").removeClass("animated fadeOut");
    $("#tos_container").css("display", "none");
  }, 1000);
}

function showtos() {
  // Display the loading animation with fade-in effect
  $("#loading").css("display", "flex").addClass("animated fadeIn");

  // Simulate loading time (adjust the timeout duration as needed)
  setTimeout(function () {
    // Remove the fade-in class to hide the loading animation
    $("#loading").removeClass("animated fadeIn");

    // Show the about container without a fade-in effect
    $("#tos_container").css("display", "inherit");

    // Optionally, you can add other animations or effects here if needed

    // Add the fadeOut class to the loading animation
    $("#loading").addClass("animated fadeOut");

    // Remove the fadeOut class and hide the loading animation after the animation completes
    setTimeout(function () {
      $("#loading").removeClass("animated fadeOut").css("display", "none");
    }, 1000);
  }, 1000);
}

function closeprivacy_policy() {
  // Add the fadeOut animation to the tos container
  $("#privacy_policy_container").addClass("animated fadeOut");

  // Remove the fadeOut class and hide the tos container after the animation completes
  setTimeout(function () {
    $("#privacy_policy_container").removeClass("animated fadeOut");
    $("#privacy_policy_container").css("display", "none");
  }, 1000);
}

function showprivacy_policy() {
  // Display the loading animation with fade-in effect
  $("#loading").css("display", "flex").addClass("animated fadeIn");

  // Simulate loading time (adjust the timeout duration as needed)
  setTimeout(function () {
    // Remove the fade-in class to hide the loading animation
    $("#loading").removeClass("animated fadeIn");

    // Show the about container without a fade-in effect
    $("#privacy_policy_container").css("display", "inherit");

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
  // Display the loading animation with fade-in effect
  $("#loading").css("display", "flex").addClass("animated fadeIn");

  // Simulate loading time (adjust the timeout duration as needed)
  setTimeout(function () {
    // Remove the fade-in class to hide the loading animation
    $("#loading").removeClass("animated fadeIn");

    // Show the about container without a fade-in effect
    $("#contact_container").css("display", "inherit");

    // Optionally, you can add other animations or effects here if needed

    // Add the fadeOut class to the loading animation
    $("#loading").addClass("animated fadeOut");

    // Remove the fadeOut class and hide the loading animation after the animation completes
    setTimeout(function () {
      $("#loading").removeClass("animated fadeOut").css("display", "none");
    }, 1000);
  }, 1000);
}

function closecontact() {
  // Add the fadeOut animation to the about container
  $("#contact_container").addClass("animated fadeOut");

  // Remove the fadeOut class and hide the about container after the animation completes
  setTimeout(function () {
    $("#contact_container").removeClass("animated fadeOut");
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
