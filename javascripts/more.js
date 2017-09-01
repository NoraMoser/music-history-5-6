let listSongs2 = {};

$("#more").on("click", function(){
    let songRequest2 = new XMLHttpRequest();
    songRequest2.addEventListener("load", songRequestComplete);
    songRequest2.addEventListener("error", songRequestFailed);

    function songRequestComplete(event){
        console.log("songs have loaded");
        listSongs2 = JSON.parse(event.target.responseText);
        console.log("song data", listSongs2);
        showData2(listSongs2);
    }
    function showData2(songs, item){
        let display = "";

        var indSongs2 = Object.keys(listSongs2);
        console.log("indSongs", indSongs2);
        
        
        indSongs2.forEach(function(id, index) {
          console.log("listSongs", listSongs2);
          console.log("index", index)
          console.log("id", id);
    
        display += `<div class='list-content' id='songCard'>
        <div class="Song1 specific-song">
        <h2>${listSongs2[id].name}</h2>
        <h4 class="song1list artist-name">${listSongs2[id].artist}</h4>
        <h4 class="song1list album-name">${listSongs2[id].album}</h4>
        <h4 class="song1list genre-type">${listSongs2[id].genre}</h4>
        <button class='deleteBtn'>Delete</button>
        </div></div>`

        $("#secondGroup").html(display);
        
          
        });
        
    
        $(".deleteBtn").on("click", function(){
          $(this).parent().parent().remove()
      });
        
        }
        
    function songRequestFailed(event) {
        console.log("dataFailed", event);
    }
    songRequest2.open("GET", "songs1.json");
    songRequest2.send();
});