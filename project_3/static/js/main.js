$(document).ready(function () {
   
    $('[open-menu]').on('click',function(){
        $('.mobileMenu').addClass('_active');
        $('.overlay').fadeIn();
        $('body').addClass('body-hidden');
    });

    $('[close-menu]').on('click',function(){
        $('.mobileMenu').removeClass('_active');
        $('.overlay').fadeOut();
        $('body').removeClass('body-hidden');
    });

    $('.overlay').on('click',function(){
        $('.dropdown').fadeOut();
        $('body').removeClass('body-hidden');
        $(this).hide();
        $('.mobileMenu').removeClass('_active');
    });


});