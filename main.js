// Create three variables that hold references to the list (<ul>), <input>, and <button> elements.
const list = document.querySelector("ul");
const input = document.querySelector("input");
const addButton = document.querySelector("button");

// Create a function that will run in response to the button being clicked.
function addItem() {
  // Store the current value of the input element in a variable.
  const itemInputValue = input.value;

  // Empty the input element by setting its value to an empty string — ''.
  input.value = '';

  // Create three new elements — a list item (<li>), <span>, and <button>, and store them in variables.
  const item = document.createElement('li');
  const span = document.createElement('span');
  const deleteBtn = document.createElement('button');

  // Append the span and the button as children of the list item.
  item.appendChild(span);
  item.appendChild(deleteBtn);

  // Set the text content of the span to the input element value you saved earlier.
  span.textContent = itemInputValue;

  // Set the text content of the button to 'Delete'.
  deleteBtn.textContent = 'Delete';

  // Append the list item as a child of the list.
  list.appendChild(item);

  // Attach an event handler to the delete button so that, when clicked, it will delete the entire list item.
  deleteBtn.addEventListener('click', function() {
    item.remove();
  });

  list.focus();
}

addButton.addEventListener('click', addItem);
