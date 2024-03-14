// import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import React, { useState } from "react";

function App() {
  const onDelete = (todo) => {
    console.log("I am on delete", todo);
    setTodos(
      todo.filter((e) => {
        return e !== todo;
      })
    );
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);
  };

  const [todos, setTodos] = useState([
    {
      srno: 1,
      title: "Go to the gym",
      desc: "Leg day",
    },
    {
      srno: 2,
      title: "drink water",
      desc: "complete daily water intake of 3 ltr",
    },
    {
      srno: 3,
      title: "Meditation",
      desc: "complete your daily meditation session",
    },
  ]);

  return (
    <>
      <Header title="MyTodosList" searchBar={true} />
      <Todos todo={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
