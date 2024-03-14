import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="text-center my-3">Todos List</h3>
      {props.todo.length !== 0
        ? "No totos to show"
        : props.todo.map((todo) => {
            return (
              <TodoItem todo={todo} key={todo.srno} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
};
