ready = function(){

		$(".menu").click( function() {
			console.log("menu selected");
			$(this).slideToggle(600);
		});
		
		$("#menu-icon").click( function() {
			console.log("menu-icon selected");
			$(".menu").slideToggle(600);
		});

};

$(document).ready(ready);
$(document).on('page:load', ready);
