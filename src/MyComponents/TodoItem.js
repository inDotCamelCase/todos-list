import React from "react";

export const TodoItem = ({ todo,onDelete }) => {
  return (
    <div>
      <h4>Title = {todo.title}</h4>
      <p>Desc ={todo.desc}</p>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => {
          onDelete(todo);
        }}
      >
        Delete
      </button>
    </div>
  );
};

// export default TodoItem;
