
$("#link-add").click(function() {
  $("#home-view").addClass("hidden");
  $("#list-view").addClass("hidden");
  
  $("#add-view").addClass("visible");
  $("#add-view").removeClass("hidden");
  
  console.log(songs2);
  $("#add-button").click(function() {
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
  var display = ""
  $("#song-container2").html("");
  for (let j = 0; j < songs2.length; j++) {
  
    console.log(songs2[j]);
    
        display += `<div class="Song1 specific-song">
                    <h2>${songs2[j].name}</h2>
                    <h4 class="song1list artist-name">${songs2[j].artist}</h4>
                    <h4 class="song1list album-name">${songs2[j].album}</h4>
                    <h4 class="song1list genre-type">${songs2[j].genre}</h4>
                    </div>`;
    $("#song-container2").html(display);
                            console.log(songs2[j]);
  }
  
  
    console.log(songs2);
  }

  