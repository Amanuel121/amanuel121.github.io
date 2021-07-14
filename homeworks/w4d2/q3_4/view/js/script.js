$(() => {
    const clearMsg = () => $("#message").text("");

	const requestSuccess = (response) => {
		$("#message").text(response);
        setTimeout(clearMsg, 15*1000);
    }

	const failed = () => {
        $("#message").text("Unable to reach server!");
        setTimeout(clearMsg, 15*1000);
    }

    $('header a').click(() => {
        $.get({
            url: $(this).attr('href'),
            contentType: "application/json; charset=utf-8"
        })
		.done(requestSuccess)
		.fail(failed);
        return false;
    });
});