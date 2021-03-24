function getSpotifyDataFromLocalStorage() {
    var data = JSON.parse(localStorage.getItem("spotifyData"));
    console.log(data);

    for (var i = 0; i < data.tracks.items.length; i++) {

        var tracks = data.tracks.items[i].external_urls.spotify;
        var artist = data.tracks.items[i].artists[0].name;
        var songTitle = data.tracks.items[i].name;
        var albumCover = data.tracks.items[i].album.images[1].url;

        // console.log(artist);

        // $('#artist-1').text(artist);
        // $('#album-cover-1').append(albumCover);
        // $('#song-name-1').text(songTitle);


        var htmlData = $(`
        <div class="column is-one-third">
        <div id=${tracks} class="card">
        <div class="card-image">
        <figure class="image">
        <img src=${albumCover} />
                </figure>
                </div>
            <div class="card-content column is-mobile">
            <div class="media">
            <div class="media-content">
            <p class="title is-4">${songTitle}</p>
            <p class = "title is-3">${artist}</p>
            </div>
            </div>
            </div>
            </div>
            </div>
            `)

        $("#card-container").append(htmlData);


    }

    $(".card").on("click", function () {
        var url = $(this).attr("id");
        window.open(url, "_blank")
    })

}


getSpotifyDataFromLocalStorage()

//When "try again" is clicked gifboard will display again
$("#try-again-btn").click(function () {
    window.location.href = "gifboard.html";
});