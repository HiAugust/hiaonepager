console.log("External file");

var city;
var cityFrom = "";
var cityName = "New York City";
var x = 32;

console.log("cityName, x: ", cityName, x);

var firstname = "Hector", lastname = "Agosto";
console.log("firstname, lastname", firstname, lastname);

var s = "2019";
var s2 = 2019;
var n = 2001;
console.log ("age: ", s - n);
console.log ("age: ", s + n);
console.log("age:  ", s2 + n);
var escapequotes = "This is Judi's \"city\" name";
console.log ("escapequotes: ", escapequotes);

var myArray = new Array;
//var myArray = [];
console.log("myArray: ", myArray);
myArray = [0, 1, 2, 'string1', 'string2', 'string3', true, false];
console.log("myArray, myArray[2]: ", myArray, myArray[2]);
console.log("myArray: ", myArray[5]);

var daysoftheweek = [
	"Sunday",
	"Monday",
	"Tuesday",
	"wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
console.log(daysoftheweek,daysoftheweek[0]);
var d = new Date();
console.log("date: ", d)
var getWeekDay = d.getDay();
console.log("daysoftheweek",daysoftheweek[getWeekDay], "getWeekDay", getWeekDay)

var arrayofStuff = [
	{'name': 'Judi'},
	[3,4,5],
	'nifty'
]
console.log("arrayofStuff" , arrayofStuff.length);

var nycBoroughs = [
	'Manhattan',
	'Brooklyn',
	'Queens',
	'Bronx',
	'Staten Island'
];
console.log('nycBoroughs: ', nycBoroughs, nycBoroughs[3])
nycBoroughs[3] = "The Bronx"
console.log('boroughs:', nycBoroughs, nycBoroughs[3])

/*
	Pushing list items to the end of an array
*/
console.log('nycBoroughs', nycBoroughs.length)
nycBoroughs[nycBoroughs.length] = "Westchester";
console.log('extra boroughs: ', nycBoroughs)
nycBoroughs.push("Yonkers")
console.log('push boroughs:', nycBoroughs)

// Removing last item from the array
nycBoroughs.pop();
console.log('pop boroughs: ', nycBoroughs);
console.log('what pop? ', nycBoroughs.pop());
nycBoroughs.pop(3);
console.log('pop(3) boroughs: ', nycBoroughs)

//shift(): Remove an item from the beginning of an array
nycBoroughs.shift();
console.log('what shift: ', nycBoroughs.shift());

//unshift(): Add items to the beginning of an array
nycBoroughs.unshift('Long Island');
nycBoroughs.unshift('Hudson Valley', 'Albany');
console.log('unshift boroughs: ', nycBoroughs);
console.log('unshift() returns length: ', nycBoroughs.unshift()); //unshift

//Splice (where you want to start, how many to remove)
console.log ('before splice boroughs' , nycBoroughs)
nycBoroughs.splice(2, 2);
console.log('after splice boroughs: ', nycBoroughs)

//Using a Strict
var one = 1, two = 2;
console.log('one === one', one === one);
console.log('one == one', one == one);
console.log('one === two', one ===two);
console.log('one !== two', one !== two);

var animal1 = "cow";
var animal2 = "bear";
var animal3 = "tiger";
var animal4 = "lion";
// And
console.log('animal &&', animal1 === "cow" && animal2 === "bear");

// Or
console.log('one || two', one || two);
console.log('animal1 || animal2', animal1 === "cow" || animal2 === "lion");

// Not or Bang
console.log("not true", !true);
console.log("not false", !false);
console.log('not animal1 || animal2', !(animal1 === "cow" || animal2 === "bear"));

// If statements
/*
	compare the difference between alert and window confirm.
	window.confirm()
	alert()
	*/

	var answer = window.confirm("Click Ok, get true. Click Cancel, get false.");
	answer; // Execute function

	// alert('alert box');
	console.log("click answer: ", answer)
	if (answer === true) {
		console.log("You clicked Ok.");
	}

	//If Else statement
	if (answer === true) {
		console.log("You clicked Ok.");
	} else {
		console.log("You clicked Cancel.");
	}

	var answer = window.prompt("Type YES, NO, MAYBE. then click Ok");
	if (answer === 'YES') {
		console.log("you wrote YES.");
	}
	else if(answer === 'MAYBE') {
		console.log("You wrote MAYBE.");
	}
	else if(answer === 'NO') {
		console.log("You wrote NO.");
	}
	else {
		console.log('else answer', answer);
		//console.log('Boolean(answer.length)	answer.length	answer', Boolean(answer.length)
		// Boolean(answer.length)	answer.length	answer
		if (answer) {
			console.log("You Wrote:", answer);
	} else {
		console.log("Empty");
	}
}

switch(answer) {
  	case "YES":
	  	// code block
		console.log("You wrote YES.");
		break;
  	case "MAYBE":
  		//code block
  		console.log("You wrote MAYBE");
  		break
  	case "NO":
  		// code block
  		console.log("You wrote NO.");
  		break;
  	default:
  		//code block
  		console.log("You wrote: ", answer); 
	}


// One line If statement
var fname = "FirstName"
	if (fname === "firsName") console.log("firsst name", fname);

	var transportation = "bicycle", birthdayGift = "bicycle", iGot = false;
	//birthdayGift = "metrocard"
	if( transportation === birthdayGift) {
		console.log("YAY!")
		iGot = false;
	}	else {
		console.log('Oh no! I need to give more hints.');
		iGot = true;
	}
if (iGot) { console.log("Cry, WAAAAAA!") }
if (!iGot) { console.log("Scream, WEEEEEE!")}