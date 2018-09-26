$(document).ready(function() { // START OF JQUERY

  
    $(".box4").css("display", "none");
    $(".box5").css("display", "none");

    $(".box7").mouseleave(function(){
        $(".gitHub").fadeOut(1000);
        $(".mail").fadeOut(1000);
        $(".phone").fadeOut(1000);
        $(".linkedin").fadeOut(1000);
        $(".contactInfo").fadeOut(1500);
    });

    $(".box6").mouseenter(function(){
        $(".box6").css("opacity", "1")
    });
    $(".box6").mouseleave(function(){
        $(".box6").css("opacity", ".5")
    });

    $(".art").mouseenter(function(){
        event.preventDefault();
        $(".box4").slideDown(1000);
        $(".box4").css("background-color", "#ccc");
        $(".box4").css("opacity", "1");
        $(".box45").css("opacity", "1");
        $(".box1").slideUp(1000);
        $(".box6").slideUp(1000);
        $(".box7").slideUp(1000);
        $(".back").fadeOut(2000);
        $(".devTitle").fadeOut(2000);
    });

    $(".code").mouseenter(function(){
        event.preventDefault();
        $(".box5").slideDown(1000);
        $(".box5").css("background-color", "#ccc");
        $(".box5").css("opacity", "1");
        $(".box45").css("opacity", "1");
        $(".box1").slideUp(1000);
        $(".box6").slideUp(1000);
        $(".box7").slideUp(1000);
        $(".back").fadeOut(2000);
        $(".desTitle").css("opacity", "0");
    });

    $("#design").mouseleave(function(){
        event.preventDefault();
        $(".box4").fadeOut(1000);
        $(".box1").fadeIn(1000);
        $(".box6").fadeIn(1000);
        $(".box7").fadeIn(1000);
        $(".grid").css("opacity", ".75");
        $(".back").fadeIn(1000);
        $(".devTitle").fadeIn(1000);
    });

    $("#dev").mouseleave(function(){
        event.preventDefault();
        $(".box5").fadeOut(1000);
        $(".box1").fadeIn(1000);
        $(".box6").fadeIn(1000);
        $(".box7").fadeIn(1000);
        $(".grid").css("opacity", ".75");
        $(".back").fadeIn(1000);
         $(".desTitle").css("opacity", "1");
    });
    
    $("#A1").mouseenter(function(){
        $(".artTitle").html("El Senior Ortiz");
        $(".artPhoto").css("background-image", "url(images/ElSenorOrtiz.jpg)");
        $(".artDescription").html("Insipred by the one and only, Mr. Ortiz. Mr. Ortiz was a great man, father, and grandfather. Lived a long and healthy life as well. (created with Matt Board, graphite pencil, and pen)");
    });

    $("#A2").mouseenter(function(){
        $(".artTitle").html("Skyline: Rome");
        $(".artPhoto").css("background-image", "url(images/RomeSkyline.jpg)");
        $(".artDescription").html("Rome wasn't built in a day; though it was planned out in a few hours. (Created entirely in Photoshop)");
    });

    $("#A3").mouseenter(function(){
        $(".artTitle").html("Blue Moon");
        $(".artPhoto").css("background-image", "url(images/BlueMoon.jpg)");
        $(".artDescription").html("Art comes to life once in a blue moon. Your imagination is limitless. (Created using gray paper, graphite pencil, and PrismaColor Pencils)");
    });

    $("#C1").mouseenter(function(){
        $(".codeTitle").html("8-bit: Goku");
        $(".codePhoto").css("background-image", "url(images/goku.jpg)").css("max-height", "65%").css("height", "350px");
        $(".codeDescription").html("One of the most famous fighting warriors in 8-bit form. Goku going super sayin for the first time against Frieza still gives me goosebumps (4600 lines of Java code inside jGrasp).");
    });

    $("#C2").mouseenter(function(){
        $(".codeTitle").html("gridPort.css");
        $(".codePhoto").css("background-image", "url(images/grid.jpg)").css("max-height", "100%").css("height", "400px");
        $(".codeDescription").html("Utlizing the new styling technique, the grid, for this entire website. This is the styling code for the dropdown menus of this page (CSS coded in Sublime Text 3).");
    });

    $("#C3").mouseenter(function(){
        $(".codeTitle").html("HTTP Get");
        $(".codePhoto").css("background-image", "url(images/python.jpg)").css("max-height", "88%").css("height", "350px");
        $(".codeDescription").html("Picking and recieving the HTTP of an entire webpage. Then the user is allowed to study any line of HTTP code by typing in the codeline number (Python Coded in the Python IDLE 3.5).");
    });


}); // END OF JQUERY