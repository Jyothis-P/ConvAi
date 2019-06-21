
$(document).ready(function () {
    console.log('doc ready');

$scrollPrompt = $('.downscroll');
$nav = $('.page-one');
$brand = $('.logo-container')
// $elem2 = $('#mySecondElement');
var scrollState = 'top';

var txt = '<span class="logo-span expansion">ersational </span>'

$(window).scroll(function(){ 
    
    var scrollPos = $(window).scrollTop();
    console.log(scrollPos);

    if( ( scrollPos > 10 ) && ( scrollState === 'top' ) ) {
        $scrollPrompt.css("animation-play-state", "paused");
        $scrollPrompt.hide();
        $(".expansion").addClass('slideleft');
        $nav.addClass('goup fixed-top');
        $brand.addClass('goleft');

        scrollState = 'scrolled';
    }       
    else if( ( scrollPos === 0 ) && ( scrollState === 'scrolled' ) ) {
        $scrollPrompt.css("animation-play-state", "running");
        $scrollPrompt.show();
        $(".expansion").removeClass('slideleft');
        $nav.removeClass('goup fixed-top');
        $brand.removeClass('goleft');


        // $nav.removeClass();
        // $nav.addClass('page-one');
        // $brand.removeClass();
        // $brand.addClass('.logo-container');

        scrollState = 'top';
    }

});



});