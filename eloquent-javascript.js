//Main JavaScript program
$(document).ready(function () {
	$(".chapter").on("click", "button", function(event) {
		event.preventDefault();
		var chapter = $(this).closest(".chapter");
		chapter.find('.exercice').fadeToggle();
	});

	$(".chapter").on("click", "a", function(event) {
		event.preventDefault();
		$(this).closest("li").append("<ol></ol>");
		var elem = $(this).closest("li").find("ol");

		var functionName = "exercice" + $(this).data('exercice'); 
		var result = window[functionName]();

		$.each(result, function(index, element) {
			console.log(element);
			elem.append(("<li>" + element + "</li>"));
		});
	});
});