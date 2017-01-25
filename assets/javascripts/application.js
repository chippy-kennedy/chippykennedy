#= require 'jquery-3.1.1.slim.min'
#= require 'tether.min.js'
#= require 'bootstrap.js'
#= require 'bootstrap.min.js'

$(document).ready(function() {
		$("#phone").click( function() {
			$(this).children("i").toggle();
			$(this).children("p").toggle();
		});
});

