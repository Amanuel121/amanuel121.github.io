$(function(){
	// Variables
	var width,growthAmount,interval,numberCircles;
	colors = ["345678", "987654", "12A3B9", "CF98EE", "56AB69"];

	// Circle Clicked Function
	circleClicked = function(){
		$(this).remove();
	};
	
	// Form submited
	$("#form").submit(function(e){
		// Stop form from submiting to server
		e.preventDefault();

		// Eliminate old circles
		$("#circle-container").empty();
		
		// Get Values
		width = parseInt( $("input[name=width]").val() );
		growthAmount = parseInt( $("input[name=growthAmount]").val() );
		interval = parseInt( $("input[name=interval]").val() );
		numberCircles = parseInt( $("input[name=numberCircles]").val() );

		for(let i=1; i<=numberCircles; i++) {
			// Compute New Circle
			newCircle = $( document.createElement("div") );
			newCircle.addClass("circle");
			newCircle.css("width", width + "px");
			newCircle.css("height", width + "px");
			newCircle.css("margin-left", (i*75) + "px");
			newCircle.css("background-color", "#" + colors[i%5]);

			// Add Event Handler to Circle
			newCircle.click(circleClicked);
			
			// Add Circle to Page
			$("#circle-container").append(newCircle);
		}

		setInterval(function(){
			let diameter = parseInt( $(".circle").css("width") );
			diameter += growthAmount;
			$(".circle").css("width", diameter);
			$(".circle").css("height", diameter);
		}, interval);
	});
});