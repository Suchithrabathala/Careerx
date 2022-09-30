function todoList() {
    var item = document.getElementById('todoInput').value
    var text = document.createTextNode(item)
    var newItem = document.createElement("li")
    newItem.appendChild(text)
    var completed_button = document.createElement('input');
    completed_button.type = "button";
    completed_button.value = "Completed";
    newItem.appendChild(completed_button);
    document.getElementById("todoList").appendChild(newItem)
  }