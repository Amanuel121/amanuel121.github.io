const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
	let personForm = '<form action="/result" method="post">';
	personForm += '<label for="personName">Name</label> &nbsp; <input type="text" name="personName"> &nbsp;';
	personForm += '<label for="personAge">Age</label> &nbsp; <input type="number" name="personAge"> &nbsp;';
	personForm += '<input type="submit">';
	personForm += '</form>';

	res.send(personForm);
});

app.post('/result', (req, res, next) => {
	let name = req.body.personName;
	let age = req.body.personAge;
	
	res.send(`Welcome ${name}, ${age} years old.`);
});

app.listen(3000);