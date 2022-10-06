import React, { useState } from "react";

import { AiOutlineEdit } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";

import EditList from "../EditList/EditList";
import "./list-item.css";

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
  const [toggleModal, setToggleModal] = useState(false);

  const handleEditModal = (id) => {
    setEditTodo(id);
    setToggleModal(true);
  };

  return (
    <>
      <div className="list__item-container">
        <div className="list__item-list">
          {createTodo.map((todo) => (
            <ul key={todo.id}>
              {toggleModal && editTodo === todo.id && (
                <EditList
                  editTodoList={editTodoList}
                  setEditText={setEditText}
                  editText={editText}
                  todo={todo}
                  closeModal={setToggleModal}
                />
              )}
              <div className="list__item-center">
                <input
                  type="checkbox"
                  onChange={() => toggleComplete(todo.id)}
                  checked={todo.completed}
                />
                <li>{todo.item}</li>
                <div className="list__item-buttons">
                  <button
                    className="edit-btn"
                    onClick={() => handleEditModal(todo.id)}
                  >
                    <AiOutlineEdit className="size" />
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => deleteItem(todo)}
                  >
                    <MdDeleteForever />
                  </button>
                </div>
              </div>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}

export default ListItem;
