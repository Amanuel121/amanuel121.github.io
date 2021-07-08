var sum = 0;
const getNumber = (function(){
	const readline = require('readline').createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	readline.question('Enter a number? ', inPut => {
		if( inPut === "stop" ) {
			console.log(`Sum: ${sum}`);
			// return;
		} else {
			sum += parseInt(inPut);
			process.nextTick(getNumber);
		}
		
		readline.close();
	});
});

// Call function to initialize sequence
getNumber();