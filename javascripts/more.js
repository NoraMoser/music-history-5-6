// let listSongs2 = {};

$("#more").click(function(){
    console.log("help");

$.ajax({
	url: "javascripts/songs1.json" //url to go to
}).done(functionIWantjQueryToExecute) //call function

function functionIWantjQueryToExecute(songList) { // get array of songs
	console.log(songList.songs1);

	for(var i = 0; i < songList.songs1.length; i++) { //loop through array
		var currentSong = songList.songs1[i]; 
		$("#secondGroup").append(`<div class='list-content' id='songCard'>`); //spit out stuff
		$("#secondGroup").append(`<div class="Song1 specific-song">`);
        $("#secondGroup").append(`<h2>${currentSong.name}</h2>`);
        $("#secondGroup").append(`<h4 class="song1list artist-name">${currentSong.artist}</h4>`);
        $("#secondGroup").append(`<h4 class="song1list album-name">${currentSong.album}</h4>`);
        $("#secondGroup").append(`<h4 class="song1list genre-type">${currentSong.genre}</h4>`);
        $("#secondGroup").append(`<button class='deleteBtn'>Delete</button>`);
        $("#secondGroup").append(`</div></div>`);
        
	}
};
});