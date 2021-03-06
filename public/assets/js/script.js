var getStartedEl = $("#get-started-btn");
var introEl = $("#intro");
var gifBoardEl = $("#gif-board");
var loadingEl = $("#loading");
var gifsEl = $(".gif");


console.log("Js is working");

//Get started button > load gif board
$("#get-started-btn").click(function() {
    window.location.href = "gifboard.html";
  });

//Hook for any gif being selected
gifsEl.click(function() {
  //On click > gifboard and h3 are hidden
  gifBoardEl.addClass("is-hidden");
  $("#gifboard-h3").addClass("is-hidden");
  //Loading H3 and load bar are displayed
  loadingEl.removeClass("is-hidden");
  $("#loading-h3").removeClass("is-hidden");
  
});
