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

    //check if search input is empty
    $('body').on('click', '#nav-btn-search', function() {
        if ($('#nav-search').val() === '') {
            $('#nav-search').focus();
            return false;
        }
    })


    /** End of Navbar settings */

    $('body').on('click', '.event-card', function() {
        let id = $(this).attr('data');

        window.location.href = "/events/" + id;
    });
    $('body').on('click', '.artist-block', function() {
        let id = $(this).attr('data');

        window.location.href = "/artists/" + id;
    });

    var playersrc = "none";
    $('.event-card').hover(function() {

        playersrc = $(this).find('iframe').attr("src");
        $(this).find('iframe').attr("src", playersrc + "&autoplay=1");
    }, function() {
        $(this).find('iframe').attr("src", playersrc);
    });

    //MUSIC PLAYER SCRIPTS

    //get audio
    var audio = $('audio')[0];

    //breath animation
    function breath(object) {
        setInterval(function() {
            object.animate({ opacity: 0.5 }, 'slow').delay(500);
            object.animate({ opacity: 1 }, 'slow').delay(500);
        });
    }

    //Play to pause icon fade
    $('body').on('click', '.fa-play-circle', function() {
        $(this).fadeOut(200);
        audio.play();
        let icon = this;
        setTimeout(function() {
            icon.classList.remove('fa-play-circle');
            icon.classList.add('fa-pause-circle');
            breath($('.fa-pause-circle'));
        }, 200);
        $(this).fadeIn(500);
    });

    //Pause to play icon fade
    $('body').on('click', '.fa-pause-circle', function() {
        $(this).fadeOut(200);
        audio.pause();
        let icon = this;
        setTimeout(function() {
            icon.classList.remove('fa-pause-circle');
            icon.classList.add('fa-play-circle');
            breath($('.fa-play-circle'));
        }, 200);
        $(this).fadeIn(500);

    });

    //move audio time using mouse click
    $('body').on('click', '.progress', function(e) {
        var mouseX = e.pageX;
        var barX = $(this).offset().left;
        audio.currentTime = Math.floor((mouseX - barX) / 2);
    });

    //progress bar
    audio.ontimeupdate = function() {
        $('.progress').css('background', 'linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(2, 0, 36, 1) ' + audio.currentTime / audio.duration * 100 + '%, rgba(0, 192, 103, 1) 0%, rgba(0, 0, 0, 0.75) 100%');

        if (audio.currentTime == audio.duration) {
            $('.fa-pause-circle').click();
            audio.currentTime = 0;
        }
    }

    //progress bar breath animation
    breath($('.progress'));

    //END OF MUSIC PLAYER SCRIPTS
});