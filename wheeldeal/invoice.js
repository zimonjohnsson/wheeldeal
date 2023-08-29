
function loadCart() {
    var parseHTML = "<tr><th>Description</th><th>Quantity</th><th>Total</th></tr>";

    parseHTML += "<tr> <td>Product 1</td> <td>2</td> <td>$100.00</td> </tr>";

    document.getElementById("invList").innerHTML = parseHTML;
}