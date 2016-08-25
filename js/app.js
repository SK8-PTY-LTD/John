//hide github button
//show github button slowly
$(".btn").hide().show("slow");

//hide navbar-brand and show by click
$(".navbar-brand span").hide();
$(".navbar-brand").append("<button>Reveal</button>");
$(".navbar-brand button").click(function(){
	$(this).prev().show();
	$(this).remove();
})

//photo wall

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");

//An image to overlay
$overlay.append($image);

//Add overlay
$("body").append($overlay);
  //A caption


$("#photoWall img").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("src");
  //Update overlay with the image linked in the link
  $image.attr("src", imageLocation);
  
  //Show the overlay.
  $overlay.show();
  
  //Get child's alt attribute and set caption


});

//When overlay is clicked
$overlay.click(function(){
  //Hide the overlay
  $overlay.hide();
});