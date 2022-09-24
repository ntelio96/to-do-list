import React from "react";
import { useState } from "react";
import EditList from "../EditList/EditList";

function ListItem({
  createToDo,
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
          {createToDo !== [] ? (
            <ul>
              {createToDo.map((item) => (
                <>
                  <li key={item.id}>{item.item}</li>
                  <input
                    type="checkbox"
                    onChange={() => toggleComplete(item.id)}
                    checked={item.completed}
                  />
                  <button onChange={setEditTodo(item.id)}>edit</button>
                  <button onClick={() => deleteItem(item)}>delete</button>
                  {}
                  <EditList
                    editTodoList={editTodoList}
                    setEditText={setEditText}
                    editText={editText}
                  />
                </>
              ))}
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default ListItem;
