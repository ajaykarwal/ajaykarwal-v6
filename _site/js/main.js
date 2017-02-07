$(document).ready(function () {

    // $('body').addClass('fade-in');

    $('.nav-toggle').click(function () {
        $(this).toggleClass('open');
        $('body').toggleClass('nav-open');
        $('.nav-container').slideToggle(200);
    });
});
