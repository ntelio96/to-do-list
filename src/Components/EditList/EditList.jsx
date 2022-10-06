import "./edit-list.css";

import { AiFillCloseCircle } from "react-icons/ai";

function EditList({ editTodoList, setEditText, editText, todo, closeModal }) {
  return (
    <div className="edit__list-container">
      <button className="edit__list-exit" onClick={() => closeModal(false)}>
        <AiFillCloseCircle />
      </button>
      <h3>Edit Todo</h3>
      <p>{todo.item}</p>
      <form className="edit__list-form">
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
        <button onClick={() => editTodoList(todo.id)}>Submit</button>
      </form>
    </div>
  );
}

export default EditList;
