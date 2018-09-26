$(document).ready(function() { // START OF JQUERY


	$("body").css("display", "none");
    $("img").css("display", "none");
    $(".grid").css("display", "none");

    $("body").fadeIn(100);
    $(".video-container").fadeIn(500);
    $(".grid").delay(2000).fadeIn(2000);
    $("img").delay(2000).fadeIn(2000);
	

	$(".gitHub").css("display", "none");
	$(".mail").css("display", "none");
	$(".phone").css("display", "none");
	$(".linkedin").css("display", "none");
	$(".contactInfo").html(" ");

	$(".contactMe").mouseenter(function(){
    	event.preventDefault();
        $(".mail").fadeIn(1000);
        $(".phone").fadeIn(1000);
        $(".linkedin").fadeIn(1000);
    });


    $(".gitHub").mouseenter(function(){
    	event.preventDefault();
        $(".contactInfo").html("Click to go to GitHub").fadeIn(500);
    });

    $(".mail").mouseenter(function(){
    	event.preventDefault();
        $(".contactInfo").html("mrexr2014@gmail.com").fadeIn(500);
    });

    $(".phone").mouseenter(function(){
    	event.preventDefault();
        $(".contactInfo").html("+1(718)909-3871").fadeIn(500);
    });

    $(".linkedin").mouseenter(function(){
    	event.preventDefault();
        $(".contactInfo").html("Click to go to LinkedIn").fadeIn(500);
    });

}); // END OF JQUERY