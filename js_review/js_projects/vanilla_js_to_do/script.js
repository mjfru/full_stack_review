let input = prompt("What would you like to do?");
const todos = ["make this app", "check for bugs"];

while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("**********");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log("**********");

  } else if (input === "new") {
    const newTodo = prompt("What are you adding to your list?");
    todos.push(newTodo);
    console.log(`${newTodo} added to the list!`);

  } else if (input === "delete") {
    const index = parseInt(prompt("Enter an index to delete task."));
    
    if (!Number.isNaN(index) && (index < todos.length)) {
      const deletedTodo = todos.splice(index, 1);
      console.log(`Todo task '${deletedTodo[0]}' has been deleted.`);
    } else {
      console.log("Invalid selection. Please choose again.")
    }
  }
  input = prompt("What would you like to do?");
}
console.log("Shutting down...");
