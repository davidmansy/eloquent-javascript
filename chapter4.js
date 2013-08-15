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
		var month = Number(paragraph.slice(5, 7) - 1);
		var day = Number(paragraph.slice(8, 10));
		var year = Number(paragraph.slice(11, 15));
		console.log(year);
		return new Date(year, month, day);
	}
	print("chapter4", "I process the paragraph: 'born 05/04/2006 (mother Lady Penelope): Red Lion, Doctor Hobbles the 3rd, Little Iroquois'")
	print("chapter4", "I get the following date: " + extractDate(paragraph));


}











































/*
//Eloquent JavaScript, Exercice 4.1
document.write("<h1>Exercice 4.1</h1>")
document.write("<br/>");

var set = {
	"Spot": true,
	"Kitty": true
}
document.write(set);

set["Romeo"] = true;
delete set["Kitty"];
set["Bolo"] = true;
document.write(set);
document.write("<br/>");
document.write("Asoka" in set);
document.write("<br/>");

//Eloquent JavaScript, Exercice 4.2
document.write("<h1>Exercice 4.2</h1>")
document.write("<br/>");

function range(number) {
	var result = [];

	for (var i = 0; i <= number; i++) {
		result.push(i);
	};

	return result;
}
document.write(range(24));

//Eloquent JavaScript, Exercice 4.3
document.write("<h1>Exercice 4.3</h1>")
document.write("<br/>");

var test = ["Hello", "this is", "terrible"];
document.write(test.join(" ").split(" "));


//Eloquent JavaScript, Exercice 4.4
document.write("<h1>Exercice 4.4</h1>")
document.write("<br/>");

function startsWith(string, pattern) {
	return string.slice(0, pattern.length) == pattern;
}

document.write(startsWith("This is it!", "This"));

//Eloquent JavaScript, Exercice 4.5
document.write("<h1>Exercice 4.5</h1>")
document.write("<br/>");
var paragraph = "born 15-11-2003 (mother Spot): White Fang, Noog";

function catNames(text) {
	var names = text.slice(text.indexOf(":") + 2).split(", ");
	return names;
}

document.write(catNames(paragraph));

//Eloquent JavaScript, Exercice 4.6
document.write("<h1>Exercice 4.6</h1>")
document.write("<br/>");

var para = "died 27/04/2006: Black Leclère";

function extractDate(text) {

	function numberAt(start, length) {
		return Number(text.slice(start, start+length))
	}
	return new Date(numberAt(11,4), numberAt(8,2) - 1, numberAt(5,2));
}

document.write(extractDate(para));

//Eloquent JavaScript, Exercice 4.7
document.write("<h1>Exercice 4.7</h1>")
document.write("<br/>");

function between(text, left, right) {
	var start = text.indexOf(left) + left.length;
	var end = text.indexOf(right, start);
	return text.slice(start, end)
}
document.write(between("born 15/11/2003 (mother Spot): White Fang", "(mother ", ")"));
document.write("<br/>");
document.write(between("bu ] boo [ bah ] gzz", "[ ", " ]"));

//Eloquent JavaScript, Exercice 4.8
document.write("<h1>Exercice 4.8</h1>")
document.write("<br/>");

var today = new Date();

function formatDate(date) {
	function pad(number) {
		if (number < 10)
			return "0" + number;
		else
			return number;
	}

	return pad(date.getDate()) + "/" + pad(date.getMonth() + 1) + "/" + date.getFullYear();
}

document.write(formatDate(today));

//Eloquent JavaScript, Exercice 4.9
document.write("<h1>Exercice 4.9</h1>")
document.write("<br/>");


function Cat(name, date) {
	this.name = name;
	this.birthDate = date;
}

var vali = new Cat("Vali", new Date(2007, 9, 1));
var romy = new Cat("Romy", new Date(1975, 7, 8));
var david = new Cat("David", new Date(1973, 4, 5));

//var cats = [vali, romy, david];
var cats = {};
cats["Vali"] = vali;
cats["Romy"] = romy;
cats["David"] = david;
cats["David"].death = true;

function oldestCat(catContainerObject) {
	var oldest = null;
	for(var name in catContainerObject) {
		var cat = catContainerObject[name];
		if(!("death" in cat) && (oldest == null || cat.birthDate < oldest.birthDate)) {
			oldest = cat;
		}
	}
	if (oldest == null)
		return null;
	else
		return oldest.name;
}

document.write(oldestCat(cats));

//Eloquent JavaScript, Exercice 4.10
document.write("<h1>Exercice 4.10</h1>")
document.write("<br/>");

function rangeUpgrade(start, end) {
	var result = [];

	if (arguments.length < 2) {
		end = start;
		start = 0;
	}

	for (var i = start; i <= end; i++) {
		result.push(i);
	}
	return result;
}

function sum(result) {
	var total = 0;
	for (var i = 0; i < result.length; i++) {
		total += result[i];
	}
	return total;
}

document.write(sum(rangeUpgrade(24)));
document.write("<br/>");
document.write(sum(rangeUpgrade(10,24)));
*/








