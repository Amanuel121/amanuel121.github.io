const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use('/css', express.static(path.join(__dirname, 'css')));

app.get('/', (req, res, next) => {
	let personForm = '<!DOCTYPE html>';
	personForm += '<html>';
	personForm += '<meta charset="utf-8">';
	personForm += '<head>';
	personForm += '<title>Person Form</title>';

	const hour = new Date().getHours();
	if( hour >= 6 && hour <= 18 ) {
		personForm += '<link rel="stylesheet" href="/css/day.css">';
	} else {
		personForm += '<link rel="stylesheet" href="/css/night.css">';
	}
	personForm += '</head>';
	personForm += '<body>';
	personForm += '<form action="/result" method="post">';
	personForm += '<label for="personName">Name</label> &nbsp; <input type="text" name="personName"> &nbsp;';
	personForm += '<label for="personAge">Age</label> &nbsp; <input type="number" name="personAge"> &nbsp;';
	personForm += '<input type="submit">';
	personForm += '</form>';
	personForm += '</body>';
	personForm += '</html>';

	res.send(personForm);
});

app.post('/result', (req, res, next) => {
	let name = req.body.personName;
	let age = req.body.personAge;
	
	res.send(`Welcome ${name}, ${age} years old.`);
});

app.listen(3000);