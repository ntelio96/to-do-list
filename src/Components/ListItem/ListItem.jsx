import React from "react";

function ListItem({ createList }) {
  return (
    <>
      <div className="list__item-container">
        <div className="list__item-list">
          {createList !== [] ? (
            <ul>
              {createList.map((item) => (
                <li key={item.id}>
                  {item.item} {item.id}
                </li>
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
