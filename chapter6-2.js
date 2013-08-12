//Eloquent JavaScript, Exercice 6.2
document.write("<h1>Exercice 6.2</h1>");
document.write("<br/>");

paragraph0 = "% The Book of Programming";
paragraph1 = "%% The Two Aspects";
paragraph2 = "Below the surface of the machine, the program moves. Without effort, it expands and contracts. In great harmony, electrons scatter and regroup. The forms on the monitor are but ripples on the water. The essence stays invisibly below.";

var result = processParagraph(paragraph2);
document.write("Type: " + result.type + ", Content: " + result.content);

function processParagraph(paragraph) {
	var header = 0;
	while(paragraph.charAt(0) == '%') {
		paragraph = paragraph.slice(1);
		header += 1
	}

	return {type: (header === 0 ? "p" : "h" + header), content:paragraph};
}