var getStartedEl = $("#get-started-btn");
var introEl = $("#intro");
var gifBoardEl = $("#gif-board");
var loadingEl = $("#loading");
var gifsEl = $(".gif");

console.log("Js is working");

//When "get started is clicked" gifboard page will display
$("#get-started-btn").click(function() {
    window.location.href = "gifboard.html";
  });

//HWhen any gif is clicked...
gifsEl.click(function() {
  //Gifboard content is hidden and...
  gifBoardEl.addClass("is-hidden");
  $("#gifboard-h3").addClass("is-hidden");
  //Loading content is displayed
  loadingEl.removeClass("is-hidden");
  $("#loading-h3").removeClass("is-hidden");
});
