const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
	res.render("index");
});

app.post('/result', (req, res, next) => {
	let person = req.body;
	
	res.render("result", {
		person: person,
	});
});

app.listen(3000);