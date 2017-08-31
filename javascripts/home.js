
var homeLink = document.getElementById("view-music");
var homeView = document.getElementById("home-view");
var listLink = document.getElementById("link-list");
var listView = document.getElementById("list-view");
var addLink = document.getElementById("link-add");
var addView = document.getElementById("add-view");

homeLink.addEventListener("click", function() {
  listView.classList.add("hidden");
  addView.classList.add("hidden");

  homeView.classList.add("visible");
  homeView.classList.remove("hidden");

});