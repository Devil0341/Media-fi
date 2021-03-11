var getStartedEl = $("#get-started-btn");
var introEl = $("#intro");
var gifBoardEl = $("#gif-board");
var giphyGridItems = []
var BASE_URL = `https://api.giphy.com/v1/gifs/search?api_key=DmJrVZsNraIXZqq3u6JXaUIkz1kcRShZ&limit=1&offset=${offset}&rating=g&lang=en`;
var searchTerm = ['happy', 'sad', 'funny', 'mad', 'confused', 'inspirational', 'excited', 'lazy', 'jealous']
var offset = Math.floor(Math.random() * 4999);

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
// 
function fetchBasedOnEmotion(emo) {
  fetch(`${BASE_URL}&q=${emo}`)
    .then(function (res) {
      return res.json()
    }).then(function (data) {
      var innerHTML = $(`<img src=${data.data[0].images.original.url} data-emo=${emo}/>`)
      var searchId = `#${emo}`;
      $(`#${emo}`).append(innerHTML);
    })

}

// -----------------------------------------

var searchVal;
gifsEl.on("click", function () {
  var selectedGif = $(this);
  var emo = selectedGif.attr('id');
  window.location.href = "recommendations.html";
  // //Gifboard content is hidden and...
  // gifBoardEl.addClass("is-hidden");
  // $("#gifboard-h3").addClass("is-hidden");
  // //Loading content is displayed
  // loadingEl.removeClass("is-hidden");
  // $("#loading-h3").removeClass("is-hidden");
 
  
  spotifyMedia(emo)
  
});

var offsetSpotify = Math.floor(Math.random() * 1000);

  async function spotifyMedia(searchVal) {
  
    var tokenRes = await fetch("/api/spotify/token");
  
    var tokenData = await tokenRes.json()
    console.log(tokenData);
  
    var token = tokenData.access_token;
  
    var bearer = `Bearer ${token}`
  
    var res = await fetch(`https://api.spotify.com/v1/search?q=${searchVal}&type=album,track,artist`, {
      method: "GET",
      headers: {
        "Authorization": bearer
      }
    })
  
    var data = await res.json();
  
    console.log(data)
    
  
  };

// call key value pairs to choose a track according to emotion of gify
// link song to appropriate gif board tile

