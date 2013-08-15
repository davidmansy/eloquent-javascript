function chapter3() {

	//Eloquent JavaScript, Exercice 3.1
	//Returns the absolute value of the number it is given
	print("chapter3", "Exercice 3.1: Returns the absolute value of the number it is given");
	function absolute(number) {
		return number > 0 ? number : -number;
	}
	print("chapter3", "Absolute value of 15: " + absolute(15));
	print("chapter3", "Absolute value of -15: " + absolute(-15));
	printbr("chapter3");

	//Eloquent JavaScript, Exercice 3.2
	//Write a function greaterThan using a closure
	print("chapter3", "Exercice 3.2: Write a function greaterThan using a closure");

	function greaterThan(base) {

		return function(number) {
			return number > base;
		}
	}

	var greaterThanTen = greaterThan(10);
	print("chapter3", "Is 12 > 10? " + greaterThanTen(12));
	print("chapter3", "Is 8 > 10? " + greaterThanTen(8));
}