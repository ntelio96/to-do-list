import React, { useEffect, useState } from "react";

import ListItem from "../ListItem/ListItem";

import "./to-do-list.css";

function ToDoList() {
  const [createList, setCreateList] = useState([]);
  const [listItem, setListItem] = useState("");

  const addToList = () => {
    const id = new Date().getTime().toString();
    const newList = { item: listItem, id: id };
    if (listItem !== "") {
      setCreateList([...createList, newList]);
    } else {
      alert("You have to fill the input field");
    }
    setListItem("");
  };

  useEffect(() => {
    localStorage.setItem("createdList", JSON.stringify(createList));
  }, [createList]);

  const deleteItem = (item) => {
    setCreateList(createList.filter((itemList) => itemList.id !== item.id));
    alert(`${item} has been deleted successfully`);
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
        <ListItem createList={createList} deleteItem={deleteItem} />
      </div>
    </>
  );
}

export default ToDoList;
