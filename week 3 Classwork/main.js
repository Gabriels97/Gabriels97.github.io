// Functions

//function goodBoy () {
//		console.log(dog);
//}

//goodBoy

function getArea(length, width) {
	return length * width;
	//Will not log. return end the function

	console.log('Hey');
}

//(getArea (3, 5);

var length = 3,
	width = 5;

console.log ( getArea( width,length) );

var wallOne = getArea(3, 5),
	wallTwo = getArea(2, 4);

function getVolume (length, width, height) {
	var area = width * height,
	volume = length * width * height;

	var sizes = [area, volume];

	return sizes;
}

// DRY - DON'T REPEAT YOURSELF

var objSizes = get Size(3, 2, 3),
	objArea = getSize (3, 2, 3)[0],
	objVolume = getSize(3, 2, 3)[1];

console.log(objSizes);
console.log(objArea);
console.log(objVolume);

//Objects

var array = [1, 2, 3];

var object = {
	key; 'value'
}

var dog = {
	name: 'Korben',
	breed: 'Shiba Inu',
	age: 4,
	favoriteToys: ['stuffed bee', 'squaky ball', 'bone'],
	goodBoy: function() {
		return true;
	}
}

var dogName = dog.name,
	isGoodBoy = dog.goodBoy();

console.log('before', dog);

dog.weight = 32;

delete dog.weight;

console.log('after','dog');

console.log( dog.name );
//console.log( dog['name'] );

// constructor = creates and objects
function Dog(name, breed, age, favoriteToys) {
	this.name = name;
	this.breed = breed;
	this.age = age;

	console.log(this);
}

var korben = new Dog ('Korben', 'Shiba Inu', 4),
	tugboat = new Dog ('Tugboat', 'Pit Bull', 3),
	beau = new Dog ('Beau', 'Beagle Mix', 9);

console.log(Korben),
console.log(tugboat),
console.log(beau);

var dogs = [korben, tugboat, beau];

console.log(dogs);


// Scope

// This is global Scope
var dog = 'korben';

console.log (dog);

function goodBoy() {
	console.log(dog); 
}

goodBoy();

function someThing() {
	var dog = 'korben';

	console.log('inside', dog);
}
function goodBoy() {
	console.log(dog); 
}

goodBoy();

//This is global Scope 

function someThing() {
	//This is local scope 1

	function someOtherThing() {
		// This is local scope 2 
	}

}

someThing();


// document = Document Object Model aka DOM

var kickstarter = {
	name: 'Horizon Zero Dawn Board Game',
	description: 'Hunt in a distant future where machinesroam wild and mankind is no longer the dominant species. In partnership with SIEE and Guerrilla'
	img: 'img/Horizon.jpg',
	link: 'https://www.kickstarter.com/projects/steamforged/horizon-zero-dawntm-the-board-game?ref=nav_search&result=project&term=horizon%20zero%20'
	pledges: 1076527
	backers: 7563
	timeLeft: function() {
		var second = 1000,
			minute = second * 60,
			hour = minute * 60,
			day = hour * 24;

		var timer;

		var end = new Date('09/28/2018 2:00 PM'),
			now = new Date();

		var distance = end - now;

		var days = Math.floor(distance / day),
			hours = Math.floor( (distance % day) / hour),
			minutes = Math.floor((distance % hour) / minute),
			seconds = Math.floor(( distance % minutes / second);

			// PEMDAS

			return [days, hours, minutes, seconds];

	}



	pledgeLevels: [{
		name: 'Seeker Pledge',
		price: 131,
		includes: ['Game', 'Expansion', 'Stretch Goals'],
		available: false
	},
	{
		name: 'Early Bird',
		price: 124,
		includes: ['Game', 'Expansion', 'Stretch Goals'],
		available: false
	}]
}

var link = document.getElementById('link');

var image = document.getElementById('image');

link.getContent = 'link to kickstarter';
link.href = kickstarter.link;

image.src = kickstarter.img;






