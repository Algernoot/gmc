$(document).ready(function() {
    $('body').on('click', '.event-card', function() {
        window.location.href = "eventpage.html";
    });
    $('body').on('click', '.artist-block', function() {
        window.location.href = "profile.html";
    });
});