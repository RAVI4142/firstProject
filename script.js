var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelectorAll("li");


button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function inputLength() {
	return input.value.length;
}

function removeLi() {
	this.parentNode.remove();
}

function doneThrough() {
	this.classList.toggle("done");
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.addEventListener("click", doneThrough)

	var dele = document.createElement("button");
	dele.appendChild(document.createTextNode("DELETE"));
	li.appendChild(dele);
	dele.addEventListener("click", removeLi)
	
	input.value = "";
}

for (var i=0; i<list.length; i++){
	list[i].addEventListener("click", doneThrough);

	var dele = document.createElement("button");
	dele.appendChild(document.createTextNode("DELETE"));
	dele.addEventListener("click", removeLi)
	list[i].appendChild(dele);

}

