$(document).ready(function() { // START OF JQUERY

    $(".box7").mouseleave(function(){
        $(".gitHub").fadeOut(1000);
        $(".mail").fadeOut(1000);
        $(".phone").fadeOut(1000);
        $(".linkedin").fadeOut(1000);
        $(".contactInfo").fadeOut(1500);
    });

    $(".box5").mouseenter(function(){
        $(".box5").css("opacity", "1")
    });
	$(".box5").mouseleave(function(){
        $(".box5").css("opacity", ".8")
    });

     $(".box4").mouseenter(function(){
        $(".box4").css("opacity", "1")
    });
    $(".box4").mouseleave(function(){
        $(".box4").css("opacity", ".8")
    });

    $(".box3").mouseenter(function(){
        $(".box3").css("opacity", "1")
    });
    $(".box3").mouseleave(function(){
        $(".box3").css("opacity", ".8")
    });

}); // END OF JQUERY