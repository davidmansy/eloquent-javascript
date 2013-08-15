function chapter2() {

	//Eloquent JavaScript, Exercice 2.2
	//Calculates and shows the value of 2exp10 using while loop
	var count = 1;
	var result = 1;

	while (count <= 10) {
		result *= 2;
		count++;
	}
	print("chapter2", "Exercice 2.2: Calculate the value of 2exp10 using while loop");
	print("chapter2", result);
	printbr("chapter2");

	//Eloquent JavaScript, Exercice 2.3
	//Draw a triangle using a while loop
	var line = "#";
	count = 1;
	print("chapter2", "Exercice 2.3: Draw a triangle using a while loop");

	while (count <= 10) {
		print("chapter2", line);
		line += "#";
		count++;
	}
	printbr("chapter2");

	//Eloquent JavaScript, Exercice 2.4
	//Calculates and shows the value of 2exp10 using for loop
	result = 1
	for(var count = 1; count <= 10; count++) {
		result = result * 2;
	}
	print("chapter2", "Exercice 2.4a: Calculate the value of 2exp10 using for loop");
	print("chapter2", result);
	printbr("chapter2");

	//Eloquent JavaScript, Exercice 2.4
	//Draw a triangle using for loop
	print("chapter2", "Exercice 2.4b: Draw a triangle using for loop");
	line = "#"
	for(var count = 1; count <= 10; count++) {
		print("chapter2", line);
		line += "#";
	}
	printbr("chapter2");

	//Eloquent JavaScript, Exercice 2.5
	//Ask yourself, using prompt, what the value of 2 + 2 is
	print("chapter2", "Exercice 2.5: Ask yourself, using prompt, what the value of 2 + 2 is");
	print("chapter2", "See the prompts");
	var answer = prompt("What is 2 + 2?");
	if (answer == 4) {
		alert("You're a genius!");
	} else if (answer == 3 || answer == 5) {
		alert("Almost!");
	} else {
		alert("You're talking to me?");
	}
	printbr("chapter2");

	//Eloquent JavaScript, Exercice 2.6
	//Ask yourself, using prompt, what the value of 2 + 2 is, with loop
	print("chapter2", "Exercice 2.6: Ask yourself, using prompt, what the value of 2 + 2 is, with loop");
	print("chapter2", "See the prompts again");
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
	printbr("chapter2");

}

