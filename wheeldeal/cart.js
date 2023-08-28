const Items = [
	{ Name: "Retro Rattletron 3000", Price: 100, Category: "Bil" },
	{ Name: "Nightmare Flash", Price: 15, Category: "Cykel" }
]
let addedItems = ["Test Car", "Test Car 2", "Test Car 3", "Test Car 4", "Test Car 5", "Test Car 6"];
sessionStorage.setItem("savedItems", JSON.stringify(addedItems));

function CheckBrowser() {
	if ('localStorage' in window && window['localStorage'] !== null) {
		return true;
	}
	else return false;
}
function showCart() {
	if (CheckBrowser()) {
		var parseHTML = "";
		sessionStorage.setItem("savedItems", JSON.stringify(addedItems));

		for (i = 0; i< addedItems.length; i++) {
			parseHTML += '<tr class="cartItem"><td>' + addedItems[i] + 
			'</td> <td><input type="button" value="Remove Item" onclick="removeFromCart(\''+ addedItems[i] +'\')"> </td></tr>';
		}
		document.getElementById("cartList").innerHTML = parseHTML;

		alert(JSON.parse(sessionStorage.getItem(savedItems)));
	} else {
		alert('Your browser does not support HTML 5');
	}
}

function addToCart(name) {
	addedItems.push(name);
	showCart();
}
function removeFromCart(name) {
	if (name != null) {
		addedItems.splice(addedItems.findIndex((element) => element == name), 1);
		showCart();
	}
}
function ClearAll() {
	addedItems = [];
	localStorage.clear();
	showCart();
}