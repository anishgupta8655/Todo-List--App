import React from "react";
import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div>
      <div className="items-container">
        {todoItems.map((items) => (
          <TodoItem
            todoDate={items.dueDate}
            todoName={items.name}
            onDeleteClick={onDeleteClick}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoItems;
