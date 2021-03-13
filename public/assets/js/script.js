var getStartedEl = $("#get-started-btn");
var introEl = $("#intro");
var gifBoardEl = $("#gif-board");
var giphyGridItems = []
var BASE_URL = `https://api.giphy.com/v1/gifs/search?api_key=DmJrVZsNraIXZqq3u6JXaUIkz1kcRShZ&limit=10&offset=${offset}&rating=g&lang=en`;
var searchTerm = ['happy', 'sad', 'funny', 'mad', 'confused', 'inspirational', 'excited', 'lazy', 'jealous']
var offset = Math.floor(Math.random() * 4999) + 1;

console.log("Js is working");

//UI/UX
giphyGrid(searchTerm);
var loadingEl = $("#loading");
var gifsEl = $(".gif");

//When "get started is clicked" gifboard page will display
$("#get-started-btn").click(function () {
  window.location.href = "gifboard.html";
});

// Setting up fetch for giphy grid call and spotify call
function giphyGrid(searchTerm) {
  // loop over the searchTerm array
  for (var i = 0; i < 10; i++) {
    fetchBasedOnEmotion(searchTerm[i]);
  }

}
// retrieving gifs from api and display to html
function fetchBasedOnEmotion(emo) {
  fetch(`${BASE_URL}&q=${emo}`)
    .then(function (res) {
      return res.json()
    }).then(function (data) {

      var randomIndex = Math.floor(Math.random() * data.data.length)

      var innerHTML = $(`<img src=${data.data[randomIndex].images.original.url} data-emo=${emo}/>`)
      // console.log(data)
      var searchId = `#${emo}`;
      $(`#${emo}`).append(innerHTML);
    })

}

// -----------------------------------------
//When gify clicked on it will pass through the spotifyMedia function and retrieve a search for music based on the emotion of gif


gifsEl.on("click", function (event) {
  event.preventDefault()
  var selectedGif = $(this);
  var emo = selectedGif.attr('id');
  //Gifboard content is hidden and...
  gifBoardEl.addClass("is-hidden");
  $("#gifboard-h3").addClass("is-hidden");
  //Loading content is displayed
  loadingEl.removeClass("is-hidden");
  $("#loading-h3").removeClass("is-hidden");
  spotifyMedia(emo)

});

var offsetSpotify = Math.floor(Math.random() * 1000) + 1;

async function spotifyMedia(searchVal) {

  console.log("searchVal", searchVal);

  var tokenRes = await fetch("/api/spotify/token");

  var tokenData = await tokenRes.json()

  var token = tokenData.access_token;

  var bearer = `Bearer ${token}`


  var res = await fetch(`https://api.spotify.com/v1/search?q=${searchVal}&type=track&limit=9`, {
    method: "GET",
    headers: {
      "Authorization": bearer
    }
  })

  var data = await res.json();


  localStorage.setItem("spotifyData", JSON.stringify(data));

  location.href = "recommendations.html";

};

