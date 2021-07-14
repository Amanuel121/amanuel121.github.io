$(() => {
	// Util
    const clearMsg = () => {
		$("#answer").text("");
		prepAnswer(0);
	}
	const prepAnswer = (index) => {
		if( $("#answer").hasClass("text-danger") ) $("#answer").removeClass("text-danger");
		if( $("#answer").hasClass("text-warning") ) $("#answer").removeClass("text-warning");
		if( $("#answer").hasClass("text-success") ) $("#answer").removeClass("text-success");
		if( $("#answer").hasClass("text-white") ) $("#answer").removeClass("text-white");
		if( $("#answer").hasClass("bg-danger") ) $("#answer").removeClass("bg-danger");

		if( index >= 0 && index <= 9 ) $("#answer").addClass("text-success");
		if( index >= 10 && index <= 14 ) $("#answer").addClass("text-warning");
		if( index >= 15 && index <= 19 ) $("#answer").addClass("text-danger");
		if( index == 20 ) $("#answer").addClass("text-white bg-danger");
	};
	// END Util
    
	const requestSuccess = response => {
		const result = JSON.parse(response);
		prepAnswer(result.index);
		$("#answer").text(result.answer);
        setTimeout(clearMsg, 15*1000);
    }
    
	const failed = () => {
		prepAnswer(20);
        $("#answer").text("Unable to reach server!");
        setTimeout(clearMsg, 15*1000);
    }

    $("#8Ball").submit( ev => {
		ev.preventDefault();

        $.get({
            url: "/8ball",
            contentType: "application/json; charset=utf-8"
        })
		.done(requestSuccess)
		.fail(failed);
        return false;
    });
});