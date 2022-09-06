let songName;

document.getElementById("searchbtn").onclick = function(){
    songName = document.getElementById("songSearch").value;
    fetch(`https://some-random-api.ml/lyrics?title=${songName}`)
    .then(function(response) {
        if(!response.ok) {
          throw new Error("Song lyrics could not be found!");
        }
        return response.json()
      })
      .then(function(result) {
        if(result.stat === "fail") {
          throw new Error(result.error);
        }
        else{
            document.getElementById("songImg").src = result.thumbnail.genius;
            document.getElementById("songTitle").innerText = result.title + ' by ' + result.author;
            document.getElementById("songLyrics").innerText = result.lyrics;
        }
        
    
      })
      .catch(function(err) {
        alert(err);
      });
    

}