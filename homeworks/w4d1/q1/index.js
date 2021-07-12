const express = require('express');
const path = require('path');
const app = express();
const cookieParser = require('cookie-parser');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('16Xe23Mp'));

app.get('/', (req, res, next) => {
	res.render("index", {
		cookies: req.cookies,
	});
});

app.post('/addCookie', (req, res, next) => {
	if (req.body.key && req.body.value) {
		res.cookie(req.body.key, req.body.value, { maxAge: 1000*60*60*24 });
	}
	res.redirect(303, '/');
});

app.listen(3000);