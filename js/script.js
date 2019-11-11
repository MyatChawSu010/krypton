$(document).ready(function() {
    $("body").mCustomScrollbar({
        theme:"minimal"
    });

    $("#mouse").click(function() {
        $("body").mCustomScrollbar("scrollTo", $('body').find('.mCSB_container').find('#web'));
    });
})