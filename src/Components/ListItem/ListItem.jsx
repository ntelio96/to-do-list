import React from "react";

function ListItem({ createToDo, deleteItem }) {
  return (
    <>
      <div className="list__item-container">
        <div className="list__item-list">
          {createToDo !== [] ? (
            <ul>
              {createToDo.map((item) => (
                <>
                  <li key={item.id}>{item.item}</li>
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
