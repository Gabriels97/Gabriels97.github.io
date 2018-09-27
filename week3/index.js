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
    },
    pledgeLevels: [
        {
			name: '5x MEZMOGLOBE',
			price: 128,
			includes: [ '5 Mezmoglobes in any color)', 
			 	'- discounted price',
                '- Free Shipping'],
			availible: true
		},
        {
            name: '4x MEZMOGLOBE',
            price: 104,
            includes: [ '4 Mezmoglobes in any color)',
                '- discounted price',
                '- Free Shipping'],
            available: true
        },
        {
            name: '3x MEZMOGLOBE',
            price: 81,
            includes: [ '3 Mezmoglobes in any color)',
                '- discounted price',
                '- Free Shipping'],
            available: false
        },
        {
			name: '2x MEZMOGLOBE',
			price: 59,
			includes: [ '2 Mezmoglobes in any color)', 
			 	'- discounted price',
				'- Free Shipping'],
			available: false
		},
        {
            name: '1x MEZMOGLOBE',
            price: 30,
            includes: [ '1 Mezmoglobe in any color)',
                '-discounted price',
                '-Free Shipping'],
            available: false
        },
	]
};

kickstarter.img = "MEZMOGLOBE.gif";

var description = document.getElementById('description');

if (description) {
    description.innerHTML = '<b><u>Description</u></b>: ' + kickstarter.description + '<br><br>';
}

var price = document.getElementById('price');

if (price) {
    price.innerHTML = '<b><u>Price</b></u>: ' + '$' + kickstarter.price + '<br><br>';
}

var pledges = document.getElementById('pledges');

if (pledges) {
    pledges.innerHTML = '<b><u>Pledges</b></u>: ' + kickstarter.pledges + '<br><br>';
}

var backers = document.getElementById('backers');

if (backers) {
    backers.innerHTML = '<b><u>Backers</b></u>: ' + kickstarter.backers;
}


var timeLeft = kickstarter.timeLeft();

var timer = document.getElementById('timer');

if (timer) {
    timer.innerHTML = timeLeft[0] + "d" + " " + timeLeft[1] + "h" + " " + timeLeft[2] + "m" + " " + timeLeft[3] + "s" + " ";
}


//var kickstarter = ['description', 'price', 'pledges', 'backers', 'timeLeft'];

for (a = 0; a < kickstarter.length; a++) {

    var kickstarterElement = document.getElementById('kickstarters-container' );

    kickstarterElement.innerHTML += '<h3 id=" kickstarter' + a + '">' + kickstarter[a] + '</h3>';

    console.log(kickstarter.length)
}



var kickstartersElement = document.getElementById('kickstarter-container' );

console.log(kickstartersElement);

for (i = 0; i < kickstarter.pledgeLevels.length; i++) {
    console.log(i);

    kickstartersElement.innerHTML += '<h1 id="name' + i + '">' + kickstarter.pledgeLevels[i].name + '</h1>';
    kickstartersElement.innerHTML += '<h3 id="price' + i + '">$' + kickstarter.pledgeLevels[i].price + '</h3>';

    for (j = 0; j < kickstarter.pledgeLevels[i].includes.length; j++) {
        console.log(j);

        kickstartersElement.innerHTML += '<p>' + kickstarter.pledgeLevels[i].includes[j] + '</p>'; 
            console.log(j)
}
}

// Cool things you can do for homework:

// 1. Some pleges are no longer available (set to false). Use an if statements and classes to change the styles of unavailable levels

// 2. Add more of the pledge levels

// 3. Use for loops to add more images

// 4. Use loops to add the time left

// 5. Add another array inside of pledgeLevels and display those 
        // prices: [60, 70]

// 6. Append EVERY ELEMENT only using loops

// keys = list of all parameter/method names
// var keys = ['name', 'description', 'img'];

/*
    loop through keys

    another way of calling an object parameter = kickstarter['name'] 

    hint: kickstarter[ keys[i] ] 
    
    not everything is text! use if statements to trigger various meethods

    hint if img, update the src attribute (document.getElementById('id').src) if it's not img, use .textContent

*/
