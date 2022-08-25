$('h1').addClass("big-style");

// $("button").click(function () {
//   $("h1").css("color", "purple");
// });


$(document).keydown(function(event) {
  $("h1").text(event.key);
});

$("h1").on("mouseover", function() {
  $("h1").css("color", "blue");
});

// $("button").on("click", function() {
//   $("h1").animate({opacity: 0.5});
// });

$("button").on("click", function() {
  $("h1").slideUp().slideDown().animate({opacity: 0.5});
});
