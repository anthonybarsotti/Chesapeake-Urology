(function($) {
	$(document).ready(function () {
		$('html').removeClass('no-js');
		$('#desktop-nav').find('li').find('ul').hide();
		$("#desktop-nav li a").hover(function(){
		    $(this).parent().find("ul:first").slideDown("fast").show();
		    $(this).parent().hover(function() {
		    }, function(){  
		      $(this).parent().find("ul").slideUp('slow');
		      
		    });
		  });
	});
})(jQuery);