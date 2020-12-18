$(function () {
    $(window).scroll(function () {
        if($(this).scrollTop() > 40){
            $('.main-menu').addClass('sticky');
        }
        else {
            $('.main-menu').removeClass('sticky');
        }
    })
})
