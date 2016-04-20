$(document).ready(function(){
  $("#read-more").on("click", function() {
    $(this).remove();
    $(".read-more").slideDown();
  });

  $(".dinos").on("mouseenter", function() {
    $(this).addClass("darken")
  });

  $(".dinos").on("mouseleave", function() {
    $(this).removeClass("darken")
  });
});
