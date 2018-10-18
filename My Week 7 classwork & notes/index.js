// var element1 = document.getElementById('element')

// //document.querySelector();

// //document.querySelectorAll();
// // $selector. cant differentiate one thing or many things



// var element2 = $('#element');

// // $('#id')

// // $('.class')

// // $('div')

// // $('li.red')

// // $('li.left-side.red')



// console.log(element1)
// console.log(element2);

// var $element = $('#element');

// var $list = $('li');

// document.getElementById('element').innerHTML = 'hey' vv just replace text with "html" and its the same
// $element.text('hey')

// hold off on JS until everything is ready and loaded for it to start 
// same as $(function () {}) 

$(document).ready(function () {

var $element = $('#element');

var $list = $('li'); 

$element.prepend('<h1>hey</h1>')
		.fadeIn(10000);
		.child()
		.addClass('pink');

	$('#first').removeClass('pink');

	$('#second').animate({
		'font-size'; '20px',
		'color'; 'lightcoral'
	}, 1000);	 
});

// animate the styles in the html needs to have a point A and a point B for it to be animated. if it is just on JS its only gonna have a pont B. Its going to be in the course of 1 second. the <style> on HTML is going to be the starting point. 


$(document).ready(function () {

	var $element = $('#element');

	var $list = $('li'); 

	$list.each(function(){
		console.log( $(this).append('hey');
	});

		//


$(document).ready(function () {

	var $element = $('#element');

	var $list = $('li');

	console.log($list);

	$list.on('click', function(e) {
			$(e.target).toggleClass('pink')
	});
})

$(document).ready(function () {
	var $menu = $('li');

	console.log(menu)

	$menu.on('mouseover', function(e) {
		$(e.target).css({
			'color'; 'white',
			'text-decoration'; 'none'

		});
	});






