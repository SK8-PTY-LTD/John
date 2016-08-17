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

