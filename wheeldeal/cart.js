let addedItems = ["Test Car", "Test Car 2"];
const Items = [
	{ Name: "Retro Rattletron 3000", Price: 100, Category: "Bil" },
	{ Name: "Nightmare Flash", Price: 15, Category: "Cykel" }
]

function CheckBrowser() {
	if ('localStorage' in window && window['localStorage'] !== null) {
		return true;
	}
	else return false;
}
function showCart() {
	if (CheckBrowser()) {
		var parseHTML = "";

		for (i = 0; i< addedItems.length; i++) {

			parseHTML += '<tr class="cartItem"><td>' + addedItems[i] + '</td></tr>';
		}
		document.getElementById("cartList").innerHTML = parseHTML;
	} else {
		alert('Your browser does not support HTML 5');
	}
}

function addToCart(name) {
	addedItems.push(name);
	showCart();
}
function removeFromCart(name) {
	addedItems.splice(addedItems.findIndex((element) => element == name), 1);
	showCart();
}
function ClearAll() {
	addedItems = [];
	showCart();
}