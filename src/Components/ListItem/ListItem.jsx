import React from "react";

function ListItem({ createList, deleteItem }) {
  const deleteItemByID = () => deleteItem(JSON.stringify(createList));

  return (
    <>
      <div className="list__item-container">
        <div className="list__item-list">
          {createList !== [] ? (
            <ul>
              {createList.map((item) => (
                <>
                  <li key={item.id}>{item.item}</li>
                  <button>edit</button>
                  <button onClick={deleteItemByID}>delete</button>
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
