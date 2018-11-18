$(document).ready(function(){
    $('#nav-menu').click(function(){
        $('ul.nav-list').addClass('open').slideToggle('200');
    });
});

$(window).load(function() {

	var theWindow        = $(window),
	    $bg              = $("#bg"),
	    aspectRatio      = $bg.width() / $bg.height();

	function resizeBg() {

		if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
		    $bg
		    	.removeClass()
		    	.addClass('bgheight');
		} else {
		    $bg
		    	.removeClass()
		    	.addClass('bgwidth');
		}

	}

	theWindow.resize(resizeBg).trigger("resize");

});
