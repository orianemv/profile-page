"use strict"

$(document).ready(function(){

	$('body').on("click", "a", function(event){
		event.preventDefault();

		var val=$(this).attr('href');
		$('.parapara').hide();
		$(val).show();




		// if(val=='#modalbox'){
		// 	$(modalbox).show();
		// } 

		// else{
		// 	$('#modalbox').hide();
		// 	$(val).show();
		// };

		

	});






	// var url = 'https://s.idsympa.com/u-8.json'
	// var url ='user-8.json'


	$.getJSON('https://s.idsympa.com/u-8.json', function(data) {

		var template =$('#template').html();
		var rendered = Mustache.to_html(template, data);
		$('body').html(rendered);

	});




});



