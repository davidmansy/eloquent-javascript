/*
Eloquent JS, Exercice 2.2
var result = 1;
var counter = 0;
while (counter < 10) {
	result *= 2;
	counter++;
}
document.write(result + "<br/>");

//Eloquent JS, Exercice 2.3
var line = "";
var counter = 0;
while (counter < 10) {
	line = line + "#";
	document.write(line + "<br/>");
	counter++;
}

//Eloquent JS, Exercice 2.4
var result2 = 1;

for (var i = 0; i < 10; i++) {
	result2 *= 2;
}
document.write(result2 + "<br/>");

var line = "";

for (var i = 0; i < 10; i++) {
	line = line + "#";
	document.write(line + "<br/>");
}

//Eloquent JS, Exercice 2.5
var answer = prompt("What is the value of 2+2?");
if (answer == 4) {
	alert("Nice job!");
} else if (answer == 3 || answer == 5) {
	alert("Almost!");
} else {
	alert("Are you nuts?");
}
*/
//Eloquent JS, Exercice 2.5
var answer;
while(true) {
	answer = prompt("What is the value of 2+2?");
	if(answer == 4) {
		alert("Genius!");
		break;
	} else if (answer == 3 || answer == 5) {
		alert("Almost!");
	} else {
		alert("Are you nuts?");
	}
}