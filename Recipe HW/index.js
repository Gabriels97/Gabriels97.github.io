$(document).ready(function () {
	var $menu = $('li.list__item');

	$menu.on('click', function(e) {
		var $target = $(e.target);

		if ($target.text() === 'Recipe1') {
			$('.Recipe1.sublist').slideToggle(500);
		} else {
			$('.Recipe.sublist').slideUp(500);
		}
	});

	var $submenu = $('li.sublist__item');

	$submenu.on('click', function(e) {
		$('.ingredients-info').hide();

		var $target = $(e.target);

		var dataType = $target.data('type');

		$('.' + dataType).fadeIn(300);
	});
});