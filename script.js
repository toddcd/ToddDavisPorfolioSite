'use-strict';

// open nav panel
$('.fa-bars').click(function () {

    if ( $(".nav_panel").is( ":hidden" ) ) {
        $(".nav_panel").slideDown( "fast" );
        $(".nav_panel").css('display', 'flex');
        $(".nav_panel").css('flex-direction', 'column');
    } else {
        $(".nav_panel").slideUp("fast");
    }
});


