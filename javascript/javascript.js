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
        $("#" +this.alt+ "Content").fadeIn(3000);
        $(this).animate({
            'marginTop' : "-=90px"
            },1000);
        clickedCount++;
        }

    else if (this.clicked===true && this.alt!=="logo"){

        this.clicked = false;
        $("#" +this.alt+ "Content").fadeOut(2600);
        $(this).animate({
            'marginTop' : "+=90px"
            },1000);
        clickedCount--;
    }
    });
});