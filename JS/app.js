"use strict"

$(document).ready(function(){

	$('a').mouseenter(function(event){
		event.preventDefault();


		$('.parapara').hide();
		var val=$(this).attr('href');
		$(val).show();


	});

// 	$.getJSON('http://vps227573.ovh.net/u-8.json', function(data){
// 	var tutu= $('[elt]');
// 	for(var m=0; m<tutu.length; m ++){
// 		var attribut= $(tutu[m]).attr("elt");
// 		var valeur= data [attribut];
// 		$(tutu[m]).html(valeur);


// 	// console.log(data);
// }
// });

	
		//     // var Full_Name = '{{first_name}} {{last_name}}';
		//     var infoFull_Name = Mustache.to_html('{{first_name}} {{last_name}}', data);
		//     $('h1').html(infoFull_Name);
		    

		// 	// var occupation = '{{occupation}}';
		//     var infooccupation = Mustache.to_html('{{occupation}}', data);
		//     $('h3').html(infooccupation);
		// });


	$.getJSON('http://vps227573.ovh.net/u-8.json', function(data) {

		var template =$('#template').html();
		var rendered = Mustache.to_html(template, data);
		$('body').html(rendered);


});


});



