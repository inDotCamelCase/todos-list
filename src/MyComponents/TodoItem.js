import React from "react";

export const TodoItem = ({ todos, onDelete }) => {
  return (
    <div>
      <h4>Title = {todos.title}</h4>
      <p>Desc ={todos.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

// export default TodoItem;
