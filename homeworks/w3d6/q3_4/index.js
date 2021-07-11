const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
	let products = [
		{id: 003, name: "Product One", price: "15.99", description: "First Product"},
		{id: 004, name: "Another Product", price: "99.99", description: "Product that followed"},
		{id: 007, name: "Third Product", price: "9.99", description: "Last one!"},
	];

	res.render("product", {
		title: "Products",
		products: products,
		year: new Date().getFullYear(),
	});
});

app.get('/shoppingcart', (req, res, next) => {
	let items = [
		{name: "Tomatos", price: "10.99", quantity: "3Lbs Organic Tomatoes"},
		{name: "Ground Beef", price: "19.99", quantity: "5Lbs Ground Beef"},
		{name: "Hot Sauce", price: "16.99", quantity: "2 Pcs. Hot Sauce"},
	];

	res.render("shoppingcart", {
		title: "Shopping Cart",
		items: items,
		year: new Date().getFullYear(),
	});
});

app.listen(3000);