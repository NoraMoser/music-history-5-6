console.log("hi");


let songs2 = [
{ 
name: "Karma Police",
artist: "RadioHead",
album: "OK Computer",
genre: "Alternative"
},
{
name: "Tiny Dancer",
artist: "Elton John",
album: "Madman Across the Water",
genre: "Folk"
},
{
name: "Scar",
artist: "Missy Higgins",
album: "The Sound White",
genre: "Alternative"
},
{
name: "New York New York",
artist: "Ryan Adams",
album: "Gold",
genre: "Alternative"
}

];

let contentArea = document.getElementById("song-container");
let contentArea2 = document.getElementById("song-container2");

addToDom();
function addToDom(){
for (i = 0; i < songs2.length; i++) {
	console.log(songs2[i]);
	contentArea.innerHTML += `<div class="Song1 specific-song">
								<h2>${songs2[i].name}</h2>
								<h4 class="song1list artist-name">${songs2[i].artist}</h4>
								<h4 class="song1list album-name">${songs2[i].album}</h4>
								<h4 class="song1list genre-type">${songs2[i].genre}</h4>
								</div>`;
	
	
}
	
}
