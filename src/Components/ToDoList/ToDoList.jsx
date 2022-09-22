import React, { useEffect, useState } from "react";

import ListItem from "../ListItem/ListItem";

import "./to-do-list.css";

function ToDoList() {
  const [createToDo, setcreateToDo] = useState([]);
  const [listItem, setListItem] = useState("");

  const addToList = () => {
    const id = new Date().getTime().toString();
    const newList = { item: listItem, id: id };
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

  const deleteItem = (item) => {
    setcreateToDo(createToDo.filter((todo) => todo.id !== item.id));
    alert(`${item} has been deleted successfully`);
  };

  console.log(createToDo);

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
        <ListItem createToDo={createToDo} deleteItem={deleteItem} />
      </div>
    </>
  );
}

export default ToDoList;
