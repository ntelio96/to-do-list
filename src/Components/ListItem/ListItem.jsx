import React from "react";
import { useState } from "react";
import EditList from "../EditList/EditList";

function ListItem({
  createTodo,
  deleteItem,
  toggleComplete,
  editTodoList,
  setEditTodo,
  editTodo,
  setEditText,
  editText,
}) {
  return (
    <>
      <div className="list__item-container">
        <div className="list__item-list">
          {createTodo.map((todo) => (
            <ul key={todo.id}>
              {editTodo === todo.id && (
                <EditList
                  editTodoList={editTodoList}
                  setEditText={setEditText}
                  editText={editText}
                />
              )}
              <li>{todo.item}</li>
              <input
                type="checkbox"
                onChange={() => toggleComplete(todo.id)}
                checked={todo.completed}
              />
              <button onClick={() => setEditTodo(todo.id)}>edit</button>
              <button onClick={() => deleteItem(todo)}>delete</button>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}

export default ListItem;

{
  /* <EditList
  editTodoList={editTodoList}
  setEditText={setEditText}
  editText={editText}
/> */
}
