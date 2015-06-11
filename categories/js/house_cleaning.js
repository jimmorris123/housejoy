$(document).ready(function(){

	// custom dropdown script multiple
	$('.dropdown-select').on( 'click', '.dropdown-menu li a', function() { 
		var target = $(this).html();
	   //Adds active class to selected item
	   $(this).parents('.dropdown-menu').find('li').removeClass('active');
	   $(this).parent('li').addClass('active');
	   //Displays selected text on dropdown-toggle button
	   $(this).parents('.dropdown-select').find('.dropdown-toggle').html(target + ' <span class="caret pull-right"><i class="fa fa-chevron-down"></i></span>');
	});//end
});