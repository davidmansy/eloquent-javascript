function exercice3_1() {
	//Eloquent JavaScript, Exercice 3.1
	//Returns the absolute value of the number it is given
	function absolute(number) {
		return number > 0 ? number : -number;
	}
	return ["Absolute value of 15: " + absolute(15), "Absolute value of -15: " + absolute(-15)];
}

function exercice3_2() {
	//Eloquent JavaScript, Exercice 3.2
	//Write a function greaterThan using a closure

	function greaterThan(base) {

		return function(number) {
			return number > base;
		}
	}

	var greaterThanTen = greaterThan(10);

	return ["Is 12 > 10? " + greaterThanTen(12), "Is 8 > 10? " + greaterThanTen(8)];
}