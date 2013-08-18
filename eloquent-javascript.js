var exercice = {
	//Display the list of exercices related to a chapter
	displayChapter: function() {
		$(".chapter").on("click", "button", function(event) {
			event.preventDefault();
			var chapter = $(this).closest(".chapter");
			chapter.find('.exerciceGroup').fadeToggle();
		});
	},

	//Run a function from the book (the functions are in their own file 'chapter*.js') and display the result
	runExercice: function() {
		$(".chapter").on("click", "a", function(event) {
			event.preventDefault();
			$(this).closest("li").find("ol").remove();

			$(this).closest("li").append("<ol></ol>");
			var elem = $(this).closest("li").find("ol");

			var functionName = "exercice" + $(this).data('exercice'); 
			var result = window[functionName]();

			$.each(result, function(index, element) {
				console.log(element);
				elem.append(("<li><p>" + element + "</p></li>"));
			});
		});
	}
}


$(document).ready(function () {
	//Display the list of exercices related to a chapter
	exercice.displayChapter();
	//Run a function from the book (the functions are in their own file 'chapter*.js') and display the result
	exercice.runExercice();

});