var form = document.getElementById("form");
var table = document.getElementById("table");
form.addEventListener("submit", addItem);
function addItem(e) {
    e.preventDefault();
    var customerName = document.getElementById("customerName").value;
    var itemPurchased = document.getElementById("itemPurchased").value;
    var quantity = document.getElementById("quantity").value;
    var date = document.getElementById("DATE").value;
    var row = table.insertRow(2);
    var customerCell = row.insertCell(0);
    customerCell.innerHTML = customerName;
  
    var ItemCell = row.insertCell(1);
    ItemCell.innerHTML = itemPurchased;
  
    var quantityCell = row.insertCell(2);
    quantityCell.innerHTML = quantity;
  
    var dateCell = row.insertCell(3);
    dateCell.innerHTML = date;
  
    var DeleteCell = row.insertCell(4);
    DeleteCell.innerHTML = "<button>x</button>";
  
}