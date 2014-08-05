(function ($) {
	$(document).ready(function() {	
		$('h3#portfolio-skills').click(function(){
			$('div#portfolio-tag-cloud').load('/tagadelic_taxonomy ul.tag-cloud');
		});
	});
})(jQuery);