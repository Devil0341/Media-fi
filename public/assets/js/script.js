var getStartedEl = $("#get-started-btn");
var introEl = $("#intro");
var gifEl = $("#gif-board");
var giphyGridItems = []
var BASE_URL = `https://api.giphy.com/v1/gifs/search?api_key=DmJrVZsNraIXZqq3u6JXaUIkz1kcRShZ&limit=1&offset=${offset}&rating=g&lang=en`;
var searchTerm = ['happy', 'sad', 'funny', 'mad', 'confused', 'inspirational', 'excited', 'lazy', 'jealous']
var offset = Math.floor(Math.random() * 4999);


console.log("Js is working");

// Get started button > load gif board
$("#get-started-btn").click(function () {
  console.log("Get started was clicked");
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
    .then(function(res) {
      return res.json()
    }).then(function(data) {      
      var innerHTML = $(`<img src=${data.data[0].images.original.url}/>`)
      var searchId = `#${emo}`;
      $(`#${emo}`).append(innerHTML);
    })

}


giphyGrid(searchTerm);
