const Items = [
	{ Name: "Retro Rattletron 3000", Price: 100, Category: "Bil" },
	{ Name: "Nightmare Flash", Price: 15, Category: "Cykel" }
]
localStorage.setItem("savedItems", "");
let addedItems = [];

function CheckBrowser() {
	if ('localStorage' in window && window['localStorage'] !== null) {
		return true;
	}
	else return false;
}
function showCart() {
	if (CheckBrowser()) {
		var parseHTML = "";
		if (localStorage.getItem("savedItems" != "")) addedItems = JSON.parse(localStorage.getItem("savedItems"));

		for (i = 0; i< addedItems.length; i++) {
			parseHTML += '<tr class="cartItem"><td>' + addedItems[i] + 
			'</td> <td><input type="button" value="Remove Item" onclick="removeFromCart(\''+ addedItems[i] +'\')"> </td></tr>';
		}
		document.getElementById("cartList").innerHTML = parseHTML;
	} else {
		alert('Your browser does not support HTML 5');
	}
}

function addToCart(name) {
	addedItems.push(name);
	localStorage.setItem("savedItems", JSON.stringify(addedItems));
	showCart();
}
function removeFromCart(name) {
	if (name != null) {
		addedItems.splice(addedItems.findIndex((element) => element == name), 1);
		localStorage.setItem("savedItems", JSON.stringify(addedItems));
		showCart();
	}
}
function ClearAll() {
	addedItems = [];
	localStorage.clear();
	showCart();
}