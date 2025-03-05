import React, { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";

function AddTodoName({ onNewItens }) {
  const [todoName, setTodoName] = useState("");
  const [todoDueDate, setDueDate] = useState("");

  const submitTodoName = (e) => {
    setTodoName(e.target.value);
  };

  const submitTodoDueDate = (e) => {
    setDueDate(e.target.value);
  };

  const buttonClicked = () => {
    onNewItens(todoName, todoDueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <div>
      <div className="container text-center">
        <div className="row kg-row">
          <div className="col-6">
            <input
              type="text"
              value={todoName}
              placeholder="Enter the Todo number"
              onChange={submitTodoName}
            />
          </div>
          <div className="col-4">
            <input
              type="date"
              value={todoDueDate}
              onChange={submitTodoDueDate}
            />
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-success kg-button"
              onClick={buttonClicked}
            >
              <IoAddCircleOutline />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTodoName;
