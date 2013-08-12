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









