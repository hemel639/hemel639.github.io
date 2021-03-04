var name ='Lara';
console.log(name);
//
var myFavNumber = 4;
console.log(myFavNumber);
//
var myFavNumber ='4';
console.log(myFavNumber);
//
var here = ('true');
console.log('here');
//
console.log('L', 'a', 'r', 'a');
//
console.log(202.1 * 10, 'Year', true);
//
var firstName = 'Lara';
var lastName = 'Hemels';
console.log(firstName,lastName);
//
console.log(50 + 50);
//
function firstNameAndLastName(array) {

var first = name[0];
var last = name[name.length-1];

var objOutput = {};
objOutput[first]=last

return objOutput;
}

var display = firstNameAndLastName(name);

console.log(display);
//
var maryPoppins = 'supercalifragilisticexpialidocious';
console.log(maryPoppins.length);
// 
function isEqual() 
{ 
 var first = 'lara'; 
 var last = 'hemels'; 

  if(first.length == last.length) 
   return console.log(true); 
  else console.log(false);
}
// 
const array = ['L', 'a', 'r', 'a']
array.forEach(item => console.log('Looooops'));

//
var time = new Date() .getHours();
if (time >= 19 && time <= 21.40) {
   console.log("It is between 7 and 9.40!");
} else {
   console.log("It's not between 7 and 9.40");
}
//
let currentDate = new Date();
if ( currentDate.getDay() == 1) {
  console.log('Monday :(');
  }
if ( currentDate.getDay() == 2) {
  console.log('Tuesday :(');
  }
if ( currentDate.getDay() == 3) {
  console.log('Wednesday :|');
  }
if ( currentDate.getDay() == 4) {
  console.log('Thursday :]');
  }
if ( currentDate.getDay() == 5) {
  console.log('Friday :)');
  }
if ( currentDate.getDay() == 6) {
  console.log('Weekend :D');
  }
if ( currentDate.getDay() == 7) {
  console.log('Weekend :D');
}
//


var restaurants =(['Taiko', 'Emporio', 'Bar Fisk']);
console.log(restaurants);

var things =(['Travel', 'Travel', 'Travel']);
console.log(things);

var nyc =(['LES', 'West Village', 'Soho']);
console.log(nyc);

var movies =(['Beautiful Boy', 'Whiplash', 'Moonlight']);
console.log(movies);

var various =[restaurants, things, nyc, movies]
console.log(various);

console.log("I'm very confused?");








