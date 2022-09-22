import React from "react";

function ListItem({ createToDo, deleteItem, toggleComplete }) {
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
                  <button>edit</button>
                  <button onClick={() => deleteItem(item)}>delete</button>
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
