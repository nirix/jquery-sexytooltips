/*!
 * Sexy tooltips
 * Copyright (c) 2012 Nirix
 * All Rights Reserved
 * Released under the BSD 3-clause lisence.
 */
(function($){
	$.fn.sexyTooltip = function() {
		var e = $(this);

		// Check if the tooltip container exists...
		if (!$('#sexytooltip').length) {
			$('body').append('<div id="sexytooltip"></div>');
		}
		else
		{
			$('#sexytooltip').hide();
		}

		// Shortcut for the tooltip container
		var tip = $('#sexytooltip');

		// Move the title attribute to data-tooltip
		// so the browser doesnt display the ugly one.
		if (e.attr('title')) {
			e.attr('data-tooltip', e.attr('title'));
			e.attr('title', null);
		}

		// Display it
		tip.html(e.attr('data-tooltip'))
			.css({
				left: (e.offset().left + e.width()) + 'px',
				top: (e.offset().top - (tip.height() / 2) + (e.height() / 2) - 2) + 'px',
			})
			.fadeIn('fast', function(){
				e.mouseleave(function(){ tip.stop(true, true).fadeOut('fast'); });
			})
	}

	// Add a hover event to all abbreviation elements inside
	// a form for sexy tooltips.
	$(document).on({
		mouseenter: function(){
			$(this).sexyTooltip();
		}
	}, '.sexytooltip');
})(jQuery);