$(document).ready(function () {
	$('button').on('click', function(e){
		$('a').fadeOut();

		var searchTerms = $('input').val();

		var ur =  ;

		$.ajax({
			type: 'GET',
			url: url,
			beforeSend: funtion() {
				$('body').append('<h5 id="load">LOADING</h5>');
			},
			complete: function() {
				$('#load').remove();
			},
			success: function(data) {
				console.log('Success!', data);
			},
			error: function() {
				console.log("Oh no somehing isn't working!");
			}
			
		});

	});