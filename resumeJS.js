$(document).ready(function() { // START OF JQUERY

    $(".RC").css("display", "none");


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

    $(".box5").mouseenter(function(){
        $(".box5").css("opacity", "1")
    });
    $(".box5").mouseleave(function(){
        $(".box5").css("opacity", ".8")
    });
    $(".box5").click(function(){
        event.preventDefault();
        $(".imgRC").attr("src", "images/Resume.jpg");
        $(".box1").html("Resume");
        $(".box5").slideUp(1000);
        $(".box6").slideUp(1000);
        $(".box4").slideUp(1000);
        $(".box3").slideUp(1000);
        $(".video-container").css("overflow", "scroll");
        $(".RC").delay(750).fadeIn(1000);
    });

    $(".box6").click(function(){
        event.preventDefault();
        $(".imgRC").attr("src", "images/CoverLetter.jpg");
        $(".box1").html("Cover Letter");
        $(".box5").slideUp(1000);
        $(".box6").slideUp(1000);
        $(".box4").slideUp(1000);
        $(".box3").slideUp(1000);
        $(".video-container").css("overflow", "scroll");
        $(".RC").delay(750).fadeIn(1000);
    });

    $(".RC").click(function(){
        event.preventDefault();
        $(".RC").slideUp(1000);
        $(".box1").delay(1000).html("Resume/Cover Letter");
        $(".box5").fadeIn(750);
        $(".box6").fadeIn(750);
        $(".box4").fadeIn(750);
        $(".box3").fadeIn(750);
        $(".video-container").css("overflow", "hidden");
    });

    $(".box6").mouseenter(function(){
        $(".box6").css("opacity", "1")
    });
    $(".box6").mouseleave(function(){
        $(".box6").css("opacity", ".8")
    });

}); // END OF JQUERY