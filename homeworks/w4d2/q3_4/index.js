const express = require('express');
const path = require('path');
const app = express();
const session = require('express-session');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use('/js', express.static(path.join(__dirname, 'view', 'js')));

app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: '16Xe23Mp',
    resave: true,
    saveUninitialized: true
}));

app.get('/', (req, res, next) => {
	console.log(req.session.cart);
	res.render("product", {
		title: "Products",
		products: req.session.cart,
		year: new Date().getFullYear(),
	});
});

app.get('/product/uno', (req, res, next) => {
	const product = {
		id: 003,
		name: "Product One",
		price: "15.99",
		description: "First Product"
	};

	res.redirect(303, `/addToCart/?id=${product.id}&name=${product.name}&price=${product.price}&description=${product.description}`);
});
app.get('/product/dos', (req, res, next) => {
	const product = {
		id: 004,
		name: "Another Product",
		price: "99.99",
		description: "Product that followed"
	};

	res.redirect(303, `/addToCart/?id=${product.id}&name=${product.name}&price=${product.price}&description=${product.description}`);
});
app.get('/product/tre', (req, res, next) => {
	const product = {
		id: 007,
		name: "Third Product",
		price: "9.99",
		description: "Last one!"
	};

	res.redirect(303, `/addToCart/?id=${product.id}&name=${product.name}&price=${product.price}&description=${product.description}`);
});

app.get('/addToCart', (req, res, next) => {
	const id = req.query.id;
	const name = req.query.name;
	const price = req.query.price;
	const description = req.query.description;

	if( (! req.session.cart) ) req.session.cart = [];
	if( (! req.session.cart[id]) ) {
		req.session.cart[id] = {
			name: name,
			price: price,
			description: description,
			quantity: 0,
		};
	} else {
		req.session.cart[id].quantity += 1;
	}

	res.send('Data Added Successfully!');
});

app.get('/shoppingcart', (req, res, next) => {
	res.render("shoppingcart", {
		title: "Shopping Cart",
		products: req.session.cart,
		year: new Date().getFullYear(),
	});
});

app.listen(3000);