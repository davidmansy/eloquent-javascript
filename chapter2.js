function exercice2_2() {
	//Eloquent JavaScript, Exercice 2.2
	//Calculates and shows the value of 2exp10 using while loop
	var count = 1;
	var result = 1;

	while (count <= 10) {
		result *= 2;
		count++;
	}

	return [result];
}

function exercice2_3() {
	//Eloquent JavaScript, Exercice 2.3
	//Draw a triangle using a while loop
	var line = "#";
	count = 1;
	var result = [];

	while (count <= 10) {
		result.push(line);
		line += "#";
		count++;
	}
	return result;
}

//Eloquent JavaScript, Exercice 2.4a
//Calculates and shows the value of 2exp10 using for loop
function exercice2_4a() {
	result = 1
	for(var count = 1; count <= 10; count++) {
		result = result * 2;
	}
	return [result];
}

//Eloquent JavaScript, Exercice 2.4b
//Draw a triangle using for loop
function exercice2_4b() {
	line = "#";
	var result = [];

	for(var count = 1; count <= 10; count++) {
		result.push(line);
		line += "#";
	}
	return result;
}

function exercice2_5() {
	//Eloquent JavaScript, Exercice 2.5
	//Ask yourself, using prompt, what the value of 2 + 2 is
	var answer = prompt("What is 2 + 2?");
	if (answer == 4) {
		alert("You're a genius!");
	} else if (answer == 3 || answer == 5) {
		alert("Almost!");
	} else {
		alert("You're talking to me?");
	}
	return ["Check the prompts!"];
}

function exercice2_6() {
	//Eloquent JavaScript, Exercice 2.6
	//Ask yourself, using prompt, what the value of 2 + 2 is, with loop
	while(true) {
		answer = prompt("What is 2 + 2");
		if(answer == 4) {
			alert("Great!");
			break;
		} else if (answer == 3 || answer == 5)
			alert("Almost!");
		else
			alert("Think twice!");
	}
	return ["Check the prompts!"];
}