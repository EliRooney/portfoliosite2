$(document).ready(function() { // START OF JQUERY

    $(".grid").delay(2500).fadeIn(3000);
    $(".box1").css("color", "#1c1c1c;");


    $(".box3").mouseleave(function(){
        $(".gitHub").fadeOut(1000);
        $(".mail").fadeOut(1000);
        $(".phone").fadeOut(1000);
        $(".linkedin").fadeOut(1000);
        $(".contactInfo").fadeOut(1500);
    });

    $(".box4").mouseenter(function(){
        $(".box4").css("opacity", "1")
    });
    $(".box4").mouseleave(function(){
        $(".box4").css("opacity", ".5")
    });

    $(".topBox").mouseenter(function(){
        $(".topBox").css("opacity", "1");
        $(".back").fadeOut(500);
    });

    $(".topBox").mouseleave(function(){
        $(".topBox").css("opacity", ".75");
        $(".back").fadeIn(500);
    });

    /*$(".left").mouseenter(function(){
        $(".left").css("opacity", "1");
    });

    $(".left").mouseleave(function(){
        $(".left").css("opacity", ".5");
    });

    $(".right").mouseenter(function(){
        $(".right").css("opacity", "1");
    });

    $(".right").mouseleave(function(){
        $(".right").css("opacity", ".5");
    });*/


        

    
    
}); // END OF JQUERY