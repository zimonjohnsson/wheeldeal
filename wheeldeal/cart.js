localStorage.setItem(itemsList, null);
localStorage.setItem(count, 0);
localStorage.setItem(totalPrice, 0);

function CheckBrowser() {
	if ('localStorage' in window && window['localStorage'] !== null) {
		return true;
	}
	else return false;
}
function showCart() {
	if (CheckBrowser()) {

		
	} else {
		alert('Your browser does not support HTML 5');
	}
}

function addToCart(name) {
	addedItems.push(name);

}
function removeFromCart() {

}

let addedItems = [];
let Items = [
	{ Name: "Retro Rattletron 3000", Price: 100, Category: "Bil" },
	{ Name: "Nightmare Flash", Price: 15, Category: "Cykel" }
]