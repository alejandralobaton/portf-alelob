

$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
    }
    });
});


$(document).ready(function() {
    $(".menu-btn").click(function() {
    $(this).toggleClass("active");
    $(".menu").toggleClass("active");

    });
});


