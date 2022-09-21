import React from "react";

function ListItem({ createList }) {
  return (
    <>
      <div className="list__item-container">
        <div className="list__item-list">
          {createList !== [] ? (
            <ul>
              {createList.map((item, index) => (
                <li key={index}>{item}</li>
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
