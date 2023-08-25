function CheckBrowser() {
    if ('localStorage' in window && window['localStorage'] !== null) {
        return true;
    }
    else return false;
}
function showCart() {
    if (CheckBrowser()) {
        
    } else {
        alert('Cannot save shopping list as your browser does not support HTML 5');
    }
}

function addToCart() {

}
function removeFromCart() {

}

let Items = [
    { Name: "Retro Rattletron 3000", Price: 100, Category: "Bil" },
    { Name: "Nightmare Flash", Price: 15, Category: "Cykel" }
]