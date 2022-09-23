import React, { useEffect, useState } from "react";

import ListItem from "../ListItem/ListItem";

import "./to-do-list.css";

function ToDoList() {
  const [createToDo, setcreateToDo] = useState([]);
  const [listItem, setListItem] = useState("");
  const [editTodo, setEditTodo] = useState(null);
  const [editText, setEditText] = useState("");

  //add to do's to list
  const addToList = () => {
    const id = new Date().getTime().toString();
    const newList = { item: listItem, id: id, completed: false };
    if (listItem !== "") {
      setcreateToDo([...createToDo, newList]);
    } else {
      alert("You have to fill the input field");
    }
    setListItem("");
  };

  useEffect(() => {
    const saveList = [...createToDo];
    localStorage.setItem("createdList", JSON.stringify(saveList));
  }, [createToDo]);

  // delete to do out of the list
  const deleteItem = (item) => {
    setcreateToDo(createToDo.filter((todo) => todo.id !== item.id));
  };

  //mark completed tasks checkbox
  const toggleComplete = (id) => {
    setcreateToDo(
      [...createToDo].map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  return (
    <>
      <div className="to__do-container">
        <div className="to__do-input">
          <input
            type="text"
            required
            value={listItem}
            onChange={(e) => setListItem(e.target.value)}
            placeholder="enter your task"
          />
        </div>
        <button onClick={addToList}>Add to list</button>
        <ListItem
          createToDo={createToDo}
          deleteItem={deleteItem}
          toggleComplete={toggleComplete}
        />
      </div>
    </>
  );
}

export default ToDoList;
