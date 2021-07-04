String.prototype.filter = function(banned) {
	let newPhrase = this;
	banned.forEach(word => {
		word = word+" ";
		let index = newPhrase.indexOf(word);

		while(index > -1) {
			newPhrase = newPhrase.substr( 0, index )+newPhrase.substr( index + word.length, newPhrase.length );
			index = newPhrase.indexOf(word);
		}
	});

	return newPhrase;
};

Array.prototype.bubbleSort = function() {
	for (let i1 = 0; i1 < this.length; i1++) {
		for (let i2 = 0; i2 < this.length; i2++) {
			if (this[i1] < this[i2]) {
				let temp = this[i1];
				this[i1] = this[i2];
				this[i2] = temp;
			}
		}
	}

	return this;
};

// console.log( [ 3, 2, 5, 4, 1 ].bubbleSort() );

var Person = function() {};
Person.prototype.initialize = function(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.describe = function() {
    return this.name + ", " + this.age + " years old.";
}

var Student = function() {};
Student.prototype = new Person();
Student.prototype.learn = function(subject) {
    console.log(this.name + " just learned " + subject);
}
var me = new Student();
me.initialize("John", 25);
me.learn("Inheritance");

var Teacher = function() {};
Teacher.prototype = new Person();
Teacher.prototype.teach = function(subject) {
	return this.name+" is now teaching "+subject;
}
var slash = new Teacher();
slash.initialize("Slash", 55);
slash.teach("Music");
