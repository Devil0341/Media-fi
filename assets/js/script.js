var getStartedEl = $("#get-started-btn");
var introEl = $("#intro");
var gifEl = $("#gif-board");

console.log("Js is working");

//Get started button > load gif board
$("#get-started-btn").click(function() {
    console.log("Get started was clicked");
    window.location.href = "gifboard.html";
  });
