function scroll_to_next_page(currentPageID, nextPageID) {
    $curPage = $(currentPageID);
    $nxtPage = $(nextPageID);
    $curPage.css({ opacity: 0 });
    $nxtPage.css({ opacity: 1 });
}

$(document).ready(function() {
    console.log("doc ready");

    $scrollPrompt = $(".downscroll");
    $nav = $(".page-one");
    $brand = $(".logo-container");

    var scrollState = "top";

    var txt = '<span class="logo-span expansion">ersational </span>';
    function down_from_first() {
        $scrollPrompt.css("animation-play-state", "paused");
        $scrollPrompt.hide();
        $(".expansion").addClass("slideleft");
        $nav.addClass("goup fixed-top");
        $brand.addClass("goleft");
        $(".desc").fadeOut("slow");

        $curPage = $("#story");
        $nxtPage = $("#problem");

        // $curPage.addClass("showpage");


        scrollState = "scrolled";
    }

    function up_to_first() {
        $("html, body").animate({
            scrollTop: 0
        });
        $scrollPrompt.css("animation-play-state", "running");
        $scrollPrompt.show();
        $(".expansion").removeClass("slideleft");
        $nav.removeClass("goup");
        $brand.removeClass("goleft");
        $(".desc").delay(1000).fadeIn();

        scrollState = "top";
    }

    $(window).scroll(function() {

        var scrollPos = $(window).scrollTop();
        // var scrollBottom = scrollPos + $(window).height();
        // var pageBottom = $curPage.offset().top + $curPage.height();

        if (scrollPos > 10 && scrollState === "top") {
            down_from_first();
        }
        if (scrollPos < 10 && scrollState === "scrolled") {
            up_to_first();
        }
    });
});
