function analyze(data) {
	let array = data.album;
  console.log(array.length);
  for (let i = 0; i < array.length; i++) {
  	let albumObj = array[i];
    let html = "<li>" + albumObj.strAlbum + "</li>"
    $("#albumList").append(html);
  }
}

function getAlbum(data) {
    console.log("in here");
	let artistID = data.artists[0].idArtist;
  console.log(artistID);
  
  let baseURL = "https://theaudiodb.com/api/v1/json/523532/album.php?";
  let fullURL = baseURL + "i=" + artistID;

  $.get(fullURL, function(data) {
    // console.log(data);
    analyze(data);
  });
}

function submit() {
	let baseURL = "https://theaudiodb.com/api/v1/json/523532/search.php?";
  let artistInput = $("#artistName").val();
  let fullURL = baseURL + "s=" + artistInput;
  
//   console.log("in submit", fullURL);
  
	$.get(fullURL, function(data) {
  	// console.log("here");
  	// console.log("!!"+ JSON.stringify(data));
  	getAlbum(data)
	});
}