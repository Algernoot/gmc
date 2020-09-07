$(document).ready(function() {

    /** Navbar settings(color changing scroll animation) */

    //If there is navbar animation on scroll(pages with bg image)
    if ($('#startchange').length) {
        var scroll_start = 0;
        var startchange = $('#startchange');
        var offset = startchange.offset();
        if (startchange.length) {
            $(document).scroll(function() {
                scroll_start = $(this).scrollTop();
                if (scroll_start > offset.top - 100) {
                    $(".navbar").css('background-color', 'black');
                } else {
                    $('.navbar').css('background-color', 'transparent');
                }
            });
        }
    } else {
        $(".navbar").css('background-color', 'rgba(0, 0, 0, 0.8)');
        $(".wrapper").css('padding-top', '80px');
    }

    //hide search bar when moving to another page (Buggy when redirecting)
    $('#nav-search').parent().hide().delay(200).slideDown("slow");



    /** End of Navbar settings */

    $('body').on('click', '.event-card', function() {
        window.location.href = "/events/eventId";
    });
    $('body').on('click', '.artist-block', function() {
        window.location.href = "/artists/artistId";
    });

    var playersrc = "none";
    $('.event-card').hover(function(){
        
        playersrc = $(this).find('iframe').attr("src");
        $(this).find('iframe').attr("src", playersrc+"&autoplay=1");
    }, function(){
        $(this).find('iframe').attr("src",playersrc);
    });

});