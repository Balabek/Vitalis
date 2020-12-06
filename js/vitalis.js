/**
 * Created by krm on 16/04/2018.
 */

$(document).ready(function(){

    // FAQ pills open/close icons transition
    $(".toggle_srvc_box").on("click", function() {
        console.log("initiated...");
        $(this).find('.toggler_plus').toggleClass('toggler_minus');
    });



    // Animating the standard hamburger-menu
    $(".navbar-toggle").on("click", function () {
        $(this).toggleClass("active");
    });


    // Animating the "go-to" anchor scroll
    $('a.v_main_cta_btn').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top -20
        }, 800);

        $('.collapse').removeClass('in');
        $('.navbar-toggle').removeClass('active');

    });



});