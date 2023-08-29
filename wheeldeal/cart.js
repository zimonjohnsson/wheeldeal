const Items = [
	{ Name: "Retro Rattletron 3000", Price: 100 },
	{ Name: "Nightmare Flash", Price: 15 }
]
let addedItems = [];
let addedCount = [];
if (localStorage.getItem("savedItems") != null) addedItems = JSON.parse(localStorage.getItem("savedItems"));
if (localStorage.getItem("savedCount") != null) addedCount = JSON.parse(localStorage.getItem("savedCount"));

function CheckBrowser() {
	if ('localStorage' in window && window['localStorage'] !== null) {
		return true;
	}
	else return false;
}
function showCart() {
	if (CheckBrowser()) {
		var parseHTML = "";
		if (localStorage.getItem("savedItems") != null) addedItems = JSON.parse(localStorage.getItem("savedItems"));
		if (localStorage.getItem("savedCount") != null) addedCount = JSON.parse(localStorage.getItem("savedCount"));

		for (i = 0; i< addedItems.length; i++) {
			parseHTML += '<tr class="cartItem"> <td>' + addedItems[i] + 
			'</td><td>'+ '</td>' 
			+'<td><input type="button" value="Remove" onclick="removeFromCart(\''+ addedItems[i] +'\')"> </td></tr>';
		}
		document.getElementById("cartList").innerHTML = parseHTML;
		CountCartItems();
	} else {
		alert('Your browser does not support HTML 5');
	}
}

function addToCart(name) {
	if (false) {
		
	} else  {
		if (localStorage.getItem("savedItems") != null) addedItems = JSON.parse(localStorage.getItem("savedItems"));
		addedItems.push(name);
		localStorage.setItem("savedItems", JSON.stringify(addedItems));
		showCart();
	}
}

function removeFromCart(name) {
	if (name != null) {
		if (localStorage.getItem("savedItems") != null) addedItems = JSON.parse(localStorage.getItem("savedItems"));
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

function CountCartItems() {
	if (localStorage.getItem("savedItems") != null) addedItems = JSON.parse(localStorage.getItem("savedItems"));
	document.getElementById("countCart").innerHTML = "Total: "+ addedItems.length;
}