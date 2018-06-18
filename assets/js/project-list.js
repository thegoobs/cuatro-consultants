$(".projects-list-entry").click(function() {

	$(".projects-list").each(function() {
		$(this).css("display", "none");
	});

	$(".projects-list-entry").css("text-decoration", "none");

	var t = $(this).attr("target");
	$(".projects-list[target=" + t + "]").toggle();
	$(".projects-list-entry[target=" + t + "]").css("text-decoration", "underline");
})