"use strict"

$(document).ready(function(){

	$('a').click(function(event){
		event.preventDefault();


		$('.parapara').hide();
		var val=$(this).attr('href');
		$(val).show();


	});

});

$.getJSON("user-8.json", function(data){
	var tutu= $("[elt]");
	for(var m=0; m<tutu.length; m ++){
		var attribut= $(tutu[m]).attr("elt");
		var valeur= data [attribut];
		$(tutu[m]).html(valeur);


	console.log(data);
}
});

