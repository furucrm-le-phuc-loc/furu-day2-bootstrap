$(document).ready(function() {

    $(window).scroll(function() {
        $("#btn-to-top").fade;
        if ($(this).scrollTop() > 50) {
            if ($("#btn-to-top").hasClass("d-none")) {
                $("#btn-to-top").removeClass("d-none");
            }
            
            console.log($(this).scrollTop())
        }
        else {
            $("#btn-to-top").addClass("d-none");
        }
    });

    $("#btn-to-top").on("click", function(event) {
        $("#btn-to-top").addClass("hide");
        $("body, html").animate({
            scrollTop: 0
        }, 800);
    });



    


})

