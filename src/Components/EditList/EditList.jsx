import React from "react";
import "./edit-list.css";

function EditList({ editTodoList, setEditText, editText, todo }) {
  return (
    <div className="edit__list-container">
      <form className="edit__list-form">
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
        <button onClick={() => editTodoList(todo.id)}>Submit</button>
      </form>
    </div>
  );
}

export default EditList;
