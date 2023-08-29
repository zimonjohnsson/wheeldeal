const Items = [
	{ Name: "Retro Rattletron 3000", Price: 100 },
	{ Name: "Nightmare Flash", Price: 15 }
]
let addedItems = [];
let addedCounts = [];
if (localStorage.getItem("savedItems") != null) addedItems = JSON.parse(localStorage.getItem("savedItems"));
if (localStorage.getItem("savedCount") != null) addedCounts = JSON.parse(localStorage.getItem("savedCount"));

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
		if (localStorage.getItem("savedCount") != null) addedCounts = JSON.parse(localStorage.getItem("savedCount"));

		for (i = 0; i< addedItems.length; i++) {
			parseHTML += '<tr class="cartItem"> <td>' + addedItems[i] + 
			'</td><td>'+ addedCounts[i] +'</td>' 
			+'<td><input type="button" value="Remove" onclick="removeFromCart(\''+ addedItems[i] +'\')"> </td></tr>';
		}
		document.getElementById("cartList").innerHTML = parseHTML;
		CountCartItems();
	} else {
		alert('Your browser does not support HTML 5');
	}
}

function addToCart(name) {
	if (localStorage.getItem("savedItems") != null) addedItems = JSON.parse(localStorage.getItem("savedItems"));
	if (localStorage.getItem("savedCount") != null) addedCounts = JSON.parse(localStorage.getItem("savedCount"));
	var itemExists = addedItems.includes(name);

	if (itemExists) {
		addedCounts[addedItems.indexOf(name)]++;
		localStorage.setItem("savedCount", JSON.stringify(addedCounts))
	} else  {
		addedItems.push(name);
		localStorage.setItem("savedItems", JSON.stringify(addedItems));
		localStorage.setItem("savedCount", JSON.stringify(addedCounts))
	}
	showCart();
}

function removeFromCart(name) {
	if (name != null) {
		if (localStorage.getItem("savedItems") != null) addedItems = JSON.parse(localStorage.getItem("savedItems"));
		if (localStorage.getItem("savedCount") != null) addedCounts = JSON.parse(localStorage.getItem("savedCount"));
		var itemExists = addedItems.includes(name);

		if (itemExists && addedCounts[addedItems.indexOf(name)] > 1) {
			addedCounts[addedItems.indexOf(name)]--;
			localStorage.setItem("savedCount", JSON.stringify(addedCounts))
		} else {
			addedItems.splice(addedItems.indexOf(name), 1);
			localStorage.setItem("savedItems", JSON.stringify(addedItems));
			localStorage.setItem("savedCount", JSON.stringify(addedCounts))
		}
	}
	showCart();
}

function ClearAll() {
	addedItems = [];
	addedCounts = [];
	
	showCart();
}

function CountCartItems() {
	if (localStorage.getItem("savedItems") != null) addedItems = JSON.parse(localStorage.getItem("savedItems"));
	document.getElementById("countCart").innerHTML = "Total: "+ addedItems.length;
}