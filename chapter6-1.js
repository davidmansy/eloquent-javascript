//Eloquent JavaScript, Exercice 6.1
document.write("<h1>Exercice 6.1</h1>");
document.write("<br/>");
arrayNumbers = [23, 78, 2, 0, 0, 0];
document.write("Array: " + arrayNumbers + " which includes " + countZeroes(arrayNumbers) + " zeroes.");

/*
function countZeroes(numbers) {
	return reduce(function (total, element) {
					return element === 0 ? total + 1 : total;},
					0, numbers);
}
*/
function countZeroes(numbers) {
	return count(equals(0), numbers);
}

function count(test, numbers) {
	return reduce(function (total, element) {
					return test(element) ? total + 1 : total;},
					0, numbers);
}

function equals(x) {
	return function(element) {return element === x};
}

//Supportive functions
//Combines an array into a single value by repeatedly using a function that combines an element of the array with a base value.
function reduce(combine, base, array) {
  forEach(array, function (element) {
    base = combine(base, element);
  });
  return base;
}

//Apply an action on each element of an array
function forEach(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]);
}
