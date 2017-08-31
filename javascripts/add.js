
var homeLink = document.getElementById("view-music");
var homeView = document.getElementById("home-view");
var listLink = document.getElementById("link-list");
var listView = document.getElementById("list-view");
var addLink = document.getElementById("link-add");
var addView = document.getElementById("add-view");

addLink.addEventListener("click", function() {
  homeView.classList.add("hidden");
  listView.classList.add("hidden");
  
  addView.classList.add("visible");
  addView.classList.remove("hidden");
  
  var inputButton = document.getElementById("add-button");
  console.log(songs2);
  inputButton.addEventListener("click", function(){
    console.log("omggg");
    // songs2 = []; 
    displayNewSongs();
    displayOriginalSongs();
    
  });
});

console.log("hi there");


function displayNewSongs() {
  var songNameInput = document.getElementById("songName");
  var artistInput = document.getElementById("artistName");
  var albumInput = document.getElementById("albumName");
  
  songs2.unshift({name: songNameInput.value, artist: artistInput.value, album: albumInput.value, genre: "Whatever"}); // Array now contains 1 item
  // contentArea.innerHTML += songsTwo;
}

function displayOriginalSongs() {
  contentArea2.innerHTML = "";
  for (let j = 0; j < songs2.length; j++) {
  
    console.log(songs2[j]);
    contentArea2.innerHTML += `<div class="Song1 specific-song">
                            <h2>${songs2[j].name}</h2>
                            <h4 class="song1list artist-name">${songs2[j].artist}</h4>
                            <h4 class="song1list album-name">${songs2[j].album}</h4>
                            <h4 class="song1list genre-type">${songs2[j].genre}</h4>
                            </div>`;
                            console.log(songs2[j]);
  }
  // var inputButton = document.getElementById("add-button");
  
    console.log(songs2);
  }
    // inputButton.addEventListener("click", function(){
    //   console.log("omggg");
    //   displayNewSongs();
  