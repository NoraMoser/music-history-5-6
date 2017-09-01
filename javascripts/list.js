

var listSongs = {};

$("#link-list").click(function(event) {
  $("#home-view").addClass("hidden");
  $("add-view").addClass("hidden");
  $("#list-view").addClass("visible");
  $("#list-view").removeClass("hidden");
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

    let display = "";

    var indSongs = Object.keys(listSongs);
    console.log("indSongs", indSongs);
    
    indSongs.forEach(function(id, index) {
      console.log("listSongs", listSongs);
      console.log("index", index)
      console.log("id", id);
    // let songItem = listSongs.songs[index];
    display += `<div class='list-content' id='songCard'>
    <div class="Song1 specific-song">
    <h2>${listSongs[id].name}</h2>
    <h4 class="song1list artist-name">${listSongs[id].artist}</h4>
    <h4 class="song1list album-name">${listSongs[id].album}</h4>
    <h4 class="song1list genre-type">${listSongs[id].genre}</h4>
    <button class='deleteBtn'>Delete</button>
    </div></div>`

    $("#listViewMH").html(display);

      
    });
  

    $(".deleteBtn").on("click", function(){
      $(this).parent().parent().remove()
  });
    
 
    }

function songRequestFailed(event) {
    console.log("dataFailed", event);
}
songRequest.open("GET", "songs.json");
songRequest.send();