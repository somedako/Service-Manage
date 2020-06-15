$(function() {

    let header = $("#header");
    let content = $("#content");
    let contentH = content.height();
    let scrollPos = $(window).scrollTop();

    checkScroll(scrollPos, contentH);

    $(window).on("scroll resize", function() {
        contentH = content.height();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, contentH);
    });

    function checkScroll(scrollPos, contentH) {
          if (scrollPos > contentH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }



    let nav = $("nav");
    let navToggle =  $("#navToggle");


    $("#navToggle").on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });


});
