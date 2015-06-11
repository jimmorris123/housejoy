$(document).ready( function() {
				
				$('[data-responsive-tabs]').responsivetabs(
				{
					initialised : function ()
					{
						//console.log(this);
					},

					// change : function (newPanel)
					// {
					// 	console.log(newPanel);
					// }
				});

				// $('[payment-methos-tabs]').responsivetabs(
				// {
				// 	initialised : function ()
				// 	{
						
				// 	},
					
				// });

				// *************************************************************
			    // custom dropdown script multiple
			    $('.dropdown-select').on( 'click', '.dropdown-menu li a', function() { 
			    	var target = $(this).html();

				   //Adds active class to selected item
				   $(this).parents('.dropdown-menu').find('li').removeClass('active');
				   $(this).parent('li').addClass('active');

				   //Displays selected text on dropdown-toggle button
				   $(this).parents('.dropdown-select').find('.dropdown-toggle').html(target + ' <span class="caret pull-right"><i class="i-close"></i></span>');
				});//end

				
			    // *************************************************************
			});