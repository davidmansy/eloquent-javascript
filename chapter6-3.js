//Eloquent JavaScript, Exercice 6.3
document.write("<h1>Exercice 6.3</h1>")
document.write("<br/>");

var paragraph3 = "{Test}Hello";
var paragraph4 = "Hello{Test}";
var paragraph5 = "A student had been sitting motionless behind his computer for hours, frowning darkly. He was trying to write a beautiful solution to a difficult problem, but could not find the right approach. Fu-Tzu hit him on the back of his head and shouted '*Type something!*' The student started writing an ugly solution. After he had finished, he suddenly understood the beautiful solution."

forEach(splitParagraph(paragraph5), function (element) {document.write(element.type + " : " + element.content + "<br/>")});


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


//Supportive functions
function reduce(combine, base, array) {
  forEach(array, function (element) {
    base = combine(base, element);
  });
  return base;
}

function map(action, array) {
  result = [];
  forEach(array, function (element) {
    result.push(action(element));
  });
  return result;
}

function forEach(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]);
}

