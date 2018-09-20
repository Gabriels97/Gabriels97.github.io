var kickstarter = {
    name: 'Mezmoglobe',
    description: 'Revolving sphere that creates a mind-bending 360 degree optical illusion of continuously flowing helix.',
    img: 'MEZMOGLOBE.gif',
    link: 'https://www.kickstarter.com/projects/1303595549/mezmoglobetm-kinetic-desk-toy-with-full-body-optic?ref=discovery',
    pledges: 104638,
    backers: 1854,
    price: 35,
    timeLeft: function () {
        var _second = 1000,
            _minute = _second * 60,
            _hour = _minute * 60,
            _day = _hour * 24;

        //var timer;

        var end = new Date('10/15/2018 11:00 AM'),
            now = new Date();

        var distance = end - now;

        var days = Math.floor(distance / _day),
            hours = Math.floor((distance % _day) / _hour),
            minutes = Math.floor((distance % _hour) / _minute),
            seconds = Math.floor((distance % _minute) / _second);

        return [days, hours, minutes, seconds];
    }
};

pledgeLevels: [{
			name: '5x MEZMOGLOBE',
			price: 124,
			includes: [ 'Five Mezmoglobes in any color)', 
			 	'- discounted price',
                '- Free Shipping'],
			availible: true
		},
		{
			name: '2x MEZMOGLOBE',
			price: 53,
			includes: [ '2 Mezmoglobes in any color)', 
			 	'- discounted price',
				'- Free Shipping'],
			available: false
		}
	]
;

kickstarter.img = "MEZMOGLOBE.gif";

var description = document.getElementById('description');
description.innerHTML = '<b><u>Description</u></b>: ' + kickstarter.description + '<br><br>';

var price = document.getElementById('price');
price.innerHTML = '<b><u>Price</b></u>: ' + '$' + kickstarter.price + '<br><br>';

var pledges = document.getElementById('pledges');
pledges.innerHTML = '<b><u>Pledges</b></u>: ' + kickstarter.pledges + '<br><br>';

var backers = document.getElementById('backers');
backers.innerHTML = '<b><u>Backers</b></u>: ' + kickstarter.backers;


var timeLeft = kickstarter.timeLeft();

var timer = document.getElementById('timer');
timer.innerHTML = timeLeft[0] + "d" + " " + timeLeft[1] + "h" + " " + timeLeft[2] + "m" + " " + timeLeft[3] + "s" + " ";
