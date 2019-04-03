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
console.log('pop boroughts: ', nycBoroughs)
nycBoroughs.pop(3);
console.log('pop(3) boroughs: ', nycBoroughs)

//Splice (where you want to start, how many to remove)
nycBoroughs.splice(2, 2)