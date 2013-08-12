//Eloquent JavaScript, Exercice 3.1
function absolute(number) {
	if(number > 0)
		return number;
	else
		return -number;
}

document.write("Exercice 3.1");
document.write("<br/>");
document.write(absolute(9));
document.write("<br/>");

//Eloquent JavaScript, Exercice 3.2
function greaterThan(x) {
	return function (y) {
		return y > x;
	}
}

var greaterThanTen = greaterThan(10);

document.write("Exercice 3.2");
document.write("<br/>");
document.write(greaterThanTen(11));