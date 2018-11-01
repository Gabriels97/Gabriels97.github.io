$(document.ready(function (){
	
	//getiing something from a server/database
	//post = adds information to a server/database
	
	$('nav a').on('click', function() {

		e.preventDefault();

	// this === e.target

var url = this.href;

	var $content = $('#content');

	$.ajax({
		type: "Get",
		url: url,
		beforeSend: function() {
			$('.container').append('<h1 id="load">LOADING</h1>');
		},
		complete: function () {
			$('#load').remove();
		},
		success: function(data) {
			$('.container').html(
				$(data).find('#container').fadeIn(400)
				);
			},
			error: function() {
				console.log('there was an error');
			}
		});
	});
});