
var itemInput = document.getElementById("itemInput");
var itemList = document.getElementById("groceryItems");

let items;
if (localStorage.getItem('items')) {
  items = JSON.parse(localStorage.getItem('items'));
} else {
  items = [];
}


// add items 
function addItem() {
	// Get the item value from the input field
	var itemValue = itemInput.value.trim();

	// Check if the item value is not empty
	if (itemValue !== "") {
		// Create a new list item
		var li = document.createElement("li");
		li.textContent = itemValue;


		// Add "Done" icon  to the list item
		var doneBtn = document.createElement("a");
		doneBtn.innerHTML = '<i class="fas fa-edit fa-xs" style="color: #13d110; background-color: white; float:right; margin-left:5px"></i>';
		doneBtn.addEventListener("click", function () {
			li.classList.add("done-item");
	

		});

		// Add "Clear" icon to the list item
		var clearBtn = document.createElement("a");
		clearBtn.innerHTML = '<i class="fas fa-trash fa-xs" style="float: right; color:red; margin-left:5px;"> </i>';
		clearBtn.addEventListener("click", function () {
			itemList.removeChild(li);
		});
		// Add the buttons to the list item
		
		li.appendChild(clearBtn);
		li.appendChild(doneBtn);

		// Add the list item to the list
		itemList.appendChild(li);

		// Clear the input field
		itemInput.value = "";
	}
	else {
		alert("Please,add item(s) to Grocery Bud!");
	}
}


// Clear all items from the list
function clearItems() {
	itemList.innerHTML = "";
	// localStorage.clear();
}