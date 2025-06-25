

if (CZBOX_LAYOUT == 1) {
	$('body').addClass('box_layout')
}
if (CZSTICKY_HEADER == 1) {
	function stickyheader(){		 
		// ---------------- Fixed header ----------------------
		$(window).bind('scroll', function () {
			if ($(window).scrollTop() > 220) {
				$('#header').addClass('fixed');
			} else {
				$('#header').removeClass('fixed');
			}
		}); 
	}

	$(document).ready(function(){stickyheader();});
	$(window).resize(function(){stickyheader();});
}