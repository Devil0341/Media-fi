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
$("#get-started-btn").click(function() {
    window.location.href = "gifboard.html";
  });

//When any gif is clicked...
gifsEl.click(function() {
  //Gifboard content is hidden and...
  gifBoardEl.addClass("is-hidden");
  $("#gifboard-h3").addClass("is-hidden");
  //Loading content is displayed
  loadingEl.removeClass("is-hidden");
  $("#loading-h3").removeClass("is-hidden");
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


