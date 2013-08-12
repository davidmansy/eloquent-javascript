function image(file) {
	return tag("img", [],{src: file});
}

function renderFragment(fragment) {
	if (fragment.type == "emphasized") {
		return tag("em", [fragment.content], {});
	} else if (fragment.type == "normal") {
		return tag("", [fragment.content], {});
	) else {
		return footnote(fragment.number);
	}
}

function renderParagraph(paragraph) {
	return tag(paragraph.type, map(renderFragment, paragraph.content));
}


function tag(name, content, attributes) {
  return {name: name, attributes: attributes, content: content};
}