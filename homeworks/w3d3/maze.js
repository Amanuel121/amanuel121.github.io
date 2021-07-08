$(function(){
	// Variables
	let started = false;
	// END Variables

	// Event Handlers
	// Start Game
	$("#start").click(function(){
		// Reset Maze
		if($("#status").hasClass("youwin")) $("#status").removeClass("youwin");
		if($("#maze .boundary").hasClass("youwin")) $("#maze .boundary").removeClass("youwin");
		if($("#status").hasClass("youlose")) $("#status").removeClass("youlose");
		if($("#maze .boundary").hasClass("youlose")) $("#maze .boundary").removeClass("youlose");
		// END Reset Maze
		
		// Mark Game Started
		started = true;
		$("#status").html("Started!");
	});

	// Stepped on the Boundary
	$("#maze .boundary").mouseover(function(){
		// Check if Game is Started
		if( started ) {
			// Stop Game and Alert Player
			started = false;
			$("#status").html("GAME OVER! Stepped on the Boundary &#128542; Click the \"S\" to restart.");
			$("#status").addClass("youlose");
			$("#maze .boundary").addClass("youlose");
		}
	});

	// Left the Maze
	$("#maze").mouseleave(function(){
		// Check if Game is Started
		if( started ) {
			// Stop Game and Alert Player
			started = false;
			$("#status").html("GAME OVER! Left the Maze! &#128542; Click the \"S\" to restart.");
			$("#status").addClass("youlose");
			$("#maze .boundary").addClass("youlose");
		}
	});

	// Maze End / Win
	$("#end").mouseover(function(){
		// Check if Game is Started
		if( started ) {
			// Stop Game and Alert Player
			started = false;
			$("#status").html("YOU WIN! &#128526; Click the \"S\" to restart.");
			$("#status").addClass("youwin");
			$("#maze .boundary").addClass("youwin");
		}
	});
	// END Event Handlers
});