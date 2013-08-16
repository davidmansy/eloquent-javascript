//Print function
function print(id, content) {
	document.getElementById(id).appendChild(document.createTextNode(content));
	printbr(id);
}

function printbr(id) {
	document.getElementById(id).appendChild(document.createElement("br"));
}

//HTML functions
function tag(name, content, attributes) {
  return {name: name, attributes: attributes, content: content};
}

//High-order functions

//Loop over an array, each element of the array (array) serves as an input for a function (action)
function forEach(array, action) {
	for (var i = 0; i < array.length; i++) {
		action(array[i]);
	};
}

//Calculates a value, starting from a "base" and updating this base by applying a "combine" function on each array element
//It looks like "reducing" an array to a single value (but the original array is not impacted).
function reduce(combine, base, array) {
	forEach(array, function(element) {
		base = combine(base, element);
	});
	return base;
}

function add(a, b) {
	return a + b;
}

//Build an array based on a number
function helperRange(num, start) {
	if (arguments.length == 1)
		start = 0;
	var result = [];
	for (var i = start; i <= num; i++) {
		result.push(i);
	};
	return result;
}

//Takes an array, apply a function on each element and return a new array made of each "transformed" element
function map(func, array) {
	var result = [];
	forEach(array, function(element) {
		result.push(func(element));
	})
	return result;
}
