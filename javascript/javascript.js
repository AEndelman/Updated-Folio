var clickedCount = 0;

$(document).ready(function (){

    $("#profileContent").hide();
    $("#musicContent").hide();
    $("#writingContent").hide();
    $("#programmingContent").hide();
    $("#contactContent").hide();

    //clicks for images

    $("img").on("click", function() {

    if (this.alt!=="logo" && clickedCount==0) {
        this.clicked = true;
        console.log(this.clicked);
        //bring in content
        $("#" +this.alt+ "Content").fadeIn(2500);
        //img animate
        $(this).animate({
            'marginTop' : "-=90px"
            },1000);
        //keeps count so only one content loaded
        clickedCount++;
        $('html, body').animate({
            scrollTop: $("#" +this.alt+ "Content").offset().top
        }, 500);
        // window.location.href = ("#" +this.alt+ "Content");
        }

    else if (this.alt!=="logo" && clickedCount>0 && this.clicked!==true && this.alt!=="devPic") {
            this.clicked = true;
            console.log(this.clicked);
            //bring in content
            
            $("#" +this.alt+ "Content").fadeIn(2500);
            //img animate
            $(this).animate({
                'marginTop' : "-=90px"
                },1000);
            //keeps count so only one content loaded
            clickedCount++;
            $('html, body').animate({
                scrollTop: $("#" +this.alt+ "Content").offset().top
            }, 500);
            }

    else if (this.clicked===true && this.alt!=="logo" ){
        this.clicked = false;
        //bring out content
        $("#" +this.alt+ "Content").fadeOut(1900);
        //animation
        $(this).animate({
            'marginTop' : "+=90px"
            },1000);
        //brings down count so others can click
        clickedCount--;
    }
    });
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 50) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}