$(document).ready(function(){
  $("#read-more").on("click", function() {
    $(this).remove();
    $(".read-more").slideDown();
  });
});
