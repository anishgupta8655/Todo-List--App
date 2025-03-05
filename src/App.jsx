import React, { useState } from "react";
import AppName from "./Components/AppName";
import "./App.css";
import AddTodoName from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import WelcomeMassage from "./Components/WelcomeMassage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewTodoItems = (itemName, itemDueDate) => {

    // console.log(`New items added:  ${itemName} , itemsDate:${itemDueDate}`);

    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    // console.log(todoItemName)
    const newTodoItem = todoItems.filter(
      (items) => items.name !== todoItemName
    );
    setTodoItems(newTodoItem);
    alert("Delete item " + todoItemName );
  };
  return (
    <div>
      <center className="todo-container">
        <AppName />
        <AddTodoName onNewItens={handleNewTodoItems} />

        {todoItems.length === 0 && <WelcomeMassage />}
        <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
      </center>
    </div>
  );
}

export default App;
