// Check Off Specific Todos By Clicking
$('ul').on("click", "li", function(){
	//to asure that all new 'li' will have this event listener
	//we must add it to an element that exists when the page loads 'ul'
	$(this).toggleClass("completed");
})

// Click on X to delete Todo
$('ul').on("click", "span", function(event){
	//removes the li parenting this span
	$(this).parent().fadeOut(500, function(){
		$(this).remove(); // now 'this' refers to the li, not the span
	})
	//stops event bubbling on all parent elements
	event.stopPropagation();
})

// Adding new Todos
$('input[type="text"]').keypress(function(event){
	if (event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val(""); //clears the input after adding new todo
		//create a new li and add to ul
		$('ul').append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
})

// Input button set
$('#toggle').click(function(){
	$('input[type="text"]').fadeToggle();
})