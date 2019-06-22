
function scroll_to_next_page(currentPageID, nextPageID) {
	$curPage = $(currentPageID);
	$nxtPage = $(nextPageID);
	$curPage.css({opacity: 0});
	$nxtPage.css({opacity: 1});
}



$(document).ready(function () {
    console.log('doc ready');
    isLoaded = false;
    setTimeout(function () {
    	isLoaded = true;
    }, 300);
    $('html, body').animate({
    scrollTop: 0
	  	}, 300);

	$curPage = $("#story");
	$nxtPage = $("#problem");


	$scrollPrompt = $('.downscroll');
	$nav = $('.page-one');
	$brand = $('.logo-container');
	// $elem2 = $('#mySecondElement');


/**

Algorithm

go back up


*/

// if (scrollPos < 10) {}

var scrollState = 'top';

var txt = '<span class="logo-span expansion">ersational </span>'

var scroll = 0;

var isScrolling = false;


var pages = ["#story", "#problem", "#pro", "#blem"];

$(window).scroll(function(){ 

	if (!isLoaded) {return;}
    
    var scrollPos = $(window).scrollTop();
    var scrollBottom = scrollPos + $(window).height();
    // console.log(scrollPos);

    var pageBottom = $curPage.offset().top + $curPage.height();

    if ($curPage.offset().top + $(window).height() > pageBottom ) {
    	pageBottom = $curPage.offset().top + $(window).height();
    	console.log("small para");
    }

    console.log(scrollBottom + " X " + pageBottom + $curPage[0].id);
    if ( ( scrollPos > 10 ) && ( scrollState === 'top' ) ) {
        $scrollPrompt.css("animation-play-state", "paused");
        $scrollPrompt.hide();
        $(".expansion").addClass('slideleft');
        $nav.addClass('goup fixed-top');
        $brand.addClass('goleft');
        $(".desc").fadeOut('slow');

    	$curPage = $("#story");
		$nxtPage = $("#problem");

		$curPage.addClass("showpage");
	    $('html, body').animate({
	    scrollTop: $curPage.offset().top - 200
		  	}, 800);

	    scrollState = "scrolled";

    } 
    else if( ( scrollPos === 0 ) && ( scrollState === 'scrolled' ) ) {
        $scrollPrompt.css("animation-play-state", "running");
        $scrollPrompt.show();
        $(".expansion").removeClass('slideleft');
        $nav.removeClass('goup fixed-top');
        $brand.removeClass('goleft');
        $("#description").fadeIn()

        scrollState = 'top';
    }

    else if (scrollBottom > pageBottom + 20) {
    	// $curPage.fadeOut("slow");

    	console.log("============================================");
    	console.log("scrolling to: " + ($nxtPage.offset().top - 200));
    	$nxtPage.addClass("showpage");
        $('html, body').animate({
        scrollTop: $nxtPage.offset().top - 100
  	  	}, 1000);

        var nextIndex = pages.findIndex(function(id){
			return id === "#" + $nxtPage[0].id;
		});

		console.log(nextIndex);
		if (nextIndex < pages.length) 
			nextIndex++;

		$curPage = $nxtPage;
		$nxtPage = $(pages[nextIndex]);
		console.log("current: " +  $curPage[0].id);
		console.log("next: " +  $nxtPage[0].id);
    }

    // if (scrollPos >= 600 && ( scrollState === 'scrolled' ) ) {
    // 	$("#problem").addClass('showpage');
    //     $('html, body').animate({
    //     scrollTop: $("#problem").offset().top - 200
  	 //  	}, 800);
    // } 

    // else if( ( scrollPos > 10 ) && ( scrollState === 'top' ) ) {
    // 	isScrolling = true;
    // 	setTimeout(function () {
    // 		isScrolling = false;
    // 	},2800);
    //     $scrollPrompt.css("animation-play-state", "paused");
    //     $scrollPrompt.hide();
    //     $(".expansion").addClass('slideleft');
    //     $nav.addClass('goup fixed-top');
    //     $brand.addClass('goleft');
    //     $(".desc").fadeOut('slow');


    //     $("#story").addClass('showpage');  
    //     $('html, body').animate({
    //     scrollTop: $("#story").offset().top - 200
  	 //  	}, 800);


    //     scrollState = 'scrolled';
    // }   
    // else if( ( scrollPos === 0 ) && ( scrollState === 'scrolled' ) ) {
    //     $scrollPrompt.css("animation-play-state", "running");
    //     $scrollPrompt.show();
    //     $(".expansion").removeClass('slideleft');
    //     $nav.removeClass('goup fixed-top');
    //     $brand.removeClass('goleft');
    //     $("#description").fadeIn()

    //     scrollState = 'top';
    // }

});



});