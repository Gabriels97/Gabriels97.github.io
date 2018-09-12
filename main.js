// console.log = prints parameters to the console
//console.log('Hello');

var word = 'Hello';

console.log(word);

var sayHello = 'Hello!';

// integers = numbers
var number = 3;

// string = 'word characters'
var string = 'Hello';

//Boolean = true or false 
var boolean = true

// Arrays = lists of things
var Arrays = ['Hey', 'Hi', 'Howdy'];

var numbers = [1, 3, 5, 7,];

var mix = ['Hey', 2];

var arrayOfArrays = [['1', '2'], [3,4]]

console.log( arrayOfArrays[0][1] );

// Math! + - / *
//console.log(parseInt('5') + parseInt('1'));

var name = 'Gabriel';

// console.log('Hello' + name);

var firstWord = ['a mouse', 'a cat', 'a dinosaur'],
	secondWord = ['dance', 'hike', 'play fetch with my dog'],
	thirdWord = ['exciting', 'motivated', 'happy'],
	fourthWord = ['bitter', 'unmotivated', 'unhappy'],
	fifthWord = ['play sports', 'go to the gym', 'hang out with friends'],
	sixthWord = ['distract', 'entertain', 'focus'],
	seventhWord = ['develop', 'advance', 'progress'],
	eighthWord = ['the Eifel Tower', 'Yankee Stadium', 'the Colosseum'],
	ninthWord = ['important', 'necessary', 'useful'],
	tenthWord = ['doing great', 'worriless', 'living well'];

var randomFirstWord = Math.floor( Math.random() * firstWord.length),
	randomSecondWord = Math.floor( Math.random() * secondWord.length),
	randomThirdWord = Math.floor( Math.random() * thirdWord.length),
	randomFourthWord = Math.floor( Math.random() * fourthWord.length),
	randomFifthWord = Math.floor( Math.random() * fifthWord.length),
	randomSixthWord = Math.floor( Math.random() * sixthWord.length),
	randomSeventhWord = Math.floor( Math.random() * seventhWord.length),
	randomEighthWord = Math.floor( Math.random() * eighthWord.length),
	randomNinthWord = Math.floor( Math.random() * ninthWord.length),
	randomTenthWord = Math.floor( Math.random() * tenthWord.length);

var first = document.getElementById('first-word'),
	second = document.getElementById('second-word'),
	third = document.getElementById('third-word'),
	fourth = document.getElementById('fourth-word'),
	fifth = document.getElementById('fifth-word'),
	sixth = document.getElementById('sixth-word'),
	seventh = document.getElementById('seventh-word'),
	eighth = document.getElementById('eighth-word'),
	ninth = document.getElementById('ninth-word'),
	tenth = document.getElementById('tenth-word');

first.textContent = firstWord[randomFirstWord],
second.textContent = secondWord[randomSecondWord],
third.textContent = thirdWord[randomThirdWord],
fourth.textContent = fourthWord[randomFourthWord],
fifth.textContent = fifthWord[randomFifthWord],
sixth.textContent = sixthWord[randomSixthWord],
seventh.textContent = seventhWord[randomSeventhWord],
eighth.textContent = eighthWord[randomEighthWord],
ninth.textContent = ninthWord[randomNinthWord],
tenth.textContent = tenthWord[randomTenthWord];