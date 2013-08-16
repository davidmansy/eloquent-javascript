function chapter4() {

	//Eloquent JavaScript, Exercice 4.1
	//If names are strings, can you think of a way to use an object to represent a set of names?
	print("chapter4", "Exercice 4.1: If names are strings, can you think of a way to use an object to represent a set of names?");

	var cats = {};
	cats.spot = true;
	cats.leclere = true;
	cats["my little Kitty"] = true;
	print("chapter4", "1) cats object has 3 cats!");
	for (prop in cats) {
		print("chapter4", prop);
	}
	delete cats.leclere;
	print("chapter4", "2) Delete leclere!");
	for (prop in cats) {
		print("chapter4", prop);
	}
	print("chapter4", "3) Check that my little Kitty is in? " + ("my little Kitty" in cats));
	printbr("chapter4");

	//Eloquent JavaScript, Exercice 4.2
	//Write a function range that takes one argument, a positive number, and returns an array containing all numbers from 0 up to and including the given number.
	print("chapter4", "Exercice 4.2: Write a function range that takes one argument, a positive number, and returns an array containing all numbers from 0 up to and including the given number.");

	function range(number) {
		var result = [];

		for (var i = 0; i <= number; i++) {
			result[i] = i;
		};
		return result;
		}
	print("chapter4", range(10));
	printbr("chapter4");

	//Eloquent JavaScript, Exercice 4.3
	//Can you give an example of an array where .join(" ").split(" ") produces a different value?
	print("chapter4", 'Exercice 4.3: Can you give an example of an array where .join(" ").split(" ") produces a different value?');
	var sentenceArray = ["How are you", "doing my friend?"];
	print("chapter4", "Original array: [" + sentenceArray + "]");
	var result = sentenceArray.join(" ");
	print("chapter4", "Resulting string after join: '" + result + "'");
	var resultArray = result.split(" ");
	print("chapter4", "Final array obtained after a split: [" + resultArray + "]");
	printbr("chapter4");

	//Eloquent JavaScript, Exercice 4.4
	//Write a function called startsWith that takes two arguments, both strings. It returns true when the first argument starts with the characters in the second argument, and false otherwise
	print("chapter4", 'Exercice 4.4: Write a function called startsWith that takes two arguments, both strings. It returns true when the first argument starts with the characters in the second argument, and false otherwise');
	function startsWith(string, part) {
		return string.slice(0, part.length) == part;
	}
	print("chapter4", "Does the string 'bouhouhou' start with 'bou'? " + startsWith("bouhouhou", "bou"));
	printbr("chapter4");

	//Eloquent JavaScript, Exercice 4.5
	//Can you write a function catNames that takes a paragraph as an argument and returns an array of names?
	print("chapter4", 'Exercice 4.5: Can you write a function catNames that takes a paragraph as an argument and returns an array of names?');
	var paragraph = "born 05/04/2006 (mother Lady Penelope): Red Lion, Doctor Hobbles the 3rd, Little Iroquois";
	function catNames(paragraph) {
		var namesString = paragraph.slice(paragraph.indexOf(":") + 2);
		console.log(namesString);
		var arrayString = namesString.split(", ");
		console.log(arrayString);
		return arrayString;
	}
	print("chapter4", "I process the paragraph: 'born 05/04/2006 (mother Lady Penelope): Red Lion, Doctor Hobbles the 3rd, Little Iroquois'")
	print("chapter4", "and I get the following array of names: [" + catNames(paragraph) + "]");
	printbr("chapter4");

	//Eloquent JavaScript, Exercice 4.6
	//Write a function extractDate that takes such a paragraph as its argument, extracts the date, and returns it as a date object.
	print("chapter4", 'Exercice 4.6: Write a function extractDate that takes such a paragraph as its argument, extracts the date, and returns it as a date object.');
	function extractDate(paragraph) {
		function numberAt(start, length) {
			return Number(paragraph.slice(start, start + length));
		}
		return new Date(numberAt(11, 4), numberAt(8, 2) - 1, numberAt(5, 2));
	}
	print("chapter4", "I process the paragraph: 'born 05/04/2006 (mother Lady Penelope): Red Lion, Doctor Hobbles the 3rd, Little Iroquois'")
	print("chapter4", "I get the following date: " + extractDate(paragraph));
	printbr("chapter4");

	//Eloquent JavaScript, Exercice 4.7
	//Write a function between that takes three arguments, all of which are strings. It will return the part of the first argument that occurs between the patterns given by the second and the third arguments.
	print("chapter4", 'Exercice 4.7: Write a function between that takes three arguments, all of which are strings. It will return the part of the first argument that occurs between the patterns given by the second and the third arguments.');

	function between(string, left, right) {
		var start = string.indexOf(left) + right.length;
		var end = string.indexOf(right, start);
		return string.slice(start, end);
	}
	print("chapter4", between("born 15/11/2003 (mother Spot): White Fang", "(mother ", ")"));
	print("chapter4", between("bu ] boo [ bah ] gzz", "[ ", " ]"));
	printbr("chapter4");

	//Eloquent JavaScript, Exercice 4.8
	//The formatDate function used by catInfo does not add a zero before the month and the day part when these are only one digit long. Write a new version that does this.
	print("chapter4", 'Exercice 4.8: The formatDate function used by catInfo does not add a zero before the month and the day part when these are only one digit long. Write a new version that does this.');
	function formatDate(date) {
		function addZero(num) {
			return num < 10 ? '0' + num : num;
		}
		return addZero(date.getDate()) + '/' + addZero(date.getMonth() + 1) + '/' + date.getFullYear();
	}
	var today = new Date();
	print("chapter4", "Today is " + formatDate(today));
	printbr("chapter4");

	//Eloquent JavaScript, Exercice 4.9
	//Write a function oldestCat which, given an object containing cats as its argument, returns the name of the oldest living cat.
	print("chapter4", 'Exercice 4.9: Write a function oldestCat which, given an object containing cats as its argument, returns the name of the oldest living cat.');
	function Cat(name, birthDate, deathDate) {
		this.name = name;
		this.birthDate = birthDate;
		if(arguments.length == 3)
			this.death = deathDate;
	}

	var vali = new Cat("Vali", new Date(2007, 9, 1));
	var romy = new Cat("Romy", new Date(1975, 7, 8));
	var david = new Cat("David", new Date(1973, 4, 5));
	var john = new Cat("John", new Date(1963, 4, 5), new Date(2009, 1, 1));

	//var cats = [vali, romy, david];
	var cats = {};
	cats["Vali"] = vali;
	cats["Romy"] = romy;
	cats["David"] = david;

	function oldestCat(cats) {
		var oldestCat = {};
		for (var cat in cats) {
			if (!("death" in cats[cat])  && (oldestCat.name == undefined || cats[cat].birthDate < oldestCat.birthDate)) {
				oldestCat.name = cats[cat].name;
				oldestCat.birthDate = cats[cat].birthDate;
			}
		}
		if (oldestCat.name == undefined)
			return null;
		else
			return oldestCat.name; 
	}
	print("chapter4", "The oldest cat is named: " + oldestCat(cats));
	printbr("chapter4");

	//Eloquent JavaScript, Exercice 4.10
	//Extend the range function from exercise 4.2 to take a second, optional argument. If two arguments are given, the first indicates the start of the range, the second the end.
	print("chapter4", 'Exercice 4.10: Extend the range function from exercise 4.2 to take a second, optional argument. If two arguments are given, the first indicates the start of the range, the second the end');
	function anotherRange(target, start) {

		if (arguments.length == 1)
			start = 0;

		var result = [];
		for (var i = start; i <= target; i++) {
			result.push(i);
		};
		return result;
	}
	print("chapter4", "Range 12->24:  " + anotherRange(24, 12));
	print("chapter4", "Range 0->12 :  " + anotherRange(12));
	printbr("chapter4");

	//Eloquent JavaScript, Exercice 4.11
	//This function takes an array of numbers, and returns their sum. Write it, it should be easy.
	print("chapter4", 'Exercice 4.11: This function takes an array of numbers, and returns their sum. Write it, it should be easy.');
	function sum(array) {
		var sum = 0;
		for (var i = 0; i < array.length; i++) {
			sum += array[i];
		};
		return sum;
	}

	print("chapter4", "Sum of the Range 12->24:  " + sum(anotherRange(24, 12)));
	print("chapter4", "Sum of the Range 0->12 :  " + sum(anotherRange(12)));
	printbr("chapter4");

}