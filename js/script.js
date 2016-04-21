$(document).ready(function(){
  $("body").fadeIn(2000);

  $("#read-more").on("click", function() {
    $(this).remove();
    $(".read-more").slideDown();
  });

  $(".darken").on("mouseenter", function() {
    $(this).removeClass("darken")
  });

  $(".darken").on("mouseleave", function() {
    $(this).addClass("darken")
  });
});
