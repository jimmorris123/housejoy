$(document).ready(function() {  
// *************************************************************
    // accordian script for perticular section
    // $('.main-workflow .main-heading .main-title a').click(function(){
    // 	if($(this).parents('.main-workflow').hasClass('W100')){
    // 		$(this).parents('.main-workflow').removeClass('W100');
    // 		// $(this).find('span.check-big').hide();
    // 		// $(this).find('span.edit-big').show();
    // 	}else{
    // 		$('.main-workflow .main-heading .main-title a').parents('.main-workflow').removeClass('W100');
    // 		$(this).parents('.main-workflow').addClass('W100');
    // 		// $(this).find('span.check-big').show();
    // 		// $(this).find('span.edit-big').hide();
    // 	}

    // 	if($(this).hasClass('f-24')){
    // 		$(this).removeClass('f-24');
    // 	} else{
    // 		$('.main-workflow .main-heading .main-title a').removeClass('f-24');
    // 		$(this).addClass('f-24');
    // 	}
    // });
	// end

	// accordian section one (facial service content)
	$('.select-services #facials').click(function(){
		$('.facial-details').show();	
		$('.select-services').hide();	
		$('#workflow_one').empty();
		$('.select-services #facials .title').clone().appendTo('#workflow_one').css({'color':'#555'});
		$('.back-arrow').show();	
		$('.location-dropdown').hide();	
	});
	// end

	// Back button script (facial service content)
	$('.back-arrow').click(function(){	
		$('.select-services').show();
		$('.facial-details').hide();
		$('#workflow_one').empty().append('Select a Service');
		$('.back-arrow').hide();
		$('.location-dropdown').show();	
	});
	// end 

	// accordian section one (hair service content)
	$('.select-services #hair-trim').click(function(){
		$('.hair-cut-detail').show();	
		$('.select-services').hide();	
		$('#workflow_one').empty();
		$('.select-services #hair-trim .title').clone().appendTo('#workflow_one').removeClass('clr-golden');
		$('.back-arrow').show();
		$('.location-dropdown').hide();		
	});
	// end

	// Back button script (hair service content)
	$('.back-arrow').click(function(){	
		$('.select-services').show();
		$('.hair-cut-detail').hide();
		$('#workflow_one').empty().append('Select a Service');
		$('.location-dropdown').show();	
	});
	// end 

	// accordian section one (detanning service content)
	$('.select-services #detanning').click(function(){
		$('.detanning-detail').show();	
		$('.select-services').hide();	
		$('#workflow_one').empty();
		$('.select-services #detanning .title').clone().appendTo('#workflow_one');
		$('.back-arrow').show();
		$('.location-dropdown').hide();		
	});
	// end

	// Back button script (detanning service content)
	$('.back-arrow').click(function(){	
		$('.select-services').show();
		$('.detanning-detail').hide();
		$('#workflow_one').empty().append('Select a Service');
		$('.location-dropdown').show();	
	});
	// end 

	// accordian section one (head-massage service content)
	$('.select-services #head-massage').click(function(){
		$('.head-massage-detail').show();	
		$('.select-services').hide();	
		$('#workflow_one').empty();
		$('.select-services #head-massage .title').clone().appendTo('#workflow_one');
		$('.back-arrow').show();	
		$('.location-dropdown').hide();	
	});
	// end

	// Back button script (head-massage service content)
	$('.back-arrow').click(function(){	
		$('.select-services').show();
		$('.head-massage-detail').hide();
		$('#workflow_one').empty().append('Select a Service');
		$('.location-dropdown').show();	
	});
	// end 
	// accordian section one (mobile-repair service content)
	$('.select-services #mobile-repair').click(function(){
		$('.mobile-repair-detail').show();	
		$('.select-services').hide();	
		$('#workflow_one').empty();
		$('.select-services #mobile-repair .title').clone().appendTo('#workflow_one');
		$('.back-arrow').show();	
		$('.location-dropdown').hide();	
	});
	// end

	// Back button script (mobile-repair service content)
	$('.back-arrow').click(function(){	
		$('.select-services').show();
		$('.mobile-repair-detail').hide();
		$('#workflow_one').empty().append('Select a Service');
		$('.location-dropdown').show();	
	});
	// end 
	// accordian section one (laptop-repair service content)
	$('.select-services #laptop-repair').click(function(){
		$('.laptop-repair-detail').show();	
		$('.select-services').hide();	
		$('#workflow_one').empty();
		$('.select-services #laptop-repair .title').clone().appendTo('#workflow_one');
		$('.back-arrow').show();	
		$('.location-dropdown').hide();	
	});
	// end

	// Back button script (laptop-repair service content)
	$('.back-arrow').click(function(){	
		$('.select-services').show();
		$('.laptop-repair-detail').hide();
		$('#workflow_one').empty().append('Select a Service');
		$('.location-dropdown').show();	
	});
	// end 
	// accordian section one (appliances service content)
	$('.select-services #appliances').click(function(){
		$('.appliances-detail').show();	
		$('.select-services').hide();	
		$('#workflow_one').empty();
		$('.select-services #appliances .title').clone().appendTo('#workflow_one');
		$('.back-arrow').show();	
		$('.location-dropdown').hide();	
	});
	// end

	// Back button script (appliances service content)
	$('.back-arrow').click(function(){	
		$('.select-services').show();
		$('.appliances-detail').hide();
		$('#workflow_one').empty().append('Select a Service');
		$('.location-dropdown').show();	
	});
	// end
	// accordian section one (fitness service content)
	$('.select-services #fitness').click(function(){
		$('.fitness-detail').show();	
		$('.select-services').hide();	
		$('#workflow_one').empty();
		$('.select-services #fitness .title').clone().appendTo('#workflow_one');
		$('.back-arrow').show();	
		$('.location-dropdown').hide();	
	});
	// end

	// Back button script (fitness service content)
	$('.back-arrow').click(function(){	
		$('.select-services').show();
		$('.fitness-detail').hide();
		$('#workflow_one').empty().append('Select a Service');
		$('.location-dropdown').show();	
	});
	// end 
	// accordian section one (laundry service content)
	$('.select-services #laundry').click(function(){
		$('.laundry-detail').show();	
		$('.select-services').hide();	
		$('#workflow_one').empty();
		$('.select-services #laundry .title').clone().appendTo('#workflow_one');
		$('.back-arrow').show();	
		$('.location-dropdown').hide();	
	});
	// end

	// Back button script (head-massage service content)
	$('.back-arrow').click(function(){	
		$('.select-services').show();
		$('.laundry-detail').hide();
		$('#workflow_one').empty().append('Select a Service');
		$('.location-dropdown').show();	
	});
	// end 
	// accordian section one (carpentry service content)
	$('.select-services #carpentry').click(function(){
		$('.carpentry-detail').show();	
		$('.select-services').hide();	
		$('#workflow_one').empty();
		$('.select-services #carpentry .title').clone().appendTo('#workflow_one');
		$('.back-arrow').show();	
		$('.location-dropdown').hide();	
	});
	// end

	// Back button script (carpentry service content)
	$('.back-arrow').click(function(){	
		$('.select-services').show();
		$('.carpentry-detail').hide();
		$('#workflow_one').empty().append('Select a Service');
		$('.location-dropdown').show();	
	});
	// end 
	// accordian section one (pest-control service content)
	$('.select-services #pest-control').click(function(){
		$('.pest-control-detail').show();	
		$('.select-services').hide();	
		$('#workflow_one').empty();
		$('.select-services #pest-control .title').clone().appendTo('#workflow_one');
		$('.back-arrow').show();	
		$('.location-dropdown').hide();	
	});
	// end

	// Back button script (pest-control service content)
	$('.back-arrow').click(function(){	
		$('.select-services').show();
		$('.pest-control-detail').hide();
		$('#workflow_one').empty().append('Select a Service');
		$('.location-dropdown').show();	
	});
	// end 
	// ***********************************************************
});