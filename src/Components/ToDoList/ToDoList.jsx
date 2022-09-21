import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ListItem from "../ListItem/ListItem";

import "./to-do-list.css";

function ToDoList() {
  const [createList, setCreateList] = useState([]);
  const [listItem, setListItem] = useState("");

  const addToList = () => {
    if (listItem !== "") {
      setCreateList([...createList, listItem]);
    } else {
      alert("You have to fill the input field");
    }
    setListItem("");
  };

  useEffect(() => {
    localStorage.setItem("createdList", createList);
  }, [createList]);

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
        <ListItem createList={createList} />
      </div>
    </>
  );
}

export default ToDoList;
