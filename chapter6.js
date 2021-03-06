function exercice6_1a() {

	//Eloquent JavaScript, Exercice 6.1a
	//Write a function countZeroes, which takes an array of numbers as its argument and returns the amount of zeroes that occur in it. Use reduce.

	function countZeroes(numbers) {
		return reduce(counter, 0, numbers);
	}

	function counter(total, element) {
		return total + (element === 0 ? 1 : 0);
	}

	var printResult = [];
	printResult.push("There are " + countZeroes(helperRange(12)) + " zero(es) in the array [" + helperRange(12) + "]");
	var test = [0,0,0,0,1,1,1,1,1];
	printResult.push("There are " + countZeroes(test) + " zero(es) in the array [" + test + "]");
	return printResult;
}

function exercice6_1b() {

	//Eloquent JavaScript, Exercice 6.1b
	//write the higher-order function count, which takes an array and a test function as arguments, and returns the amount of elements in the array for which the test function returned true.

	function count(test, array) {
		var total = 0;
		forEach(array, function(element) {
			total += test(element) ? 1 : 0;
		})
		return total;
	}

	function equals(x) {
		return function(element) {
			return element === x;
		};
	}

	function newCountZeroes(numbers) {
		return count(equals(0), numbers);
	}
	var test = [0,0,0,0,1,1,1,1,1];
	return ["There are " + newCountZeroes(test) + " zero(es) in the array [" + test + "]"];
}

function exercice6_2() {
	//Eloquent JavaScript, Exercice 6.2
	//Write a function processParagraph that, when given a paragraph string as its argument, checks whether this 
	//paragraph is a header. If it is, it strips off the '%' characters and counts their number. Then, it returns an object with 
	//two properties, content, which contains the text inside the paragraph, and type, which contains the tag that this 
	//paragraph must be wrapped in, "p" for regular paragraphs, "h1" for headers with one '%', and "hX" for headers with X '%' characters.

	var paragraph1 = "%% Progression";

	function processParagraph(paragraph) {
		var counter = 0;

		while (paragraph.charAt(0) == '%') {
			counter++;
			paragraph = paragraph.slice(1);
		}

		return {
			content: paragraph,
			type: counter == 0 ? "p" : "h" + counter
		};
	}

	var para = processParagraph(paragraph1);

	return ["'%% Progression' paragraph gives: " + para.type + ":" + para.content];
}

function exercice6_3() {

	//Eloquent JavaScript, Exercice 6.3
	//Build a function splitParagraph which, given a paragraph string, returns an array of paragraph fragments. Think of a good way to represent the fragments.
	var paragraph3 = "{Test}Hello";
	var paragraph4 = "Hello{Test}";
	var paragraph5 = "A student had been sitting motionless behind his computer for hours, frowning darkly. He was trying to write a beautiful solution to a difficult problem, but could not find the right approach. Fu-Tzu hit him on the back of his head and shouted '*Type something!*' The student started writing an ugly solution. After he had finished, he suddenly understood the beautiful solution.";
	var printResult = [];

	printResult.push("Processing paragraph: " + paragraph5);
	forEach(splitParagraph(paragraph5), function (element) {
		printResult.push(element.type + " : " + element.content);
	});
	return printResult;

	function splitParagraph(paragraph) {

	  var arrayOfFragments = [];

	  function indexOrEnd(character) {
	    var index = paragraph.indexOf(character);
	    return index == -1 ? paragraph.length : index;
	  }

	  function takeNormal() {
	    var end = reduce(Math.min, paragraph.length, map(indexOrEnd, ["*", "{"]));
	    var part = paragraph.slice(0, end);
	    paragraph = paragraph.slice(end);
	    return part;
	  }

	  function takeUpTo(character) {
	    var end = paragraph.indexOf(character, 1);
	    if(end == -1)
	      throw new Error("Missing closing: '" + character + "'");
	    var part = paragraph.slice(1, end);
	    paragraph = paragraph.slice(end + 1);
	    return part;
	  }

	  while(paragraph.length > 0) {
	    if(paragraph.indexOf("*") == 0) {
	      arrayOfFragments.push({type:"emphasized", content:takeUpTo("*")});
	    } else if(paragraph.indexOf("{") == 0) {
	      arrayOfFragments.push({type:"footnote", content:takeUpTo("}")});
	    } else {
	       arrayOfFragments.push({type:"normal", content:takeNormal()});
	    }
	  }
	  return arrayOfFragments;
	}
}

function exercice6_4() {
	//Eloquent JavaScript, Exercice 6.4
	//write an image function which, when given the location of an image file, will create an img HTML element.
	function image(file) {
		return tag("img", [],{src: file});
	}
	var imageElement = image("test.png");
	return [imageElement.name + ": " + imageElement.attributes["src"]];
}

function exercice6_5() {
	//Eloquent JavaScript, Exercice 6.5
	//TO BE CONTINUED!!!
	printer.print("chapter6", "Exercice 6.5: ");

	function renderFragment(fragment) {
		if (fragment.type == "emphasized") {
			return tag("em", [fragment.content], {});
		} else if (fragment.type == "normal") {
			return tag("", [fragment.content], {});
		} else {
			return footnote(fragment.number);
		}
	}

	function renderParagraph(paragraph) {
		return tag(paragraph.type, map(renderFragment, paragraph.content));
	}	
}