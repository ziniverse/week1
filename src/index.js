const heading = document.getElementById("heading");
const myButton = document.getElementById("my-button");
const list = document.getElementById("list");
const textInput = document.getElementById("textinput");
const addDataButton = document.getElementById("adddata");

function handleClick() {
  console.log("Hello world");
  heading.textContent = "My notebook";
}

function handleAddData() {
  const listItem = document.createElement("li");
  listItem.textContent = textInput.value;
  list.appendChild(listItem);
}

myButton.addEventListener("click", handleClick);
addDataButton.addEventListener("click", handleAddData);
