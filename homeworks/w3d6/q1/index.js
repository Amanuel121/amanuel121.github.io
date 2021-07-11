const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.get('/', (req, res) => {
	const date = new Date();
	const hour = date.getHours();

	let styleDir = "night";
	if( hour >= 6 && hour <= 18 ) styleDir = "day";

	res.render("index", {
		time: date.toTimeString(),
		style: styleDir,
	});
});

app.listen(3000);