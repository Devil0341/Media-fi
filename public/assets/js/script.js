var getStartedEl = $("#get-started-btn");
var introEl = $("#intro");
var gifEl = $("#gif-board");

console.log("Js is working");

//Get started button > load gif board
// $("#get-started-btn").click(function () {
//   console.log("Get started was clicked");
//   window.location.href = "gifboard.html";

// });

// Setting up fetch for giphy grid


function giphyGrid(requestUrl) {

  var requestUrl = 'https://api.giphy.com/v1/gifs/trending?api_key=1IZwxvtq8OEMv6ULkhlXoRgjfNmlONFv&limit=9&rating=r'

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)

    ,then(function imageGrab() {
        
        var gifs = $('.gif');
        $(gifs).each(function () {
          var dataUrl = data[i].url
          $('img').attr({ 'src': dataUrl }
        }
      }

for (var i = 0; i < data.length; i++) {
       
       
        $('img').attr({ 'src': dataUrl })

      });

}


    })


}
giphyGrid();
