$(document).ready(function(){
  //Add code to fade the body of the document in
  //https://api.jquery.com/fadeIn/
  
  $("#read-more").on("click", function() {
    //When clicking the #read-more link, slide down the .read-more container
    //https://api.jquery.com/slidedown/
  });

  $(".darken").on("mouseenter", function() {
    //Remove the "darken" class from the hovered image
    $(this).removeClass()
  });

  $(".darken").on("mouseleave", function() {
    //Add the "darken" class to the hovered image
  });
  
  //On click of the kill the page class, remove the body of the page
  //https://api.jquery.com/remove/
  //$(".kill-the-page")
});
