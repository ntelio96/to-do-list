import React, { useEffect, useState } from "react";

import ListItem from "../ListItem/ListItem";

import "./to-do-list.css";

function ToDoList() {
  const [createTodo, setCreateTodo] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [listItem, setListItem] = useState("");
  const [editTodo, setEditTodo] = useState(null);
  const [editText, setEditText] = useState("");

  //add to do's to list
  const addToList = () => {
    const id = new Date().getTime().toString();
    const newTodo = { item: listItem, id: id, completed: false };
    if (listItem) {
      setCreateTodo([...createTodo, newTodo]);
    } else {
      alert("You have to fill the input field");
    }
    setListItem("");
  };

  useEffect(() => {
    const temporary = JSON.stringify(createTodo);
    localStorage.setItem("todos", temporary);
  }, [createTodo]);

  // delete to do out of the list
  const deleteItem = (item) => {
    setCreateTodo(createTodo.filter((todo) => todo.id !== item.id));
  };

  //mark completed tasks checkbox
  const toggleComplete = (id) => {
    setCreateTodo(
      [...createTodo].map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  // more readable example (edit)
  const editTodoList = (id) => {
    const updatedTodos = [...createTodo].map((todo) => {
      if (todo.id === id) {
        todo.item = editText;
      }
      return todo;
    });

    setCreateTodo(updatedTodos);
    setEditTodo(null);
    setEditText("");
  };

  return (
    <>
      <div className="todo__container">
        <div className="todo__input">
          <input
            type="text"
            required
            value={listItem}
            onChange={(e) => setListItem(e.target.value)}
            placeholder="enter your task"
          />
          <button className="todo__button" onClick={addToList}>
            Add to list
          </button>
        </div>
        <ListItem
          createTodo={createTodo}
          deleteItem={deleteItem}
          toggleComplete={toggleComplete}
          editTodoList={editTodoList}
          setEditTodo={setEditTodo}
          setEditText={setEditText}
          editText={editText}
          editTodo={editTodo}
        />
      </div>
    </>
  );
}

export default ToDoList;
