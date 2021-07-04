// 1. Filter
describe("filter", function () {
	it("accepts an array of strings that specifies a list of banned words. Then returns the string after removing all the banned words.",
		function () {
			assert.equal("This house is nice!", "not This house is not nice!".filter( ["not","neigh"] ));
		});
});

// 2. bubbleSort
describe("bubbleSort", function () {
	it("simple sorting algorithm that works by repeatedly stepping through the list to be sorted.",
		function () {
			assert.equal([ 1, 2, 3, 4, 5 ], [ 3, 2, 5, 4, 1 ].bubbleSort());
		});
});

// 2. Teacher
describe("teach", function () {
	it("receives a string called subject, and returns: [teacher's name] is now teaching [subject]",
		function () {
			assert.equal( "Slash is now teaching Music", slash.teach("Music") );
		});
});
