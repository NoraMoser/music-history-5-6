var homeLink = document.getElementById("view-music");
var homeView = document.getElementById("home-view");
var listLink = document.getElementById("link-list");
console.log(listLink);
var listView = document.getElementById("list-view");
var addLink = document.getElementById("link-add");
var addView = document.getElementById("add-view");

var listSongs = {};

listLink.addEventListener("click", function(event) {
  // event.preventDefault();
  homeView.classList.add("hidden");
  addView.classList.add("hidden");
  listView.classList.add("visible");
  listView.classList.remove("hidden");
});
console.log("booyah");
let songRequest = new XMLHttpRequest();
songRequest.addEventListener("load", songRequestComplete);
songRequest.addEventListener("error", songRequestFailed);
function songRequestComplete(event){
    console.log("songs have loaded");
    listSongs = JSON.parse(event.target.responseText);
    console.log("song data", listSongs);
    showData(listSongs);
}
function showData(songs, item){

    var indSongs = Object.keys(listSongs);
    console.log("indSongs", indSongs);
    let songDiv = document.getElementById("listViewMH");
    
    indSongs.forEach(function(id, index) {
      console.log("listSongs", listSongs);
      console.log("index", index)
      console.log("id", id);
    // let songItem = listSongs.songs[index];
    songDiv.innerHTML += `<div class='list-content' id='songCard'>
    <div class="Song1 specific-song">
    <h2>${listSongs[id].name}</h2>
    <h4 class="song1list artist-name">${listSongs[id].artist}</h4>
    <h4 class="song1list album-name">${listSongs[id].album}</h4>
    <h4 class="song1list genre-type">${listSongs[id].genre}</h4>
    <button class='deleteBtn'>Delete</button>
    </div></div>`
    //   for (var i = 0; i < deleteButton.length; i++) {
      // };
      // console.log("listSongs.name", listSongs.songs.name);
      
    });
    // songDiv.innerHTML += listSongs;
    
    let wholeSongDiv = document.getElementById("songCard");

    $(".deleteBtn").on("click", function(){
      $(this).parent().parent().remove()
  });
    
    // console.log("delete button", deleteButton.childNodes);
    // deleteButton.addEventListener("click", function() {
      //    wholeSongDiv.classList.add("hidden");
      // }) 
    }
    
// var deleteButton = document.getElementById("button");
// for (let i = 0; i < deleteButton.length; i++) {
//   let newDeleteButton = deleteButton[i];
//   console.log(newDeleteButton);
// }
function songRequestFailed(event) {
    console.log("dataFailed", event);
}
songRequest.open("GET", "songs.json");
songRequest.send();