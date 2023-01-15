let listOfTodoItems = ["item 1", "item 2", "item 3"];
/*let listOfTodoItems2 = [
  { description: "Boodschappen doen Aldi", position: 2 },
  { description: "Factuur Engie betalen", position: 0 },
  { description: "Cadeau Arnaud kopen", position: 1 },
];*/
document.addEventListener("DOMContentLoaded", init);

function init() {
  document.querySelector("#addButton").addEventListener("click", createItem);
  printAllToDoItems();
}

function createItem(e) {
  const inputValue = document.querySelector("#inputText").value;
  listOfTodoItems.push(inputValue);
  printAllToDoItems();
}

function deleteItem(e) {
  const contentOfItemToDelete = e.target.dataset.content_from_todo;
  const indexFromItemIWantToDelete = listOfTodoItems.indexOf(
    contentOfItemToDelete
  );
  listOfTodoItems.splice(indexFromItemIWantToDelete, 1);
  printAllToDoItems();
}

function printAllToDoItems() {
  document.getElementById("todo-list").innerHTML = "";
  let counter = 0;

  listOfTodoItems.forEach((todoItem) => {
    const uniqueId = "todo-item-in-lijst-" + counter;

    const html = `<li id="${uniqueId}">${todoItem} 
      <button class="delete-todo-item-button" data-content_from_todo="${todoItem}">delete</button>
      <button class="up-button" data-from_up_button="${todoItem}">up</button>
      <button class="down-button" data-from_down_button="${todoItem}">down</button></li>`;
    document.getElementById("todo-list").insertAdjacentHTML("beforeend", html);

    document
      .querySelector(`#${uniqueId} .delete-todo-item-button`)
      .addEventListener("click", deleteItem);

    document
      .querySelector(`#${uniqueId} .up-button`)
      .addEventListener("click", moveUpListItem);

    document
      .querySelector(`#${uniqueId} .down-button`)
      .addEventListener("click", moveDownListItem);

    counter++;
  });
}

function moveUpListItem(e) {
  const contentOfItemsToSwap = e.target.dataset.from_up_button;
  const indexFromItemToBeSwapped =
    listOfTodoItems.indexOf(contentOfItemsToSwap);
  const indexFromItemToBeSwapped2 =
    listOfTodoItems.indexOf(contentOfItemsToSwap) - 1;

  if (listOfTodoItems.indexOf(contentOfItemsToSwap) == 0) {
  } else {
    swapElements(
      listOfTodoItems,
      indexFromItemToBeSwapped,
      indexFromItemToBeSwapped2
    );

    function swapElements(
      listOfTodoItems,
      indexFromItemToBeSwapped,
      indexFromItemToBeSwapped2
    ) {
      // Step 1
      let temp = listOfTodoItems[indexFromItemToBeSwapped];

      // Step 2
      listOfTodoItems[indexFromItemToBeSwapped] =
        listOfTodoItems[indexFromItemToBeSwapped2];

      // Step 3
      listOfTodoItems[indexFromItemToBeSwapped2] = temp;
    }

    console.log(listOfTodoItems); // [ 4, 2, 3, 1 ]

    printAllToDoItems();
  }
}

function moveDownListItem(e) {
  const contentOfItemsToSwap = e.target.dataset.from_down_button;
  const indexFromItemToBeSwapped =
    listOfTodoItems.indexOf(contentOfItemsToSwap);
  const indexFromItemToBeSwapped2 =
    listOfTodoItems.indexOf(contentOfItemsToSwap) + 1;

  if (
    listOfTodoItems.indexOf(contentOfItemsToSwap) ==
    listOfTodoItems.length - 1
  ) {
  } else {
    swapElements(
      listOfTodoItems,
      indexFromItemToBeSwapped,
      indexFromItemToBeSwapped2
    );

    function swapElements(
      listOfTodoItems,
      indexFromItemToBeSwapped,
      indexFromItemToBeSwapped2
    ) {
      // Step 1
      let temp = listOfTodoItems[indexFromItemToBeSwapped];

      // Step 2
      listOfTodoItems[indexFromItemToBeSwapped] =
        listOfTodoItems[indexFromItemToBeSwapped2];

      // Step 3
      listOfTodoItems[indexFromItemToBeSwapped2] = temp;
    }

    console.log(listOfTodoItems); // [ 4, 2, 3, 1 ]
    printAllToDoItems();
  }
}
