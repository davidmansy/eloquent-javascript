//Print function
function print(id, content) {
	document.getElementById(id).appendChild(document.createTextNode(content));
	printbr(id);
}

function printbr(id) {
	document.getElementById(id).appendChild(document.createElement("br"));
}
