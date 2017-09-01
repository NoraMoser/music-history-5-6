
$("#view-music").click(function() {
  console.log("hey there");
  $("#list-view").addClass("hidden");
  $("#add-view").addClass("hidden");

  $("#home-view").addClass("visible");
  $("#home-view").removeClass("hidden");

});